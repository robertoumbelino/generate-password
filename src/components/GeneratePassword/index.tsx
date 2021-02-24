import React, { useState } from 'react'

/**
 * Components.
 */
import GeneratePasswordForm from '../Form/components/GeneratePasswordForm'

/**
 * Styles.
 */
import {
  Title,
  CopyIcon,
  GearIcon,
  Password,
  Container,
  ClipboardButton,
  PasswordContainer
} from './styles'

/**
 * Component.
 */
const GeneratePassword = () => {
  /**
   * States.
   */
  const [password, setPassword] = useState('')

  /**
   * Copy password to clipboard.
   */
  const handleClipboard = () => {
    navigator.clipboard.writeText(password)
  }

  return (
    <Container>
      <Title>
        <GearIcon />
        Gerador de senha
      </Title>

      <GeneratePasswordForm onGeneratePassword={setPassword} />

      <PasswordContainer>
        <Password>{password}</Password>

        <ClipboardButton onClick={handleClipboard}>
          <CopyIcon />
        </ClipboardButton>
      </PasswordContainer>
    </Container>
  )
}

export default GeneratePassword
