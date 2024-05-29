import React from 'react';
import ReactDOM from 'react-dom/client';
import { App }  from './App';
import { BrowserRouter } from "react-router-dom";
import { Suspense } from 'react';
import './index.css';
import "./styles.css";
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
        <App />
      </Suspense>
    </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);
