import { OnInit, Component, ViewChild } from '@angular/core';
import { CommonService } from 'src/app/common/common.service';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { Constants } from 'src/app/common/constants';
import{SidingsModel} from 'src/app/models/sidings.model';
import{SidingsService} from   "src/app/services/sidings.service";
import { MatTableDataSource, MatPaginator, MatSort, MatDialogRef, MatDialog } from '@angular/material';
import { FuseConfirmDialogComponent } from '../../confirm-dialog/confirm-dialog.component';
@Component({
    selector: 'app-sidings',
    templateUrl: './sidings.component.html',
    styleUrls: ['./sidings.component.scss']
})
export class SidingsComponent implements OnInit {
    addPermission: boolean = true;
    editPermission: boolean = true;
    deletePermission: boolean = true;
    addSidingsItem: boolean ;
    stationCodeData:any;
    title: string = "Save";
    sidingsItemList : any;
    sidingsItemDataSource: MatTableDataSource<SidingsModel>;
    sidingsItemDisplayColumns = ['sno' , 'station' , 'sidingCode' , 'section' , 'sectionEletrifiedStatus' , 'sidingEletrifiedStatus' , 
    'privateRailway' ,'status',  'tkm','remarks','sidingProposed','proposedDate','approvedDate',
    'workOrderDate','workProgresspercentage','workProgressRemark','completionDate','id' ] ;
    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
    @ViewChild(MatSort, { static: true }) sort: MatSort;
    sidingsItemFormGroup: FormGroup;
    editsidingsItemResponse: any;
    confirmDialogRef: MatDialogRef<FuseConfirmDialogComponent>;
    public status=['yes','No'];
   
    constructor(
        
        private commonService: CommonService,
        private formBuilder: FormBuilder,
        private sidingsService:SidingsService,
        private dialog: MatDialog
    ) { }
 
    ngOnInit()  {
        this.getAllSidingsData();
        var permissionName = this.commonService.getPermissionNameByLoggedData("ENERGY BILL PAYMENT","Sidings") ;//p == 0 ? 'No Permission' : p[0].permissionName;
        this.addPermission = this.commonService.getPermissionByType("Add", permissionName);
    	this.editPermission = this.commonService.getPermissionByType("Edit", permissionName);
    	this.deletePermission = this.commonService.getPermissionByType("Delete", permissionName);
        this.sidingsItemFormGroup = this.formBuilder.group({
            id: 0,
            'station':[null],
            'sidingCode': [null],
            'section': [null],
            'sectionEletrifiedStatus': [null],
            'sidingEletrifiedStatus' : [null],
            'privateRailway' : [null],
            'status': [null],
            'tkm' : [null],
            'remarks' : [null, Validators.maxLength(250)],
            'sidingProposed' : [null],
            'proposedDate' : [null],
            'approvedDate' : [null],
            'workOrderDate' : [null],
            'workProgresspercentage' : [null],
            'workProgressRemark' : [null],
            'completionDate' : [null]
        });

        
     }
     getAllSidingsData() {
        console.log("get all sidings items");
        const sidingsDetails : SidingsModel[] = [];
        this.sidingsService.getAllSidingsItems().subscribe((data) => {
            this.sidingsItemList = data;
            for (let i = 0; i < this.sidingsItemList.length; i++) {
                this.sidingsItemList[i].sno = i+1;
                sidingsDetails.push(this.sidingsItemList[i]);              
            }
            this.sidingsItemDataSource = new MatTableDataSource(sidingsDetails);
            this.sidingsItemDataSource.paginator = this.paginator;
            this.sidingsItemDataSource.sort = this.sort;

        } , error => {});
        
    }

     sidingsItemSubmit () {
         console.log("slidingsItemSubmit");
        let station: string = this.sidingsItemFormGroup.value.station;
        let sidingCode: string = this.sidingsItemFormGroup.value.sidingCode;
        let section: string = this.sidingsItemFormGroup.value.section;
        let sectionEletrifiedStatus: string = this.sidingsItemFormGroup.value.sectionEletrifiedStatus;
        let sidingEletrifiedStatus: string = this.sidingsItemFormGroup.value.sidingEletrifiedStatus;
        let privateRailway: string = this.sidingsItemFormGroup.value.privateRailway;
        let status: string = this.sidingsItemFormGroup.value.status;
        let tkm: string = this.sidingsItemFormGroup.value.tkm;
        let remarks: string = this.sidingsItemFormGroup.value.remarks;
        let sidingProposed: string = this.sidingsItemFormGroup.value.sidingProposed;
        let proposedDate: Date = this.sidingsItemFormGroup.value.proposedDate;
        let approvedDate: Date = this.sidingsItemFormGroup.value.approvedDate;
        let workOrderDate: Date = this.sidingsItemFormGroup.value.workOrderDate;
        let workProgresspercentage: string = this.sidingsItemFormGroup.value.workProgresspercentage;
        let workProgressRemark: string = this.sidingsItemFormGroup.value.workProgressRemark;
        let completionDate: Date = this.sidingsItemFormGroup.value.completionDate;
        this.addSidingsItem = false;
        if (this.title ==  Constants.EVENTS.SAVE) {
            this.sidingsService.save({
                'station':station,
                'sidingCode': sidingCode,
                'section':section,
                'sectionEletrifiedStatus': sectionEletrifiedStatus,
                'sidingEletrifiedStatus' : sidingEletrifiedStatus,
                'privateRailway': privateRailway,
                'status' : status,
                'tkm' : tkm,
                'remarks' : remarks,
                'sidingProposed' : sidingProposed,
                'proposedDate' : proposedDate,
                'approvedDate' : approvedDate,
                'workOrderDate' : workOrderDate,
                'workProgresspercentage' : workProgresspercentage,
                'workProgressRemark' : workProgressRemark,
                'completionDate' : completionDate,
            }).subscribe((data) => {
                this.commonService.showAlertMessage('Successfully saved');
                this.getAllSidingsData();
                this.sidingsItemFormGroup.reset();
            } , error => {});
        }
        else if (this.title == Constants.EVENTS.UPDATE ) {
            let id: number = this.editsidingsItemResponse.id;
            this.sidingsService.update({
                'id':id,
                'station':station,
                'sidingCode': sidingCode,
                'section':section,
                'sectionEletrifiedStatus': sectionEletrifiedStatus,
                'sidingEletrifiedStatus' : sidingEletrifiedStatus,
                'privateRailway': privateRailway,
                'status' : status,
                'tkm' : tkm,
                'remarks' : remarks,
                'sidingProposed' : sidingProposed,
                'proposedDate' : proposedDate,
                'approvedDate' : approvedDate,
                'workOrderDate' : workOrderDate,
                'workProgresspercentage' : workProgresspercentage,
                'workProgressRemark' : workProgressRemark,
                'completionDate' : completionDate,
            }).subscribe((data) =>{
                this.commonService.showAlertMessage('Successfully updated');
                this.getAllSidingsData();
                this.sidingsItemFormGroup.reset();
                this.addSidingsItem =  false;
            } , error => {})
            
        }
    }

    editSidingsItem (id) {
        this.addSidingsItem = true;
        this.sidingsItemEditAction(id);
        this.title = 'Update';
    }

    sidingsItemEditAction(id: number) {
        this.sidingsService.findSidingsItemById(id).subscribe((responseData) => {
            this.editsidingsItemResponse = responseData;
            this.sidingsItemFormGroup.patchValue({
                id: this.editsidingsItemResponse.id,
                station:this.editsidingsItemResponse.station,
                sidingCode: this.editsidingsItemResponse.sidingCode,
                section: this.editsidingsItemResponse.section,
                sectionEletrifiedStatus: this.editsidingsItemResponse.sectionEletrifiedStatus,
                sidingEletrifiedStatus: this.editsidingsItemResponse.sidingEletrifiedStatus,
                privateRailway: this.editsidingsItemResponse.privateRailway,
                status: this.editsidingsItemResponse.status,
                tkm: this.editsidingsItemResponse.tkm,
                remarks: this.editsidingsItemResponse.remarks,
                sidingProposed: this.editsidingsItemResponse.sidingProposed,
                proposedDate: this.editsidingsItemResponse.proposedDate,
                approvedDate: this.editsidingsItemResponse.approvedDate,
                workOrderDate: this.editsidingsItemResponse.workOrderDate,
                workProgresspercentage: this.editsidingsItemResponse.workProgresspercentage,
                workProgressRemark: this.editsidingsItemResponse.workProgressRemark,
                completionDate: this.editsidingsItemResponse.completionDate
            })
        } ,error => {})
    }


    deleteSidingsItem (id) {
        this.confirmDialogRef = this.dialog.open(FuseConfirmDialogComponent, {
            disableClose: false
          });
        this.confirmDialogRef.componentInstance.confirmMessage = "Are you sure you want to delete the selected sidings item?";
        this.confirmDialogRef.afterClosed().subscribe(result => {
            if(result){
                this.sidingsService.deleteSidingsItem(id)
                    .subscribe((data) => {
                        this.commonService.showAlertMessage('Sidings Item Deleted Successfully');
                        this.getAllSidingsData();
                    },error => {});
            }
        });
    }
        
    
    applyFilter(filterValue: string) {
        filterValue = filterValue.trim();
        filterValue = filterValue.toLowerCase();
        this.sidingsItemDataSource.filter = filterValue;
    }

    onGoBack() {
        this.sidingsItemFormGroup.reset();
        this.addSidingsItem = false;
        this.title = 'Save';
    }

  

     NewSlidingsItem () {
        this.addSidingsItem = true;
    }
    

}