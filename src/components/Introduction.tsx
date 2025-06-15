const Introduction = () => {
  return (
    <div id="introduction" className="flex flex-col items-center justify-center p-15 h-1/2">
        <h1 className="text-4xl sm:text-8xl text-center font-bold">I’M ALANA WU</h1>
        <div className="flex flex-col sm:flex-row w-full max-w-6xl justify-between items-center gap-8 mt-8 border-y border-solid border-gray-800">
            <div className="flex-1 text-center sm:text-left text-xl">
                <p>Reflection of my work as a front-end developer, showcasing different range of projects.</p>
            </div>

            <div className="flex-1 flex justify-center">
                <img className="fade-edges" src="/portfolio_alanawu/IMG_1565.jpg" alt="" />
            </div>
            
            <div className="flex-1 flex flex-col justify-end items-end text-center sm:text-right h-90">
                <p className="text-xl uppercase text-gray-300">available for freelance work</p>
                <h1 className="text-5xl font-bold">SEP. 2025</h1>
            </div>
        </div>
    </div>
  )
}

export default Introduction