import { Produit } from './../core/models/produit.model';
import { environment } from 'src/environment';
import { HttpClient } from '@angular/common/http';
import { Magasin } from './../core/models/magasin.model';
import { Injectable } from '@angular/core';
import { Stock } from '../core/models/stock.model';
import { mergeMap, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MagasinService {

  // monMagasin : Magasin = {
  //   nom : 'Touta10balle',
  //   position : 'Chez moi',
  //   stock : [
  //     {produit : {titre : 'Coca', description : 'Trop sucré', prix : 2.10}, quantite : 10},
  //     {produit : {titre : 'Iphone', description : 'Trop cher', prix : 1232.10}, quantite : 3}
  //   ]
  // }

  monMagasin! : Magasin
  private url :string = environment.url
  constructor(
    private $client : HttpClient
  ) { }

  ajoutQty() {}

  reduireQty(article : Stock) : Observable<void> | null{
    if(article.quantite > 0) {
      article.quantite--
      return this.$client.patch<void>(this.url+"/stock/"+article.id, article)
    }
    return null
  }

  ajoutProduit(newStock : Stock) : Observable<void> {
    return this.$client.post<void>(this.url+"/stock", newStock)
    //this.monMagasin.stock.push(newStock)
  }

  getProductById(id : number) : Observable<Stock> {
    return this.$client.get<Stock>(this.url+"/stock/"+id)
  }

  getMagasin() : Observable<Magasin> {
    return this.$client.get<Magasin>(this.url+"/magasin/1").pipe(mergeMap((m : Magasin) => {
     return this.$client.get<Stock[]>(this.url+"/stock?magasinId=1").pipe(map((s : Stock[]) =>
      {
        m.stock = s
            return m
      }
     ))
    }
    ))


    // .subscribe((data : Magasin) => {
    //   this.monMagasin = data

    //   this.monMagasin.stock = []
    //   this.monMagasin.stockIds?.forEach(el => {
    //     console.log("toto")
    //     this.$client.get<Stock>(this.url+"/stock/"+el.idStock)
    //       .subscribe((data : Stock) =>
    //       {
    //         this.monMagasin.stock.push(data)
    //         this.$client.get<Produit>(this.url+"/produits/"+data.idproduit)
    //           .subscribe((p : Produit) => {
    //             let index = this.monMagasin.stock.findIndex(x => x.idproduit == p.id)
    //             this.monMagasin.stock[index].produit = p
    //             console.log(this.monMagasin)
    //           })
    //       })
    //   })



  }
}
