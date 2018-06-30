import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy, PopStateEvent } from '@angular/common';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpService } from '../services/http.service';
import { DataService } from '../services/data-service';

declare const $: any;

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
	providers: [HttpService, NgbModal]
})
export class LoginComponent implements OnInit, AfterViewInit {
    private userName: string;
    private password: string;
    private color: string = "red";
    private loginResult: string = "";

    constructor(public location: Location, public router: Router, public http: HttpService, public data: DataService, private modalService: NgbModal) { }

    ngOnInit() {
        var a = $('.modal-backdrop')[0];
        if (a !== undefined) {
            a.remove();
        }
        if (localStorage.getItem('nvd-user') !== undefined && localStorage.getItem('nvd-user') !== null) {
            this.router.navigate(['user-profile']);
        } else {
            var a = $('.sidebar')[0];
            var b = $('.navbar')[0];
            if (a !== undefined) {
                a.style.display = 'none';
                b.style.display = 'none';
            }
            this.router.navigate(['login']);
        }
    }

    ngAfterViewInit() {
        setTimeout(function () {
            var a = $('.modal-backdrop')[0];
            if (a !== undefined) {
                a.remove();
            }
        }, 100)

    }

    login() {
        let credential = {};
        credential['userId'] = this.userName;
        credential['password'] = this.password;
        this.http.loginCheck(credential).subscribe(function (data) {
            this.loginResult = data.result;
            console.log("data---->>>>", data);
            if (data.result == "success") {
                if (data['data']['type'] === 'admin') {
                    this.data.loginClick('admin');
                    localStorage.setItem('nvd-user', 'admin')
                    this.router.navigate(['user-profile']);
                    var a = $('.sidebar')[0];
                    var b = $('.navbar')[0];
                    if (a !== undefined) {
                        a.style.display = 'block';
                        b.style.display = 'block';
                    }
                } else if (data['data']['type'] === 'user' || data['data']['type'] === 'employee') {
                    this.data.loginClick('employee');
                    localStorage.setItem('nvd-user', 'employee')
                    localStorage.setItem('id', data.data.id)
                    this.router.navigate(['user-profile']);
                    var a = $('.sidebar')[0];
                    var b = $('.navbar')[0];
                    if (a !== undefined) {
                        a.style.display = 'block';
                        b.style.display = 'block';
                    }
                }
            } else {
                console.log("Login Failure");
            }
        }.bind(this))
    }
}