import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './components/layout/Home'
import 'bootstrap/dist/css/bootstrap.min.css'
import ListadoClientes from './components/clientes/ListadoClientes'




const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/clientes',
    element: <ListadoClientes/>
  }
])


function App() {
  return (
  <section className=''>
   <RouterProvider router={router}/>
  </section>
  )
}

export default App
