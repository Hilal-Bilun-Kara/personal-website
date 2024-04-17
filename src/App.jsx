
import './App.css'
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'

import Banner from './components/Banner'
import Skills from './components/Skills'
import Profile from './components/Profile'
import Projects from './components/Projects'
import Footer from './components/Footer'
import { UserContextProvider } from './context/UserContext'

function App () {
  


  return (
    
    
    <UserContextProvider>
      <Switch>
        <Route path="/">
        
            <Banner />
          <Skills/>
          <Profile/>
          <Projects/>
          <Footer/>
          </Route>
      </Switch>
      </UserContextProvider>
    
    
    
  )
}

export default App;
