import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Components/Home/Home";
import ContractUs from "./Components/Contract/ContractUs";
import Dashboard from "./dashboard/Dashboard";
import DashbordHome from "./dashboard/DashbordHome";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/contract" element={<ContractUs></ContractUs>}></Route>

          <Route path="/dashboard" element={<Dashboard></Dashboard>}>
            
            {/* <Route index element={<DHome></DHome>}></Route> */}
            
            <Route
              path="userProfile"
              element={<DashbordHome></DashbordHome>}
            ></Route>

            {/* <Route
                        path=":products/:id"
                        element={<EditProduts item={item}></EditProduts>}
                      ></Route> */}
            {/* <Route
                        path="favorite"
                        element={<Favorite></Favorite>}
                      ></Route> */}
            {/* <Route
                        path="compareList"
                        element={<CompareList item={item}></CompareList>}
                      ></Route> */}
            {/* <Route
                        path="message"
                        element={<Massages></Massages>}
                      ></Route> */}
          </Route>
        </Routes>
      </BrowserRouter>

      {/* )} */}

      {/* <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1> */}
    </div>
  );
}

export default App;