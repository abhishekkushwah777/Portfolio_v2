import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './Global.css'
import App from './App.jsx'
import { ThemeProvider } from './themeContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
)
