package com.scr.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.scr.model.Schedule;

@Repository

public interface ScheduleRepository extends JpaRepository<Schedule, Long>{
	
	List<Schedule> findAll();
	
	
}