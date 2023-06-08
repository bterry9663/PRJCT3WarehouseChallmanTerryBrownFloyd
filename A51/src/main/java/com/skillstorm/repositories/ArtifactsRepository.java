package com.skillstorm.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.skillstorm.models.Artifacts;

@Repository
public interface ArtifactsRepository extends JpaRepository<Artifacts, Integer >{

	void deleteArtifactById(Integer id);

	Optional<Artifacts> findArtifactById(Integer id);

	

}
