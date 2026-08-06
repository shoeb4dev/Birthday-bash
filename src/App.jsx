import { useState } from "react";

import Welcome from "./components/Welcome";
import Hero from "./components/Hero";

function App() {

const [opened,setOpened]=useState(false);

return(

<>

{
!opened
?
<Welcome onOpen={()=>setOpened(true)}/>
:
<Hero/>
}

</>

);

}

export default App;