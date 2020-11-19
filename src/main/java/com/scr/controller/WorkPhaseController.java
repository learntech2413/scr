package com.scr.controller;

import java.sql.Timestamp;
import java.util.Calendar;
import java.util.List;
import java.util.Optional;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import com.scr.util.Constants;
import com.scr.util.Helper;
import com.scr.message.response.ResponseStatus;
import com.scr.model.WPADailyProgress;
import com.scr.model.WorkGroup;
import com.scr.model.WorkPhases;
import com.scr.model.Works;
import com.scr.services.WorkPhaseSerivce;
import com.scr.services.WorksServices;

@RestController
@RequestMapping("/scr/api")

public class WorkPhaseController {
	
	
private Logger log = Logger.getLogger(WorkPhaseController.class);
	
	@Autowired
	private WorksServices worksServices;
	
	@Autowired
	private WorkPhaseSerivce workPhaseService;
	
	@CrossOrigin(origins = "*")
	
	@RequestMapping(value = "/findworkPhasesBasedOnWorkId/{workId}" , method = RequestMethod.GET , headers = "Accept=application/json")
	public List<WorkPhases> findworkPhasesBasedOnWorkId(@PathVariable("workId") Integer workId){
		log.info("Enter into findworkPhasesBasedOnWorkId function ");
		List<WorkPhases> workPhases = null;
		try {
			Optional<Works> work = worksServices.findById(workId);
			if (work.isPresent()) {
				workPhases = workPhaseService.getWorkPhasesBasedOnWorkId(work.get());
			}
			return workPhases;
		} catch (Exception e) {
			log.error("Error >>  while find work Group Details by work id, "+e.getMessage());
		}
		return workPhases;
	}
	
	@RequestMapping(value = "/addWorkPhases", method = RequestMethod.POST , headers = "Accept=application/json")
	@ResponseBody
	public ResponseStatus save(@RequestBody WorkPhases workPhases){
		log.info("Enter into save function with below request parameters ");
		log.info("Request Parameters = "+workPhases.toString());		
		try {
			log.info("Calling service with request parameters.");
			   workPhaseService.save(workPhases);
				log.info("Preparing the return response");
				return Helper.findResponseStatus("Project phases added successfully", Constants.SUCCESS_CODE);
			}catch(NullPointerException npe) {
				log.error("ERROR >> While adding Project phases data. "+npe.getMessage());
				return Helper.findResponseStatus("Project phases save is Failed with "+npe.getMessage(), Constants.FAILURE_CODE);
			}
			catch (Exception e) {
				log.error("ERROR >> While adding Project phases data. "+e.getMessage());
				return Helper.findResponseStatus("Project phases save is Failed with "+e.getMessage(), Constants.FAILURE_CODE);
			}
	}
	
/*	@RequestMapping(value = "/updateWorkPhases" ,method = RequestMethod.PUT , headers = "Accept=application/json")
	public ResponseStatus updateMake(@RequestBody WorkPhases workPhase) {
		log.info("Enter into update function with below request parameters ");
		log.info("Request Parameters = "+workPhase.toString());
		try {
			log.info("Calling service with request parameters.");
		
			workPhaseService.save(workPhase);
			log.info("Preparing the return response");
		return Helper.findResponseStatus("Project phases updated successfully", Constants.SUCCESS_CODE);
	}catch(NullPointerException npe) {
		log.error("ERROR >> While updating Project phases data. "+npe.getMessage());
		return Helper.findResponseStatus("Project phases update is Failed with "+npe.getMessage(), Constants.FAILURE_CODE);
	}
	catch (Exception e) {
		log.error("ERROR >> While updating Project phases data. "+e.getMessage());
		return Helper.findResponseStatus("Project phases update is Failed with "+e.getMessage(), Constants.FAILURE_CODE);
	}
		}*/
	
	@PostMapping(value="/updateWorkPhases")
	@ResponseBody
	public ResponseStatus updateWorkPhases(@RequestBody List<WorkPhases> workPhase) {
		log.info("*** Enter into updateWorkPhases function ***");
		try {			
			workPhaseService.updateWorkPhases(workPhase);
			log.info("Preparing the return response and updateWorkPhases function end ");
			return Helper.findResponseStatus("Project phases Data Added Successfully", Constants.SUCCESS_CODE);
		}catch(NullPointerException npe) {
			log.error("ERROR >> While adding Project phases Data. "+npe.getMessage());
			return Helper.findResponseStatus("Project phases Addition is Failed with "+npe.getMessage(), Constants.FAILURE_CODE);
		}
		catch (Exception e) {
			log.error("ERROR >> While adding Project phases Data. "+e.getMessage());
			return Helper.findResponseStatus("Project phases   Addition is Failed with "+e.getMessage(), Constants.FAILURE_CODE);
		}
	}
}
