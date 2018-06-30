import { DialogType } from './../components/dialog/dialog-type';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpService } from '../services/http.service'
import { DataService } from "../services/data-service";
import { DialogPopupComponent } from '../components/dialog/dialog-popup.component';

@Component({
	selector: 'app-user-profile',
	templateUrl: './user-profile.component.html',
	styleUrls: ['./user-profile.component.css'],
	providers: [HttpService, NgbModal]
})
export class UserProfileComponent implements OnInit {
	//@Input() term:any;
	items1;
	message;
	search;
	domain = "http://localhost:8082/";

	constructor(public _router: Router, private modalService: NgbModal, private http: HttpService, public data: DataService) { }

	ngOnInit() {
		if (localStorage.getItem('nvd-user') !== undefined && localStorage.getItem('nvd-user') !== null) {
			var data = [];
			this.search = '';
			this.data.currentMessage.subscribe(message => { console.log(message); this.search = message })
			var value = { type: 'user' };
			this.http.fetchCards(value).subscribe(function (data) {
				console.log("skrtest---------------------->>>", data)
				this.items1 = data;
				//this.term=this.navBar.term;

			}.bind(this))
		} else {
			// this._router.navigate(['login'])
			//location.reload();
		}

		this.onDeleteClick(null, null);
	}

	changeEvent(event) {
		//	this.term=event;
		console.log(event)
	}

	navigateEdit(event, id) {
		console.log(event, id)
		// this._router.navigate(['add-profile', id])
	}

	navigateView(event, id) {
		console.log(event, id)
		// this._router.navigate(['view-profile', id])
	}


	onDeleteClick(event, id) {
		const modalRef = this.modalService.open(DialogPopupComponent, { size: 'lg' });
		// modalRef.componentInstance.title = "Confirmation";
		// modalRef.componentInstance.type = DialogType.CONFIRMATION_WARNING;
		// modalRef.componentInstance.message = "Are you sure you want to delete?";
		// modalRef.result.then((data) => {
		// 	if (data == "Yes") {
		// 		this.delete(event, id);
		// 	}
		// });
	}

	delete(event, id) {
		var data = [];
		data.push(id);
		this.http.deleteCard(data).subscribe(function (data) {
			data = [];
			var value = { type: 'user' };
			this.http.fetchCards(value).subscribe(function (data) {
				this.items1 = data;
			}.bind(this));
			console.log(data)
		}.bind(this))
	}

}

