import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { UsertypeService } from '../../services/usertype.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-wrapper',
  imports: [RouterLink, MatButtonModule],
  templateUrl: './wrapper.component.html',
  styleUrl: './wrapper.component.less'
})
export class WrapperComponent implements OnInit {
  @Input({ required: true, alias: 'user-type' }) userType!: 'student' | 'teacher';

  constructor(
    private authenticationService: AuthenticationService,
    private usertypeService: UsertypeService,
  ) {}

  logout() {
    this.authenticationService.logout();
  }
  
  ngOnInit() {
    this.usertypeService.checkUserType(this.userType);
  }
}
