import Link from "next/link"
import Image from "next/image"
import styles from "../page.module.css"

const FeaturedContent =  ({section,title,img}:{section:string,title:string,img:{src: string,alt:string}}) => {
    return(
        <div className="flex flex-col gap-4">
            <h1 className="heading">{section}</h1>

            <div className=" overflow-hidden relative w-full h-[41vw] box-border bg-center bg-no-repeat bg-cover ">
                <Image src={img.src} alt={img.src} fill/>  
            </div>
            <Link href='' className=" text-lg font-black">{title}</Link>
          </div>
    )
}

export default FeaturedContent
