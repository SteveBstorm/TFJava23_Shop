import { FakedemoService } from 'src/app/services/fakedemo.service';
import { PanierService } from './services/panier.service';
import { Component } from '@angular/core';
import { Stock } from './core/models/stock.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TFJavaProjetSuivi';


}
