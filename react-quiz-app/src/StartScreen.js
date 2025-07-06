const StartScreen = ({numQuestion}) => {
  return (
    <div className="start">
      <h2>Welcome to react quiz</h2>
      <h3>{numQuestion} question to test your react mastery</h3>
      <button className="btn btn-ui">Let start</button>
    </div>
  )
}

export default StartScreen
