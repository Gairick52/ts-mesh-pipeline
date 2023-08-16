import {} from 'antd';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import AppHeader from './Components/Header';
import AppFooter from './Components/Footer';
import PageContent from './Components/PageContent';

function App() {
  return (
   <div className='App'>
    <BrowserRouter>
    <AppHeader/>
    <AppFooter/>
    <PageContent/>
    </BrowserRouter>
   </div>
  );
}



export default App;
