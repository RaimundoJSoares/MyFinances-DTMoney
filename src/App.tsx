import { ThemeProvider } from "styled-components"
import { TransactionsProvider } from "./context/TransactionsContext"
import { Transactions } from "./pages/transactions/Transactions"
import { GlobalStyle } from "./styles/global"
import { defaultTheme } from "./styles/themes/default"

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle/>
      <TransactionsProvider>
         <Transactions/>
       </TransactionsProvider>
    </ThemeProvider>
  )
}

export default App
