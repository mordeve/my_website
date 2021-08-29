import Link from "next/link";
import Image from "next/image";

export default function Header() { 
    return (
        <div className="header"> 
            <div className="headerTitles">
                <span className="headerTitleLg">DeepBlog</span>
                <span className="headerTitleSm">
                    <li className="headerList">Software</li>
                    <li className="headerList">Machine Learning</li>
                    <li className="headerList">Engineering</li>
                    <li className="headerList">Technology</li>
                </span>

            </div>
            <Image
                className="headerImg"
                src="https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                //src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
            />
        </div>
    );
}