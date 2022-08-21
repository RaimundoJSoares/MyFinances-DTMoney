import {
  HeaderContainer,
  HeaderContent,
  NewTransactionButton,
} from './HeaderStyles'
import * as Dialog from '@radix-ui/react-dialog'
import logo from '../../assets/logo.svg'
import { NewTransactionModal } from '../newtransactionmodal/NewTransactionModal'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logo} alt="logo" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova Transação</NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
