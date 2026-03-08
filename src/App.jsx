import Layout from "./components/layouts/layout"
import Welcome from "./components/layouts/Welcome"
import Dashboard from "./components/layouts/Dashboard"
import Challenge from "./components/Challenge"
import { useState, useEffect } from "react"
import History from "./components/History"
import WORDS from './utilities/VOCAB.json'
import PLAN from'./utilities'
function App(props) {
  const [selectedPage, setSelectedPage] = useState(0)


// const selectedPage = 2  // 0 is for the welcome page, 1 is for the dashbaord and 2 is for the challenge page
  const [name, setName] = useState('')
  const [day, setDay] = useState(1)
  const [dateTime, setDatetime] = useState(null)
  const [history, setHistory] = useState([])
  const [attempts, setAttempts] = useState(0)
  
console.log(PLAN)
  const daysWord = PLAN 

   function handlePageChange (pageIndex){
        setSelectedPage(pageIndex)
    }
    function handleCreateAccount (){
        if(!name) return
        localStorage.setItem('username', name)
        handlePageChange(1)
    }
    useEffect( () =>{
      if(!localStorage) return
      if(localStorage.getItem('username'))
      {setName(localStorage.getItem('username'))
        setSelectedPage(1)
      }
    }, [])
  const pages = {
    0: <Welcome 
    handleCreateAccount = {handleCreateAccount}
    username= "hello username" name ={name} setName={setName}/>,
    1: <Dashboard name = {name} />,
    2: <Challenge />
  }

  return (
    <>
    
        
        
        
        <Layout>
          {pages[selectedPage]}
        </Layout>
 
        
        
        
    </>
  )
}

export default App
