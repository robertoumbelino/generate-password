import React from 'react'
import GithubCorner from 'react-github-corner'

/**
 * Components.
 */
import { FullPage } from '../components/Page/components/FullPage'
import { Generate } from '../components/GeneratePassword/components/Generate'

/**
 * Page.
 */
export const GeneratePassword = () => (
  <FullPage backgroundColor="#141821">
    <Generate />

    <GithubCorner
      bannerColor="#ed64a6"
      href="https://github.com/robertoumbelino/generate-password"
    />
  </FullPage>
)
