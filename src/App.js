import React, {useState, useEffect} from 'react';
import './App.css';

import Nav from './Components/Nav'
import CardHome from './Components/CardHome'
import Footer from './Components/Footer'



function App() {
  const [charactersArray, setCharactersArray] = useState([])

  useEffect(() => {
    apiData()
  }, [])  
  
  const apiData = async () => {
    const data = await fetch('https://www.breakingbadapi.com/api/characters')
    const characters = await data.json()
    
    setCharactersArray(characters)
}

  let cardhomeData = []
  for(let i=0; i<charactersArray.length; i++){
    cardhomeData.push(<CardHome 
      name={charactersArray[i].name} 
      birthday={charactersArray[i].birthday}
      nickname={charactersArray[i].nickname} 
      status={charactersArray[i].status} 
      portrayed={charactersArray[i].portrayed} 
      image={charactersArray[i].img} />)
  }
  
 return (
    <>
      <Nav/>
      <div className="appContainer">
       {cardhomeData}
        
      </div>
      <Footer/>
    </>
  );
}

export default App;
