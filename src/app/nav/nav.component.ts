import { Component, OnInit, TemplateRef } from '@angular/core';
import { AuthService } from '../auth.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  
  public modalRef: BsModalRef; // {1}
  constructor(
    public auth: AuthService,
    private myRoute: Router,
    private modalService: BsModalService
  ) { }
  

  ngOnInit() {
  }

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template); // {3}
  }

  logout() {
    this.auth.logout();
    this.myRoute.navigate(["login"]);
    this.modalRef.hide();
  }

  goHome() {
    this.myRoute.navigate(["home"]);
  }
}
