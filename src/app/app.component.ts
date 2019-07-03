import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from './recipes/recipe.model';
import { Ingredient } from './shared/ingredient.model';

@Component
    ({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
export class AppComponent implements OnInit {
    loadedFeature = 'recipe';
    apiValues;

    constructor(private _httpService: HttpClient) { }

    ngOnInit() { }

    onNavigate( feature: string ) {
        this.loadedFeature = feature;
    }
}
