import { use, useEffect, useState } from "react";
import Registration from "./Registration.jsx";
import Btn from "./COMPONENTS/Controls.jsx";
// import Readtables from "./readtables.jsx";
import Readtables from "./COMPONENTS/Radytables.jsx";


const App = () => {
  const [name, setName] = useState("welcome to react");
  

  return (
    <>
    
     {/* <p>{name}</p>
//       <Btn onClick={() => setName(prompt("enter your name") || name)}>Change Name</Btn>
//       <Registration />
//       <Readtables sql="select *from  arday  order by id desc limit 10  "></Readtables> */}
        <Registration/>
    </>

  );
}


export default App;