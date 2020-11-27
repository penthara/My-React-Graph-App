import logo from './logo.svg';
import './App.css';
import { Login, Agenda, Tasks, Get, Person,  MgtTemplateProps } from '@microsoft/mgt-react';
import React, { useState, useEffect } from 'react';
import {Navbar,Nav,NavDropdown,Form,FormControl,Button} from 'react-bootstrap'
import { MgtPerson, PersonViewType, Providers, ProviderState } from '@microsoft/mgt';
import { Route, Switch,Link, BrowserRouter as Router } from 'react-router-dom';
import Calendar from './components/mycalendar';
import MTasks from './components/mytasks';
import Messages from './components/mymessages';
import Welcome from './components/welcome';
import Teams from './components/myteams';

function App() {
  const [isSignedIn] = useIsSignedIn();
 
  
  
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">My React Graph App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      {isSignedIn && <Nav.Link href="/MyCalendar">My Calendar</Nav.Link>}
      {isSignedIn && <Nav.Link href="/MyTasks">My Tasks</Nav.Link>}
      {isSignedIn && <Nav.Link href="/MyMessages">My Messages</Nav.Link>}
      {isSignedIn && <Nav.Link href="/MyTeams">My Teams</Nav.Link>}
      </Nav>
      <Form >
        <div><Login /></div>
      </Form>
      </Navbar.Collapse>
      </Navbar>
      <div><p> 
      <div>
      {
        !isSignedIn && <h4 className="center">Please Sign in to Continue</h4>
      }
      
      </div>
      
      </p></div>
  <Router>

    <Switch>
      <Route exact path="/" component={isSignedIn && Welcome}/>
      <Route path="/MyCalendar" component={Calendar} />
      <Route path="/MyTasks" component={MTasks} />
      <Route path="/MyMessages" component={Messages} />
      <Route path="/MyTeams" component={Teams} />
    </Switch>
      
  </Router>
    </div>
    
  );
}

function useIsSignedIn(): [boolean] {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    const updateState = () => {
      const provider = Providers.globalProvider;
      setIsSignedIn(provider && provider.state === ProviderState.SignedIn);
    };

    Providers.onProviderUpdated(updateState);
    updateState();

    return () => {
      Providers.removeProviderUpdatedListener(updateState);
    }
  }, []);

  return [isSignedIn];
}

export default App;
