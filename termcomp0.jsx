import React from "react";


  const Terminator0 = ({name, serialNumber, image }) => {
  return (
    <div className="tc bg-light-blue dib br4 pa3 ma2 grow">

    <img src={image} height='200'/> 
      
      <div>
        <h2>SN: {name}</h2>
        <p>Name: {serialNumber}</p>
      </div>
    </div>
  );
};



export default Terminator0;
//<img src={`https://robohash.org/${id}?size=180x180`} alt="terminátor" />
