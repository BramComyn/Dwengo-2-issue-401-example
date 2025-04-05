import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor() {}

  login(usertype: 'student' | 'teacher') {
    localStorage.setItem('userType', usertype);
  }

  retrieveUserType(): 'student' | 'teacher' | null {
    const userType = localStorage.getItem('userType');
    return userType === 'student' || userType === 'teacher' ? (userType as 'student' | 'teacher') : null;
  }

  logout() {
    localStorage.removeItem('userType');
  }
}
