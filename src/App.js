import React from 'react'

import { About, Footer, Header, Skills, Work } from './container'
import FurtherInfo from './container/Work/FurtherInfo'
import {Navbar} from './components'
import './App.scss'

export const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Footer />
    </div>
  )
}


export default App