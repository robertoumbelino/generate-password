import styled from 'styled-components'
import { Copy } from 'styled-icons/fa-solid'
import { GearFill } from 'styled-icons/bootstrap'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  overflow-x: hidden;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
`

export const Title = styled.h1`
  color: #e2e8f0;

  display: flex;
  align-items: center;

  svg {
    margin-right: 10px;
  }
`

export const PasswordContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const Password = styled.p`
  color: #9fa4ab;
  font-size: 70px;
  text-align: center;
`

export const ClipboardButton = styled.button`
  width: 50px;
  height: 50px;
  outline: none;

  margin-top: 20px;

  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #ed64a6;
  border-radius: 50%;

  &:hover {
    opacity: 0.85;
  }
`

/**
 * Icons.
 */
export const CopyIcon = styled(Copy)`
  width: 25px;
  height: 25px;
  color: #e2e8f0;
`

export const GearIcon = styled(GearFill)`
  width: 35px;
  height: 35px;
  color: #e2e8f0;
`
