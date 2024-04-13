
export default function Header(props){

    let cssClass = props.className;
    let id = props.id;
    let cssClass2 = props.cssClass2;

    return(
       
        <div id={`${id}`} className={`${cssClass} text-lg `}>
            <ul className="flex items-stretch gap-10 mx-8 my-5"> 
                <li><a className=" hover:text-violet-600"  href="/">Home</a></li>
                <li><a className=" hover:text-violet-600" href="/contact">Contact</a></li>
                <li><a className=" hover:text-violet-600" href="/about">About</a></li>
                <div className="dropdown">
                    <button className={`dropbtn ${cssClass2} hover:text-violet-600`}> <a href="/works">Works</a></button>
                    <div className="dropdown-content">
                    <a className="hover:text-[#62878C]" href={'http://mawtestsite.local/works#mwdevices'}> MW Devices</a>
                    <a className="hover:text-[#A1B296]" href={'http://mawtestsite.local/works#dev'}> Dev</a>
                    <a className="hover:text-[#AF8497]" href={'http://mawtestsite.local/works#design'}> Brand & Design</a>
                    <a className="hover:text-[#B1C3C6]" href={'http://mawtestsite.local/works#music'}> Music</a>
                    </div>
                </div>
            </ul>
        </div>
    )
}
