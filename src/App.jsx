import { RouterProvider } from 'react-router-dom'
import './App.css'
import { router } from './Routes/routes'

function App() {

  return (
    <div data-theme="light" className="max-w-7xl mx-auto">
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
