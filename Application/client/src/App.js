import { useState } from "react";

import PropsExample from "./Components/Props/PropsExample";
import EventExample from "./Components/EventHandling/EventExample";
import EventExample2 from "./Components/EventHandling/EventExample2";
import UseStateExample from "./Components/State/UseStateExample"
import ApiCalls from "./Components/ApiConnectivity/ApiCalls";
import Example1 from "./Components/ConditionalRendering/Example1";
import Example2 from "./Components/ConditionalRendering/Example2";
import Mapping1 from "./Components/Mapping/Mapping1";
import Mapping2 from "./Components/Mapping/Mapping2";
import Mapping3 from "./Components/Mapping/Mapping3";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleClick = () => {
    setIsLoggedIn(!isLoggedIn)
  }

  return (
    <div>
      {/* <PropsExample /> */}
      {/* <EventExample /> */}
      {/* <EventExample2 /> */}
      {/* <UseStateExample /> */}
      {/* <ApiCalls /> */}
      {/* <Example1 isLoggedIn={isLoggedIn}/> */}
      {/* <Example2 isLoggedIn={isLoggedIn}/> */}
      {/* <button onClick={handleClick}>Click me!</button> */}
      {/* <Mapping1 />  */}
      {/* <Mapping2 /> */}
      <Mapping3 />

    </div>
  );
}

export default App;
