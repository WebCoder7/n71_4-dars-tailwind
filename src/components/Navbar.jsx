import logo from '../utils/Logo.jpg'
import icon1 from '../utils/icon1.jpg'
import icon2 from '../utils/icon2.png'

export default function Navbar() {
    return (
        <div className='container'>
            <div className="navbar  flex p-5 justify-between">
                <img src={logo} alt="" className=" w=[100%] logo" />
                <button className=' text-white  rounded-[10px] py-[10px]  px-[35px] bg-amber-300'>Katalog</button>
                <input className='  pl-4 bg-slate-200 w-[390px] h-[45px] border-none rounded-[10px] ' type="text" placeholder='Maxsulotlarni izlash' />
                <div className="icons flex gap-14 ">
                    <img src={icon1} alt="" />
                    <img src={icon2} alt="" />
                </div>
                <button className='   rounded-[10px] py-[10px]  px-[30px] bg-amber-300'>Kirish</button>

            </div>
        </div>
    )
}
