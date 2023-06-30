import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  signInForm!: FormGroup;
  returnUrl = '';

  constructor(private fb: FormBuilder,private userService: UserService, private router:Router, private activatedRoute:ActivatedRoute){}

  ngOnInit(): void {
    this.signInForm = this.fb.group({
      email: [
        '',
        Validators.compose([
          Validators.required,
          Validators.email
        ]),
      ],
      password: [
        '',
        Validators.required,
      ],
      rememberMe: false,
    });

    this.returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'];
  }

  get fc(){
    return this.signInForm.controls
  }

  onSubmit(): void {
    this.signInForm.markAllAsTouched()
    console.log( this.signInForm.valid)
    if(this.signInForm.invalid) return;

    this.userService.login({email:this.fc['email'].value,
      password: this.fc['password'].value}).subscribe(() => {
        this.router.navigateByUrl(this.returnUrl);
    });

  }
}
