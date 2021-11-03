import {ColoredButton} from "./components/Button.js";
import {useWeb3React} from "@web3-react/core"
import {injectedConnector} from "./connectors";
import CountGet from "./constant/CounterGet.js";
import CounterInc from "./components/CounterInc.js";

function App() {
  const { chainId, account, activate, active} = useWeb3React();
  const onClick = () => {
    activate(injectedConnector)

  }
  return (
    <div>
      <div>Chain Id : {chainId}</div>
      <div>Account : {account}</div>
      {active ? (
        <div style={{color:"green"}}>
          Connected!
        </div>
      ) : (
        <button onClick={onClick}>connect</button>


      )}
      <CountGet />

      <CounterInc/>
    </div>
  );
}

export default App;
