export function RedButton() {
  return<button style={{color:"white", backgroundColor: "red"}}>connector
  </button> 
}

export function PendingButton() {
  return<button style={{color:"white", backgroundColor: "pink"}}>Click</button> 
}

export function ColoredButton(props) {
  return (
    <button style={{color:"white", backgroundColor: props.backgroundColor}}>
      button
    </button>
  )
}