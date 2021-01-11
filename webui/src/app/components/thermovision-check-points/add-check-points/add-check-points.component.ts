import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FieldLabelsConstant } from 'src/app/common/field-labels.constants';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { CommonService } from 'src/app/common/common.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Constants } from 'src/app/common/constants';
import { SendAndRequestService } from 'src/app/services/sendAndRequest.service';


@Component({
  selector: 'app-add-check-points',
  templateUrl: './add-check-points.component.html',
  styleUrls: [],
})

export class AddCheckPointsComponent implements OnInit {

    FiledLabels = FieldLabelsConstant.LABELS;
    Titles = FieldLabelsConstant.TITLE;
    save: boolean = true;
    update: boolean = false;
    id: number = 0;
    isSubmit: boolean = false;
    loggedUserData: any = JSON.parse(localStorage.getItem('userData'));
    resp: any;    
    title:string;      
    addCheckPointsFormGroup: FormGroup;
    checkPointFormErrors:any;
    pattern = "[a-zA-Z][a-zA-Z ]*";
    facilityData: any;
   
    dependencyValidation:boolean=false;

  constructor( private formBuilder: FormBuilder,
    private spinnerService: Ng4LoadingSpinnerService,
    private commonService: CommonService,
    private route: ActivatedRoute,
    private router: Router,
    private sendAndRequestService:SendAndRequestService
   
  ) { 
    this.checkPointFormErrors = {            
      facilityId:{},
      checkPointPart: {},
      checkPointDescription: {},
      commparisonPoints:{},
      typOfCheckPoint:{},
      displayGroup: {},
      displayOrder:{},
      };
  }

  ngOnInit() { 
    this.depotTypeForOhe(); 
    this.id = +this.route.snapshot.params['id'];
      if (!isNaN(this.id)) { 
    
      this.spinnerService.show();
      this.save = false;
      this.update = true;
      this.title = Constants.EVENTS.UPDATE;
      
    } else {
      this.createCheckPointsForm();         
      this.title = Constants.EVENTS.ADD;
    }
    
  }
 
  
  onFormValuesChanged() {
    for (const field in this.checkPointFormErrors) {
      if (!this.checkPointFormErrors.hasOwnProperty(field)) {
        continue;
      }
      this.checkPointFormErrors[field] = {};
      const control = this.addCheckPointsFormGroup.get(field);

      if (control && control.dirty && !control.valid) {
        this.checkPointFormErrors[field] = control.errors;
      }
    }
  }

createCheckPointsForm() {
this.addCheckPointsFormGroup = this.formBuilder.group({
  id: 0, 
  'facilityId':[null, Validators.compose([Validators.required])],
  'checkPointPart': [null, Validators.compose([Validators.required])],
  'checkPointDescription': [null],
  'commparisonPoints':[null],
  'typeOfCheckPoint':[null],
  'displayGroup': [null],
  'displayOrder':[null],
});
}

checkPointSubmit() {
this.isSubmit = true;
if (this.addCheckPointsFormGroup.invalid) {
  this.isSubmit = false;
  return;
}
this.spinnerService.show();

  if (this.save) {
    var saveCheckPointsModel = {
      "facilityId": this.addCheckPointsFormGroup.value.facilityId,
      "checkPointPart": this.addCheckPointsFormGroup.value.checkPointPart,
      "checkPointDescription": this.addCheckPointsFormGroup.value.checkPointDescription,
      "commparisonPoints": this.addCheckPointsFormGroup.value.commparisonPoints,
      "typeOfCheckPoint": this.addCheckPointsFormGroup.value.typeOfCheckPoint,
      "displayGroup": this.addCheckPointsFormGroup.value.displayGroup,
      "displayOrder": this.addCheckPointsFormGroup.value.displayOrder,
    }
    this.sendAndRequestService.requestForPOST(Constants.app_urls.THERMOVISION.THERMOVISION_CHECK_POINTS.SAVE_CHECK_POINTS, saveCheckPointsModel, false).subscribe(response => {
      this.spinnerService.hide();
      this.resp = response;
   console.log("saveCheckPointsModel"+saveCheckPointsModel.facilityId)
      if (this.resp.code == Constants.CODES.SUCCESS) {
        this.commonService.showAlertMessage("Check Point Data Saved Successfully");
        this.router.navigate(['../'], { relativeTo: this.route });
      } else {
        this.commonService.showAlertMessage("Check Point Saving Failed.");
      }
    }, error => {
      console.log('ERROR >>>');
      this.spinnerService.hide();
      this.commonService.showAlertMessage("Check Point Saving Failed.");
    });
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

}