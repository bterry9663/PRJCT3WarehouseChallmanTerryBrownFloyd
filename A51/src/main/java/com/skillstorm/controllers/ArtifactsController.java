package com.skillstorm.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skillstorm.models.Artifacts;
import com.skillstorm.repositories.ArtifactsRepository;
import com.skillstorm.services.ArtifactsServices;

	@RestController
	@RequestMapping("/items")
	@CrossOrigin("*")
	public class ArtifactsController  {
		
		@Autowired
		private ArtifactsRepository repo;
		@Autowired
		private ArtifactsServices artifactService;
	
	public ArtifactsController(ArtifactsServices artifactService) {
		this.artifactService = artifactService; 
	}
	
	@GetMapping
	public ResponseEntity<List<Artifacts>>getAllArtifacts(){
		List<Artifacts> artifacts = artifactService.findAllArtifacts();
		return new ResponseEntity<>(artifacts, HttpStatus.OK);
	}
	@GetMapping("/find/{id}")
	public ResponseEntity<Artifacts> getArtifactsById(@PathVariable("id") Integer id){
		Artifacts artifact = artifactService.findArtifactById(id);
		return new ResponseEntity<>(artifact, HttpStatus.OK);
	}
		
	@GetMapping("/find/{warehouseId}")
	public ResponseEntity<List<Artifacts>> getAllArtifactsByWarehouseId(@PathVariable("warehouseId") Integer warehouseId) {
	    List<Artifacts> artifacts = artifactService.findAllArtifactsByWarehouseId(warehouseId);
	     return new ResponseEntity<>(artifacts, HttpStatus.OK);
	}
		
	}
	@PostMapping("/add")
	public ResponseEntity<Artifacts>addArtifact(@RequestBody Artifacts artifacts){
		Artifacts newArtifact = artifactService.addArtifact(artifacts);
		return new ResponseEntity<>(newArtifact, HttpStatus.CREATED);
	}
	@PutMapping("/update")
	public ResponseEntity<Artifacts>updateArtifact(@RequestBody Artifacts artifacts){
		Artifacts updateArtifact = artifactService.updateArtifact(artifacts);
		return new ResponseEntity<>(updateArtifact, HttpStatus.OK);
	}
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<Artifacts>deleteArtifact(@RequestBody Artifacts artifacts){
		artifactService.deleteArtifact(null);
		return new ResponseEntity<>(HttpStatus.OK);
	}
}
