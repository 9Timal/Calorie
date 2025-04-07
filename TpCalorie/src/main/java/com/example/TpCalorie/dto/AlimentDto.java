package com.example.TpCalorie.dto;
import lombok.Data;

@Data
public class AlimentDto {
    private Long id;
    private String name;
    private String categorie;
    private String unite;
    private double caloriesPourUnite;
    private String imageUrl;
}
