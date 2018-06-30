import { Component, OnInit } from '@angular/core';
import { DataService } from "../services/data-service";
import {
    HttpService
} from '../services/http.service';
declare var $: any;
import {
  Router
} from '@angular/router';
@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css'],
        providers: [HttpService]
})
export class TransactionComponent implements OnInit {
		color='red';
		accountNumber;
data=[{name:'hggh',email:'gjhh',city:'ghgjhjh'},{name:'hggh',email:'gjhh',city:'ghgjhjh'},{name:'hggh',email:'gjhh',city:'ghgjhjh'}];
cars=[{payable:'defe',year:'35',brand:'wfew',color:'wfrew'},{vin:'defe',year:'35',brand:'wfew',color:'wfrew'},{vin:'defe',year:'35',brand:'wfew',color:'wfrew'}];
  constructor(private _router:Router,public data11:DataService,private http: HttpService) { }
  showNotification(from, align){
      const type = ['','info','success','warning','danger'];

      const color = Math.floor((Math.random() * 4) + 1);

      $.notify({
          icon: "notifications",
          message: "Welcome to <b>Material Dashboard</b> - a beautiful freebie for every web developer."

      },{
          type: type[color],
          timer: 4000,
          placement: {
              from: from,
              align: align
          }
      });
  }
  selected(value){
	  this._router.navigate(['accounts',value.transactionId,'edit']);
	  console.log(value)
  }
    selected1(value){
	  this._router.navigate(['accounts',value.transactionId,'view']);
	  console.log(value)
  }
  ngOnInit() {
	  var data={};
	  if(localStorage.getItem('nvd-user')!==undefined && localStorage.getItem('nvd-user')!==null && localStorage.getItem('nvd-user')==='admin'){
		  this.http.selectAll(data).subscribe(function(data1){
			 this.cars=[];
			 console.log(data1)
			 for(var i=0;i<data1.value.length;i++){
			 var map={};
				 if(data1.value[i].payable===1){
					 map['payable']='payable';
				 }else{
					 map['payable']='receivable';
				 }
				 if(data1.value[i].payable===1 && data1.value[i].hire===0){
					 map['type']='purchase';
				 }else if(data1.value[i].payable===1 && data1.value[i].hire===1){
					 map['type']='hire';
				 }else if(data1.value[i].payable===1 && data1.value[i].hire===2){
					  map['type']='gift';
				 }else if(data1.value[i].payable===0 && data1.value[i].hire===0){
					  map['type']='rent';
				 }else if(data1.value[i].payable===0 && data1.value[i].hire===1){
					  map['type']='donation';
				 }else if(data1.value[i].payable===0 && data1.value[i].hire===2){
					  map['type']='daily';
				 }
				 map['dateOfTransaction']=data1.value[i].transactionDate;
				 map['amount']=data1.value[i].amount;
				// map['type']=data1.value[i].type;
				 map['transactionId']=data1.value[i].transactionId;
				 this.cars.push(map);
				// this.cars['payable']=
			 }
	  this.data11.currentMessage1.subscribe(val => {
		  console.log(val);this.color = val;
	  })
		  }.bind(this))
	  }else if(localStorage.getItem('nvd-user')===null || localStorage.getItem('nvd-user')===undefined){
			this._router.navigate(['login'])
		//location.reload();
		}else{
			this._router.navigate(['dashboard']);
		}
  }

}
