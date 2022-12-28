import { ICoffee } from '../../@types/ICoffee'

export interface ICoffeeCart extends ICoffee {
  quantity: number
}

export interface CartContextData {
  cart: ICoffeeCart[]
  addCoffeeToCart: (coffee: ICoffeeCart) => void
  removeCoffeeFromCart: (coffeeId: number) => void
}
