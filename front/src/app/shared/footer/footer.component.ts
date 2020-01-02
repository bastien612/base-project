import { Component, OnInit } from '@angular/core';
import { ConstantsService } from '../services/constant-service/constant.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  readonly version: string;

  constructor(public constantsService: ConstantsService) {
    this.version = this.constantsService.getProperty('version');
  }

  ngOnInit() {}
}
