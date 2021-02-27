import React from 'react'

/**
 * Components.
 */
import { GeneratePasswordForm } from '../Form'

/**
 * Hooks.
 */
import { useCopyClipboard } from '../../hooks/useCopyClipboard'
import { useFetchPassword } from '../../hooks/useFetchPassword'

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
export const GeneratePassword = () => {
  /**
   * Hooks.
   */
  const { handleClipboard } = useCopyClipboard()
  const { password, setPassword } = useFetchPassword()

  return (
    <Container>
      <Title>
        <GearIcon />
        Gerador de senha
      </Title>

      <GeneratePasswordForm onGeneratePassword={setPassword} />

      <PasswordContainer>
        <Password>{password}</Password>

        <ClipboardButton onClick={() => handleClipboard(password)}>
          <CopyIcon />
        </ClipboardButton>
      </PasswordContainer>
    </Container>
  )
}
