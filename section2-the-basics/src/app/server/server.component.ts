import { Component } from "@angular/core";

//This is a decorator apparently
@Component({
    /*html tag I guess*/
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
      .online {
          color: white;
      }
    `]
})
export class ServerComponent{
    serverId: number = 10;
    serverStatus: string = 'offline';

    constructor() {
        //you know I probably wouldn't code like this except if it's a really simple or by itself kind of thing
        //but yeah this is shorthand for if else I guess and I don't have this memorized or anything.
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    getServerStatus(){
        return this.serverStatus;
    }

    getColor(){
        return this.serverStatus === 'online' ? 'green' : 'red';
    }
}