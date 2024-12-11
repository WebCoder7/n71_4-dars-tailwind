import brends from '../utils/Brendlar.svg';

const brend = [
    { id: 1, img: brends },
    { id: 2, img: brends },
    { id: 3, img: brends },
    { id: 4, img: brends },
    { id: 5, img: brends },
    { id: 6, img: brends },
    { id: 7, img: brends },
    { id: 8, img: brends },
    { id: 9, img: brends },
    { id: 10, img: brends },
    { id: 11, img: brends },
];

function Brends() {
    return (
        <div className="container mx-auto pb-20     ">
            <h1 className='text-[35px] font-medium '>Do’konlarimiz</h1>
            <div className="grid grid-cols-5 gap-6 p-4  ">
                {brend.map((item) => (
                    <div
                        key={item.id}
                        className="shadow-lg rounded-lg overflow-hidden"
                    >
                        <img
                            src={item.img}
                            alt={`Brend ${item.id}`}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Brends;
