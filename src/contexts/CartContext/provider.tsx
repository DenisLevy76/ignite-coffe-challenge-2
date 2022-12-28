import { ReactNode, useEffect, useState } from 'react'
import { CartContext } from '.'
import { ICoffeeCart } from './types'

export const CartContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<ICoffeeCart[]>([])

  const addCoffeeToCart = (coffee: ICoffeeCart) => {
    setCart((state) => [...state, coffee])
  }

  const removeCoffeeFromCart = (coffeeId: number) => {
    setCart((state) => state.filter((coffee) => coffee.id !== coffeeId))
  }

  useEffect(() => {
    console.log(cart)
  }, [cart])

  return (
    <CartContext.Provider
      value={{ cart, addCoffeeToCart, removeCoffeeFromCart }}
    >
      {children}
    </CartContext.Provider>
  )
}
