export interface Produit {
  id? : number
  titre : string
  description : string
  composition? : Produit[]
  prix : number
}
