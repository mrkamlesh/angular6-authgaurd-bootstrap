import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-inventory',
  templateUrl: './app-inventory.component.html',
  styleUrls: ['./app-inventory.component.css']
})
export class AppInventoryComponent implements OnInit {

  constructor(
    public _router: Router
  ) { }

  ngOnInit() {
  }

  goHome(): void { 
    this._router.navigate(['/home']); 
  } 
}
