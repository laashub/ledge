import { Component, OnInit } from '@angular/core';
import * as mdData from 'raw-loader!../../../assets/docs/manual.md';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-manual',
  templateUrl: './manual.component.html',
  styleUrls: ['./manual.component.scss'],
})
export class ManualComponent implements OnInit {
  data = mdData.default;

  constructor(title: Title) {
    title.setTitle('Ledge DevOps 知识平台 - 操作手册');
  }

  ngOnInit(): void {}
}
