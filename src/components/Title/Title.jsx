import React from "react";

export const Title = (props) => {
    console.log(props);
   return( 
    <h1 className="tit-mine">{props.greeting}
    </h1>
    )
}