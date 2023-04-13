import { Route, Routes } from 'react-router-dom';
import Cabinet from './components/Cabinet';
import Orders from './components/Cabinet/Orders';
import Products from './components/Cabinet/Products';

const App = () => {
    return (
        <Routes>
            <Route path='/*' element={<Cabinet/>}/>
        </Routes>
    );
}

export default App;
