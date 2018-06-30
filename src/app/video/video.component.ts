import { Component, OnInit,AfterViewInit } from '@angular/core';
import {
    HttpService
} from '../services/http.service';
import {
  Router
} from '@angular/router';
import { fileurl } from '../services/http.service';
import { DataService } from "../services/data-service";
//import { ViewChild } from '@angular/core';
//import {lightgallery} from '../../assets/js/lightgallery.min.js';
declare var $:any;
declare var lightGallery:any;
@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css'],
        providers: [HttpService]
})


export class VideoGalleryComponent implements OnInit,AfterViewInit {

  constructor(private _router:Router,private http: HttpService,public data11:DataService) {

   }
//video=[[{poster:'../../assets/img/download6.jpg',thumnail:'../../assets/img/download6.jpg',id:'id1',id1:'#id1',video:'../../assets/img/perfect.mp4'},{name:'../../assets/img/download6.jpg',thumnail:'../../assets/img/download6.jpg',id:'id2',id1:'#id2',video:'../../assets/img/perfect.mp4'},{name:'../../assets/img/download6.jpg',id1:'#id3',thumnail:'../../assets/img/download6.jpg',id:'id3',video:'../../assets/img/perfect.mp4'},{name:'../../assets/img/download6.jpg',id1:'#id4',thumnail:'../../assets/img/download6.jpg',id:'id4',video:'../../assets/img/perfect.mp4'},{name:'../../assets/img/download6.jpg',id1:'#id5',thumnail:'../../assets/img/download6.jpg',id:'id5',video:'../../assets/img/perfect.mp4'},{id1:'#id6',name:'../../assets/img/download6.jpg',thumnail:'../../assets/img/download6.jpg',id:'id6',video:'../../assets/img/perfect.mp4'},{id1:'#id7',name:'../../assets/img/download6.jpg',thumnail:'../../assets/img/download6.jpg',id:'id7',video:'../../assets/img/perfect.mp4'},{id1:'#id8',name:'../../assets/img/download6.jpg',thumnail:'../../assets/img/download6.jpg',id:'id8',video:'../../assets/img/perfect.mp4'},{id1:'#id9',name:'../../assets/img/download2.jpg',thumnail:'../../assets/img/download6.jpg',id:'id9',video:'../../assets/img/perfect.mp4'},{id1:'#id10',name:'../../assets/img/download2.jpg',thumnail:'../../assets/img/download6.jpg',id:'id10',video:'../../assets/img/perfect.mp4'},{id1:'#id11',name:'../../assets/img/download2.jpg',thumnail:'../../assets/img/download6.jpg',id:'id11',video:'../../assets/img/perfect.mp4'},{id1:'#id12',name:'../../assets/img/download2.jpg',thumnail:'../../assets/img/download6.jpg',id:'id12',video:'../../assets/img/perfect.mp4'}],[{poster:'../../assets/img/download6.jpg',thumnail:'../../assets/img/download6.jpg',id:'id1',id1:'#id1',video:'../../assets/img/perfect.mp4'},{name:'../../assets/img/download6.jpg',thumnail:'../../assets/img/download6.jpg',id:'id2',id1:'#id2',video:'../../assets/img/perfect.mp4'},{name:'../../assets/img/download6.jpg',id1:'#id3',thumnail:'../../assets/img/download6.jpg',id:'id3',video:'../../assets/img/perfect.mp4'},{name:'../../assets/img/download6.jpg',id1:'#id4',thumnail:'../../assets/img/download6.jpg',id:'id4',video:'../../assets/img/perfect.mp4'},{name:'../../assets/img/download6.jpg',id1:'#id5',thumnail:'../../assets/img/download6.jpg',id:'id5',video:'../../assets/img/perfect.mp4'},{id1:'#id6',name:'../../assets/img/download6.jpg',thumnail:'../../assets/img/download6.jpg',id:'id6',video:'../../assets/img/perfect.mp4'},{id1:'#id7',name:'../../assets/img/download6.jpg',thumnail:'../../assets/img/download6.jpg',id:'id7',video:'../../assets/img/perfect.mp4'},{id1:'#id8',name:'../../assets/img/download6.jpg',thumnail:'../../assets/img/download6.jpg',id:'id8',video:'../../assets/img/perfect.mp4'},{id1:'#id9',name:'../../assets/img/download2.jpg',thumnail:'../../assets/img/download6.jpg',id:'id9',video:'../../assets/img/perfect.mp4'},{id1:'#id10',name:'../../assets/img/download2.jpg',thumnail:'../../assets/img/download6.jpg',id:'id10',video:'../../assets/img/perfect.mp4'},{id1:'#id11',name:'../../assets/img/download2.jpg',thumnail:'../../assets/img/download6.jpg',id:'id11',video:'../../assets/img/perfect.mp4'},{id1:'#id12',name:'../../assets/img/download2.jpg',thumnail:'../../assets/img/download6.jpg',id:'id12',video:'../../assets/img/perfect.mp4'}]];
gallery=[];
video=[];
data;
colors='btn-danger';
color='red';
live=[];
  ngOnInit() {
	  if(localStorage.getItem('nvd-user')!==undefined && localStorage.getItem('nvd-user')!==null){
	   this.data11.currentMessage1.subscribe(val => {console.log(val);
	   this.color = val;
	    if(val==='red'){
		  this.colors='btn-danger';
	  }else if(val==='blue'){
		  this.colors='btn-info';
	  }else if(val==='purple'){
		  this.colors='btn-primary';
	  }
	   })
this.http.getMp4Info().subscribe(function(data){
		console.log(data);
		var data2 : any[]=JSON.parse(JSON.stringify(data));
		this.video=[];
		this.live=[];
		 var data1=[];
		 console.log(data2)
		 var k=0;
			for(let i=0;i<data2.length;i++){
				 data1=[];
				  for(let j=0;j<data2[i].length;j++){
					 
					   var mapValue={};
					   var mapValue1={};
					   mapValue['activity']=data2[i][j].activity_id;
					   mapValue1['id']='id'+k;
					   mapValue1['name']='name'+k;
					   mapValue1['video']=fileurl+data2[i][j].media_url.replace(/\\/g,'/');
		  mapValue['id']='#id'+k;
		  mapValue['name']='name'+k;
		  k++;
		  mapValue['video']=fileurl+data2[i][j].media_url.replace(/\\/g,'/');
		  if(data2[i][j].media_id==='live'){
			mapValue1['video']=data2[i][j].media_url.replace(/\\/g,'/');
			this.live.push(mapValue1);
		}else{
			this.video.push(mapValue1);
		}
	    data1.push(mapValue);
				  }
				  this.gallery.push(data1);
			}
			this.data=data2;
	  }.bind(this))
	  }else{
		  this._router.navigate(['login'])
		//location.reload();
	  }
  }
  
  next(){
	  
	  $('.demo-gallery').animate({
    scrollLeft: $('.demo-gallery')[0].offsetWidth+$('.demo-gallery')[0].scrollLeft+15
  }, "slow");
	  
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
  
  previous(){
	   $('.demo-gallery').animate({
    scrollLeft: $('.demo-gallery')[0].scrollLeft-$('.demo-gallery')[0].offsetWidth-15
  }, "slow");
  }
  
videoA(){
	
}
	ngAfterViewInit(){
/*$('#html-videos').lightGallery({
          dynamic: true,
          dynamicEl: [{
              src: 'https://sachinchoolur.github.io/lightGallery/static/img/1.jpg',
              thumb: 'https://sachinchoolur.github.io/lightGallery/static/img/thumb-1.jpg'
          },{
              src: 'https://www.youtube.com/watch?v=meBbDqAXago',
              thumb: 'https://sachinchoolur.github.io/lightGallery/static/img/thumb-v-y-1.jpg',
              poster: 'https://sachinchoolur.github.io/lightGallery/static/img/videos/y-video1-cover.jpg'
          },{
              html: '#video2',
              thumb: 'https://sachinchoolur.github.io/lightGallery/static/img/videos/y-video1-cover.jpg',
              poster: 'https://sachinchoolur.github.io/lightGallery/static/img/thumb-v-y-1.jpg'
          },{
              src: 'https://sachinchoolur.github.io/lightGallery/static/img/4.jpg',
              thumb: 'https://sachinchoolur.github.io/lightGallery/static/img/thumb-4.jpg'
          }]
});*/
	  
	  
	  var a=setInterval(function(){
		  if(this.data!==undefined){
			  for(let i=0;i<this.gallery.length;i++){
				 $('#'+this.gallery[i][0].name).lightGallery();  
			  }
			  clearInterval(a);
		  }
	  }.bind(this),100)
	  
	  
	  
	 
	  
	  
	  
	  
	  
	 /* for(let i=0;i<this.video.length;i++){
	  $('#'+this.gallery[i].name).lightGallery();
	  
	  var a='#video1';
	  for(let j=0;j<this.video[i].length;j++){
	var valu='<li class="col-xs-6 col-sm-4 col-md-3 video" data-poster='+this.video[i][j].thumnail+' data-sub-html="<h4>CGI Animated Short HD: Student Academy Award Winning by Kevin Herron</h4>" data-html='+this.video[i][j].id1+'>'+
                            '<a href="">'+
                                '<img class="img-responsive" src='+this.video[i][j].thumnail+'>'+
                                '<div class="demo-gallery-poster">'+
                                    '<img src="../../assets/img/download4.png">'+
                                '</div>'+
                            '</a>'+
							'<p>Baby cute lungi dance ðŸ˜ðŸ˜ðŸ˜ðŸ˜˜ðŸ˜˜<p>'+
							'<div><span>WhatsApp Funny Videos</span><span>4 Months ago</span></div>'+
                        '</li>';
	  
	  
	  $('#'+this.gallery[i].name).append(valu);
	  }
	  $('#'+this.gallery[i].name).data('lightGallery').destroy(true);
	  $('#'+this.gallery[i].name).lightGallery();
	  }*/
	  
	}
	  
	  
  
  showVideo(){
	   $('#modalVideoForm').modal('show');
  }
 

toggleVideo(event: any) {
}

}
