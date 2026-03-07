import Layout from "./components/layouts/layout"
import Welcome from "./components/layouts/Welcome"
import Dashboard from "./components/layouts/Dashboard"
import Challenge from "./components/Challenge"
function App(props) {
  const selectedPage = 2  // 0 is for the welcome page, 1 is for the dashbaord and 2 is for the challenge page
  const pages = {
    0: <Welcome />,
    1: <Dashboard />,
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
