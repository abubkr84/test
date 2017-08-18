import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-field-display',
  templateUrl: './field-display.component.html',
  styleUrls: ['./field-display.component.scss']
})
export class FieldDisplayComponent implements OnInit {

  @Input()
  label: string;


  @Input()
  value: any;
  constructor() { }
  ngOnInit() {
  }

}
