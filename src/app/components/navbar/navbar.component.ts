import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Component, OnInit, ElementRef } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { HttpService } from '../../services/http.service';
import { DataService } from "../../services/data-service";
import { FormsModule } from '@angular/forms';
import { ROUTES } from '../sidebar/sidebar.component';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css'],
    providers: [HttpService]
})
export class NavbarComponent implements OnInit {
    listTitles: any[];
    location: Location;
    toggleButton: any;
    private sidebarVisible: boolean;
    public term: string;
    colors = 'btn-danger';
    number;
    show;
    show1;
    dataValue = [];
    constructor(location: Location, public router: Router, private element: ElementRef, private data: DataService, public http: HttpService) {
        this.location = location;
        this.sidebarVisible = false;
        this.term = '';
    }

    logout() {
        console.log("Nav Bar Logout Screen");
        localStorage.removeItem('nvd-user');
        this.router.navigate(['login']);
    }

    seenNoti() {
        if (this.show) {
            this.show = false;
            var userId = localStorage.getItem('id');
            this.http.seenNotification({ userId: userId }).subscribe(function (dataVal) {
                console.log(dataVal)
            })
        }
    }

    inputChange(event) {

        this.data.changeMessage(this.term);

    }

    colorChange(event) {
        console.log(event)
        if (event.target.id === 'blue') {
            this.data.changeColor("blue");
            this.colors = 'btn-info';
        } else if (event.target.id === 'red') {
            this.data.changeColor("red");
            this.colors = 'btn-danger';
        } else if (event.target.id === 'green') {
            this.data.changeColor('purple');
            this.colors = 'btn-primary';
        }

    }

    changeMessage(message: string) {
        //  this.messageSource.next(message)
    }

    ngOnInit() {
        this.listTitles = ROUTES.filter(listTitle => listTitle);
        const navbar: HTMLElement = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
        var userId = localStorage.getItem('id');
        var type = localStorage.getItem('nvd-user');
        if (type !== undefined && (type === 'employee' || type === 'user')) {
            this.http.checkNotification({ userId: userId }).subscribe(function (dataVal) {
                console.log(dataVal);
                if (dataVal.value.length > 0) {
                    this.show = true;
                    this.show1 = true;
                    this.number = dataVal.value.length;
                    for (let i = 0; i < dataVal.value.length; i++) {
                        this.dataValue.push(dataVal.value[i].counter + ' media uploaded in ' + dataVal.value[i].activity_id);
                    }
                }
            }.bind(this))
        }
    }

    sidebarOpen() {
        const toggleButton = this.toggleButton;
        const body = document.getElementsByTagName('body')[0];
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        body.classList.add('nav-open');

        this.sidebarVisible = true;
    };

    sidebarClose() {
        const body = document.getElementsByTagName('body')[0];
        this.sidebarVisible = false;
        body.classList.remove('nav-open');
    };

    sidebarToggle() {
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        } else {
            this.sidebarClose();
        }
    };

    getTitle() {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(2);
        }
        titlee = titlee.split('/').pop();
        return 'Dashboard';
    }
}
