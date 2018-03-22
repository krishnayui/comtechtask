import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router) { }

    ngOnInit() {       
        localStorage.removeItem('currentUser');
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    login() {
        var userdetails = JSON.stringify({ username: this.model.username, password: +this.model.password });

        console.log("User Name is:"+this.model.username+" and password is :"+this.model.password);
        this.loading = true;
        localStorage.setItem('loginUser', userdetails);
        this.router.navigate([this.returnUrl+'/otp']);
 
    }
}
