package com.scr.controller;

import java.util.List;
import java.util.Optional;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.scr.message.response.ResponseStatus;
import com.scr.model.AssetMasterData;
import com.scr.services.AssetMasterDataService;
import com.scr.util.Constants;
import com.scr.util.Helper;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/scr/api")
public class AssetMasterDataController {
	static Logger log = LogManager.getLogger(AssetMasterDataController.class);

	@Autowired
	private AssetMasterDataService assetMasterDataService;
	
	@RequestMapping(value = "/findAllAssetMasterItems" , method = RequestMethod.GET , headers = "Accept=application/json")
	public List<AssetMasterData> findAllAssetMasterItems(){
		log.info("Enter into findAllAssetMasterItems function");
		List<AssetMasterData> assetMasterItem = null;
		try {
			log.info("Calling service for  assetMasterItem data");
			assetMasterItem = assetMasterDataService.findAll();
			log.info("Fetched assetMasterItem data ***"+assetMasterItem.size());
		}catch (NullPointerException npe) {
			log.error("ERROR >>> while fetching the assetMaster data = "+npe.getMessage());
		}
		catch (Exception e) {
			log.error("ERROR >>> while fetching the assetMaster data = "+e.getMessage());
		}
		log.info("Exit from findAllAssetMasterItems function");
		return assetMasterItem;
	}
	
	@RequestMapping(value = "/addAssetMasterItem" , method = RequestMethod.POST , headers = "Accept=application/json")
	public ResponseStatus addAssetMasterItem(@RequestBody AssetMasterData assetMasterData) {
		log.info("Enter into addAssetMasterItem function with below request parameters ");
		log.info("Request Parameters = "+assetMasterData.toString());
		try {
			log.info("Calling service with request parameters.");
			assetMasterDataService.save(assetMasterData);
			log.info("Preparing the return response");
			return Helper.findResponseStatus("AssetMaster added successfully", Constants.SUCCESS_CODE);
		}catch(NullPointerException npe) {
			log.error("ERROR >> While adding AssetMaster data. "+npe.getMessage());
			return Helper.findResponseStatus("AssetMaster Data save is Failed with "+npe.getMessage(), Constants.FAILURE_CODE);
		}
		catch (Exception e) {
			log.error("ERROR >> While adding AssetMaster data. "+e.getMessage());
			return Helper.findResponseStatus("AssetMaster save is Failed with "+e.getMessage(), Constants.FAILURE_CODE);
		}
	}
	
	
	@RequestMapping(value = "/findAssetMasterItemById/{id}" , method = RequestMethod.GET , headers = "Accept=application/json")
	public ResponseEntity<AssetMasterData> findAssetMasterItemById(@PathVariable Long id){
		Optional<AssetMasterData> assetMasterData = null;
		try {
			log.info("Selected Asset Master Data Id = "+id);
			assetMasterData = assetMasterDataService.findAssetMasterItemById(id);
			if(assetMasterData.isPresent()) {
				log.info("Asset Master Data = "+assetMasterData.get());
				return new ResponseEntity<AssetMasterData>(assetMasterData.get(), HttpStatus.OK);
			}
			else
				return new ResponseEntity<AssetMasterData>(assetMasterData.get(), HttpStatus.CONFLICT);
		} catch (Exception e) {
			log.error("Error >>  while find Asset Master Data Details by id, "+e.getMessage());
			return new ResponseEntity<AssetMasterData>(assetMasterData.get(), HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@RequestMapping(value = "/updateAssetMasterData" ,method = RequestMethod.PUT , headers = "Accept=application/json")
	public ResponseStatus updateAssetMasterData(@RequestBody AssetMasterData assetMasterData) {
		log.info("Enter into updateAssetMasterData function with below request parameters ");
		log.info("Request Parameters = "+assetMasterData.toString());
		try {
			log.info("Calling service with request parameters.");
			assetMasterDataService.save(assetMasterData);
			log.info("Preparing the return response");
			return Helper.findResponseStatus("AssetMasterData updated successfully", Constants.SUCCESS_CODE);	
		}catch(NullPointerException npe) {
			log.error("ERROR >> While updating AssetMaster   data. "+npe.getMessage());
			return Helper.findResponseStatus("Asset Master Data update is Failed with "+npe.getMessage(), Constants.FAILURE_CODE);
		}
		catch (Exception e) {
			log.error("ERROR >> While updating AssetMaster data. "+e.getMessage());
			return Helper.findResponseStatus("AssetMasterData update is Failed with "+e.getMessage(), Constants.FAILURE_CODE);
		}
	}
	
	@RequestMapping(value = "/deleteAssetMasterData/{id}" ,method = RequestMethod.DELETE , headers = "Accept=application/json")
	public ResponseStatus deleteAssetMasterDataById(@PathVariable Long id) {
		log.info("Enter into deleteAssetMasterDataById function");
		log.info("Selected  AssetMaster Data Id = "+id);
		try {
			assetMasterDataService.deleteAssetMasterDataById(id);
			return Helper.findResponseStatus("AssetMasterData Deleted successfully", Constants.SUCCESS_CODE);
		} catch (NullPointerException npe) {
			log.error("ERROR >> While deleting Asset Master Data"+npe.getMessage());
			return Helper.findResponseStatus("Asset Master Data Deletion is Failed with "+npe.getMessage(), Constants.FAILURE_CODE);			
		} catch (Exception e) {
			log.error("ERROR >> While deleting Asset Master Data"+e.getMessage());
			return Helper.findResponseStatus("Asset Master Data Deletion is Failed with "+e.getMessage(), Constants.FAILURE_CODE);			
		}
	}
	@RequestMapping(value = "/getAssetIdBasedonAssetTypeAndFacilityId/{assetType}/{facilityId}",method = RequestMethod.GET  , headers="accept=application/json" )
	public ResponseEntity<List<AssetMasterData>> findAssetIdAndFacilityId(@PathVariable("assetType") String assetType ,@PathVariable("facilityId") String facilityId){
		List<AssetMasterData> assetIdsList= assetMasterDataService.findByAssetTypeAndFacilityId(assetType, facilityId);
			return new ResponseEntity<List<AssetMasterData>>(assetIdsList, HttpStatus.OK);		
	}
}
