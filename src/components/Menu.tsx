import logoSvg from '@/assets/shared/logo.svg';
import { MenuMobile } from './MenuMobile';
import { NavList } from './NavList';


export const Menu = () => {
    return (
        <header className='fixed w-full'>
            <nav className='flex justify-between items-center m-6 md:m-0 xl:mt-10'>
                <div>
                    <img src={logoSvg.src} alt="" className='w-10 h-10 md:w-12 md:h-12 md:ml-6 xl:ml-14'/>
                </div>
                <div className='md:w-[550px] md:bg-white md:bg-opacity-5 md:backdrop-blur-[81.55px]
                                md:flex md:justify-center md:items-center md:h-24 xl:w-[830px] xl:h-24'>
                    <div className='hidden w-[473px] h-px opacity-25 bg-white absolute right-[790px] xl:block'></div>
                    <ul className='hidden md:flex'>
                        <NavList showSpan={true}/>
                    </ul>
                    <div className='flex md:hidden'>
                        <MenuMobile/>
                    </div>
                </div>
            </nav>
        </header>
    )
}