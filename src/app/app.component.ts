import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component
({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    loadedFeature = 'recipe';
    apiValues;

    onNavigate( feature: string ) {
        this.loadedFeature = feature;
    }

    constructor(private _httpService: HttpClient) { }

    ngOnInit() {
        this._httpService.get('/api/values').subscribe(values => {
            this.apiValues = values;
        });
    }
}
