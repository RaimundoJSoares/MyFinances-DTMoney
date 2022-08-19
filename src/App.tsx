import { ThemeProvider } from "styled-components"
import { Transactions } from "./pages/transactions/Transactions"
import { GlobalStyle } from "./styles/global"
import { defaultTheme } from "./styles/themes/default"

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle/>
       <Transactions/>
    </ThemeProvider>
  )
}

export default App
