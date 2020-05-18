import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DrivesService } from 'src/app/services/drives.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { CommonService } from 'src/app/common/common.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Constants } from 'src/app/common/constants';

@Component({
  selector: 'app-add-drive-progress-record',
  templateUrl: './add-drive-progress-record.component.html',
  styleUrls: ['./add-drive-progress-record.component.css']
})
export class AddDriveProgressRecordComponent implements OnInit {
  loggedUserData: any = JSON.parse(localStorage.getItem('userData'));
  save: boolean = true;
  update: boolean = false;
  id: number = 0;
  isSubmit: boolean = false;
  title:string;
  addDriveDailyProgressFormGroup: FormGroup;
  pattern = "[a-zA-Z][a-zA-Z ]*";
  stateList = [{ 'id': 1, "value": 'Yes' }, { 'id': 2, "value": 'No' }];
  driveList = [];
  driveDailyProgressFormErrors: any;
  resp: any;
  divisionList:any;
  //stateList: any;
  constructor(
    private formBuilder: FormBuilder,    
    private drivesService: DrivesService,
    private spinnerService: Ng4LoadingSpinnerService,
    private commonService: CommonService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    // Reactive form errors
    this.driveDailyProgressFormErrors = {
      activityId: {},
      performedDate: {},
      division: {},
      depot: {},
      section:{},
      performedCount:{},
      supervisor:{},
      drive: {}
    };
  }

  ngOnInit() {
    this.id = +this.route.snapshot.params['id'];
    this.getDrivesData();
    this.findDivisions();
    this.createForm();
    if (!isNaN(this.id)) {
      this.addDriveDailyProgressFormGroup.valueChanges.subscribe(() => {
        this.onFormValuesChanged();
      });
      this.spinnerService.show();
      this.save = false;
      this.update = true;
      this.title = 'Edit';
      this.getDriveDailyProgressDataById(this.id);
    } else {
      this.save = true;
      this.update = false;
      this.title = 'Save';
    }
  }
  findDivisions(){
    this.drivesService.findDivisions()
    .subscribe((resp) => {
      this.divisionList = resp;
    });
  }
  createForm() {
    this.addDriveDailyProgressFormGroup
      = this.formBuilder.group({
        id: 0,
        'activityId': [null, Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9_.-]+$')])],
        'performedDate': [null, Validators.compose([Validators.required])],
        'division': [null, Validators.required],
        'depot': [null, Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9_.-]+$')])],
        'section': [null, Validators.required],
        'performedCount': [null, Validators.required],
        'supervisor': [null, Validators.required],
        'drive': [null, Validators.compose([Validators.required])],
      });
  }

  onFormValuesChanged() {
    for (const field in this.driveDailyProgressFormErrors) {
      if (!this.driveDailyProgressFormErrors.hasOwnProperty(field)) {
        continue;
      }
      this.driveDailyProgressFormErrors[field] = {};
      const control = this.addDriveDailyProgressFormGroup.get(field);

      if (control && control.dirty && !control.valid) {
        this.driveDailyProgressFormErrors[field] = control.errors;
      }
    }
  }

  getDrivesData() {
    this.drivesService.getDrivesData().subscribe((data) => {
      this.driveList = data;
      this.spinnerService.hide();
    }, error => {
      this.spinnerService.hide();
    });
  }
  getDriveDailyProgressDataById(id) {
    this.drivesService.findDriveDailyProgressDataById(id)
      .subscribe((resp) => {
        this.resp = resp;
        this.addDriveDailyProgressFormGroup.patchValue({
          id: this.resp.id,
          activityId: this.resp.activityId,
          performedDate: new Date(this.resp.performedDate),
          division: this.resp.division,
          depot: this.resp.depot,
          section: this.resp.section,
          performedCount: this.resp.performedCount,
          supervisor: this.resp.supervisor,
          drive: this.resp.driveId['id']
        });
        this.spinnerService.hide();
      })
  }

  onAddDriveDailyProgressFormSubmit() {
    if (this.addDriveDailyProgressFormGroup.invalid) {
      this.isSubmit = false;
      return;
    }
    this.spinnerService.show();
    console.log(this.addDriveDailyProgressFormGroup.value);
    var data = {};
    var message = '';
    var failedMessage = '';
    if (this.save) {
      data = {
        "activityId": this.addDriveDailyProgressFormGroup.value.activityId,
        "performedDate": this.addDriveDailyProgressFormGroup.value.performedDate,
        "division": this.addDriveDailyProgressFormGroup.value.division,
        "depot": this.addDriveDailyProgressFormGroup.value.depot,
        "section": this.addDriveDailyProgressFormGroup.value.section,
        "performedCount": this.addDriveDailyProgressFormGroup.value.performedCount,
        "supervisor": this.addDriveDailyProgressFormGroup.value.supervisor,
        "driveId": this.addDriveDailyProgressFormGroup.value.drive,
        "createdBy": this.loggedUserData.id,
        "createdOn": new Date()
      }    
      message = 'Saved';
      failedMessage = "Saving";
      this.drivesService.saveDriveDailyProgressData(data).subscribe(response => {
        this.spinnerService.hide();
        this.resp = response;
        if (this.resp.code == Constants.CODES.SUCCESS) {
        this.commonService.showAlertMessage("Drive Daily Progress Data "+message+" Successfully");
        this.router.navigate(['../'], { relativeTo: this.route });
        }else{
          this.commonService.showAlertMessage("Drive Daily Progress Data "+failedMessage+" Failed.");
        }
      }, error => {
        console.log('ERROR >>>');
        this.spinnerService.hide();
        this.commonService.showAlertMessage("Drive Daily Progress Data "+failedMessage+" Failed.");
      })
    }else if(this.update){
      data = {
        "id":this.id,
        "activityId": this.addDriveDailyProgressFormGroup.value.activityId,
        "performedDate": this.addDriveDailyProgressFormGroup.value.performedDate,
        "division": this.addDriveDailyProgressFormGroup.value.division,
        "depot": this.addDriveDailyProgressFormGroup.value.depot,
        "section": this.addDriveDailyProgressFormGroup.value.section,
        "performedCount": this.addDriveDailyProgressFormGroup.value.performedCount,
        "supervisor": this.addDriveDailyProgressFormGroup.value.supervisor,
        "driveId": this.addDriveDailyProgressFormGroup.value.drive,
        "updatedBy": this.loggedUserData.id,
        "updatedOn": new Date()
      }   
      message = 'Updated';
      failedMessage = "Updating";
      this.drivesService.updateDriveDailyProgressData(data).subscribe(response => {
        this.spinnerService.hide();
        this.resp = response;
        if (this.resp.code == Constants.CODES.SUCCESS) {
        this.commonService.showAlertMessage("Drive Daily Progress Data "+message+" Successfully");
        this.router.navigate(['../'], { relativeTo: this.route });
        }else{
          this.commonService.showAlertMessage("Drive Daily Progress Data "+failedMessage+" Failed.");
        }
      }, error => {
        console.log('ERROR >>>');
        this.spinnerService.hide();
        this.commonService.showAlertMessage("Drive Daily Progress Data "+failedMessage+" Failed.");
      })
    }
    
  }
  onGoBack() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
