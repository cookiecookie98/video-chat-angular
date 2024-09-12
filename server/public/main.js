(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Welcome to video chat!</h1>\n<div>\n  Want to chat?\n  <button (click)=\"createRoom()\">Create a new video chat room now!</button>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/room/room.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/room/room.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div class=\"video-grid\">\n  <div *ngFor=\"let video of videos\">\n    <div class=\"video\">vieo</div>\n    <span *ngIf=\"video.userId !== currentUserId; else currentUserVideoLabel\">{{ video.userId }}</span>\n    <ng-template #currentUserVideoLabel>\n      <span>You</span>\n    </ng-template>\n    <video\n      [srcObject]=\"video.srcObject\"\n      (loadedmetadata)=\"onLoadedMetadata($event)\"\n      [muted]=\"video.muted\"\n    >\n    </video>\n  </div>\n</div> -->\n<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <title>VideoCall App UI - Navid Dev</title>\n\n    <!-- Add Google Font -->\n    <link\n      href=\"https://fonts.googleapis.com/css?family=DM+Sans:400,500,700&display=swap\"\n      rel=\"stylesheet\"\n    />\n    <link rel=\"stylesheet\" href=\"/assets/css/style.css\" />\n  </head>\n  <body>\n    <div class=\"app-container\">\n      <!-- <button class=\"mode-switch\">\n        <svg\n          class=\"sun\"\n          fill=\"none\"\n          stroke=\"#fbb046\"\n          stroke-linecap=\"round\"\n          stroke-linejoin=\"round\"\n          stroke-width=\"2\"\n          class=\"feather feather-sun\"\n          viewBox=\"0 0 24 24\"\n        >\n          <defs />\n          <circle cx=\"12\" cy=\"12\" r=\"5\" />\n          <path\n            d=\"M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42\"\n          />\n        </svg>\n\n        <svg\n          class=\"moon\"\n          fill=\"none\"\n          stroke=\"#ffffff\"\n          stroke-linecap=\"round\"\n          stroke-linejoin=\"round\"\n          stroke-width=\"2\"\n          class=\"feather feather-moon\"\n          viewBox=\"0 0 24 24\"\n        >\n          <defs />\n          <path d=\"M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z\" />\n        </svg>\n      </button> -->\n      <div class=\"left-side\">\n        <div class=\"navigation\">\n          <a href=\"#\" class=\"nav-link icon\">\n            <!-- Home icon -->\n            <svg\n              xmlns=\"http://www.w3.org/2000/svg\"\n              fill=\"none\"\n              stroke=\"currentColor\"\n              stroke-width=\"2\"\n              stroke-linecap=\"round\"\n              stroke-linejoin=\"round\"\n              class=\"feather feather-home\"\n              viewBox=\"0 0 24 24\"\n            >\n              <path d=\"M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z\" />\n              <path d=\"M9 22V12h6v10\" />\n            </svg>\n            <!-- Home icon -->\n          </a>\n\n          <a href=\"#\" class=\"nav-link icon\">\n            <!-- comment icon -->\n            <svg\n              xmlns=\"http://www.w3.org/2000/svg\"\n              width=\"24\"\n              height=\"24\"\n              viewBox=\"0 0 24 24\"\n              fill=\"none\"\n              stroke=\"currentColor\"\n              stroke-width=\"2\"\n              stroke-linecap=\"round\"\n              stroke-linejoin=\"round\"\n              class=\"feather feather-message-square\"\n            >\n              <path\n                d=\"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z\"\n              />\n            </svg>\n            <!-- comment icon -->\n          </a>\n          <a href=\"#\" class=\"nav-link icon\">\n            <!-- ringing phone icon -->\n            <svg\n              xmlns=\"http://www.w3.org/2000/svg\"\n              fill=\"none\"\n              stroke=\"currentColor\"\n              stroke-width=\"2\"\n              stroke-linecap=\"round\"\n              stroke-linejoin=\"round\"\n              class=\"feather feather-phone-call\"\n              viewBox=\"0 0 24 24\"\n            >\n              <path\n                d=\"M15.05 5A5 5 0 0119 8.95M15.05 1A9 9 0 0123 8.94m-1 7.98v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z\"\n              />\n            </svg>\n            <!-- ringing phone icon -->\n          </a>\n          <a href=\"#\" class=\"nav-link icon\">\n            <!-- disk icon -->\n            <svg\n              xmlns=\"http://www.w3.org/2000/svg\"\n              width=\"24\"\n              height=\"24\"\n              viewBox=\"0 0 24 24\"\n              fill=\"none\"\n              stroke=\"currentColor\"\n              stroke-width=\"2\"\n              stroke-linecap=\"round\"\n              stroke-linejoin=\"round\"\n              class=\"feather feather-hard-drive\"\n            >\n              <line x1=\"22\" y1=\"12\" x2=\"2\" y2=\"12\" />\n              <path\n                d=\"M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z\"\n              />\n              <line x1=\"6\" y1=\"16\" x2=\"6.01\" y2=\"16\" />\n              <line x1=\"10\" y1=\"16\" x2=\"10.01\" y2=\"16\" />\n            </svg>\n            <!-- disk icon -->\n          </a>\n          <a href=\"#\" class=\"nav-link icon\">\n            <!-- people icon -->\n            <svg\n              xmlns=\"http://www.w3.org/2000/svg\"\n              width=\"24\"\n              height=\"24\"\n              viewBox=\"0 0 24 24\"\n              fill=\"none\"\n              stroke=\"currentColor\"\n              stroke-width=\"2\"\n              stroke-linecap=\"round\"\n              stroke-linejoin=\"round\"\n              class=\"feather feather-users\"\n            >\n              <path d=\"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2\" />\n              <circle cx=\"9\" cy=\"7\" r=\"4\" />\n              <path d=\"M23 21v-2a4 4 0 0 0-3-3.87\" />\n              <path d=\"M16 3.13a4 4 0 0 1 0 7.75\" />\n            </svg>\n            <!-- people icon -->\n          </a>\n          <a href=\"#\" class=\"nav-link icon\">\n            <!-- Folder icon -->\n            <svg\n              xmlns=\"http://www.w3.org/2000/svg\"\n              fill=\"none\"\n              stroke=\"currentColor\"\n              stroke-width=\"2\"\n              stroke-linecap=\"round\"\n              stroke-linejoin=\"round\"\n              class=\"feather feather-folder\"\n              viewBox=\"0 0 24 24\"\n            >\n              <path\n                d=\"M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z\"\n              />\n            </svg>\n            <!-- Folder icon -->\n          </a>\n          <a href=\"#\" class=\"nav-link icon\">\n            <!-- Setting icon -->\n            <svg\n              xmlns=\"http://www.w3.org/2000/svg\"\n              fill=\"none\"\n              stroke=\"currentColor\"\n              stroke-width=\"2\"\n              stroke-linecap=\"round\"\n              stroke-linejoin=\"round\"\n              class=\"feather feather-settings\"\n              viewBox=\"0 0 24 24\"\n            >\n              <circle cx=\"12\" cy=\"12\" r=\"3\" />\n              <path\n                d=\"M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z\"\n              />\n            </svg>\n            <!-- Setting icon -->\n          </a>\n        </div>\n      </div>\n      <div class=\"app-main\">\n        <div class=\"video-call-wrapper\">\n          <!-- Video Participant  -->\n          <div class=\"video-participant\"  *ngFor=\"let video of videos\">\n            <div class=\"participant-action\">\n              <button class=\"btn-mute\"></button>\n              <button class=\"btn-camera\"></button>\n            </div>\n            <a *ngIf=\"video.userId !== currentUserId; else currentUserVideoLabel\" class=\"name-tag\">{{ video.userId }}</a>\n            <ng-template #currentUserVideoLabel>\n              <a class=\"name-tag\">You</a>\n            </ng-template>\n            <video [srcObject]=\"video.srcObject\"\n            (loadedmetadata)=\"onLoadedMetadata($event)\"\n            [muted]=\"video.muted\"></video>\n          </div>\n        </div>\n\n        <div class=\"video-call-actions\">\n          <button class=\"video-action-button mic\"></button>\n          <button class=\"video-action-button camera\"></button>\n          <button class=\"video-action-button maximize\"></button>\n          <button class=\"video-action-button endcall\">Rời khỏi</button>\n          <button class=\"video-action-button magnifier\">\n            <!-- ZoomIn icon -->\n            <svg\n              xmlns=\"http://www.w3.org/2000/svg\"\n              fill=\"none\"\n              stroke=\"currentColor\"\n              stroke-width=\"2\"\n              stroke-linecap=\"round\"\n              stroke-linejoin=\"round\"\n              class=\"feather feather-zoom-in\"\n              viewBox=\"0 0 24 24\"\n            >\n              <circle cx=\"11\" cy=\"11\" r=\"8\" />\n              <path d=\"M21 21l-4.35-4.35M11 8v6M8 11h6\" />\n            </svg>\n\n            <!-- ZoomIn icon -->\n            <span>100%</span>\n            <!-- ZoomOut Icon -->\n            <svg\n              xmlns=\"http://www.w3.org/2000/svg\"\n              width=\"24\"\n              height=\"24\"\n              viewBox=\"0 0 24 24\"\n              fill=\"none\"\n              stroke=\"currentColor\"\n              stroke-width=\"2\"\n              stroke-linecap=\"round\"\n              stroke-linejoin=\"round\"\n              class=\"feather feather-zoom-out\"\n            >\n              <circle cx=\"11\" cy=\"11\" r=\"8\" />\n              <line x1=\"21\" y1=\"21\" x2=\"16.65\" y2=\"16.65\" />\n              <line x1=\"8\" y1=\"11\" x2=\"14\" y2=\"11\" />\n            </svg>\n            <!-- ZoomOut Icon -->\n          </button>\n        </div>\n      </div>\n\n      <!-- Right Side -->\n      <div class=\"right-side\">\n        <button class=\"btn-close-right\">\n          <!-- Close Icon -->\n          <svg\n            xmlns=\"http://www.w3.org/2000/svg\"\n            width=\"24\"\n            height=\"24\"\n            fill=\"none\"\n            stroke=\"currentColor\"\n            stroke-linecap=\"round\"\n            stroke-linejoin=\"round\"\n            stroke-width=\"2\"\n            class=\"feather feather-x-circle\"\n            viewBox=\"0 0 24 24\"\n          >\n            <defs></defs>\n            <circle cx=\"12\" cy=\"12\" r=\"10\"></circle>\n            <path d=\"M15 9l-6 6M9 9l6 6\"></path>\n          </svg>\n          <!-- Close Icon -->\n        </button>\n        <div class=\"chat-container\">\n          <div class=\"chat-header\">\n            <button class=\"chat-header-button\">Trò chuyện</button>\n          </div>\n          <div class=\"chat-area\">\n            <!-- Message 1 -->\n            <div class=\"message-wrapper\">\n              <div class=\"profile-picture\">\n                <img\n                  src=\"https://images.unsplash.com/photo-1581824283135-0666cf353f35?ixlib=rb-1.2.1&auto=format&fit=crop&w=1276&q=80\"\n                  alt=\"\"\n                />\n              </div>\n              <div class=\"message-content\">\n                <p class=\"name\">Tuấn ngu</p>\n                <div class=\"message\">Chào bọn mày tao là Tuấn Ngu!😍 Tao rất ngu nên đừng dí tao</div>\n              </div>\n            </div>\n            <!-- Message 2 -->\n            <!-- <div class=\"message-wrapper\">\n              <div class=\"profile-picture\">\n                <img\n                  src=\"https://images.unsplash.com/photo-1566821582776-92b13ab46bb4?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60\"\n                  alt=\"\"\n                />\n              </div>\n              <div class=\"message-content\">\n                <p class=\"name\">Andy Will</p>\n                <div class=\"message\">\n                  Hello! Can you hear me?🤯 <a class=\"mention\">@ryanpatrick</a>\n                </div>\n              </div>\n            </div> -->\n            <!-- Message 3 -->\n            <!-- <div class=\"message-wrapper\">\n              <div class=\"profile-picture\">\n                <img\n                  src=\"https://images.unsplash.com/photo-1600207438283-a5de6d9df13e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80\"\n                  alt=\"\"\n                />\n              </div>\n              <div class=\"message-content\">\n                <p class=\"name\">Jessica Bell</p>\n                <div class=\"message\">Hi team! Let's get started it.</div>\n              </div>\n            </div> -->\n            <!-- Message 4 -->\n            <!-- <div class=\"message-wrapper reverse\">\n              <div class=\"profile-picture\">\n                <img\n                  src=\"https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80\"\n                  alt=\"\"\n                />\n              </div>\n              <div class=\"message-content\">\n                <p class=\"name\">Emmy Lou</p>\n                <div class=\"message\">Good morning!🌈</div>\n              </div>\n            </div> -->\n            <!-- Message 5 -->\n            <!-- <div class=\"message-wrapper\">\n              <div class=\"profile-picture\">\n                <img\n                  src=\"https://images.unsplash.com/photo-1576110397661-64a019d88a98?ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80\"\n                  alt=\"\"\n                />\n              </div>\n              <div class=\"message-content\">\n                <p class=\"name\">Tim Russel</p>\n                <div class=\"message\">New design document⬇️</div>\n                <div class=\"message-file\">\n                  <div class=\"icon sketch\">\n                    <svg\n                      xmlns=\"http://www.w3.org/2000/svg\"\n                      viewBox=\"0 0 512 512\"\n                    >\n                      <path\n                        fill=\"#ffd54f\"\n                        d=\"M96 191.02v-144l160-30.04 160 30.04v144z\"\n                      />\n                      <path\n                        fill=\"#ffecb3\"\n                        d=\"M96 191.02L256 16.98l160 174.04z\"\n                      />\n                      <path fill=\"#ffa000\" d=\"M0 191.02l256 304 256-304z\" />\n                      <path fill=\"#ffca28\" d=\"M96 191.02l160 304 160-304z\" />\n                      <g fill=\"#ffc107\">\n                        <path d=\"M0 191.02l96-144v144zM416 47.02v144h96z\" />\n                      </g>\n                    </svg>\n                  </div>\n                  <div class=\"file-info\">\n                    <div class=\"file-name\">NewYear.sketch</div>\n                    <div class=\"file-size\">120 MB</div>\n                  </div>\n                </div>\n              </div>\n            </div> -->\n            <!-- Message 6 -->\n            <!-- <div class=\"message-wrapper\">\n              <div class=\"profile-picture\">\n                <img\n                  src=\"https://images.unsplash.com/photo-1581824283135-0666cf353f35?ixlib=rb-1.2.1&auto=format&fit=crop&w=1276&q=80\"\n                  alt=\"\"\n                />\n              </div>\n              <div class=\"message-content\">\n                <p class=\"name\">Ryan Patrick</p>\n                <div class=\"message\">Hi team!❤️</div>\n                <div class=\"message\">\n                  I downloaded the file <a class=\"mention\">@timrussel</a>\n                </div>\n              </div>\n            </div> -->\n\n            <!-- Message 7 -->\n            <!-- <div class=\"message-wrapper reverse\">\n              <div class=\"profile-picture\">\n                <img\n                  src=\"https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80\"\n                  alt=\"\"\n                />\n              </div>\n              <div class=\"message-content\">\n                <p class=\"name\">Emmy Lou</p>\n                <div class=\"message\">Woooww! Awesome❤️</div>\n              </div>\n            </div> -->\n          </div>\n          <div class=\"chat-typing-area-wrapper\">\n            <div class=\"chat-typing-area\">\n              <input\n                type=\"text\"\n                placeholder=\"Trò chuyện tại đây...\"\n                class=\"chat-input\"\n              />\n              <button class=\"send-button\">\n                <!-- Send icon -->\n                <svg\n                  xmlns=\"http://www.w3.org/2000/svg\"\n                  fill=\"none\"\n                  stroke=\"currentColor\"\n                  stroke-width=\"2\"\n                  stroke-linecap=\"round\"\n                  stroke-linejoin=\"round\"\n                  class=\"feather feather-send\"\n                  viewBox=\"0 0 24 24\"\n                >\n                  <path d=\"M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z\" />\n                </svg>\n                <!-- Send icon -->\n              </button>\n            </div>\n          </div>\n        </div>\n        <div class=\"participants\">\n          <!-- Participant pic 1 -->\n          <!-- <div class=\"participant profile-picture\">\n            <img\n              src=\"https://images.unsplash.com/photo-1576110397661-64a019d88a98?ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80\"\n              alt=\"\"\n            />\n          </div> -->\n          <!-- Participant pic 2 -->\n          <!-- <div class=\"participant profile-picture\">\n            <img\n              src=\"https://images.unsplash.com/photo-1566821582776-92b13ab46bb4?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60\"\n              alt=\"\"\n            />\n          </div> -->\n          <!-- Participant pic 3 -->\n          <!-- <div class=\"participant profile-picture\">\n            <img\n              src=\"https://images.unsplash.com/photo-1600207438283-a5de6d9df13e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80\"\n              alt=\"\"\n            />\n          </div> -->\n          <!-- Participant pic 4 -->\n          <!-- <div class=\"participant profile-picture\">\n            <img\n              src=\"https://images.unsplash.com/photo-1581824283135-0666cf353f35?ixlib=rb-1.2.1&auto=format&fit=crop&w=1276&q=80\"\n              alt=\"\"\n            />\n          </div> -->\n          <div><span class=\"text-blue\">4 (Set cứng)</span> Người tham gia</div>\n        </div>\n      </div>\n      <button class=\"expand-btn\">\n        <!-- expand icon -->\n        <svg\n          xmlns=\"http://www.w3.org/2000/svg\"\n          width=\"24\"\n          height=\"24\"\n          viewBox=\"0 0 24 24\"\n          fill=\"none\"\n          stroke=\"currentColor\"\n          stroke-width=\"2\"\n          stroke-linecap=\"round\"\n          stroke-linejoin=\"round\"\n          class=\"feather feather-message-circle\"\n        >\n          <path\n            d=\"M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z\"\n          />\n        </svg>\n        <!-- expand icon -->\n      </button>\n    </div>\n    <script src=\"script.js\"></script>\n  </body>\n</html>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _room_room_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./room/room.component */ "./src/app/room/room.component.ts");





const routes = [
    {
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
    },
    {
        path: ':roomId',
        component: _room_room_component__WEBPACK_IMPORTED_MODULE_4__["RoomComponent"],
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'front';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _room_room_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./room/room.component */ "./src/app/room/room.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/fesm2015/ngx-socket-io.js");









let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _room_room_component__WEBPACK_IMPORTED_MODULE_6__["RoomComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            ngx_socket_io__WEBPACK_IMPORTED_MODULE_8__["SocketIoModule"].forRoot({
                url: '/'
            })
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var uuid_dist_v4__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid/dist/v4 */ "./node_modules/uuid/dist/v4.js");
/* harmony import */ var uuid_dist_v4__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(uuid_dist_v4__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let HomeComponent = class HomeComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    createRoom() {
        console.log('createRoom');
        this.router.navigate([`/${uuid_dist_v4__WEBPACK_IMPORTED_MODULE_2___default()()}`]);
    }
};
HomeComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/room/room.component.scss":
/*!******************************************!*\
  !*** ./src/app/room/room.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".video-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, 300px);\n  grid-auto-rows: 300px;\n}\n\nvideo {\n  width: 90%;\n  height: 90%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9vbS9EOlxcRW52aXJvbm1lbnRcXHhhbXBwOFxcaHRkb2NzXFwxLU9uZWNsaWNrXFx2aWRlby1jaGF0LWFuZ3VsYXJcXGZyb250L3NyY1xcYXBwXFxyb29tXFxyb29tLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9yb29tL3Jvb20uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsK0NBQUE7RUFDQSxxQkFBQTtBQ0NGOztBREVBO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9yb29tL3Jvb20uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmlkZW8tZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgMzAwcHgpO1xuICBncmlkLWF1dG8tcm93czogMzAwcHg7XG59XG5cbnZpZGVvIHtcbiAgd2lkdGg6IDkwJTtcbiAgaGVpZ2h0OiA5MCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuIiwiLnZpZGVvLWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIDMwMHB4KTtcbiAgZ3JpZC1hdXRvLXJvd3M6IDMwMHB4O1xufVxuXG52aWRlbyB7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogOTAlO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/room/room.component.ts":
/*!****************************************!*\
  !*** ./src/app/room/room.component.ts ***!
  \****************************************/
/*! exports provided: RoomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomComponent", function() { return RoomComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/fesm2015/ngx-socket-io.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");





let RoomComponent = class RoomComponent {
    constructor(route, socket) {
        this.route = route;
        this.socket = socket;
        this.currentUserId = Object(uuid__WEBPACK_IMPORTED_MODULE_4__["v4"])();
        this.videos = [];
    }
    ngOnInit() {
        console.log(`Initialize Peer with id ${this.currentUserId}`);
        console.log(this.currentUserId);
        const myPeer = new Peer(this.currentUserId, {
            host: '/',
            port: 3001,
            secure: false
        });
        this.route.params.subscribe((params) => {
            console.log(params);
            myPeer.on('open', userId => {
                this.socket.emit('join-room', params.roomId, userId);
            });
        });
        navigator.mediaDevices.getUserMedia({
            audio: true,
            video: false,
        })
            .catch((err) => {
            console.error('[Error] Not able to retrieve user media:', err);
            return null;
        })
            .then((stream) => {
            if (stream) {
                this.addMyVideo(stream);
            }
            myPeer.on('call', (call) => {
                console.log('receiving call...', call);
                call.answer(stream);
                call.on('stream', (otherUserVideoStream) => {
                    console.log('receiving other stream', otherUserVideoStream);
                    this.addOtherUserVideo(call.metadata.userId, otherUserVideoStream);
                });
                call.on('error', (err) => {
                    console.error(err);
                });
            });
            this.socket.on('user-connected', (userId) => {
                console.log('Receiving user-connected event', `Calling ${userId}`);
                // Let some time for new peers to be able to answer
                setTimeout(() => {
                    const call = myPeer.call(userId, stream, {
                        metadata: { userId: this.currentUserId },
                    });
                    call.on('stream', (otherUserVideoStream) => {
                        console.log('receiving other user stream after his connection');
                        this.addOtherUserVideo(userId, otherUserVideoStream);
                    });
                    call.on('close', () => {
                        this.videos = this.videos.filter((video) => video.userId !== userId);
                    });
                }, 1000);
            });
        });
        this.socket.on('user-disconnected', (userId) => {
            console.log(`receiving user-disconnected event from ${userId}`);
            this.videos = this.videos.filter(video => video.userId !== userId);
        });
    }
    addMyVideo(stream) {
        this.videos.push({
            muted: true,
            srcObject: stream,
            userId: this.currentUserId,
        });
    }
    addOtherUserVideo(userId, stream) {
        const alreadyExisting = this.videos.some(video => video.userId === userId);
        if (alreadyExisting) {
            console.log(this.videos, userId);
            return;
        }
        this.videos.push({
            muted: false,
            srcObject: stream,
            userId,
        });
    }
    onLoadedMetadata(event) {
        event.target.play();
    }
    onVoiceControl() { }
    onCameraControl() { }
};
RoomComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_3__["Socket"] }
];
RoomComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-room',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./room.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/room/room.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./room.component.scss */ "./src/app/room/room.component.scss")).default]
    })
], RoomComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Environment\xampp8\htdocs\1-Oneclick\video-chat-angular\front\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map