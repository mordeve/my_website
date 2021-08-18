import Link from "next/link"

export default function TopBar() {
    return (

      <div className="top">
        <div className="topLeft">
          <div className="hero">Batuhan</div>
          <div className="heroSecond">Karaoglu</div>
        </div>

        <div className="topCenter">
          <ul className="topList">
            <li className="topListItem">HOME</li>
            <li className="topListItem">ABOUT</li>
            <li className="topListItem">CONTACT</li>
            <li className="topListItem">WRITE</li>
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
        </div>


      </div>

    )
  }  