import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ServiceContractService } from '../core/service-contract.service'


@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html'

})
export class PipesComponent implements OnInit {

   

    constructor (private service : ServiceContractService){

    }

   
    
    // do observable stuff
    async ngOnInit() {
      
    }
  

     
  
}