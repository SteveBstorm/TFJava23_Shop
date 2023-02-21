import { Injectable } from '@angular/core';
import { Stock } from '../core/models/stock.model';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  monPanier : Stock[] = []
  constructor() { }
}
