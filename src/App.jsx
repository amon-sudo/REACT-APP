import Layout from "./components/layouts/layout"
import Welcome from "./components/layouts/Welcome"
import Dashboard from "./components/layouts/Dashboard"
import Challenge from "./components/Challenge"
function App(props) {


  return (
    <>
    
        
        
        
        <Layout>

                <Welcome/>
                <Dashboard />
                <Challenge />
        </Layout>
 
        
        
        
    </>
  )
}

export default App
