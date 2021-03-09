package com.scr.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.scr.model.EventType;

public interface EventTypeRepository extends JpaRepository<EventType, Long>{

}
