import * as Dialog from "@radix-ui/react-dialog";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";
import {
  ButtonTypeTransaction,
  CloseButton,
  Content,
  Overlay,
  TypeTransaction,
} from "./NewTransactionModalStyles";

export function NewTransactionModal() {
  return (
    <div>
      <Dialog.Portal>
        <Overlay />

        <Content>
          <Dialog.Title>Nova Transação</Dialog.Title>
          <CloseButton>
            <X size={24} />
          </CloseButton>

          <form action="">
            <input type="text" placeholder="Descrição" required />
            <input type="number" placeholder="Preço" required />
            <input type="text" placeholder="Categoria" required />

            <TypeTransaction>

              <ButtonTypeTransaction variant="income">
                <ArrowCircleUp size={24} />
                Entrada
              </ButtonTypeTransaction>

              <ButtonTypeTransaction variant="outcome">
                <ArrowCircleDown size={24} />
                Saída
              </ButtonTypeTransaction>
              
            </TypeTransaction>

            <button type="submit">Cadastrar</button>
          </form>
        </Content>
      </Dialog.Portal>
    </div>
  );
}
