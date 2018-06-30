import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { DataService } from "../../services/data-service";

declare const $: any;

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: 'dashboard', title: 'Dashboard', icon: 'dashboard', class: '' },
    { path: 'user-profile', title: 'User Profile', icon: 'person', class: '' },
    { path: 'add-profile', title: 'Add Profile', icon: 'content_paste', class: '' },
    { path: 'video-gallery', title: 'Video Gallery', icon: 'library_books', class: '' },
    { path: 'image-gallery', title: 'Image Gallery', icon: 'library_books', class: '' },
    { path: 'post', title: 'Post', icon: 'bubble_chart', class: '' },

    { path: 'transaction', title: 'View Transactions', icon: 'notifications', class: '' },
    { path: 'view-profile', title: 'View Profile', icon: 'unarchive', class: '' },
    { path: 'employee', title: 'Employee', icon: 'unarchive', class: '' },
    { path: 'employee-profile', title: 'Employee Profile', icon: 'person', class: '' },
    { path: 'employee-view-profile', title: 'Employee View Profile', icon: 'unarchive', class: '' },
    { path: 'accounts', title: 'Accounts', icon: 'unarchive', class: '' }

];

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
    menuItems: any[];
    ROUTES: RouteInfo[];
    color = 'red';


    constructor(public data: DataService, public router: Router, ) { }

    ngOnInit() {
        if (localStorage.getItem('nvd-user') === undefined || localStorage.getItem('nvd-user') === null) {
            this.data.currentMessage1.subscribe(val => { console.log(val); this.color = val })
            this.data.currentMessage2.subscribe(val => {
                if (val === 'employee') {
                    this.employee();
                } else if (val === 'admin') {
                    this.admin();
                }
            })
        } else if (localStorage.getItem('nvd-user') === 'employee') {
            this.employee();
        } else if (localStorage.getItem('nvd-user') === 'admin') {
            this.admin();
        }

    }

    logout() {
        console.log("SideBar Logout Screen");
        localStorage.removeItem('nvd-user');
        this.router.navigate(['login']);
    }

    employee() {

        this.ROUTES = [

            { path: 'user-profile', title: 'User Profile', icon: 'person', class: '' },

            { path: 'video-gallery', title: 'Video Gallery', icon: 'library_books', class: '' },
            { path: 'image-gallery', title: 'Image Gallery', icon: 'library_books', class: '' },

            { path: 'view-profile', title: 'View Profile', icon: 'unarchive', class: '' }]

        this.menuItems = this.ROUTES.filter(menuItem => menuItem);
    }

    admin() {
        this.ROUTES = [

            { path: 'user-profile', title: 'User Profile', icon: 'person', class: '' },
            { path: 'add-profile', title: 'Add Profile', icon: 'content_paste', class: '' },
            { path: 'video-gallery', title: 'Video Gallery', icon: 'library_books', class: '' },
            { path: 'image-gallery', title: 'Image Gallery', icon: 'library_books', class: '' },
            { path: 'post', title: 'Post', icon: 'bubble_chart', class: '' },

            { path: 'transaction', title: 'View Transactions', icon: 'notifications', class: '' },
            { path: 'view-profile', title: 'View Profile', icon: 'unarchive', class: '' },
            { path: 'employee', title: 'Employee', icon: 'unarchive', class: '' },
            { path: 'employee-profile', title: 'Employee Profile', icon: 'person', class: '' },
            { path: 'employee-view-profile', title: 'Employee View Profile', icon: 'unarchive', class: '' },
            { path: 'accounts', title: 'Accounts', icon: 'unarchive', class: '' }]


        this.menuItems = this.ROUTES.filter(menuItem => menuItem);
    }


    isMobileMenu() {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
}
