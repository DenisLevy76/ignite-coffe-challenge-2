import { ReactNode, useState } from 'react'
import { AddressContext } from '.'
import { CheckoutFormData } from '../../pages/Checkout/validations'

export const AddressContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [address, setAddress] = useState<CheckoutFormData | null>(null)

  const saveAddress = (address: any) => {
    setAddress(address)
  }

  return (
    <AddressContext.Provider
      value={{
        address,
        saveAddress,
      }}
    >
      {children}
    </AddressContext.Provider>
  )
}
