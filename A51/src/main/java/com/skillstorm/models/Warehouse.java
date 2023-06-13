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
	
		public int getWarehouseId() {
			return warehouseId;
		}

		public void setWarehouseId(int warehouseId) {
			this.warehouseId = warehouseId;
		}
		public Warehouse() {}
		public Warehouse(int warehouseId) {
			super();
			this.warehouseId = warehouseId;
		}

		@Override
		public int hashCode() {
			return Objects.hash(warehouseId);
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
			return "Warehouse [warehouseId=" + warehouseId + "]";
		}

		
	
}
