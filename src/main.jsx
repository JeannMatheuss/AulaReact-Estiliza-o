import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom' // responsavel por criar uma lista de rotas / alguma coisa
import Home from './routes/Home/index.jsx'
import Produtos from './routes/Produtos/index.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element: <Home/>
      },
      {
        path:'/produtos',
        element:<Produtos/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
