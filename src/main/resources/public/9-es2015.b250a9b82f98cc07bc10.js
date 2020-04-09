(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{FVPZ:function(l,e,n){"use strict";n.d(e,"a",function(){return a}),n("8Y7J"),n("Xd0L"),n("KCVW");const a=(()=>(class{}))()},efJa:function(l,e,n){"use strict";n.r(e);var a=n("8Y7J");class t{constructor(l,e){this.spinnerService=l,this.dashboardService=e,this.MenusList=[],this.tiles=[],this.loggedUserData=JSON.parse(localStorage.getItem("userData")),this.lastProcessedDivisionDataSource={},this.lastProcessedJobsDataSource={},this.lastProcessedOperationTypeDataSource={},this.lastOneWeekDivisionsDataSourceObj={},this.operationTypesDataSet=[],this.widthone=850,this.heightone=400,this.type="mscolumn3d",this.dataFormat="json",this.width=400,this.height=300,this.multiBarType="mscolumn3d",this.operationTypesMultiBarDataSource={}}ngOnInit(){this.spinnerService.show(),this.findDashboardData(),this.MenusList=[{ID:2,menuName:"Reports",menuUrl:"home",icon:"fa fa-area-chart",color:"#64aeed",isSelected:!0},{ID:3,menuName:"Schedule Settings",menuUrl:"settings",icon:"fa fa-cogs",color:"#efb44e",isSelected:!1},{ID:4,menuName:"Schedule Tracking",menuUrl:"schedule",icon:"fa fa-briefcase",color:"#ff5f4f",isSelected:!1},{ID:5,menuName:"Masters",menuUrl:"masters",icon:"fa fa-wrench",color:"#715fb7",isSelected:!1}]}findLastProcessedDivisionDataSource(){for(var l=this.dashboardResponse.lastOneWeekDetails.map(l=>"All"===this.loggedUserData.divisionCode?l.divisionName:l.divisionCode).filter((l,e,n)=>n.indexOf(l)===e),e=[],n=0;n<l.length;n++){var a=0;this.dashboardResponse.lastProcessedDetails.filter(e=>{"All"===this.loggedUserData.divisionCode?e.divisionName===l[n]&&(a+=e.successTables+e.failedTables):this.loggedUserData.divisionCode==l[n]&&e.divisionCode===l[n]&&(a+=e.successTables+e.failedTables)}),e.push({label:l[n],value:a})}return{chart:{caption:"Division Wise ["+this.dashboardResponse.lastProcessedDetails[this.dashboardResponse.lastProcessedDetails.length-1].date+"]",xAxisName:"Division Names",yAxisName:"Tables Count",numberSuffix:"K",theme:"fusion"},data:e}}findLastProcessedJobsDataSource(){var l=this.dashboardResponse.lastProcessedDetails.map(l=>l.jobType).filter((l,e,n)=>n.indexOf(l)===e),e=this.dashboardResponse.lastOneWeekDetails.map(l=>"All"===this.loggedUserData.divisionCode?l.divisionName:l.divisionCode).filter((l,e,n)=>n.indexOf(l)===e),n=0,a=0;this.dashboardResponse.lastProcessedDetails.filter(e=>{e.jobType==l[0]?n+=e.successTables+e.failedTables:a+=e.successTables+e.failedTables});let t=[];for(let s=0;s<e.length;s++)t.push({label:e[s]});return{chart:{caption:"Divisions Wise ",xAxisName:"Division Names",yAxisName:"Tables Count",numberSuffix:"K",theme:"fusion",plottooltext:"<b>Job Type : $seriesname</b> <br> <b>Value : $value</b> "},categories:[{category:t}],dataset:[{seriesname:l[0],data:[{value:n}]},{seriesname:l[1],data:[{value:a}]}]}}findLastProcessedOperationTypeDataSource(l){this.lastProcessedOperationTypeDataSource={},l.dataObj&&(l=l.dataObj.datasetName),this.lastProcessedOperationTypeDataSource={chart:{caption:l+" Job Division Wise ["+this.dashboardResponse.lastProcessedDetails[this.dashboardResponse.lastProcessedDetails.length-1].date+"]",xaxisname:"Division Names",yaxisname:"Tables Count",formatnumberscale:"1",plottooltext:"<b>$dataValue</b> $label in <b>$seriesName</b> Operation Type",theme:"fusion",drawcrossline:"1"},categories:[{category:[{label:"Success Tables"},{label:"Failed Tables"}]}],dataset:this.prepareOperationTypesDataSet(l)}}prepareOperationTypesDataSet(l){return[{seriesname:"CREATE",data:this.findOperationTypePoints(l,"CREATE")},{seriesname:"UPDATE",data:this.findOperationTypePoints(l,"UPDATE")},{seriesname:"DELETE",data:this.findOperationTypePoints(l,"DELETE")}]}findOperationTypePoints(l,e){var n=[];return this.dashboardResponse.lastProcessedDetails.filter(a=>{a.jobType==l&&a.operationType==e&&n.push({value:a.successTables},{value:a.failedTables})}),n}findLastOneWeekDivisionsDataSource(){var l=this.dashboardResponse.lastOneWeekDetails.map(l=>"All"===this.loggedUserData.divisionCode?l.divisionName:l.divisionCode).filter((l,e,n)=>n.indexOf(l)===e);this.lastOneWeekDivisionsDataSourceObj={chart:{caption:"Last One Week Division Wise Tracking Info",xaxisname:"Dates",yaxisname:"Tables Count",formatnumberscale:"1",plottooltext:"Division <b>$seriesName</b> Tables Count <b>$dataValue</b>  in $label",theme:"fusion"},categories:[{category:this.findLastOneWeekDates()}],dataset:this.findLastOneWeekDataSet(l)}}findLastOneWeekDataSet(l){for(var e=this.findLastOneWeekDates(),n=[],a=0;a<l.length;a++){for(var t=[],s=0;s<e.length;s++)t.push(this.getDataSet(e[s].label));n.push({seriesname:l[a],data:t})}return n}getDataSet(l){const e=this.dashboardResponse.lastOneWeekDetails.filter(e=>e.date===l);var n=0;return e&&e.filter(l=>{n+=l.successTables+l.failedTables}),{value:n}}findLastOneWeekDates(){var l=this.dashboardResponse.lastOneWeekDetails.map(l=>l.divisionName).filter((l,e,n)=>n.indexOf(l)===e);console.log("divisionNameArray: "+JSON.stringify(l));var e=this.dashboardResponse.lastOneWeekDetails.map(l=>l.date).filter((l,e,n)=>n.indexOf(l)===e);e.sort(),e.reverse(),console.log(e);for(var n=e&&e.length<=7?e.length:7,a=[],t=0;t<n;t++)a.push({label:e[t]});return a}startGraphs(){this.lastProcessedDivisionDataSource=this.findLastProcessedDivisionDataSource(),this.lastProcessedJobsDataSource=this.findLastProcessedJobsDataSource(),this.findLastProcessedOperationTypeDataSource("DIVISIONTOSTAGING"),this.findLastOneWeekDivisionsDataSource(),this.spinnerService.hide()}findDashboardData(){this.dashboardService.findDashboardData(this.loggedUserData.divisionCode).subscribe(l=>{this.dashboardResponse=l,l&&(console.log(JSON.stringify(l)),this.startGraphs())},l=>{console.log("ERROR >>> "+l)})}}class s{}var i=n("pMnS"),o=n("Y/BS"),d=n("sgpt"),u=n("nOaW"),r=n("gjF7"),c=a["\u0275crt"]({encapsulation:2,styles:[],data:{}});function p(l){return a["\u0275vid"](0,[(l()(),a["\u0275eld"](0,0,null,null,1,"div",[["style","width:100%;height:100%"]],[[1,"id",0]],null,null,null,null)),(l()(),a["\u0275ted"](1,null,[" "," "]))],null,function(l,e){var n=e.component;l(e,0,0,a["\u0275inlineInterpolate"](1,"container-",n.containerId,"")),l(e,1,0,n.placeholder)})}var h=n("IheW"),m=n("AytR");class g{constructor(l){this.http=l,this.myAppUrl=m.a.apiUrl,this.accessToken=JSON.parse(localStorage.getItem("accessToken")),this.header=new h.g({"Content-Type":"application/json",Accept:"application/json",Authorization:`Bearer ${this.accessToken}`})}findDashboardData(l){return this.http.get(m.a.apiUrl+"/dashboard/"+l,{headers:this.header})}existsTimeInterval(l){return this.http.get(m.a.apiUrl+"/existsTimeInterval/"+l,{headers:this.header})}addTimeInterval(l){return this.http.post(m.a.apiUrl+"/addTimeInterval",l,{headers:this.header})}updateTimeInterval(l){return this.http.put(m.a.apiUrl+"/updateTimeInterval",l,{headers:this.header})}deleteTimeInterval(l){return this.http.delete(m.a.apiUrl+"/deleteTimeInterval/"+l,{headers:this.header})}}var b=a["\u0275crt"]({encapsulation:0,styles:[["mat-grid-tile[_ngcontent-%COMP%]{background:#add8e6}a[_ngcontent-%COMP%]{color:#fff}.content[_ngcontent-%COMP%]{width:100%;padding-right:15px;padding-left:30px!important;margin-right:auto;margin-left:auto;text-align:left;margin-top:6%}.block-view[_ngcontent-%COMP%]{padding:30px;box-sizing:border-box;border-radius:8px;-webkit-transition:.2s cubic-bezier(.02,.54,.58,1);transition:all .2s cubic-bezier(.02,.54,.58,1);box-shadow:0 10px 55px 5px rgba(137,173,255,.35);width:calc(((20% - 20px) * 1) + 0px)!important;height:140px!important;font-size:22px}.dashboard-blocks[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .mat-grid-tile[_ngcontent-%COMP%]{margin:10px 20px}.block-view[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-block!important;margin-right:20px}.mat-figure[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-block!important}figure[_ngcontent-%COMP%]{margin:0;display:inline-block!important}.breadcrumb[_ngcontent-%COMP%]{margin-bottom:10px;position:absolute;right:15px}.raphael-group-4-creditgroup[_ngcontent-%COMP%]{display:none!important}@media(max-width:1400px){.block-view[_ngcontent-%COMP%]{font-size:16px;width:calc(((20% - 10px) * 1) + 0px)!important}.content[_ngcontent-%COMP%]{margin-top:8%}}@media(max-width:1300px){.content[_ngcontent-%COMP%]{margin-top:10%}.division-week-chat[_ngcontent-%COMP%]{width:80%}}@media(max-width:760px){.division-week-chat[_ngcontent-%COMP%]{width:80%}}"]],data:{}});function f(l){return a["\u0275vid"](0,[(l()(),a["\u0275eld"](0,0,null,null,1,"ng4-loading-spinner",[],null,null,null,o.b,o.a)),a["\u0275did"](1,180224,null,0,d.Ng4LoadingSpinnerComponent,[d.Ng4LoadingSpinnerService],null,null),(l()(),a["\u0275eld"](2,0,null,null,0,"div",[["class","clearfix"]],null,null,null,null,null)),(l()(),a["\u0275eld"](3,0,null,null,43,"div",[["class","content"]],null,null,null,null,null)),(l()(),a["\u0275eld"](4,0,null,null,1,"div",[["class","row"]],null,null,null,null,null)),(l()(),a["\u0275eld"](5,0,null,null,0,"div",[["class","col-12"]],null,null,null,null,null)),(l()(),a["\u0275eld"](6,0,null,null,40,"div",[["class","row"],["style","margin-top: 5%;"]],null,null,null,null,null)),(l()(),a["\u0275eld"](7,0,null,null,39,"div",[["class","col-12"]],null,null,null,null,null)),(l()(),a["\u0275eld"](8,0,null,null,38,"div",[["class","row-fluid"]],null,null,null,null,null)),(l()(),a["\u0275eld"](9,0,null,null,37,"div",[["class","col-md-12"]],null,null,null,null,null)),(l()(),a["\u0275eld"](10,0,null,null,36,"div",[["class","panel panel-primary"]],null,null,null,null,null)),(l()(),a["\u0275eld"](11,0,null,null,1,"div",[["class","panel-heading"]],null,null,null,null,null)),(l()(),a["\u0275ted"](-1,null,["Tracking Info Graphs"])),(l()(),a["\u0275eld"](13,0,null,null,33,"div",[["class","panel-body"]],null,null,null,null,null)),(l()(),a["\u0275eld"](14,0,null,null,7,"div",[["class","col-md-4 col-lg-4"],["style","display: none"]],null,null,null,null,null)),(l()(),a["\u0275eld"](15,0,null,null,6,"div",[["class","panel panel-primary"]],null,null,null,null,null)),(l()(),a["\u0275eld"](16,0,null,null,1,"div",[["class","panel-heading"]],null,null,null,null,null)),(l()(),a["\u0275ted"](-1,null,["Division Wise"])),(l()(),a["\u0275eld"](18,0,null,null,3,"div",[["class","panel-body"]],null,null,null,null,null)),(l()(),a["\u0275eld"](19,0,null,null,2,"fusioncharts",[["dataFormat","JSON"],["type","Column3D"]],null,null,null,p,c)),a["\u0275prd"](512,null,u.a,u.a,[u.b]),a["\u0275did"](21,5226496,null,0,r.a,[a.ElementRef,u.a,a.KeyValueDiffers,a.NgZone],{dataSource:[0,"dataSource"],type:[1,"type"],width:[2,"width"],height:[3,"height"],dataFormat:[4,"dataFormat"]},null),(l()(),a["\u0275eld"](22,0,null,null,7,"div",[["class","col-md-6 col-lg-6"]],null,null,null,null,null)),(l()(),a["\u0275eld"](23,0,null,null,6,"div",[["class","panel panel-primary"]],null,null,null,null,null)),(l()(),a["\u0275eld"](24,0,null,null,1,"div",[["class","panel-heading"]],null,null,null,null,null)),(l()(),a["\u0275ted"](-1,null,["Jobs Wise"])),(l()(),a["\u0275eld"](26,0,null,null,3,"div",[["class","panel-body"]],null,null,null,null,null)),(l()(),a["\u0275eld"](27,0,null,null,2,"fusioncharts",[["type","scrollstackedcolumn2d"]],null,[[null,"dataplotRollOver"]],function(l,e,n){var a=!0;return"dataplotRollOver"===e&&(a=!1!==l.component.findLastProcessedOperationTypeDataSource(n)&&a),a},p,c)),a["\u0275prd"](512,null,u.a,u.a,[u.b]),a["\u0275did"](29,5226496,null,0,r.a,[a.ElementRef,u.a,a.KeyValueDiffers,a.NgZone],{dataSource:[0,"dataSource"],type:[1,"type"],width:[2,"width"],height:[3,"height"],dataFormat:[4,"dataFormat"]},{dataplotRollOver:"dataplotRollOver"}),(l()(),a["\u0275eld"](30,0,null,null,7,"div",[["class","col-md-6 col-lg-6"]],null,null,null,null,null)),(l()(),a["\u0275eld"](31,0,null,null,6,"div",[["class","panel panel-primary"]],null,null,null,null,null)),(l()(),a["\u0275eld"](32,0,null,null,1,"div",[["class","panel-heading"]],null,null,null,null,null)),(l()(),a["\u0275ted"](-1,null,["Operation Types Wise"])),(l()(),a["\u0275eld"](34,0,null,null,3,"div",[["class","panel-body"]],null,null,null,null,null)),(l()(),a["\u0275eld"](35,0,null,null,2,"fusioncharts",[],null,null,null,p,c)),a["\u0275prd"](512,null,u.a,u.a,[u.b]),a["\u0275did"](37,5226496,null,0,r.a,[a.ElementRef,u.a,a.KeyValueDiffers,a.NgZone],{dataSource:[0,"dataSource"],type:[1,"type"],width:[2,"width"],height:[3,"height"],dataFormat:[4,"dataFormat"]},null),(l()(),a["\u0275eld"](38,0,null,null,8,"div",[["class","col-md-12 col-lg-12"]],null,null,null,null,null)),(l()(),a["\u0275eld"](39,0,null,null,7,"div",[["class","panel panel-primary"]],null,null,null,null,null)),(l()(),a["\u0275eld"](40,0,null,null,1,"div",[["class","panel-heading"]],null,null,null,null,null)),(l()(),a["\u0275ted"](-1,null,["Last One Week Division Wise Tracking Info Graphs"])),(l()(),a["\u0275eld"](42,0,null,null,4,"div",[["class","panel-body"]],null,null,null,null,null)),(l()(),a["\u0275eld"](43,0,null,null,3,"div",[["class","col-md-12"]],null,null,null,null,null)),(l()(),a["\u0275eld"](44,0,null,null,2,"fusioncharts",[["class","division-week-chat"]],null,null,null,p,c)),a["\u0275prd"](512,null,u.a,u.a,[u.b]),a["\u0275did"](46,5226496,null,0,r.a,[a.ElementRef,u.a,a.KeyValueDiffers,a.NgZone],{dataSource:[0,"dataSource"],type:[1,"type"],width:[2,"width"],height:[3,"height"],dataFormat:[4,"dataFormat"]},null)],function(l,e){var n=e.component;l(e,21,0,n.lastProcessedDivisionDataSource,"Column3D",n.width,n.height,"JSON"),l(e,29,0,n.lastProcessedJobsDataSource,"scrollstackedcolumn2d",n.width,n.height,n.dataFormat),l(e,37,0,n.lastProcessedOperationTypeDataSource,n.multiBarType,n.width,n.height,n.dataFormat),l(e,46,0,n.lastOneWeekDivisionsDataSourceObj,n.type,n.widthone,n.heightone,n.dataFormat)},null)}function v(l){return a["\u0275vid"](0,[(l()(),a["\u0275eld"](0,0,null,null,1,"app-dashboard",[],null,null,null,f,b)),a["\u0275did"](1,114688,null,0,t,[d.Ng4LoadingSpinnerService,g],null,null)],function(l,e){l(e,1,0)},null)}var D=a["\u0275ccf"]("app-dashboard",t,v,{},{},[]),O=n("SVse"),y=n("QQfA"),S=n("IP0z"),T=n("gavF"),x=n("iInd"),P=n("Xd0L"),C=n("cUpR"),w=n("/HVE"),N=n("zMNK"),k=n("hOhj"),R=n("FVPZ"),L=n("0gxj");n.d(e,"DashboardModuleNgFactory",function(){return I});var I=a["\u0275cmf"](s,[],function(l){return a["\u0275mod"]([a["\u0275mpd"](512,a.ComponentFactoryResolver,a["\u0275CodegenComponentFactoryResolver"],[[8,[i.a,D]],[3,a.ComponentFactoryResolver],a.NgModuleRef]),a["\u0275mpd"](4608,d.Ng4LoadingSpinnerService,d.Ng4LoadingSpinnerService,[]),a["\u0275mpd"](4608,O.n,O.m,[a.LOCALE_ID,[2,O.A]]),a["\u0275mpd"](4608,y.c,y.c,[y.i,y.e,a.ComponentFactoryResolver,y.h,y.f,a.Injector,a.NgZone,O.d,S.b,[2,O.h]]),a["\u0275mpd"](5120,y.j,y.k,[y.c]),a["\u0275mpd"](5120,T.c,T.j,[y.c]),a["\u0275mpd"](4608,u.b,u.b,[]),a["\u0275mpd"](4608,u.a,u.a,[u.b]),a["\u0275mpd"](4608,g,g,[h.c]),a["\u0275mpd"](1073742336,x.o,x.o,[[2,x.t],[2,x.l]]),a["\u0275mpd"](1073742336,d.Ng4LoadingSpinnerModule,d.Ng4LoadingSpinnerModule,[]),a["\u0275mpd"](1073742336,O.c,O.c,[]),a["\u0275mpd"](1073742336,S.a,S.a,[]),a["\u0275mpd"](1073742336,P.n,P.n,[[2,P.f],[2,C.f]]),a["\u0275mpd"](1073742336,w.b,w.b,[]),a["\u0275mpd"](1073742336,P.x,P.x,[]),a["\u0275mpd"](1073742336,N.g,N.g,[]),a["\u0275mpd"](1073742336,k.c,k.c,[]),a["\u0275mpd"](1073742336,y.g,y.g,[]),a["\u0275mpd"](1073742336,T.i,T.i,[]),a["\u0275mpd"](1073742336,T.f,T.f,[]),a["\u0275mpd"](1073742336,P.o,P.o,[]),a["\u0275mpd"](1073742336,R.a,R.a,[]),a["\u0275mpd"](1073742336,L.a,L.a,[]),a["\u0275mpd"](1073742336,s,s,[]),a["\u0275mpd"](1024,x.j,function(){return[[{path:"",component:t}]]},[])])})}}]);