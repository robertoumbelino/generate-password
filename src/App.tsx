import React from 'react'
import GithubCorner from 'react-github-corner'

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

    <GithubCorner
      bannerColor="#ed64a6"
      href="https://github.com/robertoumbelino/generate-password"
    />
    <GlobalStyles />
  </>
)

export default App
