import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';
import { EmployeeViewProfileComponent } from './employee-view-profile/employee-view-profile.component';
import { AppComponent } from './app.component';
import { DataService } from './services/data-service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { EmployeeComponent } from './employee/employee.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { AddProfileComponent } from './add-profile/add-profile.component';
import { VideoGalleryComponent } from './video/video.component';
import { PostComponent } from './post/post.component';
import { ImageGalleryComponent } from './image/image.component';
import { TransactionComponent } from './transaction/transaction.component';
import { AccountsComponent } from './accounts/accounts.component';
import { LoginComponent } from './login/login.component';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { HttpService } from './services/http.service';
import { DialogPopupComponent } from './components/dialog/dialog-popup.component';
import { SafePipe } from './SafePipe';
import { ImageUploadModule } from 'angular2-image-upload';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FileUploadModule } from 'ng2-file-upload';
import { DataTableModule } from 'primeng/primeng';

@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        UserProfileComponent,
        AddProfileComponent,
        VideoGalleryComponent,
        PostComponent,
        ImageGalleryComponent,
        TransactionComponent,
        AccountsComponent,
        LoginComponent,
        ViewProfileComponent,
        EmployeeComponent,
        EmployeeProfileComponent,
        EmployeeViewProfileComponent,
        DialogPopupComponent,
        SafePipe
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        HttpClientModule,
        ComponentsModule,
        RouterModule,
        AppRoutingModule,
        ImageUploadModule.forRoot(),
        AngularFontAwesomeModule,
        Ng2SearchPipeModule,
        DataTableModule,
        FileUploadModule,
        NgbModule.forRoot()
    ],
    providers: [
        ImageUploadModule, 
        HttpService, 
        DataService
    ],
    entryComponents: [
        DialogPopupComponent,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
