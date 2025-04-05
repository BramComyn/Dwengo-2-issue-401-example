import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
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
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}

  private get correctUserType() {
    return this.userType === this.authenticationService.retrieveUserType();
  }

  logout() {
    this.authenticationService.logout();
  }
  
  ngOnInit() {
    if (!this.correctUserType) {
      this.router.navigateByUrl('error');
    }
  }
}
