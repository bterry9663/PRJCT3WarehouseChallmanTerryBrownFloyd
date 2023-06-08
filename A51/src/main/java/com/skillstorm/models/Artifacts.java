package com.skillstorm.models;
import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;





@Entity 
@Table(name = "artifacts")
public class Artifacts {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "id")
	private int id;
	@Column(name = "name")
	private String name;
	@Column(name = "origin")
	private String origin;
	@Column(name = "time_frame")
	private String timeFrame;
	@Column(name = "location")
	private String location;

	public Artifacts() {}
	public Artifacts(int id, String name, String origin, String timeFrame, String location) {
		super();
		this.id = id;
		this.name = name;
		this.origin = origin;
		this.timeFrame = timeFrame;
		this.location = location;
	}

		public int getId() {
			return id;
	}
		public void setId(int id) {
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
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
		}
	@Override
	public String toString() {
		return "Artifacts [id=" + id + ", name=" + name + ", origin=" + origin + ", timeFrame=" + timeFrame + ", location="
				+ location + "]";
	}
	@Override
	public int hashCode() {
		return Objects.hash(id, location, name, origin, timeFrame);
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
		return id == other.id && Objects.equals(location, other.location) && Objects.equals(name, other.name)
				&& Objects.equals(origin, other.origin) && Objects.equals(timeFrame, other.timeFrame);
	}


}
