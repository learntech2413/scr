package com.scr.repository;

import java.sql.Timestamp;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import com.scr.model.DailyProgressSummery;

public interface DailySummaryRepository extends JpaRepository<DailyProgressSummery,Long>{
 List<DailyProgressSummery> findAll();
	Boolean existsByFacilityIdAndCreatedDate(@Param("facilityId") String facilityId,@Param("createdDate") Timestamp createdDate);

}
