import { BrowserRouter as Router, Navigate, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import { SidebarData } from './SideBarData';

function App() {
  // let SideBarDataButLast = SidebarData.slice(0, -1);
  return (
    <Router>
      <div className="default-mode">
        <Sidebar />
        <main className='main'>
            <div className='main__curtain'></div>
            <div className='main__content container pt-4'>
              <Switch>
                {
                  SidebarData && SidebarData.map((item, index) => <Route key={index} path={item.path} exact={true} component={item.component} />)
                }
                <Redirect to={'/'} />
              </Switch>
            </div>
        </main>
      </div>
    </Router>
  );
}

export default App;
