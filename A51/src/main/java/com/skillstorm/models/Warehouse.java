package com.skillstorm.models;

import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "warehouses")
public class Warehouse {

			
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "warehouse_id")
	private int warehouseId;
	@Column(name = "location")
	private String location;
	@Column(name = "manager")
	private String manager;
	@Column(name = "max_capacity")
	private int max_capacity;
	
	
	
		public Warehouse() {}
		public Warehouse(int warehouseId, String location, String manager, int max_capacity) {
			super();
			this.warehouseId = warehouseId;
			this.location = location;
			this.manager= manager;
			this.max_capacity = max_capacity;
			
		}
		
		public int getWarehouseId() {
			return warehouseId;
		}

		public void setWarehouseId(int warehouseId) {
			this.warehouseId = warehouseId;
		}
		public String getLocation() {
			return location;
		}
		public void setLocation(String location) {
			this.location = location;
		}
		public String getManager() {
			return manager;
		}
		public void setManager(String manager) {
			this.manager = manager;
		}
		public int getMax_capacity() {
			return max_capacity;
		}
		public void setMax_capacity(int max_capacity) {
			this.max_capacity = warehouseId;
		}
		
		
		
		
		
		
		@Override
		public int hashCode() {
			return Objects.hash(warehouseId, location, manager, max_capacity);
		}

		@Override
		public boolean equals(Object obj) {
			if (this == obj)
				return true;
			if (obj == null)
				return false;
			if (getClass() != obj.getClass())
				return false;
			Warehouse other = (Warehouse) obj;
			return warehouseId == other.warehouseId;
		}

		@Override
		public String toString() {
			return "Warehouse [warehouseId=" + warehouseId + ", location=" + location + ", manager=" + manager + 
					", max_capacity=" + max_capacity +  "]";
		}

		
	
}
