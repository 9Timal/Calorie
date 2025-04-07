package com.example.TpCalorie.mapper;

import com.example.TpCalorie.dto.AlimentDto;
import com.example.TpCalorie.models.AlimentModel;

public class AlimentMapper {

    public static AlimentDto toDto(AlimentModel model) {
        AlimentDto dto = new AlimentDto();
        dto.setId(model.getId());
        dto.setName(model.getName());
        dto.setCategorie(model.getCategorie());
        dto.setUnite(model.getUnite());
        dto.setCaloriesPourUnite(model.getCaloriesPourUnite());
        dto.setImageUrl(model.getImageUrl());
        return dto;
    }

    public static AlimentModel toModel(AlimentDto dto) {
        AlimentModel model = new AlimentModel();
        model.setId(dto.getId());
        model.setName(dto.getName());
        model.setCategorie(dto.getCategorie());
        model.setUnite(dto.getUnite());
        model.setCaloriesPourUnite(dto.getCaloriesPourUnite());
        model.setImageUrl(dto.getImageUrl());
        return model;
    }
}
