package com.skillstorm.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.skillstorm.models.Artifacts;

@Repository
public interface ArtifactsRepository extends CrudRepository<Artifacts, Integer >{

	void deleteArtifactById(Integer id);

	Optional<Artifacts> findArtifactById(Integer id);

	@Query(value = "SELECT * FROM items WHERE warehouse_id = ?1", nativeQuery = true)
	List<Artifacts> findAllArtifactsByWarehouseId(Integer warehouseId);

	

}
