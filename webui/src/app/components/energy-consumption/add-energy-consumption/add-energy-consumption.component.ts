import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { CommonService } from 'src/app/common/common.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SendAndRequestService } from 'src/app/services/sendAndRequest.service';
import { Constants } from 'src/app/common/constants';
import { DatePipe } from '@angular/common';
import { FieldLabelsConstant } from 'src/app/common/field-labels.constants';

@Component({
  selector: 'app-add-energy-consumption',
  templateUrl: './add-energy-consumption.component.html',
  styleUrls: ['./add-energy-consumption.component.css']
})

export class AddEnergyConsumptionComponent implements OnInit {

  pagination = Constants.PAGINATION_NUMBERS;
  FiledLabels = FieldLabelsConstant.LABELS;
  Titles = FieldLabelsConstant.TITLE;
  loggedUserData: any = JSON.parse(localStorage.getItem('userData'));
  save: boolean = true;
  update: boolean = false;
  disabled: boolean = true;
  id: number = 0;
  isSubmit: boolean = false;
  title: string = Constants.EVENTS.ADD;
  relayIndicationList = [];
  natureOfCloseList = [];
  addEnergyConsumptionFailFromGroup: FormGroup;
  pattern = "[a-zA-Z][a-zA-Z ]*";
  stateList = [{ 'id': 1, "value": 'Yes' }, { 'id': 2, "value": 'No' }];
  driveList = [];
  reportedList = [];
  energyConsumptionFailFormErrors: any;
  feedersList: any;
  extendedFromList: any = [];
  resp: any;
  reportDescriptionFlag = false;
  maxDate = new Date();
  minDate = new Date();
  dateFormat = 'MM-dd-yyyy HH:MM:SS';
  divisionList: any;
  failureList: any;
  failurecasList: any;
  difference: any;
  maxDateMax=new Date();
  minDateMax=new Date();
  kvahValidation:boolean=false;
  kwhValidation:boolean=false;
  rkvahLeadValidation:boolean=false;
  rkvahLangValidation:boolean=false;
  constructor(
    private formBuilder: FormBuilder,
    private spinnerService: Ng4LoadingSpinnerService,
    private commonService: CommonService,
    private route: ActivatedRoute,
    private router: Router,
    private datePipe: DatePipe,
    private sendAndRequestService: SendAndRequestService
  ) {
    // Reactive form errors
    this.energyConsumptionFailFormErrors = {
      Feeder_Name: {},
      Multification_Factor: {},
      Joint_Reading: {},
      cmd: {},
      Old_KWH: {},
      Current_KWH: {},
      Consumption_KWH: {},
      Old_KVAH: {},
      Current_KVAH: {},
      Consumption_KVAH: {},
      Old_RKVAH_Lag: {},
      Current_RKVAH_Lag: {},
      Consumption_RKVAH_Lag: {},
      Old_RKVAH_Lead: {},
      Current_RKVAH_Lead: {},
      Consumption_RKVAH_Lead: {},
      pf: {},
      cpf: {},
      rmd: {},
      Vol_Max: {},
      Vol_Min: {},
      Max_Load: {},
      jointReadingDate:{},
      maxLoadTime:{},
      remarks:{}
    };
  }

  ngOnInit() {
    //console.log('parent id = ' + ((localStorage.getItem('ec'))))
    this.id = +this.route.snapshot.params['id'];
    
    this.createForm();
    if (!isNaN(this.id)) {
      this.addEnergyConsumptionFailFromGroup.valueChanges.subscribe(() => {
        this.onFormValuesChanged();
      });
      this.spinnerService.show();
      this.save = false;
      this.update = true;
      this.title = Constants.EVENTS.UPDATE;
      this.findEnergyConsumptionById(this.id);
    } else {
      this.save = true;
      this.update = false;
      this.title = Constants.EVENTS.ADD;
    }
    //this.maxDateMax = this.datePipe.transform(new Date(), 'yyyy-MM-dd') +" 00:00:00";
    let dte = new Date();
   // this.minDateMax = dte.getDate() - 1;//, 'yyyy-MM-dd') +" 00:00:00";
   this.minDateMax.setDate(dte.getDate() - 1)
  }

  createForm() {
    this.addEnergyConsumptionFailFromGroup
      = this.formBuilder.group({
        id: 0,
        'Feeder_Name': new FormControl({ value: '', disabled: true }),
        'Multification_Factor': new FormControl({ value: '', disabled: true }),
        'Joint_Reading': [null],
        'cmd': new FormControl({ value: '', disabled: true }),
        'Old_KWH': new FormControl({ value: '', disabled: true }),
        'Current_KWH': [null,Validators.compose([Validators.required])],
        'Consumption_KWH': new FormControl({ value: '', disabled: true }),
        'Old_KVAH': new FormControl({ value: '', disabled: true }),
        'Current_KVAH': [null,Validators.compose([Validators.required])],
        'Consumption_KVAH': new FormControl({ value: '', disabled: true }),
        'Old_RKVAH_Lag': new FormControl({ value: '', disabled: true }),
        'Current_RKVAH_Lag': [null,Validators.compose([Validators.required])],
        'Consumption_RKVAH_Lag': new FormControl({ value: '', disabled: true }),
        'Old_RKVAH_Lead': new FormControl({ value: '', disabled: true }),
        'Current_RKVAH_Lead': [null,Validators.compose([Validators.required])],
        'Consumption_RKVAH_Lead': new FormControl({ value: '', disabled: true }),
        'pf':  new FormControl({ value: '', disabled: true }),
        'cpf':  new FormControl({ value: '', disabled: true }),
        'rmd': [null],
        'Vol_Max': [null],
        'Vol_Min': [null],
        'Max_Load': [null],
        'maxLoadTime':[null],
        'remarks':[null],
        'jointReadingDate':  new FormControl({ value: '', disabled: true })
      });
  }

  onFormValuesChanged() {
    for (const field in this.energyConsumptionFailFormErrors) {
      if (!this.energyConsumptionFailFormErrors.hasOwnProperty(field)) {
        continue;
      }
      this.energyConsumptionFailFormErrors[field] = {};
      const control = this.addEnergyConsumptionFailFromGroup.get(field);
      if (control && control.dirty && !control.valid) {
        this.energyConsumptionFailFormErrors[field] = control.errors;
      }
    }
  }

  updateFeedOff($event) {
    if ($event.value) {
      console.log($event.value)
      this.extendedFromList = [];
      //this.reportDescriptionFlag = $event.value == Constants.YES ? true : false;
      this.feedersList.map(element => {
        if (element.feederName != $event.value) {
          this.extendedFromList.push(element);
        }
      });
    }
  }
  findEnergyConsumptionById(id) {
     this.resp = JSON.parse(localStorage.getItem("ec"));
    console.log(this.resp);
    this.addEnergyConsumptionFailFromGroup.patchValue({
      id: this.resp.id,
      Feeder_Name: this.resp.Feeder_Name,
      Multification_Factor: this.resp.Multification_Factor,
      Joint_Reading: this.resp.joint_meter == 'Yes' ? this.resp.joint_meter : '',
      cmd: this.resp.cmd,
      Old_KWH: this.resp.Old_KWH,
      Current_KWH: this.resp.Current_KWH,
      Consumption_KWH: this.resp.Consumption_KWH,
      Old_KVAH: this.resp.Old_KVAH,
      Current_KVAH: this.resp.Current_KVAH,
      Consumption_KVAH: this.resp.Consumption_KVAH,
      Old_RKVAH_Lag: this.resp.Old_RKVAH_Lag,
      Current_RKVAH_Lag: this.resp.Current_RKVAH_Lag,
      Consumption_RKVAH_Lag: this.resp.Consumption_RKVAH_Lag,
      Old_RKVAH_Lead: this.resp.Old_RKVAH_Lead,
      Current_RKVAH_Lead: this.resp.Current_RKVAH_Lead,
      Consumption_RKVAH_Lead: this.resp.Consumption_RKVAH_Lead,
      requested_reading_date:this.resp.requested_reading_date,
      pf: this.resp.pf,
      cpf: this.resp.cpf,
      rmd: this.resp.rmd,
      Vol_Max: this.resp.Vol_Max,
      Vol_Min: this.resp.Vol_Min,
      Max_Load: this.resp.Max_Load,
      maxLoadTime:this.resp.max_load_time_hhmm != null ? new Date(this.resp.max_load_time_hhmm) : new Date(),
      remarks:this.resp.remarks,
      jointReadingDate:this.resp.joint_reading_date != null ? this.resp.joint_reading_date+'('+this.resp.no_of_days_lapsed_j_reading+')' : '',
      
    });
    this.spinnerService.hide();
    // })
  }

  updateKWH($event) {
    if (parseFloat($event.target.value) && parseFloat($event.target.value) >=  parseFloat(this.resp.Old_KWH)) {
      this.addEnergyConsumptionFailFromGroup.patchValue({ Consumption_KWH: (parseFloat($event.target.value) - parseFloat(this.resp.Old_KWH)) * parseFloat(this.resp.Multification_Factor) });
      this.kwhValidation = false;
    } else {
      this.addEnergyConsumptionFailFromGroup.patchValue({ Consumption_KWH: 0 });
      this.kwhValidation = true;
    }
  }

  updateKVAH($event) {
    if (parseFloat($event.target.value) && parseFloat($event.target.value) >= parseFloat(this.resp.Old_KVAH)) {
      this.addEnergyConsumptionFailFromGroup.patchValue({ Consumption_KVAH: (parseFloat($event.target.value) - parseFloat(this.resp.Old_KVAH)) * parseFloat(this.resp.Multification_Factor) });
      this.kvahValidation = false;
      this.addEnergyConsumptionFailFromGroup.patchValue({ pf: (parseFloat(this.addEnergyConsumptionFailFromGroup.controls.Current_KWH.value) / parseFloat($event.target.value)) });
    } else {
      this.kvahValidation =true;
      this.addEnergyConsumptionFailFromGroup.patchValue({ Consumption_KVAH: 0 });
    }
  }

  updateRKVAHLag($event ) {
    if (parseFloat($event.target.value) && parseFloat($event.target.value) >= parseFloat(this.resp.Old_RKVAH_Lag)) {
      this.addEnergyConsumptionFailFromGroup.patchValue({ Consumption_RKVAH_Lag: (parseFloat($event.target.value) - parseFloat(this.resp.Old_RKVAH_Lag)) * parseFloat(this.resp.Multification_Factor) });
      this.rkvahLangValidation = false;
    } else {
      this.rkvahLangValidation = true;
      this.addEnergyConsumptionFailFromGroup.patchValue({ Consumption_RKVAH_Lag: 0 });
    }
  }

  updateRKVAHLead($event) {
    if (parseFloat($event.target.value) && parseFloat($event.target.value) >= parseFloat(this.resp.Old_RKVAH_Lead)) {
      this.addEnergyConsumptionFailFromGroup.patchValue({ Consumption_RKVAH_Lead: (parseFloat($event.target.value) - parseFloat(this.resp.Old_RKVAH_Lead)) * parseFloat(this.resp.Multification_Factor) });
      this.rkvahLeadValidation = false;
    } else {
      this.rkvahLeadValidation = true;
      this.addEnergyConsumptionFailFromGroup.patchValue({ Consumption_RKVAH_Lead: 0 });
    }
  }

  addEvent($event) {
    this.minDate = new Date($event.value);
  }
  addEventTargetDate($event) {
    this.minDate = new Date($event.value);
  }

  onAddEnergyConsumptionFormSubmit() {
    if (this.addEnergyConsumptionFailFromGroup.invalid) {
      this.isSubmit = false;
      return;
    }
    this.spinnerService.show();
    var data = {};
    var message = '';
    var failedMessage = '';

    //let casc = this.addEnergyConsumptionFailFromGroup.value.cascadeAssets;
    console.log(this.addEnergyConsumptionFailFromGroup)
    data = {
      "id": this.resp.id,
      'feederName': this.resp.feederName,
      'feederId':this.resp.feederId,
      'multiplicationFac': this.resp.multiplicationFac,
      'requestedReadingDate':this.resp.requestedReadingDate,
      'jointMeter': this.addEnergyConsumptionFailFromGroup.value.Joint_Reading == true ? 'Yes' : 'No',
      'curCmd': this.resp.cmd,
      'prevkwh': this.resp.Old_KWH,
      'curKwh': this.addEnergyConsumptionFailFromGroup.value.Current_KWH,
      'consumptionKwh': this.addEnergyConsumptionFailFromGroup.controls.Consumption_KWH.value,
      'prevKvah': this.resp.Old_KVAH,
      'curKvah': this.addEnergyConsumptionFailFromGroup.controls.Current_KVAH.value,
      'consumptionKvah': this.addEnergyConsumptionFailFromGroup.controls.Consumption_KVAH.value,
      'prevRkvahLag': this.resp.Old_RKVAH_Lag,
      'curRkvahLag': this.addEnergyConsumptionFailFromGroup.controls.Current_RKVAH_Lag.value,
      'consumptionRkvahLag': this.addEnergyConsumptionFailFromGroup.controls.Consumption_RKVAH_Lag.value,
      'prevRkvahLead': this.resp.Old_RKVAH_Lead,
      'curRkvahLead': this.addEnergyConsumptionFailFromGroup.controls.Current_RKVAH_Lead.value,
      'consumptionRkvahLead': this.addEnergyConsumptionFailFromGroup.controls.Consumption_RKVAH_Lead.value,
      'pf': this.resp.pf,
      'cpf': this.resp.cpf,
      'rmd':parseFloat( this.addEnergyConsumptionFailFromGroup.controls.rmd.value),
      'curVolMax': this.addEnergyConsumptionFailFromGroup.value.Vol_Max,
      'curVolMin': this.addEnergyConsumptionFailFromGroup.value.Vol_Min,
      'curMaxLoad': this.addEnergyConsumptionFailFromGroup.value.Max_Load,
      'maxLoadTimeHhmm':this.addEnergyConsumptionFailFromGroup.value.maxLoadTime,
      'remarks':this.addEnergyConsumptionFailFromGroup.value.remarks,
      'energyReadingDate':this.resp.energyReadingDate,
      'dataDiv':this.resp.dataDiv,
      "updatedBy": this.loggedUserData.username,
      "updatedOn": new Date()
    }
    message = 'Updated';
    failedMessage = "Updating";

    console.log(data);
    //return;

    this.sendAndRequestService.requestForPUT(Constants.app_urls.ENERGY_CONSUMPTION.UPDATE_ENERGY_CONSUMPTION, data, false).subscribe(response => {
      this.spinnerService.hide();
      this.resp = response;
      if (this.resp.code == Constants.CODES.SUCCESS) {
        this.commonService.showAlertMessage("Energy Consumption Data " + message + " Successfully");
        this.router.navigate(['../'], { relativeTo: this.route });
      } else {
        this.commonService.showAlertMessage("Energy Consumption Data " + failedMessage + " Failed.");
      }
    }, error => {
      console.log('ERROR >>>');
      this.spinnerService.hide();
      this.commonService.showAlertMessage("Energy Consumption Data " + failedMessage + " Failed.");
    })


  }
  onGoBack() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

}
