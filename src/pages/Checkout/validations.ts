import * as zod from 'zod'

export const CheckoutFormSchema = zod.object({
  CEP: zod.string().length(7, 'Entre com um CEP válido.'),
  street: zod.string().min(1),
  streetNumber: zod.string().min(1),
  complement: zod.string(),
  district: zod.string().min(3),
  city: zod.string().min(3).max(30),
  state: zod.string().min(3).max(20),
  paymentMethod: zod.string().min(3).max(20),
})

export type CheckoutFormData = zod.infer<typeof CheckoutFormSchema>
