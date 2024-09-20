import Header from "./ui/header";

export default function Welcome(){
    return(
        <>
            <div className="flex flex-col flex-[2]">
                <Header/>
                <div className="flex flex-col gap-8 my-[75px] mx-8 align-right">
                    <div>
                        <h2 className=" text-[80px] -tracking-[0.1em] font-400 leading-none -tracking-[px]"> Welcome to bellsNest </h2>    
                    </div>
                    <p className="text-sm text-neutral-500 ">Read, write, learn and explore</p>
                    <button className="rounded-full p-4 bg-purple-500 text-white w-fit " type="button">Get Started</button>
                </div>
            </div>
        </>
    )
}