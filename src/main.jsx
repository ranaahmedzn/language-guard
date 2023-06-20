import ReactDOM from 'react-dom/client'
import './index.css'
import '@smastrom/react-rating/style.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Routes'
import AuthProvider from './providers/AuthProvider'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import axios from 'axios'
import { Toaster } from 'react-hot-toast'
import ThemeProvider from './providers/ThemeProvider'
import { HelmetProvider } from 'react-helmet-async';

const queryClient = new QueryClient()

axios.defaults.baseURL = "http://localhost:5000"

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <HelmetProvider>
        <AuthProvider>
          <RouterProvider router={router} />
          <Toaster />
        </AuthProvider>
      </HelmetProvider>
    </ThemeProvider>
  </QueryClientProvider>
)
