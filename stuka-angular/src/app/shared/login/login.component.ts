import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
/* Dialog */
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public forma: FormGroup;
  public hidePassword = true;

  constructor(
    public dialogRef: MatDialogRef<LoginComponent>,
    public fb: FormBuilder
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
      console.log( 'Data: ', this.forma.value )
    }
  }
}
