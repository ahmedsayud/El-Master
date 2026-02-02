import { FaLightbulb, FaPencilRuler, FaChartLine, FaUserFriends } from 'react-icons/fa';

export const staticData = {
  header: {
    logoText: "المستر",
    navLinks: [
      { label: "HOME", href: "/" },
      { label: "DEVELOPMENTS", href: "/developments" },
      { label: "MIP EXPERIENCES", href: "/experiences" },
      { label: "ABOUT US", href: "/about" },
    ],
    hotline: "16519"
  },
  hero: {
    videoPlayText: "Play Video",
    mainTitle: "Where the Sun Never Sets",
    description: "At Misr Italia Properties, we aim to change the concept of the over-growing real estate market by listening to our customers who inspire us to stay ahead with innovative real estate solutions & designs. Our lifestyle is the inspiration for our concepts. Your lifestyle is the inspiration for our designs. Your habits are the inspiration for our solutions.",
    ctaButton: "CHECK IT OUT!",
    stats: [
      { value: "4", label: "Levels" },
      { value: "5", label: "Downpayment" },
      { value: "9", label: "Installments years up to" },
      { value: "8.8", label: "Starting" },
    ],
  },
  launches: [
    {
      id: "solare",
      title: "Solare",
      location: "North Coast",
      description: "Inspired by the sun, Solare blends natural beauty with thoughtful design to create a vibrant, sun-soaked community where life flows effortlessly from day to night.",
      paymentPlan: "5% DP / 10 years",
      startingPrice: "EGP 8,800,000",
      image: "/image/EDSA_NorthCoast03_CGI03_05 (2) (1)3107202513245505082025161147.webp1008202515570917082025120447 (1).webp",
      logo: "/image/Solare-logo17082025130627.webp"
    },
    {
      id: "il-bosco",
      title: "IL BOSCO",
      location: "New Capital",
      description: "A world class project with a revolutionary concept that will create a new outlook to green living in Egypt.",
      paymentPlan: "5% DP / 12 years",
      startingPrice: "EGP 8,700,000",
      image: "/image/20231107 ILBosco-(Villas)-650603202418121719012025182530.jpg",
      logo: null // Assuming text logo or handled by generic
    },
    {
      id: "il-bosco-city",
      title: "IL BOSCO CITY",
      location: "New Cairo",
      description: "IL BOSCO City is the first 15 min city in Egypt, where all your essential needs are within 15 mins from your home.",
      paymentPlan: "5% DP / 12 years",
      startingPrice: "EGP 8,000,000",
      image: "/image/ILBOSCO-CITY-20082025123332.webp",
      logo: "/image/il-bosco-city17082025131107.webp"
    },
    {
      id: "vinci",
      title: "VINCI",
      location: "New Capital",
      description: "A boutique residential compound in The New Capital designed by Callison RTKL & DMA, along with Hany Saad Innovations creating a unique design concept.",
      paymentPlan: "5% DP / 12 years",
      startingPrice: "EGP 10,800,000",
      image: "/image/Vinici20082025160246.webp",
      logo: null
    },
    {
      id: "radical-1",
      title: "Radical-1",
      location: "New Capital",
      description: "A world class project with a revolutionary concept, a concept that will create a new outlook to green living in Egypt.",
      paymentPlan: "5% DP / 12 years",
      startingPrice: "EGP 6,700,000",
      image: "/image/New Project (3)17082025160459.webp",
      logo: null
    }
  ],
  footer: {}
};
