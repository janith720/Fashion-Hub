import './App.css';
import Home from './layouts/Home';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import CartLayout from './layouts/CartLayout';
import AllItemsLayouts from './layouts/AllItemsLayouts';
import OtherRoutes from './layouts/OtherRoutes';

function App() {

  const otherRoutes = [
    {
      path: "/dresses",
      title: "Dresses"
    },
    {
      path: "/seasonal",
      title: "Seasonal"
    },
    {
      path: "/denims",
      title: "Denims"
    },
    {
      path: "/t-shirts",
      title: "TShirts"
    },
    {
      path: "/tops",
      title: "Tops"
    }
  ];

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/cart" component={CartLayout} />
          <Route path="/all-items" component={AllItemsLayouts} />
          {otherRoutes.map((val,key) => {
            return(
              <Route key={key} path={val.path} component={() => {
                return <OtherRoutes title={val.title} />
              }}
              />
            ) 
          })}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
