import { COUNT } from './actions';

const defaultStore = {
    count: 0,
}

const reducer = (state = defaultStore, action) => {
    switch (action.type) {
        case "COUNT":
            return {...state, count: ++COUNT.payload}

            default: return state;
    }
}
export default reducer;