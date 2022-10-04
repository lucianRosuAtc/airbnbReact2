import logo from '../img/airbnb.png'

export default function Header(){
    return(
        <nav>
           <img src = {logo} className="nav--logo" alt="airbnb log" />
        </nav>
    )
}