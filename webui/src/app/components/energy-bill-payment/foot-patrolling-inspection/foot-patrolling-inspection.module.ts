import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FootPatrollingInspectionComponent } from './foot-patrolling-inspection.component';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { MaterialModule } from 'src/app/modules/material.modules';
import { FootPatrollingInspectionService } from 'src/app/services/foot-patrolling-inspection.service';
import { ReportService } from 'src/app/services/report.service';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

const routes: Routes = [
    {
        path:'',
        component: FootPatrollingInspectionComponent,
    }
]

@NgModule({
    declarations: [
        FootPatrollingInspectionComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        OwlNativeDateTimeModule,
        OwlDateTimeModule
    ],
    providers: [
        FootPatrollingInspectionService,
        ReportService
    ],
    //import
    exports: [
        FootPatrollingInspectionComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FootPatrollingInspectionModule{

}