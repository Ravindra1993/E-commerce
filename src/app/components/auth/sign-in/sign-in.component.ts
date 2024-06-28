import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RestApiService } from 'src/app/services/rest-api.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  signInForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private restApi: RestApiService
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.signInForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  submit() {
    if (this.signInForm.valid) {
      const body = this.signInForm.value;
      this.restApi.postData(`http://localhost:3000/api/login`, body).subscribe((result: any) => {
        if (result.success == true) {
          if (result.success) {
            localStorage.setItem('userDetails', JSON.stringify(result.data));
            const user = result.data;
            console.log('check data 1 ', user);
            // Check the user's role
            if (user.user_role === 'endUser') {
                this.router.navigate(['../end-user']);
            } else if (user.user_role === 'admin') {
                this.router.navigate(['./admin']);
            }
          this.signInForm.reset();
        } else {
          this.signInForm.reset();
        }
      }
    })}else{
      alert('Invalid Details')
    }
    
  }

  cancel() {
    this.signInForm.reset();
  }

  goto() {
    this.router.navigate(['../auth/sign-up'])
  }
}
