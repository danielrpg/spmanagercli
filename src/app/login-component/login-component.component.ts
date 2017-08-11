import { Component, OnInit } from '@angular/core';
import { User } from '../utils/User';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  user = new User();

  constructor() { }

  onSubmit(): void{

  }

  ngOnInit() {
  }

}
