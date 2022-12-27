export interface CoffeCardComponentProps {
  product: {
    title: string
    imageUrl: string
    price: number
    shortDescription: string
    tags: string[]
    imageAlt?: string
  }
}
