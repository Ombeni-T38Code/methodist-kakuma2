// src/data/galleryData.js

import image1 from "../assets/images/home/slider/1.webp";
import image2 from "../assets/images/home/slider/2.webp";
import image3 from "../assets/images/home/slider/3.webp";
import image4 from "../assets/images/home/slider/4.webp";
import image5 from "../assets/images/home/slider/5.webp";
import image6 from "../assets/images/home/slider/6.webp";
import image7 from "../assets/images/home/slider/7.webp";
import image8 from "../assets/images/home/slider/8.webp";
import image9 from "../assets/images/home/slider/9.webp";
import image10 from "../assets/images/home/slider/10.webp";
import image11 from "../assets/images/home/slider/11.webp";
import image12 from "../assets/images/home/slider/12.webp";
import image13 from "../assets/images/home/slider/13.webp";
import image14 from "../assets/images/home/slider/14.webp";

const localSliderImages = [
  { src: image1, alt: "Methodist church community life" },
  { src: image2, alt: "Methodist church worship moment" },
  { src: image3, alt: "Methodist church gathering" },
  { src: image4, alt: "Community fellowship" },
  { src: image5, alt: "Church service and worship" },
  { src: image6, alt: "Prayer and teaching" },
  { src: image7, alt: "Kakuma fellowship gathering" },
  { src: image8, alt: "Church family in worship" },
  { src: image9, alt: "Community outreach" },
  { src: image10, alt: "Methodist church worship session" },
  { src: image11, alt: "Prayer and devotion" },
  { src: image12, alt: "Church community events" },
  { src: image13, alt: "Fellowship and worship" },
  { src: image14, alt: "Methodist fellowship experience" },
];

export const galleryColumns = [
  localSliderImages.slice(0, 5),
  localSliderImages.slice(5, 10),
  localSliderImages.slice(10, 14),
];