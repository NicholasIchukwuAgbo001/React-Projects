import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Question from "./Question";

const initialState = {
  questions: [],
  status: 'loading'
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'dataReceived':
      return {
        ...state,
        questions: action.payload,
        status: 'ready'
      };
    case 'dataFailed':
      return {
        ...state,
        status: 'error'
      };
    default:
      return state;
  }
};

export default function App() {
const [{ questions, status }, dispatch] = useReducer(reducer, initialState);

const numQuestion = questions.length;


  useEffect(() => {
    fetch('http://localhost:9000/questions')
      .then(res => res.json())
      .then(data => dispatch({ type: 'dataReceived', payload: data }))
      .catch(err => {
        dispatch({ type: 'dataFailed' });
      });
  }, []);

  return (
    <div className="app">
      <Header />

      <Main>
        {status === 'loading' && <Loader />}
        {status === 'error' && <Error />}
        {status === 'ready' && <StartScreen numQuestion={numQuestion}/>}
        {status === "active" && <Question />}
      </Main>
    </div>
  );
}
