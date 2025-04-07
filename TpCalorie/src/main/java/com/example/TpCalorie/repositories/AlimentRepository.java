package com.example.TpCalorie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.TpCalorie.models.AlimentModel;

public interface AlimentRepository extends JpaRepository <AlimentModel, Long>{
    
}
