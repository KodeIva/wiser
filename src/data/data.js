import { FaStar } from "react-icons/fa6";
import { FaLocationArrow } from "react-icons/fa"
import { BsFillPatchCheckFill } from "react-icons/bs";

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