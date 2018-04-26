import { Component, ChangeDetectorRef } from '@angular/core';
import { GeneralApiService } from './general-api.service';
import { ChangeDetectionStrategy } from '@angular/compiler/src/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private generalService: GeneralApiService) {
  }

 

  public getPostsFromUrl() {
    this.generalService.getPosts().subscribe(res => {
      console.log("response from jason website", res);
    }, err => {
      console.log("error to api request: ",err);
    })
  }

}
