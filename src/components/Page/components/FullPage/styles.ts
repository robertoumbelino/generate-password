import styled, { css } from 'styled-components'

/**
 * Component properties.
 */
import { Props } from '.'

export const Container = styled.div<Props>`
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  ${({ backgroundColor }) =>
    backgroundColor &&
    css`
      background-color: ${backgroundColor};
    `}
`
