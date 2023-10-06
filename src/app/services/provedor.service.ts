import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Provedor, ProvedorDTO } from '../models/provedor.model';

@Injectable({
  providedIn: 'root'
})
export class ProvedorService {
  URL= "http://localhost:8080/provedores";

  constructor(
    private http:HttpClient
  ) { }

  getAllProvedores(){
    return this.http.get<Provedor[]>(this.URL);
  }

  create(provedorDto: ProvedorDTO){
    return this.http.post<Provedor>(this.URL,provedorDto);
  }

}
