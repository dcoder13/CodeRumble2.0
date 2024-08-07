import { HeroFooter } from "../components";
const Hero = () => (
    <div className="min-h-[80vh]">
        <div className="flex justify-center my-[13vh] md:my-[8vh] py-[2vh]">
            <div
                className="mx-auto flex flex-col items-center gap-6"
            >
                <img src="./heroLogo.png" className="md:h-[50vh]" alt="code rumble" />
                <button className="md:hidden flex bg-[#1A1A1A] px-8 py-3 rounded-full text-white font-bold ">Register Now</button>
            </div>
        </div>
        <HeroFooter/>
    </div>
)

export default Hero;