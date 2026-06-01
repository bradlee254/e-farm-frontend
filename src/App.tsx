import { Toaster } from 'sonner'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '@/pages/home'

function App() {
  return (
    <>

      <Toaster position="top-right" />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
      

    
      
    
  );
}

export default App;