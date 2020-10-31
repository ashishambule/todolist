import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Displaytodo from './components/displyatodo/Displaytodo';
import Employee from './components/employee/Employee';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import EmployeeDetails from './components/employee/EmployeeDetails';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path='/' component={Employee} />
        <Route exact path='/details/:id' component={EmployeeDetails} />
      </Router>
    </Provider>
  );
}
export default App;
