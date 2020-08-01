import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { GridFailureComponent } from './grid-failure.component';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/modules/material.modules';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { AddGridFailureComponent } from './add-grid-failure/add-grid-failure.component';

const routes: Routes = [
    {
        path: '',
        component: GridFailureComponent,
    },   
    {
        path     : ':id',
        component: AddGridFailureComponent
    },
    {
        path        : 'add-grid-failure',
        component:   AddGridFailureComponent
    },
];

@NgModule({
    declarations: [
        GridFailureComponent,
        AddGridFailureComponent,
        
    ],
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,      
        Ng4LoadingSpinnerModule.forRoot(),
        OwlDateTimeModule, 
        OwlNativeDateTimeModule,
    ],
    providers: [
        
    ],
    exports:[
        GridFailureComponent
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class GridFailureModule {

}