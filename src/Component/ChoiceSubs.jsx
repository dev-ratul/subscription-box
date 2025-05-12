import React from 'react';
import SubsBanner from '../pages/SubsBanner';

const ChoiceSubs = ({data}) => {
    // console.log(data)
    return (
        <div>
            {
                data.map((data)=><SubsBanner key={data.id} data={data}></SubsBanner>)
            }
        </div>
    );
};

export default ChoiceSubs;