import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Headers , RequestOptions,Response } from "@angular/http";
import { HttpClientModule } from '@angular/common/http';

export const fileurl='http://127.0.0.1:4000/';

@Injectable()
export class HttpService {

url='http://127.0.0.1:3000/';
fileurl='http://127.0.0.1:4000/';
url1='localhost:4200/'
  constructor(private http: HttpClient,private _router: Router){}

  saveDetails(totalData) {
	return this.http.post(this.url+'insert-user',totalData);
  }
  
  updateDetails(totalData){
	  return this.http.post(this.url+'update-user',totalData);
  }
    getUserDetails(obj) {
	console.log(obj)
	return this.http.post(this.url+'get-user',obj);
  }
  removeDp(pathObj){
  this.http.post(this.fileurl+'delete-dp',pathObj).subscribe( 
    (err) => {
        if(err) console.log(err);
		else    console.log("Success"); 
    });;
  }
   removeGallery(pathObj){
  return this.http.post(this.fileurl+'delete-gallery',pathObj);
  }
    fetchCards(obj){
 return  this.http.post(this.url+'select-user',obj);
  }
  deleteCard(id){
	 return this.http.post(this.url+'delete-user',id);
  }
getMediaInfo(){
	return this.http.post(this.url+'get-media-info','');
}

selectTransaction(data){
	return this.http.post(this.url+'select-transaction',data);
}

selectAll(data){
	return this.http.post(this.url+'select-all','');
}

updateTransaction(data){
	return this.http.post(this.url+'update-transaction',data);
}

getMp4Info(){
	return this.http.post(this.url+'get-mp4-info','');
}
  insertAccount(data){
	  return this.http.post(this.url+'insert-account',data);
  }
  postItem(obj){
  return this.http.post(this.url+'post-media',obj);
  }
  
  getMediaType(){
  return this.http.post(this.url+'get-media-type',"");
  }
  
  getCollege(){
	  return this.http.post(this.url+'get-college',"");
  }
  
  getDegree(){
	  return this.http.post(this.url+'get-degree',"");
  }
  
  loginCheck(obj){
	   return this.http.post(this.url+'login',obj);
  }
  
  checkNotification(obj){
	  return this.http.post(this.url+'check-noification',obj);
  }
  
  seenNotification(obj){
	  return this.http.post(this.url+'seen-notification',obj);
  }
  
  subscribe(obj){
	  return this.http.post(this.url+'subscribe',obj);
  }
  
  
  login(user){

    return false;

  }

   checkCredentials(){
    if (localStorage.getItem("user") === null){
        this._router.navigate(['Login']);
    }
  }
}
