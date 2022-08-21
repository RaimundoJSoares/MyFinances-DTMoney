import { useContext } from 'react'
import { Header } from '../../components/header/Header'
import { Summary } from '../../components/summary/Summary'
import { TransactionsContext } from '../../context/TransactionsContext'
import { dataFormatter, priceFormatter } from '../../utils/formatter'
import { SearchForm } from './searchform/SearchForm'
import {
  TransactionsColorHightlight,
  TransactionsContainer,
  TransactionsTable,
} from './TransactionsStyles'

export function Transactions() {
  const { transactions } = useContext(TransactionsContext)

  return (
    <>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            {transactions.map((item) => {
              return (
                <tr key={item.id}>
                  <td width="50%"> {item.description} </td>
                  <td>
                    <TransactionsColorHightlight variant={item.type}>
                      {item.type === 'outcome' && '- '}
                      {priceFormatter.format(item.price)}
                    </TransactionsColorHightlight>
                  </td>
                  <td>{item.category}</td>
                  <td>{dataFormatter.format(new Date(item.createdAt))}</td>
                </tr>
              )
            })}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </>
  )
}
