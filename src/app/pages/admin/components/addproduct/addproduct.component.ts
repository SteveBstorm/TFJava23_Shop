import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Stock } from 'src/app/core/models/stock.model';
import { MagasinService } from 'src/app/services/magasin.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss']
})
export class AddproductComponent {

  fg! : FormGroup
  constructor(
    private $formBuilder : FormBuilder,
    private $magasinService : MagasinService
    ) {}

  ngOnInit() {
    this.initForm()
  }

  initForm() {
    this.fg = this.$formBuilder.group({
      titre : [null, Validators.minLength(2)],
      desc : [null, Validators.required],
      prix : [null, Validators.min(0)],
      qty : [1]
    })
  }

  addProduct() {
    let newProduct : Stock = {
      quantite : this.fg.value["qty"],
      produit : {
        titre : this.fg.value["titre"],
        prix : this.fg.value["prix"],
        description : this.fg.value["desc"]
      }
    }

    this.$magasinService.ajoutProduit(newProduct)
    alert("Article Enregistré")
    this.initForm()
  }
}
