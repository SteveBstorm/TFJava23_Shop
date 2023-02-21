export interface Produit {
  titre : string
  description : string
  composition? : Produit[]
  prix : number
}
