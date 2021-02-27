import React from 'react'
import GithubCorner from 'react-github-corner'

/**
 * Components.
 */
import { FullPage } from './components/Page/components/FullPage'
import { GeneratePassword } from './components/GeneratePassword/components/Generate'

/**
 * Styles.
 */
import { GlobalStyles } from './styles/GlobalStyles'

export const App = () => (
  <>
    <FullPage backgroundColor="#141821">
      <GeneratePassword />
    </FullPage>

    <GithubCorner
      bannerColor="#ed64a6"
      href="https://github.com/robertoumbelino/generate-password"
    />
    <GlobalStyles />
  </>
)
