import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter} from 'react-router-dom';
import '@mantine/core/styles.css';
import '@mantine/tiptap/styles.css';
import '@mantine/dropzone/styles.css';

import './index.css'
import App from './App.jsx'
import ScrollToTop from './components/ScrollToTop/ScrollToTop.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> 
      <ScrollToTop /> {/*Anytime the Route path updates, the scroll to top will activate */}
     <App />
    </BrowserRouter>
  </StrictMode>
  
)
