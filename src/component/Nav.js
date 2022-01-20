import logo from '../images/logo.png'

export default function Nav(){
    return(
        <>
        <div className='navMenu'>
            <button className='createGame'>Plus<br />Game</button>
            <img src={logo} width='80' height='80' alt='logo' className='navMenuImg'/>
            <button className='myPage'>My<br />Page</button>
        </div>
        <hr className='navMenuLine'/>
        </>
    );
}