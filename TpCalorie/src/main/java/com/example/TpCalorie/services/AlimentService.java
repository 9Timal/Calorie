package com.example.TpCalorie.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.TpCalorie.dto.AlimentDto;
import com.example.TpCalorie.mapper.AlimentMapper;
import com.example.TpCalorie.models.AlimentModel;
import com.example.TpCalorie.repositories.AlimentRepository;


@Service
public class AlimentService {
    
    
    private final AlimentRepository alimentRepository;
    
    @Autowired
    public AlimentService(AlimentRepository alimentRepository){
        this.alimentRepository = alimentRepository;
    }
    
    public AlimentDto createAliment(AlimentDto alimentDto){
        AlimentModel aliment = AlimentMapper.toModel(alimentDto);
        AlimentModel savedAliment = alimentRepository.save(aliment);
        return AlimentMapper.toDto(savedAliment);    
         
    }

    public List<AlimentDto> getAllAliments(){
        List<AlimentModel> aliments = alimentRepository.findAll();
        List<AlimentDto> alimentDtos = new ArrayList<>();
        for (AlimentModel aliment : aliments) {
            alimentDtos.add(AlimentMapper.toDto(aliment));
        }
        return alimentDtos;
    }

    public AlimentDto getAliment(Long id){
        Optional<AlimentModel> aliment = alimentRepository.findById(id);
        if(aliment.isPresent()){
            return AlimentMapper.toDto(aliment.get()); 
        }else{
            throw new RuntimeException("Aliment introuvable avec l'id " + id);
        }
    }

    public void deleteAliment(Long id){
        Optional<AlimentModel> aliment = alimentRepository.findById(id);
        if(!aliment.isPresent()){
            throw new RuntimeException("Aliment introuvable avec l'id "+id);
        }else{
            alimentRepository.deleteById(id);
        }
    }

    public AlimentDto updateAliment(Long id, AlimentDto alimentDto){
        Optional<AlimentModel> aliment = alimentRepository.findById(id);
        if(aliment.isPresent()){

            // Récupération de l'aliment en l'initialisant 
            AlimentModel existingALliment = aliment.get();

            // Mise à jour de chaque colonnes
            existingALliment.setName(alimentDto.getName());
            existingALliment.setCategorie(alimentDto.getCategorie());
            existingALliment.setUnite(alimentDto.getUnite());
            existingALliment.setCaloriesPourUnite(alimentDto.getCaloriesPourUnite());
            existingALliment.setImageUrl(alimentDto.getImageUrl());

            //Enregistrement de notre Model en Bdd
            AlimentModel updateAliment = alimentRepository.save(existingALliment);

            //Renvoie de notre Aliment sous dorme Dto pour la sécurité front 
            return AlimentMapper.toDto(updateAliment);
        }else{
            throw new RuntimeException("Aliment introuvable avec l'id "+id);
        }
    }
}
