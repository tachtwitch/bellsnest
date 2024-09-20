import Link from "next/link"
import Image from "next/image"
import styles from "../page.module.css"

const Content =  ({texts,images}:
    {texts:{author:string,authorCategory:string,contentTitle:string,contentDesc:string},
    images:{authorSrc: string,authorAlt:string,contentSrc:string,contentAlt:String}}) => {
    return(
        <div className="flex flex-col gap-1 w-full">
            <div className="flex flex-row gap-2 text-sm text-black-700 items-center">
                <div className="rounded-[100%] overflow-hidden relative w-8 h-8 box-border bg-center bg-no-repeat bg-cover ">
                    <Image src={images.authorSrc} alt={images.authorAlt} fill/>  
                </div>
                <span className="flex flex-row gap-1">
                    <p>{texts.author}</p> <i>in</i> <p>{texts.authorCategory}</p> 
                </span>
            </div>

            <div className="flex flex-row gap-4 items-center w-full">
                <h2 className="font-black text-lg">{texts.contentTitle}</h2>
                <div className=" rounded overflow-hidden relative w-20 h-20 box-border bg-center bg-no-repeat bg-cover ">
                    <Image src={images.contentSrc} alt={images.contentSrc} fill /> 
                </div>
                 
            </div>
            
            <div className=" text-base font-200 text-neutral-500 items-center">
                <p>{texts.contentDesc}</p>
            </div>

            <hr className="mt-2" />
        </div>
    )
}

export default Content