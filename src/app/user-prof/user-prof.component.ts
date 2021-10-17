import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-user-prof',
  templateUrl: './user-prof.component.html',
  styleUrls: ['./user-prof.component.css']
})
export class UserProfComponent implements OnInit {

  @Input() username='';
  @Input() password='';
  @Input() email='';
  @Input() phone='';
  @Input() gender='';
  @Input() secretQuestion='';
  @Input() answer='';
  @Input() job='';
  @Input() description='';
  @Input() salary='';
  constructor() { }

  ngOnInit(): void {
  }

}
