package com.scr.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.scr.model.DriveCheckList;

@Repository
public interface ChecklistRepository extends JpaRepository<DriveCheckList, Long> {

	List<DriveCheckList> findByStatusId(Integer statusId);


}
