import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
    moduleId: module.id,
    templateUrl: 'otp.component.html'
})

export class OtpComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router) { }

    ngOnInit() {       
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    submit() {         
        console.log("OTP is:"+this.model.OTP);
        localStorage.setItem("currentUser",localStorage.getItem('loginUser'));
       console.log(localStorage.getItem('loginUser')) ;    
        this.router.navigate([this.returnUrl]);
 
    }
}
