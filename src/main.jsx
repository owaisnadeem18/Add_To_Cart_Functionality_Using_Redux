import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { persistor, store } from './store/store.js'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <Provider store = {store}>
        <PersistGate loading= {null} persistor={persistor} >
          <App />
        </PersistGate>
      </Provider>
    </StrictMode>
  </BrowserRouter>
)
