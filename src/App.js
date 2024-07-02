import "./App.css";
import Header from "./component/layout/Fbheader";
import UserList from "./component/layout/UserList";
import UserProfile from "./component/pages/UserProfile";
import Main from "./component/pages/main";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Aboutus from "./component/pages/about";
import Footer from "./component/layout/footer";
import Contact from "./component/pages/contact";
function App() {
  const mystyle = {
    color: "purple",
    backgroundColor: "green",
    padding: "30px",
  };

  return (
    <div className="">
      <Router>
        <Header />
        <Route exact path="/" component={Main} />
        <Route exact path="/aboutus" component={Aboutus} />
        <Route exact path="/contact" component={Contact} />

        <Route exact path="/user/:id">
          <UserProfile />
        </Route>
        <Footer></Footer>
      </Router>
    </div>
  );
}

{
  /* <Header />

      <UserList />
      <p style={mystyle}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
        numquam recusandae. In, magnam! Assumenda fuga ea tempora asperiores?
        Repudiandae voluptatibus animi alias in minima dignissimos id itaque sit
        perferendis nostrum.
      </p> */
}

export default App;
