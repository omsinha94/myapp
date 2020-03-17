import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  constructor(private elRef: ElementRef) { }

  ngOnInit() {
    setTimeout(() => {
      let ele = this.elRef.nativeElement.querySelector('.main-wrapper');
      ele.classList.add('visibility');
    }, 0);
  }

}
