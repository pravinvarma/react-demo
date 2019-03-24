import React from "react";
import { Route, Switch } from "react-router-dom";
import CoursesPage from "./courses/CoursesPage";

function App() {
  return (
    <div className="container-fluid">
    
      <Switch>
      
        <Route path="/courses" component={CoursesPage} />
        
      </Switch>
    </div>
  );
}

export default App;
