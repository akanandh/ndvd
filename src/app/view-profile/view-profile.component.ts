import { Component, OnInit } from '@angular/core';
import {
    HttpService
} from '../services/http.service';
import {
  Router
} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
declare var $:any;
@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css'],
  providers: [HttpService]
})
export class ViewProfileComponent implements OnInit {
payableReceivable;
receivableO;
memNonMem;
payableO;
payRec=2;
rec=3;
pay=3;
transactionDate;
ransactionCode;
payReceive;
receivable;
surveyNo;
tenantName;
rentPeriod;
amount;
member;
name;
donationType;
donationAmount;
type;
dailyAmount;
payable;
vendorCode;
purchaseDate;
item;
purchaseAmount;
description;
hireVendorCode;
noOfDays;
hireItem;
hireAmount;
hireDescription;
giftDate;
to;
giftItem;
giftAmount;
giftDescription;
accountNumber;
panNo;
aadharNo;
ifscCode;
user_id;
//profile;
//details;
profile={name:'Janani Anbazhagan',dob:'25-01-1995',gender:'Female',src:'',mariatalStatus:'Unmarried',address:'47,North Street,A.Thirumalapuram',postalCode:'627113',country:'India',phoneNo:'9487347678',emailId:'janani.apasa@gmail.com',course:'B.E/EEE',year:'2012-2016',college:'Mepco Schlenk Engineering College',designation:'Engineer',salaried:'salaried',company:'Infoview'};
details=[{name:'P.Anbazhagan',relation:'Father',date:'28-10-1964',occupation:'Handloom Department Manager'},{name:'A.Parasakthi',relation:'Mother',date:'25-05-1969',occupation:'Gov. School Teacher'}]
  constructor(public _router:Router,private http: HttpService,public route:ActivatedRoute) { }

  ngOnInit() {
	  if(localStorage.getItem('nvd-user')!==undefined && localStorage.getItem('nvd-user')!==null){
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
       this.user_id = params['id']; 
	   
	   if(params['id']!='' && params['id']!=undefined){
	   var obj={};
	   this.user_id=params['id'];
	   obj['user_id']=this.user_id;
			 this.http.getUserDetails(obj).subscribe(function(data){
				 data=data.data;
				 console.log(data)
				this.profile={name:data.card[0].name,dob:data.personal[0].dob,src:'http://localhost:4000/'+data.card[0].path,gender:data.card[0].sex,mariatalStatus:data.personal[0].marital_status,address:data.personal[0].address,postalCode:data.personal[0].postal_code,country:data.personal[0].country,phoneNo:data.personal[0].phone,emailId:data.personal[0].email,course:data.educational[0].degree,year:data.educational[0].year,college:data.educational[0].institution,designation:data.occupational[0].designation,salaried:data.occupational[0].type,company:data.occupational[0].company};
				this.details=[];
				for(let i=0;i<data.family.length;i++){
					var mapVal={};
					mapVal['name']=data.family[i].name;
					mapVal['relation']=data.family[i].relation;
					mapVal['dob']=data.family[i].dob;
					mapVal['occupation']=data.family[i].working_status;
					this.details.push(mapVal);
//details=[{name:'P.Anbazhagan',relation:'Father',date:'28-10-1964',occupation:'Handloom Department Manager'},{name:'A.Parasakthi',relation:'Mother',date:'25-05-1969',occupation:'Gov. School Teacher'}]
				}
			 }.bind(this))
	   }
	   }.bind(this))
			
		}else{
		 this._router.navigate(['login'])
		location.reload();
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
		
	}
	
	onChange($event){
		
		if($event==='Account Payable'){
			this.payRec=0;
			setTimeout(function() {
                $('.receivable').selectpicker('refresh');
				//$('.employment').selectpicker('val',this.type);
            }.bind(this), 150);
			console.log($event)
		}else{
			
			this.payRec=1;
			setTimeout(function() {
                $('.payable').selectpicker('refresh');
				//$('.employment').selectpicker('val',this.type);
            }.bind(this), 150);
			
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
		if($event==='Hire'){
			this.pay=0;
		}else if($event==='Purcahse'){
			this.pay=1;
		}
		else{
			this.pay=2;
		}
	}

}
