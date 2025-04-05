import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { TeacherWrapperComponent } from './components/teacher-wrapper/teacher-wrapper.component';
import { StudentWrapperComponent } from './components/student-wrapper/student-wrapper.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'teacher', component: TeacherWrapperComponent },
    { path: 'student', component: StudentWrapperComponent },
    { path: 'error', component: ErrorComponent },
    { path: '**', redirectTo: 'error' }
];
