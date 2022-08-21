import styled, { css } from 'styled-components'

export const SummaryContainer = styled.section`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: grid; // para que o conteúdo fique alinhado no centro, no caso o logo e o botão fdicam com um espaço entre eles, verticalmente alinhados ao centro
  grid-template-columns: repeat(
    3,
    1fr
  ); //porque tem 3 colunas dentro do grid , todas com mesmo tamanho
  gap: 2rem; // espaço entre as colunas
  margin-top: -5rem; // esse negativo é pra que o conteúdo do summary fique por cima do header, como se estivesse invadindo o header
`

interface SummaryCardsProps {
  variant?: 'green'
}

export const SummaryCard = styled.div<SummaryCardsProps>`
  background: ${(props) => props.theme['gray-600']};
  border-radius: 6px;
  padding: 2rem; // espaço entre os cards

  header {
    display: flex; // para que o conteúdo fique alinhado no centro, no caso o logo e o botão fdicam com um espaço entre eles, verticalmente alinhados ao centro
    align-items: center; // para que o conteúdo fique alinhado no centro
    justify-content: space-between; // distancia o conteúdo
    color: ${(props) => props.theme['gray-300']};
  }

  strong {
    display: block; //por padrão a tag strong vem com display inline, então é necessario colocar block, para podermos aplicar a margin vertical
    margin-top: 1rem;
    font-size: 2rem;
  }

  ${(props) =>
    props.variant === 'green' &&
    css`
      // se a variant for  igual green, aplica o estilo
      background: ${(props) => props.theme['green-700']};
    `}
`
