import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LanguageBundle } from './../../common-file/language-bundle';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [LanguageBundle]
})
export class NavbarComponent implements OnInit {
  queryParams: string;
  constructor(private router: Router, private langBundle: LanguageBundle, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.queryParams = window.location.hash.split('/')[1] || "";
  }

  tab(event, nav?) {
    let ele = event.target;
    let parentNode = ele.parentElement.children;
    if (parentNode.length) {
      for (let i = 0; i < parentNode.length; i++) {
        parentNode[i].classList.contains('active') ? parentNode[i].classList.remove('active') : parentNode[i];
      }
    }
    ele.classList.add('active');
    if (nav) {
      this.router.navigate([nav]);
    }
  }

}
