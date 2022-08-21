import { useContext } from "react";
import { TransactionsContext } from "../context/TransactionsContext";

export function useSummary() {
  const { transactions } = useContext(TransactionsContext);

  //vamos converter o array de objetos usando reducer em objeto, que terá{ 'income' : 0 , outcome: 0, total: 0} income é total de entradas, outcome, o total de saidas, e total é a subtração dos 2
  //ou seja, quero reduzir todo aquele array com todas aquelas opções, em apenas essas estruturas de dados { 'income' : 0 , outcome: 0, total: 0}
  const summaryResult = transactions.reduce(
    (accumulator, transaction) => {
      if (transaction.type === "income") {
        accumulator.income += transaction.price;
        accumulator.total += transaction.price;
      } else {
        accumulator.outcome += transaction.price;
        accumulator.total -= transaction.price;
      }

      return accumulator;
    },
    {
      //acumulator é esse objeto aqui
      income: 0,
      outcome: 0,
      total: 0,
    }
  );
  //reduce é um metodo que permite a gente percorrer um array e reduzir esse array, a alguma nova estrutura de dados
  //nesse caso será um objeto

  return summaryResult;
}
