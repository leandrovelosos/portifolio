//componentes
import MainContent  from './components/MainContent'
import  Sidebar  from './components/Sidebar'

//styles
import './styles/components/app.sass'


function App() {
  return (
    <div id="portifolio">
      <h1>
        Leandro Veloso
      </h1>
      <Sidebar/>
      <MainContent/>
      </div>
  )
}

export default App
