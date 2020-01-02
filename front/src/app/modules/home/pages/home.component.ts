import { AuthenticationService } from 'app/core/authentication/authentication.service';
import { Component, OnInit } from '@angular/core';
import { ConstantsService } from 'app/shared/services/constant-service/constant.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  name: string;

  constructor(public authService: AuthenticationService) {
    this.name = authService.getUsername();
  }
}
