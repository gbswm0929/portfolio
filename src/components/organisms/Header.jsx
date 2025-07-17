import './Header.module.css'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header>
            <div>
                <label>PORTFOLIO</label>
                <nav>
                    <Link to='/'>Home<span></span></Link>
                    <Link to='/skill-stacks'>Skill Stacks<span></span></Link>
                    <Link to='/projects'>Projects<span></span></Link>
                </nav>
            </div>
        </header>
    )
}

export default Header