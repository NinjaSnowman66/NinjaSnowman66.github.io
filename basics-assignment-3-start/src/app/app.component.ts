import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showText = false;
  logArray =  [];
 // numButtonPresses = 0;

  //I wonder if there's a better way to do this besides writing it in short form...
  toggleText () {
    // if (this.hideText === true){
    //   this.hideText = false;    
    // } else { this.hideText = true;}
    this.showText = !this.showText;

    // this.logArray.push (this.logArray.length + 1);
    this.logArray.push (new Date());
  }



}
