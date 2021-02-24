/**
 * Hook.
 */
export const useCopyClipboard = () => {
  /**
   * Copy text to clipboard.
   */
  const handleClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  return { handleClipboard }
}
