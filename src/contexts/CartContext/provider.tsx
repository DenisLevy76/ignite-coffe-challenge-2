import { ReactNode, useState } from 'react'
import { CartContext } from '.'
import { ICoffeeCart } from './types'
import { produce } from 'immer'

export const CartContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<ICoffeeCart[]>([])
  const cartWithUpdatedPrices = cart.map((coffee) => {
    return {
      ...coffee,
      price: coffee.price * coffee.quantity,
    }
  })

  const totalItemsPrice = cartWithUpdatedPrices.reduce(
    (sum, coffe) => sum + coffe.price,
    0,
  )
  const deliveryFee = 3.5
  const totalPrice = totalItemsPrice + deliveryFee

  const addCoffeeToCart = (coffee: ICoffeeCart) => {
    const coffeeIndexInCart = cart.findIndex(
      (coffeeCart) => coffeeCart.id === coffee.id,
    )

    if (coffeeIndexInCart >= 0) {
      setCart(
        produce((draftCart) => {
          draftCart[coffeeIndexInCart] = {
            ...draftCart[coffeeIndexInCart],
            quantity: draftCart[coffeeIndexInCart].quantity + 1,
          }
        }),
      )
    } else {
      setCart(
        produce((draftCart) => {
          draftCart.push(coffee)
        }),
      )
    }
  }

  const removeCoffeeFromCart = (coffeeId: number) => {
    setCart((state) => state.filter((coffee) => coffee.id !== coffeeId))
  }

  const updateCoffeeQuantity = (coffeeId: number, quantity: number) => {
    if (quantity === 0) return removeCoffeeFromCart(coffeeId)
    if (quantity === 5) return

    setCart(
      produce((draftCart) => {
        const coffeeIndex = draftCart.findIndex(
          (coffe) => coffe.id === coffeeId,
        )

        if (coffeeIndex >= 0)
          draftCart[coffeeIndex] = {
            ...draftCart[coffeeIndex],
            quantity,
          }
      }),
    )
  }

  return (
    <CartContext.Provider
      value={{
        cart: cartWithUpdatedPrices,
        totalItemsPrice,
        deliveryFee,
        totalPrice,
        addCoffeeToCart,
        removeCoffeeFromCart,
        updateCoffeeQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
