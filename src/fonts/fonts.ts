import { Barlow, Bellefair } from 'next/font/google';


export const menuFont = Barlow({
    weight: ['400'],
    variable: '--font-barlow',
    subsets: ['latin']
});

export const spaceFont = Bellefair({
    weight: ['400'],
    variable: '--font-bellefair',
    subsets: ['latin'],
    display: 'swap'
});