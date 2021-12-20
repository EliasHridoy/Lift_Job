import { Component, OnInit } from '@angular/core';
import {UiService} from '../../services/ui.service'
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
hideFooter:boolean;
  constructor() { 
    this.hideFooter = true;
  }

  ngOnInit(): void {
  }

}
