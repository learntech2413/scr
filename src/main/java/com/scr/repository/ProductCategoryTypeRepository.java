package com.scr.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.scr.model.ProductCategoryType;

public interface ProductCategoryTypeRepository extends JpaRepository<ProductCategoryType, Long>{
	
	List<ProductCategoryType> findAll();

}
