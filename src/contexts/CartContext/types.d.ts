import { ICoffee } from '../../@types/ICoffee'

export interface ICoffeeCart extends ICoffee {
  quantity: number
}

export interface CartContextData {
  cart: ICoffeeCart[]
  totalItemsPrice: number
  deliveryFee: number
  totalPrice: number
  addCoffeeToCart: (coffee: ICoffeeCart) => void
  removeCoffeeFromCart: (coffeeId: number) => void
  updateCoffeeQuantity: (coffeeId: number, quantity: number) => void
}
