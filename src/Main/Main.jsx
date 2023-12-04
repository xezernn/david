import { useState } from "react"
import Cards from "./Cards/Cards"
import MainSelect from "./MainSelect"
import Promo from "./Promo"
import Sebet from "./Sebet/Sebet"
import Product from "./Product"
import Carusel2 from "../AntD/Carusel2"
import { Route, Router, Routes } from "react-router-dom"


function Main({ sebet, setSebet, data, setData }) {
  const [basket, setBasket] = useState([])


  return (
    <main>
      <div className="container">
        <Routes>
          <Route path="/" element={[
            <Promo />,
            <MainSelect />,
            <Cards basket={basket} setBasket={setBasket} data={data} setData={setData} />,
          ]} />
          <Route path='/product/'>
            <Route path=":id" element={<Product data={data} setData={setData} />}/>
          </Route>
        </Routes>
        <Sebet sebet={sebet} setSebet={setSebet} basket={basket} setBasket={setBasket} />
      </div>

    </main>
  )
}

export default Main