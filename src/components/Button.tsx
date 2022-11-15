const Button = ({ text }:{text:String}) => {
    return (
      <button
        className="btn btn-primary"
        onClick={(event:any) => event.target.innerText = 'You clicked me!'}
      >
        {text}
      </button>
    )
  }
  
  export default Button