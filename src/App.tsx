import { ToastContainer } from 'react-toastify';
import './App.css';
import { AppProvider } from './context/AppContext';
import Home from './pages/Home';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <AppProvider>
      <div className="App">
        <Home />

        <ToastContainer
          position='top-right'
          autoClose={10000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </AppProvider>
  );
}

export default App;
