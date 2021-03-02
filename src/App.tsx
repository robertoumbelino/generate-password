import React from 'react'

/**
 * Pages.
 */
import { GeneratePassword } from './pages/GeneratePassword'

/**
 * Styles.
 */
import { GlobalStyles } from './styles/GlobalStyles'

export const App = () => (
  <>
    <GeneratePassword />

    <GlobalStyles />
  </>
)
