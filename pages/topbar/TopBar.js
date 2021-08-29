import Link from "next/link"

export default function TopBar() {
    return (
      
      <div className="top">
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <div className="topLeft">
          <div className="hero">
            <Link href="/">Batuhan</Link>
          </div>
          <div className="heroSecond">
            <Link href="/">Karaoglu</Link>
          </div>
        </div>

        <div className="topCenter">
          <ul className="topList">
            <li className="topListItem">
              <Link href="/"><a>HOME</a></Link>
            </li>
            <li className="topListItem">
              <Link href="/about-en"><a>ABOUT</a></Link>
            </li>
            <li className="topListItem">
              <Link href="/contact-en"><a>CONTACT</a></Link>  
            </li>
          </ul>
        </div>

        <div className="topRight">
          <Link href="https://www.linkedin.com/in/batuhan-karaoğlu-1393b6173">
              <i className="socIcon fab fa-linkedin"></i>
          </Link>
          <Link href="https://twitter.com/BthnKaraoglu">
              <i className="socIcon fab fa-twitter-square"></i>
          </Link>
          <Link href="https://www.instagram.com/batuhankaraoglu/">
              <i className="socIcon fab fa-instagram-square"></i>
          </Link>
          <Link href="https://github.com/mordeve">
              <i className="socIcon fab fa-github-square"></i>
          </Link>
        </div>
      </div>

    )
  }  