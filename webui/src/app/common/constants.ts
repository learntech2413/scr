export const Constants = {
    YES:"YES",
    NO:'NO',
    CODES:{
        'SUCCESS':200
    },
    app_urls:{
        AUTHENTICATION:{
            LOGIN:"/login",
            REGISTRATION:"/registration",
            DASHBOARD:"dashboard",
            MENU_MASTER:"menuMaster",
            SUB_MENU_URL:"submenuMaster",
            FORGOT_PASSWORD:"/forgotPassword",
            RESET_PASSWORD:"/resetPassword",
            CHANGE_PASSWORD:"/changePassword",
            UPDATE_PASSWORD:"/updatePassword",
            MAIL_CONFIRMATION:"/mailConfirmation",
        }, 
        DASHBOARD:{
            GET_DASHBOARD:"/dashboard/"
        },    
        REPORTS:{
            GET_REPORT_PARAMETER:"/reportParameterNames",
            GET_REPORT_NAMES:"/reportNames/",
            GET_MAKE_REPORT:"/makeReport",
            GET_FACILITY_NAMES:"/facilityNames",
            GET_POWER_BLOCKS:"/powerBlocks",
            GET_ZONE_LIST:"/zoneList",
            GET_PB_SWITCH_CONTROL:"/pbSwitchControl",
            GET_ELEMENTARY_SECTIONS:"/elementarySectionsByFacilityId",
            GET_OBS_CATEGORIES:"/observationCategories",
            GET_OBS_CHECK_LIST:"/observationCheckList",
            GET_REPORT:"/generateReport",
            GET_ASSET_TYPES:"/allAssetTypeReports/",
            GET_ASSETMASTER_DATA:"/assetMasterData",
            GET_DIVISION_DETAILS:"/divisionDetails",
            GET_DEPOTTYPE_FOR_OHE:"/depotTypeForOhe",
            GET_INSPECTION_TYPE:"/inspectionTypeData",
            GET_ENERGY_SUPPLIERS:"/electricEnergySuppliers",
            GET_DEPOT_OHE_AND_PSI:"/depotTypeOheAndPsi",
            GET_FUNCTIONAL_LOCATION_TYPES:"/functionalLocationsTypes",
            GET_STIPULATION_DETAILS:"/stipulationDetails",
            GET_UOM_DETAILS:"/uomDetails",
            GET_SECTION_DETAILS:"/sectionDetails",
            GET_STATUS_DETAILS:"/statusItemDetails/",
            GET_MAKE_DETAILS:"/makeDetails",
            GET_MODEL_DETAILS:"/modelDetails",
            GET_MAJOR_SECTION_DETAILS:"/majorSectionDetails",
            GET_PRODUCT_MAKE_MODEL_ASSOC:"/productMakeModelAssoc",
            GET_TPC_BOARD_DETAILS:"/tpcBoardDetails",
            GET_PRECAUTIONARY_MEASURE_DETAILS:"/precautionaryMeasureDetails",
            GET_ELECTRIFICATION_TARGET_DETAILS:"/electrificationTargets",
            GET_FAILUREANALYSIS_DETAILS:"/failureAnalysisDetails",
            GET_CRS_EIG_INSPECTION_DETAILS:"/crsEigInspectionDetails",
            GET_TSS_FEEDER_MASTER_DETAILS:"/findAllTssFeederMaster",
            GET_CONTENET_TOPIC:"/existsContentTopic",
            GET_CONTENT_CATEGORY:"/existsContentCategory",
            GET_ASSETTYPE_BASED_ON_ASSETID_FACILITYID:"/assetTypeBasedonAssetIdAndFacilityId/",
            GET_ASSETID_BASED_ON_ASSETTYPE_FACILITYID:"/assetIdBasedonAssetTypeAndFacilityId/",
            GET_FACILITY_BASED_ON_DEPOTTYPE:"/getFacilitysBasedOnDepotType/",
            GET_SCHEDULE_CODE_BASED_ON_ASSETTYPE:"/getscheduleCodesBasedonAssetType/",
            GET_ASSETID_BASED_ON_SCHEDULE_CODES_AND_ASSETTYPES:"/getAssetIdBasedOnScheduleCodesAndAssetTypes/",
            GET_DIVISION_BASED_ON_ZONE:"/getDivisionBasedOnZone/",
            GET_SUBDIVISION_BASED_ON_DIVISION:"/getSubDivisionBasedOnDivision/",
            GET_FACILITY_BASED_ON_SUBDIVISION:"/getFacilityBasedOnSubDivision/"
        },        
        MASTERS:{
            ROLE_TYPE:{
                GET_ROLE_LIST:"/findAllRoles",
                GET_MASTER_ROLE_LIST:"/findMasterRoles",
                GET_ROLE_DATA_ID:"/roleById/",
                SAVE_ROLE:"/addRole",
                UPDATE_ROLE:"/editRole",
                SAVE_ROLE_PERMISSION:"/saveRolePermission/",
                DELETE_ROLE:"/deleteRole/",
                GET_PERMISSION:"/permissions",
                DELETE_ROLE_PERMISSION:"/Permissions/Delete?id=",
                GET_ROLE_TYPE_PERMISSION:"/getRoleTypePermissons/",
                DUPLICATE_ROLE_TYPE:"/findDuplicateRole/",
                CREATED_PERMISSIONS:"/savePermission"
            },
            DEPARTMENT:{
                GET_DEPARTMENTS:"/findAllDepartments",
                GET_DEPARTMENT_ID:"/findRepartmentById/",
                SAVE_DEPARTMENT:"/addDepartment",
                UPDATE_DEPARTMENT:"/updateDepartment",
                DELETE_DEPARTMENT:"/deleteDepartment/",
                EXIST_DEPARTMENT:"/existsDepartmentName/"
            },
            USERS:{
                GET_USER:"/users",
                GET_USER_ID:"/users/",
                SAVE_USER:"/users/register",
                UPDATE_USER:"/users/",
                DELETE_USER:"/users/",
                GET_ALLUSERS:"/allUsers",
                ROLE_TYPE_MASTER:"/findAllRoles",
                GET_DEPARTMENT_MASTER:"/findAllDepartments",
                SAVE_USERS:"/addUser",
                GET_USERS_BYID:"/findUserById/",
                UPDATE_USERS:"/editUser",
                DELETE_USERS:"/deleteUser/",
                EXIST_EMAIL:"/duplicateEmail"
            },
            ROLE_PERMISSIONS:{
                GET_ROLE_PERMISSION:"/findAllRolesWithPermissions",               
                UPDATE_ROLE_PERMISSION:"/updatePermission",
            },
            SCHEDULER_TRACKING:{
                GET_JOBS:'/findAllJobInfo',
                RERUN_WITH_REMARK:'/reRunWithRemark',
                DOWNLOAD_XL:'/download',
                FIND_OPERATIONS_INFO:'/findOperationsInfo/',
                FIND_JOBS_HISTORY_INFO:'/findJobsHistoryInfo/',
                DIVISION_INFO:'/divisionInfo/'
            },
            SCHEDULER_SETTINGS:{
                SAVE:'/addSchedulerSettings',
                UPDATE:'/updateSchedulerSettings',
                DELETE:'/deleteSchedulerSettings/',
                GET_SCHEDULER_JOBS:'/findAllSchedulerJobs',
                EDIT:'/findScheduleJobById/',
                GET_SCHEDULER_JOBS_LIST:'/findAllSchedulerJobsList',
                TIME_INTERVAL:{
                    GET_INTERVALS:'/findAllTimeIntervals',
                    GET_TIME_INTERVAL_BY_ID:"/findTimeIntervalById/",
                    SAVE_TIME_INTERVAL:"/addTimeInterval",
                    UPDATE:'/updateTimeInterval',
                    DELETE_TIME_INTERVAL:"/deleteTimeInterval/",
                    EXISTS_TIME_INTERVAL:"/existsTimeInterval/"
                },
                JOB_TYPE:{
                    GET_JOB_TYPE:"/findAllJobTypes",
                    GET_JOB_TYPE_ID:"/findJobTypeById/",
                    SAVE_JOB_TYE:"/addJobType",
                    UPDATE_JOB_TYPE:"/updateJobType",
                    DELETE_JOB_TYPE:"/deleteJobType/"                    
                },
                REPOSITORY:{
                    GET_REPOSITORIES:'/findAllRepositories',
                    FIND_BY_ID:'/findRepositoryById/',
                    EXISTS_REPOSITORY_CODE:'/existsRepositoryCode/',
                    EXISTS_REPOSITORY_NAME:'/existsRepositoryName/',
                    EXISTS_REPOSITORY_IP:'/existsRepositoryIp/',
                    SAVE:'/addRepository',
                    UPDATE:'/updateRepository',
                    DELETE:'/deleteRepository/'
                }
            },
            MEASURE_ACTIVITY:{
                GET_MEASURE:"/findAllMeasures",
                GET_MEASURE_ID:"/findMeasures/",
                SAVE_MEASURE:"/addMeasures",
                UPDATE_MEASURE:"/updateMeasures",
                DELETE_MEASURE:"/deleteMeasures/",
                EXISTS_ACTIVITY_ID:'/existsActivityId/',
                EXISTS_ACTIVITYNAME:'/existsActivityName/',
                EXISTS_ACTIVITYNAME_UNITOFMEASURE:'/existsActivityNameAndUnitOfMeasure/'

            }
        },
        ENERGY_BILL_PAYMENTS:{
            GET_ENERGY_BILL_PAYMENTS:'/findAllEnergyBillPayments',
            SAVE:'/addEneBillPayment',
            EDIT:'/findEneBillPayment/',
            UPDATE:'/updateEneBillPayment',
            DELETE:'/deleteEneBillPayment/',
            GUIDENCE_ITEM:{
                GET_GUIDENCE_ITEM:"/findAllGuidenceItems",
                GET_GUIDENCE_ITEM_ID:"/findGuidenceItemById/",
                SAVE_GUIDENCE_ITEM:"/addGuidenceItem",
                UPDATE_GUIDENCE_ITEM:"/updateGuidenceItem",
                DELETE_GUIDENCE_ITEM:"/deleteGuidenceItem/"
            },
            WORK:{
                GET_WORK:"/findAllWorks",
                GET_WORK_ID:"/findWork/",
                SAVE_WORK:"/addWork",
                UPDATE_WORK:"/updateWork",
                DELETE_WORK:"/deleteWork/",
                EXISTS_WORK_NAME:'/existsWorkName/'
            },
            SIDINGS:{
                GET_SIDINGS:"/findAllSidingsItems",
                GET_SIDINGS_ID:"/findSidingsItemById/",
                SAVE_SIDINGS:"/addSlidingsItem",
                UPDATE_SIDINGS:"/updateSlidingsItem",
                DELETE_SIDINGS:"/deleteSidingsItem/",
                EXISTS_SIDING_CODE:'/existsSidingCode/'
            },
            TARIFF:{
                GET_TARIFF:"/findAllTractionEnergyTariff",
                GET_TARIFF_ID:"/findTractionEnergyTariff/",
                SAVE_TARIFF:"/addTractionEnergyTariff",
                UPDATE_TARIFF:"/updateTractionEnergyTariff",
                DELETE_TARIFF:"/deleteTractionEnergyTariff/",
                ATTACHMENT_LIST:"/attachedDocumentList/",
                EXISTS_FROM_DATE:'/existsFromDate/',
                TARIFF_UPLOAD_FILES:'/tariffUploadFiles'
            },
            TRACK:{
                GET_TRACK:"/findAllTrack",
                GET_TRACK_ID:"/findTrack/",
                SAVE_TRACK:"/addTrack",
                UPDATE_TRACK:"/updateTrack",
                DELETE_TRACK:"/deleteTrack/"
            },
            ENERGY_METER:{
                GET_ENERGY_METER:"/findAllEnergyMeter",
                GET_ENERGY_METER_ID:"/findEnergyMeter/",
                SAVE_ENERGY_METER:"/addEnergyMeter",
                UPDATE_ENERGY_METER:"/updateEnergyMeter",
                DELETE_ENERGY_METER:"/deleteEnergyMeter/",
                EXISTS_FEEDER_START_DATE:'/existsFeederAndStartDate/'
            },
            STATION_SECTIONS:{
                GET_STATION_SECTIONS:"/findAllStationSections",
                GET_STATION_SECTIONS_ID:"/findStationSectionsById/",
                SAVE_STATION_SECTIONS:"/addStationSections",
                UPDATE_STATION_SECTIONS:"/updateStationSections",
                DELETE_STATION_SECTIONS:"/deleteStationSections/",
                EXISTS_STATION_CODE:"/existsStationCode/",
                EXISTS_STATION_NAME:'existsStationName'
            },
            TPC_BOARD:{
                GET_TPC_BOARD:"/findAllTPCBoard",
                GET_TPC_BOARD_ID:"/findTPCBoardById/",
                SAVE_TPC_BOARD:"/addTPCBoard",
                UPDATE_TPC_BOARD:"/updateTPCBoard",
                DELETE_TPC_BOARD:"/deleteTPCBoard/",
                EXISTS_TPC_BOARD_DATADIV:"/existsTpcBoardAndDataDiv/"
            },
            TPC_BOARD_ASSOC:{
                GET_TPC_BOARD_ASSOC:"/findAllTPCBoardDepotAssoc",
                GET_TPC_BOARD_ASSOC_ID:"/findTPCBoardDepotAssocById/",
                SAVE_TPC_BOARD_ASSOC:"/addTPCBoardDeotAssoc",
                UPDATE_TPC_BOARD_ASSOC:"/updateTPCBoardDepotAssoc",
                DELETE_TPC_BOARD_ASSOC:"/deleteTPCBoardDepotAssoc/",
                EXISTS_TPC_BOARD_UNIT_NAME:'/existsTpcBoardAndUnitName/'
            },
            FP_SECTIONS:{
                GET_FP_SECTIONS:"/findAllFPSectionsItems",
                GET_FP_SECTIONS_ID:"/findFPSectionsItemById/",
                SAVE_FP_SECTIONS:"/addFPSectionsItem",
                UPDATE_FP_SECTIONS:"/updateFPSectionsItem",
                DELETE_FP_SECTIONS:"/deleteFPSectionsItem/",
                EXIST_FP_SECTIONS:"/existsFpSection/"
            },
            TSS_FEEDER:{
                GET_FEEDERS:"/findAllTssFeederMaster",
                GET_FEEDER_ID:"/findFeederById/",
                SAVE_FEEDER:"/addFeeder",
                UPDATE_FEEDER:"/updateFeeder",
                DELETE_FEEDER:"/deleteFeeder/",
                EXIST_FEEDER_NAME:"/existsFeederName/"
            }
        },
        ENERGY_CONSUMPTION:{
            FIND_ENERGY_CONSUMPTION:'/energyConsumption/',
            FIND_TSS_FEEDER_MASTER:'/findAllTssFeederMaster'
        },
        DOCS:{
            GET_UPLOAD_FILES:"/getUploadedFiles/",
            UPDATE_DOCS:"/updateDescription",
            DELETE_DOCS:"/deleteFile/",
            UPLOAD_ATTACHED_FILE:"/uploadAttachedFiles"            
        },
        DRIVE:{
            DRIVE:{
                GET_DRIVES:"/drives",
                GET_DRIVE_ID:"/driveById/",
                SAVE_DRIVE:"/saveDrive",
                UPDATE_DRIVE:"/updateDrive",
                DELETE_DRIVE:"/deleteDrive/",
                EXISTS_DRIVE_NAME:"/existsDriveName/",
                EXISTS_DRIVE_DESCRIPTION:"/existsDriveDescription/"
            },
            DRIVE_CATEGORY:{
                GET_DRIVE_CATEGORY:"/driveCategory",
                GET_DRIVE_CATEGORY_ID:"/driveCategoryById/",
                SAVE_DRIVE_CATEGORY:"/saveDriveCategory",
                UPDATE_DRIVE_CATEGORY:"/updateDriveCategory",
                DELETE_DRIVE_CATEGORY:"/deleteDriveCategory/",
                EXISTS_DRIVE_CATEGORY_NAME:"/existsDriveCategoryName/",
                EXISTS_DRIVE_CATEGORY_DESCRIPTION:"/existsDriveCategoryDescription/"                
            },
            DRIVE_CATEGORY_ASSOCIATION:{
                GET_DRIVE_CATEGORY_ASSOC:"/driveCategoryAsso",
                GET_DRIVE_CATEGORY_ASSOC_ID:"/driveCategoryAssoById/",
                SAVE_DRIVE_CATEGORY_ASSOC:"/saveDriveCategoryAsso",
                UPDATE_DRIVE_CATEGORY_ASSOC:"/updateDriveCategoryAsso",
                DELETE_DRIVE_CATEGORY_ASSOC:"/deleteDriveCategoryAsso/"
            },
            DRIVE_CHECK_LIST :{
                GET_CHECK_LIST:'/checklist',
                GET_CHECKLIST_BY_ID:'/checkListById/',
                GET_STATUS_ITEM:'/statusItem/',
                GET_MEASURE_ACTIVITY_LIST:'/measureActivityList',
                SAVE_CHECK_LIST:'/saveCheckList',
                UPDATE_CHECK_LIST:'/updateCheckList',
                DELETE_CHECK_LIST_BY_ID:'/deleteDrive/'
            },
            ELECTRIFICATION_TARGETS:{
                GET_ELECTRIFICATION_TARGETS:'/electrificationTargets',
                DELETE:'/deleteElectrificationTargets/',
                EDIT:'/electrificationTargetsById/',
                SAVE:'/saveElectrificationTargets',
                UPDATE:'/updateElectrificationTargets'
            },
            TARGETS:{
                GET_TARGETS:'/driveTarget',
                SAVE:'/saveDriveTarget',
                UPDATE:'/updateDriveTarget',
                EDIT:'/driveTargetById/',
                DELETE:'/deleteDriveTarget/'
            },
            GET_DIVISIONS:'/divisions'
        },
        
        INSPECTIONS:{
            STIPULATION:{
                GET_STIPULATION:"/stipulations",
                GET_STIPULATION_ID:"/stipulationsById/",
                GET_INSPECTION_AND_STIPULATION_ID:"/inspectionsContentById/",
                SAVE_STIPULATION:"/saveStipulations",
                UPDATE_STIPULATION:"/updateStipulations",
                DELETE_STIPULATION:"/deleteStipulations/",
                ASSERT_TYPE:'/assertType'
            },
            INSPECTIONS:{
                GET_INSPECTIONS:'/inspections',
                SAVE:'/saveInspections',
                UPDATE:'/updateInspections',
                EDIT:'/inspectionsById/',
                DELETE:'/deleteInspections/',
                FILE_INFO_BY_ID:'/inspectionsFileInfoById/',
                INSPECTION_TYPE:'/inspectionType',
                DELETE_FILE:'/deleteFile'
            }
        },
        DAILY_SUMMARY:{
            DAILY_SUMMARY:{
                GET_DAILY_SUMMARY:"/findAllDailySummary",
                GET_DAILY_SUMMARY_ID:"/findDailySummaryById/",
                SAVE_DAILY_SUMMARY:"/addDailySummary",
                UPDATE_DAILY_SUMMARY:"/updateDailySummary",
                DELETE_DAILY_SUMMARY:"/deleteDailySummary/",
                EXISTS_FACILITY_ID_CREATED_DATE:'/existsFacilityIdAndCreatedDate/'
            },
            OBSERVATION_CATEGORIES:{
                GET_OBS_CATEGORIES:"/findAllObservationCategory",
                GET_OBS_CATEGORIES_ID:"/findObservationCategoriesById/",
                SAVE_OBS_CATEGORIES:"/addObservationCategories",
                UPDATE_OBS_CATEGORIES:"/updateObservationCategories",
                DELETE_OBS_CATEGORIES:"/deleteObservationCategories/",
                EXISTS_INPECTION_TYPE_OBJ_CATG:'/existsInspectionTypeAndObservationCategory/'
            },
            OBSERVATION_CHECK_LIST:{
                GET_OBS_CHECK_LIST:"/findAllObservationCheckList",
                GET_OBS_CHECK_LIST_ID:"/findObservationCheckListById/",
                SAVE__OBS_CHECK_LIST:"/addObservationCheckList",
                UPDATE_OBS_CHECK_LIST:"/updateObservationCheckList",
                DELETE_OBS_CHECK_LIST:"/deleteObservationCheckList/",
                
            },
            FP_INSPECTION:{
                GET_FP_INSPECTION:"/findAllFPInspectionItems",
                GET_FP_INSPECTION_ID:"/findFPInspectionItemById/",
                SAVE_FP_INSPECTION:"/addFPInspection",
                UPDATE_FP_INSPECTION:"/updateFPInspectionItem",
                DELETE_FP_INSPECTION:"/deleteFPInspectionItem/"
            },
            OBSERVATION:{
                GET_OBSERVATION:"/findAllObservationItems",
                GET_OBSERVATION_ID:"/findObservationItemById/",
                SAVE_OBSERVATION:"/addObservation",
                UPDATE_OBSERVATION:"/updateObservationItem",
                DELETE_OBSERVATION:"/deleteObservationItem/",
                ATTACHMENT_OBSLIST:"/attachedObservationList/",
                OBSERVATION_UPLOAD_FILES:"/observationUploadFiles"

            },
            COMPLIANCES:{
                GET_COMPLIANCE:"/findAllComplianceItems",
                GET_COMPLIANCE_ID:"/findComplianceItemById/",
                SAVE_COMPLIANCE:"/addCompliance",
                UPDATE_COMPLIANCE:"/updateComplianceItem",
                DELETE_COMPLIANCE:"/deleteComplianceItem/"
            }

        },
        FAILURES:{
            GET_FAILURES:'/failureAnalysis',
            SAVE:'/saveFailureAnalysis',
            UPDATE:'/updateFailureAnalysis',
            EDIT:'/failureAnalysisById/',
            DELETE:'/deleteFailureAnalysis/',
            FAILURE_BY_TYPE:"/failuresByType/",
            FAILURE_TYPE_BY_ID:'/failureTypeById/',     
            FAILURE_TYPE_UPDATE:'/saveFailureByType',       
        },
        PROGRESS_RECORD:{
            GET_PROGRESS_RECORDS:'/driveDailyProgress',
            SAVE:'/saveDriveDailyProgress',
            UPDATE:'/updateDriveDailyProgress',
            EDIT:'/driveDailyProgressById/',
            DELETE:'/deleteDriveDailyProgress/'
        },
        CONFIG:{
            MAKE:{  
            GET_MAKE:"/findAllMake",
            SAVE_MAKE:"/addMake",
            GET_MAKE_ID:"/findMakeById/",
            EXIST_MAKE_CODE:"/existsMakeCode/",
            UPDATE_MAKE:"/updateMake",
            DELETE_MAKE_ID:"/deleteMake/"
            },
            MODEL:{  
                GET_MODEL:"/findAllModel",
                SAVE_MODEL:"/addModel",
                GET_MODEL_ID:"/findModelById/",
                EXIST_MODEL_CODE:"/existsModelCode/",
                UPDATE_MODEL:"/updateModel",
                DELETE_MODEL_ID:"/deleteModel/"
                },
            }
    },
    EVENTS:{
        ADD:"Add",
        SAVE:"Save",
        UPDATE:"Update",
        DELETE:"Delete"
    },
    OPERATION_TYPES:{
        CREATE:"CREATE",
        UPDATE:"UPDATE",
        DELETE:"DELETE"
    },
    ACTIVE_STATE_ID :1,
    INACTIVE_STATE_ID :2,
    ROLE_PERMISSIONS:[
        {id:1, permission:"View"},
        {id:2, permission:"View/Add"},
        {id:3, permission:"View/Add/Edit"},
        {id:4, permission:"View/Edit"},
        {id:5, permission:"View/Add/Edit/Delete"},
        {id:6, permission:"No Permission"}        
    ],
    FAILURE_TYPES:{
        'GRID_FAILURE':'GRID_FAILURE'
    },
    ASSERT_TYPE:{
        'RB':'null',
        'ZONE':'null',
        'DIV':'DIV_ITEM_CATEGORY',
        'SUBDIV':'null',
        'TRD':'null',
        'OHE':'OHE_FIXED_ASSET',
        'PSI':'PSI_FIXED_ASSET',
        'SP':'PSI_FIXED_ASSET',
        'SSP':'PSI_FIXED_ASSET',
        'TSS':'PSI_FIXED_ASSET',
        'FP':'null',
        'RCC':'RCC_FIXED_ASSET',
        'TPCC':'null',
        'DIVOFF':'null',
        'SUBDIV_OFF':'null',
        'ELS':'null',
        'DLS':'null',
        'RDSO':'null'
    },
    REGULAR_EXPRESSIONS:{
        'ALPHA_NUMARIC':'[a-zA-Z0-9\s]+',
        'ONLY_ALPHA_WITH_SPACE':'^[a-zA-Z]+(\s[a-zA-Z]+)?$'
    },
    STATUS_ITEMS:{
        "GAUGE_TYPE":"GAUGE_TYPE LIST",
        "ELECTRIFICATION_EXEC_AGENCY_TYPE":"ELECTRIFICATION_EXEC_AGENCY",
        "DOUBLE_TRIPLE_TYPE":"DOUBLE_TRIPLE_ETC_ELEC",
        "YES_NO_TYPE":"YESNO_STATUS"
    }
};