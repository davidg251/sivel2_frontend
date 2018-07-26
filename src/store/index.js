import { createStore } from "redux"
import db from '../api/index.json'
import cases from '../api/cases';
import rootReducer from './reducers'

//const initialState = {
//  geocases: db,
//  cases: cases
//};

/*console.log(initialState.cases);
console.log(initialState.cases[0].latitud);*/
//const rootReducer = (state = initialState, action) => state;

/*se crea el store con el rootreducer que es un export del combinereducers*/
const store = createStore(rootReducer);

export default store;