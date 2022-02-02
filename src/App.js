import './App.css'
import React, {useState} from "react"


function App(){
  const aux_eval = eval

  const [calc, setCalc] = useState("")
  const [result, setResult] = useState("")
  
  const operators = ['/','*','-','+','.']
  
  const updateCalc = (value) => {
    const operatorRegex = /[+\-*/]/;
    
    if(calc === "" && value ==='0'){
      return
    }
    
    if(value === "."){
      const parts = calc.split(operatorRegex)
      if(parts[parts.length -1].includes(".")){
        return
      }
    }
    
        if (value !== "-" && operatorRegex.test(value)) {
      const lastChar = calc[calc.length - 1] || "";
      const secondLastChar = calc[calc.length - 2] || "";
      if (operatorRegex.test(lastChar)) {
        if (lastChar === "-" && operatorRegex.test(secondLastChar)) {
          setCalc(calc.slice(0, -2) + value);
          return;
        }
        setCalc(calc.slice(0, -1) + value);
        return;
      }
    }
    
    
    setCalc(calc + value)
    
    if(!operators.includes(value)){
        setResult(aux_eval(calc + value).toString())
    }
  }
  
  const calculate = () => {
    setCalc(aux_eval(calc).toString())
    
  }
  
  const clearAll = () =>{
    setResult("")
    setCalc("")
  }
 
    return(
        <div className="calculator">
          <div className="screen">
            <div id="display">
              <p>{calc || "0"}</p>
            </div>
            <div className="calcule">
              <p>{result}</p>
              </div>
          </div>
          <div className="btn">

         <div className="calc-opers">
            <button id="divide" onClick={() => updateCalc('/')}>/</button>
            <button id="multiply" onClick={()=> updateCalc('*')}>x</button>
            <button id="subtract" onClick={()=>updateCalc('-')}>-</button>
            <button id="add" onClick={()=>updateCalc('+')}>+</button>
            <button id="clear" onClick = {clearAll}>AC</button>
          </div> 

            
            <div className="dig">
            <button id="seven" onClick={() => updateCalc('7')}>7</button>
            <button id="eight"onClick={() => updateCalc('8')}>8</button>
            <button id="nine" onClick={() => updateCalc('9')}>9</button>
            <button id="four" onClick={() => updateCalc('4')}>4</button>
            <button id="five" onClick={() => updateCalc('5')}>5</button>
            <button id="six" onClick={() => updateCalc('6')}>6</button>
            <button id="one" onClick={() => updateCalc('1')}>1</button>
            <button id="two" onClick={() => updateCalc('2')}>2</button>
            <button id="three" onClick={() => updateCalc('3')}>3</button>
            <button id="zero" onClick={() => updateCalc('0')}>0</button>
         
            <button id="decimal" onClick={()=>updateCalc('.')}>.</button>
            <button id="equals"  onClick={calculate}>=</button>
          </div>
            
          </div>
          
        </div>
     
    )
  
}


export default App;
