import { Component, OnInit, ElementRef } from '@angular/core';
import { CommonService } from '../../common.service';
import { FormControl, FormGroup } from '@angular/forms';
import { LanguageBundle } from './../../common-file/language-bundle';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.scss'],
  providers: [LanguageBundle]
})
export class Component1Component implements OnInit {
  loginForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  });
  formData: any;
  formEnable: boolean = false;
  constructor(private commonService: CommonService, private elRef: ElementRef, private langBundle: LanguageBundle) { }

  ngOnInit() {
    setTimeout(() => {
      let ele = this.elRef.nativeElement.querySelector('.main-wrapper');
      ele.classList.add('visibility');
    }, 0);
    this.commonService.getFormData().subscribe(data => {
      this.formData = data;
      console.log(this.formData);
      this.formEnable = true;
    })
  }

  submit() {
    if (this.loginForm.valid) {
      this.loginForm.value['edit'] = false;
      this.commonService.updateMessage(this.loginForm.value);
      // this.loginForm.reset();
      let ele = this.elRef.nativeElement.querySelector('#name');
      setTimeout(() => {
        ele ? ele.focus() : ele;
      }, 100);
    }
    console.log(this.loginForm)
    if (this.loginForm.controls.name.errors != null) {
      let element = this.elRef.nativeElement.querySelector('#name-label')
      element.classList.add('shake-element');
      setTimeout(() => {
        element.classList.remove('shake-element');
      }, 2000);
    }
    if (this.loginForm.controls.email.errors != null) {
      let element = this.elRef.nativeElement.querySelector('#email-label')
      element.classList.add('shake-element');
      setTimeout(() => {
        element.classList.remove('shake-element');
      }, 2000);
    }
    if (this.loginForm.controls.password.errors != null) {
      let element = this.elRef.nativeElement.querySelector('#password-label')
      element.classList.add('shake-element');
      setTimeout(() => {
        element.classList.remove('shake-element');
      }, 2000);
    }
  }
}
