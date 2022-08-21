import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme['gray-900']};
  padding: 2.5rem 0 7.5rem; // top, right, bottom, left
`

export const HeaderContent = styled.div`
  //conteúdo centralizado
  width: 100%;
  max-width: 1120px; // width of the container maximo
  margin: 0 auto; // para contralizare o centro do conteudo
  padding: 0 1.5rem; // top, right, bottom, left , o conteúdo não fica colado nas laterais se ele for menor que 1120px, ele fica centralizado

  display: flex; // para que o conteúdo fique em linha
  justify-content: space-between; // para que a distancia entre os elementos seja igual, no caso o logo e o botão fdicam com um espaço entre eles
  align-items: center; // para que o conteúdo fique alinhado no centro, no caso o logo e o botão fdicam com um espaço entre eles, verticalmente alinhados ao centro
`

export const NewTransactionButton = styled.button`
  height: 50px;
  border: 0; // para que o botão não tenha borda
  background: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme.white};
  font-weight: bold;
  padding: 0 1.25rem; // top, right, bottom, left
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s; // quando usado fora do hover ele faz animação de mudança de cor tanto na hora de colocar o mouse em cima quanto na hora de tirar

  &:hover {
    background: ${(props) => props.theme['green-700']};
  }
`
