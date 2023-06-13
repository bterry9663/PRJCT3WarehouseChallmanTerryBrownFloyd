package com.skillstorm.models;
import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;





@Entity 
@Table(name = "items")
public class Artifacts {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "item_id")
	private int id;
	@Column(name = "name")
	private String name;
	@Column(name = "origin")
	private String origin;
	@Column(name = "time_frame")
	private String timeFrame;
	@Column(name = "aisle_shelf")
	private String shelf;
	@Column(name = "image_link")
	private String image;
	@Column(name = "warehouse_id")
	private int warehouseId;

	public Artifacts() {}
	public Artifacts(int id, String name, String origin, String timeFrame, String shelf, String image, int warehouseId) {
		super();
		this.id = id;
		this.name = name;
		this.origin = origin;
		this.timeFrame = timeFrame;
		this.shelf = shelf;
		this.image= image;
		this.warehouseId = warehouseId;
	}

		public int getItemId() {
			return id;
	}
		public void setItemId(int id) {
			this.id = id;
	}
		public String getName() {
			return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getOrigin() {
		return origin;
	}
	public void setOrigin(String origin) {
		this.origin = origin;
	}
	public String getTimeFrame() {
		return timeFrame;
	}
	public void setTimeFrame(String timeFrame) {
		this.timeFrame = timeFrame;
	}
	public String getShelf() {
		return shelf;
	}
	public void setShelf(String shelf) {
		this.shelf = shelf;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	public int getWarehouseId() {
		return warehouseId;
	}
	public void setWarehouseId(int warehouseId) {
		this.warehouseId = warehouseId;
	}
	@Override
	public int hashCode() {
		return Objects.hash(image, id, name, origin, shelf, timeFrame, warehouseId);
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Artifacts other = (Artifacts) obj;
		return Objects.equals(image, other.image) && id == other.id && Objects.equals(name, other.name)
				&& Objects.equals(origin, other.origin) && Objects.equals(shelf, other.shelf)
				&& Objects.equals(timeFrame, other.timeFrame) && warehouseId == other.warehouseId;
	}
	@Override
	public String toString() {
		return "Artifacts [id=" + id + ", name=" + name + ", origin=" + origin + ", timeFrame=" + timeFrame
				+ ", shelf=" + shelf + ", image=" + image + ", warehouseId=" + warehouseId + "]";
	}
	

	


}
