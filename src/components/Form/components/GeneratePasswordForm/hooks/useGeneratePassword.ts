import { useState } from 'react'

/**
 * Setup.
 */
const empty = ''
const monkeys = ['🙈', '🙉', '🙊']
const letters = 'abcdefghijqklmnopqrstuvwxyz'
const numbers = '0123456789'
const symbols = '~!@#$%^&*()_+{}":?><;.,'

/**
 * Get a random value from list.
 */
const randomize = (list: string | string[]) =>
  list[Math.floor(Math.random() * list.length)]

/**
 * Hook.
 */
export const useGeneratePassword = () => {
  /**
   * States.
   */
  const [length, setLength] = useState(12)
  const [isLower, setIsLower] = useState(true)
  const [isUpper, setIsUpper] = useState(true)
  const [isNumber, setIsNumber] = useState(true)
  const [isSymbol, setIsSynbol] = useState(false)

  /**
   * Generate a random password.
   */
  const generatePassword = () => {
    /**
     * List of all possible variations.
     */
    const variations = [
      isLower ? letters : empty,
      isUpper ? letters.toUpperCase() : empty,
      isNumber ? numbers : empty,
      isSymbol ? symbols : empty
    ].filter(characters => characters)

    /**
     * Randomize variation and character.
     */
    const randomizeCharacter = () => {
      /**
       * Characters to randomize.
       */
      const characters = randomize(variations)

      return randomize(characters || monkeys)
    }

    return new Array(length).fill('').map(randomizeCharacter).join('')
  }

  return {
    /**
     * States.
     */
    length,
    setLength,

    isLower,
    setIsLower,

    isUpper,
    setIsUpper,

    isNumber,
    setIsNumber,

    isSymbol,
    setIsSynbol,

    /**
     * Functions.
     */
    generatePassword
  }
}
