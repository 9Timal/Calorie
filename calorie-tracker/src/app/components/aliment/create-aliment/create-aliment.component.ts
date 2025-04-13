import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Aliment } from '../../../models/aliment.model';
import { AlimentService } from '../../../services/aliment.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-aliment',
  standalone: true,
  imports: [
    NgFor,
    FormsModule,
    NgClass,
    NgIf
  ],
  templateUrl: './create-aliment.component.html',
  styleUrl: './create-aliment.component.scss'
})

export class CreateAlimentComponent {

  constructor(
    private alimentService : AlimentService,
  ){}

  message: string ='';
  isSuccess: boolean = true; //création d'un variable qui va permettre d'afficher mon message en vert ou rouge

  createAliment(){
    this.alimentService.createAliment(this.aliment).subscribe({
      next:(réponse)=>{
        console.log("Votre, Aliment a bien été crée !", réponse);

        this.isSuccess = true;
        this.message = 'Votre aliment viens d\'être créé';
        setTimeout(() => {
          this.message = '';
        }, 3000);

        //je vide les input après enregistrement grace au ngModel car il est relier a l'input dans le formulaire
        this.aliment = {
          name: '',
          categorie: '',
          unite: '',
          caloriesPourUnite: 0,
          imageUrl: ''
        };
      },

      error:(erreur)=>{

        console.log('Une érreur s\'est produite :', erreur);
        this.isSuccess = false;
        this.message ='Votre aliment n\'à pas pu être créé';
        setTimeout(() => {
          this.message = '';
        }, 3000);
      }
    })
  }

  aliment: Aliment = {
    name: '',
    categorie: '',
    unite: '',
    caloriesPourUnite: 0,
    imageUrl: ''
  };

  categorie: string[] = [
    'Fruits',
    'Légumes',
    'Viande',
    'Poisson',
    'Produits laitiers',
    'Féculents',
    'Épices',
    'Autre'
  ];

  unite: string[] = [
    'g',
    'ml',
    'pièce'
  ]

  // Pour gérer l’état visuel du drag
  isDraggingOver: boolean = false;

  // Pour l’aperçu de l’image
  imagePreview: string | null = null;

  onDragOver(event: DragEvent): void {
    event.preventDefault();
    this.isDraggingOver = true;
  }

  onDragLeave(event: DragEvent): void {
    event.preventDefault();
    this.isDraggingOver = false;
  }

  onFileDrop(event: DragEvent): void {
    event.preventDefault();
    this.isDraggingOver = false;

    const files = event.dataTransfer?.files;
    if (files && files.length > 0) {
      this.handleFile(files[0]);
    }
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      this.handleFile(input.files[0]);
    }
  }

  handleFile(file: File): void {
    const reader = new FileReader();

    reader.onload = () => {
      this.imagePreview = reader.result as string;

      // On met le chemin relatif dans l’aliment
      this.aliment.imageUrl = 'assets/images/' + file.name;
    };

    reader.readAsDataURL(file); // transforme le fichier en base64 pour l’aperçu
  }

}
