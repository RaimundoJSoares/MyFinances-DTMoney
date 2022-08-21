import styled from 'styled-components'

export const TransactionsContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 0; // 4 em cima, auto nas laterais 0 embaixo,  espaço entre o header e o conteúdo, e o conteúdo e o footer
  padding: 0 1.5rem;
`

export const TransactionsTable = styled.table`
  width: 100%;
  border-collapse: separate; // separa as bordas das células da tabela
  border-spacing: 0 0.5rem; // 0 nas laterais e 0.5  verticalmente , espaçamento das bordas das células da tabela
  margin-top: 1.5rem;

  td {
    padding: 1.25rem 2rem;
    background: ${(props) => props.theme['gray-700']};

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
`
interface TransactionsColorHightlightProps {
  variant: 'income' | 'outcome'
}

export const TransactionsColorHightlight = styled.span<TransactionsColorHightlightProps>`
  color: ${(props) =>
    props.variant === 'income'
      ? props.theme['green-300']
      : props.theme['red-300']};
`
