package com.example.TpCalorie.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.TpCalorie.dto.AlimentDto;
import com.example.TpCalorie.services.AlimentService;


@RestController
@RequestMapping("/aliment")
public class AlimentController {
    
    private final AlimentService alimentService;

    @Autowired
    public AlimentController(AlimentService alimentService){
        this.alimentService = alimentService;
    }

    @PostMapping("/create")
    public AlimentDto createAllAliment(@RequestBody AlimentDto dto){
        return alimentService.createAliment(dto);
    }

    @GetMapping("/all")
    public List<AlimentDto> getAllAliments(){
        return alimentService.getAllAliments();
    }

    @GetMapping("/{id}")
    public AlimentDto getAliment(@PathVariable Long id){
        return alimentService.getAliment(id);
    }

    @PutMapping("/{id}")
    public AlimentDto updateAlimentDto(@PathVariable Long id, @RequestBody AlimentDto dto){
        return alimentService.updateAliment(id, dto);
    }

    @DeleteMapping("/{id}")
    public void deleAlimentDto(@PathVariable Long id){
        alimentService.deleteAliment(id);
    }

}

