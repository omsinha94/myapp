import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../common.service'

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.scss']
})
export class Component2Component implements OnInit {

  userData = [];
  filterData = [];
  searchCategory: 'name';
  constructor(private commonService: CommonService) {
    this.commonService.getMessage().subscribe(data => {
      if (Object.keys(data).length) {
        this.userData.push(data);
      }
      this.filterData = this.userData;
    })
  }

  ngOnInit() {
  }

  remove(index) {
    this.userData.splice(index, 1);
  }

  enableEdit(i) {
    console.log(this.userData)
    this.userData.forEach(element => {
      element.edit = false;
    });
    this.userData[i].edit = true;
  }

  submitEdit(obj, i) {
    console.log(this.userData)
    this.userData[i].edit = false;
    this.userData[i] = obj;
  }

  filter(value) {
    if (this.searchCategory == 'name') {
      this.userData = this.filterData.filter(data => data.name.indexOf(value) != -1);
    } else {
      this.userData = this.filterData.filter(data => data.email.indexOf(value) != -1);
    }
  }

  changeSearchCategory(event) {
    console.log(event.target.value);
    this.searchCategory = event.target.value;
  }

}
