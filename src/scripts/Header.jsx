
export default function Header(){
    return(
       
        <div className="home-container-header about-container-header">
            <ul className="flex items-stretch gap-10 mx-4 "> 
            <li><a href="/">Home</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/dev">Dev</a></li> 
            </ul>
        </div>
    )
}