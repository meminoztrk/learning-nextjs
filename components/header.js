import Link from 'next/link'
import React from 'react'

const header = () => {
    return (
        <header className='bg-blue-500 text-white font-finlandica'>
            <nav>
                <ul className='flex gap-x-5 container mx-auto h-12 items-center'>
                    <li className=' font-roboto'>
                        <Link href="/about">Hakkımda</Link>
                    </li>
                    <li>
                        <Link href="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link href="/blog/post">Post</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default header;