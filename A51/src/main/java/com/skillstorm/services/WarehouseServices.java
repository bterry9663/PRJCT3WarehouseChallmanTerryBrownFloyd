package com.skillstorm.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skillstorm.exception.WarehouseNotFoundException;
import com.skillstorm.models.Warehouse;

import com.skillstorm.repositories.WarehouseRepository;

@Service
public class WarehouseServices {
	@Autowired
	private final WarehouseRepository warehouseRepo;


   public WarehouseServices(WarehouseRepository warehouseRepo) {
        this.warehouseRepo = warehouseRepo;
    }
	
	public Warehouse addWarehouse(Warehouse warehouse) {
		warehouse.setWarehouseId(0);
		return warehouseRepo.save(warehouse);
		
	}
	public List<Warehouse> findAllWarehouse(){
	return warehouseRepo.findAll();
	}
	public Warehouse updateWarehouse(Warehouse warehouse) {
		return warehouseRepo.save(warehouse);
	}
	public Warehouse findWarehousebyId(Integer warehouseId) {
		return warehouseRepo.findWarehouseByWarehouseId(warehouseId)
				.orElseThrow(() -> new WarehouseNotFoundException("Warehouse by id " + warehouseId + " was not found"));
		
	}
	public void deleteWarehouse(Integer warehouseId) {
		warehouseRepo.deleteWarehouseByWarehouseId(warehouseId);
	}
}


