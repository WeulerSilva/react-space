import Link from 'next/link';
import bgMobile from '../assets/home/background-home-mobile.jpg'

const Page = () => {
  return (
    <div 
      className={
        `w-dvw h-dvh bg-[url('../assets/home/background-home-mobile.jpg')] bg-cover bg-center
        md:bg-[url('../assets/home/background-home-tablet.jpg')] lg:md:bg-[url('../assets/home/background-home-desktop.jpg')] 
        md:h-max xl:flex xl:flex-col xl:justify-center xl:h-screen`} 
    >
      <div className='flex flex-col items-center justify-center pt-28 px-6 md:pt-52 xl:flex-row xl:px-0 xl:pt-0'>
        <div className='xl:w-[450px] xl:h-[382px] xl:flex-1 xl:text-left xl:mt-48 xl:pl-40'>
          <h6 className='font-[Barlow] text-indigo-200 text-base font-normal md:text-xl text-center
                         md:tracking-[3.38px] md:text-center xl:text-[28px] xl:tracking-[4.72px] xl:text-left'>
            ENTÂO, VOCE QUER VIAJAR PARA O
          </h6>

          <h1 className='text-[5rem] text-white font-normal font-bellefair text-center leading-[100px] py-4 
                        md:leading-[150px] md:text-[9.97rem] md:py-6 md:text-center xl:text-[150px] xl:text-left'
          >
            ESPAÇO
          </h1>

          <p className='text-center text-indigo-200 text-[0.93rem] font-normal font-barlow leading-[25px] 
                        md:text-base md:leading-7 md:px-40 xl:text-xl xl:leading-loose xl:px-0 xl:text-left'>
            Vamos encarar, se você quiser ir para o espaço, é melhor ir genuinamente para o espaço sideral e não ficar pairando na borda
            dele. Bem, sente-se e relaxe porque lhe proporcionaremos uma experiência verdadeiramente fora deste mundo!
          </p>
        </div>

        <div className='xl:flex-1 xl:flex xl:justify-center'>
          <Link href={'/destination'}>
            <div className='w-[150px] h-[150px] rounded-full bg-white flex justify-center items-center
                          text-gray-950 mt-20 text-xl font-normal font-bellefair tracking-wider md:w-[242px] md:h-[242px]
                          md:text-[32px] md:tracking-widest md:mt-[126px] xl:w-[274px] xl:h-[274px] xl:mt-[275px] xl:ml-[40px]
                          hover:border-[30px] hover:border-solid hover:border-gray-500 cursor-pointer transition-all'
            >
              EXPLORE
            </div>
          </Link>
        </div>
        
      </div>
    </div>
  )
}

export default Page;