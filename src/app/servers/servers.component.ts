import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // either or template/url below:
  templateUrl: './servers.component.html',
  // adding html codes directly as template
  // template: '<app-server></app-server><app-server></app-server>'

  // you can have multiple styles
  styleUrls: ['./servers.component.css']

})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
