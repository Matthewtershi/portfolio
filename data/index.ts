import p1 from "./assets/john.png"
import p2 from "./assets/john2.png"
import p3 from "./assets/View recent photos.jpg"

const IMAGES = [p1.src, p2.src, p3.src];

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
        images: IMAGES,
    },
    {
        id: 2,
        title: "Travel",
        description: "",
        className: "lg:col-span-1 lg:row-span-1", 
        //className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        images: IMAGES,
    },
    {
        id: 3,
        title: "Family",
        description: "asdfasdfasdf",
        className: "lg:col-span-1 lg:row-span-1",
        //className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        images: IMAGES,
    },
    {
        id: 4,
        title: "Friends",
        description: "",
        className: "lg:col-span-1 lg:row-span-1",
        //className: "lg:col-span-2 md:col-span-3 md:row-span-1",
        imgClassName: "",
        images: IMAGES,
    },
    {
        id: 5,
        title: "Brainrot",
        description: "Shenanigan ts",
        //className: "md:col-span-3 md:row-span-2",
        className: "lg:col-span-2 lg:row-span-1",
        imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
        images: IMAGES,
    },
];

export const projects = [
    {
        id: 1,
        title: "Wordle Bot",
        description: "Developed a trend analysis program to formulate solutions to the famous NYT game by utilizing information theory, Python pandas, and numpy",
        img: "/p1.svg",
        iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
        link: "https://github.com/adrianhajdin?tab=repositories",
    },
    {
        id: 2,
        title: "STD Tempest Dynamic Weather App",
        description: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
        img: "/p2.svg",
        iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
        link: "https://github.com/adrianhajdin/zoom-clone",
    },
    {
        id: 3,
        title: "AI Food Recognition and Calorie Tracker",
        description: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
        img: "/p3.svg",
        iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
        link: "https://github.com/adrianhajdin/ai_saas_app",
    },
    {
        id: 4,
        title: "Advanced CS Course",
        description: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
        img: "/p4.svg",
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