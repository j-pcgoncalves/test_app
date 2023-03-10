import { Component } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  // selector: '.app-servers',
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'TestServer';
  userName = '';
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2'];
  passwordOn = false;
  buttonClicks = [];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName + '.';
  }

  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  checkIfEmpty() {
    return this.userName.length > 0;
  }

  resetUsername() {
    this.userName = '';
  }

  displayPassword(event: any) {
    this.buttonClicks.push(new Date());
    this.passwordOn = !this.passwordOn;
  }
}
