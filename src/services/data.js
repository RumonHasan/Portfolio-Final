// imports 
import {Instagram, Facebook, GitHub} from '@material-ui/icons';
import { fontSize } from './fontSize';
import {DiJavascript1, DiHtml5, DiCss3, DiSass} from 'react-icons/di';
import {SiCss3, SiHtml5, SiJavascript,SiMaterialui, SiTypescript, SiSass, SiFramer} from 'react-icons/si'
import {FaReact, FaCubes} from 'react-icons/fa';
import {BsBarChartFill} from 'react-icons/bs';
import {colors} from './theme/colors';
// project images
import Corona from '../assets/projectImage/corona.png';
import kid from '../assets/projectImage/kid.png';
import portfolio from '../assets/projectImage/portfolio.png';
import schedule from '../assets/projectImage/schedule.png';
import weather from '../assets/projectImage/weather.png';
import womenCage from '../assets/projectImage/womenCage.png';
import ih2 from '../assets/projectImage/ih2.png';
import portfolioMain from '../assets/projectImage/portfolio-main.png';
import sellerSpot from '../assets/projectImage/sellerSpot.png';
// full screen images
import firstPortfolio from '../assets/fullSite/firstPortfolio.png';
import coronaFull from '../assets/fullSite/coronaFull.png';
import coming from '../assets/fullSite/coming.jpg';
import womanFull from '../assets/fullSite/womanFull.png';
// menu items
export const menu = [
    {
        label: 'Home',
    },
    {
        label: 'Work'
    },
    {
        label: 'About',
    },
    {
        label: 'Skills'
    },
    {
        label: 'Gallery'
    },
    {
        label:'Contact',
    }

]
// social media icons
export const snsIcons = [
    {
        icon: <Instagram style={{fontSize: fontSize.large}}/>,
        link: 'https://www.instagram.com/brownboyintokyo/'
    },
    {
        icon: <Facebook style={{fontSize: fontSize.large}}/>,
        link: 'https://www.facebook.com/rumon.xd'
    },
    {
        icon: <GitHub style={{fontSize: fontSize.large}}/>,
        link: 'https://github.com/RumonHasan?tab=repositories'
    }
]

// home text
export const hiText = 'Hi,';
export const nameText = "I'm Rumon";
export const jobText =  "Web Developer";

// project images
    // images list 
    
    export const projectImages = [
        {   id: 1,
            name: 'CoronaLiveTracker',
            image: Corona,
            category: 'Vanilla JS',
            show: false,
            link: 'https://coronalivetracker.netlify.app/',
            fullScreen: coronaFull,
            languages:[
                {
                    label: 'Vanilla JS',
                    icon: <DiJavascript1/>,
                    value: 67.2,
                    color: colors.jsColor
                },
                {
                    label: 'HTML',
                    icon: <DiHtml5/>,
                    value: 12.8,
                    color: colors.htmlColor
                },
                {
                    label: 'CSS',
                    icon: <DiCss3/>,
                    value: 20,
                    color: colors.cssColor
                },
            ],
            frameworks:[
                {
                    name: 'Chart JS',
                    icon: <BsBarChartFill/>,
                    color: colors.chartColor,
                }
            ]
        },
        {
            id:2,
            name: 'Hoikurumunozomi',
            image: kid,
            category: 'React JS',
            show: false,
            link:'https://hoikurumunozomi-test.netlify.app/',
            fullScreen: '',
            languages:[
                {
                    label: 'Javascript',
                    icon: <SiJavascript/>,
                    value: 97.4,
                    color: colors.jsColor

                },
                {
                    label: 'HTML',
                    icon: <SiHtml5/>,
                    value: 0.8,
                    color: colors.htmlColor
                },
                {
                    label: 'CSS',
                    icon: <SiCss3/>,
                    value: 1.8,
                    color: colors.cssColor
                },
            ],
            frameworks:[
                {
                    name: 'React JS',
                    icon: <FaReact/>,
                    color: colors.reactColor
                },
                {
                    name: 'Material UI',
                    icon: <SiMaterialui/>,
                    color: colors.materialColor
                }
            ]
        },
        {
            id:3,
            name: 'First Portfolio',
            image: portfolio,
            category: 'HTML/CSS',
            show: false,
            link: 'https://rumonhasan.netlify.app/',
            fullScreen: firstPortfolio,
            languages:[
                {
                    label: 'HTML',
                    icon: <DiHtml5/>,
                    value: 70,
                    color: colors.htmlColor
                },
                {
                    label: 'CSS',
                    icon: <DiCss3/>,
                    value: 30,
                    color: colors.cssColor
                },
            ],
            frameworks:[
                {
                    name:'SASS',
                    icon: <SiSass/>,
                    color: colors.sassColor
                }
            ]
        },
        {   
            id:4,
            name: 'Course Schedule',
            image: schedule,
            category: 'Vanilla JS',
            show: false,
            link: undefined,
            fullScreen: '',
            languages:[
                {
                    label: 'Vanilla JS',
                    icon: <DiJavascript1/>,
                    value: 15,
                    color: colors.jsColor
                    
                },
                {
                    label: 'HTML',
                    icon: <DiHtml5/>,
                    value: 3.1,
                    color: colors.htmlColor
                },
                {
                    label: 'CSS',
                    icon: <DiCss3/>,
                    value: 81.9,
                    color: colors.cssColor
                },
            ],
            frameworks:undefined
        },
        {
            id:5,
            name: 'Seller Spot',
            image: sellerSpot,
            category: 'React JS',
            show: false,
            link: undefined,
            fullScreen: coming,
            languages:[
                {
                    label: 'Typescript',
                    icon: <SiTypescript/>,
                    value: 99.3,
                    color: colors.tsColor
                },
                {
                    label: 'HTML',
                    icon: <DiHtml5/>,
                    value: 0.7,
                    color: colors.htmlColor
                },
            ],
            frameworks:[
                {
                    name: 'React JS',
                    icon: <FaReact/>,
                    color: colors.reactColor,
                },
                {
                    name: 'Material UI',
                    icon: <SiMaterialui/>,
                    color: colors.materialColor,
                },
            ]
        },
        {   id:6,
            name: 'Women In A Cage',
            image: womenCage,
            category: 'React JS',
            show: false,
            link: 'https://ih-presentation.netlify.app/',
            fullScreen: womanFull,
            languages:[
                {
                    label: 'Javascript',
                    icon: <DiJavascript1/>,
                    value: 90,
                    color: colors.jsColor
                },
                {
                    label: 'HTML',
                    icon: <DiHtml5/>,
                    value: 5,
                    color: colors.htmlColor
                },
                {
                    label: 'CSS',
                    icon: <DiCss3/>,
                    value: 5,
                    color: colors.cssColor
                },
            ],
            frameworks: [
                {
                    name:'SASS',
                    icon: <SiSass/>,
                    color: colors.sassColor,
                }
            ]
        },
        {   id:7,
            name: 'Philosophy Project',
            image: ih2,
            category: 'React JS',
            show: false,
            link:'https://ih2-site.netlify.app/',
            fullScreen: '',
            languages:[
                {
                    label: 'Javascript',
                    icon: <DiJavascript1/>,
                    value: 95.3,
                    color: colors.jsColor
                },
                {
                    label: 'HTML',
                    icon: <DiHtml5/>,
                    value: 1.9,
                    color: colors.htmlColor
                },
                {
                    label: 'CSS',
                    icon: <DiCss3/>,
                    value: 2.8,
                    color: colors.cssColor
                },
            ],
            frameworks:[
                {
                    name: 'React JS',
                    icon: <FaReact/>,
                    color: colors.reactColor,
                },
                {
                    name: 'Material UI',
                    icon: <SiMaterialui/>,
                    color: colors.materialColor,
                }
            ]
        },
        {   id:8,
            name: 'Portfolio Main',
            image: portfolioMain,
            category: 'React JS',
            show: false,
            link: undefined,
            fullScreen: '',
            languages:[
                {
                    label: 'Javascript',
                    icon: <DiJavascript1/>,
                    value: 97.5,
                    color: colors.jsColor
                },
                {
                    label: 'HTML',
                    icon: <DiHtml5/>,
                    value: 1.8,
                    color: colors.htmlColor
                },
                {
                    label: 'CSS',
                    icon: <DiCss3/>,
                    value: 0.7,
                    color: colors.cssColor
                },
            ],
            frameworks:[
                {
                    name: 'React JS',
                    icon: <FaReact/>,
                    color: colors.reactColor,
                },
                {
                    name: 'Material UI',
                    icon: <SiMaterialui/>,
                    color: colors.materialColor,
                },
                {
                    name: 'Framer Motion',
                    icon: <SiFramer/>,
                    color: colors.framerColor
                },
                {
                    name: 'Three JS',
                    icon: <FaCubes/>,
                    color: colors.jsColor
                }
            ]
        },
        
    ];

// project description
export const projectDescription = 'This is a gallery containing all the projects that I have worked on so far using various front end development technologies. It has been just over a year since I started my journey as a web developer and I will continue to improve my skill in order become a professional developer someday.'
// title text
export const titleText = 'I am quite interested in Freelance opportunities no matter the project size. However if you have any further queries feel free to drop a message!'
// about page text
export const aboutTextOne = 'I am currently a Senior at Temple University, Japan campus majoring in Economics with a minor in Computer Science. Aside from that I am currently pursuing my future career goal in becoming a full stack developer. I have a strong passion towards Front End Development and currently am working on building websites and web apps using React JS.';
export const aboutTextTwo = 'Hardworking and determined individual who aspires to be an efficient and well-rounded developer equipped with all the necessary skills in order to construct robust, interactive and user-friendly websites and web applications.';
export const aboutTextThree = 'Interested in working on projects of all scales inclusive of apps, websites, web apps based on strict adherence to client specifications.'