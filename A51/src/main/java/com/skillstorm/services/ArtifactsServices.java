package com.skillstorm.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skillstorm.exception.ArtifactNotFoundException;
import com.skillstorm.models.Artifacts;
import com.skillstorm.repositories.ArtifactsRepository;

@Service
public class ArtifactsServices 	{
	@Autowired
	private ArtifactsRepository artifactsRepo;


    ArtifactsServices(ArtifactsRepository artifactsRepo) {
        this.artifactsRepo = artifactsRepo;
    }
	
	public Artifacts addArtifact(Artifacts artifact) {
		artifact.setItemId(0);
		return artifactsRepo.save(artifact);
		
	}
	public Iterable<Artifacts> findAllArtifacts(){
		return artifactsRepo.findAll();
	}
	public Artifacts updateArtifact(Artifacts artifact) {
		return artifactsRepo.save(artifact);
	}
	public Artifacts findArtifactById(Integer itemId) {
		return artifactsRepo.findArtifactById(itemId)
				.orElseThrow(() -> new ArtifactNotFoundException("Artifact by id " + itemId + " was not found"));
		
	}
	public List<Artifacts> findAllArtifactsByWarehouseId(Integer warehouseId) {
		return artifactsRepo.findAllArtifactsByWarehouseId(warehouseId);
	}
	public void deleteArtifact(Integer itemId) {
		artifactsRepo.deleteArtifactById(itemId);
	}
}
