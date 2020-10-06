export interface FootPatrollingInspectionModel{
    id: number;
    facilityId:any,
    inspectionType: string,
    section: string,
    inspectionBy: string,
    startTime:Date,
    stopTime:Date,
    
}
export interface ObservationModel {
    id:number;
    inspectionSeqId:number;
    location: string;
    observationCategory: string;
    observationItem: string;
    description: string;
    attachment: String;
}
export interface ComplianceModel {
    id:number;
    obeservationSeqId:string;
    status: string,
    action: string;
    complianceBy: string;
    compliedDateTime: Date;
}