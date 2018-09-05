import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import {
    LoadingComponent,
    ConfirmationModalComponent
} from ".";

@NgModule({
    imports: [
        HttpClientModule,
        FormsModule,
        CommonModule
    ],
    exports: [
        LoadingComponent,
        HttpClientModule, 
        FormsModule, 
        CommonModule
    ],
    entryComponents: [
        ConfirmationModalComponent
    ],
    declarations: [
        LoadingComponent,
        ConfirmationModalComponent
    ]
})
export class SharedModule { }
