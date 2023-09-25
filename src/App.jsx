import { Provider } from 'react-redux'
import './App.css'
import * as store from './store/store.js'
import { Route, HashRouter as Router, Routes } from 'react-router-dom'
import { Home } from './views/Home/Home.jsx'
import { AppHeader } from './components/AppHeader/AppHeader.jsx'
import { ToyIndex } from './views/ToyIndex/ToyIndex'
import { About } from './views/About/About'
import { ToyDetails } from './views/ToyDetails/ToyDetails'
import { ToyEdit } from './components/ToyEdit/ToyEdit'
import { Dashborad } from './components/Dashboard/Dashborad'
function App() {

  return (
    <Provider store={store.store}>
      <Router>
        <AppHeader />
        <section>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/toy" element={<ToyIndex />} />
            <Route path="/toy/:toyId" element={<ToyDetails />} />
            <Route path="/toy/edit/:toyId" element={<ToyEdit />} />
            <Route path="/dashboard" element={<Dashborad />} />
          </Routes>
        </section>
      </Router>
    </Provider>
  )
}

export default App
