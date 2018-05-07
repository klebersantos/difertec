import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ServicosService {


  constructor( public http: Http) { 
    

  }


  public carregar_servicos() {
    return this.http.get(`./assets/json/servicos.json`);
  }


    
}
