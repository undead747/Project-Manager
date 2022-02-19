import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import { SidebarData } from './Components/Sidebar/SideBarData';

function RenderComponent(props){
  return (
    <h4>{props.title}</h4>
  )
}

function App() {
  let SideBarDataButLast = SidebarData.slice(0, -1);

  return (
    <Router>
      <div className="default-mode">
        <Sidebar />
        <main className='main'>
            <div className='main__curtain'></div>
            <div className='main__content'>
              <Routes>
                {
                  SideBarDataButLast && SideBarDataButLast.map((item, index) => <Route key={index} path={item.path} element={<RenderComponent title={item.title} />} />)
                }
                <Route path="/" element={<Navigate replace to="/" />} />
              </Routes>
            </div>
        </main>
      </div>
    </Router>
  );
}

export default App;
