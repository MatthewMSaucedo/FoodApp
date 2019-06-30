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

    ngOnInit() {
        this.testEndpoints();
    }

    onNavigate( feature: string ) {
        this.loadedFeature = feature;
    }

    testEndpoints() {
        const testIngredients = [
            {
                name: 'onion',
                amount: 3
            },
            {
                name: 'apple',
                amount: 2
            }
        ];

        const testRecipe = {
            name: 'Test Recipe',
            description: 'A test recipe.',
            imagePath: "",
            ingredients: testIngredients
        };

        this._httpService.get('/api/recipes').subscribe(response => {
            console.log("get test!", response);
        });

        this._httpService.post<Recipe>('/api/recipes', testRecipe ).subscribe(response => {
            console.log("post test!", response);
        });
    }
}
