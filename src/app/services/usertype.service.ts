import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class UsertypeService {
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}

  public checkUserType(userType: 'student' | 'teacher') {
    if (userType !== this.authenticationService.retrieveUserType()) {
      this.router.navigateByUrl('error');
    }
  }
}
