import { Route, Routes} from "react-router-dom"
import './App.css';
import Main from './component/Main';
import Login from './component/Login';
import Game from './component/Game';

function App(){
  
  return (
      <Routes>
        {/* url이 /만 있으면 Main 컴포넌트 */}
        <Route path ="/" element={<Main />} /> 

        {/* url이 /game이면 Game 컴포넌트 */}
        <Route path ="/game" element={<Game />} /> 

        {/* url이 /login이면 Login 컴포넌트 */}
        <Route path ="/login" element={<Login />} />  
      </Routes>
  );
}

export default App;
