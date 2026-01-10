export interface Curiosity {
  id: number;
  facts: string;
  title: string;
  description: string;
  image: string;
}

export const CURIOSITIES_DATA = [
  {
    id: 1,
    facts: 'Our planetary system is called “the solar system” because we use the word “solar” to describe things related to our star, after the Latin word for Sun, "solis."',
    image: "/img/solar00.webp",
    title: "Introduction",
    description:
      "Our solar system includes the Sun, eight planets, five officially named dwarf planets, hundreds of moons, and thousands of asteroids and comets. Our solar system is located in the Milky Way, a barred spiral galaxy with two major arms, and two minor arms. Our Sun is in a small, partial arm of the Milky Way called the Orion Arm, or Orion Spur, between the Sagittarius and Perseus arms. Our solar system orbits the center of the galaxy at about 515,000 mph (828,000 kph). It takes about 230 million years to complete one orbit around the galactic center.",
  },
  {
    id: 2,
    facts: "Our solar system is the only one known to support life. So far, we've only know of life on Earth, but we’re looking for more everywhere we can.",
    image: "/img/life.webp",
    title: "Potential For Life",
    description:
      "So far, we've only know about life on Earth, but NASA is searching for life on other worlds in our solar system and beyond. Life might turn up in our own neighborhood: beneath the Martian surface, perhaps, or in the dark, subsurface oceans of Jupiter's moon, Europa. Or maybe the dream of the ages will come true, and we'll eavesdrop on the communications of extraterrestrial civilizations. We might even capture evidence of \"technosignatures,\" or traces of technology (think smog). Barring these strokes of luck, however, the job will be much harder. Light will be the key – light from the atmospheres of exoplanets, split up into a rainbow spectrum that we can read like a bar code. This method, called transit spectroscopy, would provide a menu of gases and chemicals in the skies of these worlds, including those linked to life",
  },
  {
    id: 3,
    facts: "The hottest planet in our solar system is Venus, even though Mercury is closer to the Sun. This is because Venus has a thick atmosphere that traps heat.",
    image: "/img/solar01.webp",
    title: "Size and Distance",
    description:
      "Our solar system extends much farther than the planets that orbit the Sun. The solar system also includes the Kuiper Belt that lies past Neptune's orbit. This is a ring of icy bodies, almost all smaller than the most popular Kuiper Belt Object–dwarf planet Pluto. Beyond the fringes of the Kuiper Belt is the Oort Cloud. This giant spherical shell surrounds our solar system. It has never been directly observed, but its existence is predicted based on mathematical models and observations of comets that likely originate there. The Oort Cloud is made of icy pieces of space debris - some bigger than mountains – orbiting our Sun as far as 1.6 light-years away. This shell of material is thick, extending from 5,000 astronomical units to 100,000 astronomical units. One astronomical unit (or AU) is the distance from the Sun to Earth, or about 93 million miles (150 million kilometers).",
  },
  {
    id: 4,
    facts: "NASA’s Voyager 1 and Voyager 2 are the only spacecraft to have left our solar system. Three other spacecraft–Pioneer 10, Pioneer 11, and New Horizons–will eventually hit interstellar space.",
    image: "/img/solar02.webp",
    title: "Formation",
    description:
      "Our solar system formed about 4.6 billion years ago from a dense cloud of interstellar gas and dust. The cloud collapsed, possibly due to the shockwave of a nearby exploding star, called a supernova. When this dust cloud collapsed, it formed a solar nebula – a spinning, swirling disk of material. At the center, gravity pulled more and more material in. Eventually, the pressure in the core was so great that hydrogen atoms began to combine and form helium, releasing a tremendous amount of energy. With that, our Sun was born, and it eventually amassed more than 99% of the mass in our solar system.",
  },
  {
    id: 5,
    facts: " The largest planet is Jupiter. If Jupiter was a hollow shell, 1,000 Earths could fit inside.",
    image: "/img/solar03.webp",
    title: "Structure",
    description:
      "The order and arrangement of the planets and other bodies in our solar system is due to the way the solar system formed. Nearest to the Sun, only rocky material could withstand the heat when the solar system was young. For this reason, the first four planets – Mercury, Venus, Earth, and Mars – are terrestrial planets. They are all small with solid, rocky surfaces. Meanwhile, materials we are used to seeing as ice, liquid, or gas settled in the outer regions of the young solar system. Gravity pulled these materials together, and that is where we find gas giants Jupiter and Saturn, and the ice giants Uranus and Neptune.",
  },
];
