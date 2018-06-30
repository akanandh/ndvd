import { Component, OnInit,AfterViewInit } from '@angular/core';
import {
    HttpService
} from '../services/http.service';
import {
  Router
} from '@angular/router';
import { fileurl } from '../services/http.service';
import { DataService } from "../services/data-service";
declare var $:any;
declare var lightGallery:any;
interface Marker {
lat: number;
lng: number;
label?: string;
draggable?: boolean;
}
@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css'],
      providers: [HttpService]
})
export class ImageGalleryComponent implements OnInit,AfterViewInit {

  constructor(private _router:Router,private http: HttpService,public data11:DataService) {
	  
   }
 video=[];
 colors='btn-danger';
gallery=[];
data;
color='red';
 ngOnInit() {
	 if(localStorage.getItem('nvd-user')!==undefined && localStorage.getItem('nvd-user')!==null){
	 this.data11.currentMessage1.subscribe(val => {console.log(val);this.color = val;
	  if(val==='red'){
		  this.colors='btn-danger';
	  }else if(val==='blue'){
		  this.colors='btn-info';
	  }else if(val==='purple'){
		  this.colors='btn-primary';
	  }
	 })
	 this.videoA();


$('#lightgallery').lightGallery({
    thumbnail:true,
    animateThumb: false,
    showThumbByDefault: false
}); 

	 }else{
		 this._router.navigate(['login'])
		 //location.reload();
	 
	 }
  



  }
  
  
  
  
videoA(){
	  this.http.getMediaInfo().subscribe(function(data){
		  console.log(data)
		for(let i=0;i<data.length;i++){
			console.log(data[i])
			this.gallery.push({name:'id'+i});
	 // $('#'+this.gallery[i].name).lightGallery();
	  var videoVal=[];
	  var a='#video1';
	  for(let j=0;j<data[i].length;j++){
		  videoVal.push({src:fileurl+data[i][j].media_url.replace(/\\/g,'/'),name:'id'+i,activity:data[i][j].activity_id});
		//  console.log(data[j].media_url)
	var valu='<li class="col-xs-6 col-sm-4 col-md-3 video"  data-src='+fileurl+data[i][j].media_url.replace(/\\/g,'/')+'>'+
                            '<a href="">'+
                                '<img class="img-responsive" src='+fileurl+data[i][j].media_url.replace(/\\/g,'/')+'>'+
                                '<div class="demo-gallery-poster">'+
                                    '<img src="../../assets/img/images.png">'+
                                '</div>'+
                            '</a>'+
                        '</li>';
	  
	  
	//  $('#'+this.gallery[i].name).append(valu);
	  }
	  
	  this.video.push(videoVal);
	  console.log($('#'+this.gallery[i].name))
	//  $('#'+this.gallery[i].name).data('lightGallery').destroy(true);
	 this.data=data;
	 console.log(this.data)
	  }
	   }.bind(this))
}
	ngAfterViewInit(){
	//this.http.getMediaInfo().subscribe(function(data){
	/*	for(let i=0;<data[i].length;j++){
		 $('#'+this.gallery[i].name).lightGallery();
		}*/
	var a=setInterval(function(){
			if(this.data!==undefined){
				console.log(this.data)
				console.log(this.gallery)
				
				for(let i=0;i<this.data.length;i++){
					console.log($('#'+this.gallery[i].name))
		 $('#'+this.gallery[i].name).lightGallery({
			  thumbnail:true,
    animateThumb: false,
    showThumbByDefault: false
		 });
		}
		clearInterval(a);
			}
		}.bind(this),100)
	$('#aniimated-thumbnials').lightGallery({
    thumbnail:true,
    animateThumb: false,
    showThumbByDefault: false
}); 
	}  
videoB(data,gallery1){
		  	console.log(data);
		//this.data=JSON.parse(JSON.stringify(data));
		for(let i=0;i<data.length;i++){
			//this.gallery.push({name:'id'+i});
	  $('#'+gallery1[i].name).lightGallery();
	  var videoVal=[];
	  var a='#video1';
	  for(let j=0;j<data[i].length;j++){
		  videoVal.push({src:fileurl+data[i][j].media_url.replace(/\\/g,'/')});
		  console.log(data[j].media_url)
	var valu='<li class="col-xs-6 col-sm-4 col-md-3 video"  data-src='+fileurl+data[i][j].media_url.replace(/\\/g,'/')+'>'+
                            '<a href="">'+
                                '<img class="img-responsive" src='+fileurl+data[i][j].media_url.replace(/\\/g,'/')+'>'+
                                '<div class="demo-gallery-poster">'+
                                    '<img src="../../assets/img/images.png">'+
                                '</div>'+
                            '</a>'+
                        '</li>';
	  
	  
	  $('#'+gallery1[i].name).append(valu);
	  }
	  this.video.push(videoVal);
	  $('#'+gallery1[i].name).data('lightGallery').destroy(true);
	  $('#'+gallery1[i].name).lightGallery();
	  }
		
		
//	}.bind(this))
	 
	
	  }
	  subscribe(event,activity){
		var data={};
		data['activity_id']=activity;
		data['userId']=localStorage.getItem('id');
		this.http.subscribe(data).subscribe(function(data1){
			console.log(activity)
		  console.log(event);
		  if(event.target.style.backgroundColor==='' || event.target.style.backgroundColor==='#00bcd4' || event.target.style.backgroundColor==='rgb(0, 188, 212)'){
		  event.target.style.backgroundColor='#c4c1c1';
		  $.notify({
	// options
	message: 'subscribed' 
},{
	// settings
	type: 'info'
});
		  }else{
			  event.target.style.backgroundColor='#00bcd4';
			 // Notification('Primary notification');
			 
			// $('#modalVideoForm').modal('show');
		  }
		})
		
	  }
  
  showVideo(){
	   $('#modalVideoForm').modal('show');
  }
 

toggleVideo(event: any) {
   // this.videoplayer.play();
}

}
