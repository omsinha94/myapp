import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private elRef: ElementRef) { }

  ngOnInit() {
    setTimeout(() => {
      let ele = this.elRef.nativeElement.querySelector('.main-wrapper');
      ele.classList.add('visibility');
    }, 0);
  }

}
