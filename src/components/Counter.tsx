import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../redux/reducers'
import { increment, decrement } from '../redux/reducers/counter/actions';

const selectCount = (state: RootState) => state.counter;

const CountTracker = () => {
    const count = useSelector(selectCount);
    const dispatch = useDispatch();

    return (
        <div className="container-column align-center paper">
            <div className="item">
                <h2 className="textColorPrimary">{count}</h2>
            </div>
            <div className="item container-row spacing-1">
                <div className="item">
                    <button onClick={() => dispatch(increment(10))}>+</button>
                </div>
                <div className="item">
                    <button onClick={() => dispatch(decrement(10))}>-</button>
                </div>
            </div>
        </div>
    )
}

export default CountTracker
