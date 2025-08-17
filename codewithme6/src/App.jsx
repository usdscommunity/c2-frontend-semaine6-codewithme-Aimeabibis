import './styles/App.css'
import Sidebar from './composants/Sidebar.jsx'
import Form from './composants/Form.jsx'

function App() {
  

  return (
    <>
      <main className='bg-white max-w-3xl min-w-xl rounded-md min-h-96 flex p-4 gap-8 '>
        <Sidebar />
        <Form />

      </main>
    </>
  )
}

export default App
