import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup = this.fb.group({
    email:['',[
      Validators.required,
      Validators.email,
      Validators.pattern("^.+@[a-z0-9.-]+\\.[a-z]{2,4}$")
    ]],
    password:['',[Validators.required]]
  })
  isSubmit = false;
  constructor(
    private authService:AuthService,
    private fb:FormBuilder,
    private router:Router) { }

  ngOnInit(): void {
  }

  onLogin(){
    this.isSubmit = true;
    if(this.loginForm.invalid){
      return;
    }

    const {email,password} = this.loginForm.value;
    this.authService.login(email,password,false).subscribe(data=>{
      if(data.status){
        this.router.navigate(['/'])
      }else{
        alert("Invalid Credential")
      }
    });
  }

  //get functions
  get email():FormControl{
    return this.loginForm.get('email') as FormControl;
  }

  get password():FormControl{
    return this.loginForm.get('password') as FormControl;
  }

}
