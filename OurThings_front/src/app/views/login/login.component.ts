import { HtmlParser } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  bg2:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  type_effect(){
    this.bg2 = true;
  }

  type_effect2(){
    this.bg2 = false;
  }









}
