import { COUNT } from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux';

import { store } from '../redux/store';

const Counter = () => {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.count)
    console.log(count);

    const setCount = () => {
        dispatch(COUNT);
    }

    return (
        <div>
        <p>{`Счетчик равен: ${count}`}</p>
        <button onClick={setCount}>CLICK ME</button>
        </div>
    )
}
export default Counter;