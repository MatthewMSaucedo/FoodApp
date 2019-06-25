(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _recipes_recipes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./recipes/recipes.component */ "./src/app/recipes/recipes.component.ts");
/* harmony import */ var _shopping_list_shopping_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shopping-list/shopping-list.component */ "./src/app/shopping-list/shopping-list.component.ts");
/* harmony import */ var _recipes_recipe_start_recipe_start_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./recipes/recipe-start/recipe-start.component */ "./src/app/recipes/recipe-start/recipe-start.component.ts");
/* harmony import */ var _recipes_recipe_detail_recipe_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./recipes/recipe-detail/recipe-detail.component */ "./src/app/recipes/recipe-detail/recipe-detail.component.ts");
/* harmony import */ var _recipes_recipe_edit_recipe_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./recipes/recipe-edit/recipe-edit.component */ "./src/app/recipes/recipe-edit/recipe-edit.component.ts");








var appRoutes = [
    {
        path: '',
        redirectTo: '/recipes',
        pathMatch: 'full'
    },
    {
        path: 'recipes',
        component: _recipes_recipes_component__WEBPACK_IMPORTED_MODULE_3__["RecipesComponent"],
        children: [
            {
                path: '',
                component: _recipes_recipe_start_recipe_start_component__WEBPACK_IMPORTED_MODULE_5__["RecipeStartComponent"]
            },
            { path: 'new',
                component: _recipes_recipe_edit_recipe_edit_component__WEBPACK_IMPORTED_MODULE_7__["RecipeEditComponent"]
            },
            {
                path: ':id',
                component: _recipes_recipe_detail_recipe_detail_component__WEBPACK_IMPORTED_MODULE_6__["RecipeDetailComponent"]
            },
            {
                path: ':id/edit',
                component: _recipes_recipe_edit_recipe_edit_component__WEBPACK_IMPORTED_MODULE_7__["RecipeEditComponent"]
            }
        ]
    },
    {
        path: 'shopping-list',
        component: _shopping_list_shopping_list_component__WEBPACK_IMPORTED_MODULE_4__["ShoppingListComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </div>\r\n</div>\r\n<h1>Application says what?</h1>\r\n<ul>\r\n  <li *ngFor=\"let value of apiValues\">{{value}}</li>\r\n</ul>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(_httpService) {
        this._httpService = _httpService;
        this.loadedFeature = 'recipe';
    }
    AppComponent.prototype.onNavigate = function (feature) {
        this.loadedFeature = feature;
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._httpService.get('/api/values').subscribe(function (values) {
            _this.apiValues = values;
        });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _recipes_recipes_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./recipes/recipes.component */ "./src/app/recipes/recipes.component.ts");
/* harmony import */ var _recipes_recipe_list_recipe_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./recipes/recipe-list/recipe-list.component */ "./src/app/recipes/recipe-list/recipe-list.component.ts");
/* harmony import */ var _recipes_recipe_detail_recipe_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./recipes/recipe-detail/recipe-detail.component */ "./src/app/recipes/recipe-detail/recipe-detail.component.ts");
/* harmony import */ var _recipes_recipe_list_recipe_item_recipe_item_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./recipes/recipe-list/recipe-item/recipe-item.component */ "./src/app/recipes/recipe-list/recipe-item/recipe-item.component.ts");
/* harmony import */ var _shopping_list_shopping_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shopping-list/shopping-list.component */ "./src/app/shopping-list/shopping-list.component.ts");
/* harmony import */ var _shopping_list_shopping_edit_shopping_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shopping-list/shopping-edit/shopping-edit.component */ "./src/app/shopping-list/shopping-edit/shopping-edit.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_dropdown_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/dropdown.directive */ "./src/app/shared/dropdown.directive.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _recipes_recipe_start_recipe_start_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./recipes/recipe-start/recipe-start.component */ "./src/app/recipes/recipe-start/recipe-start.component.ts");
/* harmony import */ var _recipes_recipe_edit_recipe_edit_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./recipes/recipe-edit/recipe-edit.component */ "./src/app/recipes/recipe-edit/recipe-edit.component.ts");

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _recipes_recipes_component__WEBPACK_IMPORTED_MODULE_6__["RecipesComponent"],
                _recipes_recipe_list_recipe_list_component__WEBPACK_IMPORTED_MODULE_7__["RecipeListComponent"],
                _recipes_recipe_detail_recipe_detail_component__WEBPACK_IMPORTED_MODULE_8__["RecipeDetailComponent"],
                _recipes_recipe_list_recipe_item_recipe_item_component__WEBPACK_IMPORTED_MODULE_9__["RecipeItemComponent"],
                _shopping_list_shopping_list_component__WEBPACK_IMPORTED_MODULE_10__["ShoppingListComponent"],
                _shopping_list_shopping_edit_shopping_edit_component__WEBPACK_IMPORTED_MODULE_11__["ShoppingEditComponent"],
                _shared_dropdown_directive__WEBPACK_IMPORTED_MODULE_13__["DropdownDirective"],
                _recipes_recipe_start_recipe_start_component__WEBPACK_IMPORTED_MODULE_15__["RecipeStartComponent"],
                _recipes_recipe_edit_recipe_edit_component__WEBPACK_IMPORTED_MODULE_16__["RecipeEditComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_14__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
            ],
            providers: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"navbar-header\">\r\n      <a routerLink=\"/\" class=\"navbar-brand\">\r\n        Recipe Book\r\n      </a>\r\n    </div>\r\n    <div class=\"navbar-default\">\r\n      <ul class=\"nav navbar-nav\">\r\n        <li routerLinkActive=\"active\">\r\n          <a routerLink=\"/recipes\" >\r\n            Recipes\r\n          </a>\r\n        </li>\r\n        <li routerLinkActive=\"active\">\r\n          <a routerLink=\"/shopping-list\">\r\n            Shopping List\r\n          </a>\r\n        </li>\r\n      </ul>\r\n      <ul class=\"nav navbar-nav navbar-right\">\r\n        <li class=\"dropdown\" appDropdown>\r\n          <a style=\"cursor: pointer;\" class=\"dropdown-toggle\" role=\"button\">\r\n            Manage\r\n            <span class=\"caret\"></span>\r\n          </a>\r\n          <ul class=\"dropdown-menu\">\r\n            <li>\r\n              <a style=\"cursor: pointer;\">\r\n                Save Data\r\n              </a>\r\n            </li>\r\n            <li>\r\n              <a style=\"cursor: pointer;\">\r\n                Fetch Data\r\n              </a>\r\n            </li>\r\n          </ul>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        })
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/recipes/recipe-detail/recipe-detail.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/recipes/recipe-detail/recipe-detail.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY2lwZXMvcmVjaXBlLWRldGFpbC9yZWNpcGUtZGV0YWlsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/recipes/recipe-detail/recipe-detail.component.html":
/*!********************************************************************!*\
  !*** ./src/app/recipes/recipe-detail/recipe-detail.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-5\">\r\n    <img [src]=\"recipe.imagePath\" alt=\"{{ recipe.name }}\" class=\"img-responsive\" />\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-xs-12\">\r\n    <h1>\r\n      {{ recipe.name }}\r\n    </h1>\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-xs-12\">\r\n    <div class=\"btn-group\"\r\n    appDropdown>\r\n      <button type=\"button\"\r\n              class=\"btn btn-primary dropdown-toggle\">\r\n        Manage Recipe\r\n        <span class=\"caret\"></span>\r\n      </button>\r\n      <ul class=\"dropdown-menu\">\r\n        <li>\r\n          <a (click)=\"onAddToShoppingList()\" style=\"cursor: pointer;\">\r\n            Add to Shopping List\r\n          </a>\r\n        </li>\r\n        <li>\r\n          <a\r\n            style=\"cursor: pointer;\"\r\n            (click)=\"onEditRecipe()\">\r\n            Edit Recipe\r\n          </a>\r\n        </li>\r\n        <li>\r\n          <a style=\"cursor: pointer;\">\r\n            Delete Recipe\r\n          </a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-xs-12\">\r\n    {{ recipe.description }}\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-xs-12\">\r\n    <ul class=\"list-group\">\r\n      <li\r\n        class=\"list-group-item\"\r\n        *ngFor=\"let ingredient of recipe.ingredients\">\r\n        {{ ingredient.name }} - {{ ingredient.amount }}\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/recipes/recipe-detail/recipe-detail.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/recipes/recipe-detail/recipe-detail.component.ts ***!
  \******************************************************************/
/*! exports provided: RecipeDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeDetailComponent", function() { return RecipeDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _recipe_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../recipe.service */ "./src/app/recipes/recipe.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var RecipeDetailComponent = /** @class */ (function () {
    function RecipeDetailComponent(recipeService, route, router) {
        this.recipeService = recipeService;
        this.route = route;
        this.router = router;
    }
    RecipeDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.id = +params['id'];
            _this.recipe = _this.recipeService.getRecipe(_this.id);
        });
    };
    RecipeDetailComponent.prototype.onAddToShoppingList = function () {
        this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
    };
    RecipeDetailComponent.prototype.onEditRecipe = function () {
        this.router.navigate(['edit'], { relativeTo: this.route });
        //this.router.navigate(['../', this.id, 'edit']);
    };
    RecipeDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-recipe-detail',
            template: __webpack_require__(/*! ./recipe-detail.component.html */ "./src/app/recipes/recipe-detail/recipe-detail.component.html"),
            styles: [__webpack_require__(/*! ./recipe-detail.component.css */ "./src/app/recipes/recipe-detail/recipe-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_recipe_service__WEBPACK_IMPORTED_MODULE_2__["RecipeService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RecipeDetailComponent);
    return RecipeDetailComponent;
}());



/***/ }),

/***/ "./src/app/recipes/recipe-edit/recipe-edit.component.css":
/*!***************************************************************!*\
  !*** ./src/app/recipes/recipe-edit/recipe-edit.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY2lwZXMvcmVjaXBlLWVkaXQvcmVjaXBlLWVkaXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/recipes/recipe-edit/recipe-edit.component.html":
/*!****************************************************************!*\
  !*** ./src/app/recipes/recipe-edit/recipe-edit.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  recipe-edit works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/recipes/recipe-edit/recipe-edit.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/recipes/recipe-edit/recipe-edit.component.ts ***!
  \**************************************************************/
/*! exports provided: RecipeEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeEditComponent", function() { return RecipeEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var RecipeEditComponent = /** @class */ (function () {
    function RecipeEditComponent(route) {
        this.route = route;
        this.editMode = false;
    }
    RecipeEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.id = +params['id'];
            // if param id is defined, we are in edit mode
            // if undefined, it would be new mode
            _this.editMode = params['id'] != null;
        });
    };
    RecipeEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-recipe-edit',
            template: __webpack_require__(/*! ./recipe-edit.component.html */ "./src/app/recipes/recipe-edit/recipe-edit.component.html"),
            styles: [__webpack_require__(/*! ./recipe-edit.component.css */ "./src/app/recipes/recipe-edit/recipe-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], RecipeEditComponent);
    return RecipeEditComponent;
}());



/***/ }),

/***/ "./src/app/recipes/recipe-list/recipe-item/recipe-item.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/recipes/recipe-list/recipe-item/recipe-item.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY2lwZXMvcmVjaXBlLWxpc3QvcmVjaXBlLWl0ZW0vcmVjaXBlLWl0ZW0uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/recipes/recipe-list/recipe-item/recipe-item.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/recipes/recipe-list/recipe-item/recipe-item.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a  style=\"cursor: pointer;\"\r\n    [routerLink]=\"[index]\"\r\n    routerLinkActive=\"active\"\r\n    class=\"list-group-item clearfix\">\r\n  <div class=\"pull-left\">\r\n    <h4 class=\"list-group-item-heading\">\r\n      {{ recipe.name }}\r\n    </h4>\r\n    <p class=\"list-group-item-text\">\r\n      {{ recipe.description }}\r\n    </p>\r\n  </div>\r\n  <span class=\"pull-right\">\r\n        <img src=\"{{ recipe.imagePath }}\"\r\n             alt=\"{{ recipe.name }}\"\r\n             class=\"img-responsive\"\r\n             style=\"max-height: 50px;\"/>\r\n      </span>\r\n</a>\r\n"

/***/ }),

/***/ "./src/app/recipes/recipe-list/recipe-item/recipe-item.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/recipes/recipe-list/recipe-item/recipe-item.component.ts ***!
  \**************************************************************************/
/*! exports provided: RecipeItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeItemComponent", function() { return RecipeItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _recipe_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../recipe.model */ "./src/app/recipes/recipe.model.ts");



var RecipeItemComponent = /** @class */ (function () {
    function RecipeItemComponent() {
    }
    RecipeItemComponent.prototype.ngOnInit = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _recipe_model__WEBPACK_IMPORTED_MODULE_2__["Recipe"])
    ], RecipeItemComponent.prototype, "recipe", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], RecipeItemComponent.prototype, "index", void 0);
    RecipeItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-recipe-item',
            template: __webpack_require__(/*! ./recipe-item.component.html */ "./src/app/recipes/recipe-list/recipe-item/recipe-item.component.html"),
            styles: [__webpack_require__(/*! ./recipe-item.component.css */ "./src/app/recipes/recipe-list/recipe-item/recipe-item.component.css")]
        })
    ], RecipeItemComponent);
    return RecipeItemComponent;
}());



/***/ }),

/***/ "./src/app/recipes/recipe-list/recipe-list.component.css":
/*!***************************************************************!*\
  !*** ./src/app/recipes/recipe-list/recipe-list.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY2lwZXMvcmVjaXBlLWxpc3QvcmVjaXBlLWxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/recipes/recipe-list/recipe-list.component.html":
/*!****************************************************************!*\
  !*** ./src/app/recipes/recipe-list/recipe-list.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-xs-12\">\r\n    <button\r\n      class=\"btn btn-success\"\r\n      (click)=\"onNewRecipe()\">\r\n      New Recipe\r\n    </button>\r\n  </div>\r\n</div>\r\n<hr />\r\n<div class=\"row\">\r\n  <div class=\"col-xs-12\">\r\n    <app-recipe-item\r\n      *ngFor=\"let recipeElement of recipes; let i = index\"\r\n      [recipe]=\"recipeElement\"\r\n      [index]=\"i\"></app-recipe-item>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/recipes/recipe-list/recipe-list.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/recipes/recipe-list/recipe-list.component.ts ***!
  \**************************************************************/
/*! exports provided: RecipeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeListComponent", function() { return RecipeListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _recipe_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../recipe.service */ "./src/app/recipes/recipe.service.ts");




var RecipeListComponent = /** @class */ (function () {
    function RecipeListComponent(recipeService, router, route) {
        this.recipeService = recipeService;
        this.router = router;
        this.route = route;
    }
    RecipeListComponent.prototype.ngOnInit = function () {
        this.recipes = this.recipeService.getRecipes();
    };
    RecipeListComponent.prototype.onNewRecipe = function () {
        this.router.navigate(['new'], { relativeTo: this.route });
    };
    RecipeListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-recipe-list',
            template: __webpack_require__(/*! ./recipe-list.component.html */ "./src/app/recipes/recipe-list/recipe-list.component.html"),
            styles: [__webpack_require__(/*! ./recipe-list.component.css */ "./src/app/recipes/recipe-list/recipe-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_recipe_service__WEBPACK_IMPORTED_MODULE_3__["RecipeService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], RecipeListComponent);
    return RecipeListComponent;
}());



/***/ }),

/***/ "./src/app/recipes/recipe-start/recipe-start.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/recipes/recipe-start/recipe-start.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY2lwZXMvcmVjaXBlLXN0YXJ0L3JlY2lwZS1zdGFydC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/recipes/recipe-start/recipe-start.component.html":
/*!******************************************************************!*\
  !*** ./src/app/recipes/recipe-start/recipe-start.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Please select a Recipe</h3>\r\n"

/***/ }),

/***/ "./src/app/recipes/recipe-start/recipe-start.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/recipes/recipe-start/recipe-start.component.ts ***!
  \****************************************************************/
/*! exports provided: RecipeStartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeStartComponent", function() { return RecipeStartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RecipeStartComponent = /** @class */ (function () {
    function RecipeStartComponent() {
    }
    RecipeStartComponent.prototype.ngOnInit = function () { };
    RecipeStartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-recipe-start',
            template: __webpack_require__(/*! ./recipe-start.component.html */ "./src/app/recipes/recipe-start/recipe-start.component.html"),
            styles: [__webpack_require__(/*! ./recipe-start.component.css */ "./src/app/recipes/recipe-start/recipe-start.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RecipeStartComponent);
    return RecipeStartComponent;
}());



/***/ }),

/***/ "./src/app/recipes/recipe.model.ts":
/*!*****************************************!*\
  !*** ./src/app/recipes/recipe.model.ts ***!
  \*****************************************/
/*! exports provided: Recipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Recipe", function() { return Recipe; });
var Recipe = /** @class */ (function () {
    function Recipe(name, desc, imagePath, ingredients) {
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
        this.ingredients = ingredients;
    }
    return Recipe;
}());



/***/ }),

/***/ "./src/app/recipes/recipe.service.ts":
/*!*******************************************!*\
  !*** ./src/app/recipes/recipe.service.ts ***!
  \*******************************************/
/*! exports provided: RecipeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeService", function() { return RecipeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _recipe_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recipe.model */ "./src/app/recipes/recipe.model.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_ingredient_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/ingredient.model */ "./src/app/shared/ingredient.model.ts");
/* harmony import */ var _shopping_list_shopping_list_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shopping-list/shopping-list.service */ "./src/app/shopping-list/shopping-list.service.ts");





var RecipeService = /** @class */ (function () {
    function RecipeService(shoppingListService) {
        this.shoppingListService = shoppingListService;
        // recipes list for application
        this.recipes = [
            new _recipe_model__WEBPACK_IMPORTED_MODULE_1__["Recipe"]('Fried Rice', "It's rice, but fried.", 'https://www.jessicagavin.com/wp-content/uploads/2018/09/fried-rice-8-1200.jpg', [
                new _shared_ingredient_model__WEBPACK_IMPORTED_MODULE_3__["Ingredient"]('Cup of Rice', 1),
                new _shared_ingredient_model__WEBPACK_IMPORTED_MODULE_3__["Ingredient"]('broccoli', 6),
                new _shared_ingredient_model__WEBPACK_IMPORTED_MODULE_3__["Ingredient"]('egg', 2)
            ]),
            // test recipe
            new _recipe_model__WEBPACK_IMPORTED_MODULE_1__["Recipe"]('Grilled Cheese', "It's cheese, but grilled.", 'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/0b87fc075ff04cd29ee4f739c7406ffe/finalFB.jpg', [
                new _shared_ingredient_model__WEBPACK_IMPORTED_MODULE_3__["Ingredient"]('Slice of Bread', 2),
                new _shared_ingredient_model__WEBPACK_IMPORTED_MODULE_3__["Ingredient"]('Slice of Cheddar', 2)
            ])
        ];
    }
    // return deep copy of recipe array
    RecipeService.prototype.getRecipes = function () {
        return this.recipes.slice();
    };
    // returns recipe at given index
    RecipeService.prototype.getRecipe = function (index) {
        return this.recipes[index];
    };
    RecipeService.prototype.addIngredientsToShoppingList = function (ingredients) {
        this.shoppingListService.addIngredients(ingredients);
    };
    RecipeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shopping_list_shopping_list_service__WEBPACK_IMPORTED_MODULE_4__["ShoppingListService"]])
    ], RecipeService);
    return RecipeService;
}());



/***/ }),

/***/ "./src/app/recipes/recipes.component.css":
/*!***********************************************!*\
  !*** ./src/app/recipes/recipes.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY2lwZXMvcmVjaXBlcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/recipes/recipes.component.html":
/*!************************************************!*\
  !*** ./src/app/recipes/recipes.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-5\">\r\n    <app-recipe-list></app-recipe-list>\r\n  </div>\r\n  <div class=\"col-md-7\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/recipes/recipes.component.ts":
/*!**********************************************!*\
  !*** ./src/app/recipes/recipes.component.ts ***!
  \**********************************************/
/*! exports provided: RecipesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipesComponent", function() { return RecipesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _recipe_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recipe.service */ "./src/app/recipes/recipe.service.ts");



var RecipesComponent = /** @class */ (function () {
    function RecipesComponent() {
    }
    RecipesComponent.prototype.ngOnInit = function () { };
    RecipesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-recipes',
            template: __webpack_require__(/*! ./recipes.component.html */ "./src/app/recipes/recipes.component.html"),
            providers: [_recipe_service__WEBPACK_IMPORTED_MODULE_2__["RecipeService"]],
            styles: [__webpack_require__(/*! ./recipes.component.css */ "./src/app/recipes/recipes.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RecipesComponent);
    return RecipesComponent;
}());



/***/ }),

/***/ "./src/app/shared/dropdown.directive.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/dropdown.directive.ts ***!
  \**********************************************/
/*! exports provided: DropdownDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownDirective", function() { return DropdownDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DropdownDirective = /** @class */ (function () {
    function DropdownDirective() {
        this.isOpen = false;
    }
    DropdownDirective.prototype.toggleOpen = function () {
        this.isOpen = !this.isOpen;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.open'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DropdownDirective.prototype, "isOpen", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], DropdownDirective.prototype, "toggleOpen", null);
    DropdownDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appDropdown]'
        })
    ], DropdownDirective);
    return DropdownDirective;
}());



/***/ }),

/***/ "./src/app/shared/ingredient.model.ts":
/*!********************************************!*\
  !*** ./src/app/shared/ingredient.model.ts ***!
  \********************************************/
/*! exports provided: Ingredient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ingredient", function() { return Ingredient; });
var Ingredient = /** @class */ (function () {
    /*  This is the long way
    public name: string;
    public amount: number;
  
    constructor(name: string, amount: number) {
      this.name = name;
      this.amount = amount;
    }
    */
    // this is a short way
    function Ingredient(name, amount) {
        this.name = name;
        this.amount = amount;
    }
    return Ingredient;
}());



/***/ }),

/***/ "./src/app/shopping-list/shopping-edit/shopping-edit.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/shopping-list/shopping-edit/shopping-edit.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nob3BwaW5nLWxpc3Qvc2hvcHBpbmctZWRpdC9zaG9wcGluZy1lZGl0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/shopping-list/shopping-edit/shopping-edit.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/shopping-list/shopping-edit/shopping-edit.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-xs-12\">\r\n    <form (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-5 form-group\">\r\n          <label for=\"name\">Name</label>\r\n          <input type=\"text\"\r\n                 id=\"name\"\r\n                 class=\"form-control\"\r\n                 name=\"name\"\r\n                 ngModel\r\n                 required/>\r\n        </div>\r\n        <div class=\"col-sm-2 form-group\">\r\n          <label for=\"amount\">Amount</label>\r\n          <input type=\"number\"\r\n                 id=\"amount\"\r\n                 class=\"form-control\"\r\n                 name=\"amount\"\r\n                 ngModel\r\n                 required\r\n                 pattern=\"^[1-9]+[0-9]*$\"/>\r\n        </div>\r\n       </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-xs-12\">\r\n            <button class=\"btn btn-success\"\r\n                    type=\"submit\"\r\n                    [disabled]=\"!f.valid\">\r\n              {{ editMode ? 'Update' : 'Add' }}\r\n            </button>\r\n            <button class=\"btn btn-danger\"\r\n                    type=\"button\">\r\n              Delete\r\n            </button>\r\n            <button class=\"btn btn-primary\"\r\n                    type=\"button\">\r\n              Clear\r\n            </button>\r\n          </div>\r\n        </div>\r\n     </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/shopping-list/shopping-edit/shopping-edit.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/shopping-list/shopping-edit/shopping-edit.component.ts ***!
  \************************************************************************/
/*! exports provided: ShoppingEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingEditComponent", function() { return ShoppingEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_ingredient_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/ingredient.model */ "./src/app/shared/ingredient.model.ts");
/* harmony import */ var _shopping_list_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shopping-list.service */ "./src/app/shopping-list/shopping-list.service.ts");





var ShoppingEditComponent = /** @class */ (function () {
    function ShoppingEditComponent(shoppingListService) {
        this.shoppingListService = shoppingListService;
        this.editMode = false;
    }
    ShoppingEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.shoppingListService.startedEditing
            .subscribe(function (ingredient) {
            _this.editedItem = ingredient;
            _this.editMode = true;
            _this.shoppingListForm.setValue({
                name: _this.editedItem.name,
                amount: _this.editedItem.amount
            });
        });
    };
    ShoppingEditComponent.prototype.onSubmit = function (form) {
        var value = form.value;
        var newIngredient = new _shared_ingredient_model__WEBPACK_IMPORTED_MODULE_3__["Ingredient"](value.name, value.amount);
        if (this.editMode) {
            this.shoppingListService.updateIngredient(this.editedItem, newIngredient);
        }
        else {
            this.shoppingListService.addIngredient(newIngredient);
        }
        this.editMode = false;
        form.reset();
    };
    ShoppingEditComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], ShoppingEditComponent.prototype, "shoppingListForm", void 0);
    ShoppingEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-shopping-edit',
            template: __webpack_require__(/*! ./shopping-edit.component.html */ "./src/app/shopping-list/shopping-edit/shopping-edit.component.html"),
            styles: [__webpack_require__(/*! ./shopping-edit.component.css */ "./src/app/shopping-list/shopping-edit/shopping-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shopping_list_service__WEBPACK_IMPORTED_MODULE_4__["ShoppingListService"]])
    ], ShoppingEditComponent);
    return ShoppingEditComponent;
}());



/***/ }),

/***/ "./src/app/shopping-list/shopping-list.component.css":
/*!***********************************************************!*\
  !*** ./src/app/shopping-list/shopping-list.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nob3BwaW5nLWxpc3Qvc2hvcHBpbmctbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/shopping-list/shopping-list.component.html":
/*!************************************************************!*\
  !*** ./src/app/shopping-list/shopping-list.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-xs-10\">\r\n    <app-shopping-edit></app-shopping-edit>\r\n    <hr />\r\n    <ul class=\"list-group\">\r\n      <a class=\"list-group-item\"\r\n         style=\"cursor: pointer\"\r\n         *ngFor=\"let ingredient of ingredients;\"\r\n         (click)=\"onEditItem(ingredient)\">\r\n        {{ ingredient.name }} ({{ingredient.amount }})\r\n      </a>\r\n    </ul>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/shopping-list/shopping-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/shopping-list/shopping-list.component.ts ***!
  \**********************************************************/
/*! exports provided: ShoppingListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingListComponent", function() { return ShoppingListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shopping_list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shopping-list.service */ "./src/app/shopping-list/shopping-list.service.ts");



var ShoppingListComponent = /** @class */ (function () {
    function ShoppingListComponent(shoppingListService) {
        this.shoppingListService = shoppingListService;
    }
    ShoppingListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ingredients = this.shoppingListService.getIngredients();
        this.subscription = this.shoppingListService.ingredientsChanged
            .subscribe(function (ingredients) {
            _this.ingredients = ingredients;
        });
    };
    ShoppingListComponent.prototype.onEditItem = function (ingredient) {
        this.shoppingListService.startedEditing.next(ingredient);
    };
    ShoppingListComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    ShoppingListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-shopping-list',
            template: __webpack_require__(/*! ./shopping-list.component.html */ "./src/app/shopping-list/shopping-list.component.html"),
            styles: [__webpack_require__(/*! ./shopping-list.component.css */ "./src/app/shopping-list/shopping-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shopping_list_service__WEBPACK_IMPORTED_MODULE_2__["ShoppingListService"]])
    ], ShoppingListComponent);
    return ShoppingListComponent;
}());



/***/ }),

/***/ "./src/app/shopping-list/shopping-list.service.ts":
/*!********************************************************!*\
  !*** ./src/app/shopping-list/shopping-list.service.ts ***!
  \********************************************************/
/*! exports provided: ShoppingListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingListService", function() { return ShoppingListService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_ingredient_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/ingredient.model */ "./src/app/shared/ingredient.model.ts");
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/Subject */ "./node_modules/rxjs/internal/Subject.js");
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_3__);




var ShoppingListService = /** @class */ (function () {
    function ShoppingListService() {
        this.ingredientsChanged = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.startedEditing = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        // shopping list made up of ingredients
        this.ingredients = [
            new _shared_ingredient_model__WEBPACK_IMPORTED_MODULE_2__["Ingredient"]('Apples', 5),
            new _shared_ingredient_model__WEBPACK_IMPORTED_MODULE_2__["Ingredient"]('Tomatoes', 10)
        ];
    }
    // return deep copy of shopping list list
    ShoppingListService.prototype.getIngredients = function () {
        return this.ingredients.slice();
    };
    // return shallow of ingredient at given index
    ShoppingListService.prototype.getIngredient = function (index) {
        return this.ingredients[index];
    };
    // adds ingredient to list and emits a deep copy
    ShoppingListService.prototype.addIngredient = function (ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    };
    // adds multiple ingredients (from recipe) to list and emits a deep copy
    ShoppingListService.prototype.addIngredients = function (ingredients) {
        var _a;
        (_a = this.ingredients).push.apply(_a, ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());
    };
    // updates ingredient in shopping list with edited fields
    ShoppingListService.prototype.updateIngredient = function (oldIngredient, newIngredient) {
        oldIngredient.amount = newIngredient.amount;
        oldIngredient.name = newIngredient.name;
        this.ingredientsChanged.next(this.ingredients.slice());
    };
    ShoppingListService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
    ], ShoppingListService);
    return ShoppingListService;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Matt\source\repos\foodApp\foodApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map