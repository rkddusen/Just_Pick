import Nav from './Nav'
import Cont from './Cont'

export default function Game() {
    return (
        <div>
            <Nav></Nav>
            <div className='contWrap'>
                <Cont></Cont>
                <Cont></Cont>
                <Cont></Cont>
                <Cont></Cont>
                <Cont></Cont>
            </div>
        </div>
    );
}