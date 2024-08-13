// import p1 from "./assets/john.png"
// import p2 from "./assets/john2.png"
// import p3 from "./assets/john3.jpg"
import i11 from "./assets/1.1.jpg"
import i12 from "./assets/1.2.jpg"
import i13 from "./assets/1.3.jpg"
import i14 from "./assets/1.4.jpg"
import i15 from "./assets/1.5.jpg"
import i16 from "./assets/1.6.jpg"
import i17 from "./assets/1.7.jpg"
import i18 from "./assets/1.8.jpg"
import i19 from "./assets/1.9.png"
import i110 from "./assets/1.10.jpg"
import i111 from "./assets/1.11.jpg"
import i112 from "./assets/1.12.jpg"

import i21 from "./assets/2.1.jpg"
import i22 from "./assets/2.2.jpg"
import i23 from "./assets/2.3.jpg"
import i24 from "./assets/2.4.jpg"
import i25 from "./assets/2.5.jpg"
import i26 from "./assets/2.6.jpg"

import i31 from "./assets/3.1.jpg"
import i32 from "./assets/3.2.jpg"
import i33 from "./assets/3.3.jpg"
import i34 from "./assets/3.4.jpg"
import i35 from "./assets/3.5.jpg"
import i36 from "./assets/3.6.jpg"
import i37 from "./assets/3.7.jpg"

import i41 from "./assets/4.1.jpg"
import i42 from "./assets/4.2.jpg"
import i43 from "./assets/4.3.jpg"
import i44 from "./assets/4.4.jpg"
import i45 from "./assets/4.5.jpg"
import i46 from "./assets/4.6.jpg"
import i47 from "./assets/4.7.jpg"
import i48 from "./assets/4.8.jpg"
import i49 from "./assets/4.9.jpg"
import i410 from "./assets/4.10.jpg"

import i51 from "./assets/5.1.jpg"
import i52 from "./assets/5.2.jpg"
import i53 from "./assets/5.3.jpg"
import i54 from "./assets/5.4.jpg"
import i55 from "./assets/5.5.jpg"
import i56 from "./assets/5.6.jpg"
import i57 from "./assets/5.7.jpg"
import i58 from "./assets/5.8.jpg"
import i59 from "./assets/5.9.jpg"
import i510 from "./assets/5.10.jpg"
import i511 from "./assets/5.11.jpg"

import i61 from "./assets/6.1.jpg"
import i62 from "./assets/6.2.jpg"
import i63 from "./assets/6.3.jpg"
import i64 from "./assets/6.4.jpg"
import i65 from "./assets/6.5.jpg"
import i66 from "./assets/6.6.jpg"
import i67 from "./assets/6.7.jpg"

const baseball = [i11.src, i12.src, i13.src, i14.src, i15.src, i16.src, i17.src, i18.src, i19.src, i110.src, i111.src, i112.src];
const travel = [i21.src, i22.src, i23.src, i24.src, i25.src, i26.src];
const family = [i31.src, i32.src, i33.src, i34.src, i35.src, i36.src];
const friends = [i41.src, i42.src, i43.src, i44.src, i45.src, i46.src, i47.src, i48.src];
const brainrot = [i51.src, i52.src, i53.src, i54.src, i55.src, i56.src, i57.src, i58.src, i59.src, i510.src, i511.src];
const fancy = [i61.src, i62.src, i63.src, i64.src, i65.src, i66.src, i67.src];

export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Message", link: "#message" },
    { name: "Contact", link: "#contact" },
];
  
export const gridItems = [
    {
        id: 1,
        title: "Baseball",
        description: "",
        className: "lg:col-span-2 lg:row-span-2",
        //className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
        imgClassName: "w-full h-full",
        images: baseball,
    },
    {
        id: 2,
        title: "Travel",
        description: "",
        className: "lg:col-span-1 lg:row-span-1", 
        //className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        images: travel,
    },
    {
        id: 3,
        title: "Family",
        description: "",
        className: "lg:col-span-1 lg:row-span-1",
        //className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        images: family,
    },
    {
        id: 4,
        title: "Friends",
        description: "",
        className: "lg:col-span-1 lg:row-span-1",
        //className: "lg:col-span-2 md:col-span-3 md:row-span-1",
        imgClassName: "",
        images: friends,
    },
    {
        id: 5,
        title: "Fancy",
        description: "",
        //className: "md:col-span-3 md:row-span-2",
        className: "lg:col-span-1 lg:row-span-1",
        imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
        images: fancy,
    },
    {
        id: 6,
        title: "Brainrot",
        description: "I'm cooked",
        //className: "md:col-span-3 md:row-span-2",
        className: "lg:col-span-1 lg:row-span-1",
        imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
        images: brainrot,
    },
];

export const projects = [
    {
        id: 1,
        title: "Wordle Bot",
        description: "Developed a trend analysis program to formulate solutions to the famous NYT game by utilizing information theory, Python pandas, and numpy.",
        img: "/wordle.svg",
        iconLists: ["/python-svgrepo-com.svg", "/pandas-svgrepo-com.svg", "/plot-svgrepo-com.svg"],
        link: "https://gitfront.io/r/Matthewtershi/4BEfMKwzCBRH/wordleBot/",
    },
    {
        id: 2,
        title: "STD Tempest Dynamic Weather App",
        description: "Programmed a dynamic weather app that emphasizes allergy monitoring and fluency over cpp and api implementation.",
        img: "/cloud.svg",
        iconLists: ["/api-interface-svgrepo-com.svg", "/cpp-svgrepo-com.svg", "/curl-svgrepo-com.svg", "/c.svg"],
        link: "https://github.com/LasaACP/spring-practicum-2024-stdmtempest",
    },
    {
        id: 3,
        title: "AI Food Recognition and Calorie Tracker",
        description: "Exploring the development and basic structure of convolutional neural networks in image classification and algorithms to create a 95% accuracy prediction model. In the future, I plan to expand upon the test sets and introduce diverse cuisines to foster inclusion and improve health awareness.",
        img: "/food-ezgif.com-webp-to-jpg-converter.jpg",
        iconLists: ["/python-svgrepo-com.svg", "/keras-svgrepo-com.svg", "/numpy-svgrepo-com.svg", "/plot-svgrepo-com.svg", "/machine-learning-model-svgrepo-com.svg"],
        link: "https://gitfront.io/r/Matthewtershi/rgy3wVJ8iVef/foodRecog/",
    },
    {
        id: 4,
        title: "Advanced CS Course",
        description: "LASA Adv CS Repo 2023-2024 focusing exclusively on data structures and algorithms with CPP. From pointers to graphs and red-black trees, we explored the breadth and depth of each data structure and how to implement and understand them at a low level.",
        img: "/cpp.svg",
        iconLists: ["/cpp-svgrepo-com.svg", "/c.svg"],
        link: "https://gitfront.io/r/Matthewtershi/iqxJibjSHnvV/AdvCS2023-2024/",
    },
];

export const testimonials = [
    {
        quote:
        "You deserve better and should acknowledge that you are capable of doing what anyone else can. How you perceive yourself becomes a massive part of how others will perceive you meaning you're not beneath anyone unless you put yourself there. Argue for your limitations and you get to keep them.",
        name: "Illusions",
        title: "Richard Bach",
    },
    {
        quote:
        "Talent is cheaper than table salt. What separates the talented individual from the successful one is a lot of hard work. It's the willingness to push beyond the boundaries of your comfort zone, to keep going when others would quit, that ultimately defines success.",
        name: "On Write: A memoir of the Craft",
        title: "Stephen King",
    },
    {
        quote:
        "People who work hard won’t always succeed but the people who succeed always work hard. Do you really have time to be looking down; Nothing is stopping you from taking the next step.",
        name: "Haiykuu",
        title: "Haruichi Furudate",
    },
    {
        quote:
        "People declare themselves experts, entrepreneurs, inventors, innovaters, mavericks, and coaches without any real-life experience. And they do this not because they actually think they are greater than everybody else; they do it because they feel that they need to be great to be accepted in a world that broadcasts only the extraordinary. The key to a good life is not giving a fk about more; it's giving a fk about less, giving a fk about only what is true and immediate and important.",
        name: "The Subtle Art of Not Giving a Fck",
        title: "Mark Manson",
    },
    {
        quote:
        "It’s terrifying how easy it is to lose yourself in the idea of being what other people want you to be. The hardest thing is to keep hold of who you are in the face of all the expectations, all the noise.",
        name: "An Absolutely Remarkable Thing",
        title: "Hank Green",
    },
];

export const companies = [
    {
        id: 1,
        name: "cloudinary",
        img: "/cloud.svg",
        nameImg: "/cloudName.svg",
    },
    {
        id: 2,
        name: "appwrite",
        img: "/app.svg",
        nameImg: "/appName.svg",
    },
    {
        id: 3,
        name: "HOSTINGER",
        img: "/host.svg",
        nameImg: "/hostName.svg",
    },
    {
        id: 4,
        name: "stream",
        img: "/s.svg",
        nameImg: "/streamName.svg",
    },
    {
        id: 5,
        name: "docker.",
        img: "/dock.svg",
        nameImg: "/dockerName.svg",
    },
];

export const workExperience = [
    {
        id: 1,
        title: "Frontend Engineer Intern",
        desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
        className: "md:col-span-2",
        thumbnail: "/exp1.svg",
    },
    {
        id: 2,
        title: "Mobile App Dev - JSM Tech",
        desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
        className: "md:col-span-2", // change to md:col-span-2
        thumbnail: "/exp2.svg",
    },
    {
        id: 3,
        title: "Freelance App Dev Project",
        desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
        className: "md:col-span-2", // change to md:col-span-2
        thumbnail: "/exp3.svg",
    },
    {
        id: 4,
        title: "Lead Frontend Developer",
        desc: "Developed and maintained user-facing features using modern frontend technologies.",
        className: "md:col-span-2",
        thumbnail: "/exp4.svg",
    },
];

export const socialMedia = [
    {
        id: 1,
        img: "/git.svg",
        link: "https://github.com/Matthewtershi"
    },
    {
        id: 2,
        img: "/inst.svg",
        link: "https://www.instagram.com/matthew.sih8/",
    },
    {
        id: 3,
        img: "/link.svg",
        link: "https://www.linkedin.com/in/matthew-shi-a2376b239/",
    },
];