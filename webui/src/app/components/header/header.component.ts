import { Component, OnInit, OnChanges, DoCheck } from '@angular/core';
import { Router, ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/common/common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, DoCheck {
  loginValidate: boolean = true;
  dashboard: boolean = true;
  MenusList: any = [];
  menus: any = [];
  currentTab: string = "";
  userName: string;
  userdata: any;
  loggedUser: any;
  rolePermission: boolean = true;
  
  constructor(
    private route: Router,
    private commonService: CommonService) {

  }
  ngOnInit() {
    
  }
  ngDoCheck() {
    if (!!localStorage.getItem('userData')) {
      this.userdata = JSON.parse(localStorage.getItem('userData'));
      this.userName = !!this.userdata && !!this.userdata.username && this.userdata.username;
    }
    const path = window.location.pathname;
    this.dashboard = path == '/dashboard' ? false : true;   
    if (!!localStorage.getItem("loggedUser")) {
      this.loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
      this.rolePermission = this.commonService.rolePermission();   
   
    
    //console.log(JSON.stringify(this.loggedUser.menuPermissionResponses))
    
    this.MenusList = [
      { 
        ID: 1,
        menuName: 'Dashboard',
        menuUrl: 'dashboard',
        icon: "fa fa-home", 
        color: "",       
        isSelected: true,
        permission:this.commonService.findPermission('Dashboard', 'menu', 'view'),
        currentTab: !!path && path.includes("dashboard") ? "open" : "" 
      },
      { 
        ID: 2,
        menuName: 'Reports', 
        menuUrl: 'report-names', 
        icon: "fa fa-area-chart",
        color: "#6212EE", 
        permission:this.commonService.findPermission('Reports', 'menu', 'view'),
        isSelected: true,          
        currentTab: !!path && (path.includes("report-names") || path.includes("daily-progress-reports") || 
        path.includes("asset-reports") || path.includes("asset-master-reports")) ||
        path.includes("inventory-reports") || path.includes("psi-reports") ||
        path.includes("zonal-reports") || path.includes("zonal") ? "open" : "", 
        subMenus: [          
                    { 
            subMenuName: "Daily Progress Reports", 
            subMenuURL: "daily-progress-reports",
            color: "#1285EE", 
            subMenuIcon: "fa fa-file",
            rolePermission:true,
            permission:this.commonService.findPermission('Daily Progress Reports', 'submenu', 'view'),
            currentSubMenu: !!path && (path.includes("report-names") || path.includes("daily-progress-reports")) ? "active-item" : "",
          },
          { 
            subMenuName: "Asset Reports", 
            subMenuURL: "asset-reports",
            color: "#1285EE", 
            subMenuIcon: "fa fa-file",
            rolePermission:true,
            permission:this.commonService.findPermission('Asset Reports', 'submenu', 'view'),
            currentSubMenu: !!path && path.includes("asset-reports") ? "active-item" : "",
          },
          { 
            subMenuName: "Asset Master Reports", 
            subMenuURL: "asset-master-reports",
            color: "#1285EE", 
            subMenuIcon: "fa fa-file",
            rolePermission:true,
            permission:this.commonService.findPermission('Asset Master Reports', 'submenu', 'view'),
            currentSubMenu: !!path && path.includes("asset-master-reports") ? "active-item" : "",
          },
          { 
            subMenuName: "Inventory Reports", 
            subMenuURL: "inventory-reports",
            color: "#1285EE", 
            subMenuIcon: "fa fa-file",
            rolePermission:true,
            permission:this.commonService.findPermission('Inventory Reports', 'submenu', 'view'),
            currentSubMenu: !!path && path.includes("inventory-reports") ? "active-item" : "",
          },
          { 
        subMenuName:"PSI Reports",
        subMenuURL:"psi-reports",
        color:"#1285EE",
        subMenuIcon:"fa fa-file",
        rolePermission:true,
        permission:this.commonService.findPermission('PSI Reports', 'submenu', 'view'),
        currentSubMenu:!!path && path.includes("psi-reports") ? "active-item":"",
          },
          {
            subMenuName:"Zonal Reports",
            subMenuURL:"zonal-reports",
            color:"#1285EE",
            subMenuIcon:"fa fa-file",
            rolePermission:true,
            permission:this.commonService.findPermission('Zonal Reports', 'submenu', 'view'),
            currentSubMenu:!!path && path.includes("zonal-reports") ? "active-item":"",

          },
          {
            subMenuName:"Zonal ",
            subMenuURL:"zonal",
            color:"#1285EE",
            subMenuIcon:"fa fa-file",
            rolePermission:true,
            permission:this.commonService.findPermission('Zonal', 'submenu', 'view'),
            currentSubMenu:!!path && path.includes("zonal") ? "active-item":"",

          },
        ] 
      },
      // { 
      //   ID: 3, 
      //   menuName: 'Schedule Settings', 
      //   menuUrl: 'settings', 
      //   icon: "fa fa-cogs", 
      //   color: "#1285EE", 
      //   permission:this.commonService.findPermission('Schedule Settings', 'menu', 'view'),
      //   isSelected: false, 
      //   currentTab: !!path && (path.includes("settings") || path.includes("repository") || path.includes("jobType") || path.includes("timeInterval")) ? "open admin-view" : "admin-view", 
      //   subMenus: [
      //     { 
      //       subMenuName: "Schedule", 
      //       subMenuURL: "settings", 
      //       subMenuIcon: "fa fa-cogs",
      //       rolePermission:true,
      //       permission:this.commonService.findPermission('Schedule', 'submenu', 'view'),
      //       currentSubMenu: !!path && path.includes("settings") ? "active-item" : "",
      //     }, 
      //     { 
      //       subMenuName: "Repository", 
      //       subMenuURL: "repository", 
      //       subMenuIcon: "fa fa-bars",
      //       rolePermission:true,
      //       permission:this.commonService.findPermission('Repository', 'submenu', 'view'),
      //       currentSubMenu: !!path && path.includes("repository") ? "active-item" : "",
      //     }, 
      //     { 
      //       subMenuName: "Job Type", 
      //       subMenuURL: "jobType", 
      //       subMenuIcon: "fa fa-align-left",
      //       rolePermission:true,
      //       permission:this.commonService.findPermission('Job Type', 'submenu', 'view'),
      //       currentSubMenu: !!path && path.includes("jobType") ? "active-item" : "",
      //     }, 
      //     { 
      //       subMenuName: "Time Interval", 
      //       subMenuURL: "timeInterval", 
      //       subMenuIcon: "fa fa-align-left",
      //       rolePermission:true,
      //       permission:this.commonService.findPermission('Time Interval', 'submenu', 'view'),
      //       currentSubMenu: !!path && path.includes("timeInterval") ? "active-item" : "",
      //     }
      //   ] 
      // },
       { 
        ID: 4, 
        menuName: 'Jobs Tracking', 
        menuUrl: 'schedule', 
        icon: "fa fa-briefcase", 
        color: "#6212EE",
        isSelected: false, 
        permission:this.commonService.findPermission('Schedule Tracking', 'menu', 'view'),
        class: "chandra",
        currentTab: !!path && path.includes("schedule") || path.includes("jobs") || path.includes("divisions") ? "open admin-view" : " admin-view", 
        subMenus: [
          { 
            subMenuName: "Tracking Info", 
            subMenuIcon: "fa fa-briefcase",
            subMenuURL: "schedule",
            rolePermission:true,
            permission:this.commonService.findPermission('Tracking Info', 'submenu', 'view'),
            currentSubMenu: !!path && path.includes("schedule") ? "active-item" : "",
          },
          { 
            subMenuName: "Jobs Info", 
            subMenuIcon: "fa fa-briefcase",
            rolePermission:true,
            permission:this.commonService.findPermission('Jobs Info', 'submenu', 'view'),
            currentSubMenu: !!path && path.includes("jobs") ? "active-item" : "",
          },
          { 
            subMenuName: "Divisions Info", 
            subMenuIcon: "fa fa-briefcase",
            rolePermission:true,
            permission:this.commonService.findPermission('Divisions Info', 'submenu', 'view'),
            currentSubMenu: !!path && path.includes("divisions") ? "active-item" : "",
          }
        ] 
      },
      { 
        ID: 5, 
        menuName: 'Masters', 
        menuUrl: 'masters', 
        icon: "fa fa-wrench", 
        color: "#85929E", 
        isSelected: false, 
        permission:this.commonService.findPermission('Masters', 'menu', 'view'),
        currentTab: !!path && (path.includes("masters") || path.includes("roles") || path.includes("rolePermissions") || path.includes("users") || path.includes("department")||path.includes("settings") || path.includes("repository") || path.includes("jobType") || path.includes("timeInterval")) ? "open" : "", 
        subMenus: [
          { 
            subMenuName: "Roles", 
            subMenuURL: "roles", 
            subMenuIcon: "fa fa-lock",
            rolePermission:this.rolePermission,
            permission:this.commonService.findPermission('Roles', 'submenu', 'view'),
            currentSubMenu: !!path && (path.includes("masters") || path.includes("roles")) ? "active-item" : "",
          }, 
          { 
            subMenuName: "Roles Permission", 
            subMenuURL: "rolePermissions",
            subMenuIcon: "fa fa-lock",
            rolePermission:this.rolePermission ,
            permission:this.commonService.findPermission('Roles Permission', 'submenu', 'view'),
            currentSubMenu: !!path && path.includes("rolePermissions") ? "active-item" : "",
          }, 
          { 
            subMenuName: "Department", 
            subMenuURL: "department", 
            subMenuIcon: "fa fa-lock",
            rolePermission:this.rolePermission,
            permission:this.commonService.findPermission('Department', 'submenu', 'view'),
            currentSubMenu: !!path && path.includes("department") ? "active-item" : "",
          }, 
          { 
            subMenuName: "Users", 
            subMenuURL: "users", 
            subMenuIcon: "fa fa-users",
            rolePermission:true,
            permission:this.commonService.findPermission('Users', 'submenu', 'view'),
            currentSubMenu: !!path && path.includes("users") ? "active-item" : "",
          },
          { 
            subMenuName: "Schedule", 
            subMenuURL: "settings", 
            subMenuIcon: "fa fa-cogs",
            rolePermission:true,
            permission:this.commonService.findPermission('Schedule', 'submenu', 'view'),
            currentSubMenu: !!path && path.includes("settings") ? "active-item" : "",
          }, 
          { 
            subMenuName: "Repository", 
            subMenuURL: "repository", 
            subMenuIcon: "fa fa-bars",
            rolePermission:true,
            permission:this.commonService.findPermission('Repository', 'submenu', 'view'),
            currentSubMenu: !!path && path.includes("repository") ? "active-item" : "",
          }, 
          { 
            subMenuName: "Job Type", 
            subMenuURL: "jobType", 
            subMenuIcon: "fa fa-align-left",
            rolePermission:true,
            permission:this.commonService.findPermission('Job Type', 'submenu', 'view'),
            currentSubMenu: !!path && path.includes("jobType") ? "active-item" : "",
          }, 
          { 
            subMenuName: "Time Interval", 
            subMenuURL: "timeInterval", 
            subMenuIcon: "fa fa-align-left",
            rolePermission:true,
            permission:this.commonService.findPermission('Time Interval', 'submenu', 'view'),
            currentSubMenu: !!path && path.includes("timeInterval") ? "active-item" : "",
          }
      
        ] 
      },
      { 
        ID: 6,
        menuName: 'Energy Bill Payment', 
        menuUrl: 'energyBillPayment', 
        icon: "fa fa-paypal",
        color: "#12E1EE", 
        isSelected: true, 
        permission:this.commonService.findPermission('Energy Bill Payment', 'menu', 'view'),
        currentTab: !!path && (path.includes("energyBillPayment") || path.includes("guidenceItem") || path.includes("work") || path.includes("sidings") || path.includes("asset-master-data") || path.includes("tractionEneTariff") || path.includes("track")) 
        || path.includes("energyMeter")|| path.includes("foot-patrolling-sections")|| path.includes("stations-sections") || path.includes("tpc-board-depot-assoc") || path.includes("tpc-board")|| path.includes("daily-summary")|| path.includes("observation-categories")|| path.includes("observation-check-list")|| path.includes("make")?  "open" : "",  
        subMenus: [
          {
            subMenuName: "Guidance",
            subMenuURL: "guidenceItem",
            subMenuIcon: "",
            rolePermission:true,
            permission:this.commonService.findPermission('Guidence Item', 'submenu', 'view'),
            currentSubMenu: !!path && path.includes("guidenceItem") ? "active-item" : "",
          },
          {
            subMenuName: "Work",
            subMenuURL: "work",
            subMenuIcon: "",
            rolePermission:true,
            permission:this.commonService.findPermission('work', 'submenu', 'view'),
            currentSubMenu: !!path && path.includes("work") ? "active-item" : "",
          },
          {
            subMenuName: "Asset Master",
            subMenuURL: "asset-master-data",
            subMenuIcon: "fa fas fa-cloud",
            rolePermission:true,
            permission:true,
            currentSubMenu: !!path && path.includes("asset-master-data") ? "active-item" : "",
          },
          
          {
            subMenuName: "Sidings",
            subMenuURL: "sidings",
            subMenuIcon: "",
            color: "#12E1EE",
            rolePermission:true,
            permission:this.commonService.findPermission('Sidings', 'submenu', 'view'),
            currentSubMenu: !!path && path.includes("sidings") ? "active-item" : "",
          },
          {
            subMenuName: "Tariff",
            subMenuURL: "tractionEneTariff",
            subMenuIcon: "",
            color: "#12E1EE",
            rolePermission:true,
            permission:this.commonService.findPermission('Traction Energy Tariff', 'submenu', 'view'),
            currentSubMenu: !!path && path.includes("tractionEneTariff") ? "active-item" : "",
          },
          {
            subMenuName: "Track",
            subMenuURL: "track",
            subMenuIcon: "",
            color: "#12E1EE",
            rolePermission:true,
            permission:this.commonService.findPermission('Track', 'submenu', 'view'),
            currentSubMenu: !!path && path.includes("track") ? "active-item" : "",
          },
          {
            subMenuName: "Energy Meter",
            subMenuURL: "energyMeter",
            subMenuIcon: "",
            color: "#12E1EE",
            rolePermission:true,
            permission:this.commonService.findPermission('Energy Meter', 'submenu', 'view'),
            currentSubMenu: !!path && path.includes("energyMeter") ? "active-item" : "",
          },
          {
            subMenuName: "FP Sections",
            subMenuURL: "foot-patrolling-sections",
            subMenuIcon: "fa fa-train",
            color: "#12E1EE",
            rolePermission:true,
            permission:this.commonService.findPermission('FP Sections', 'submenu', 'view'),
            currentSubMenu: !!path && path.includes("foot-patrolling-sections") ? "active-item" : "",
          },
          {
            subMenuName: "Sections-stations",
            subMenuURL: "stations-sections",
            subMenuIcon: "fa fa-train",
            color: "#12E1EE",
            rolePermission:true,
            permission:true,
            currentSubMenu: !!path && path.includes("stations-sections") ? "active-item" : "",
          },
          {
            subMenuName: "TPC Board Assoc",
            subMenuURL: "tpc-board-depot-assoc",
            subMenuIcon: "",
            color: "#12E1EE",
            rolePermission:true,
            permission:true,
            currentSubMenu: !!path && path.includes("TPC Board Assoc") ? "active-item" : "",
          },
          {
            subMenuName: "TPC Board",
            subMenuURL: "tpc-board",
            subMenuIcon: "",
            color: "#12E1EE",
            rolePermission:true,
            permission:true,
            currentSubMenu: !!path && path.includes("TPC Board") ? "active-item" : "",
          },
          {
            subMenuName: "Daily Summary",
            subMenuURL: "daily-summary",
            subMenuIcon: "",
            color: "#12E1EE",
            rolePermission:true,
            permission:true,
            currentSubMenu: !!path && path.includes("Daily Summary") ? "active-item" : "",
          },
          {
            subMenuName: "Obs Categories",
            subMenuURL: "observation-categories",
            subMenuIcon: "",
            color: "#12E1EE",
            rolePermission:true,
            permission:true,
            currentSubMenu: !!path && path.includes("Obs Categories") ? "active-item" : "",
          },
          {
            subMenuName: "Obs Check List",
            subMenuURL: "observation-check-list",
            subMenuIcon: "",
            color: "#12E1EE",
            rolePermission:true,
            permission:true,
            currentSubMenu: !!path && path.includes("Obs Check List") ? "active-item" : "",
          },
          {
            subMenuName: "Make",
            subMenuURL: "make",
            subMenuIcon: "",
            rolePermission:true,
            permission:this.commonService.findPermission('Make', 'submenu', 'view'),
            currentSubMenu: !!path && path.includes("make") ? "active-item" : "",
          },
        ]
      },
      { 
        ID: 7,
        menuName: 'Docs', 
        menuUrl: 'contentManagement', 
        icon: "fa fa-file",
        color: "#12E1EE", 
        isSelected: true, 
        permission:this.commonService.findPermission('Content Management', 'menu', 'view'),
        currentTab: !!path && path.includes("contentManagement") ? "open" : "",  
        subMenus: [
          {
            subMenuName: "Content Management",
            subMenuURL: "contentManagement",
            subMenuIcon: "fa fa-file",
            rolePermission:true,
            permission:this.commonService.findPermission('Content Management', 'submenu', 'view'),
            currentSubMenu: !!path && path.includes("contentManagement") ? "active-item" : "",
          }
        ]
      },
      { 
        ID: 8,
        menuName: 'Drives', 
        menuUrl: 'drives', 
        icon: "fa fa-file",
        color: "#12E1EE", 
        isSelected: true, 
        permission:this.commonService.findPermission('Drives', 'menu', 'view'),
        currentTab: !!path && path.includes("drives") || path.includes("checklist") ||
        path.includes("target") || path.includes("progress-record") || 
        path.includes("failure-analysis") || path.includes("electrification-targets") ||
        path.includes("inspection") || path.includes("stipulation")  ? "open" : "",  
        subMenus: [
          {
            subMenuName: "Drives",
            subMenuURL: "drives",
            subMenuIcon: "fa fa-file",
            rolePermission:true,
            permission:this.commonService.findPermission('Drives', 'submenu', 'view'),
            currentSubMenu: !!path && path.includes("drives") ? "active-item" : "",
          },
          {
            subMenuName: "Checklist",
            subMenuURL: "checklist",
            subMenuIcon: "fa fa-file",
            permission:this.commonService.findPermission('Checklist', 'submenu', 'view'),
            rolePermission:true,
            currentSubMenu: !!path && path.includes("checklist") ? "active-item" : "",
          },
          {
            subMenuName: "Target",
            subMenuURL: "target",
            subMenuIcon: "fa fa-file",
            rolePermission:true,
            permission:this.commonService.findPermission('Target', 'submenu', 'view'),
            currentSubMenu: !!path && path.includes("target") ? "active-item" : "",
          },
          {
            subMenuName: "Progress Record",
            subMenuURL: "progress-record",
            subMenuIcon: "fa fa-file",
            permission:this.commonService.findPermission('Progress Record', 'submenu', 'view'),
            rolePermission:true,
            currentSubMenu: !!path && path.includes("progress-record") ? "active-item" : "",
          },
          {
            subMenuName: "Failure Analysis",
            subMenuURL: "failure-analysis",
            permission:this.commonService.findPermission('Failure Analysis', 'submenu', 'view'),
            subMenuIcon: "fa fa-file",
            rolePermission:true,
            currentSubMenu: !!path && path.includes("failure-analysis") ? "active-item" : "",
          },
          {
            subMenuName: "Electrification Targets",
            subMenuURL: "electrification-targets",
            subMenuIcon: "fa fa-file",
            permission:this.commonService.findPermission('Electrification Targets', 'submenu', 'view'),
            rolePermission:true,
            currentSubMenu: !!path && path.includes("electrification-targets") ? "active-item" : "",
          }
        ]
      },
      { 
        ID: 9,
        menuName: 'Inspections', 
        menuUrl: 'ins', 
        icon: "fa fa-file",
        color: "#12E1EE", 
        isSelected: true, 
        permission:this.commonService.findPermission('Inspections', 'menu', 'view'),
        currentTab: !!path && path.includes("ins") || path.includes("ins-stipulation")  ? "open" : "",
        subMenus: [
        	{
            subMenuName: "CRS EIG Inspections",
            subMenuURL: "ins",
            subMenuIcon: "fa fa-file",
            permission:this.commonService.findPermission('CRS EIG Inspections', 'submenu', 'view'),
            rolePermission:true,
            currentSubMenu: !!path && path.includes("ins") ? "active-item" : "",
          },
          {
            subMenuName: "Stipulations",
            subMenuURL: "ins-stipulation",
            subMenuIcon: "fa fa-file",
            rolePermission:true,
            permission:this.commonService.findPermission('Stipulations', 'submenu', 'view'),
            currentSubMenu: !!path && path.includes("ins-stipulation") ? "active-item" : "",
          }
        ] 
      },
      { 
        ID: 10,
        menuName: 'Daily Summ', 
        menuUrl: 'daily-summary', 
        icon: "fa fa-file",
        color: "#12E1EE", 
        isSelected: true, 
        permission:this.commonService.findPermission('Inspections', 'menu', 'view'),
        currentTab: !!path && path.includes("daily-summary") || path.includes("daily-summary-forecast") || path.includes("officers-movement") ? "open" : "",
        subMenus: [
        	{
            subMenuName: "Daily Summary",
            subMenuURL: "daily-summary",
            subMenuIcon: "fa fa-file",
            permission:this.commonService.findPermission('daily-summary', 'submenu', 'view'),
            rolePermission:true,
            currentSubMenu: !!path && path.includes("Daily Summary") ? "active-item" : "",
          },
          {
            subMenuName: "Daily Summary Forecast",
            subMenuURL: "daily-summary-forecast",
            subMenuIcon: "fa fa-file",
            rolePermission:true,
            permission:this.commonService.findPermission('Daily Summary Forecast', 'submenu', 'view'),
            currentSubMenu: !!path && path.includes("daily-summary-forecast") ? "active-item" : "",
          },
          {
            subMenuName: "Officers Movement",
            subMenuURL: "officers-movement",
            subMenuIcon: "fa fa-file",
            rolePermission:true,
            permission:this.commonService.findPermission('Officers Movement', 'submenu', 'view'),
            currentSubMenu: !!path && path.includes("officers-movement") ? "active-item" : "",
          }
        ] 
      },
      { 
        ID: 11,
        menuName: 'Failures', 
        menuUrl: 'failures', 
        icon: "fa fa-file",
        color: "#12E1EE", 
        isSelected: true, 
        permission:this.commonService.findPermission('Failures', 'menu', 'view'),
        currentTab: !!path && path.includes("cb-tripping") || path.includes("grid-failures") ||
        path.includes("rc-faiures") || path.includes("unusual-occurrence") || 
        path.includes("failure-occurrence") || path.includes("actions")  ? "open" : "",  
        subMenus: [
          {
            subMenuName: "CB Tripping",
            subMenuURL: "cb-tripping",
            subMenuIcon: "fa fa-file",
            rolePermission:true,
            permission:this.commonService.findPermission('CB Tripping', 'submenu', 'view'),
            currentSubMenu: !!path && path.includes("cb-tripping") ? "active-item" : "",
          },
          {
            subMenuName: "Grid Failures",
            subMenuURL: "grid-failures",
            subMenuIcon: "fa fa-file",
            permission:this.commonService.findPermission('Grid Failures', 'submenu', 'view'),
            rolePermission:true,
            currentSubMenu: !!path && path.includes("grid-failures") ? "active-item" : "",
          },
          {
            subMenuName: "RC Failures",
            subMenuURL: "rc-faiures",
            subMenuIcon: "fa fa-file",
            rolePermission:true,
            permission:this.commonService.findPermission('RC Failures', 'submenu', 'view'),
            currentSubMenu: !!path && path.includes("rc-faiures") ? "active-item" : "",
          },
          {
            subMenuName: "Unusual Occurrence",
            subMenuURL: "unusual-occurrence",
            subMenuIcon: "fa fa-file",
            permission:this.commonService.findPermission('Unusual Occurrence', 'submenu', 'view'),
            rolePermission:true,
            currentSubMenu: !!path && path.includes("unusual-occurrence") ? "active-item" : "",
          },
          {
            subMenuName: "Failure Occurrence",
            subMenuURL: "failure-occurrence",
            permission:this.commonService.findPermission('Failure Occurrence', 'submenu', 'view'),
            subMenuIcon: "fa fa-file",
            rolePermission:true,
            currentSubMenu: !!path && path.includes("failure-occurrence") ? "active-item" : "",
          },
          {
            subMenuName: "Actions",
            subMenuURL: "actions",
            subMenuIcon: "fa fa-file",
            permission:this.commonService.findPermission('Actions', 'submenu', 'view'),
            rolePermission:true,
            currentSubMenu: !!path && path.includes("actions") ? "active-item" : "",
          }
        ]
      }
    ];
 //   console.log("Menu List= "+JSON.stringify(this.MenusList));
  localStorage.setItem("MenusList",this.MenusList);
  }
   this.loginValidate = this.commonService.loginValidate(window.location.pathname);
  }
  logout() {
    // remove user from local storage to log user out
    console.log('logout')
    localStorage.removeItem('accessToken');
    localStorage.removeItem('userMenuList');
    localStorage.removeItem('userData');
    localStorage.removeItem('loggedUser');
    localStorage.removeItem('menus');
  }
}
