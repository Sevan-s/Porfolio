import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { HomeScreen } from './components/homeScreen';

function App() {


  return (
    <div className="bg-blueBg min-h-screen text-textColor flex">
      <HomeScreen/>
    </div>
  );
}

export default App
