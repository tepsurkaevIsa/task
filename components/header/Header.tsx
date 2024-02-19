'use client'
import React from 'react'
import styles from './Header.module.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  {text: 'Давление',  href: '/'},
  {text: 'Пульс',  href: '/pulse'},
  {text: 'Температура',  href: '/temperature'},
  {text: 'Температура на улице',  href: '/nowtemperature'},
  {text: 'Графики',  href: '/charts'},
  ]

export const Header = ()=>{
  const pathname = usePathname()
 
  return (
    <nav className={styles.header}>
        <ul>
            {links.map(({text, href})=>{
              const isActive = pathname === href
              return(
                <li key={href}><Link className={isActive ? styles.active : ""}  href={href}>{text}</Link></li>
              )
            })}
        </ul>
    </nav>
  )
}

