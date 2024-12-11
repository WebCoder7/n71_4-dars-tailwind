import note from '../utils/notebook.jpg'




const notebook = [

    {
        id: 1,
        img: [note],
        narx: "299 000 so’m",
        title: "Apple Airpods Pro simsiz quloqchin , Oq rangda   ",
        buyurytma: "1230 ta buyurtma"
    }, {
        id: 2,
        img: [note],
        narx: "299 000 so’m",
        title: "Apple Airpods Pro simsiz quloqchin , Oq rangda   ",
        buyurytma: "1230 ta buyurtma"
    }, {
        id: 3,
        img: [note],
        narx: "299 000 so’m",
        title: "Apple Airpods Pro simsiz quloqchin , Oq rangda   ",
        buyurytma: "1230 ta buyurtma"
    }, {
        id: 4,
        img: [note],
        narx: "299 000 so’m",
        title: "Apple Airpods Pro simsiz quloqchin , Oq rangda   ",
        buyurytma: "1230 ta buyurtma"
    }, {
        id: 5,
        img: [note],
        narx: "299 000 so’m",
        title: "Apple Airpods Pro simsiz quloqchin , Oq rangda   ",
        buyurytma: "1230 ta buyurtma"
    }, {
        id: 6,
        img: [note],
        narx: "299 000 so’m",
        title: "Apple Airpods Pro simsiz quloqchin , Oq rangda   ",
        buyurytma: "1230 ta buyurtma"
    }, {
        id: 7,
        img: [note],
        narx: "299 000 so’m",
        title: "Apple Airpods Pro simsiz quloqchin , Oq rangda   ",
        buyurytma: "1230 ta buyurtma"
    }, {
        id: 8,
        img: [note],
        narx: "299 000 so’m",
        title: "Apple Airpods Pro simsiz quloqchin , Oq rangda   ",
        buyurytma: "1230 ta buyurtma"
    }, {
        id: 9,
        img: [note],
        narx: "299 000 so’m",
        title: "Apple Airpods Pro simsiz quloqchin , Oq rangda   ",
        buyurytma: "1230 ta buyurtma"
    }, {
        id: 10,
        img: [note],
        narx: "299 000 so’m",
        title: "Apple Airpods Pro simsiz quloqchin , Oq rangda   ",
        buyurytma: "1230 ta buyurtma"
    },
]




function Sotuv() {
    return (
        <div>
            <h1 className='text-[35px] font-medium '>Eng ko’p sotilgan</h1>
            <div className="grid grid-cols-5 gap-6 p-4">
                {notebook.map((item) => (
                    <div
                        key={item.id}
                        className=" bg-white border rounded shadow-lg flex flex-col items-center justify-between"
                        style={{ width: "230px", height: "390px" }}
                    >
                        <img
                            src={item.img}
                            alt={item.title}
                            className=" pt-5 w-full h-2/5 object-cover rounded-t"
                        />
                        <div className="p-4 text-center">
                            <h3 className="font-bold text-sm mb-2">{item.title}</h3>
                            <p className="text-gray-600 mb-2">{item.narx}</p>
                            <p className="text-gray-500 text-xs">{item.buyurytma}</p>
                        </div>
                        <button className='rounded-[10px] py-[10px] mb-5  px-[25px] bg-amber-300'>Sotib olish</button>
                    </div>
                ))}
            </div>
            <button className='mt-10 mb-20 w-[1230px] h-10 bg-blue-100 rounded-[10px]    ' >Batafsil</button>


        </div>
    )
}

export default Sotuv
