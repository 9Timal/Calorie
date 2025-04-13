import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Aliment } from '../models/aliment.model';
import { environment } from '../environment/environment'; // import de notre constant environnement


@Injectable({
  providedIn: 'root'
})
export class AlimentService {

  private readonly baseUrl = `${environment.apiUrl}/aliment`; // recuperation de l'environnement dan baseUrl

  constructor(
    private http: HttpClient, // construction de notre httpClient pour réaliser les requete 
  ) { }

  getAllAliment():Observable<Aliment[]>{
    return this.http.get<Aliment[]>(`${this.baseUrl}/all`)
  }

  getByIdAliment(id: number): Observable<Aliment> {
    return this.http.get<Aliment>(`${this.baseUrl}/${id}`)
  }

  createAliment(aliment: Aliment): Observable<Aliment>{
    return this.http.post<Aliment>(`${this.baseUrl}/create`, aliment)
  }

  updateAliment(id: number, aliment: Aliment): Observable<Aliment>{
    return this.http.put<Aliment>(`${this.baseUrl}/${id}`, aliment )
  }

  deleteAliment(id:number): Observable<Aliment>{
    return this.http.delete<Aliment>(`${this.baseUrl}/${id}`)
  }


}
