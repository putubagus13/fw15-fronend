import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./pages/Signin";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import Profile from "./pages/Profile";
import ChangePassword from "./pages/ChangePassword";
import EmtyBooking from "./pages/EmtyBooking";
import EmtyWishlist from "./pages/EmtyWishlist";
import Wishlist from "./pages/Wishlist";
import MyBooking from "./pages/MyBooking";
import CreateEvent from "./pages/CreateEvent";
import Home from "./pages/Home";
import EventDetail from "./pages/EventDetail";
import Payment from "./pages/Payment";

function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Payment" element={<Payment/>} />
        <Route path="/EventDetail" element={<EventDetail/>} />
        <Route path="/CreateEvent" element={<CreateEvent/>} />
        <Route path="/Booking" element={<MyBooking/>} />
        <Route path="/Wishlist" element={<Wishlist/>} />
        <Route path="/Wishlist0" element={<EmtyWishlist/>} />
        <Route path="/Booking0" element={<EmtyBooking/>} />
        <Route path="/ChangePassword" element={<ChangePassword/>} />
        <Route path="/Pofile" element={<Profile/>} />
        <Route path="/Signin" element={<Signin/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/ForgotPassword" element={<ForgotPassword/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;