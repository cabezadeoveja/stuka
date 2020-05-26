import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';

/* Dialog */
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { LoginService } from '../../services/login/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public faSyncAlt = faSyncAlt;
  public loading = false;
  public registerLoading = false;

  public forma: FormGroup;
  public registerforma: FormGroup;
  public hidePassword = true;
  public registerHidePassword = true;
  public register2HidePassword = true;

  constructor(
    public dialogRef: MatDialogRef<LoginComponent>,
    public fb: FormBuilder,
    private loginService: LoginService
    ) { }

  ngOnInit(): void {
    this.createLoginForm();
    this.createRegisterForm();
  }

  createLoginForm(){

    this.forma = this.fb.group({
      email    : [ '', [Validators.required, Validators.email] ],
      password : ['', [Validators.required]]
    })

  }

  createRegisterForm(){

    this.registerforma = this.fb.group({
      name : ['', [Validators.required]],
/*       lastname : ['', [Validators.required]], */
      email    : [ '', [Validators.required, Validators.email] ],
      password : ['', [Validators.required]],
      password2 : ['', [Validators.required]],
    })

  }


  closeDiolog(): void {
    this.dialogRef.close();
  }

  login(){
    if( this.forma.valid ){
      this.loading = true;
      /* console.log( 'Data: ', this.forma.value ); */
      this.loginService.login( this.forma.value ).subscribe( res =>{
        console.log( res )
        this.loading = false;
        this.closeDiolog();
      })
    }
  }

  register(){
    console.log(this.registerforma);
    this.registerLoading = true
  }

}
