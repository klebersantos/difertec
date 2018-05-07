import { Component } from '@angular/core';
import { ServicosService } from '../../services/servicos.service';
import { QuemSomosService } from '../../services/quemSomos.service';
import { MvvService } from '../../services/mvv.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []

})
export class HomeComponent {
      
  conteudo: any;
  quemSomos: any;
  mvv: any;

  constructor(private _ss: ServicosService, private _sq: QuemSomosService, private _sm: MvvService) {

      _ss.carregar_servicos()
      
     
      .subscribe(res => {
        this.conteudo = res.json();
        
        console.log(res);
      });

      _sq.carregar_quemSomos()

      .subscribe(res => {
        this.quemSomos = res.json();
        
        console.log(res);
      });

      _sm.carregar_mvv()

      .subscribe(res => {
        this.mvv = res.json();
        
        console.log(res);
      });

  }

}


  





//   ngOnInit(): void {
//     this.http.get(`http://localhost:4200/js-fake/servicos.json`).subscribe(file => {
//       this.conteudo = file;
//       console.log(file);
//     });
    
//     this.http.get(`http://localhost:4200/js-fake/quem-somos.json`)
//       .subscribe(res => {
//       this.conteudo2 = res;
//       console.log(res);
//     });
   
//     this.http.get(`http://localhost:4200/js-fake/mvv.json`).subscribe(file => {
//       this.mvv = file;
//       console.log(file);
//     });
//   }
// }




// ngOnInit(): void {
//   this.http.get('http://kleberdev.com/json/servicos.json').subscribe(data => {
//     this.conteudo = data;
//     console.log(data);
//   });
// }