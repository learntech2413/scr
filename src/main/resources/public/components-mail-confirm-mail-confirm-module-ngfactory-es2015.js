(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-mail-confirm-mail-confirm-module-ngfactory"],{

/***/ "./src/app/components/mail-confirm/mail-confirm.component.ngfactory.js":
/*!*****************************************************************************!*\
  !*** ./src/app/components/mail-confirm/mail-confirm.component.ngfactory.js ***!
  \*****************************************************************************/
/*! exports provided: RenderType_MailConfirmComponent, View_MailConfirmComponent_0, View_MailConfirmComponent_Host_0, MailConfirmComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_MailConfirmComponent", function() { return RenderType_MailConfirmComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_MailConfirmComponent_0", function() { return View_MailConfirmComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_MailConfirmComponent_Host_0", function() { return View_MailConfirmComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailConfirmComponentNgFactory", function() { return MailConfirmComponentNgFactory; });
/* harmony import */ var _mail_confirm_component_scss_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mail-confirm.component.scss.ngstyle */ "./src/app/components/mail-confirm/mail-confirm.component.scss.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _mail_confirm_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mail-confirm.component */ "./src/app/components/mail-confirm/mail-confirm.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/alert.service */ "./src/app/services/alert.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 










var styles_MailConfirmComponent = [_mail_confirm_component_scss_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_MailConfirmComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 2, styles: styles_MailConfirmComponent, data: {} });

function View_MailConfirmComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 27, "div", [["class", "content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 26, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 2, "div", [["class", "col-sm-8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "div", [["class", "login-bg-image"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 0, "img", [["alt", "bg image"], ["class", "img-responsive"], ["src", "assets/Images/bg-login.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 22, "div", [["class", "col-sm-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 21, "div", [["class", "login"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "div", [["class", "logo"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 0, "img", [["src", "assets/Images/srijay_logo1.PNG"], ["style", "width: 70%; padding: 10px"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 18, "div", [["class", "logincontent"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 17, "div", [["fusePerfectScrollbar", ""], ["fxLayout", "column"], ["id", "mail-confirm"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 16, "div", [["fxLayout", "column"], ["fxLayoutAlign", "center center"], ["id", "mail-confirm-form-wrapper"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 15, "div", [["id", "mail-confirm-form"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 1, "div", [["class", "form-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Confirm your email address!"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 7, "div", [["class", "subtitle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 4, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" A confirmation e-mail has been sent to "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 1, "b", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](19, null, [" ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [". "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Check your inbox and click on the \"Confirm my email\" link to confirm your email address. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 4, "div", [["class", "message"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 3, "a", [["class", "link"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](25, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](26, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Go back to login page"]))], function (_ck, _v) { var currVal_3 = _ck(_v, 26, 0, "/login"); _ck(_v, 25, 0, currVal_3); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.email; _ck(_v, 19, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).target; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).href; _ck(_v, 24, 0, currVal_1, currVal_2); }); }
function View_MailConfirmComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-mail-confirm", [], null, null, null, View_MailConfirmComponent_0, RenderType_MailConfirmComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _mail_confirm_component__WEBPACK_IMPORTED_MODULE_4__["MailConfirmComponent"], [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_7__["Ng4LoadingSpinnerService"], _services_authentication_service__WEBPACK_IMPORTED_MODULE_8__["AuthenticationService"], _services_alert_service__WEBPACK_IMPORTED_MODULE_9__["AlertService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var MailConfirmComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-mail-confirm", _mail_confirm_component__WEBPACK_IMPORTED_MODULE_4__["MailConfirmComponent"], View_MailConfirmComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/components/mail-confirm/mail-confirm.component.scss.ngstyle.js":
/*!********************************************************************************!*\
  !*** ./src/app/components/mail-confirm/mail-confirm.component.scss.ngstyle.js ***!
  \********************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["app-forms-page .container {\n  margin-top: 50px;\n}\napp-forms-page .section-title {\n  margin-bottom: 20px;\n}\napp-forms-page .user-details-container {\n  padding: 20px;\n  text-align: center;\n}\napp-forms-page .user-details-container .user-image {\n  width: 100%;\n  border-radius: 50%;\n}\napp-forms-page .user-details-container .user-title {\n  font-size: 14px;\n  font-weight: 500;\n  margin-top: 30px;\n  display: block;\n}\napp-forms-page .user-details-container .user-bio {\n  font-size: 12px;\n  margin-top: 20px;\n  display: block;\n  color: rgba(0, 0, 0, 0.7);\n}\napp-forms-page .full-width {\n  width: 100%;\n  margin-bottom: 10px;\n}\napp-forms-page .error-message {\n  font-size: 12px;\n}\napp-forms-page .double-line-hint .mat-input-hint-wrapper {\n  flex-wrap: wrap;\n}\napp-forms-page .double-line-hint .mat-input-hint-wrapper .hint-line {\n  -webkit-box-flex: 0;\n          flex: 0 0 100%;\n}\napp-forms-page .submit-btn {\n  margin-top: 30px;\n}\n.logincontent {\n  border: 1px solid #993333;\n  border-top: none;\n}\n.login .logo {\n  background-color: #cccc99 !important;\n  margin-top: 0px;\n  width: 351px;\n  border-bottom: 1px solid #993333;\n}\n.logo {\n  border: 1px solid #993333;\n  \n}\n.mat-form-field-infix {\n  display: block;\n  position: relative;\n  -webkit-box-flex: 1;\n          flex: auto;\n  min-width: 0;\n  width: 300px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWlsLWNvbmZpcm0vRDpcXFNDUlxcU0NSLUdJVFxcc2NyXFx3ZWJ1aS9zcmNcXGFwcFxcY29tcG9uZW50c1xcbWFpbC1jb25maXJtXFxtYWlsLWNvbmZpcm0uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbC1jb25maXJtL21haWwtY29uZmlybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNFLGdCQUFBO0FDQU47QURHSTtFQUNFLG1CQUFBO0FDRE47QURJSTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtBQ0ZOO0FESU07RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUNGUjtBREtNO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDSFI7QURNTTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtBQ0pSO0FEVUk7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7QUNSTjtBRFdJO0VBQ0UsZUFBQTtBQ1ROO0FEYU07RUFDRSxlQUFBO0FDWFI7QURhUTtFQUNFLG1CQUFBO1VBQUEsY0FBQTtBQ1hWO0FEZ0JJO0VBQ0UsZ0JBQUE7QUNkTjtBRGlCQTtFQUNFLHlCQUFBO0VBQ0EsZ0JBQUE7QUNkRjtBRGlCQTtFQUNFLG9DQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtBQ2RGO0FEaUJBO0VBQ0cseUJBQUE7RUFDRCx5QkFBQTtBQ2RGO0FEaUJBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7VUFBQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FDZEYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21haWwtY29uZmlybS9tYWlsLWNvbmZpcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtZm9ybXMtcGFnZSB7XG4gICAgLmNvbnRhaW5lciB7XG4gICAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgIH1cbiAgICBcbiAgICAuc2VjdGlvbi10aXRsZSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIH1cbiAgXG4gICAgLnVzZXItZGV0YWlscy1jb250YWluZXIge1xuICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgXG4gICAgICAudXNlci1pbWFnZSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICB9XG4gIFxuICAgICAgLnVzZXItdGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuICBcbiAgICAgIC51c2VyLWJpbyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzApO1xuICAgICAgfVxuICAgIH1cbiAgXG4gIFxuICBcbiAgICAuZnVsbC13aWR0aCB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgfVxuICBcbiAgICAuZXJyb3ItbWVzc2FnZSB7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgfVxuICBcbiAgICAuZG91YmxlLWxpbmUtaGludCB7XG4gICAgICAubWF0LWlucHV0LWhpbnQtd3JhcHBlciB7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgXG4gICAgICAgIC5oaW50LWxpbmUge1xuICAgICAgICAgIGZsZXg6IDAgMCAxMDAlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICBcbiAgICAuc3VibWl0LWJ0biB7XG4gICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIH1cbiAgfVxuLmxvZ2luY29udGVudCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM5OTMzMzM7XG4gIGJvcmRlci10b3A6IG5vbmU7XG59XG5cbi5sb2dpbiAubG9nbyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2NjOTkgIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICB3aWR0aDogMzUxcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjOTkzMzMzO1xufVxuXG4ubG9nbyB7XG4gICBib3JkZXI6IDFweCBzb2xpZCAjOTkzMzMzOyBcbiAgLyogYm9yZGVyLWJvdHRvbTogbm9uZTsgKi9cbn1cblxuLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxleDogYXV0bztcbiAgbWluLXdpZHRoOiAwO1xuICB3aWR0aDogMzAwcHggIWltcG9ydGFudDtcbn0iLCJhcHAtZm9ybXMtcGFnZSAuY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cbmFwcC1mb3Jtcy1wYWdlIC5zZWN0aW9uLXRpdGxlIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbmFwcC1mb3Jtcy1wYWdlIC51c2VyLWRldGFpbHMtY29udGFpbmVyIHtcbiAgcGFkZGluZzogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuYXBwLWZvcm1zLXBhZ2UgLnVzZXItZGV0YWlscy1jb250YWluZXIgLnVzZXItaW1hZ2Uge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuYXBwLWZvcm1zLXBhZ2UgLnVzZXItZGV0YWlscy1jb250YWluZXIgLnVzZXItdGl0bGUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuYXBwLWZvcm1zLXBhZ2UgLnVzZXItZGV0YWlscy1jb250YWluZXIgLnVzZXItYmlvIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcbn1cbmFwcC1mb3Jtcy1wYWdlIC5mdWxsLXdpZHRoIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5hcHAtZm9ybXMtcGFnZSAuZXJyb3ItbWVzc2FnZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbmFwcC1mb3Jtcy1wYWdlIC5kb3VibGUtbGluZS1oaW50IC5tYXQtaW5wdXQtaGludC13cmFwcGVyIHtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuYXBwLWZvcm1zLXBhZ2UgLmRvdWJsZS1saW5lLWhpbnQgLm1hdC1pbnB1dC1oaW50LXdyYXBwZXIgLmhpbnQtbGluZSB7XG4gIGZsZXg6IDAgMCAxMDAlO1xufVxuYXBwLWZvcm1zLXBhZ2UgLnN1Ym1pdC1idG4ge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4ubG9naW5jb250ZW50IHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzk5MzMzMztcbiAgYm9yZGVyLXRvcDogbm9uZTtcbn1cblxuLmxvZ2luIC5sb2dvIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2M5OSAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIHdpZHRoOiAzNTFweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM5OTMzMzM7XG59XG5cbi5sb2dvIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzk5MzMzMztcbiAgLyogYm9yZGVyLWJvdHRvbTogbm9uZTsgKi9cbn1cblxuLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxleDogYXV0bztcbiAgbWluLXdpZHRoOiAwO1xuICB3aWR0aDogMzAwcHggIWltcG9ydGFudDtcbn0iXX0= */"];



/***/ }),

/***/ "./src/app/components/mail-confirm/mail-confirm.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/mail-confirm/mail-confirm.component.ts ***!
  \*******************************************************************/
/*! exports provided: MailConfirmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailConfirmComponent", function() { return MailConfirmComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../validators */ "./src/app/validators/index.ts");



class MailConfirmComponent {
    constructor(fb, authService, router, formBuilder, spinnerService, authenticationService, alertService, route) {
        this.fb = fb;
        this.authService = authService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.spinnerService = spinnerService;
        this.authenticationService = authenticationService;
        this.alertService = alertService;
        this.route = route;
        this.invalid = false;
        this.parentErrorStateMatcher = new _validators__WEBPACK_IMPORTED_MODULE_2__["ParentErrorStateMatcher"]();
        this.genders = [
            "Male",
            "Female",
            "Other"
        ];
        this.countries = [
            new _validators__WEBPACK_IMPORTED_MODULE_2__["Country"]('UY', 'Uruguay'),
            new _validators__WEBPACK_IMPORTED_MODULE_2__["Country"]('US', 'United States'),
            new _validators__WEBPACK_IMPORTED_MODULE_2__["Country"]('AR', 'Argentina')
        ];
        this.validation_messages = {
            'fullname': [
                { type: 'required', message: 'Full name is required' }
            ],
            'bio': [
                { type: 'maxlength', message: 'Bio cannot be more than 256 characters long' },
            ],
            'gender': [
                { type: 'required', message: 'Please select your gender' },
            ],
            'birthday': [
                { type: 'required', message: 'Please insert your birthday' },
            ],
            'phone': [
                { type: 'required', message: 'Phone is required' },
                { type: 'validCountryPhone', message: 'Phone incorrect for the country selected' }
            ]
        };
        this.account_validation_messages = {
            'username': [
                { type: 'required', message: 'Username is required' },
                { type: 'minlength', message: 'Username must be at least 5 characters long' },
                { type: 'maxlength', message: 'Username cannot be more than 25 characters long' },
                { type: 'pattern', message: 'Your username must contain only numbers and letters' },
                { type: 'validUsername', message: 'Your username has already been taken' }
            ],
            'email': [
                { type: 'required', message: 'Email is required' },
                { type: 'pattern', message: 'Enter a valid email' }
            ],
            'confirm_password': [
                { type: 'required', message: 'Confirm password is required' },
                { type: 'areEqual', message: 'Password mismatch' }
            ],
            'password': [
                { type: 'required', message: 'Password is required' },
                { type: 'minlength', message: 'Password must be at least 5 characters long' },
                { type: 'pattern', message: 'Your password must contain at least one uppercase, one lowercase, and one number' }
            ],
            'terms': [
                { type: 'pattern', message: 'You must accept terms and conditions' }
            ]
        };
    }
    ngOnInit() {
        if (!!localStorage.getItem("email")) {
            this.email = localStorage.getItem("email");
        }
        this.createForms();
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/dashboard';
    }
    createForms() {
        // matching passwords validation
        this.matching_passwords_group = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
            ])) /* ,
            confirm_password: new FormControl('', Validators.required) */
        } /* , (formGroup: FormGroup) => {
          return PasswordValidator.areEqual(formGroup);
        } */);
        // country & phone validation
        let country = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.countries[0], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        let phone = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', {
            validators: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _validators__WEBPACK_IMPORTED_MODULE_2__["PhoneValidator"].validCountryPhone(country)
            ])
        });
        this.country_phone_group = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            country: country,
            phone: phone
        });
        // user details form validations
        this.userDetailsForm = this.fb.group({
            fullname: ['Homero Simpson', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            bio: ["Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(256)],
            birthday: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.genders[0], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            country_phone: this.country_phone_group
        });
        // user links form validations
        this.accountDetailsForm = this.fb.group({
            /* username: new FormControl('', Validators.compose([
             UsernameValidator.validUsername,
             Validators.maxLength(25),
             Validators.minLength(5),
             Validators.pattern('^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
             Validators.required
            ])), */
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
                // Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
            ])),
            terms: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('true'))
        });
    }
    onSubmitAccountDetails(value) {
        console.log(value);
        //this.router.navigate(['/dashboard']);
        this.spinnerService.show();
        let email = this.accountDetailsForm.value.email;
        let password = this.accountDetailsForm.value.password;
        console.log(email + " : " + password);
        console.log("this.loginForm: " + (this.accountDetailsForm));
        // return false;
        this.authenticationService.login(email, password)
            .subscribe(data => {
            this.authenticationService.getLoginUserData(email, password)
                .subscribe(userdata => {
                console.log("navigate");
                this.spinnerService.hide();
                //this.fuseNavigationService.setNavigationModel(new FuseNavigationModel());
                console.log("this.returnUrl: " + this.returnUrl);
                this.router.navigate([this.returnUrl]);
            }, error => {
                this.alertService.error(error);
                this.spinnerService.hide();
                //this.loading = false;
            });
        }, error => {
            this.invalid = true;
            this.alertService.error(error);
            this.spinnerService.hide();
            //this.loading = false;
        });
    }
    onSubmitUserDetails(value) {
        console.log(value);
    }
}


/***/ }),

/***/ "./src/app/components/mail-confirm/mail-confirm.module.ngfactory.js":
/*!**************************************************************************!*\
  !*** ./src/app/components/mail-confirm/mail-confirm.module.ngfactory.js ***!
  \**************************************************************************/
/*! exports provided: MailConfirmModuleNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailConfirmModuleNgFactory", function() { return MailConfirmModuleNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _mail_confirm_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mail-confirm.module */ "./src/app/components/mail-confirm/mail-confirm.module.ts");
/* harmony import */ var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/@angular/router/router.ngfactory */ "./node_modules/@angular/router/router.ngfactory.js");
/* harmony import */ var _mail_confirm_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mail-confirm.component.ngfactory */ "./src/app/components/mail-confirm/mail-confirm.component.ngfactory.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/observers */ "./node_modules/@angular/cdk/esm2015/observers.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm2015/bidi.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm2015/platform.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm2015/checkbox.js");
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/text-field */ "./node_modules/@angular/cdk/esm2015/text-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _mail_confirm_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./mail-confirm.component */ "./src/app/components/mail-confirm/mail-confirm.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 


















var MailConfirmModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_mail_confirm_module__WEBPACK_IMPORTED_MODULE_1__["MailConfirmModule"], [], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_router_router_lNgFactory"], _mail_confirm_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["MailConfirmComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_o"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_o"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_6__["MutationObserverFactory"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_6__["MutationObserverFactory"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["ErrorStateMatcher"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["ErrorStateMatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_6__["ObserversModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_6__["ObserversModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatCommonModule"], [[2, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MATERIAL_SANITY_CHECKS"]], [2, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["HAMMER_LOADER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatRippleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__["_MatCheckboxRequiredValidatorModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__["_MatCheckboxRequiredValidatorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__["MatCheckboxModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__["MatCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_15__["TextFieldModule"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_15__["TextFieldModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _mail_confirm_module__WEBPACK_IMPORTED_MODULE_1__["MailConfirmModule"], _mail_confirm_module__WEBPACK_IMPORTED_MODULE_1__["MailConfirmModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_8__["ROUTES"], function () { return [[{ path: "", component: _mail_confirm_component__WEBPACK_IMPORTED_MODULE_17__["MailConfirmComponent"] }]]; }, [])]); });



/***/ }),

/***/ "./src/app/components/mail-confirm/mail-confirm.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/mail-confirm/mail-confirm.module.ts ***!
  \****************************************************************/
/*! exports provided: MailConfirmModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailConfirmModule", function() { return MailConfirmModule; });
/* harmony import */ var _mail_confirm_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mail-confirm.component */ "./src/app/components/mail-confirm/mail-confirm.component.ts");

/* import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { AlertService } from 'src/app/services/alert.service';
 */
const routes = [
    {
        path: '',
        component: _mail_confirm_component__WEBPACK_IMPORTED_MODULE_0__["MailConfirmComponent"]
    }
];
class MailConfirmModule {
}


/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");

class AuthService {
    constructor() { }
    login(userInfo) {
        localStorage.setItem('ACCESS_TOKEN', "access_token");
    }
    isLoggedIn() {
        return localStorage.getItem('ACCESS_TOKEN') !== null;
    }
    logout() {
        localStorage.removeItem('ACCESS_TOKEN');
    }
}
AuthService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ factory: function AuthService_Factory() { return new AuthService(); }, token: AuthService, providedIn: "root" });


/***/ })

}]);
//# sourceMappingURL=components-mail-confirm-mail-confirm-module-ngfactory-es2015.js.map