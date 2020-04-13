import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import * as mdData from 'raw-loader!../../../assets/docs/practise.md';

@Component({
  selector: 'app-practise',
  templateUrl: './practise.component.html',
  styleUrls: ['./practise.component.scss'],
})
export class PractiseComponent implements OnInit {
  data = mdData.default;

  constructor(title: Title) {
    title.setTitle('Ledge DevOps 知识平台 - 最佳实践');
  }

  ngOnInit(): void {}
}
