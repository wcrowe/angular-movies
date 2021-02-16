import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-input-markdown',
  templateUrl: './input-markdown.component.html',
  styleUrls: ['./input-markdown.component.css'],
})
export class InputMarkdownComponent implements OnInit {
  constructor() {}

  @Input()
  markdownContent = '';

  @Output()
  changeMarkdown = new EventEmitter<string>();



  ngOnInit(): void {}

  change(even) {}
}
