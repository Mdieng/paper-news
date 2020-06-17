function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-folder-folder-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/folder/folder.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/folder/folder.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesFolderFolderPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>{{ folder }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content fullscreen>\n  <ion-list>\n    <ion-list-header color=\"light\">\n      <h2 color=\"warning\">A LA UNE</h2>\n    </ion-list-header>\n\n    <ion-card (click)=\"viewArticle()\">\n      <img src=\"assets/images/covid-19.jpg\" />\n      <ion-card-header>\n        <ion-card-subtitle color=\"warning\">A LA UNE • Actualité • Dakar • santé • societe</ion-card-subtitle>\n        <ion-card-title>COVID-19/Point du jour : 8 nouvelles contaminations dont 2 cas communautaire et 5 patients guéris</ion-card-title>\n      </ion-card-header>\n      <!-- <ion-card-content>\n        Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the Wisconsin Territory in 1836.\n      </ion-card-content> -->\n    </ion-card>\n\n    <ion-item (click)=\"viewArticle()\">\n      <ion-avatar slot=\"start\">\n        <img src=\"assets/images/grayscale_tech.jpg\">\n      </ion-avatar>\n      <ion-label>\n        <h2 color=\"warning\">Actualité • Technologie </h2>\n        <h3>Technologie</h3>\n        <p>Technologie : L’Artp annonce le lancement très prochainement de la 4G</p>\n      </ion-label>\n    </ion-item>\n\n    <ion-item (click)=\"viewArticle()\">\n      <ion-avatar slot=\"start\">\n        <img src=\"assets/images/sport.jpg\">\n      </ion-avatar>\n      <ion-label>\n        <h2 color=\"warning\">Actualité • Sport</h2>\n        <h3>Sport</h3>\n        <p>Racisme : Le message coup de poing de Sadio Mané !</p>\n      </ion-label>\n    </ion-item>\n\n    <ion-item (click)=\"viewArticle()\">\n      <ion-avatar slot=\"start\">\n        <img src=\"assets/images/economie.jpg\">\n      </ion-avatar>\n      <ion-label>\n        <h2 color=\"warning\">Actualité • Economie </h2>\n        <h3>Economie</h3>\n        <p>Sénégal: La BAD va investir 46 milliards francs Cfa pour financer le parc des technologies numériques</p>\n      </ion-label>\n    </ion-item>\n\n    <ion-item (click)=\"viewArticle()\">\n      <ion-avatar slot=\"start\">\n        <img src=\"assets/images/education.jpg\">\n      </ion-avatar>\n      <ion-label>\n        <h2 color=\"warning\">Actualité • Education</h2>\n        <h3>Education</h3>\n        <p>Télé-école pour sauver l’année scolaire: avons-nous pensé à la fracture numérique et à l’équation de l’électricité ?</p>\n      </ion-label>\n    </ion-item>\n\n    <ion-item (click)=\"viewArticle()\">\n      <ion-avatar slot=\"start\">\n        <img src=\"assets/images/r-sociaux.jpg\">\n      </ion-avatar>\n      <ion-label>\n        <h2 color=\"warning\">Actualité • Chronique </h2>\n        <h3>Chronique</h3>\n        <p>Jeunesse et Internet : quand les réseaux sociaux participent à la dégradation des mœurs au Sénégal.</p>\n      </ion-label>\n    </ion-item>\n\n    <ion-item (click)=\"viewArticle()\">\n      <ion-avatar slot=\"start\">\n        <img src=\"assets/images/societe.jpg\">\n      </ion-avatar>\n      <ion-label>\n        <h2 color=\"warning\">Actualité • Societé</h2>\n        <h3>Sociéte</h3>\n        <p>Placé en garde à vue : Cheikh Yérim Seck déféré demain mardi (média)</p>\n      </ion-label>\n    </ion-item>\n    <ion-item (click)=\"viewArticle()\">\n      <ion-avatar slot=\"start\">\n        <img src=\"assets/images/international.jpg\">\n      </ion-avatar>\n      <ion-label>\n        <h2 color=\"warning\">Actualité • International </h2>\n        <h3>International</h3>\n        <p>George Floyd et Derek Chauvin (Policier) se connaissaient et s’étaient déjà disputés</p>\n      </ion-label>\n    </ion-item>\n\n    <ion-item (click)=\"viewArticle()\">\n      <ion-avatar slot=\"start\">\n        <img src=\"assets/images/divers.jpg\">\n      </ion-avatar>\n      <ion-label>\n        <h2 color=\"warning\">Actualité • Faits-Divers</h2>\n        <h3>Faits-Divers</h3>\n        <p>Cambriolage en plein couvre-feu à Touba : 4 millions emportés par des malfrats</p>\n      </ion-label>\n    </ion-item>\n    </ion-list>\n    \n    </ion-content>\n    <ion-footer class=\"ion-no-border\">\n      <ion-toolbar>\n        <ion-tabs>\n          <ion-tab-bar slot=\"bottom\">\n        \n            <ion-tab-button tab=\"speakers\">\n              <ion-icon name=\"person-circle\"></ion-icon>\n              <ion-label>Profil</ion-label>\n            </ion-tab-button>\n        \n            <ion-tab-button tab=\"call\">\n              <ion-icon name=\"call\"></ion-icon>\n              <ion-label>Nous contacter</ion-label>\n            </ion-tab-button>\n        \n            <ion-tab-button tab=\"about\">\n              <ion-icon name=\"information-circle\"></ion-icon>\n              <ion-label>A Propos</ion-label>\n            </ion-tab-button>\n          </ion-tab-bar>\n        </ion-tabs>\n      </ion-toolbar>\n    </ion-footer>\n";
    /***/
  },

  /***/
  "./src/app/pages/folder/folder-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/folder/folder-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: FolderPageRoutingModule */

  /***/
  function srcAppPagesFolderFolderRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FolderPageRoutingModule", function () {
      return FolderPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _folder_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./folder.page */
    "./src/app/pages/folder/folder.page.ts");

    var routes = [{
      path: '',
      component: _folder_page__WEBPACK_IMPORTED_MODULE_3__["FolderPage"]
    }];

    var FolderPageRoutingModule = function FolderPageRoutingModule() {
      _classCallCheck(this, FolderPageRoutingModule);
    };

    FolderPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], FolderPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/folder/folder.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/folder/folder.module.ts ***!
    \***********************************************/

  /*! exports provided: FolderPageModule */

  /***/
  function srcAppPagesFolderFolderModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FolderPageModule", function () {
      return FolderPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _folder_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./folder-routing.module */
    "./src/app/pages/folder/folder-routing.module.ts");
    /* harmony import */


    var _folder_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./folder.page */
    "./src/app/pages/folder/folder.page.ts");

    var FolderPageModule = function FolderPageModule() {
      _classCallCheck(this, FolderPageModule);
    };

    FolderPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _folder_routing_module__WEBPACK_IMPORTED_MODULE_5__["FolderPageRoutingModule"]],
      declarations: [_folder_page__WEBPACK_IMPORTED_MODULE_6__["FolderPage"]]
    })], FolderPageModule);
    /***/
  },

  /***/
  "./src/app/pages/folder/folder.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/pages/folder/folder.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesFolderFolderPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-menu-button {\n  color: var(--ion-color-primary);\n}\n\n#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iYXllbWFtYWRvdWRpZW5nL0RvY3VtZW50cy9QZXJzby9wYXBlci1uZXdzL3NyYy9hcHAvcGFnZXMvZm9sZGVyL2ZvbGRlci5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2ZvbGRlci9mb2xkZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsK0JBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtBQ0NGOztBREVBO0VBQ0UscUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZvbGRlci9mb2xkZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLW1lbnUtYnV0dG9uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuI2NvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuI2NvbnRhaW5lciBzdHJvbmcge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xufVxuXG4jY29udGFpbmVyIHAge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBjb2xvcjogIzhjOGM4YztcbiAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59IiwiaW9uLW1lbnUtYnV0dG9uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuI2NvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuI2NvbnRhaW5lciBzdHJvbmcge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xufVxuXG4jY29udGFpbmVyIHAge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBjb2xvcjogIzhjOGM4YztcbiAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/folder/folder.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/folder/folder.page.ts ***!
    \*********************************************/

  /*! exports provided: FolderPage */

  /***/
  function srcAppPagesFolderFolderPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FolderPage", function () {
      return FolderPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var FolderPage = /*#__PURE__*/function () {
      function FolderPage(activatedRoute, navCtrl, route) {
        _classCallCheck(this, FolderPage);

        this.activatedRoute = activatedRoute;
        this.navCtrl = navCtrl;
        this.route = route;
      }

      _createClass(FolderPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.folder = this.activatedRoute.snapshot.paramMap.get('id');
        }
      }, {
        key: "viewArticle",
        value: function viewArticle() {
          this.navCtrl.navigateForward(["/details"]);
        }
      }]);

      return FolderPage;
    }();

    FolderPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    FolderPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-folder',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./folder.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/folder/folder.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./folder.page.scss */
      "./src/app/pages/folder/folder.page.scss"))["default"]]
    })], FolderPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-folder-folder-module-es5.js.map