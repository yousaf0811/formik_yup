import './App.css';

import { useState } from 'react';

import Register from './components/register';

import Login from './components/login';

import BasicForm from './components/BasicForm';

import AdvanceForm from './components/AdvanceForm';

function App() {
  const [currentForm,setCurrentForm] = useState('login');
  const toggleForm = (formName)=>{
    setCurrentForm(formName);
  }

  const [view,setView] = useState('basic');
  return (
    <div className="App">
      {/* <div>
        {
          currentForm === "login" ? <Login onFormSwitch={toggleForm}  /> : <Register onFormSwitch={toggleForm}  />
        }
      </div>   */}

      <div>
          <nav>
            <h3 onClick={()=>setView('basic')}
            style={{color:view === 'basic' ? "#fff" :""}} >
              Basic</h3>
              <h3 onClick={()=>setView('advance')}
              style={{color:view === 'advance' ? "#fff" :""}} >
                Advance</h3>
          </nav>
          {view === "basic" ? <BasicForm />:<AdvanceForm />}
      </div>
    </div>
  );
}

export default App;