import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { ElementRef } from '@angular/core';
import { DataService } from "../services/data-service";
import {
	Router
} from '@angular/router';
import {
	HttpService
} from '../services/http.service';
import { fileurl } from '../services/http.service';
const URL = 'http://127.0.0.1:4000/upload-gallery/';
//const URL='http://127.0.0.1:4000/upload-dp-image';
declare var $: any;
@Component({
	selector: 'app-post',
	templateUrl: './post.component.html',
	styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
	color = 'red';
	image=false;
	video=false;
	public uploadList = {};
	public event_name;
	public event_type;
	public description;
	normal = false;
	event_flag = 0;
	eventType = [];
	eventName = '';
	host_name;
	start=true;
	valid_till;
	live = true;
	type = [{ name: 'Normal' }, { name: 'Live' }];
	typeVal;
	link;
	colors = 'btn-danger';
	imageChangedEvent: any = '';
	croppedImage: any = '';
	public a;
	public b;
	public uploader1: FileUploader = new FileUploader({ url: URL, allowedMimeType: ['video/mp4'] });

	public uploader: FileUploader = new FileUploader({ url: URL, allowedMimeType: ['image/png', 'image/gif', 'image/jpeg'] });

	constructor(private http: HttpService, public data11: DataService, private _router: Router) { 
		
	}
	ngOnInit() {
		if (localStorage.getItem('nvd-user') !== undefined && localStorage.getItem('nvd-user') !== null && localStorage.getItem('nvd-user') === 'admin') {
			this.data11.currentMessage1.subscribe(val => {
				console.log(val);
				this.color = val;
				if (val === 'red') {
					this.colors = 'btn-danger';
				} else if (val === 'blue') {
					this.colors = 'btn-info';
				} else if (val === 'purple') {
					this.colors = 'btn-primary';
				}

			})
			this.uploader.onSuccessItem = (item: any, response: any, status: any, headers: any) => {
				console.log('Upload complete status->' + status);
				console.log('Upload complete header->' + headers);
				console.log('Upload complete item->' + item);
				this.uploadList[item['file']['name']] = JSON.parse(response)['pathValue'];
				console.log(response);// log response

				//your logic

			};
			this.uploader1.onSuccessItem = (item: any, response: any, status: any, headers: any) => {
				console.log('Upload complete status->' + status);
				console.log('Upload complete header->' + headers);
				console.log('Upload complete item->' + item);
				console.log(response);// log response
				this.uploadList[item['file']['name']] = JSON.parse(response)['pathValue'];
				//your logic

			};
			$('.selectpicker').selectpicker()

			this.http.getMediaType().subscribe(
				(data) => {
					console.log(data)
					console.log('aaaaaaaaaaaaaaaaaaaa')
					if (data['length'] != 0) {
						this.eventType = JSON.parse(JSON.stringify(data));
					}
					this.eventType.push({ activity_id: 'others' });
					setTimeout(function () {
						$('.eventType').selectpicker('refresh');
						console.log(this.eventType)
						$('.eventType').selectpicker('val', this.eventType);
						$('.eventName').selectpicker('refresh');
						$('.eventName').selectpicker('val', this.eventName);
						$('.type').selectpicker('refresh');
						$('.type').selectpicker('val', this.type);
						//  $('.college').selectpicker('refresh');
						//	$('.college').selectpicker('val',this.college);
					}.bind(this), 150)
					console.log(data);
				})
		} else if (localStorage.getItem('nvd-user') === null || localStorage.getItem('nvd-user') === undefined) {
			this._router.navigate(['login'])
		location.reload();
		} else {
			console.log('tygggggggggggggggg');
			this._router.navigate(['user-profile']);
		}


	}







	fileChangeEvent(event: any): void {
		this.imageChangedEvent = event;
	}
	imageCropped(image: string) {
		this.croppedImage = image;
	}
	imageLoaded() {
		// show cropper
	}
	loadImageFailed() {
		// show message
	}









	typeChange() {
		this.start=false;
		var value = this.typeVal;
		if (this.typeVal === 'Normal') {
			this.normal = true;
			this.live = false;
			setTimeout(function () {
				$('.type').selectpicker('refresh');
				$('.type').selectpicker('val', value);
			}.bind(this), 150)
		} else {
			this.normal = false;
			this.live = true;
			setTimeout(function () {
				$('.type').selectpicker('refresh');
				$('.type').selectpicker('val', value);
			}.bind(this), 150)
		}
	}

	dateFocus($event) {
		console.log($event);
		$event.target.setAttribute('type', 'date');
	}
	dateBlur($event) {
		$event.target.setAttribute('type', 'text');
	}

	eventChange(event) {
		console.log(this.event_type)
		if (this.event_type === 'others') {
			this.event_flag = 1;
			this.event_type = '';
			setTimeout(function () {
				$('.eventType').selectpicker('refresh');
				$('.eventType').selectpicker('val', this.eventType);
			}.bind(this), 150)
		}
	}


	fileChange(event, a, b) {
		
	this.image=true;
		console.log(event)
		var reader = new FileReader();
		var image = $('.image-div');

		reader.onload = function () {
			var src = reader.result;
			//console.log(src);
			/*var imgg = '<img class="image" src=' + src + ' style="width:100px;padding:10px;height:100px">';
			imgg = imgg + '<fa name="close" size="1g"></fa>'
			image.append(imgg);*/
			//image[0].setAttribute('src' , src);
		};
		//console.log(this.uploader.queue[0].file.rawFile)
		var file: File = new File([this.uploader.queue[this.uploader.queue.length - 1].file.rawFile], "");
		reader.readAsDataURL(file);

	}

	public onFileSelected: FileUploader = new FileUploader({ url: URL });

	fileChange1(event, a, b) {
this.video=true;
		var reader = new FileReader();
		var image = $('.image-div');
		/*var imgg = '<img class="image" src="../assets/img/video.jpg" style="width:100px;padding:10px;height:100px">';
		imgg = imgg + '<fa name="close" size="1g"></fa>'
		image.append(imgg);*/
	}


	removeItem(item) {
		console.log(item);
		this.http.removeGallery({ path: this.uploadList[item['file']['name']] }).subscribe(
			(data) => {
				console.log(data);
				if (data['result'] === 'success') {
					delete this.uploadList[item['file']['name']];
				}
			});
	}

	postItem() {
		console.log(this.uploadList)
		this.http.postItem({live:this.live, uploadList: this.uploadList, event_type: this.event_type, link: this.link, host_name: this.host_name, valid_till: this.valid_till, type: this.typeVal, event_name: this.event_name, description: this.description }).subscribe(
			(data) => {
				console.log(data);
				if (data['result'] === 'success') {
					this.showNotification('Data Saved','info');
					if(this.image){
						this._router.navigate(['image-gallery']);
					}else{
					this._router.navigate(['video-gallery']);
					}
					this.color = 'red';
					this.uploadList = {};
					this.event_name='';
					this.event_type='';
					this.description='';
					this.normal = false;
					this.event_flag = 0;
					this.eventType = [];
					this.eventName = '';
					this.host_name='';
					this.valid_till='';
					this.live = true;
					this.type = [{ name: 'Normal' }, { name: 'Live' }];
					this.typeVal='';
					this.link='';
					this.colors = 'btn-danger';
					//delete this.uploadList[item['file']['name']];
				}
			});

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



	imageClick() {
		$('.file-upload').trigger('click');
	}
	videoClick() {
		$('.file-upload1').trigger('click');
	}



}
