import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Observable, Observer} from 'rxjs'
import { ActivatedRoute, Router } from '@angular/router';
import { PeoplesService } from '../customers/peoples.service';
@Component({
 
    template: `<zippy (open)="onOpen($event)" (close)="onClose($event)"></zippy>`}
)


  export class EmittersComponent {
    onOpen(event){
        //debugger;
         alert("Open");
         
    }
    onClose(event){
       // debugger;
         alert("Close");
    }
}