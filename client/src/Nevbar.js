import './Nevbar.css';

export default function Navebar() {
    return(
        <div className="navbar">
            <div className="icon">
                <h2 className="logo">GymBattle</h2>
            </div>
            <div className="menu">
                <ul>
                    <li><a href="#">HOME </a></li>
                    <li><a href="#">ABOUT  </a></li>
                    <li><a href="#">PRACTICE</a></li>
                    <li><a href="#">TASK </a></li>
                    <li><a href="#">LOGIN </a></li>
                </ul>
            </div>
         </div>
    );
}
