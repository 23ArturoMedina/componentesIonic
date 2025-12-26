import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { AvatarComponent } from '../components/avatar/avatar.component';
import { ButtonComponent } from '../components/button/button.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    AvatarComponent,
    ButtonComponent
  ]
})
export class HomePage {}
