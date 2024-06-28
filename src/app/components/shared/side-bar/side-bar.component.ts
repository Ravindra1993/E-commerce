import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  @Input() isSidebarOpen: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
    this.getSidebarMenu();
  }

  
  getSidebarMenu(){

  }
  
  productList(){

  }

  homeDetails(){

  }

  logout(){
    
  }


}
