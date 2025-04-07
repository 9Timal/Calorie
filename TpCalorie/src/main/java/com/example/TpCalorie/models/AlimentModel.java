package com.example.TpCalorie.models;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class AlimentModel {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String categorie;
    private String unite;             // g, ml, pièce
    private double caloriesPourUnite; // calories pour 1g, 1ml, etc.
    private String imageUrl;
}
