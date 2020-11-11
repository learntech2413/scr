import { OnInit, Component, ViewChild,ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog, MatDialogRef } from '@angular/material';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { CommonService } from 'src/app/common/common.service';
import { SendAndRequestService } from 'src/app/services/sendAndRequest.service';
import { Constants } from 'src/app/common/constants';
import { environment } from './../../../environments/environment';
import { FuseConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { standardPhaseActivityModel } from 'src/app/models/works.model';
import { FieldLabelsConstant } from 'src/app/common/field-labels.constants';

@Component({
    selector: 'copy-wp-and-wpa',
    templateUrl: './copy-wp-and-wpa.component.html',
    styleUrls: ['./copy-wp-and-wpa.component.scss']
})
export class CopyWPAndWPAComponent implements OnInit {
    FiledLabels = FieldLabelsConstant.LABELS;
    editPermission: boolean = true;
    addPermission: boolean = true;
    deletePermission: boolean = true;
    workList: any;
    standardPhasesList: any;
    work: any;
    searchInputFormGroup: FormGroup;
    standardPhaseActivityList: any;
    dataSource: MatTableDataSource<standardPhaseActivityModel>;
    displayedColumns = ['sno','check', 'standardPhaseName','standardPhaseActivityName'];
    selectedItems = [];
    SPActivity = [];
    enableCopy: boolean; 

    constructor(
        public dialog: MatDialog,
        private formBuilder: FormBuilder,
        private spinnerService: Ng4LoadingSpinnerService,
        private commonService: CommonService,
        private sendAndRequestService:SendAndRequestService        
    ) {
    }
    ngOnInit() {
        this.searchInputFormGroup = this.formBuilder.group({
            'work': [null],
            'standardPhase' : [null]
        });
         this.sendAndRequestService.requestForGET(Constants.app_urls.ENERGY_BILL_PAYMENTS.WORK.GET_WORK).subscribe((data) => {
            this.workList = data;
             //console.log('*** length ***'+this.workList.length);
        },error => {} );
        this.sendAndRequestService.requestForGET(Constants.app_urls.STANDARD_PHASES.GET_STANDARD_PHASES).subscribe((data) => {
            this.standardPhasesList = data;
             //console.log('*** length ***'+this.standardPhasesList.length);
        },error => {} );
    }
    
    saveAction() {
        let copyObject = {
            standardPhases: this.searchInputFormGroup.value.standardPhase,
            standardPhaseActivities: this.selectedItems,
            work: this.searchInputFormGroup.value.work 
        };
        if (this.selectedItems.length > 0) {
          this.sendAndRequestService.requestForPOST(Constants.app_urls.ENERGY_BILL_PAYMENTS.WORK.COPY_WP_AND_WPA, copyObject, true).subscribe(data => {
            this.spinnerService.hide();
            this.commonService.showAlertMessage("Copied Successfully");
              this.selectedItems = [];
              this.SPActivity = [];
              this.enableCopy = false;
              this.dataSource = new MatTableDataSource(this.SPActivity);
              this.searchInputFormGroup.reset();
          }, error => {
            console.log('ERROR >>>');
            this.spinnerService.hide();
          })
        }
    }
    
    getStandardPhaseActivities() {
       /* console.log("*** in get standard phases ****"+ele.length);
        let sp = [];
        for(let i =0; i < ele.length ; i++) {
            sp.push(ele[i]);
        } */
        /* console.log("*** in get standard phases ****"+JSON.stringify(ele.toString()));
        let jsonObject = {
            'standardPhase':    sp
        } */
        this.sendAndRequestService.requestForPOST(Constants.app_urls.STANDARD_PHASE_ACTIVITY.GET_SPA_BASED_ON_SP,this.searchInputFormGroup.value.standardPhase,false).subscribe((data) => {
                this.standardPhaseActivityList = data;
            //console.log('*** data ***'+JSON.stringify(data));
            for (var i = 0; i < this.standardPhaseActivityList.length; i++) {
                this.standardPhaseActivityList[i].sno = i + 1;
                this.standardPhaseActivityList[i].checked = true;
                this.SPActivity.push(this.standardPhaseActivityList[i]);
            }
            this.dataSource = new MatTableDataSource(this.SPActivity);
        });
    }
    
    onCheckboxChange(e, row) {
        if (e.target.checked) {
          this.selectedItems.push(row);
          this.enableCopy = true;
        } else {
          this.selectedItems.splice(row.index, 1);
          if (this.selectedItems.length == 0) {
            this.enableCopy = false;
          }
        }
      }


}