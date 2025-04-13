import { Component, OnInit } from '@angular/core';
import { Aliment } from '../../../models/aliment.model';
import { AlimentService } from '../../../services/aliment.service';
import { NgClass, NgFor } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list-aliment',
  standalone: true,
  imports: [
    NgFor,NgClass
  ],
  templateUrl: './list-aliment.component.html',
  styleUrl: './list-aliment.component.scss'
})
export class ListAlimentComponent implements OnInit {

  ngOnInit():void{ //permet le chargement des fonctions au lancement du component
    this.getAllAliment(); 
  }

  constructor(
    private alimentService: AlimentService, // appel de notre service 
    private router: Router,
  ){}

  aliments: Aliment[]=[]; //instanciation de aliments qui est un tableau de Aliment de base vide 

  //utilisation de notre service
  getAllAliment(){
    this.alimentService.getAllAliment().subscribe({
      next:(reponse : Aliment[])=>{
        console.log("Serveur : ", reponse);
        this.aliments = reponse; // On stocke la réponse dans la variable pour l'affichage
      },
      error:(erreur)=>{
        console.log("Nous n'avons pas trouver d'aliments: ",erreur);
      }
    })
  }

  goToDetail(id:number){
    this.router.navigate(['/detail', id]);
  }

  getClassFromCategorie(categorie: string): string {
    return categorie.toLowerCase().replace(/\s/g, '-'); 
    // ➤ transforme : "Produits laitiers" → "produits-laitiers"
  }
}