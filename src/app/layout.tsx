import { ReactNode } from 'react';
import './globals.css';
import { Menu } from '@/components/Menu';
import { menuFont, spaceFont } from '@/fonts/fonts';



type Props = {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <html className={`${menuFont.variable} ${spaceFont.variable}`}>
      <body className='overflow-x-hidden'>
        <Menu/>
        {children}
      </body>
    </html>
  )
}

export default Layout;