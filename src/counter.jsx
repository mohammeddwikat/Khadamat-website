import { connect, useDispatch, useSelector } from 'react-redux';


const Counter = (props) => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.Reducer.count)
  const name = useSelector(state => state.Reducer.name)
  const aga = useSelector(state => state.Reducer.aga)
  const c = useSelector(state => state.Reducer.c)


  const increment = () => {
    dispatch({type: "INCREMENT"});
    
  }
  const decrement = () => dispatch({type: "DECREMENT"});

  return(
    <div>
     
      <div>
        <h1>Abdullah and Mohammad</h1>
        <h1>name: {name}</h1>
        <h2>{aga}</h2>
        <button onClick={decrement}>-</button>
        <span>{counter}</span>
        <button onClick={increment}>+</button>
      </div>
      {c}
    </div>
  )
}


function mapStateToProps(state) {
  return {
    count: state.Reducer.count,
    name: state.Reducer.name,
    aga: state.Reducer.aga,
    c: state.Reducer.c
  };
}

export default connect(mapStateToProps)(Counter);