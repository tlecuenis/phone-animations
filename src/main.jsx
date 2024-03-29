import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {PageContextProvider} from './context/page.jsx'
import {JiggleContextProvider} from './context/jiggle.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PageContextProvider>
      <JiggleContextProvider>
        <App />
      </JiggleContextProvider>
    </PageContextProvider>
  </React.StrictMode>
)
