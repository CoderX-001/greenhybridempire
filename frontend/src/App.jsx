import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import { ThemeContextProvider } from "./contexts"

const App = () => {
  return (
    <BrowserRouter>
      <ThemeContextProvider>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </ThemeContextProvider>
    </BrowserRouter>
  )
}

export default App
