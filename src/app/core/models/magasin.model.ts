import { Stock } from "./stock.model"

export interface Magasin {
  nom : string
  position : string
  stock : Stock[]
}
