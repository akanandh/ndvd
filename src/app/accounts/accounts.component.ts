import { Component, OnInit } from '@angular/core';
import {
    HttpService
} from '../services/http.service';
import { DataService } from "../services/data-service";
import {
  Router
} from '@angular/router';
import {
  ActivatedRoute
} from '@angular/router';
declare var $:any;
@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css'],
  providers: [HttpService]
})
export class AccountsComponent implements OnInit {
	color='red';
payableReceivable;
receivableO;
memNonMem;
disable=false;
payableO;
payRec=2;
rec=3;
pay=3;
transactionDate=' ';
transactionCode=' ';
payReceive;
receivable;
surveyNo;
tenantName=' ';
rentPeriod=' ';
amount=0;
member=' ';
name=' ';
donationType=' ';
donationAmount=0;
type=' ';
dailyAmount=0;
payable=' ';
vendorCode=' ';
purchaseDate=' ';
item=' ';
purchaseAmount=0;
description=' ';
hireVendorCode=' ';
noOfDays=0;
hireItem=' ';
hireAmount=0;
hireDescription=' ';
giftDate=' ';
to=' ';
giftItem=' ';
giftAmount=0;
giftDescription='';
accountNumber=' ';
panNo=' ';
aadharNo=' ';
ifscCode=' ';
transactionId;

  constructor(private _router:Router,private http: HttpService,public route:ActivatedRoute,public data11:DataService) { }

  ngOnInit() {
	  if(localStorage.getItem('nvd-user')!==undefined && localStorage.getItem('nvd-user')!==null && localStorage.getItem('nvd-user')==='admin'){
	   this.data11.currentMessage1.subscribe(val => {console.log(val);this.color = val;})
	  this.payableReceivable = [{
				name:'Account Payable'
			},{
                name: 'Account Receivable'
            }];
			
			 this.receivableO = [{
				name:'Rent'
			},{
                name: 'Donation'
            },{
                name: 'Daily Collection'
            }];
			 this.payableO = [{
				name:'Hire'
			},{
                name: 'Purchase'
            },{
                name: 'Gift'
            }];
			 this.memNonMem = [{
				name:'Member'
			},{
                name: 'Non-Member'
            }];
			setTimeout(function() {
                $('.payReceive').selectpicker('refresh');
				//$('.employment').selectpicker('val',this.type);
            }.bind(this), 150);
				this.route.params.subscribe(function(params) {
			this.transactionId=params['id'];
			var typeVal=params['type'];
			if(this.transactionId!==undefined){
				this.http.selectTransaction({transactionId:this.transactionId}).subscribe(function(data){
					this.accountNumber=data.value[0].accountNo;
									
		this.panNo=data.value[0].panNo;
		this.aadharNo=data.value[0].aadharNo;
		this.ifscCode=data.value[0].ifscCode;
		this.transactionDate=data.value[0].transactionDate;
		//this.transactionCode=data.value[0].;
		this.payRec=data.value[0].payable;
		//mapVal['type1']='';
		if(this.payRec===0){
			this.payReceive='Account Receivable';
		//	this.receivable='Account Receivable';
			this.rec=data.value[0].hire;
		if(this.rec===0){
			this.receivable='Rent';
			this.surveyNo=data.value[0].surveyNo;
			this.tenantName=data.value[0].name;
			this.rentPeriod=data.value[0].rentPeriod;
			this.amount=data.value[0].amount;
		}else if(this.rec===1){
			this.receivable='Donation';
			this.member=data.value[0].member;
			this.name=data.value[0].name;
			this.donationType=data.value[0].type;
			this.donationAmount=data.value[0].amount;
		}else{
			this.receivable='Daily Collection';
			this.type=data.value[0].type;
			this.dailyAmount=data.value[0].amount;
		}
		}else{
			this.payReceive='Account Payable';
			//this.payable='Account Payable';
			this.pay=data.value[0].hire;
			if(this.pay===0){
				this.payable='Purchase';
				this.vendorCode=data.value[0].vendorCode;
				this.purchaseDate=data.value[0].purchaseDate;
				this.item=data.value[0].item;
				this.purchaseAmount=data.value[0].amount;
				this.description=data.value[0].description;
				
			}else if(this.pay===1){
				this.payable='Hire';
				this.hireVendorCode=data.value[0].vendorCode;
				this.noOfDays=data.value[0].days;
				this.hireItem=data.value[0].item;
				this.hireAmount=data.value[0].amount;
				this.hireDescription=data.value[0].description;
				
			}else{
				this.payable='Gift';
				this.giftDate=data.value[0].giftGivenDate;
				this.to=data.value[0].toDate;
				this.giftItem=data.value[0].item;
				this.giftAmount=data.value[0].amount;
				this.giftDescription=data.value[0].description;
			}
		}
		if(typeVal==='view'){
			this.disable=true;
		}
		setTimeout(function(){
			
			$('.selectpicker').selectpicker('refresh');
			$('.payable').selectpicker('val',this.payable);
			$('.receivable').selectpicker('val',this.receivable);
			$('.payReceive').selectpicker('val',this.payReceive);
		}.bind(this),150)
					console.log(data)
				}.bind(this))
			}
			
		}.bind(this))
			}else if(localStorage.getItem('nvd-user')===null || localStorage.getItem('nvd-user')===undefined){
			this._router.navigate(['login'])
			//location.reload();
		}else{
			this._router.navigate(['user-profile']);
		}
			
  }
 transactionDateFocus($event){
		console.log($event);
		$event.target.setAttribute('type','date');
	}
	transactionDateBlur($event){
		$event.target.setAttribute('type','text');
	}
	
	
	updateTransaction(){
		var mapVal={};
		mapVal['vendorCode']="";
				mapVal['purchaseDate']="";
				mapVal['item']="";
				mapVal['purchaseAmount']="";
				mapVal['description']="";		
			mapVal['hireVendorCode']="";
				mapVal['noOfDays']="";
				mapVal['hireItem']="";
				mapVal['hireAmount']="";
				mapVal['hireDescription']="";
				mapVal['giftDate']="";
				mapVal['to']="";
				mapVal['giftItem']="";
				mapVal['giftAmount']="";
				mapVal['giftDescription']="";
				mapVal['surveyNo']="";
			mapVal['tenantName']="";
			mapVal['rentPeriod']="";
			mapVal['amount']="";
			mapVal['dailyType']="";
			mapVal['dailyAmount']="";
			mapVal['surveyNo']="";
			mapVal['tenantName']="";
			mapVal['rentPeriod']="";
			mapVal['amount']="";
			mapVal['payRec']=this.payRec;
		
		
		
		
		mapVal['giftGivenDate']=''
		mapVal['accountNumber']=this.accountNumber;
		mapVal['panNo']=this.panNo;
		mapVal['aadharNo']=this.aadharNo;
		mapVal['ifscCode']=this.ifscCode;
		mapVal['transactionDate']=this.transactionDate;
		mapVal['transactionCode']=this.transactionCode;
		mapVal['type']=this.payReceive;
		mapVal['type1']='';
		if(this.payRec===0){
			mapVal['type']=this.receivable;
			mapVal['payRecType']=this.rec;
		if(this.rec===0){
			mapVal['surveyNo']=this.surveyNo;
			mapVal['tenantName']=this.tenantName;
			mapVal['rentPeriod']=this.rentPeriod;
			mapVal['amount']=this.amount;
		}else if(this.rec===1){
			mapVal['member']=this.member;
			mapVal['name']=this.name;
			mapVal['type1']=this.donationType;
			mapVal['amount']=this.donationAmount;
		}else{
			mapVal['type1']=this.type;
			mapVal['amount']=this.dailyAmount;
		}
		}else{
			mapVal['type']=this.payable;
			mapVal['payRecType']=this.pay;
			if(this.pay===0){
				mapVal['vendorCode']=this.vendorCode;
				mapVal['purchaseDate']=this.purchaseDate;
				mapVal['item']=this.item;
				mapVal['amount']=this.purchaseAmount;
				mapVal['description']=this.description;
				
			}else if(this.pay===1){
				mapVal['vendorCode']=this.hireVendorCode;
				mapVal['noOfDays']=this.noOfDays;
				mapVal['item']=this.hireItem;
				mapVal['amount']=this.hireAmount;
				mapVal['description']=this.hireDescription;
				
			}else{
				mapVal['giftGivenDate']=this.giftDate;
				mapVal['to']=this.to;
				mapVal['item']=this.giftItem;
				mapVal['amount']=this.giftAmount;
				mapVal['description']=this.giftDescription;
			}
		}
		
		console.log(mapVal)
		if(this.transactionId===undefined){
			 this.http.insertAccount(mapVal).subscribe(function(data){
			 
		 })
		}else{
			mapVal['transactionId']=this.transactionId;
			 this.http.updateTransaction(mapVal).subscribe(function(data){
			 
		 })
		}
		
		//mapVal['']=this.
	}
	
	onChange($event){
		
		if($event==='Account Payable'){
			this.payRec=1;
			setTimeout(function() {
                $('.payable').selectpicker('refresh');
				//$('.employment').selectpicker('val',this.type);
            }.bind(this), 150);
		}else{
			this.payRec=0;
			setTimeout(function() {
                $('.receivable').selectpicker('refresh');
				//$('.employment').selectpicker('val',this.type);
            }.bind(this), 150);
			console.log($event)
			
			
		}
		console.log($event)
	}
	onRecChange($event){
		if($event==='Rent'){
			this.rec=0;
		}else if($event==='Donation'){
			this.rec=1;
			
			setTimeout(function() {
                $('.member').selectpicker('refresh');
				//$('.employment').selectpicker('val',this.type);
            }.bind(this), 150);
		}
		else{
			this.rec=2;
		}
	}
	
	onPayChange($event){
		if($event==='Purchase'){
			this.pay=0;
		}else if($event==='Hire'){
			this.pay=1;
		}
		else{
			this.pay=2;
		}
	}

}
