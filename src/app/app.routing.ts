import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AddProfileComponent } from './add-profile/add-profile.component';
import { VideoGalleryComponent } from './video/video.component';
import { PostComponent } from './post/post.component';
import { ImageGalleryComponent } from './image/image.component';
import { TransactionComponent } from './transaction/transaction.component';
import { AccountsComponent } from './accounts/accounts.component';
import { LoginComponent } from './login/login.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';
import { EmployeeViewProfileComponent } from './employee-view-profile/employee-view-profile.component';
const routes: Routes = [
  { path: 'user-profile', component: UserProfileComponent },
  { path: 'add-profile/:id', component: AddProfileComponent },
  { path: 'accounts/:id/:type', component: AccountsComponent },
  { path: 'add-profile', component: AddProfileComponent },
  { path: 'video-gallery', component: VideoGalleryComponent },
  { path: 'post', component: PostComponent },
  { path: 'image-gallery', component: ImageGalleryComponent },
  { path: 'transaction', component: TransactionComponent },
  { path: 'accounts', component: AccountsComponent },
  { path: 'login', component: LoginComponent, children: [{ path: '**', component: LoginComponent },] },
  { path: '**', redirectTo: '' },
  { path: 'home', component: AppComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'view-profile', component: ViewProfileComponent },
  { path: 'view-profile/:id', component: ViewProfileComponent },
  { path: 'employee', component: EmployeeComponent },
  { path: 'employee/:id', component: EmployeeComponent },
  { path: 'employee-profile', component: EmployeeProfileComponent },
  { path: 'employee-view-profile', component: EmployeeViewProfileComponent },
  { path: 'employee-view-profile/:id', component: EmployeeViewProfileComponent }

];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{useHash:true})
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
