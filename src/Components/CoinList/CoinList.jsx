import { useContext } from "react"
import CoinContext from "../../Context/CoinContext"
import CoinListBox from "../CoinListBox"

const CoinList = () => {
    const { coin, setCoin } = useContext(CoinContext)
    // console.log(coin)
    const value = coin.coinList
    console.log(value)



    return (
        <>
            <h1>COIN DATA</h1>
            <div>
                {value.map((val) => <CoinListBox key={val.id} name={val.name} image={val.image} price={val.current_price} low24={val.low_24h
                } high24={val.high_24h} priceChangePer={val.market_cap_change_percentage_24h
                } marketCap={val.market_cap
                } />)}
            </div>
        </>
    )
}

export default CoinList
