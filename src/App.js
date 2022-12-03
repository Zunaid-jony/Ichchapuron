import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Components/Home/Home";
import ContractUs from "./Components/Contract/ContractUs";
import Dashboard from "./dashboard/Dashboard";
import DashbordHome from "./dashboard/DashbordHome";
import Customer from "./dashboard/Customer/Customer";
import AddCustomaer from "./dashboard/Customer/AddCustomaer";
import CustomarTwo from "./dashboard/Customer/CustomarTwo";
import Product from "./dashboard/Product/Product";
import AddProdcut from "./dashboard/Product/AddProdcut";
import Order from "./dashboard/Order/Order";
import AddOrder from "./dashboard/Order/AddOrder";
import Invoice from "./dashboard/Invoice/Invoice";
import AddInvoice from "./dashboard/Invoice/AddInvoice";

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
            <Route
              path="customer"
              element={<Customer></Customer>}
            ></Route>
            <Route
              path="addCustomer"
              element={<AddCustomaer></AddCustomaer>}
            ></Route>
            <Route
              path="Customer"
              element={<CustomarTwo></CustomarTwo>}
            ></Route>
            <Route
              path="product"
              element={<Product></Product>}
            ></Route>
            <Route
              path="addProduct"
              element={<AddProdcut></AddProdcut>}
            ></Route>
            <Route
              path="order"
              element={<Order></Order>}
            ></Route>
            <Route
              path="addOrder"
              element={<AddOrder></AddOrder>}
            ></Route>
            <Route
              path="invoice"
              element={<Invoice></Invoice>}
            ></Route>
            <Route
              path="addInvoice"
              element={<AddInvoice></AddInvoice>}
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
