import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../public/logo.png';

const Footer = () => {
  return (
    <footer className="pt-12 pb-8">
        <div className="container grid gap-y-8">
            <div className="grid gap-y-8 md:grid-cols-[repeat(2,1fr)] xxl:grid-cols-[repeat(4,max-content)] justify-between">
                <div>
                    <Link href='/' className='flex items-center gap-x-1 text-black font-bold text-h2  mb-2'>
                        <Image
                            src={logo}
                            alt={'Sahil'}
                            loading='eager'
                            className='w-6'
                        />
                        Sahil
                    </Link>
                    <p className="font-semibold max-w-[50ch]">Connecting Businesses.</p>
                    <ul className="flex gap-2.5 mt-2">
                        <li>
                            <a href="#" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 896 1664">
                                    <path fill="#067a46" d="M895 12v264H738q-86 0-116 36t-30 108v189h293l-39 296H592v759H286V905H31V609h255V391q0-186 104-288.5T667 0q147 0 228 12z"/>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 1600 1280">
                                    <path fill="#067a46" d="M1588 152q-67 98-162 167q1 14 1 42q0 130-38 259.5T1273.5 869T1089 1079.5t-258 146t-323 54.5q-271 0-496-145q35 4 78 4q225 0 401-138q-105-2-188-64.5T189 777q33 5 61 5q43 0 85-11q-112-23-185.5-111.5T76 454v-4q68 38 146 41q-66-44-105-115T78 222q0-88 44-163q121 149 294.5 238.5T788 397q-8-38-8-74q0-134 94.5-228.5T1103 0q140 0 236 102q109-21 205-78q-37 115-142 178q93-10 186-50z"/>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 1536 1536">
                                    <path fill="#067a46" d="M1024 768q0-106-75-181t-181-75t-181 75t-75 181t75 181t181 75t181-75t75-181zm138 0q0 164-115 279t-279 115t-279-115t-115-279t115-279t279-115t279 115t115 279zm108-410q0 38-27 65t-65 27t-65-27t-27-65t27-65t65-27t65 27t27 65zM768 138q-7 0-76.5-.5t-105.5 0t-96.5 3t-103 10T315 169q-50 20-88 58t-58 88q-11 29-18.5 71.5t-10 103t-3 96.5t0 105.5t.5 76.5t-.5 76.5t0 105.5t3 96.5t10 103T169 1221q20 50 58 88t88 58q29 11 71.5 18.5t103 10t96.5 3t105.5 0t76.5-.5t76.5.5t105.5 0t96.5-3t103-10t71.5-18.5q50-20 88-58t58-88q11-29 18.5-71.5t10-103t3-96.5t0-105.5t-.5-76.5t.5-76.5t0-105.5t-3-96.5t-10-103T1367 315q-20-50-58-88t-88-58q-29-11-71.5-18.5t-103-10t-96.5-3t-105.5 0t-76.5.5zm768 630q0 229-5 317q-10 208-124 322t-322 124q-88 5-317 5t-317-5q-208-10-322-124T5 1085q-5-88-5-317t5-317q10-208 124-322T451 5q88-5 317-5t317 5q208 10 322 124t124 322q5 88 5 317z"/>
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-h3 font-bold mb-2 lg:text-h3xl">Quick Links</h3>
                    <ul className="flex flex-col gap-y-3">
                        <li><Link href="/" className="p-1 font-medium text-base lg:text-basexl transition-[0.25s] duration-[ease] hover:text-green">Home</Link></li>
                        <li><Link href="/" className="p-1 font-medium text-base lg:text-basexl transition-[0.25s] duration-[ease] hover:text-green">About</Link></li>
                        <li><Link href="/" className="p-1 font-medium text-base lg:text-basexl transition-[0.25s] duration-[ease] hover:text-green">Services</Link></li>
                        <li><Link href="/" className="p-1 font-medium text-base lg:text-basexl transition-[0.25s] duration-[ease] hover:text-green">Gallery</Link></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-h3 font-bold mb-2 lg:text-h3xl">Company</h3>
                    <ul className="flex flex-col gap-y-3">
                        <li><Link href="" className="p-1 font-medium text-base lg:text-basexl transition-[0.25s] duration-[ease] hover:text-green">Support Center</Link></li>
                        <li><Link href="" className="p-1 font-medium text-base lg:text-basexl transition-[0.25s] duration-[ease] hover:text-green">Contact Us</Link></li>
                        <li><Link href="" className="p-1 font-medium text-base lg:text-basexl transition-[0.25s] duration-[ease] hover:text-green">FAQ</Link></li>
                        <li><Link href="" className="p-1 font-medium text-base lg:text-basexl transition-[0.25s] duration-[ease] hover:text-green">Terms & Conditions</Link></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-h3 font-bold mb-2 lg:text-h3xl">Contact Info</h3>
                    <ul className="flex flex-col gap-y-3">
                        <li><p className="p-1 font-medium text-base lg:text-basexl transition-[0.25s] duration-[ease] hover:text-green">Juba, South Sudan</p></li>
                        <li><p className="p-1 font-medium text-base lg:text-basexl transition-[0.25s] duration-[ease] hover:text-green">KN 78 Street, Kigali, Rwanda</p></li>
                        <li><a href="mailto:sahil.business@gmail.com" className="p-1 font-medium text-base lg:text-basexl transition-[0.25s] duration-[ease] hover:text-green">sahil.business@gmail.com</a></li>
                    </ul>
                </div>
            </div>
            <div className="relative flex flex-col text-center text-base lg:text-basexl font-semibold pt-8">
                <div className="w-full border border-solid border-[#eaecf0] mb-4"></div>
                <p className='font-semibold'>Copyright &copy; 2023 Sahil – Company Ltd</p>
            </div>
        </div>
    </footer>

  )
}

export default Footer