import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {
  message = "";
  constructor(private elRef: ElementRef) { }

  ngOnInit() {
    setTimeout(() => {
      let ele = this.elRef.nativeElement.querySelector('.main-wrapper');
      ele.classList.add('visibility');
    }, 0);
  }

  convert(value) {
    if (!parseInt(value) && (parseInt(value) != 0)) {
      this.strPal(value) ? (this.message = "This text is valid") : (this.message = "This text is invalid")
    } else {
      this.numArm(parseInt(value));
    }
  }

  strPal(str) {
    if (str.length % 2 != 0) {
      str = str.substr(0, (str.length - 1) / 2) + str.substr((str.length + 1) / 2)
    }
    if (str.substr(0, (str.length / 2)) == (str.substr(str.length / 2)).split('').reverse().join('')) {
      return true;
    } else {
      return false;
    }
  }

  numArm(num) {
    if (num > 0) {
      let count = 0
      for (let i = 0; i < num.toString().length; i++) {
        let mul = 1;
        for (let j = 0; j < num.toString().length; j++) {
          mul = mul * parseInt(num.toString()[i]);
        }
        count = count + mul;
      }
      if (count == num) {
        this.message = "The Number is Armstrong"
      } else {
        this.message = "The Number is Not Armstrong"
      }
    } else {
      this.message = "Please enter the number which greater then 0"
    }
  }

}
