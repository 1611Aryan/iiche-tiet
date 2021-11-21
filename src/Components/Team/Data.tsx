import parth_webp from "./../../Media/Team/parth.webp"
import parth_jpg from "./../../Media/Team/parth.jpg"

import anushka_webp from "./../../Media/Team/anushka.webp"
import anushka_jpg from "./../../Media/Team/anushka.jpg"

import lokeshwar_webp from "./../../Media/Team/lokeshwar.webp"
import lokeshwar_jpg from "./../../Media/Team/lokeshwar.jpg"

import avantika_webp from "./../../Media/Team/avantika.webp"
import avantika_jpg from "./../../Media/Team/avantika.jpg"

import mehak_webp from "./../../Media/Team/mehak.webp"
import mehak_jpg from "./../../Media/Team/mehak.jpg"

import pratham_webp from "./../../Media/Team/pratham.webp"
import pratham_jpg from "./../../Media/Team/pratham.jpg"

import jaskaran_webp from "./../../Media/Team/jaskaran.webp"
import jaskaran_jpg from "./../../Media/Team/jaskaran.jpg"

import aryan_webp from "./../../Media/Team/aryan.webp"
import aryan_jpg from "./../../Media/Team/aryan.jpg"

export type member = {
  details: {
    name: string
    designation: string
    info: string
  }
  images: {
    imgSrc: string
    type: string
  }[]
  socials: {
    type: "instagram" | "facebook" | "linkedin" | "twitter"
    link: string
  }[]
}

const teamData: member[] = [
  {
    images: [
      { imgSrc: parth_webp, type: "image/webp" },
      { imgSrc: parth_jpg, type: "image/jpg" },
    ],
    details: {
      name: "Parth Sood",
      designation: "General Secretary",
      info: "I believe in leading from the front, a true leader is the one who does not make other people follow him, he is the one who empowers them to choose their own paths. With this mindset my aim is to create IIChE TIET a platform where members get empowered to choose their own paths.",
    },

    socials: [
      {
        type: "instagram",
        link: "https://www.instagram.com/parthsood.__/?hl=en",
      },
      { type: "facebook", link: "https://www.facebook.com/parthsood.12.11.01" },
    ],
  },
  {
    images: [
      { imgSrc: anushka_webp, type: "image/webp" },
      {
        imgSrc: anushka_jpg,
        type: "image/jpg",
      },
    ],
    details: {
      name: "Anushka Khera",
      designation: "General Secretary",
      info: "In the end it's all about perfection.",
    },
    socials: [],
  },
  {
    images: [
      { imgSrc: lokeshwar_webp, type: "image/webp" },
      {
        imgSrc: lokeshwar_jpg,
        type: "image/jpg",
      },
    ],
    details: {
      name: "Lokeshwar Puri",
      designation: "Joint Secretary",
      info: "I personally believe that leaders are not made in a day, they are made under circumstances which reveal thier true personality. IIChE tiet is visionary society with a aim to take technical knowledge as well as engineering concepts of the participants into a fun and interacting level",
    },
    socials: [],
  },
  {
    images: [
      { imgSrc: avantika_webp, type: "image/webp" },
      {
        imgSrc: avantika_jpg,
        type: "image/jpg",
      },
    ],
    details: {
      name: "Avantika Garg",
      designation: "PR Head",
      info: `A Pre-Final pursuing Mechantronics Engineering and established as the Head of PR&Marketing IICHE.

      He Y'all! I am the one with no closed doors so you are always welcome!

      I got some sunshine in my pocket as the world is full of rainbows and unicorns, so lets see beyond the dark as the night changes from dusk to dawn.`,
    },
    socials: [
      {
        type: "linkedin",
        link: "http://linkedin.com/in/avantika-garg-054142204",
      },
      {
        type: "instagram",
        link: "https://www.instagram.com/avantika_garg04/?hl=en",
      },
      { type: "facebook", link: "https://www.facebook.com/avantika.garg.3551" },
    ],
  },
  {
    images: [
      { imgSrc: pratham_webp, type: "image/webp" },
      {
        imgSrc: pratham_jpg,
        type: "image/jpg",
      },
    ],
    details: {
      name: "Pratham Thakur",
      designation: "Finance Head",
      info: `🤷🏻‍♂️`,
    },
    socials: [
      { type: "instagram", link: "https://instagram.com/pratham__thakur" },
      {
        type: "linkedin",
        link: "https://www.linkedin.com/in/pratham-thakur23",
      },
    ],
  },
  {
    images: [
      { imgSrc: mehak_webp, type: "image/webp" },
      {
        imgSrc: mehak_jpg,
        type: "image/jpg",
      },
    ],
    details: {
      name: "Mehak Chandel",
      designation: "Content Head",
      info: `Nothing in the world is less important than the other. When you understand and learn to appreciate the right place of everything, I believe, that is when you truly realise your potential. With this strong practice employed in IIChE TIET I have found the right people. It is a pleasure working with such a wonderful team!`,
    },
    socials: [
      {
        type: "linkedin",
        link: "https://www.linkedin.com/in/mehak-chandel-27b9691a1",
      },
      {
        type: "facebook",
        link: "https://www.facebook.com/profile.php?id=100004809457225",
      },
      {
        type: "instagram",
        link: "https://www.instagram.com/notalightweighttm/?hl=en",
      },
    ],
  },
  {
    images: [
      { imgSrc: jaskaran_webp, type: "image/webp" },
      {
        imgSrc: jaskaran_jpg,
        type: "image/jpg",
      },
    ],
    details: {
      name: "Jaskaran Singh Ubhi",
      designation: "Engagement Head",
      info: `I am a very curious being who is always eager to explore new boundaries. I have a creative touch in me and I always try to be solution oriented. Being the Engagement head for this term, I aim to increase the brand presence of IIChE as well as increase the engagement within the chapter.`,
    },
    socials: [],
  },
  {
    images: [
      { imgSrc: aryan_webp, type: "image/webp" },
      {
        imgSrc: aryan_jpg,
        type: "image/jpg",
      },
    ],
    details: {
      name: "Aryan Gupta",
      designation: "Technical Head",
      info: `It matters not what someone is born, but what they grow to be`,
    },
    socials: [
      { type: "instagram", link: "https://www.instagram.com/aryyyy_an/?hl=en" },
      { type: "facebook", link: "https://www.facebook.com/1.6.1.1.aryan" },
      {
        type: "linkedin",
        link: "https://www.linkedin.com/in/aryan-g-27944b129/",
      },
    ],
  },
]

export default teamData.reverse()
