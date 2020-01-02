import { BypassSecurityPipe } from './pipe/bypass-security.pipe';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [HeaderComponent, BypassSecurityPipe, FooterComponent],
  imports: [MatToolbarModule, MatButtonModule, RouterModule],
  exports: [HeaderComponent, BypassSecurityPipe, FooterComponent]
})
export class SharedModule {}
