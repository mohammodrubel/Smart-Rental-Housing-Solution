import Link from 'next/link'
import { ReactNode } from 'react'

interface CustomLinkProps {
    className:string,
    href: string
    children: ReactNode
}

function CustomLink({className, href, children }: CustomLinkProps) {
    return <Link className={className} href={href}>{children}</Link>
}

export default CustomLink
