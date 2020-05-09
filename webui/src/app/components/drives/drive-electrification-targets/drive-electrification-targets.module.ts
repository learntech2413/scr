import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DriveElectrificationTargetsComponent } from './drive-electrification-targets.component';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/modules/material.modules';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { AddDriveElectrificationTargetsComponent } from './add-drive-electrification-targets/add-drive-electrification-targets.component';
import { DrivesService } from 'src/app/services/drives.service';
import { NumberDirective } from 'src/app/common/validations';
import { ValidationsModule } from 'src/app/modules/validations.module';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

const routes: Routes = [
    {
        path: '',
        component: DriveElectrificationTargetsComponent,
    },   
    {
        path     : ':id',
        component: AddDriveElectrificationTargetsComponent
    },
    {
        path        : 'add-drive-electrification-targets',
        component:   AddDriveElectrificationTargetsComponent
    },
];

@NgModule({
    declarations: [
        DriveElectrificationTargetsComponent,
        AddDriveElectrificationTargetsComponent,
        
    ],
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,     
        ValidationsModule, 
        Ng4LoadingSpinnerModule.forRoot(),
        OwlDateTimeModule, 
        OwlNativeDateTimeModule,
    ],
    providers: [
        DrivesService
    ],
    exports:[
        DriveElectrificationTargetsComponent
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class DriveElectrificationTargetsModule {

}