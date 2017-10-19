import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBK3M6f5R9CSTu7V7P3vc4Ivq-cX7jDHVA',
      authDomain: 'https://ng-recipe-book-feb43.firebaseio.com'
    });
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
