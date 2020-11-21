import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUrlById } from '../redux/actions/url';

const UniqueUrl = ({_id}) => {

    const dispatch = useDispatch()
    const urlUnique = useSelector(state => state.allUrl.uniqueUrl);

useEffect(() => {
    dispatch(getUrlById(_id))
}, {})

return (
    <div>
        {!urlUnique ? <div>
            No se ha encontrado dicha URL.
        </div> 
        :
        <div>
            <a href={urlUnique.link} target="_blank"><b>{urlUnique.link}</b></a>
            </div>}
    </div>
)
}


export default UniqueUrl;