import { OnInit, Component, ViewChild,ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog, MatDialogRef } from '@angular/material';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { CommonService } from 'src/app/common/common.service';
import { SendAndRequestService } from 'src/app/services/sendAndRequest.service';
import { Constants } from 'src/app/common/constants';
import { environment } from './../../../environments/environment';
import { FuseConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { WPADailyProgressModel } from 'src/app/models/works.model';
import { FieldLabelsConstant } from 'src/app/common/field-labels.constants';

@Component({
    selector: 'wpa-daily-progress',
    templateUrl: './wpa-daily-progress.component.html',
    styleUrls: ['./wpa-daily-progress.component.css']
})
export class WPADailyProgressComponent implements OnInit {
        
    FiledLabels = FieldLabelsConstant.LABELS;
    workList: any;
    workGroupList: any;
    workPhaseList: any;
    inputFormGroup: FormGroup;
    WPADailyProgressList: any;
    wpaDailyProgress = [];
    dataSource: MatTableDataSource<WPADailyProgressModel>;
    displayedColumns = ['sno','section', 'activity', 'population','alreadyDoneCount','uom','done'];

    constructor(
        public dialog: MatDialog,
        private formBuilder: FormBuilder,
        private spinnerService: Ng4LoadingSpinnerService,
        private commonService: CommonService,
        private sendAndRequestService:SendAndRequestService        
    ) {
    }
    ngOnInit() {
        //console.log('*** in ng onInit component****');
        this.inputFormGroup = this.formBuilder.group({
            'work': [null , Validators.required ],
            'workGroup' : [null , Validators.required ],
            'workPhase' : [null , Validators.required ],
            'date' : [null , Validators.required ]
        });
        this.sendAndRequestService.requestForGET(Constants.app_urls.ENERGY_BILL_PAYMENTS.WORK.GET_WORK).subscribe((data) => {
            this.workList = data;
             //console.log('*** length ***'+this.workList.length);
        },error => {} );
    }
    
    saveAction() {
        this.sendAndRequestService.requestForPOST(Constants.app_urls.ENERGY_BILL_PAYMENTS.WORK.SAVE_WPA_DAILY_PROGRESS,this.wpaDailyProgress,false).subscribe((response) => {
            this.spinnerService.hide();
            this.commonService.showAlertMessage("Daily Progress Updated Successfully");
        })
            
    }
    
    getWPADailyProgress() {
        //console.log('** daily progress ****');
       // const wpaDailyProgress: WPADailyProgressModel[] = []; 
        this.WPADailyProgressList = [];
        this.wpaDailyProgress = []; 
        this.sendAndRequestService.requestForGET(Constants.app_urls.ENERGY_BILL_PAYMENTS.WORK.GET_WPA_DAILY_PROGRESS_BASED_ON_GROUP_ACTIVITY
            +this.inputFormGroup.value.work.id +'/' +this.inputFormGroup.value.workGroup.id
            +'/'+this.inputFormGroup.value.workPhase.id + '/' +this.inputFormGroup.value.date
            ).subscribe((response) => {
                this.WPADailyProgressList = response; 
                for(let i =0 ; i < this.WPADailyProgressList.length ; i++ ){
                    this.WPADailyProgressList[i].sno = i+1;
                   // this.WPADailyProgressList[i].date = this.inputFormGroup.value.date;
                    this.wpaDailyProgress.push(this.WPADailyProgressList[i]);
                   // console.log('***loop***'+JSON.stringify(this.WPADailyProgressList[i]));
                }
          //  console.log("*** daily progress ***"+JSON.stringify(wpaDailyProgress));
                this.dataSource = new MatTableDataSource(this.wpaDailyProgress);
        }); 
    }
    
    getWorkGroups() {
        this.sendAndRequestService.requestForGET( Constants.app_urls.ENERGY_BILL_PAYMENTS.WORK.GET_WORK_GROUPS_BASED_ON_WORK + this.inputFormGroup.value.work.id ).subscribe((response) => {
           this.workGroupList = response;
        });
        this.sendAndRequestService.requestForGET( Constants.app_urls.ENERGY_BILL_PAYMENTS.WORK.GET_WORK_PHASES_BASED_ON_WORK + this.inputFormGroup.value.work.id ).subscribe((response) => {
           this.workPhaseList = response;
        });
    }

}