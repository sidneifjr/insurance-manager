// import { env } from '@/env'

/**
 * A fetch API wrapper.
 *
 * Example:
 *
 * async function getProducts(): Promise<Product[]> {
 *  const products = await api('/products')
 *
 *  return products
 * }
 **/

export async function api(path: string, init?: RequestInit) {
  // const baseUrl = env.NEXT_PUBLIC_API_BASE_URL
  const baseUrl = 'http://localhost:3001'
  const url = new URL(path, baseUrl)

  try {
    const response = await fetch(url, init)

    if (!response.ok) {
      const errorText = await response.text()
      throw new Error(`Erro na requisição: ${errorText}`)
    }

    const data = await response.json()

    return data
  } catch (error) {
    console.error(error)

    throw error
  }
}
