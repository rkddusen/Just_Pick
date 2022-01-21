import logo from '../images/logo.png'

export default function Nav() {
    return (
        <>
            <div className='navMenu'>
                <button className='createGame'>Create<br />Game</button>
                <a href='/game'>
                    <img src={logo} width='80' height='80' alt='logo' className='navMenuImg' />
                </a>
                <button className='deleteGame'>Delete<br />Game</button>
            </div>
            <hr className='navMenuLine' />
        </>
    );
}