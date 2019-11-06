import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {
  username: string;
  clicks: number[];
  clicked: boolean;
  clickCounter: number;

  constructor() {
    this.username = '';
    this.clicks = [];
    this.clickCounter = 0;
    this.clicked = true;
  }

  onClick() {
    this.clicked = !this.clicked;
    this.clickCounter++;
    this.clicks.push(this.clickCounter);
  }

  ngOnInit() {
  }

  onReset() {
    this.username = '';
  }

}
