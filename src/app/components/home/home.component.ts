import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-home',
  imports: [RouterLink, MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.less'
})
export class HomeComponent {

  constructor(
    private authenticationService: AuthenticationService,
  ) {}
  
  loginAsTeacher() {
    this.authenticationService.login('teacher');
  }

  loginAsStudent() {
    this.authenticationService.login('student');
  }
}
