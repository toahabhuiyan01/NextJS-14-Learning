'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const navLinks = [
    { href: '/login', label: 'Login' },
    { href: '/register', label: 'Register' },
    { href: '/forgot-password', label: 'Forgot Password' },
    { href: '/reset-password', label: 'Reset Password' }
]
export default function ProductDetailsLayout(
    { children }: { children: React.ReactNode }
) {
    const [value, setValue] = useState('')
    const pathname = usePathname()

    return (
        <div>
            <h1>Auth Layout</h1>
            <input 
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <nav>
                <ul>
                    {
                        navLinks.map(link =>{
                            console.log(pathname, link.href)
                            const isActive = pathname.startsWith(link.href)
                            return (
                                <li key={link.href}>
                                    <Link 
                                        href={link.href}
                                        className={isActive ? 'font-bold' : 'text-blue-500'}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
            {children}
        </div>
    )
}