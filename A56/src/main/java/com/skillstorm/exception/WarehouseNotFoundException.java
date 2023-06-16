package com.skillstorm.exception;

public class WarehouseNotFoundException extends RuntimeException {
	public WarehouseNotFoundException(String message) {
		super(message);
}
}