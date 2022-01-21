import logo from "../images/logo.png";
import {Link} from "react-router-dom"

export default function Main(){

  return(
    <div className="MainPage">
      <div>
        <div className='MainLogo'>
          <img  src={logo} width='300' height='300' alt='logo' />
        </div>
        {/* 버튼 누르면 url에 /game추가 */}
        <Link to="/game">
          <button className='mainStartButton'>Start!</button>
        </Link>

        {/* 버튼 누르면 url에 /login추가 */}
        <Link to="/login">
          <button className='mainLoginButton'>Sign in / Sign up</button>
        </Link>
      </div>
    </div>
    );
}