import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSort, MatPaginator, MatTableDataSource, MatDialog } from '@angular/material';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { CommonService } from 'src/app/common/common.service';
import { FuseConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { environment } from '../../../environments/environment';
import { Constants } from 'src/app/common/constants';
import { SendAndRequestService } from 'src/app/services/sendAndRequest.service';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
    selector: 'file-information-dialog',
    templateUrl: './file-information-dialog.component.html',
    styleUrls: ['./file-information-dialog.component.scss']
})
export class FilesInformationDialogComponent implements OnInit {
    confirmDialogRef: MatDialogRef<FuseConfirmDialogComponent>;
    public response: any = [];
    type: string;
    url:string;
    appUrl=environment.apiUrl;
    schedulerDisplayedColumns = ['sno', 'fileName', 'actions'];
    schedulerDataSource: MatTableDataSource<any>;
    @ViewChild(MatPaginator, { static: true }) schedulerPaginator: MatPaginator;
    @ViewChild(MatSort, { static: true }) sort: MatSort;
    @ViewChild('filter', { static: true }) filter: ElementRef;
    constructor(
        @Inject(MAT_DIALOG_DATA) private data: any,
        public dialogRef: MatDialogRef<FilesInformationDialogComponent>,
        private spinnerService: Ng4LoadingSpinnerService,
        private commonService: CommonService,
        private sendAndRequestService: SendAndRequestService,
        public dialog: MatDialog,
        private sanitizer:DomSanitizer) {
        if (data) {
            this.response = data;
        }
    }

    ngOnInit() {
        this.type = localStorage.getItem("driveFileType");
        if(this.type == 'inspection'){
            this.url = environment.inspectionUrl;
        }else{
            this.url = environment.stipulationUrl;
        }
        this.prepareTable();
    }
    downloadFile(path, fileName) {
        const link = document.createElement('a');
         link.setAttribute('target', '_blank');
         link.setAttribute('href', path);
         link.setAttribute('download', fileName);
         document.body.appendChild(link);
         link.click(); 
    }
    prepareTable() {
        const divisionHistoryData = [];
        for (let i = 0; i < this.response.length; i++) {
            if (!!this.response[i]) {
                divisionHistoryData.push({
                    "sno": i + 1,
                    "fileName": this.response[i].originalFileName,
                    "type": this.type,
                    "commonFileId": this.response[i].commonFileId,
                    "genOps": this.response[i].genOps,
                    "rowid":this.response[i].id,
                    "path": this.sanitizer.bypassSecurityTrustUrl(this.response[i].changeFileName)
                });
            }
        }
        this.schedulerDataSource = new MatTableDataSource(divisionHistoryData);
        this.schedulerDataSource.paginator = this.schedulerPaginator;
        this.schedulerDataSource.sort = this.sort;
    }
    applyFilter(filterValue: string) {
        filterValue = filterValue.trim();
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.schedulerDataSource.filter = filterValue;
    }
    delete(rowid) {
        this.confirmDialogRef = this.dialog.open(FuseConfirmDialogComponent, {
            disableClose: false
        });
        this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete?';
        this.confirmDialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.spinnerService.show();
                var id = localStorage.getItem('driveFileTypeId');
                var data ={
                    "id":id,
                    "fileName":rowid,
                    "type":this.type
                }
                this.sendAndRequestService.requestForPOST(Constants.app_urls.INSPECTIONS.INSPECTIONS.DELETE_FILE, data, false).subscribe(data => {
                    this.spinnerService.hide();
                    this.commonService.showAlertMessage("Deleted File Successfully");
                    this.updateData(id);
                }, error => {
                    console.log('ERROR >>>');
                    this.spinnerService.hide();
                    this.commonService.showAlertMessage("File Deletion Failed.");
                })
            }
            this.confirmDialogRef = null;
        });
    }
    filesInfor: any;
    updateData(id) {
            this.sendAndRequestService.requestForGET(Constants.app_urls.INSPECTIONS.STIPULATION.GET_INSPECTION_AND_STIPULATION_ID + id).subscribe((response) => {
                this.filesInfor = response;
                this.response = response;
                this.spinnerService.hide();
                this.prepareTable();
               
            }, error => this.commonService.showAlertMessage(error));
        
    }

}
