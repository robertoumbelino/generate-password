import { useState } from 'react'

/**
 * Hook.
 */
export const useFetchPassword = () => {
  /**
   * States.
   */
  const [password, setPassword] = useState('')

  return { password, setPassword }
}
