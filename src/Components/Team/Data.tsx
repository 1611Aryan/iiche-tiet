import parth_webp from "./../../Media/Team/parth.webp"
import parth_jpg from "./../../Media/Team/parth.jpg"

import anushka_webp from "./../../Media/Team/anushka.webp"
import anushka_jpg from "./../../Media/Team/anushka.jpg"

import lokeshwar_webp from "./../../Media/Team/lokeshwar.webp"
import lokeshwar_jpg from "./../../Media/Team/lokeshwar.jpg"

import shivam_webp from "./../../Media/Team/shivam.webp"
import shivam_jpg from "./../../Media/Team/shivam.jpg"

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
import { nanoid } from "nanoid"

export type EB_Member = {
  details: {
    name: string
    designation: string
    info: string
  }
  images: {
    imgSrc: string
    type: "image/webp" | "image/jpg" | string
  }[]
  socials: {
    type: "instagram" | "facebook" | "linkedin" | "twitter" | string
    link: string
  }[]
  id: string
}

export type coreMember = {
  name: string
  description: string
  image: string
  id: string
  linkedin: string
}

const EB_TeamData: EB_Member[] = [
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
      {
        type: "linkedin",
        link: "https://www.linkedin.com/in/parthsood/",
      },
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
      info: "Leadership isn’t about a title or a designation it’s about impact , influence and inspiration. Also I believe it’s all about perfection and how someone achieves it.",
    },
    socials: [
      {
        type: "instagram",
        link: "https://www.instagram.com/anushka.khera",
      },
      {
        type: "facebook",
        link: "https://www.facebook.com/anushka.khera.7",
      },
      {
        type: "linkedin",
        link: "https://www.linkedin.com/in/anushka-khera-b605aa195/",
      },
    ],
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
    socials: [
      { type: "instagram", link: "https://www.instagram.com/lokeshwarpuri" },

      {
        type: "facebook",
        link: "https://www.facebook.com/lokeshwar.puri",
      },
      {
        type: "linkedin",
        link: "https://www.linkedin.com/in/lokeshwar-puri-b58ba3218/",
      },
    ],
  },
  {
    images: [
      { imgSrc: shivam_webp, type: "image/webp" },
      {
        imgSrc: shivam_jpg,
        type: "image/jpg",
      },
    ],
    details: {
      name: "Shivam Dwivedi",
      designation: "Marketing Head",
      info: "Exploring and understanding people around you is the most interesting task you will ever find. With same thought process, I would like to drive the growth of IIChE tiet through innovative and creative marketing strategies and will always be ready to help you guys with any matter😉",
    },
    socials: [
      {
        type: "linkedin",
        link: "https://www.linkedin.com/in/shivam-dwivedi-4547261b6",
      },
      {
        type: "instagram",
        link: "https://www.instagram.com/shivam_dv/",
      },
      {
        type: "facebook",
        link: "https://m.facebook.com/100002084755876/",
      },
    ],
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
      info: "Accustomed to aiming high, with a penchant for achieving and a knack of doing what others don’t :- are some similarities I could list between IIChE TIET and myself. Big brains and never-say-die attitude has been our bank since, Day 1. Did I mention the bank? Well I’m the Treasurer xD",
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
    socials: [
      {
        type: "instagram",
        link: "https://www.instagram.com/jas_karan_sss",
      },
      {
        type: "facebook",
        link: "https://www.facebook.com/jaskaran.singhubhi.10",
      },
      {
        type: "linkedin",
        link: "https://www.linkedin.com/in/jaskaran-singh-ubhi-b45ab4209/",
      },
    ],
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
      info: `It matters not what someone is born but what they grow to be.

      Imparting Knowledge, learning new things, and helping each other grow, with this vision, I took upon the role of IIChE TIET's Technical Head.
         
      `,
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
].map(member => ({ ...member, id: nanoid() }))

export const CoreMemberData: coreMember[] = [
  {
    name: "Kumkum suri",
    description:
      "I believe a person can learn new things under a good leader. I thank IIChE TIET for giving me a platform to work under such good leaders.",
    linkedin: "linkedin.com/in/kumkum-suri-b28689219",
    image:
      "https://drive.google.com/uc?export=view&id=1_E2S0OjrclFoSxBH7bDSe0BS8fshf2hI",
  },
  {
    name: "Arushi Gupta",
    description:
      " A psychology enthusiast who try to look at situations from others' perspective and understanding their thought process. I hold the unpopular opinion that 'Overthinking is a boon if conclusive.' Fascinated by Sports, Music, Nature and Intellectuality. I am in the process of becoming what I want the world to be.",
    linkedin: "https://www.linkedin.com/in/arushi-gupta-7191bb20b/",
    image:
      "https://drive.google.com/uc?export=view&id=1qeJPuisKkHBRQENoZM8pQli6lBlj_6jT",
  },
  {
    name: "Vanshika Singal",
    description:
      "I’m a mature, candid individual who has and values integrity. ",
    linkedin: "https://www.linkedin.com/in/vanshika-singal-b6b3b6200",
    image:
      "https://drive.google.com/uc?export=view&id=1g1usASHo3bz98YSgs-ifmVNbIaZROdt1",
  },
  {
    name: "Bhavjot Singh",
    description:
      "A people person who is determined and decisive.I'm passionate about my work and hold an opinion that \"Let's fly high, not to rest but to persist !",
    linkedin: "https://www.linkedin.com/in/bhavjot-singh-46a4031bb",
    image:
      "https://drive.google.com/uc?export=view&id=1w-0xGKK4VvjUVjdtW5t4qeHK1AwTFcD0",
  },
  {
    name: "Riddhi Sharma ",
    description:
      "Always in search of seeking a great perhaps and one can say that I found a great perhaps in IIChE. It not only helped me with providing the knowledge but also helped me connect with various talented people in our team thereby giving me an overall wonderful experience. ",
    linkedin: "https://www.linkedin.com/in/riddhi-sharma-3353b920b",
    image:
      "https://drive.google.com/uc?export=view&id=1DVvxI4RhHzm-HienC573KGD5hfsLvX6i",
  },
  {
    name: "Ayushi Gogia ",
    description:
      "Always believed that I'm in the process of becoming the best version of myself and in this process IIChE played a major role",
    linkedin: "https://www.linkedin.com/in/ayushi-gogia-406892206",
    image:
      "https://drive.google.com/uc?export=view&id=1fAPzmeItVb7FvIUD3C1SVsmLd-9MLCUH",
  },
  {
    name: "Sachin Saini",
    description:
      "I tend to be driven in my approach to life and work. I always look forward towards my work and introducing new ideas.",
    linkedin: "https://www.linkedin.com/in/sachin-saini-b817431a6",
    image:
      "https://drive.google.com/uc?export=view&id=1BcpWgLRYFmMUwx7mqXvsreF0mx4wTkV1",
  },
  {
    name: "Aman Raizada",
    description:
      "A big tech enthusiast and desire to work in technical related field. I like to thank IIChE for providing me the platform and encouragement to achieve my desires.",
    linkedin: "https://www.linkedin.com/in/aman-raizada-b84b41213/",
    image:
      "https://drive.google.com/uc?export=view&id=1H3yQQwub0KAHjdzJKpMFE52C-5h-1Grd",
  },
  {
    name: "Muskan",
    description:
      "Persistence and determination alone are omnipotent'.My motto is to give my honest shot for IICHE and enlarge it, empower it and take it to even bigger heights.I also strive and motivate all the co-members of IICHE to establish an aim for it and achive it in these few golden years of graduation.",
    linkedin: "https://www.linkedin.com/in/muskan-85210b212",
    image:
      "https://drive.google.com/uc?export=view&id=14fk82b_i5kGoEkiSLaO8yZB5uVPAb68s",
  },
  {
    name: "Niket Jindal",
    description:
      "I'm a sophomore with an open mind and a thirst for knowledge. With the IIChE enthusiasts, I'm pushing my limits searching for new and exciting experiences.",
    linkedin: "https://www.linkedin.com/in/niket-jindal-6681671b1",
    image:
      "https://drive.google.com/uc?export=view&id=1g6n22_FdnuL6_OwUZLPruR5-6xWa4zgp",
  },
  {
    name: "Kriti Bansal",
    description:
      "I am an inquisitive opportunist and IIChE TIET offers a work and fun intensive environment with diverse opportunities for me to build upon as a person.",
    linkedin: "https://www.linkedin.com/in/kriti-bansal-962804220",
    image:
      "https://drive.google.com/uc?export=view&id=1J4HmXX_MmLp1YjK6vm8zA-X40ij0J98T",
  },
  {
    name: "Dev Gulati",
    description:
      "I strongly believe in appreciating each other's work to build a good working environment",
    linkedin: "https://www.linkedin.com/in/dev-gulati-6a3903204",
    image:
      "https://drive.google.com/uc?export=view&id=1tP5Woupvq1NZvlHg-CxqVxBaxdM-sZth",
  },
  {
    name: "Granth Dhir",
    description: "The best way to predict the future is to create it",
    linkedin: "https://www.linkedin.com/in/granth-d-aa8ab1123/",
    image:
      "https://drive.google.com/uc?export=view&id=1qPHJ2MKtX7YAJVOd4jAKRSAz59ViFa9n",
  },
  {
    name: "Niket Dhingra",
    description:
      "Nothing can be achieved until first it's believed. I'm a person who belives in myself to ahieve anything.",
    linkedin: "linkedin.com/in/niket-dhingra-1a3a241ba",
    image:
      "https://drive.google.com/uc?export=view&id=1jnN92370qgncnc6mHX_zfJbogaFxGZlj",
  },
  {
    name: "Jaya Sharma",
    description:
      "I'm a great believer in luck, and I find it harder I work, the more I have it. I do have great time management skills.",
    linkedin: "https://www.linkedin.com/in/jaya-sharma-631086202/",
    image:
      "https://drive.google.com/uc?export=view&id=1c5A8tQ_28lqVHVUjJoXbzpnJJ1FCchsh",
  },
  {
    name: "Sahil Bhatia",
    description:
      "\"Babumoshai!, Zindagi badi honi chahiye, Lambi nahi.\". I feel the need to sqeeze the most out of my life. I wanna do everything that I've never tried and hence I feel that the exposure and the confidence I've recieved here has allowed me to achieve more than I had hoped. I'm a big music enthusiast so hmu and Let's Jam!",
    linkedin: "https://www.linkedin.com/in/sahil-bhatia-2621a4200/",
    image:
      "https://drive.google.com/uc?export=view&id=1-7DsCNufB-YS4JyRLBCi6D5ekfpzAMIs",
  },
  {
    name: "Pranshu",
    description:
      "Pranshu : Sun : I want be like literal meaning of my name, that is, sun while not forgetting my moral values.",
    linkedin: "https://www.linkedin.com/in/pranshu-taneja-48525420b",
    image:
      "https://drive.google.com/uc?export=view&id=1WKQJH72YrDAubtHcLJ77SxOD7PZ0RKkY",
  },
  {
    name: "Adya Shukla",
    description:
      "A multipotentialite. Loves new opportunities which compels me to outweigh challenges. Hardwork, patience, fairplay and loyalty. Yess am a Hufflepuff ",
    linkedin: "https://www.linkedin.com/in/adya-shukla-52b3881bb",
    image:
      "https://drive.google.com/uc?export=view&id=1pTdXkIpfcoxQgAxaBbp0EMCddJP9my0k",
  },
  {
    name: "Aarooja Bansal",
    description:
      "An ambivert who loves to interact with new people, learn new things and romanticize literature. I'm grateful to IIChE for providing us a wonderful platform for our personal growth. ",
    linkedin: "https://www.linkedin.com/in/aarooja-bansal-4591a0201/",
    image:
      "https://drive.google.com/uc?export=view&id=1knmfZ15yz4vi0t2Nzq9ZUrtw4p1GvHLR",
  },
  {
    name: "Prachi Bhardwaj",
    description:
      "Doing the best at this moment puts you in the best place for the next. I'm a great believer in luck, and I find the harder I work, the more I have of it.",
    linkedin: "https://www.linkedin.com/in/prachi-bhardwaj-310a2b200/",
    image:
      "https://drive.google.com/uc?export=view&id=1dlRr_szswloWu3Bw9X3pdd5cjD1_Lw4B",
  },
  {
    name: "Simran Bansal",
    description:
      "Always looking for opportunities to learn and gain experience and IIChE has given a platform where I see a better version of myself everyday",
    linkedin: "https://www.linkedin.com/in/simran-bansal-aa7182201",
    image:
      "https://drive.google.com/uc?export=view&id=1o_zyyhwowTWyzEn7LyhagQV8CDZ9kA8P",
  },
].map(member => ({
  ...member,
  id: nanoid(),
  description: member.description.slice(0, 200).trim(),
}))

export const num_of_members =
  EB_TeamData.length + Math.round(CoreMemberData.length / 2)

export const EB_MEMBERS_LENGTH = EB_TeamData.length

export default EB_TeamData
