import Posters from "@/components/film/posters"
import Image from "next/image"


const FilmPage = () => {
  return (
    <div className="bg-slate-900 h-full w-full">
        <div className="relative">
            <Image
                        src={'/film-hero.png'}
                        alt='film hero'
                        height={800}
                        width={1920}
            />
            <h1 className="text-5xl md:text-7xl font-black text-center text-slate-900 pb-10 absolute inset-20 md:inset-52">Film Work</h1>
        </div>
        
        <div className="container mx-auto text-center pt-20">
            
            <div className="flex flex-row justify-center p-5 w-[400px] md:w-1/2 bg-gradient-to-br from-slate-600 to-slate-800 rounded-xl shadow-lg">
                {/*
                <div>
                    <Image
                    src={'/hero-2.png'}
                    alt='iaste'
                    height={300}
                    width={300}
                    />
                </div> */}
                <div>
                    <Image
                    src={'/iatse.png'}
                    alt='iaste'
                    height={300}
                    width={300}
                    />
                </div>
                <div className="text-gray-300 inline-block items-center">
                    <h1 className="text-lg font-bold">Toronto Film Camera Union</h1>
                    <h1 className="text-lg font-bold">(IATSE 667)</h1>
                    <p className="text-xs md:text-md">Member since 2016</p>
                    <p className="pt-3">Position:</p>
                    <p className="font-semibold">UAV Camera Operator</p>
                    <p>Reference:</p>
                    <p className="font-semibold">camera@iatse667.com</p>
                </div>
            </div>
            <div>
                <h1 className="text-3xl font-semibold text-white py-10">Worked as an operator <span className="font-black text-[#73746f]">75</span> productions including:</h1>
            </div>
            <div className="pb-20 ">
                <Posters/>
            </div>
        </div>
    </div>
  )
}

export default FilmPage