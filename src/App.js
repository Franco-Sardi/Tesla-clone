import React from 'react';
import './App.css';
import Sidebar from './components/header/sidebar/Sidebar';
import Header from './components/header/Header';
import { useState } from 'react';
import Backdrop from './components/backdrop/Backdrop';

function App({children}) {
  const [showSidebar, setShowSidebar ] = useState(false);
  return (
    <>
     {showSidebar && (
            <>  
                <Backdrop onClick={()=> setShowSidebar(false)}/>
                <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
            </>
        )}
    <main className={showSidebar ? "blur-content":''}>
      <Header setShowSidebar={setShowSidebar} />
      {children}
    </main>
    </>
  );
}

export default App;
