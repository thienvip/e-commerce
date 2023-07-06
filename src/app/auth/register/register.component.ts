import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { IUserRegister } from 'src/app/shared/interfaces/IUserRegister';
import { PasswordsMatchValidator } from 'src/app/shared/validators/password_match_validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  registerForm!: FormGroup;
  returnUrl = '';

  constructor(
      private fb: FormBuilder,
      private userService: UserService,
      private activatedRoute: ActivatedRoute,
      private router: Router
    ){}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: [
        '',
        Validators.required,
      ],
      address: [
        '',
        Validators.required,
      ],
      email: [
        '',
        Validators.compose([
          Validators.required,
          Validators.email
        ]),
      ],
      password: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(8)
        ]),
      ],
      retypePassword: [
        '',
        Validators.compose([
          Validators.required,

        ]),

      ],
      confirm:[
        false,
      ]
    },
    {
      validators: PasswordsMatchValidator('password','retypePassword')
    }
    );

    this.returnUrl= this.activatedRoute.snapshot.queryParams['returnUrl'];
  }

  get fc(){
    return this.registerForm.controls
  }

  onSubmit(){
    this.registerForm.markAllAsTouched()
    if(this.registerForm.invalid) return;

    const fv = this.registerForm.value;
    const user :IUserRegister = {
      name: fv.name,
      email: fv.email,
      password: fv.password,
      confirmPassword: fv.confirmPassword,
      address: fv.address
    };

    this.userService.register(user).subscribe(_ => {
      this.router.navigateByUrl(this.returnUrl);
    })
  }

}
