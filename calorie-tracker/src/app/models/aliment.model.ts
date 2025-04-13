/* on utilise interface plutot que class car : 

    C’est léger, rapide, et parfait quand :

    ➡️ Tu n’as pas besoin de méthodes dans ton modèle

    ➡️ Tu veux juste t'assurer que tes objets ont les bonnes propriétés

    ➡️ Et c’est souvent suffisant pour les échanges avec le backend.*/

export interface Aliment{     

    id?: number;    // le ? sert a rendre le champ optionnel
    name:string 
    categorie: string;
    unite: string;             // g, ml, pièce
    caloriesPourUnite: number; // calories pour 1g, 1ml, etc.
    imageUrl: string;
}