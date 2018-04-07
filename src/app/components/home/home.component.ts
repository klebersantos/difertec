import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []

})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient) {

  }


  conteudo: any;
  conteudo2: any;
  mvv: any;


  ngOnInit(): void {
    this.http.get('http://kleberdev.com/json/servicos.json').subscribe(file => {
      this.conteudo = file;
      console.log(file);
    });
    this.http.get('http://kleberdev.com/json/quem-somos.json').subscribe(file => {
      this.conteudo2 = file;
      console.log(file);
    });
    this.http.get('http://kleberdev.com/json/mvv.json').subscribe(file => {
      this.mvv = file;
      console.log(file);
    });
  }
}




// ngOnInit(): void {
//   this.http.get('http://kleberdev.com/json/servicos.json').subscribe(data => {
//     this.conteudo = data;
//     console.log(data);
//   });
// }