import React from "react";
import { MutatingDots } from "react-loader-spinner";

const Spinner = () => {
  return (
    <div className="loader">
      <MutatingDots
        height="100"
        width="100"
        color="#0B66B1"
        secondaryColor="#F4D32E"
        radius="12.5"
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{width:"100%",display:"flex",justifyContent:"center"}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Spinner;
