import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { CommonService } from 'src/app/common/common.service';
import { Constants } from 'src/app/common/constants';
import { MatTableDataSource, MatPaginator, MatSort, MatDialogRef, MatDialog, DateAdapter, MAT_DATE_FORMATS } from '@angular/material';
import { SendAndRequestService } from 'src/app/services/sendAndRequest.service';
import { AppDateAdapter, APP_DATE_FORMATS } from 'src/app/common/date.adapter';
import { FieldLabelsConstant } from 'src/app/common/field-labels.constants';


@Component({
  selector: 'app-add-drive',
  templateUrl: './add-drive.component.html',
  styleUrls: [],
  providers: [
    {
        provide: DateAdapter, useClass: AppDateAdapter
    },
    {
        provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS
    }
    ]
})
export class AddDriveComponent implements OnInit {
  pagination=Constants.PAGINATION_NUMBERS;
  FiledLabels = FieldLabelsConstant.LABELS;
  Titles = FieldLabelsConstant.TITLE;
  loggedUserData: any = JSON.parse(sessionStorage.getItem('userData'));
  save: boolean = true;
  update: boolean = false;
  title: string = '';
  isSubmit: boolean = false;
  addDriveFormGroup: FormGroup;
  id: number = 0;
  pattern = "/^[a-zA-Z ]*$/";
  depoTypeList = [];
  isIdRequiredsList = [{ 'id': 1, "value": 'Yes' }, { 'id': 2, "value": 'No' }];
  CheckList = [{ 'id': 1, "value": 'Yes' }, { 'id': 2, "value": 'No' }];
  statusList = [{ 'id': 1, "value": 'Yes' }, { 'id': 2, "value": 'No' }];
  ScopeList = [{ 'id': 1, "value": 'ZONE' }, { 'id': 2, "value": 'DIV' },{ 'id': 3, "value": 'SUBDIV' },
  { 'id': 4, "value": 'TRD' },{ 'id': 5, "value": 'PSI' },{ 'id': 6, "value": 'RCC' }];
  assetTypeList = [];
  functionalUnitsList: any;
  functionalUnitList: any; 
  allFunctionalUnitsList:any; 
  driveFormErrors: any;
  resp: any;
  toMinDate = new Date();
  currentDate = new Date();
  dateFormat = 'MM-dd-yyyy ';
  scheduleList:any;
  depotCode: any;
  
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private spinnerService: Ng4LoadingSpinnerService,
    private commonService: CommonService,
    private router: Router,
    private dialog: MatDialog,
  
    private sendAndRequestService:SendAndRequestService
  ) 
  {
    // Reactive form errors
    this.driveFormErrors = {
      name: {},
      description: {},
      fromDate: {},
      toDate: {},
      depoType: {},
      assetType: {},
      frequency:{},
      assetDescription: {},
      criteria: {},
      targetQuantity: {},
      isIdRequired: {},
      functionalUnit: {},
      checklist: {},
      status: {}     
    };
  }

  ngOnInit() {
    this.id = +this.route.snapshot.params['id'];
    this.findFunctionalUnits();
    this.findDepoTypeList();
    this.createDriveForm();    
    this.findScheduleList();
    if (!isNaN(this.id)) {
      this.addDriveFormGroup.valueChanges.subscribe(() => {
        this.onFormValuesChanged();
      });
      this.spinnerService.show();
 
      this.save = false;
    
      this.update = true;
      this.title = Constants.EVENTS.UPDATE;
      this.getDriveDataById(this.id);
    } else {      
      this.title = Constants.EVENTS.ADD;      
    }  
    
  }
  onFormValuesChanged() {
    for (const field in this.driveFormErrors) {
      if (!this.driveFormErrors.hasOwnProperty(field)) {
        continue;
      }
      this.driveFormErrors[field] = {};
      const control = this.addDriveFormGroup.get(field);

      if (control && control.dirty && !control.valid) {
        this.driveFormErrors[field] = control.errors;
      }
    }
  }

  updateDriveForm(){
    this.addDriveFormGroup = this.formBuilder.group({
      id: 0,
      'name': [null, Validators.compose([Validators.required, Validators.maxLength(255)])],
      'description': [null, Validators.compose([Validators.required, Validators.maxLength(255)])],
      'fromDate': [null, Validators.required],
      'toDate': [null],
      'depoType': [null],
      'assetType': [null],
      'frequency':[null],
      'assetDescription': [null, Validators.maxLength(255)],
      'criteria': [null, Validators.maxLength(255)],
      'targetQuantity': [null],
      'isIdRequired': ['No'],
      'functionalUnit': [null],
      'checklist': ['No'],
      'status': ['Yes']
      
    });
  }
  createDriveForm() {
    this.addDriveFormGroup = this.formBuilder.group({
      id: 0,
      'name': [null, Validators.compose([Validators.required, Validators.maxLength(255)]), this.duplicateName.bind(this)],
      'description': [null, Validators.compose([Validators.required, Validators.maxLength(255)]), this.duplicateDescription.bind(this)],
      'fromDate': [null, Validators.required],
      'toDate': [null],
      'depoType': [null],
      'assetType': [null],
      'frequency':[null],
      'assetDescription': [null, Validators.maxLength(255)],
      'criteria': [null, Validators.maxLength(255)],
      'targetQuantity': [null],
      'isIdRequired': ['No'],
      'functionalUnit': [null],
      'checklist': ['No'],
      'status': ['Yes'],
      
    });
    this.addDriveFormGroup.patchValue({

      depoType: 5
    });
    this.depotCode = 'TRD';    
    this.findAssetTypeList(Constants.ASSERT_TYPE[this.depotCode]);
    this.functionalUnitsList = [];
    this.getFunctionalUnits(this.depotCode);

  }

  duplicateName() {
    var name =  this.addDriveFormGroup.controls['name'].value
    const q = new Promise((resolve, reject) => {
      if(this.update && name.toUpperCase()  == this.resp.name.toUpperCase()){
        resolve(null);
      }else{
      this.sendAndRequestService.requestForGET(Constants.app_urls.DRIVE.DRIVE.EXISTS_DRIVE_NAME + name
      ).subscribe((duplicate) => {
        if (duplicate) {
          resolve({ 'duplicateName': true });
        } else {
          resolve(null);
        }
      }, () => { resolve({ 'duplicateName': true }); });
    }
    });
    return q;
  }
  duplicateDescription() {
    var desc = this.addDriveFormGroup.controls['description'].value;
    const q = new Promise((resolve, reject) => {
      if(this.update && desc.toUpperCase() == this.resp.description.toUpperCase()){
        resolve(null);
      }else{
      this.sendAndRequestService.requestForGET(Constants.app_urls.DRIVE.DRIVE.EXISTS_DRIVE_DESCRIPTION + desc
      ).subscribe((duplicate) => {
        if (duplicate) {
          resolve({ 'duplicateDescription': true });
        } else {
          resolve(null);
        }
      }, () => { resolve({ 'duplicateDescription': true }); });
    }
    });
    return q;
  }

   public get f() { return this.addDriveFormGroup.controls; } 

  findDepoTypeList() {
    this.sendAndRequestService.requestForGET(Constants.app_urls.REPORTS.GET_FUNCTIONAL_LOCATION_TYPES)
      .subscribe((depoTypes) => {
        this.depoTypeList = depoTypes;
      })
  }
  findScheduleList() {
    this.sendAndRequestService.requestForGET(Constants.app_urls.ENERGY_BILL_PAYMENTS.ASSET_SCH_ASSOC.GET_SCH)
      .subscribe((frequency) => {
        this.scheduleList = frequency;
      })
  }
  addEvent($event) {
    this.toMinDate = new Date($event.value);
  }
  findAssetTypeList(assertType) {
      this.assetTypeList = [];
    this.sendAndRequestService.requestForGET(Constants.app_urls.REPORTS.GET_ASSET_TYPES+assertType)
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
  updateFunctionalUnit($event){
    
  }
  updateAssertType($event) {
    if ($event.value) {
      this.depoTypeList.filter(element => {
        if(element.id === $event.value){
            this.depotCode = element.code;
        }
      });  
      
      this.findAssetTypeList(Constants.ASSERT_TYPE[this.depotCode]);
      this.functionalUnitList = [];
      this.functionalUnitList = this.allFunctionalUnitsList.filter(element => {
        return element.depotType == this.depotCode;
      });
    }
  }

  getFunctionalUnits (depotType){    

          this.sendAndRequestService.requestForGET(Constants.app_urls.REPORTS.GET_FACILITY_BASED_ON_DEPOTTYPE+depotType).subscribe((data) => {
          this.functionalUnitList = data;
    });
  }

  getDriveDataById(id) {
 
    this.sendAndRequestService.requestForGET(Constants.app_urls.DRIVE.DRIVE.GET_DRIVE_ID+id)
    .subscribe((resp) => {
        this.resp = resp;
        this.getFunctionalUnits(this.resp.depotType['code'] );
        console.log("")
        this.addDriveFormGroup.patchValue({
          id: this.resp.id,
          name: this.resp.name,
          description: this.resp.description,
          fromDate: new Date(this.resp.fromDate),
          toDate: !!this.resp.toDate ? new Date(this.resp.toDate) : '',
          depoType:!! this.resp.depotType ? this.resp.depotType['id'] : '',          
          assetType: this.resp.assetType,
          frequency: this.resp.frequency,
          assetDescription: this.resp.assetDescription,
          criteria: this.resp.criteria,
          targetQuantity: this.resp.target_qty,
          functionalUnit: this.resp.functionalUnit,
          isIdRequired: this.resp.isIdRequired,
          checklist: this.resp.checklist,
          status: this.resp.active
          
        });
        this.IsRequire();
        //this.save = false;       
      this.toMinDate = new Date(this.resp.fromDate);
      this.depotCode = this.resp.depotType['code'];
        if (this.resp.depotType != null) {
          this.findAssetTypeList(Constants.ASSERT_TYPE[this.resp.depotType['code']]);
        }
        this.spinnerService.hide();
      })
  }
  typeId = [];
  assertTypeId = [];

  onAddDriveFormSubmit() {
    
    this.isSubmit = true;
    if (this.addDriveFormGroup.invalid) {
      this.isSubmit = false;
      return;
    }
    this.spinnerService.show();
    if (this.save) {
      var saveDriveModel = {
        "name": this.addDriveFormGroup.value.name,
        "description": this.addDriveFormGroup.value.description,
        "fromDate": this.addDriveFormGroup.value.fromDate,
        "toDate": this.addDriveFormGroup.value.toDate,
        "depotType":this.depotCode,
        "assetType": this.addDriveFormGroup.value.assetType,
        "frequency":this.addDriveFormGroup.value.frequency,
        "assetDescription": this.addDriveFormGroup.value.assetDescription,
        "criteria": this.addDriveFormGroup.value.criteria,
        "target_qty": this.addDriveFormGroup.value.targetQuantity,
        "isIdRequired": this.addDriveFormGroup.value.isIdRequired,
        "functionalUnit": this.addDriveFormGroup.value.functionalUnit,
        "checklist": this.addDriveFormGroup.value.checklist,
        "active": this.addDriveFormGroup.value.status,       
        "createdBy": this.loggedUserData.username,
        "createdOn": new Date()
      }
      
        this.sendAndRequestService.requestForPOST(Constants.app_urls.DRIVE.DRIVE.SAVE_DRIVE, saveDriveModel, false).subscribe(response => {
        this.spinnerService.hide();
        this.resp = response;
     
        if (this.resp.code == Constants.CODES.SUCCESS) {
          this.commonService.showAlertMessage("Drive Data Saved Successfully");
          this.router.navigate(['../'], { relativeTo: this.route });
        } else {
          this.commonService.showAlertMessage("Drive Data Saving Failed.");
        }
      }, error => {
        console.log('ERROR >>>');
        this.spinnerService.hide();
        this.commonService.showAlertMessage("Drive Data Saving Failed.");
      });
    } else if (this.update) {
      var updateDriveModel = {
        "id": this.id,
        "name": this.addDriveFormGroup.value.name,
        "description": this.addDriveFormGroup.value.description,
        "fromDate": this.addDriveFormGroup.value.fromDate,
        "toDate": this.addDriveFormGroup.value.toDate,
        "depotType":  this.depotCode,
        "assetType": this.addDriveFormGroup.value.assetType,
        "frequency":this.addDriveFormGroup.value.frequency,
        "assetDescription": this.addDriveFormGroup.value.assetDescription,
        "criteria": this.addDriveFormGroup.value.criteria,
        "target_qty": this.addDriveFormGroup.value.targetQuantity,
        "isIdRequired": this.addDriveFormGroup.value.isIdRequired,
        "functionalUnit": this.addDriveFormGroup.value.functionalUnit,
        "checklist": this.addDriveFormGroup.value.checklist,
        "active": this.addDriveFormGroup.value.status,    
        "createdBy":this.resp.createdBy, 
        "createdOn": this.resp.createdOn, 
        "updatedBy": this.loggedUserData.username,
        "updatedOn": new Date()
      }
      console.log("update=="+this.depotCode);
      this.sendAndRequestService.requestForPUT(Constants.app_urls.DRIVE.DRIVE.UPDATE_DRIVE, updateDriveModel, false).subscribe(response => {
        this.spinnerService.hide();
        this.resp = response;
        if (this.resp.code == Constants.CODES.SUCCESS) {
        this.commonService.showAlertMessage("Drive Data Updated Successfully");
        this.router.navigate(['../../'], { relativeTo: this.route });
        }else{
          this.commonService.showAlertMessage("Drive Data Updating Failed.");
        }
      }, error => {
        console.log('ERROR >>>');
        this.spinnerService.hide();
        this.commonService.showAlertMessage("Drive Data Updating Failed.");
      })

    }
  }
  IsRequire(){
    console.log('*** in function ***');
  if(this.addDriveFormGroup.controls['isIdRequired'].value=='Yes'&&this.addDriveFormGroup.controls['assetType'].value==null)
  {  
    console.log('*** in if condition ***');
    this.save = false;   
    this.commonService.showAlertMessage("Please select asset type.");
    }
   
  else{
    console.log('*** in else condition ***');
    if(!isNaN(this.id)) {
      this.update =true
    }else {
      this.save = true;
    }
    
  }
  
}
  onGoBack() {
    if (this.save) {
      this.router.navigate(['../'], { relativeTo: this.route });
    } else if (this.update) {
      this.router.navigate(['../../'], { relativeTo: this.route });
    }
  }
 
}



