import { MantineProvider } from '@mantine/core';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import 'tailwindcss/tailwind.css'; // Tailwind CSS
import App from './App.jsx';
import './index.css';
import store from './store/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <MantineProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </MantineProvider>
  // </React.StrictMode>,
)
