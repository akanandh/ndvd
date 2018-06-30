import { Component, OnInit } from '@angular/core';
import {
  Router
} from '@angular/router';

import {
    HttpService
} from '../services/http.service'
import { DataService } from "../services/data-service";
@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.css'],
  providers: [HttpService]
})
export class EmployeeProfileComponent implements OnInit {
//@Input() term:any;
items1;
message;
search;
domain= "http://localhost:4000/";

  constructor(public _router:Router,private http: HttpService,public data:DataService) { }

  ngOnInit() {
	  if(localStorage.getItem('nvd-user')!==undefined && localStorage.getItem('nvd-user')!==null && localStorage.getItem('nvd-user')==='admin'){
	var data=[];
	this.search='';
	  this.data.currentMessage.subscribe(message => {console.log(message);this.search = message})
	  var value={type:'employee'};
	this.http.fetchCards(value).subscribe(function(data){
	console.log(data)
		this.items1= data;
		//this.term=this.navBar.term;
		
	}.bind(this))
	  }else if(localStorage.getItem('nvd-user')===null || localStorage.getItem('nvd-user')===undefined){
			this._router.navigate(['login'])
		//location.reload();
		}else{
			this._router.navigate(['user-profile']);
		}
  }
  
changeEvent(event){
//	this.term=event;
	console.log(event)
}
  
navigateEdit(event,id){
//console.log(event,id)
	this._router.navigate(['employee',id])
}

navigateView(event,id){
console.log(event,id)
	this._router.navigate(['employee-view-profile',id])
}

delete(event,id){
	var data=[];
	data.push(id);
	this.http.deleteCard(data).subscribe(function(data){
		var value={};
		value['type']='employee';
		this.http.fetchCards(value).subscribe(function(data){
			this.items1= data;
		}.bind(this));
	console.log(data)
		//this.items1= data;
	
	}.bind(this))
}
}

