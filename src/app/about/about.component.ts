import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  programador = 'Katia Romanova';
  version = "0.0.1";
  date= '02/09/2021';

  constructor() { }

  ngOnInit(): void {
  }

}
