import { NgModel, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TPCBoardComponent } from './tpc-board.component';
import { TPCBoardService } from 'src/app/services/tpc-board.service';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/modules/material.modules';

const routes: Routes = [
    {
        path:'',
        component: TPCBoardComponent,
    }
]

@NgModule({
    declarations: [
        TPCBoardComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule
        
    ],
    providers: [
        TPCBoardService
    ],
    exports: [
        TPCBoardComponent
    ]
})
export class TPCBoardModule{

}