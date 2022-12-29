import { ReactNode, useState } from 'react'
import { AddressContext } from '.'

export const AddressContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [address, setAddress] = useState<any>({})

  return (
    <AddressContext.Provider
      value={{
        address,
        setAddress,
      }}
    >
      {children}
    </AddressContext.Provider>
  )
}
