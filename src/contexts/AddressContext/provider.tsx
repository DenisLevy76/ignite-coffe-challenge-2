import { ReactNode, useState } from 'react'
import { AddressContext } from '.'

export const AddressContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [address, setAddress] = useState<any>(null)

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
