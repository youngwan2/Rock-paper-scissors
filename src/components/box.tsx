import React from "react";


const Box =(props:any)=>{
    console.log(props)

    let result;
    if(props.title ==='Computer' && props.result !=='Draw' && props.result ==='Win' ){
        result = 'Lose'
    } else if (props.title ==='Computer' && props.result !=='Draw' && props.result ==='Lose' ){
        result = 'Win'
       
    } else {
        result = props.result
    }


    return (
        <div className={`Box ${result}`}>    
                <h1>{props.title}</h1>
                <img src={props.select && props.select.img} alt="가위바위보이미지"></img>
                <div className="name">{props.select && props.select.name}</div>
                <h2>{result}</h2>
        </div>
    )
}



export default Box