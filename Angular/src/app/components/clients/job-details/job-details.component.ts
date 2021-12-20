import { Component, OnInit } from '@angular/core';
import {UiService} from '../../../services/ui.service'

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit {

  constructor(private uiServices: UiService) { }

  ngOnInit(): void {
    
  }

}
