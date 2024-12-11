
import carusel from '../utils/kategory.jpg'


const kategory = [

    {
        id: 1,
        img: [carusel],
        title: "Smartfonlar",
    }, {
        id: 2,
        img: [carusel],
        title: "Smartfonlar",
    }, {
        id: 3,
        img: [carusel],
        title: "Smartfonlar",
    }, {
        id: 4,
        img: [carusel],
        title: "Smartfonlar",
    }, {
        id: 5,
        img: [carusel],
        title: "Smartfonlar",
    }, {
        id: 6,
        img: [carusel],
        title: "Smartfonlar",
    }, {
        id: 7,
        img: [carusel],
        title: "Smartfonlar",
    }, {
        id: 8,
        img: [carusel],
        title: "Smartfonlar",
    }
]




function Kategoriy() {
    return (
        <div className="container">
            <h1 className='text-[35px] font-medium  mt-20'>Kategoriyalar</h1>
            <div className="flex   gap-10">
                {kategory.map((item) => (
                    <div key={item.id} className="mb-10 mt-10 h-[200px] w-[135px] bg-white rounded-[10px]    shadow-md">
                        <img src={item.img} alt={item.title} className="  pt-2" />
                        <h2 className="text-center mt-2 ">{item.title}</h2>
                    </div>
                ))}

            </div>
            <button className=' mb-20 w-[1230px] h-10 bg-blue-100 rounded-[10px]    ' >Batafsil</button>

        </div>
    )
}

export default Kategoriy
