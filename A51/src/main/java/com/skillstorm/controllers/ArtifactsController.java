package com.skillstorm.controllers;

import java.util.List;
import java.util.Optional;

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
		private ArtifactsRepository artifactsRepo;
		
		@Autowired
		private ArtifactsServices artifactService;
	
	public ArtifactsController(ArtifactsServices artifactService) {
		this.artifactService = artifactService; 
	}
	
	@GetMapping
	public ResponseEntity<Iterable<Artifacts>>getAllArtifacts(){
		Iterable<Artifacts> artifacts = artifactService.findAllArtifacts();
		return new ResponseEntity<>(artifacts, HttpStatus.OK);
	}

	@GetMapping("/{id}")
	// here, we specify that we're taking that PathVariable into the method
	public Artifacts getItemById(@PathVariable int id) {
		Optional<Artifacts> result = artifactsRepo.findById(id);  // repo.findById() returns an Optional, so we have to .get() the Album out of it
		if (result.isPresent())
			return result.get();
		else
			return null;
	}
	
	
	@PostMapping
	public ResponseEntity<Artifacts>addArtifact(@RequestBody Artifacts artifacts){
				if (artifactsRepo.existsById(artifacts.getItemId())) {
				return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(artifacts);
				} else {
				return ResponseEntity.status(HttpStatus.CREATED).body(artifactsRepo.save(artifacts));
			}
		}
	
	@PutMapping("/update")
	public ResponseEntity<Artifacts>updateArtifact(@RequestBody Artifacts artifacts){
		Artifacts updateArtifact = artifactService.updateArtifact(artifacts);
		return new ResponseEntity<>(updateArtifact, HttpStatus.OK);
	}
	
	@DeleteMapping
	public ResponseEntity<Artifacts>deleteArtifact(@RequestBody Artifacts artifacts){
		if (artifactsRepo.findById(artifacts.getItemId()).isPresent() &&
				artifacts.equals(artifactsRepo.findById(artifacts.getItemId()).get())) {
			artifactsRepo.delete(artifacts);
			return ResponseEntity.status(HttpStatus.ACCEPTED).body(artifacts);
		} else {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(artifacts);
		}
	
	}
	@DeleteMapping("/{id}")
	// a ResponseEntity is a way to build an HttpReponse where we can assign different statuses and content for different results
	// the type of the RE is whatever we want to put in the body
	public ResponseEntity<String> deleteArtifactsByPathId(@PathVariable int id) {
		// checking if the record with the given id exists in the database
		if (artifactsRepo.existsById(id)) {
			// if so, delete the record
			artifactsRepo.deleteById(id);
			// and build out a RE with the correct status and body
			return ResponseEntity.status(HttpStatus.ACCEPTED).body("Artifact with id of " + id + " was successfully deleted.");
		} else {
			// otherwise, build a different one
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Artifact with id of " + id + " does not exist!");
		}
	}
	@GetMapping("/find/warehouse/{warehouseId}")
	public ResponseEntity<List<Artifacts>> getAllArtifactsByWarehouseId(@PathVariable("warehouseId") Integer warehouseId) {
	    List<Artifacts> artifacts = artifactService.findAllArtifactsByWarehouseId(warehouseId);
	     return new ResponseEntity<>(artifacts, HttpStatus.OK);
	}
	
}
