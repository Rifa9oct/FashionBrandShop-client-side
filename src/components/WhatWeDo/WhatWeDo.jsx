import group from "../../assets/group.png"
import logo1 from "../../assets/logo1.png"
import logo2 from "../../assets/logo2.png"
import logo3 from "../../assets/logo3.png"
import logo4 from "../../assets/logo4.png"

const WhatWeDo = () => {
    return (
        <div className="max-w-[1320px] mx-auto mt-32">
            <h1 className="text-3xl md:text-4xl text-center mb-4 lg:mb-0"><span className="text-orange-600">What</span> we do</h1>
            <div className="lg:relative w-full">
                <img className="hidden lg:block" src={group} />
                <div className="lg:absolute w-3/4 lg:w-[950px] mx-auto lg:left-[200px] lg:top-[110px] p-8 border bg-[#FFF] rounded-lg shadow-xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="flex gap-6 items-center">
                            <img className="w-14 rounded-lg" src={logo1} />
                            <div>
                                <h1 className="md:text-xl font-bold text-orange-600 mb-2">Shop for latest wears</h1>
                                <p className="text-xs md:text-sm">Discover the hottest fashion trends at our store, where style meets sophistication in every garment.</p>
                            </div>
                        </div>
                        <div className="flex gap-6 items-center">
                            <img className="w-14 rounded-lg" src={logo4} />
                            <div>
                                <h1 className="md:text-xl font-bold text-orange-600 mb-2">Sell yours wears</h1>
                                <p className="text-xs md:text-sm">Transform your wardrobe into cash by selling your pre-loved fashion pieces with us.</p>
                            </div>
                        </div>
                        <div className="flex gap-6 items-center">
                            <img className="w-14 rounded-lg" src={logo2} />
                            <div>
                                <h1 className="md:text-xl font-bold text-orange-600 mb-2">Request for mesurment for a style</h1>
                                <p className="text-xs md:text-sm">Need a custom fit for your desired style? Request measurements for a perfect, tailored look.</p>
                            </div>
                        </div>
                        <div className="flex gap-6 items-center">
                            <img className="w-14 rounded-lg" src={logo3} />
                            <div>
                                <h1 className="md:text-xl font-bold text-orange-600 mb-2">Get your wears delivered to you</h1>
                                <p className="text-xs md:text-sm">Enjoy convenience with doorstep delivery your favorite wears brought right to your door.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhatWeDo;