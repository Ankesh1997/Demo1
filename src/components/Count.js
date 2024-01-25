import { useSelector, useDispatch } from "react-redux";

const Count = () => {

const counter = useSelector(state => state.counter)
//useSelector is an useful hook to getting data from redux store 
console.log("----counter---", counter)

const dispatch = useDispatch()
//useDispatch hook used for to diaptach an action to the redux store

const incrementHandler = () => {
    dispatch({type : 'increment'});
};

const decrementHandler = () => {
    dispatch({type : 'decrement'});
};
     return(
        <div>
            <h1 style={{fontSize : 19, color : 'black', alignContent : 'center', marginTop : 20}}>React Redux</h1>

            <h1 style={{fontSize : 19, color : 'black', alignContent : 'center', marginTop : 20}}>{counter}</h1>
             <button style={{height: 50,width : "30%", backgroundColor : 'red', alignSelf : 'center', marginTop :50 }} 
             onClick={incrementHandler}>Increment</button>
             <button style={{height: 50,width : "30%", backgroundColor : 'red', alignSelf : 'center', marginTop :50 }}
             onClick={decrementHandler}>Decrement</button>
        </div>
    );
}

export default Count;