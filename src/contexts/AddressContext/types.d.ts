import { CheckoutFormData } from '../../pages/Checkout/validations'

export interface AddressContextData {
  address: CheckoutFormData | null
  saveAddress: (address: CheckoutFormData | null) => void
}
