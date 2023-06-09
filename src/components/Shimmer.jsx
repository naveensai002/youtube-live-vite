const Shimmer = () => {
  return (
    <>
      <div className='flex flex-wrap' data-testid='shimmer'>
        {Array(50)
          .fill([])
          .map((e, index) => (
            // <div key={index} className=' m-2 p-3 w-80 h-80'>
            //   <div className='w-full h-1/2 border rounded-xl bg-yellow-64  custom-linear-gradient animate-pulse'></div>
            //   <div
            //     className='w-[90%] h-[10%] mt-3 border rounded-lg
            //    bg-yellow-64  custom-linear-gradient animate-pulse '
            //   ></div>
            //   <div className='w-[70%] h-[7%]  mt-3 border rounded-lg bg-yellow-64 custom-linear-gradient animate-pulse'></div>
            //   <div className='w-[70%] h-[7%]  mt-3 border rounded-lg bg-yellow-64  custom-linear-gradient animate-pulse'></div>
            // </div>
            <section key={index} className='text-gray-700 body-font'>
              <div className='container px-5 py-24 mx-auto'>
                <div className='flex flex-wrap -m-4'>
                  <div className='p-4 md:w-80'>
                    <div className='h-full border-2 border-gray-200 rounded-lg overflow-hidden'>
                      <div className='lg:h-48 bg-gray-400 md:h-36 w-full object-cover object-center'></div>
                      <div className='p-6'>
                        <h2 className='bg-gray-400 animate-pulse h-4 w-1/4 mb-2'></h2>
                        <h1 className='w-80 mb-4 h-6 animate-pulse bg-gray-500'></h1>
                        <p className='leading-relaxed mb-3 w-full h-3 animate-pulse bg-gray-400'></p>
                        <p className='leading-relaxed mb-3 w-2/3 h-3 animate-pulse bg-gray-400'></p>
                        <p className='leading-relaxed mb-3 w-1/2 h-3 animate-pulse bg-gray-400'></p>
                        <div className='flex items-center flex-wrap '>
                          <a className='bg-indigo-300 h-4 animate-pulse mt-2 w-32 inline-flex items-center md:mb-2 lg:mb-0'></a>
                          <span className='bg-indigo-300 w-16 mt-2 h-4 animate-pulse mr-3 px-2 inline-flex items-center ml-auto leading-none text-sm pr-5 py-1'></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          ))}
      </div>
    </>
  );
};
export default Shimmer;
