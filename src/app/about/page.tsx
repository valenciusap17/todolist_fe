import Navbar from "../components/Navbar/Navbar";

export default function Home() {
  return (
    <>
      <div className='h-screen bg-white flex flex-col'>
        <Navbar />
        <div className='flex justify-center items-center h-[90vh]'>
          <div className='grid grid-cols-2 mx-auto gap-8'>
            <div className=" w-48 h-48 mx-auto bg-[url('/images/Ferry.jpeg')] bg-no-repeat rounded-full bg-cover "></div>
            <div className=" w-48 h-48 mx-auto bg-[url('/images/Valen.jpg')] bg-no-repeat rounded-full bg-cover"></div>
            <div className='flex flex-col gap-4 items-center justify-center'>
              <div className="text-3xl">Ferry</div>
              <div className="text-xl">Universitas Indonesia</div>
              <div>Fakultas Ilmu Komputer</div>

            </div>
            <div className='flex flex-col gap-4 items-center justify-center'>
              <div className="text-3xl">Valencius Apriady Primayudha</div>
              <div className="text-xl">Universitas Indonesia</div>
              <div>Fakultas Ilmu Komputer</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
