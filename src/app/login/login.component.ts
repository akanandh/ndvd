import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy, PopStateEvent } from '@angular/common';
import 'rxjs/add/operator/filter';
//import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import PerfectScrollbar from 'perfect-scrollbar';
import { DataService } from "../services/data-service";
import {
    HttpService
} from '../services/http.service';
declare const $: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
      providers: [HttpService]
})
export class LoginComponent implements OnInit,AfterViewInit {
    private _router: Subscription;
    private lastPoppedUrl: string;
    private yScrollStack: number[] = [];
	userName='';
	password='';
color='red';
show=true;
//@ViewChild(SidebarComponent) sidebar: SidebarComponent;
 constructor( public location: Location, public router: Router,public data:DataService,public http:HttpService) {}

  ngOnInit() {
	  var a=$('.modal-backdrop')[0];
	  if(a!==undefined){
		  a.remove();
	  }
	  if(localStorage.getItem('nvd-user')!==undefined && localStorage.getItem('nvd-user')!==null){
		  console.log('aaaaaaaaaaaaaaaaaa')
		  this.router.navigate(['user-profile']);
	  }else{
		  console.log('bbbbbbbbbbb')
		  var a=$('.sidebar')[0];
		  var b=$('.navbar')[0];
		  if(a!==undefined){
			  a.style.display='none';
			  b.style.display='none';
		  }
	  }
		  
 //$.material.init();
 /* this.router.events.subscribe((event:any) => {
         //   this.navbar.sidebarClose();
            if (event instanceof NavigationStart) {
               if (event.url != this.lastPoppedUrl)
                   this.yScrollStack.push(window.scrollY);
           } else if (event instanceof NavigationEnd) {
               if (event.url == this.lastPoppedUrl) {
                   this.lastPoppedUrl = undefined;
                   window.scrollTo(0, this.yScrollStack.pop());
               } else
                   window.scrollTo(0, 0);
           }
        });*/
        /*this._router = this.router.events.filter(event => event instanceof NavigationEnd).subscribe((event: NavigationEnd) => {
          //   elemMainPanel.scrollTop = 0;
           //  elemSidebar.scrollTop = 0;
        });
       if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac()) {
           // let ps = new PerfectScrollbar(elemMainPanel);
         //   ps = new PerfectScrollbar(elemSidebar);
        }*/
  }
  
  ngAfterViewInit() {
	  setTimeout(function(){
		   var a=$('.modal-backdrop')[0];
	  if(a!==undefined){
		  a.remove();
	  }
	  },100)
	  
  }
  login(){
	  var dataVal={};
	  dataVal['userId']=this.userName;
	  dataVal['password']=this.password;
	  this.http.loginCheck(dataVal).subscribe(function(data){
		  if(data['data']['type']==='admin'){
			   this.data.loginClick('admin');
			   localStorage.setItem('nvd-user','admin')
			   this.router.navigate(['user-profile']);
			   var a=$('.sidebar')[0];
			   var b=$('.navbar')[0];
		  if(a!==undefined){
			  a.style.display='block';
			  b.style.display='block';
		  }
			  //  localStorage.setItem('nvd-user','employee')
		  }else if(data['data']['type']==='user' || data['data']['type']==='employee'){
			   this.data.loginClick('employee');
                localStorage.setItem('nvd-user','employee')
                localStorage.setItem('id',data.data.id)
				this.router.navigate(['user-profile']);
				var a=$('.sidebar')[0];
				var b=$('.navbar')[0];
		  if(a!==undefined){
			  a.style.display='block';
			  b.style.display='block';
		  }
				// localStorage.setItem('nvd-user','employee')
		  }else{
			  
		  }
		  console.log(data);
	  }.bind(this))
	  
	 
	//  this.router.navigate(['dashboard']);
	 
  }
    isMaps(path){
      /*  var titlee = this.location.prepareExternalUrl(this.location.path());
        titlee = titlee.slice( 1 );
        if(path == titlee){
            return false;
        }
        else {
            return true;
        }*/
    }
    runOnRouteChange(): void {
      if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac()) {
        const elemMainPanel = <HTMLElement>document.querySelector('.main-panel');
        const ps = new PerfectScrollbar(elemMainPanel);
        ps.update();
      }
    }
    isMac(): boolean {
        let bool = false;
        if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
            bool = true;
        }
        return bool;
    }

}




/*import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './login/login.component';

import { DataService } from "./services/data-service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    @ViewChild(NavbarComponent) navbar: NavbarComponent;

    

    ngOnInit() {
       
		 this.data.currentMessage1.subscribe(val => {console.log(val);this.color = val})
        const elemMainPanel = <HTMLElement>document.querySelector('.main-panel');
        const elemSidebar = <HTMLElement>document.querySelector('.sidebar .sidebar-wrapper');

        this.location.subscribe((ev:PopStateEvent) => {
            this.lastPoppedUrl = ev.url;
        });
        
    }
   
}*/
