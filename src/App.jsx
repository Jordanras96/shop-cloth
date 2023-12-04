import { Routes, Route } from "react-router-dom";
import { Home } from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Authentification from "./routes/auth/authentification.component";
import Profile from "./routes/account/profile/profile.component";

const Shop = () => {
  return <h1>I am the shop page</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index path="/" element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentification />} />
        <Route path="account">
          <Route path="profile" element={<Profile />} />
          {/* <Route path="billings" element={<Billings />} />
          <Route path="settings" element={<Settings />} />
          <Route path="orders" element={<Orders />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="sales" element={<Sales />} /> */}
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
