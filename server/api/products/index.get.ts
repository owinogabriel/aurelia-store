import { products } from "~~/server/data/product"


export default defineEventHandler((event) => {
  const {category} =  getQuery(event)
  return category ? products.filter(p => p.category === category) : products // Return all products if no category is specified
})