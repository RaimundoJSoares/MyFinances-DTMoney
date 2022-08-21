import styled from 'styled-components'

export const SearchFormStyle = styled.form`
  display: flex;
  gap: 1rem;

  input {
    flex: 1;
    border-radius: 6px;
    border: 0;
    background: ${(props) => props.theme['gray-900']};
    color: ${(props) => props.theme['gray-300']};
    padding: 1rem;

    &::placeholder {
      color: ${(props) => props.theme['gray-500']};
    }
  }

  button {
    display: flex; ///fica mais facil pra alinhar o icone e o texto, principalmente quando eles não tem tamanhos iguais
    align-items: center;
    gap: 0.75rem; //distância entre o texto e o icone

    border: 0;
    padding: 1rem;
    background: transparent;

    border: 1px solid ${(props) => props.theme['green-300']};
    color: ${(props) => props.theme['green-300']};
    font-weight: bold;
    border-radius: 6px;
    cursor: pointer;

    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      //aplica o hover, somente se ele não estiver desabilitado
      background: ${(props) => props.theme['green-500']};
      border: ${(props) => props.theme['green-500']};
      color: ${(props) => props.theme.white};
      transition: background-color 0.2s color 0.2s border-color 0.2s;
    }
  }
`
