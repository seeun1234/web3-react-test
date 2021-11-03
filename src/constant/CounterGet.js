import {useWeb3React} from "@web3-react/core"
import {useState} from "react"
import {ethers} from "ethers"
import {COUNTER_ABI, COUNTER_ADDRESS} from "../constant"

function CountGet() {
  const [count, setCount] = useState(0) 
  const {library} = useWeb3React()
  const get = () => {
    const counterContract = new ethers.Contract(
      COUNTER_ADDRESS,
      COUNTER_ABI,
      library
      );
  counterContract.get().then( (result) => {
    setCount(result.toNumber())})
        
  };
  return(
    <div>
      <button onClick={get}>
        Get Count
      </button>
      <div>
        {count}
      </div>
    </div>
  )
}

export default CountGet