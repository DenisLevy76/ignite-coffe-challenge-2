import { useContext } from 'react'
import { AddressContext } from '../contexts/AddressContext'

export const useUserAddress = () => {
  const addressContext = useContext(AddressContext)

  return addressContext
}
