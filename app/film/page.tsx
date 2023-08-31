import Image from "next/image"


const FilmPage = () => {
  return (
    <div className="bg-slate-900 h-screen w-full">
        <div className="container mx-auto text-center pt-20">
            <h1 className="text-5xl font-semibold text-white">Film Work</h1>
            <div className="flex flex-row justify-center">
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
            </div>
            
            <h2 className="text-white text-2xl">IATSE 667 member since 2016</h2>
            

        </div>
    </div>
  )
}

export default FilmPage