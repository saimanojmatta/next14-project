'use client'
import { useState } from 'react'
import styles from './links.module.css'
import NavLink from "./navLink/NavLink"
import Image from 'next/image'
import { HandleLogout } from '@/lib/action'
const Links = ({session}) => {
    const links=[
        {title:"Homepage",path:"/"},
        {title:"About",path:"/about"},
        {title:"Contact",path:"/contact"},
        {title:"Blog",path:"/blog"},
    ]
    const [isOpen,SetIsOpen]=useState(false)
    
     // TEMPORARY
  // const session = true;
  // const isAdmin = true;

    return (
        <div className={styles.container}>
            <div className={styles.links}>
                {links.map(link=>(
                    <NavLink item={link} key={link.title}/>
                ))}
                        {session?.user?(
                            <>
                        { session.user?.isAdmin  && <NavLink item={{title:"Admin",path:'/admin'}}/>}
                        <form action={HandleLogout}>
                            <button className={styles.logout}>Logout</button>
                        </form>
                            </>
                        ):(
                        <NavLink item={{title:"Login",path:"/login"}}/>
                        )}
            </div>
            <Image className={styles.menuButton} onClick={()=>SetIsOpen((prev=>!prev))} src="/menu.png" alt='' width={30} height={30}/>
            {
                isOpen && (
                    <div className={styles.mobileLinks}>
                        {Links.map(link=>(
                            <NavLink item={link} key={link.title}/>
                        ))}
                    </div>
                )
            }
        </div>
  )
}
export default Links