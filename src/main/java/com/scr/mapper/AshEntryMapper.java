package com.scr.mapper;

import java.sql.Timestamp;
import java.util.Calendar;
import java.util.Optional;

import javax.validation.Valid;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import com.scr.message.request.ASHEntryRequest;
import com.scr.message.request.AssetsScheduleHistoryRequest;
import com.scr.message.request.DriveRequest;
import com.scr.model.AssetScheduleActivityRecord;
import com.scr.model.AssetsScheduleHistory;
import com.scr.model.Drives;
import com.scr.model.Facility;


@Component
public class AshEntryMapper {
	static Logger logger = LogManager.getLogger(AshEntryMapper.class);
	
	@Value("${stipulation.path}")
	private String stipulationPath;
	
	@Value("${inspection.path}")
	private String inspectionPath;
	
	public AssetScheduleActivityRecord prepareASHEntryModel(@Valid ASHEntryRequest ashRequest) throws Exception {
		AssetScheduleActivityRecord ashar = null;
		logger.info("Preparing the ash model object");
		try {
		if (ashRequest != null) {
			ashar = new AssetScheduleActivityRecord();

			ashar.setAssetId(ashRequest.getAssetId());
			ashar.setAssetType(ashRequest.getAssetType());
			ashar.setCreatedBy(ashRequest.getCreatedBy());
			ashar.setDetailsOfMaint(ashRequest.getDetailsOfMaint());
			ashar.setDoneBy(ashRequest.getDoneBy());
			ashar.setFacilityId(ashRequest.getFacilityId());
			ashar.setScheduleCode(ashRequest.getScheduleCode());
			ashar.setRemarks(ashRequest.getRemarks());
			ashar.setScheduleDate(ashRequest.getScheduleDate());
			//ashar.setPbOperationSeqId(ashRequest.getPbOperationSeqId());
			ashar.setCreatedBy(ashRequest.getCreatedBy());
			ashar.setCreatedOn(new Timestamp(Calendar.getInstance().getTime().getTime()));
			ashar.setInitialOfIncharge(ashRequest.getInitialOfIncharge());
			ashar.setStatus(ashRequest.getStatus());
			ashar.setDataDiv(ashRequest.getDataDiv());
		}
		logger.info("Prepared ASHAR model object = "+ashar);
		}catch (Exception e) {
			throw new Exception(e.getMessage());
		}
		return ashar;
	}
	
}
