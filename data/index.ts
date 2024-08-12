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

import i41 from "./assets/4.1.jpg"
import i42 from "./assets/4.2.jpg"
import i43 from "./assets/4.3.jpg"
import i44 from "./assets/4.4.jpg"
import i45 from "./assets/4.5.jpg"
import i46 from "./assets/4.6.jpg"
import i47 from "./assets/4.7.jpg"
import i48 from "./assets/4.8.jpg"

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

const baseball = [i11.src, i12.src, i13.src, i14.src, i15.src, i16.src, i17.src, i18.src, i19.src, i110.src, i111.src, i112.src];
const travel = [i21.src, i22.src, i23.src, i24.src, i25.src, i26.src];
const family = [i31.src, i32.src, i33.src, i34.src, i35.src, i36.src];
const friends = [i41.src, i42.src, i43.src, i44.src, i45.src, i46.src, i47.src, i48.src];
const brainrot = [i51.src, i52.src, i53.src, i54.src, i55.src, i56.src, i57.src, i58.src, i59.src, i510.src, i511.src];

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
        title: "Brainrot",
        description: "I'm cooked",
        //className: "md:col-span-3 md:row-span-2",
        className: "lg:col-span-2 lg:row-span-1",
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
        iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
        link: "https://github.com/adrianhajdin?tab=repositories",
    },
    {
        id: 2,
        title: "STD Tempest Dynamic Weather App",
        description: "Programmed a dynamic weather app that emphasizes allergy monitoring and fluency over cpp and api implementation.",
        img: "/cloud.svg",
        iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
        link: "https://github.com/adrianhajdin/zoom-clone",
    },
    {
        id: 3,
        title: "AI Food Recognition and Calorie Tracker",
        description: "Exploring the development and basic structure of convolutional neural networks in image classification and algorithms to create a 95% accuracy prediction model. In the future, I plan to expand upon the test sets and introduce diverse cuisines to foster inclusion and improve health awareness.",
        img: "/food-ezgif.com-webp-to-jpg-converter.jpg",
        iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
        link: "https://github.com/adrianhajdin/ai_saas_app",
    },
    {
        id: 4,
        title: "Advanced CS Course",
        description: "LASA Adv CS Repo 2023-2024 focusing exclusively on data structures and algorithms with CPP. From pointers to graphs and red-black trees, we explored the breadth and depth of each data structure and how to implement and understand them at a low level.",
        img: "/cpp.svg",
        iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
        link: "https://github.com/adrianhajdin/iphone",
    },
];

export const testimonials = [
    {
        quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
        name: "Michael Johnson",
        title: "Director of AlphaStream Technologies",
    },
    {
        quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
        name: "Michael Johnson",
        title: "Director of AlphaStream Technologies",
    },
    {
        quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
        name: "Michael Johnson",
        title: "Director of AlphaStream Technologies",
    },
    {
        quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
        name: "Michael Johnson",
        title: "Director of AlphaStream Technologies",
    },
    {
        quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
        name: "Michael Johnson",
        title: "Director of AlphaStream Technologies",
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