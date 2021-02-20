import React from 'react'

/**
 * Components.
 */
import FullPage from './components/Page/components/FullPage'
import GeneratePasswordForm from './components/Form/components/GeneratePasswordForm'

/**
 * Styles.
 */
import GlobalStyles from './styles/GlobalStyles'

const App = () => (
  <>
    <FullPage backgroundColor="#141821">
      <GeneratePasswordForm />
    </FullPage>

    <GlobalStyles />
  </>
)

export default App
