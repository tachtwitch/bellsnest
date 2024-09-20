import Image from "next/image";
import styles from "./page.module.css"
import Link from "next/link";
import FeaturedContent from "./ui/featured-content";
import Welcome from "./welcome";
import Header from "./ui/header";
import Content from "./ui/content";

export default function Home() {
  return (
    <div className="flex flex-col flex-[2]">
      <Header />
      <div className="m-4">
        <FeaturedContent section={"Featured Posts"} title={"Why you are shit in Efootball25"} img={{
          src: "/images/IMG1.jpg",
          alt: "cover photo"
        }} />

        <Content 
        texts={{author:"Anonymous",authorCategory:"Ethical Hacking",contentDesc:"contentDesc",contentTitle:"How i disabled Life in 19 Steps"}} 
        images={{authorSrc:'/images/bella.jpg',authorAlt:'bella',contentSrc:'/images/apollo.jpg',contentAlt:'apoolo'}}/>
      </div>
    </div>
  );
}
