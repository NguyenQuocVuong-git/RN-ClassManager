import axios from 'axios'
import { API_BASE_URL } from '@env'

interface RegisterParams {
  fullName: string
  email: string
  password: string
}

interface RegisterResponse {
  token: string
  user: { id: number; email: string }
}

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 10000,
})

export const register = async ({
  fullName,
  email,
  password,
}: RegisterParams) => {
  try {
    const response = await api.post('/users/create', {
      fullName,
      email,
      password,
    })
    console.log('🚀 ~ response:', response)
    return response.data as RegisterResponse
  } catch (error) {
    console.log('🚀 ~ error:', error)
    throw error
  }
}
