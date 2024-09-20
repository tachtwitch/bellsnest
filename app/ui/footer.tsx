import { facebookIcon, githubIcon, instagramIcon, XIcon } from "./icons";

export function Footer() {
    return(
        <div className=" flex flex-col gap-2 p-4 static left-0 right-0 bottom-0 capitalize bg-neutral-950 text-white">
            {/* socials */}
            <div className="flex flex-row gap-4 px-2 py-2 self-center item-center ">
                <span>
                    {facebookIcon()}
                </span>

                <span>
                    {instagramIcon()}
                </span>

                <span>
                    {XIcon()}
                </span>

                <span>
                    {githubIcon()}
                </span>
            </div>

            <div className="w-full">
                <p className="upperacse text-center" >@2024 bellsnest llc. all rights reserved</p>
            </div>
        </div>
    )
}