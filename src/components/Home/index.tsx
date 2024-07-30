import React from 'react';

const Home = () => {
    return (
        <div className='scroll-smooth'>
            <div className="bg-white ">
                <div className="flex flex-row p-4 md:p-8 justify-between items-center space-x-4 w-full">
                    <div className="flex-shrink-0" >
                        <a href="#">
                            <span>VR</span>
                            {/* <img src="https://www.logologo.com/logos/dragon-logo-design-free-logo.jpg" className="h-12 w-12 md:h-20 md:w-20" alt="Logo" /> */}
                        </a>
                    </div>
                    <div className="flex-grow flex justify-center space-x-4 text-lg ">
                        <a className="border-b-4 border-orange-500 pb-1 hover:border-orange-500  " href='#about'>
                            About
                        </a>
                        <a className="border-b-4 border-transparent hover:border-orange-500 pb-1" href='#experience'>
                            Work
                        </a>
                        <a className="border-b-4 border-transparent hover:border-orange-500 pb-1" href='#contact'>
                            Contact
                        </a>
                    </div>
                    <div className="flex-shrink-0">
                        <a className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" href='mailto:ramanivaidik0509@gmail.com'>
                            Hire me!
                        </a>
                    </div>
                </div>
            </div>
            <div className='light:bg-[#FFFFFF] dark:bg-[#121010]'>
                <div className='max-w-[90%] xl:max-w-[1200px] mx-auto my-0 px-4 '>
                    <div className='text-center py-[60px]'>
                        <h4 className='text-[#0E1C36] dark:text-[#FFF7E1] font-Muli tracking-[2px] leading-[25px] font-normal text-[15px] es:text-[17px] sm:text-[20px] tracking-[3px]'>VAIDIK RAMANI</h4>
                        <div className='mt-[10px] text-[45px] es:text-[60px] sm:text-[80px] md:text-[110px] lg:text-[130px]  leading-[60px] es:leading-[70px] sm:leading-[90px] md:leading-[120px] lg:leading-[143px] font-Abril  font-normal text-[#0E1C36] dark:text-[#FFF7E1] capitalize'>
                            <div>Making</div>
                            <div className='text-[#FC7355]'>Good</div>
                            <div>Shit</div>
                            <div>Since</div>
                            <div>202<span className='text-[#FC7355]'>4</span></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='light:bg-[#FFFFFF] dark:bg-[#121010]' id='about'>
                <div className='max-w-[90%] xl:max-w-[1200px] mx-auto py-[50px] es:py-[60px] sm:py-[100px] md:py-[150px] px-4'>
                    <div className='text-center vs:text-left'>
                        <h4 className='text-[#0E1C36] dark:text-[#FFF7E1] font-Muli tracking-[2px] leading-[25px] font-normal text-[17px] sm:text-[20px] text-center tracking-[0.2em]'>ABOUT ME</h4>
                        <h3 className='text-[#0E1C36] dark:text-[#FFF7E1] text-[20px] sm:text-[30px] md:text-[35px] lg:text-[48px] leading-[30px] sm:leading-[40px] md:leading-[45px] lg:leading-[65px] font-Muli  font-bold mt-[7px] vs:mt-[15px] sm:mt-[20px] md:mt-[30px]'><span>When it comes to develop, attention to <span className='text-[#FC7355] '>is the name of the game.</span></span>I got that eagle eye that can spot even the smallest imperfections and make sure your user experience is smooth like butter.</h3>
                    </div>
                </div>
            </div>
            <div className='light:bg-[#FFFFFF] dark:bg-[#121010]' id='expertise'>
                <div className='max-w-[90%] xl:max-w-[1200px] mx-auto  px-4'>
                    <div>
                        <h4 className='text-[#0E1C36] dark:text-[#FFF7E1] font-Muli tracking-[2px] leading-[25px] font-normal text-[15px] es:text-[17px] sm:text-[20px] text-center tracking-[0.2em]'></h4>
                        <div className='mt-[30px] sm:mt-[40px]'>
                            <ul className=' text-center grid grid-cols-2 vs:grid-cols-3 sm:grid-cols-4  md:grid-cols-5 lg:grid-cols-7  auto-rows-auto gap-10 content-center capitalize'>
                                <li className='mx-auto'>React</li>
                                <li className='mx-auto'>Next</li>
                                <li className='mx-auto'>Node</li>
                                <li className='mx-auto'>sass</li>
                                <li className='mx-auto'>git</li>
                                <li className='mx-auto'>angular</li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='light:bg-[#FFFFFF] dark:bg-[#121010]'>
                <div className='max-w-[90%] xl:max-w-[1200px] mx-auto py-[50px] es:py-[80px] sm:py-[100px] md:py-[150px] px-4'>
                    <div className='text-center vs:text-left'>
                        <h4 className='text-[#0E1C36] dark:text-[#FFF7E1] font-Muli tracking-[2px] leading-[25px] font-normal text-[15px] es:text-[17px] sm:text-[20px] text-center tracking-[3px]'> EXPERIENCE & CLIENT</h4>
                        <h3 className='text-[#0E1C36] dark:text-[#FFF7E1]  text-[20px] sm:text-[30px] md:text-[35px] lg:text-[48px]  leading-[35px] sm:leading-[40px] md:leading-[45px] lg:leading-[65px] font-Muli  font-bold mt-[7px] vs:mt-[15px] sm:mt-[20px] md:mt-[30px]'><span>Overspan <span className='text-[#FC7355]'>a decade</span> of experience in development and design.</span>   And working with some of the most talented people in the business.</h3>
                    </div>
                </div>

            </div>
            <div>
                <div className='text-center vs:text-left relative top-0 overflow-hidden hover:overflow-visible' id='experience'>
                    <div className='bg-[#F1F1F1] dark:bg-[#0E0C0C] border-b-2 border-Emperor-500  dark:border-[#5252527f]'>
                        <div className='max-w-[90%] xl:max-w-[1200px] mx-auto my-[0px] px-4  group group-hover:block'>
                            <h2 className='font-Mont font-bold text-[#0E1C36] dark:text-[#FFF7E1]  text-[23px] vs:text-[35px] sm:text-[50px] md:text-[60px] lg:text-[70px] xl:text-[80px] leading-[65px] vs:leading-[90px] md:leading-[100px] lg:leading-[120px] xl:leading-[150px] 2xl:leading-[180px] tracking-[-0.07em] uppercase '>
                                Aimbrill
                            </h2>
                            <div className='absolute translate-y-[-50%] top-[10%] right-[50px] vs:right-[100px] z-[-10] group-hover:z-[10] w-'>
                                <img loading='lazy' width={300} height={300} decoding='async' style={{ color: 'transparent' }} src="https://cf.bstatic.com/xdata/images/hotel/max500/31204963.jpg?k=90c11832231c37a814e9631123bd28820e8ad8cd983b78ad529ea139791653d1&o=&hp=1" alt="" className='z-1 w-[300px] h-[400px] object-cover object-top ' />
                            </div>
                        </div>

                    </div>
                    <div className='bg-[#F1F1F1] dark:bg-[#0E0C0C] border-b-2 border-Emperor-500  dark:border-[#5252527f]'>
                        <div className='max-w-[90%] xl:max-w-[1200px] mx-auto my-[0px] px-4  group group-hover:block'>
                            <h2 className='font-Mont font-bold text-[#0E1C36] dark:text-[#FFF7E1]  text-[23px] vs:text-[35px] sm:text-[50px] md:text-[60px] lg:text-[70px] xl:text-[80px] leading-[65px] vs:leading-[90px] md:leading-[100px] lg:leading-[120px] xl:leading-[150px] 2xl:leading-[180px] tracking-[-0.07em] uppercase '>
                                Aimbrill
                            </h2>
                            <div className='absolute translate-y-[-50%] top-[10%] right-[50px] vs:right-[100px] z-[-10] group-hover:z-[10] w-'>
                                <img loading='lazy' width={300} height={300} decoding='async' style={{ color: 'transparent' }} src="https://ik.imgkit.net/3vlqs5axxjf/external/ik-seo/https://www.cfmedia.vfmleonardo.com/imageRepo/6/0/95/648/302/Taj_Mahal_Tower_Mumbai_75768_O/The-Taj-Mahal-Palace-Tower-Exterior.jpg?tr=w-780%2Ch-437%2Cfo-auto " alt="" className='z-1 w-[300px] h-[400px] object-cover object-top ' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='light:bg-[#FFFFFF] dark:bg-[#121010]' id='contact'>
                <div className='max-w-[90%] xl:max-w-[1200px] mx-auto pt-[20px] es:pt-[50px] sm:pt-[70px] md:pt-[130px] lg:pt-[220px] pb-[0px] md:pb-[30px] px-4 text-center'>
                    <div>
                        <a href="mailto:ramanivaidik0509@gmail.com">
                            <h2 className='text-[#FC7355] font-Abril font-normal text-center md:text-left text-[60px] vs:text-[80px] sm:text-[100px] lg:text-[120px] xl:text-[130px] 2xl:text-[144px] leading-[60px] vs:leading-[90px] sm:leading-[130px] 2xl:leading-[158px]'>
                                Let's Get Connect
                            </h2>
                        </a>
                    </div>
                </div>
            </div>
            <div className='light:bg-[#FFFFFF] dark:bg-[#121010]'>
                <div>
                    <ul className='flex justify-center items-baseline'>
                        <li className='mx-[12px] sm:mx-[25px] cursor-pointer hover:scale-125 duration-100'>
                            <a href='mailto:ramanivaidik0509@gmail.com'>Gmail(Put here svg icon)</a>
                        </li>
                        <li className='mx-[12px] sm:mx-[25px] cursor-pointer hover:scale-125 duration-100'>
                            <a href='mailto:ramanivaidik0509@gmail.com'>Gmail(Put here svg icon)</a>
                        </li>
                        <li className='mx-[12px] sm:mx-[25px] cursor-pointer hover:scale-125 duration-100'>
                            <a href='mailto:ramanivaidik0509@gmail.com'>Gmail(Put here svg icon)</a>
                        </li>
                        <li className='mx-[12px] sm:mx-[25px] cursor-pointer hover:scale-125 duration-100'>
                            <a href='mailto:ramanivaidik0509@gmail.com'>Gmail(Put here svg icon)</a>
                        </li>
                        <li className='mx-[12px] sm:mx-[25px] cursor-pointer hover:scale-125 duration-100'>
                            <a href='mailto:ramanivaidik0509@gmail.com'>Gmail(Put here svg icon)</a>
                        </li>
                    </ul>
                </div>

            </div>
        </div >
    );
}

export default Home;
