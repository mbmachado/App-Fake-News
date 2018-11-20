webpackJsonp([1],{

/***/ 109:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/result/result.module": [
		273,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 150;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/var/www/html/App-Fake-News/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Dicas" tabIcon="information-circle"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Contato" tabIcon="contacts"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/var/www/html/App-Fake-News/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/var/www/html/App-Fake-News/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Dicas\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	<ion-card>\n	  <ion-card-content>\n	    <ion-card-title>\n	      Considere a fonte\n	    </ion-card-title>\n	    <p>\n	      Navegue pelo site para investigá-lo, verifique sua missão e contatos.\n	    </p>\n	  </ion-card-content>\n	</ion-card>\n\n	<ion-card>\n	  <ion-card-content>\n	    <ion-card-title>\n	      Leia Mais\n	    </ion-card-title>\n	    <p>\n	      Títulos chamam a atenção para obter cliques. Qual é a história completa?\n	    </p>\n	  </ion-card-content>\n	</ion-card>\n\n	<ion-card>\n	  <ion-card-content>\n	    <ion-card-title>\n	      Verifique o autor\n	    </ion-card-title>\n	    <p>\n	      Faça uma breve pesquisa sobre o autor. Ele é confiável? Ele existe mesmo?\n	    </p>\n	  </ion-card-content>\n	</ion-card>\n\n	<ion-card>\n	  <ion-card-content>\n	    <ion-card-title>\n	      Fontes de apoio?\n	    </ion-card-title>\n	    <p>\n	      Clique nos links das fontes. Verifique se oferecem apoio à história.\n	    </p>\n	  </ion-card-content>\n	</ion-card>\n\n	<ion-card>\n	  <ion-card-content>\n	    <ion-card-title>\n	      Verifique a data\n	    </ion-card-title>\n	    <p>\n	      Repostar notícias antigas não significa que sejam relevantes atualmente.\n	    </p>\n	  </ion-card-content>\n	</ion-card>\n\n	<ion-card>\n	  <ion-card-content>\n	    <ion-card-title>\n	      Isso é uma piada?\n	    </ion-card-title>\n	    <p>\n	      Caso seja muito estranho, pode ser uma sátira. Pesquise sobre o site e o autor.\n	    </p>\n	  </ion-card-content>\n	</ion-card>\n\n	<ion-card>\n	  <ion-card-content>\n	    <ion-card-title>\n	      É preconceito?\n	    </ion-card-title>\n	    <p>\n	      Avalie se seus valores próprios e crenças podem afetar seu julgamento.\n	    </p>\n	  </ion-card-content>\n	</ion-card>\n\n	<ion-card>\n	  <ion-card-content>\n	    <ion-card-title>\n	      Consulte especialistas\n	    </ion-card-title>\n	    <p>\n	      Pergunte a um especialista ou utilize esta ferramenta de verificação! \n	    </p>\n	  </ion-card-content>\n	</ion-card>\n</ion-content>\n'/*ion-inline-end:"/var/www/html/App-Fake-News/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"/var/www/html/App-Fake-News/src/pages/contact/contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Desenvolvedores\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n	  <ion-item>\n	    <ion-avatar item-start>\n	      <img src="../../assets/imgs/avatar-ts-woody.png">\n	    </ion-avatar>\n	    <h2>Mateus Barbosa</h2>\n	    <p>mateus@email.com</p>\n	  </ion-item>\n\n	  <ion-item>\n	    <ion-avatar item-start>\n	      <img src="../../assets/imgs/avatar-ts-buzz.png">\n	    </ion-avatar>\n	    <h2>Diego Fernandes</h2>\n	    <p>diego@email.com</p>\n	  </ion-item>\n\n	  <ion-item>\n	    <ion-avatar item-start>\n	      <img src="../../assets/imgs/avatar-ts-woody.png">\n	    </ion-avatar>\n	    <h2>André Walker</h2>\n	    <p>andre@email.com</p>\n	  </ion-item>\n\n	  <ion-item>\n	    <ion-avatar item-start>\n	      <img src="../../assets/imgs/avatar-ts-buzz.png">\n	    </ion-avatar>\n	    <h2>Jefferson Brito</h2>\n	    <p>jeff@email.com</p>\n	  </ion-item>\n\n	  <ion-item>\n	    <ion-avatar item-start>\n	      <img src="../../assets/imgs/avatar-ts-woody.png">\n	    </ion-avatar>\n	    <h2>Daniel Guedes</h2>\n	    <p>daniel@email.com</p>\n	  </ion-item>\n	</ion-list>\n</ion-content>\n'/*ion-inline-end:"/var/www/html/App-Fake-News/src/pages/contact/contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__result_result__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.goToResultPage = function (_text, _type) {
        _text = _text || "";
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__result_result__["a" /* ResultPage */], {
            text: _text,
            type: _type
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/var/www/html/App-Fake-News/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Detector de FakeNews</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card>\n	  <ion-card-header>\n	    Analisar Notícia\n	  </ion-card-header>\n	  <ion-card-content>\n	    <p>Cole um link ou um texto aqui para verificar!</p>\n	    \n			<ion-list class="my-list">\n  			<ion-item class="my-item">\n				  <ion-label stacked>Tipo</ion-label>\n				  <ion-select #type>\n				    <ion-option value="l" selected>Link</ion-option>\n				    <ion-option value="t">Texto</ion-option>\n				  </ion-select>\n				</ion-item>\n  			<ion-item>\n					<ion-label stacked>Link ou Texto</ion-label>\n    			<ion-textarea type="text" rows="4" #text></ion-textarea>\n				</ion-item>\n			</ion-list>\n			\n			<button ion-button full round class="my-btn" (click)="goToResultPage(text.value, type.value)">Verificar</button>\n	  </ion-card-content>\n	</ion-card>\n</ion-content>\n'/*ion-inline-end:"/var/www/html/App-Fake-News/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(222);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_result_result__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_http__ = __webpack_require__(151);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var AppModule = /** @class */ (function () {
    function AppModule(statusBar) {
        this.statusBar = statusBar;
        this.statusBar.backgroundColorByHexString('#3260b2');
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_result_result__["a" /* ResultPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/result/result.module#ResultPageModule', name: 'ResultPage', segment: 'result', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_11__angular_http__["c" /* HttpModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_result_result__["a" /* ResultPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */]])
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/var/www/html/App-Fake-News/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/var/www/html/App-Fake-News/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ResultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ResultPage = /** @class */ (function () {
    function ResultPage(navCtrl, navParams, alertCtrl, loadingCtrl, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.API_URL = 'http://localhost:8100/api';
        this.text = navParams.get('text');
        this.type = navParams.get('type');
    }
    ResultPage.prototype.generateResponse = function (data) {
        var type;
        if (data["domain"] != null) {
            type = parseFloat(data["domain"].category_id);
        }
        else {
            type = parseFloat(data["robot"].fake_news);
        }
        if (type < 1) {
            this.response = "Inconclusivo";
        }
        else if (type >= 1 && type < 2) {
            this.response = "Notícia Real";
        }
        else if (type >= 2 && type < 3) {
            this.response = "Notícia Falsa";
        }
        else if (type >= 3 && type < 4) {
            this.response = "Click Bait";
        }
        else if (type >= 4 && type < 5) {
            this.response = "Extremamente Tendencioso";
        }
        else if (type >= 5 && type < 6) {
            this.response = "Sátira";
        }
        else {
            this.response = "Não é Notícia";
        }
    };
    ResultPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({ spinner: "crescent", content: "Carregando" });
        var alert = this.alertCtrl.create({ title: 'Erro', subTitle: 'Algo não funcionou corretamente', buttons: ['OK'] });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        loader.present();
        headers.append('Content-Type', 'application/json');
        if (this.type == "l") {
            this.http.get(this.API_URL + '/votes?url=' + encodeURI(this.text) + '&title=', { headers: headers }).subscribe(function (result) {
                _this.generateResponse(result.json());
                loader.dismiss();
            }, function (error) {
                loader.dismiss();
                alert.present();
            });
        }
        else {
            this.http.get(this.API_URL + '/votes_by_content?content=' + encodeURI(this.text), { headers: headers }).subscribe(function (result) {
                _this.generateResponse(result.json());
                loader.dismiss();
            }, function (error) {
                loader.dismiss();
                alert.present();
            });
        }
    };
    ResultPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-result',template:/*ion-inline-start:"/var/www/html/App-Fake-News/src/pages/result/result.html"*/'<!--\n  Generated template for the ResultPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Análise</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<ion-card>\n	  <ion-card-content>\n	    <ion-card-title>\n	      Conteúdo\n	    </ion-card-title>\n	    <p>\n	      {{text}}\n	    </p>\n	  </ion-card-content>\n	</ion-card>\n\n	<ion-card>\n	  <ion-card-content>\n	    <ion-card-title>\n	      Resultado\n	    </ion-card-title>\n	    <p>\n	      {{response}}\n	    </p>\n	  </ion-card-content>\n	</ion-card>\n</ion-content>\n'/*ion-inline-end:"/var/www/html/App-Fake-News/src/pages/result/result.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], ResultPage);
    return ResultPage;
}());

//# sourceMappingURL=result.js.map

/***/ })

},[199]);
//# sourceMappingURL=main.js.map