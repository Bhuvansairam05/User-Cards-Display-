import "./App.css"
import {BrowserRouter,Route,Routes} from "react-router-dom"
import CardsList from "./components/CardsList"
import CardDetail from "./components/CardDetail"
import Home from "./components/Home"
import About from "./components/About"
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}>
            <Route index element={<CardsList/>}/>
            <Route path="cards/:index" element={<CardDetail/>}/>
            <Route path="/about" element={<About/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App