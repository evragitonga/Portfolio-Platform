import Header from './components/Header'
import './App.css'
import ProjectList from './components/ProjectList'

function App() {

  return (
    <>
      <div>
        <div className='headerContainer'>
          <Header/>
        </div>
        <ProjectList />
      </div>
    </>
  )
}

export default App
