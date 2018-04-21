import { Component, OnInit } from '@angular/core';
import {
  Router
} from '@angular/router';

import {
    HttpService
} from '../services/http.service'
import { DataService } from "../services/data-service";
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
  providers: [HttpService]
})
export class UserProfileComponent implements OnInit {
//@Input() term:any;
items1;
message;
search;
domain= "http://localhost:4000/";

  constructor(public _router:Router,private http: HttpService,public data:DataService) { }

  ngOnInit() {
	  if(localStorage.getItem('nvd-user')!==undefined && localStorage.getItem('nvd-user')!==null){
	var data=[];
	this.search='';
	  this.data.currentMessage.subscribe(message => {console.log(message);this.search = message})
	  	  var value={type:'user'};
	this.http.fetchCards(value).subscribe(function(data){
	console.log(data)
		this.items1= data;
		//this.term=this.navBar.term;
		
	}.bind(this))
	}else{
		 this._router.navigate(['login'])
		location.reload();
	 }
  }
  
changeEvent(event){
//	this.term=event;
	console.log(event)
}
  
navigateEdit(event,id){
console.log(event,id)
	this._router.navigate(['add-profile',id])
}

navigateView(event,id){
console.log(event,id)
	this._router.navigate(['view-profile',id])
}

delete(event,id){
	var data=[];
	data.push(id);
	this.http.deleteCard(data).subscribe(function(data){
		data=[];
		var value={type:'user'};
		this.http.fetchCards(value).subscribe(function(data){
			this.items1= data;
		}.bind(this));
	console.log(data)
		//this.items1= data;
	
	}.bind(this))
}
}

