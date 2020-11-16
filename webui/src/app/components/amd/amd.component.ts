import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialogRef, MatDialog } from '@angular/material';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { CommonService } from 'src/app/common/common.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FuseConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { Constants } from 'src/app/common/constants';
import { SendAndRequestService } from 'src/app/services/sendAndRequest.service';
import { AssetMasterDataModel } from 'src/app/models/asset-master-data.model';
import { DataViewDialogComponent } from '../data-view-dialog/data-view-dialog.component';
import { ReportModel } from 'src/app/models/report.model';
import { FieldLabelsConstant } from 'src/app/common/field-labels.constants';

@Component({
  selector: 'amd',
  templateUrl: './amd.component.html',
  styleUrls: []
})
export class AmdComponent implements OnInit {

  pagination =Constants.PAGINATION_NUMBERS;
  FiledLabels = FieldLabelsConstant.LABELS;
  Titles = FieldLabelsConstant.TITLE;
	addPermission: boolean = true;
  	editPermission: boolean = true;
    deletePermission: boolean = true;
    amdList:any;
    filterData;
    reportModel: ReportModel;
    pageSize: number;
    pageNo: number;
  	displayedColumns =['sno', 'type', 'facilityId', 'assetType', 'assetId', 'adeeSection', 'majorSection', 'section', 'locationPosition' , 'kilometer', 'elementarySection', 'actions'];
  	confirmDialogRef: MatDialogRef<FuseConfirmDialogComponent>;
  	facilityData: any;
    dataSource: MatTableDataSource<AssetMasterDataModel>;
    gridData = [];
  	@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  	@ViewChild(MatSort, { static: true }) sort: MatSort;
  	@ViewChild('filter', { static: true }) filter: ElementRef;  	
    dataViewDialogRef:MatDialogRef<DataViewDialogComponent>;
    depoTypeList = [];
    assetTypeList = [];
    scheduleList=[];
    allFunctionalUnitsList: any;
  constructor(
    private spinnerService: Ng4LoadingSpinnerService,
    private commonService: CommonService,
    private router: Router,
    private route: ActivatedRoute,
    public dialog: MatDialog,
    private sendAndRequestService:SendAndRequestService
  ) { }
  
  ngOnInit() {
    this.pageSize = 0;
    this.pageNo = 0;
    this.reportModel = new ReportModel();
    this.getAllAssetMasterData(0, 30);
    var permissionName = this.commonService.getPermissionNameByLoggedData("ASSET REGISTER", "OHE ASSET MASTER") ;
    this.addPermission = this.commonService.getPermissionByType("Add", permissionName);
    this.editPermission = this.commonService.getPermissionByType("Edit", permissionName);
    this.deletePermission = this.commonService.getPermissionByType("Delete", permissionName);
    this.spinnerService.show();
    this.findDepoTypeList();
    this.findFunctionalUnits();
    this.filterData = {
      filterColumnNames: [
        { "Key": 'sno', "Value": " " },
        { "Key": 'type', "Value": " " },
        { "Key": 'facilityId', "Value": " " },
        { "Key": 'assetType', "Value": " " },
        { "Key": 'assetId', "Value": "" },
        { "Key": 'adeeSection', "Value": " " },
        { "Key": 'majorSection', "Value": " " },
        { "Key": 'section', "Value": "" },
        { "Key": 'locationPosition', "Value": " " },
        { "Key": 'kilometer', "Value": " " },
        { "Key": 'elementarySection', "Value": " " },
      ],
      gridData: this.gridData,
      dataSource: this.dataSource,
      paginator: this.paginator,
      sort: this.sort
    };

  }
  findDepoTypeList() {
    this.sendAndRequestService.requestForGET(Constants.app_urls.REPORTS.GET_FUNCTIONAL_LOCATION_TYPES)
      .subscribe((depoTypes) => {
        this.depoTypeList = depoTypes;
      })
  }

  findAssetTypeList(assertType) {
    this.sendAndRequestService.requestForGET(Constants.app_urls.REPORTS.GET_ASSET_TYPES + assertType)
      .subscribe((assetTypes) => {
        this.assetTypeList = assetTypes;
      })
  }
 
  findFunctionalUnits() {
    this.sendAndRequestService.requestForGET(Constants.app_urls.REPORTS.GET_FACILITY_NAMES)
      .subscribe((units) => {
        this.allFunctionalUnitsList = units;
      })
  }
  getAllAssetMasterData(from: number, to: number) {
    this.spinnerService.show();
    const assetMasterData: AssetMasterDataModel[] = [];  
    this.sendAndRequestService.requestForGET(Constants.app_urls.ENERGY_BILL_PAYMENTS.ASSETMASTERDATA.GET_ASSET_MASTER_DATA + '/' + from + '/' + to).subscribe((data) => {
      this.amdList = data;
      for (let i = 0; i < this.amdList.length; i++) {
          this.amdList[i].sno = i+1;
          this.amdList[i].facilityId = this.amdList[i].facilityId;
          assetMasterData.push(this.amdList[i]);
        }
      this.filterData.gridData = assetMasterData;
      this.dataSource = new MatTableDataSource(assetMasterData);
      this.commonService.updateDataSource(this.dataSource,this.displayedColumns);
      this.filterData.dataSource = this.dataSource;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
  } , error => {});

  }
  processEditAction(id) {
    this.router.navigate([id], { relativeTo: this.route });
  }
  delete(id) {
    this.confirmDialogRef = this.dialog.open(FuseConfirmDialogComponent, {
      disableClose: false
      
    });
    this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete?';
    this.confirmDialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.spinnerService.show();
        this.sendAndRequestService.requestForDELETE(Constants.app_urls.ENERGY_BILL_PAYMENTS.ASSETMASTERDATA.DELETE_ASSET_MASTER_DATA, id)
        .subscribe(data => {
          this.spinnerService.hide();
          this.commonService.showAlertMessage("Deleted Asset MasterData Successfully");
          this.getAllAssetMasterData(0, 30);
        }, error => {
          console.log('ERROR >>>');
          this.spinnerService.hide();
          this.commonService.showAlertMessage("Asset MasterData Deletion failed.");
        })
      }
      this.confirmDialogRef = null;
    });
  }
  updatePagination() {
    this.filterData.dataSource = this.filterData.dataSource;
    this.filterData.dataSource.paginator = this.paginator;
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); 
    filterValue = filterValue.toLowerCase(); 
    this.filterData.dataSource.filter = filterValue;
  }
  ViewData(data) {
    var result = {
      'title': this.Titles.ASSET_MASTER_DATA,
      'dataSource': [
          
      { label:FieldLabelsConstant.LABELS.DEPOT_TYPE, value:data.depotType },
      { label:FieldLabelsConstant.LABELS.DEPOT, value:data.facilityId },
      { label:FieldLabelsConstant.LABELS.ASSET_TYPE, value:data.assetType },
      { label:FieldLabelsConstant.LABELS.ASSET_ID, value:data.assetId },
      { label:FieldLabelsConstant.LABELS.ADEE_SECTION, value:data.adeeSection },
      { label:FieldLabelsConstant.LABELS.MAJOR_SECTION, value:data.majorSection },
      { label:FieldLabelsConstant.LABELS.LOCATION_POSITION, value:data.locationPosition },
      { label:FieldLabelsConstant.LABELS.KILOMETER, value:data.kilometer },
      { label:FieldLabelsConstant.LABELS.ELEMENTARY_SECTIONS, value:data.elementarySections },
      { label:FieldLabelsConstant.LABELS.CREATED_ON, value:data.createdOn },
      { label:FieldLabelsConstant.LABELS.DATE_OF_COMMISSION, value:data.dateOfCommision },
      { label:FieldLabelsConstant.LABELS.DATE_OF_MANUFACTURE, value:data.dateOfManufacture },
      { label:FieldLabelsConstant.LABELS.DATE_OF_RECEIVED, value:data.dateOfReceived },
      { label:FieldLabelsConstant.LABELS.EQUIPPED_DATE, value:data.equippedDate },
      { label:FieldLabelsConstant.LABELS.EXPIRY_DATE, value:data.expiryDate },
      { label:FieldLabelsConstant.LABELS.LUG_DATE, value:data.lugDate },
      { label:FieldLabelsConstant.LABELS.STRIP_DATE, value:data.stripDate },
      { label:FieldLabelsConstant.LABELS.WARRANTY_AMC_ENDDATE, value:data.warrantyAmcEndDate }
          
    ]
    }
    this.dataViewDialogRef = this.dialog.open(DataViewDialogComponent, {
      disableClose: false,
      height: '400px',
      width: '80%',
      data: result,
    });
  }
  getServerData($event) {
    console.log($event);
    console.log($event.pageIndex + " : " + $event.pageSize + " : " + $event.length);
    if (((parseInt($event.pageIndex) + 1) * parseInt($event.pageSize)) == $event.length) {
      this.getAllAssetMasterData($event.length + 1, $event.length + 30);
    }
  }
}













