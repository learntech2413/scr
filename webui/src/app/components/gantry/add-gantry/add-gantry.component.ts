import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { CommonService } from 'src/app/common/common.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Constants } from 'src/app/common/constants';
import { SendAndRequestService } from 'src/app/services/sendAndRequest.service';
import { FieldLabelsConstant } from 'src/app/common/field-labels.constants';

@Component({
  selector: 'app-add-gantry',
  templateUrl: './add-gantry.component.html',
  styleUrls: []
})
export class AddGantryComponent implements OnInit {

  FiledLabels = FieldLabelsConstant.LABELS;
  Titles = FieldLabelsConstant.TITLE;
  save: boolean = true;
  update: boolean = false;
  id: number = 0;
  isSubmit: boolean = false;
  loggedUserData: any = JSON.parse(localStorage.getItem('userData'));
  resp: any;
  tpcBoardData:any;
  facilityData:any;
  eleSectionsData:any;
  title:string = Constants.EVENTS.ADD;
  productCateData:any;
  productCateTypeData:any;
  addGantryFormGroup: FormGroup;
  pattern = "[a-zA-Z][a-zA-Z ]*";
  constructor(
    private formBuilder: FormBuilder,
    private spinnerService: Ng4LoadingSpinnerService,
    private commonService: CommonService,
    private route: ActivatedRoute,
    private router: Router,
    private sendAndRequestService:SendAndRequestService
  ) {
    
  }

  ngOnInit() {
    this.depotTypeForOhe();
    this.elementarySections();
    this.tpcBoardDetails();
    this.id = +this.route.snapshot.params['id'];
    this.createOheLocationForm();
    if (!isNaN(this.id)) {     
      this.spinnerService.show();
      this.save = false;
      this.update = true;
      this.title = Constants.EVENTS.UPDATE;
      this.getGantryDataById(this.id);
    } else {
      this.save = true;
      this.update = false;
      this.title = Constants.EVENTS.ADD;
    }
    
  }
  
  

  createOheLocationForm() {
    this.addGantryFormGroup = this.formBuilder.group({
      id: 0,
      'facilityId':['', Validators.compose([Validators.required])],
      'gantryCode': ['', Validators.compose([Validators.required])],
      'elementarySections': [''],
      'protectionTraverseCrossover':[''],
      'protectionTraverseTurnout':[''],
      'protectionLongitudnalUp': [''],
      'protectionLongitudnalDn':[''],
      'normallyOpen':[''],
      'tpcBoard':[''],
       'remarks':['',Validators.compose([ Validators.maxLength(250)])],
    });
  }
  getGantryDataById(id) {
    this.sendAndRequestService.requestForGET(Constants.app_urls.ENERGY_BILL_PAYMENTS.GANTRY.GET_GANTRY_ID+id)
    .subscribe((resp) => {
        this.resp = resp;
        this.addGantryFormGroup.patchValue({
          id: this.resp.id,
          facilityId: this.resp.facilityId,
          gantryCode: this.resp.gantryCode,
          elementarySections: this.resp.elementarySections,
          protectionTraverseCrossover: this.resp.protectionTraverseCrossover,
          protectionTraverseTurnout: this.resp.protectionTraverseTurnout,
          protectionLongitudnalUp: this.resp.protectionLongitudnalUp,
          protectionLongitudnalDn: this.resp.protectionLongitudnalDn,
          normallyOpen: this.resp.normallyOpen,
          tpcBoard: this.resp.tpcBoard,
          remarks: this.resp.remarks,
        });
        this.spinnerService.hide();
      })
  }
  
  gantryFormSubmit() {
    this.isSubmit = true;
    if (this.addGantryFormGroup.invalid) {
      this.isSubmit = false;
      return;
    }
    this.spinnerService.show();
    if (this.save) {
      var saveGantryModel = {
        "facilityId": this.addGantryFormGroup.value.facilityId,
        "gantryCode": this.addGantryFormGroup.value.gantryCode,
        "elementarySections": this.addGantryFormGroup.value.elementarySections,
        "protectionTraverseCrossover": this.addGantryFormGroup.value.protectionTraverseCrossover,
        "protectionTraverseTurnout": this.addGantryFormGroup.value.protectionTraverseTurnout,
        "protectionLongitudnalUp": this.addGantryFormGroup.value.protectionLongitudnalUp,
        "protectionLongitudnalDn": this.addGantryFormGroup.value.protectionLongitudnalDn,
        "normallyOpen": this.addGantryFormGroup.value.normallyOpen,
        "tpcBoard": this.addGantryFormGroup.value.tpcBoard,  
        "remarks": this.addGantryFormGroup.value.remarks,                                                              
        "createdStamp": new Date(),
        "createdTxStamp": new Date(),
        "lastUpdatedStamp": new Date(),
        "lastUpdatedTxStamp": new Date()

      }
      this.sendAndRequestService.requestForPOST(Constants.app_urls.ENERGY_BILL_PAYMENTS.GANTRY.SAVE_GANTRY, saveGantryModel, false).subscribe(response => {
        this.spinnerService.hide();
        this.resp = response;
     
        if (this.resp.code == Constants.CODES.SUCCESS) {
          this.commonService.showAlertMessage("gantry Data Saved Successfully");
          this.router.navigate(['../'], { relativeTo: this.route });
        } else {
          this.commonService.showAlertMessage("gantry Data Saving Failed.");
        }
      }, error => {
        console.log('ERROR >>>');
        this.spinnerService.hide();
        this.commonService.showAlertMessage("gantry Data Saving Failed.");
      });
    } else if (this.update) {
      var updateGantryModel = {
        "id": this.id,
        "facilityId": this.addGantryFormGroup.value.facilityId,
        "gantryCode": this.addGantryFormGroup.value.gantryCode,
        "elementarySections": this.addGantryFormGroup.value.elementarySections,
        "protectionTraverseCrossover": this.addGantryFormGroup.value.protectionTraverseCrossover,
        "protectionTraverseTurnout": this.addGantryFormGroup.value.protectionTraverseTurnout,
        "protectionLongitudnalUp": this.addGantryFormGroup.value.protectionLongitudnalUp,
        "protectionLongitudnalDn": this.addGantryFormGroup.value.protectionLongitudnalDn,
        "normallyOpen": this.addGantryFormGroup.value.normallyOpen,
        "tpcBoard": this.addGantryFormGroup.value.tpcBoard,  
        "remarks": this.addGantryFormGroup.value.remarks,                                         
        "lastUpdatedStamp": new Date(),
        "lastUpdatedTxStamp": new Date()
      }
      this.sendAndRequestService.requestForPUT(Constants.app_urls.ENERGY_BILL_PAYMENTS.GANTRY.UPDATE_GANTRY, updateGantryModel, false).subscribe(response => {
        this.spinnerService.hide();
        this.resp = response;
        if (this.resp.code == Constants.CODES.SUCCESS) {
        this.commonService.showAlertMessage("gantry Data Updated Successfully");
        this.router.navigate(['../'], { relativeTo: this.route });
        }else{
          this.commonService.showAlertMessage("gantry Data Updating Failed.");
        }
      }, error => {
        console.log('ERROR >>>');
        this.spinnerService.hide();
        this.commonService.showAlertMessage("gantry Data Updating Failed.");
      })

    }
  }

  onGoBack() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
  depotTypeForOhe()
  {  
         this.sendAndRequestService.requestForGET(Constants.app_urls.REPORTS.GET_DEPOTTYPE_FOR_OHE).subscribe((data) => {
           this.facilityData = data;
  }
         );

 }
 elementarySections()
  {  
         this.sendAndRequestService.requestForGET(Constants.app_urls.REPORTS.GET_ELEMENTARY_SECTIONS).subscribe((data) => {
           this.eleSectionsData = data;
  }
         );

 } 
 tpcBoardDetails()
  {  
         this.sendAndRequestService.requestForGET(Constants.app_urls.REPORTS.GET_TPC_BOARD_DETAILS).subscribe((data) => {
           this.tpcBoardData = data;
  }
         );

 }
}
