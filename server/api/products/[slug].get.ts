import { products } from "~~/server/data/product"

// Get a single product by slug
export default defineEventHandler((event) => {
  const product =  products.find(p => p.slug === getRouterParam(event, 'slug'))
  if(!product){
    throw createError({statusCode: 404, statusMessage: 'Product not found'})
  }
  return product
})