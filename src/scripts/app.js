import React, { useReducer } from "react";
import ReactDOM from 'react-dom'
import Gensokyo from './components/Gensokyo'
import { Context, initialState, reducer } from "./store/menu";

function App() {
    const [store, dispatch] = useReducer(reducer, initialState)

    return (
        <Context.Provider value = {{ store, dispatch }}>
            <Gensokyo />
        </Context.Provider>
    )
}

ReactDOM.render (
    <App />,
    document.getElementById('root')
)