import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../redux/reducers/fetchData';
import { RootState } from '../redux/reducers';
import { PENDING } from '../redux/reducers/fetchData/types';

const selectLoadingStatus = (state: RootState) => state.responseData.loading
const selectResponseData = (state: RootState) => state.responseData.data
const selectErrorStatus = (state: RootState) => state.responseData.error

const FetchData = () => {
    const loadingStatus = useSelector(selectLoadingStatus);
    const users = useSelector(selectResponseData);
    const errorStatus = useSelector(selectErrorStatus);

    const dispatch = useDispatch();

    return (
        <div className="container-column align-center paper">
            <div className="item">
                <h2 className="textColorPrimary">Data Fetcher</h2>
            </div>
            <div className="item container-row spacing-1">
                <div className="item">
                    <h4 className="textColorSecondary">{loadingStatus}</h4>
                </div>
                <div className="item">
                    <button onClick={() => dispatch(fetchData('https://jsonplaceholder.typicode.com/users'))}>
                        {loadingStatus === PENDING ? "Loading" : "Fetch"}
                    </button>
                </div>
            </div>
            {
                errorStatus &&
                <div className="item container-column align-center">
                    <div className="item">
                        <h4 className="textColorSecondary">{errorStatus.errorMessage}</h4>
                    </div>
                    <div className="item">
                        <h4 className="textColorSecondary">{errorStatus.responseStatus}</h4>
                    </div>
                </div>
            }
            <div className="item container-column spacing-1">
                {
                    Array.isArray(users) && users.map((user, index) => {
                        return (
                            <div className="item" key={index}>
                                <h4 className="textColorPrimary">{user.name}</h4>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default FetchData
