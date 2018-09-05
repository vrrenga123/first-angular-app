import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { EmitterComponent } from "../emitter/emitter.component";
import { MzSpinnerModule } from 'ngx-materialize';
import {
    LoadingComponent,
    ConfirmationModalComponent
} from ".";

@NgModule({
    imports: [
        HttpClientModule,
        FormsModule,
        CommonModule,MzSpinnerModule
    ],
    exports: [
        LoadingComponent,
        HttpClientModule, 
        EmitterComponent,
        FormsModule, 
        CommonModule
    ],
    entryComponents: [
        ConfirmationModalComponent
    ],
    declarations: [
        LoadingComponent,
        ConfirmationModalComponent,
        EmitterComponent
    ]
})
export class SharedModule { }
