import { NgModule } from '@angular/core';
import { WorksComponent } from './works.component';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/modules/material.modules';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { MatMenuModule, MatGridListModule } from '@angular/material';
import { WorksService } from 'src/app/services/work.service';

const routes: Routes = [
    {
        path: '',
        component: WorksComponent,
    }
];

@NgModule({
    declarations:[
        WorksComponent
    ],
    imports:[
    	RouterModule.forChild(routes),
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        Ng4LoadingSpinnerModule.forRoot()
    ],
    providers:[
    	WorksService
    ],
    exports:[
    	WorksComponent
    ]

})
export class WorksModule {

}