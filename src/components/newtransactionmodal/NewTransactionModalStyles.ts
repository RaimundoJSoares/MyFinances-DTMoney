import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'

export const Overlay = styled(Dialog.Overlay)`
  position: fixed; // mesmo se tiver scrool, ele fica fixo na tela
  width: 100vw;
  height: 100vh; // força o overlay a ocupar a tela inteira

  inset: 0; // é a mesma coisa que top:0, left:0, right:0, bottom:0
  background: rgba(
    0,
    0,
    0,
    0.75
  ); // 75% de opacidade para o fundo, ou seja, fundo mais escuro
`

export const Content = styled(Dialog.Content)`
  min-width: 32rem;
  border-radius: 6px;
  padding: 2.5rem 3rem; // 2.5rem = top e bottom, 3rem = left e right
  background: ${(props) => props.theme['gray-800']};

  position: fixed; // mesmo se tiver scrool, ele fica fixo na tela, igual ao overlay

  top: 50%; //um hack
  left: 50%; //um hack
  transform: translate(
    -50%,
    -50%
  ); // centraliza o conteudo no centro da tela, um hack

  form {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    input {
      border-radius: 6px;
      border: 0;
      background: ${(props) => props.theme['gray-900']};
      color: ${(props) => props.theme['gray-300']};

      padding: 1rem;

      &::placeholder {
        color: ${(props) => props.theme['gray-500']};
      }
    }

    button[type='submit'] {
      //IMPORTANTE , colocar o type, para que essa cor, não vaze para outros botões
      height: 58px;
      border: 0; // para que o botão não tenha borda
      background: ${(props) => props.theme['green-500']};
      color: ${(props) => props.theme.white};

      font-weight: bold;
      padding: 0 1.25rem; // top, right, bottom, left
      border-radius: 6px;
      margin-top: 1.5rem;
      cursor: pointer;

      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }

      &:not(:disabled):hover {
        background: ${(props) => props.theme['green-700']};
        transition: background-color 0.3s;
      }
    }
  }
`

export const CloseButton = styled(Dialog.Close)`
  position: absolute; //como ele é relativo ao conteudoi, não tem necessidade de ser fixo

  //reseta o botão , sempre faça isso
  background: transparent; //reseta o css dele para que não fique com background
  border: 0; // para que o botão não tenha borda

  top: 1.5rem;
  right: 1.5rem;

  cursor: pointer;
  color: ${(props) => props.theme['green-500']};

  // importante, quando não tem o line-height, a caixinha do botão fica errada
  //isso é por causa do font-size, o tamanho do focus é relativo ao font-size do botão
  //para corrigir isso ou se usa font-size: 0; ou se usa line-height: 0;
  //font-size: 0;
  line-height: 0;
`

export const TypeTransaction = styled(RadioGroup.Root)`
  display: grid; // por ser um botão do lado do outro, precisa de grid
  grid-template-columns: repeat(2, 1fr); // coloca 2 botões no grid
  gap: 1rem; // espaçamento entre os botões
  margin-top: 0.5rem;
`
interface ButtonTypeTransactionProps {
  variant: 'income' | 'outcome'
}

export const ButtonTypeTransaction = styled(
  RadioGroup.Item,
)<ButtonTypeTransactionProps>`
  background: ${(props) => props.theme['gray-700']};
  padding: 1rem;
  display: flex;
  align-items: center;

  justify-content: center;
  gap: 0.5rem;
  border-radius: 6px;
  cursor: pointer;
  border: 0;

  color: ${(props) => props.theme['gray-300']};

  svg {
    color: ${(props) =>
      props.variant === 'income'
        ? props.theme['green-300']
        : props.theme['red-300']};
  }

  &[data-state='unchecked']:hover {
    background: ${(props) => props.theme['gray-600']};
    transition: background-color 0.2s;
  }

  &[data-state='checked'] {
    //quando meu RadioGroup.Item tiver como atributo cheked, ou seja, selecionado, eu vou adicionar um css a mais nele
    color: ${(props) => props.theme.white};
    background: ${(props) =>
      props.variant === 'income'
        ? props.theme['green-500']
        : props.theme['red-500']};

    svg {
      color: ${(props) => props.theme.white};
    }
  }
`
