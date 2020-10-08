import React, { createContext, useCallback, useContext, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-community/async-storage'
import api from '../services/api'

export interface User {
  id: string;
  name: string;
  email: string;
  avatar_url: string;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: User;
  loading: boolean;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
  updateUser(user: User): Promise<void>;
}


interface AuthState {
  token: string;
  user: User;
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>({} as AuthState)
  const [loading, setLoanding] = useState(true)

  useEffect(() => {
    async function loadStorageData(): Promise<void> {
      const [token, user] = await AsyncStorage.multiGet([
        '@Barber:token',
        '@Barber:user'
      ])

      if (token[1] && user[1]) {
        api.defaults.headers.authorization = `Bearer ${token[1]}`

        setData({ token: token[1], user: JSON.parse(user[1]) })
      }

      setLoanding(false)
    }

    loadStorageData()
  }, [])

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('sessions', {
      email, 
      password,
    })
    
    const { token, user } = response.data

    await AsyncStorage.multiSet([
      ['@Barber:token', token],
      ['@Barber:user', JSON.stringify(user)]
    ])

    api.defaults.headers.authorization = `Bearer ${token}`

    setData({ token, user })
  }, [])

  const signOut = useCallback(async () => {
    await AsyncStorage.multiRemove(['@Barber:token', '@Barber:user'])

    setData({} as AuthState)
  }, [])

  const updateUser = useCallback(async (user: User) => {
    await AsyncStorage.setItem('@GoBarber:user', JSON.stringify(user))

    setData({
      token: data.token,
      user,
    })
  }, [])

  return (
    <AuthContext.Provider value={{ user: data.user, loading, signIn, signOut, updateUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }

  return context
}