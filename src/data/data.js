import { FaStar } from "react-icons/fa6";
import { FaLocationArrow } from "react-icons/fa"
import { BsFillPatchCheckFill, BsInstagram, BsLinkedin, BsTwitter, BsYoutube } from "react-icons/bs";

export const NavLinks = [
    {
     id: "home",
     title: "Home"
    },
    {
     id: "features",
     title: "Features"
    },
    {
     id: "product",
     title: "Product"
    },
    {
     id: "clients",
     title: "Clients"
    }
]

export const stats = [
    {
     id: 1,
     title: 'Users Active',
     count: '3800+'
    },
    {
     id: 2,
     title: 'Trusted by Company',
     count: '350+'
    },
    {
     id: 3,
     title: 'Transactions',
     count: '£520M+'
    },
]

export const features = [
    {
     id: 1,
     icon: FaStar,
     title: 'Rewards',
     text: 'Top credit cards combine powerful perks with valuable rewards and promotional offers.'
    },
    {
     id: 2,
     icon: BsFillPatchCheckFill,
     title: "100% Secured",
     text: 'Your security is our priority - we take proactive measures to protect your data and transactions.'
    },
    {
     id: 3,
     icon: FaLocationArrow,
     title: 'Balance Transfer',
     text: 'Cut down on interest costs with a balance transfer credit card - and keep more of your money.'
    }
]

export const feedback = [
    {
        id: 1,
        name: 'Mark Dowel',
        title: "General Manager",
        img: "https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg",
        comment: "Wealth may open doord, but it's your direction that leads you through them."
    },
    {
        id: 2,
        name: 'Alex Klug',
        title: "Lead Developer",
        img: "https://cdn.pixabay.com/photo/2017/02/16/23/10/smile-2072907_1280.jpg",
        comment: "While money isn't everything, it oftem makes everything a little simpler. If you got it, you are one of the lucky ones"
    },
    {
        id: 3,
        name: 'Dodo Yong',
        title: "Pedietrician",
        img: "https://cdn.pixabay.com/photo/2016/05/30/00/32/short-hair-1424070_1280.jpg",
        comment: "Money is only a tool. It will take you wherever you wish, but will not replace you as a driver."
    },
]

export const socials = [
    {
        id: 1,
        icon: BsInstagram,
        link: "https://www.instagram.com/"
    },
    {
        id: 2,
        icon: BsTwitter,
        link: "https://www.twitter.com/"
    },
    {
        id: 3,
        icon: BsLinkedin,
        link: "https://www.linkedin.com/"
    },
    {
        id: 4,
        icon: BsYoutube,
        link: "https://www.youtube.com"
    }
]


export const footerLinks = [
    {
       title: "Useful Links", 
       links: [
        {
            name: "Home",
            url: "#home"
        },{
            name: "Features",
            url: "#features"
        },{
            name: "Products",
            url: "#features"
        },{
            name: "Clients",
            url: "#clients"
        }
       ]
    },{
        title: "Community",
        links: [
             {
                id: 1,
                name: "Help Center",
                link: "#home"
             },{
                id: 2,
                name: "Blog",
                link: "#home"
             },{
                id: 3,
                name: "Newsletter",
                link: "#home"
             }
        ]
    },{
        title: "Partners",
        links: [
            {
                id: 1,
                name: "Our Partners",
                link: "#home"
            },{
                id: 2,
                name: "Become a Partner",
                link:"#home"
            }
          
        ]
    }
    

]