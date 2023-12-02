import { useState } from "react"
import Cards from "./Cards/Cards"
import MainSelect from "./MainSelect"
import Promo from "./Promo"
import Sebet from "./Sebet/Sebet"
import Product from "./Product"


function Main({ sebet, setSebet }) {
    const [basket, setBasket] = useState([])

    return (
        <main>
            {/* <div className="container">
                <Promo />
                <MainSelect />
                <Cards basket={basket} setBasket={setBasket} />
            </div>
            <Sebet sebet={sebet} setSebet={setSebet} basket={basket} setBasket={setBasket} /> */}
            <Product/>
        </main>
    )
}

export default Main