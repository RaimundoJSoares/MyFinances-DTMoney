import * as Dialog from "@radix-ui/react-dialog";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";
import {
  ButtonTypeTransaction,
  CloseButton,
  Content,
  Overlay,
  TypeTransaction,
} from "./NewTransactionModalStyles";
import * as z from 'zod';
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "../../lib/axios";

const newTransactionFormSchema = z.object({
  descripton: z.string(),
  price : z.number(),
  category: z.string(),
  type: z.enum(['income', 'outcome']) //usamos enum para validar se o tipo é income ou outcome
})

type newTransactionFormInputs = z.infer<typeof newTransactionFormSchema>;

export function NewTransactionModal() {
  const { 
    control, //sempre que quisermos incluir uma informação em um formulário e essa informação nao vem de um input ou de qualquer elemento nativo do HTML, usaremos pelo react hook form, o formato control
    register,
     handleSubmit ,
      formState: {isSubmitting}
    } = useForm<newTransactionFormInputs>({
    resolver : zodResolver(newTransactionFormSchema),
    
  })

  async function handleCreateNewTransaction(data:newTransactionFormInputs) {
    const {descripton, price, category, type} = data;	

    await api.post('transactions', {
      descripton,
      price,
      category,
      type,
      createdAt: new Date(),
    })
  }

  return (
    
      <Dialog.Portal>
        <Overlay />

        <Content>
          <Dialog.Title>Nova Transação</Dialog.Title>
          <CloseButton>
            <X size={24} />
          </CloseButton>

          <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
            <input 
            type="text" 
            placeholder="Descrição" 
            required 
            {...register('descripton')}
            />
            <input 
            type="number" 
            placeholder="Preço"
             required 
             {...register('price', {valueAsNumber: true})}
             />
            <input 
            type="text"
             placeholder="Categoria" 
             required 
             {...register('category')}
             />

             <Controller
              control={control}
              name="type"
              render={({field}) => {
                
                return( //toda vez que o valor do meu campo type mudar, eu chamarei a função field.OnChange 
                 
               <TypeTransaction onValueChange={field.onChange} value={field.value}> 

              <ButtonTypeTransaction  variant="income" value="income">
                <ArrowCircleUp size={24} />
                Entrada
              </ButtonTypeTransaction>

              <ButtonTypeTransaction  variant="outcome" value='outcome'>
                <ArrowCircleDown size={24} />
                Saída
              </ButtonTypeTransaction>
              
            </TypeTransaction>
                )
              }}
             />

            <button type="submit" disabled={isSubmitting} >Cadastrar</button>
          </form>
        </Content>
      </Dialog.Portal>
   
  );
}
