import { MagnifyingGlass } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { SearchFormStyle } from './SearchFormStyle'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { TransactionsContext } from '../../../context/TransactionsContext'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema> // retorna a tipagem dos campos do formulario

export function SearchForm() {
  const { fetchTransactions } = useContext(TransactionsContext)

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchTransactions(data: SearchFormInputs) {
    // aqui recebo os dados e o formato dos dados que é o Searchforminput
    // transformando a função em asyncrona, podemos simular uma requisição pra uma api, colocando tempo
    await fetchTransactions(data.query)
  }

  return (
    <SearchFormStyle onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
        type="text"
        placeholder="Busque por transações"
        {...register('query')} // nomeamos de query quando fazemos busca e essa busca nao é um campo especifico, usamos query
      />

      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchFormStyle>
  )
}
