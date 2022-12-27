export interface CoffeCardComponentProps {
  product: {
    id: string
    title: string
    imageUrl: string
    price: number
    shortDescription: string
    tags: string[]
    imageAlt?: string
  }
}
