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

export type EB_Member = {
  details: {
    name: string
    designation: string
    info: string
  }
  images: {
    imgSrc: string
    type: "image/webp" | "image/jpg"
  }[]
  socials: {
    type: "instagram" | "facebook" | "linkedin" | "twitter"
    link: string
  }[]
}

export type coreMember = {
  name: string
  description: string
  image: string
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
      info: "In the end it's all about perfection.",
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
]

export const CoreMemberData: coreMember[] = [
  {
    name: "Lolly Klosser",
    description:
      "sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus semper interdum mauris ullamcorper purus sit amet nulla quisque arcu libero",
    image: "https://robohash.org/vitaeducimussint.jpg?size=250x250&set=set1",
    linkedin: "https://www.linkedin.com/in/aryan-g-27944b129/",
  },
  {
    name: "Garnette Hounsom",
    description:
      "ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac",
    image:
      "https://robohash.org/repudiandaecorporisbeatae.jpg?size=250x250&set=set1",
    linkedin: "https://www.linkedin.com/in/aryan-g-27944b129/",
  },
  {
    name: "Steve Mackerel",
    description:
      "et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus",
    image: "https://robohash.org/maioresearumculpa.jpg?size=250x250&set=set1",
    linkedin: "https://www.linkedin.com/in/aryan-g-27944b129/",
  },
  {
    name: "Duffy Maurice",
    description:
      "neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede",
    image:
      "https://robohash.org/officiisquaelaboriosam.jpg?size=250x250&set=set1",
    linkedin: "https://www.linkedin.com/in/aryan-g-27944b129/",
  },
  {
    name: "Erl Ginnane",
    description:
      "amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient",
    image:
      "https://robohash.org/cumquequaeconsequatur.jpg?size=250x250&set=set1",
    linkedin: "https://www.linkedin.com/in/aryan-g-27944b129/",
  },
  {
    name: "Amandy Fennelly",
    description:
      "erat eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis donec semper sapien a libero nam dui proin leo odio porttitor id consequat in consequat ut nulla sed accumsan felis",
    image:
      "https://robohash.org/saepeblanditiisexercitationem.jpg?size=250x250&set=set1",
    linkedin: "https://www.linkedin.com/in/aryan-g-27944b129/",
  },
  {
    name: "Cherri Etches",
    description:
      "odio porttitor id consequat in consequat ut nulla sed accumsan felis ut at dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi",
    image:
      "https://robohash.org/voluptatemametcorrupti.jpg?size=250x250&set=set1",
    linkedin: "https://www.linkedin.com/in/aryan-g-27944b129/",
  },
  {
    name: "Duffie Stockney",
    description:
      "in porttitor pede justo eu massa donec dapibus duis at velit eu est congue elementum in hac habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum neque sapien",
    image: "https://robohash.org/temporibusatnatus.jpg?size=250x250&set=set1",
    linkedin: "https://www.linkedin.com/in/aryan-g-27944b129/",
  },
  {
    name: "Justinn Brittles",
    description:
      "tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget",
    image: "https://robohash.org/omnisvoluptatemesse.jpg?size=250x250&set=set1",
    linkedin: "https://www.linkedin.com/in/aryan-g-27944b129/",
  },
  {
    name: "Lilia Wareham",
    description:
      "pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi cras non",
    image: "https://robohash.org/etetquasi.jpg?size=250x250&set=set1",
    linkedin: "https://www.linkedin.com/in/aryan-g-27944b129/",
  },
]

export const num_of_members =
  EB_TeamData.length + CoreMemberData.length / 2 + (CoreMemberData.length % 2)

export default EB_TeamData.reverse()
