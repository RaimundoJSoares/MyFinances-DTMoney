import { Header } from "../../components/header/Header";
import { Summary } from "../../components/summary/Summary";
import { SearchForm } from "./searchform/SearchForm";
import { TransactionsColorHightlight, TransactionsContainer, TransactionsTable } from "./TransactionsStyles";

export function Transactions(){
    return(
        <>
            <Header/>
            <Summary/>

            <TransactionsContainer>
            <SearchForm/>
            <TransactionsTable>  
                <tbody>
                    <tr>
                        <td width="50%"> Desenvolvimento do site </td>
                        <td> <TransactionsColorHightlight variant="income">R$ 12.000,00</TransactionsColorHightlight> </td>
                        <td>Venda</td>
                        <td>25/7/2022</td>
                    </tr>
                    <tr>
                        <td width="50%"> Desenvolvimento do site </td>
                        <td><TransactionsColorHightlight variant="outcome">R$ 12.000,00</TransactionsColorHightlight></td>
                        <td>Venda</td>
                        <td>25/7/2022</td>
                    </tr>
                    <tr>
                        <td width="50%"> Desenvolvimento do site </td>
                        <td><TransactionsColorHightlight variant="income">R$ 12.000,00</TransactionsColorHightlight></td>
                        <td>Venda</td>
                        <td>25/7/2022</td>
                    </tr>
                    <tr>
                        <td width="50%"> Desenvolvimento do site </td>
                        <td><TransactionsColorHightlight variant="outcome">R$ 12.000,00</TransactionsColorHightlight></td>
                        <td>Venda</td>
                        <td>25/7/2022</td>
                    </tr>    
                </tbody>
            </TransactionsTable>    
            </TransactionsContainer>
        </>
    )
}