import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlimentService } from '../../../services/aliment.service';
import { Aliment } from '../../../models/aliment.model';
import { NgClass } from '@angular/common';


@Component({
  selector: 'app-detail-aliment',
  standalone: true,
  imports: [
   NgClass
  ],
  templateUrl: './detail-aliment.component.html',
  styleUrl: './detail-aliment.component.scss'
})
export class DetailAlimentComponent implements OnInit {

  aliment!: Aliment;

  constructor(
    private route : ActivatedRoute,
    private alimentService : AlimentService,
    
  ){}

  ngOnInit(): void {
    const idAliment :number = Number(this.route.snapshot.paramMap.get('id'));
    this.getByIdAliment(idAliment);
  }
  
  

  getByIdAliment(idAliment : number){
    this.alimentService.getByIdAliment(idAliment).subscribe({
      next:(response : Aliment)=>{
        this.aliment = response;
      },
      error:(erreur)=>{
        console.log("Erreur : L'aliment est introuvable ", erreur)
      }
    })
  }

  getClassFromCategorie(categorie: string): string {
    return categorie.toLowerCase().replace(/\s/g, '-'); 
    // ➤ transforme : "Produits laitiers" → "produits-laitiers"
  }

}
