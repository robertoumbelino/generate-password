import React, { HTMLAttributes, ReactNode } from 'react'

/**
 * Styles.
 */
import { Container } from './styles'

/**
 * Component properties.
 */
export type Props = {
  children: ReactNode
  backgroundColor?: string
} & HTMLAttributes<HTMLDivElement>

/**
 * Component.
 */
const FullPage = ({ children, backgroundColor }: Props) => (
  <Container backgroundColor={backgroundColor}>{children}</Container>
)

export default FullPage
