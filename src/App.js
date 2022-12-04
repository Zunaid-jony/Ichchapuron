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
import { Todo } from "./dashboard/Todo/Todo";
import Calendar from "./dashboard/Calendar/Calendar";
import Chat from "./dashboard/Chat/Chat";
import Profile from "./dashboard/Profile/Profile";
import Login from "./Components/Authentication/Login";
import Registration from "./Components/Authentication/Registration";
import ResetPassword from "./Components/Authentication/ResetPassword";
import ConfirmMail from "./Components/Authentication/ConfirmMail";
import Listing from "./Components/Header/Footer/Listing";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/contract" element={<ContractUs></ContractUs>}></Route>
          <Route path="/listing" element={<Listing></Listing> }></Route>
          <Route path="/about" element={<Listing></Listing> }></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/Registration" element={<Registration></Registration>}></Route>
          <Route path="/ResetPassword" element={<ResetPassword></ResetPassword>}></Route>


          <Route path="/ConfirmMail" element={<ConfirmMail></ConfirmMail>}></Route>

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
            <Route
              path="todo"
              element={<Todo></Todo>}
            ></Route>
            <Route
              path="calendar"
              element={<Calendar></Calendar>}
            ></Route>
            <Route
              path="chat"
              element={<Chat></Chat>}
            ></Route>
            <Route
              path="profile"
              element={<Profile></Profile>}
            ></Route>
           
           
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
