import React, {useState, component} from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Sidebar from './components/Sidebar.js';
import HomePage from './Views/HomePage';
import Results from './Views/Results';
import Upload from './Views/Upload';
import LoginForm from './components/LoginForm';
import Logout from './Views/Logout';

function App() {

  const adminUser = {
    email: "admin@tamu.edu",
    password: "admin123"
  }

  const [user, setUser] = useState({name: "", email:""});
  const [error, setError] = useState("");

  const Login = details => {
    if(details.email === adminUser.email && details.password === adminUser.password){
      setUser(
        {email: details.email}
      )
    }else{
      setError(
        "Please try again."
      )
    }

  }

  return(
    <div className="App">
    {(user.email !== "") ?(
      <div className = "welcome">
      <Router>
          <Sidebar />
          <Switch>
            <Route path='/' exact component={HomePage} />
            <Route path='/Results' component={Results} />
            <Route path='/app' component={App} />
            <Route path='/Upload' component={Upload} />
            <Route path='/Logout'>
              <Logout />
            </Route>
          </Switch>
      </Router>
      </div>
    ) : (
      <LoginForm Login={Login} error={error}/>
    )}
    </div>
  );
};

export default App;
