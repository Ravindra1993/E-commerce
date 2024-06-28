import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RestApiService } from 'src/app/services/rest-api.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signUpForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private restApi: RestApiService
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.signUpForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      gender: ['', Validators.required],
      mobile_no: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  submit() {
    if (this.signUpForm.valid) {
      const body = this.signUpForm.value;
      this.restApi.postData(`http://localhost:3000/api/register`, body).subscribe(result => {
        console.log(result);
        console.log(JSON.stringify(result));
      })
      console.log(this.signUpForm.value);
      alert("successfully Done.");
      this.signUpForm.reset();
    }
  }

  cancel() {
    this.signUpForm.reset();
  }

  goto() {
    this.router.navigate(['../auth'])
  }

}
