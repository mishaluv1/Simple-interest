import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button, Stack, TextField } from '@mui/material'





function App() {
  const[Principle,setPrinciple]=useState(0)
  const[Interest,setInterest]=useState(0)
  const[Year,setYear]=useState(0)
  const[SimpleInterest,setSimpleInterest]=useState(0)

  const[isvalidPrinciple,setIsInvalidPrinciple]=useState(false)
  const[isvalidInterest,setIsInvalidInterest]=useState(false)
  const[isvalidYear,setIsInvalidYear]=useState(false)


  console.log(Principle);

  const valideUserInput=(tag)=>{
    const {name,value}=tag
    console.log(name,value);

    console.log(!!value.match(/^[0-9]*.?[0-9]+$/));
    if(!!value.match(/^[0-9]*.?[0-9]+$/)){
      if (name=='principle') {
        setPrinciple(value)
        setIsInvalidPrinciple(false)
        
      }else if (name=='interest') {
        setInterest(value)
        setIsInvalidInterest(false)

        
      }else{
        setYear(value)
        setIsInvalidYear(false)

      }

    }else{
      if (name=='principle') {
        setIsInvalidPrinciple(true)
      }
      else if (name=='interest') {
        setIsInvalidInterest(true)
      }
      else {
        setIsInvalidYear(true)
      }
    }
    
  
  }

  

  
  const HandleCalculate=(e)=>{
    e.preventDefault()
    console.log("button clicked");
    if (Principle && Interest && Year) {
      setSimpleInterest(Principle*Interest*Year/100)
      
    }
    
  }
  const HandleReset=()=>{
    setPrinciple(0)
    setInterest(0)
    setYear(0)
    setSimpleInterest(0)
    setIsInvalidInterest(false)
    setIsInvalidPrinciple(false)
    setIsInvalidYear(false)

  }

  return (
    <>
      <div className='padding p-5 margin m-5 bg-white rounded ' style={{minHeight:'80vh',width:'80vh'}}>
        <h2>Simple Interest Calculator</h2>
        <p>Calculate your simple interest easly</p>
        <div className='m-3 p-4 bg-primary rounded  text-white shadow'style={{height:'150px'}} >
          <h2>₹{SimpleInterest}</h2>
          <p>Total Simple Interest</p>
        </div>
        <form className='m-3'>
          <div className='mb-4'>
          <TextField onChange={e=>valideUserInput(e.target)} value={Principle || ""} name='principle' className='w-100' id="outlined-basic" label="Principle Amount :" variant="outlined" />
          </div>
          {
            isvalidPrinciple &&
            <p className='text-danger fs-6' style={{textAlign:'left'}}>Invalide expression amount</p>
          }
          <div className='mb-4'>
          <TextField onChange={e=>valideUserInput(e.target)} value={Interest || ""} name='interest' className='w-100' id="outlined-basic" label="Rate Of Interest (p.a)% :" variant="outlined" />
          </div>
          {
            isvalidInterest &&
            <p className='text-danger fs-6' style={{textAlign:'left'}}>Invalide expression amount</p>
          }
          <div className='mb-4'>
          <TextField onChange={e=>valideUserInput(e.target)} value={Year || ""} name='year' className='w-100' id="outlined-basic" label="Time Period (yr) :" variant="outlined" />
          </div>
          {
            isvalidYear &&
            <p className='text-danger fs-6' style={{textAlign:'left'}}>Invalide year</p>
          }
          <Stack direction="row" spacing={2}>
          <Button type='submit' disabled={ isvalidInterest || isvalidPrinciple || isvalidYear} onClick={HandleCalculate} variant="contained" style={{backgroundColor:'blue', width:'30vh'}} >calculate</Button>
          <Button onClick={HandleReset} variant="outlined" className='text-success' style={{width:'30vh'}}>reset</Button>
          </Stack>

        </form>
       
      </div>
     
    </>
  )
}

export default App
