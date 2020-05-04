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

  public forma: FormGroup;
  public hidePassword = true;

  constructor(
    public dialogRef: MatDialogRef<LoginComponent>,
    public fb: FormBuilder,
    private loginService: LoginService
    ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){

    this.forma = this.fb.group({
      email    : [ '', [Validators.required, Validators.email] ],
      password : ['', [Validators.required]]
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
}
