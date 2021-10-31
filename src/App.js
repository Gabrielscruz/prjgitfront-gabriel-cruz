import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Register_User from './Pages/Register_User'
import Users_List from './Pages/Users_List'

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Register_User} />
      <Route exact path="/lista" component={Users_List} />
    </Switch>
  </BrowserRouter>

  );
}

export default App;
