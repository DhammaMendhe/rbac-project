import React, { useEffect } from "react";
import { useContext } from "react";
import usercontext from "../../Context/context";

export default function Allusers() {

  const context = useContext(usercontext);
  const { fetchusers }  = context

  useEffect(() => {
    fetchusers()
  }, [])
  
  return (
    <div>
      Allusers
      {/* {console.log(fetchUser)}; */}

      <div>
        <table></table>
      </div>
    </div>
  );
}
