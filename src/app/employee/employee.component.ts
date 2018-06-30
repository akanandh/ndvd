import { Component, OnInit } from '@angular/core';
import {
  Router
} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {
    HttpService
} from '../services/http.service';
import { fileurl } from '../services/http.service';

import { DataService } from "../services/data-service";
declare var $:any;
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
first_name;
others=0;
colors='btn-danger';
    last_name;
    user_age;
    dob;
    gender;
	//familyData=[];
	comments;
    mariatal_status;
    address;
    city;
    country;
    postal_code;
    phone_no;
    mail_id;
    degree;
	familyData=[];
    year;
    college;
    type;
	useryear;
	userdegree;
	usercollege;
    company;
    designation;
    countries
    data;
    val;
	sub;
	user_id=''
    userMarried;
    userGender;
    employment;
    totalRecord = {};
	uploadedImage=[];
	color='red';
panNo;
adharNo;
accountNo;
ifscCode;
dateJoining;
department;
monthlySalary;
transactionId;
url;


    constructor(private _router:Router,private http: HttpService,private route:ActivatedRoute,public data11:DataService) {
	 this.url=fileurl+'upload-dp-image';
    }
//uploadedImage=['http://127.0.0.1:4000/images/image-1517653177082.jpg'];

    customStyle = {
        selectButton: {
            "background-color": "#e9423f",
            "border-radius": "3px",
            "color": "white"
        }
    }

    
    ngOnInit() {
		if(localStorage.getItem('nvd-user')!==undefined && localStorage.getItem('nvd-user')!==null && localStorage.getItem('nvd-user')==='admin'){
		
		
		
this.data11.currentMessage1.subscribe(val => {console.log(val);
this.color = val;
 if(val==='red'){
		  this.colors='btn-danger';
		  this.customStyle={
        selectButton: {
            "background-color": "#f44336",
            "border-radius": "3px",
            "color": "white"
        }
    }
	  }else if(val==='blue'){
		  this.colors='btn-info';
		  this.customStyle={
        selectButton: {
            "background-color": "#0db5ca",
            "border-radius": "3px",
            "color": "white"
        }
    }
	  }else if(val==='purple'){
		  this.customStyle={
        selectButton: {
            "background-color": "#952daf",
            "border-radius": "3px",
            "color": "white"
        }
    }
		  this.colors='btn-primary';
	  }
})
        this.countries = [{
                id: '1',
                name: 'Option A'
            },
            {
                id: '2',
                name: 'Option B'
            },
            {
                id: '3',
                name: 'Option C'
            }
        ];

		
		
		
      //  this.totalRecord['degree'] = "Choose Degree";
        this.totalRecord['path'] = "";
        this.totalRecord['year'] = "Choose Year";
        this.totalRecord['college'] = "Choose College";
        this.totalRecord['userMarried'] = 'Choose Marital Status';
        this.totalRecord['userGender'] = 'Choose Gender';
        this.totalRecord['employment'] = "Choose Salaried/Self Employed";
        this.totalRecord['relativeName'] = [];
        this.totalRecord['relation'] = [];
        this.totalRecord['relativedob'] = [];
        this.totalRecord['workingStatus'] = [];
        $('.selectpicker').selectpicker();
		            this.useryear = [{
                year: '2012'
            }, {
                year: '2014'
            }];
            this.userdegree = [{
				degree:'others'
			},{
                degree: 'erwgr'
            }, {
                degree: 'hftgm'
            }];
            this.usercollege = [{
                college: 'gvedb'
            }, {
                college: 'vgfdb'
            }];
        this.userMarried = [{
            id: '1',
            name: 'Married'
        }, {
            id: '2',
            name: 'unmarried'
        }];
        this.userGender = [{
            id: '1',
            name: 'Male'
        }, {
            id: '2',
            name: 'Female'
        }];
        this.employment = [{
            id: '1',
            name: 'Salaried'
        }, {
            id: '2',
            name: 'Self Employed'
        }];



        this.data = 1;
        this.val = [0];
	
		
		
		
		}else if(localStorage.getItem('nvd-user')===null || localStorage.getItem('nvd-user')===undefined){
			this._router.navigate(['login'])
			//location.reload();
		}else{
			this._router.navigate(['user-profile']);
		}
    }
	
	
	dateFocus($event){
		console.log($event);
		$event.target.setAttribute('type','date');
	}
	dateBlur($event){
		$event.target.setAttribute('type','text');
	}
	
    ngAfterViewInit() {
        $('.selectpicker').selectpicker();
        $('.selectpicker').selectpicker('refresh');
		
        console.log($('.selectpicker'));
				this.sub = this.route.params.subscribe(function(params) {
       this.user_id = params['id']; 
	   
	   if(params['id']!='' && params['id']!=undefined){
	   var obj={};
	   this.user_id=params['id'];
	   obj['user_id']=this.user_id;
	   // this.totalRecord['path'] = "";
       // this.totalRecord['year'] = "Choose Year";
		this.user_age=989;
		this.address='lk';
		this.user_age=67;
		//this.age=data.data.personal[0].age;
		this.mail_id='uki';
		this.last_name='iuiu'
		this.mariatal_status='uku';
		this.first_name='kjki';
		this.phone_no='565';
		this.gender='ytyu';
		this.company='juyyu';
		this.designation='khuku';
		this.type='lkklk';
		this.dob='wde';
	//	this.year=data.data.educational[0].year;
	//	this.college=data.data.educational[0].institution;
		//this.dob=data.data.personal[0].dob;
		this.city="kjj";
		this.country="fhgju";
		this.postal_code='67';
	   this.http.getUserDetails(obj).subscribe(function(data){
		   console.log(data)
		    this.degree =data.data.educational[0].degree;
        this.totalRecord['path'] = "";
        this.totalRecord['year'] = "Choose Year";
		
		this.user_age=data.data.personal[0].age;
		this.address=data.data.personal[0].address;
		//this.age=data.data.personal[0].age;
		this.mail_id=data.data.personal[0].email;
		this.last_name=data.data.personal[0].father_name;
		this.mariatal_status=data.data.personal[0].marital_status;
		this.first_name=data.data.personal[0].name;
		this.phone_no=data.data.personal[0].phone;
		$('.img-ul-file-upload').css({
            'display': 'none'
        });
		this.postal_code=data.data.personal[0].postal_code;
		this.gender=data.data.personal[0].sex;
		this.company=data.data.occupational[0].company;
		this.designation=data.data.occupational[0].designation;
		this.type=data.data.occupational[0].type;
		this.year=data.data.educational[0].year;
		this.college=data.data.educational[0].institution;
		this.dob=(data.data.personal[0].dob).substring(0,10);
		this.city=data.data.personal[0].city;
		this.panNo=data.data.bank[0].panNo;
		this.adharNo=data.data.bank[0].adharNo;
		this.accountNo=data.data.bank[0].bankNo;
		this.ifscCode=data.data.bank[0].ifscCode;
		this.dateJoining=data.data.bank[0].dateJoining;
		this.department=data.data.bank[0].department;
		this.monthlySalary=data.data.bank[0].monthlySalary;
		this.country=data.data.personal[0].country;
		this.uploadedImage=[fileurl+(data.data.card[0].path).replace(/\\/g,'/')];
	//	this.
		//this.val=data.data.family;
		setTimeout(function() {
                $('.gender').selectpicker('refresh');
				 $('.gender').selectpicker('val',this.gender);
                $('.married').selectpicker('refresh');
				$('.married').selectpicker('val',this.mariatal_status);
              //  $('.college').selectpicker('refresh');
			//	$('.college').selectpicker('val',this.college);
            }.bind(this), 150)
			this.val=[];
		for(let i=0;i<data.data.family.length;i++){
			this.val.push(i);
			this.totalRecord['relativeName'][i]=data.data.family[i].name;
			this.totalRecord['relativedob'][i]=data.data.family[i].dob;
			this.totalRecord['relation'][i]=data.data.family[i].relation;
			this.totalRecord['workingStatus'][i]=data.data.family[i].working_status;
		}
       // this.totalRecord['college'] = "Choose College";
       // this.totalRecord['userMarried'] = 'Choose Marital Status';
       // this.totalRecord['userGender'] = 'Choose Gender';
       // this.totalRecord['employment'] = "Choose Salaried/Self Employed";
       
		   
	   console.log(data);
	   }.bind(this))
	   }
    }.bind(this));

		
		
    }
   
    subPress(x) {
        console.log(x);
this.totalRecord['relativeName'].splice(x,1);
		this.totalRecord['relation'].splice(x,1);
		this.totalRecord['relativedob'].splice(x,1);
		this.totalRecord['workingStatus'].splice(x,1);
		//this.val.splice(x,1);
        this.val.pop();
    }
    onBeforeUpload(data) {
        console.log(data);
        $('.img-ul-file-upload').css({
            'display': 'none'
        });
        return data;
    }

    onUploadFinished(event) {
		this.totalRecord['path']=JSON.parse(event.serverResponse._body).pathValue;
        console.log(event);
			//	this.uploadedImage=['http://127.0.0.1:4000/'+(JSON.parse(event.serverResponse._body).pathValue).replace(/\\/g,'/')];

    }
	 nameChange(event) {
        var a = (event.target.id).match(/[a-zA-Z]+|[0-9]+/g);
		console.log(a)
        this.totalRecord[a[0]][a[1]] = $('#' + event.target.id).val	();
    }
    relationChange(event) {
        var a = (event.target.id).match(/[a-zA-Z]+|[0-9]+/g);
		console.log('aaaaaa')
		console.log(a)
        this.totalRecord[a[0]][a[1]] = $('#' + event.target.id).val();
    }
    statusChange(event) {
        var a = (event.target.id).match(/[a-zA-Z]+|[0-9]+/g);
        this.totalRecord[a[0]][a[1]] = $('#' + event.target.id).val();
    }
dateChange(event){
	 var a = (event.target.id).match(/[a-zA-Z]+|[0-9]+/g);
	 console.log('aaaaaaaaaaaaa')
	 console.log(a)
        this.totalRecord[a[0]][a[1]] = $('#' + event.target.id).val();
}
    onRemoved(event) {
        $('.img-ul-file-upload').css({
            'display': 'block'
        });
		this.uploadedImage=[];
		this.http.removeDp({path:this.totalRecord['path']});
    }
    addPress(x) {
        this.val.push(this.val.length);
        for (let i = this.val.length-1; i >= x; i--) {
            this.totalRecord['relativeName'][i] = this.totalRecord['relativeName'][i - 1];
            this.totalRecord['relation'][i] = this.totalRecord['relation'][i - 1];
            this.totalRecord['relativedob'][i] = this.totalRecord['relativedob'][i - 1];
            this.totalRecord['workingStatus'][i] = this.totalRecord['workingStatus'][i - 1];
        }
        this.totalRecord['relativeName'][x] = "";
        this.totalRecord['relation'][x] = "";
        this.totalRecord['relativedob'][x] = "";
        this.totalRecord['workingStatus'][x] = "";
	//	this.deleted[x]=0;
    }
	showNotification(message,type){
	$.notify({
	// options
	message: message 
},{
	// settings
	type: type
});
	
	}

    updateProfile() {
     var mapValue={};
	 console.log(this.adharNo+'aaaaaaaaaaaaaa')
	  mapValue['adharNo']=this.adharNo;
	  console.log(mapValue)
	 mapValue['first_name']=this.first_name;
	 mapValue['last_name']=this.last_name;
	 mapValue['user_age']=this.user_age;
	 mapValue['dob']=this.dob;
	 mapValue['gender']=this.gender;
	 mapValue['mariatal_status']=this.mariatal_status;
	 mapValue['address']=this.address;
	 mapValue['city']=this.city;
	 mapValue['country']=this.country;
	 mapValue['postal_code']=this.postal_code;
	 mapValue['phone_no']=this.phone_no;
	 mapValue['mail_id']=this.mail_id;
	 mapValue['degree']=this.degree;
	 mapValue['year']=this.year;
	 mapValue['college']=this.college;
	// mapValue['type']=this.type;
	 mapValue['company']=this.company;
	 mapValue['designation']=this.designation;
	 mapValue['panNo']=this.panNo;
	 mapValue['accountNo']=this.accountNo;
	 mapValue['ifscCode']=this.ifscCode;
	 mapValue['dateJoining']=this.dateJoining;
	 mapValue['department']=this.department;
	 mapValue['monthlySalary']=this.monthlySalary;
	 mapValue['employment']=this.type;
	  mapValue['familyData']=this.familyData;
	  mapValue['type']='employee';
	  mapValue['path']=this.totalRecord['path'];
	  mapValue['userId']=this.user_id;
	 for(var i=1;i<=Object.keys(this.totalRecord['relativeName']).length;i++){
		this.familyData[i-1]=[];
	   this.familyData[i-1][0]=this.totalRecord['relativeName'][i-1];
	   this.familyData[i-1][1] = this.totalRecord['relation'][i-1];
       this.familyData[i-1][2] = this.totalRecord['relativedob'][i-1] ;
       this.familyData[i-1][3] = this.totalRecord['workingStatus'][i-1];
	   this.familyData[i-1][4] = '';	  
	   }
	  console.log(mapValue)
	 /*  this.http.saveDetails(mapValue).subscribe(function(data){
	   console.log(data);
	   this.showNotification('Data Saved','info');
	   this.saveClick();
	   }.bind(this));*/
	   
	   if(!(this.user_id!=='' && this.user_id!==undefined)){
	   this.http.saveDetails(mapValue).subscribe(function(data){
	   console.log(data);
	   this.showNotification('Data Saved','info');
	   this._router.navigate(['employee-profile']);
	   this.saveClick();
	   }.bind(this));
		}else{
			this.http.updateDetails(mapValue).subscribe(function(data){
	   console.log(data);
	   this._router.navigate(['employee-profile']);
	   this.showNotification('updated Saved','info');
	   this.saveClick();
	   }.bind(this));
		}
	   
	   
	 console.log(mapValue);
	 console.log(this.totalRecord);
    }
	saveClick(){
		this.first_name='';
    this.last_name='';
    this.user_age='';
    this.dob='';
    this.gender='';
	this.comments='';
   // mariatal_status='';
    this.address='';
    this.city='';
    this.country='';
    this.postal_code='';
    this.phone_no='';
    this.mail_id='';
    this.degree='';
	this.familyData=[];
    this.year='';
    this.college='';
    this.type='';
	//useryear;
	//userdegree;
	//usercollege;
    this.company='';
    this.designation='';
    this.countries='';
    //data='';
    this.val=[0];
	this.sub='';
	this.user_id=''
	 $('.img-ul-file-upload').css({
            'display': 'block'
        });
		this.uploadedImage=[];
  //  this.userMarried='';
  //  this.userGender='';
    //employment;
    this.totalRecord = {};
	this.uploadedImage=[];
	
	 this.totalRecord['path'] = "";
        this.totalRecord['year'] = "Choose Year";
        this.totalRecord['college'] = "Choose College";
        this.totalRecord['userMarried'] = 'Choose Marital Status';
        this.totalRecord['userGender'] = 'Choose Gender';
        this.totalRecord['employment'] = "Choose Salaried/Self Employed";
        this.totalRecord['relativeName'] = {
            '1': ''
        };
        this.totalRecord['relation'] = {
            '1': ''
        };
        this.totalRecord['relativedob'] = {
            '1': ''
        };
        this.totalRecord['workingStatus'] = {
            '1': ''
        };
	
	}
}
