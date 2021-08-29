import React from "react";
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link"
import profilePic from '/images/me_2.jpeg'
import NavLink from './../components/NavLink'
import styled from 'styled-components'

const NavStyle = styled.nav`
a {
        &[aria-current] {
            color: #cccccc;
    }
}`;

export default function Contact() {
    return (
        <>
        <NavStyle className="lang">
            <NavLink scroll={false} href="/contact"><a className="lang_tr">TR</a></NavLink>
            |
            <NavLink scroll={false} href="/contact-en"><a className="lang_en">EN</a></NavLink>
        </NavStyle>

        <div className={styles.contact_container_up}>
            <Head>
                <title>Contact</title>
                <meta name="description" content="Generated by create next app" />
                <link rel = "icon" href = "https://image.flaticon.com/icons/png/512/2639/2639672.png" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ==" crossOrigin="anonymous" referrerpolicy="no-referrer" />
            </Head>

            <div className={styles.contact_container}>
                <h2 style={{'font-size': '3vw', 'margin-top': '0'}}>Contact</h2>
            <div className={styles.about_section}>
                <Image
                    st
                    className={styles.rounded_image}
                    src={profilePic} alt='Picture of the author.'
                    width={260}
                    height={174}
                />
                <p className={styles.name}>Batuhan Karaoğlu</p>
                <p>I’m an electronic engineer with experience in developing signal processing, 
                    image processing and machine learning projects.
                </p>

                <div className={styles.header_contact}>
                    <div className={styles.mailto}>
                        <a href="mailto:b.karaoglu_1907@hotmail.com">
                            <p className={styles.email}>
                                b.karaoglu_1907@hotmail.com
                            </p>
                        </a>
                        {/* <a href="tel:+905535313411">
                            <p className={styles.email}>
                                +90 553 531 34 11
                            </p>
                        </a> */}
                    </div>
                    <div className={styles.cv_download}>
                        <a href='/files/cv.pdf' download>Click to access my CV</a>
                    </div>
                </div>
            </div>
        </div>
        </div>  
        </>
    )
}
