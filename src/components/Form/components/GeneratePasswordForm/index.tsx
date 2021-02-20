import React, { FormEvent, useState } from 'react'

/**
 * Hooks.
 */
import { useGeneratePassword } from './hooks/useGeneratePassword'

/**
 * Styles.
 */
import {
  Form,
  Field,
  Label,
  Title,
  Button,
  Fields,
  GearIcon,
  Password,
  PlayIcon,
  Container,
  InputContainer,
  RangeContainer,
  SwitchContainer
} from './styles'

/**
 * Component.
 */
const GeneratePasswordForm = () => {
  /**
   * Hooks.
   */
  const {
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

    generatePassword
  } = useGeneratePassword()

  /**
   * States.
   */
  const [password, setPassword] = useState(generatePassword)

  /**
   * Generate random password.
   */
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const randomPassword = generatePassword()

    setPassword(randomPassword)
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Title>
          <GearIcon />
          Gerador de senha
        </Title>

        <Fields>
          <Field>
            <Label>Caracteres: {length}</Label>

            <InputContainer>
              <Label>4</Label>

              <RangeContainer>
                <input
                  type="range"
                  min={4}
                  max={32}
                  value={length}
                  onChange={e => setLength(+e.target.value)}
                />
              </RangeContainer>

              <Label>32</Label>
            </InputContainer>
          </Field>
        </Fields>

        <Fields>
          <Field>
            <Label>Incluir letras minúsculas</Label>

            <InputContainer>
              <SwitchContainer>
                <input
                  id="is-lower"
                  type="checkbox"
                  checked={isLower}
                  onChange={e => setIsLower(e.target.checked)}
                />
                <label htmlFor="is-lower"></label>
              </SwitchContainer>
            </InputContainer>
          </Field>

          <Field>
            <Label>Incluir letras maiúsculas</Label>

            <InputContainer>
              <SwitchContainer>
                <input
                  id="is-upper"
                  type="checkbox"
                  checked={isUpper}
                  onChange={e => setIsUpper(e.target.checked)}
                />
                <label htmlFor="is-upper"></label>
              </SwitchContainer>
            </InputContainer>
          </Field>

          <Field>
            <Label>Incluir números</Label>

            <InputContainer>
              <SwitchContainer>
                <input
                  id="is-number"
                  type="checkbox"
                  checked={isNumber}
                  onChange={e => setIsNumber(e.target.checked)}
                />
                <label htmlFor="is-number"></label>
              </SwitchContainer>
            </InputContainer>
          </Field>

          <Field>
            <Label>Incluir símbolos</Label>

            <InputContainer>
              <SwitchContainer>
                <input
                  id="is-symbol"
                  type="checkbox"
                  checked={isSymbol}
                  onChange={e => setIsSynbol(e.target.checked)}
                />
                <label htmlFor="is-symbol"></label>
              </SwitchContainer>
            </InputContainer>
          </Field>
        </Fields>

        <Fields>
          <Button type="submit">
            <PlayIcon />
          </Button>
        </Fields>
      </Form>

      <Password>{password}</Password>
    </Container>
  )
}

export default GeneratePasswordForm
