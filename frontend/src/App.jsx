import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import AppContextProvider from "./contexts/AppContext"

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <AppContextProvider>
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
        </AppContextProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
