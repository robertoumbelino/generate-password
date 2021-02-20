import { useState } from 'react'

/**
 * When don't have functions to execute.
 */
const emptyCharacter = () => {
  const monkeys = ['🙈', '🙉', '🙊']
  return monkeys[Math.floor(Math.random() * monkeys.length)]
}

/**
 * maximum => maximum number from ASCII.
 * start => Character start from ASCII.
 */
const generateCharacter = (maximum: number, start: number) =>
  String.fromCharCode(Math.floor(Math.random() * maximum) + start)

/**
 * 26 => 26 alphabet letters.
 * 65 => 65 is the start from upper letters.
 */
const generateUpper = () => generateCharacter(26, 65)

/**
 * 26 => 26 alphabet letters.
 * 97 => 97 is the start from lower letters.
 */
const generateLower = () => generateCharacter(26, 97)

/**
 * 10 => Maximum numbers.
 * 48 => 48 is the start from numbers.
 */
const generateNumber = () => generateCharacter(10, 48)

/**
 * Get a random symbol.
 */
const generateSymbol = () => {
  const symbols = '~!@#$%^&*()_+{}":?><;.,'
  return symbols[Math.floor(Math.random() * symbols.length)]
}

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
    const functions = [
      isLower ? generateLower : undefined,
      isUpper ? generateUpper : undefined,
      isNumber ? generateNumber : undefined,
      isSymbol ? generateSymbol : undefined
    ]

    /**
     * Get only valid functions.
     */
    const validFunctions = functions.filter(fn => fn) as (() => string)[]

    return new Array(length)
      .fill('')
      .map(_ => {
        const fn =
          validFunctions[Math.floor(Math.random() * validFunctions.length)] ||
          emptyCharacter
        return fn()
      })
      .join('')
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
