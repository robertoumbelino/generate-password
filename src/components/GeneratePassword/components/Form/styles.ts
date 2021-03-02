import styled from 'styled-components'
import { PlayFill } from 'styled-icons/bootstrap'

export const FormContainer = styled.form`
  width: 95%;

  border-radius: 10px;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`

export const Field = styled.div`
  width: 100%;

  &:not(:last-child) {
    margin-right: 20px;
  }
`

export const Fields = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 10px;
  justify-content: center;
`

export const Label = styled.span`
  color: #e2e8f0;
  font-size: 10px;
  font-weight: bold;
  text-transform: uppercase;
`

export const InputContainer = styled.div`
  width: 100%;
  height: 60px;

  padding: 20px;

  background-color: #2d3748;
  border-radius: 10px;

  display: flex;

  & > ${Label} {
    font-size: 16px;
  }
`

export const Button = styled.button`
  width: 80px;
  height: 80px;
  outline: none;
  margin-top: 20px;

  background-color: #ed64a6;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #e2e8f0;
  font-size: 16px;
  font-weight: medium;

  cursor: pointer;

  &:hover {
    opacity: 0.85;
  }

  & > svg {
    margin-left: 5px;
  }
`

export const SwitchContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;

  input[type='checkbox'] {
    visibility: hidden;
    position: absolute;
    margin-left: -9999px;
  }

  label {
    cursor: pointer;
    outline: none;
    display: block;
    position: relative;
    user-select: none;

    top: -4px;
    width: 60px;
    height: 30px;
    padding: 2px;
    border-radius: 20px;
  }

  label::before,
  label::after {
    top: 1px;
    left: 1px;
    bottom: 1px;
    content: '';
    display: block;
    position: absolute;
  }

  label::before {
    right: 1px;
    transition: background 0.4s;
    border-radius: 20px;
    background-color: #e2e8f0;
  }

  label::after {
    width: 32px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    transition: all 0.4s;
    border-radius: 100%;
    background-color: #fff;
  }

  input:checked + label:before {
    background-color: #ed64a6;
  }

  input:checked + label:after {
    transform: translateX(28px);
  }
`

export const RangeContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;

  input {
    width: 95%;
    height: 15px;
    outline: none;
    background: #ed64a6;
    border-radius: 5px;
    -webkit-appearance: none;
  }

  input::-webkit-slider-thumb {
    width: 25px;
    cursor: pointer;
    height: 25px;
    appearance: none;
    background: #fff;
    border-radius: 50%;
    -webkit-appearance: none;
  }

  input::-moz-range-thumb {
    width: 25px;
    cursor: pointer;
    height: 25px;
    background: #fff;
    border-radius: 50%;
  }
`

/**
 * Icons.
 */
export const PlayIcon = styled(PlayFill)`
  width: 45px;
  height: 45px;
  color: #e2e8f0;
`
