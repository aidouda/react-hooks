import React from 'react';

import Moviecard from './Moviecard';


export const Movielist = (props) => {
    return (
        <div className="Movielist">
         {props.movies.map((el,i) => <Moviecard key={i+1}/>
         

)};

        </div>

    );
};
export default Movielist;
