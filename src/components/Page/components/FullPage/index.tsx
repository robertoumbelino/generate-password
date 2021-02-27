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
export const FullPage = ({ children, backgroundColor }: Props) => (
  <Container backgroundColor={backgroundColor}>{children}</Container>
)
