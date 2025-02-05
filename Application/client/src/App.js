import { useState } from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

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
import Forms from "./Components/Forms/Forms";
import Test from "./Components/Test";
import AxiosRequests from "./Components/AxiosRequests/AxiosRequests";

function App() {

  // const [isLoggedIn, setIsLoggedIn] = useState(true);

  // const handleClick = () => {
  //   setIsLoggedIn(!isLoggedIn)
  // }

  return (
    <Router>
      <div>
        <Routes>
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
          {/* <Mapping3 /> */}
          {/* <Route path="/forms" element={<Forms />}/> */}
          <Route path="/" element={<AxiosRequests />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
