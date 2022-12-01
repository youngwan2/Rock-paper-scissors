import React, { useState,useEffect} from 'react';
import Box from './components/box';
import './App.css';

interface ChoiceType{
  [x:string]:{
     [x:string]:string
}
}
const choice:ChoiceType={
  scissors:{
    name:'Scissors',
    img:'/scissors.png'
  },
  rock:{
    name:'Rock',
    img:'/rock.png'
  },
  paper:{
    name:'Paper',
    img:'/paper.png'
  }
};


function App() {

  let [userSelect, setUserSelect]:any = useState(null);
  let [comSelect, setComSelect]:any = useState(null);
  let [result, setResult] = useState('')

  const play = (userChoice:string) =>{
    userSelect = choice[userChoice]
    setUserSelect(userSelect)

    comSelect = choice[randomNum()];
    setComSelect(comSelect);

    result = jugement(comSelect,userSelect)
    console.log('판정:',result)
    setResult(result)
};

const randomNum=()=>{
  let objArray = Object.keys(choice) // objArray =['scissors', 'rock', 'paper']
  let randomIndex = Math.floor(Math.random()*objArray.length)// 랜덤번호
  return objArray[randomIndex]
};

type jugementType = any
const jugement:jugementType =(comSelect:any,userSelect:any)=>{
  if(userSelect === comSelect){
      return 'Draw'
    } else if(userSelect.name === 'Scissors'){
        return comSelect.name === 'Paper'? 'Win':'Lose'
    } else if(userSelect.name === 'Rock'){
        return comSelect.name === 'Scissors'? 'Win':'Lose'
    } else if(userSelect.name === 'Paper'){
        return comSelect.name === 'Rock'?  'Win':'Lose'
    }

};

  return (
    <div className="App">
      <h1 className="title"></h1>
      <div className='item'>
        <Box title={'You'} select={userSelect} result={result}/>
        <Box title={'Computer'} select ={comSelect} result={result}/>
      </div>
      <div className='item'>
        <button className='btn' onClick={()=>{
          play('scissors')
        }}>Scissors</button>
        <button className='btn' onClick={()=>{
          play('rock')
        }}>Rock</button>
        <button className='btn' onClick={()=>{
          play('paper')
        }}>Paper</button>
      </div>

      

    </div>
  );
}

export default App;
