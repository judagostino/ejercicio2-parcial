import { Injectable } from '@angular/core';
import{ HttpClient,
  HttpHeaders,
  HttpErrorResponse,
  HttpParams} from '@angular/common/http';
import {of} from 'rxjs';
import {Equipo} from '../models/equipo';

@Injectable({
providedIn:'root'
})

export class EquipoService {
resourceUrl: string;

  constructor(private httpCliente: HttpClient) { 
    this.resourceUrl = "https://pavii.ddns.net/api/equipos";
  }

  get(){
    return this.httpCliente.get(this.resourceUrl);
  }

}