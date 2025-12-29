export interface PlanetInfo {
  name: string;
  description: string;
  description2: string[];
  nameshake: string;
  potential: string[];
  size: string[];
  orbital: string[];
  moons: string[];
  structure: string[];
  surface: string[];
  atmosphere: string;
  magnethosphere: string;
  gallery: string[];
  imgdes1: string;
  imgdes2: string;
  imgdes3: string;
}

export type PlanetDataType = {
  [key: string]: PlanetInfo;
};

export const PLANET_DATA: PlanetDataType = {
  mercury: {
    name: "Mercury",
    description:
      "Mercury is the smallest planet in our solar system and nearest to the Sun. It's only slightly larger than Earth's Moon. From the surface of Mercury, the Sun would appear more than three times as large as it does when viewed from Earth, and the sunlight would be as much as seven times brighter.",
    description2: [
      "Mercury's surface temperatures are both extremely hot and cold. Because the planet is so close to the Sun, day temperatures can reach highs of 800°F (430°C). Without an atmosphere to retain that heat at night, temperatures can dip as low as -290°F (-180°C).",
      "Despite its proximity to the Sun, Mercury is not the hottest planet in our solar system – that title belongs to nearby Venus, thanks to its dense atmosphere. But Mercury is the fastest planet, zipping around the Sun every 88 Earth days.",
    ],
    nameshake:
      "Named after the Roman messenger god Mercury, known for his speed and mobility.",
    potential: [
      "Mercury has the potential for scientific discovery due to its extreme temperature variations and unique geological features.",
      "Mercury's environment is not conducive to life as we know it. The temperatures and solar radiation that characterize this planet are most likely too extreme for organisms to adapt to.",
    ],
    size: [
      "With a radius of 1,516 miles (2,440 kilometers), Mercury is a little more than 1/3 the width of Earth. If Earth were the size of a nickel, Mercury would be about as big as a blueberry.",
      "From an average distance of 36 million miles (58 million kilometers), Mercury is 0.4 astronomical units away from the Sun.One astronomical unit (AU) is the distance from the Sun to Earth. From this distance, it takes sunlight 3.2 minutes to travel from the Sun to Mercury.",
    ],
    orbital: [
      "Mercury's highly eccentric, egg-shaped orbit takes the planet as close as 29 million miles (47 million kilometers) and as far as 43 million miles (70 million kilometers) from the Sun. It speeds around the Sun every 88 days, traveling through space at nearly 29 miles (47 kilometers) per second, faster than any other planet.",
      "Mercury spins slowly on its axis and completes one rotation every 59 Earth days. But when Mercury is moving fastest in its elliptical orbit around the Sun (and it is closest to the Sun), each rotation is not accompanied by sunrise and sunset like it is on most other planets. The morning Sun appears to rise briefly, set, and rise again from some parts of the planet's surface. The same thing happens in reverse at sunset for other parts of the surface. One Mercury solar day (one full day-night cycle) equals 176 Earth days – just over two years on Mercury.",
      "Mercury's axis of rotation is tilted just 2 degrees with respect to the plane of its orbit around the Sun. That means it spins nearly perfectly upright and so does not experience seasons as many other planets do.",
    ],
    moons: [
      "Mercury has no moons, making it the only planet in our solar system without satellites.",
    ],
    structure: [
      "Mercury is the second densest planet, after Earth. It has a large metallic core with a radius of about 1,289 miles (2,074 kilometers), about 85% of the planet's radius. There is evidence that it is partly molten or liquid. Mercury's outer shell, comparable to Earth's outer shell (called the mantle and crust), is only about 400 kilometers (250 miles) thick.",
    ],
    surface: [
      "Mercury's surface resembles that of Earth's Moon, scarred by many impact craters resulting from collisions with meteoroids and comets. Craters and features on Mercury are named after famous deceased artists, musicians, or authors, including children's author Dr. Seuss and dance pioneer Alvin Ailey.",
      "Very large impact basins, including Caloris (960 miles or 1,550 kilometers in diameter) and Rachmaninoff (190 miles, or 306 kilometers in diameter), were created by asteroid impacts on the planet's surface early in the solar system's history. While there are large areas of smooth terrain, there are also cliffs, some hundreds of miles long and soaring up to a mile high. They rose as the planet's interior cooled and contracted over the billions of years since Mercury formed.",
      'Most of Mercury\'s surface would appear greyish-brown to the human eye. The bright streaks are called "crater rays." They are formed when an asteroid or comet strikes the surface. The tremendous amount of energy that is released in such an impact digs a big hole in the ground, and also crushes a huge amount of rock under the point of impact. Some of this crushed material is thrown far from the crater and then falls to the surface, forming the rays. Fine particles of crushed rock are more reflective than large pieces, so the rays look brighter. The space environment, dust impacts and solar-wind particles, causes the rays to darken with time.',
      "Temperatures on Mercury are extreme. During the day, temperatures on the surface can reach 800 degrees Fahrenheit (430 degrees Celsius). Because the planet has no atmosphere to retain that heat, nighttime temperatures on the surface can drop to minus 290 degrees Fahrenheit (minus 180 degrees Celsius).",
      "Mercury may have water ice at its north and south poles inside deep craters, but only in regions in permanent shadows. In those shadows, it could be cold enough to preserve water ice despite the high temperatures on sunlit parts of the planet.",
    ],
    atmosphere:
      "Instead of an atmosphere, Mercury possesses a thin exosphere made up of atoms blasted off the surface by the solar wind and striking meteoroids. Mercury's exosphere is composed mostly of oxygen, sodium, hydrogen, helium, and potassium.",
    magnethosphere:
      "Mercury's magnetic field is offset relative to the planet's equator. Though Mercury's magnetic field at the surface has just 1% the strength of Earth's, it interacts with the magnetic field of the solar wind to sometimes create intense magnetic tornadoes that funnel the fast, hot solar wind plasma down to the surface of the planet. When the ions strike the surface, they knock off neutrally charged atoms and send them on a loop high into the sky.",
    gallery: ["/img/mercury.webp", "/img/mercury1.webp", "/img/mercury2.webp"],
    imgdes1:
      "This high-resolution mosaic of images shows Mercury as it appeared to NASA's MESSENGER as it sped away from the planet following its first flyby on Jan. 14, 2008",
    imgdes2:
      "On March 18, 2011, NASA's MESSENGER made history by becoming the first spacecraft to orbit Mercury. Eleven days later, the spacecraft captured the first image ever obtained from Mercury orbit, shown here on the left. April 30, 2015, MESSENGER again made history, becoming the first spacecraft to impact the planet. In total, MESSENGER acquired and returned to Earth more than 277,000 images from orbit about Mercury. The last of those images is shown here on the right.",
    imgdes3:
      'Measurements from MESSENGER\'s MLA instrument during the spacecraft\'s greater than four-year orbital mission have mapped the topography of Mercury\'s northern hemisphere in great detail.',
  },
  venus: {
    name: "Venus",
    description:
      "Venus is the second planet from the Sun, and the second smallest planet in our solar system.",
    description2: [
      "Venus has a dense atmosphere that traps heat, making it the hottest planet in our solar system.",
    ],
    nameshake:
      "Named after the Roman goddess of love and beauty Venus, known for its brightness.",
    potential: [
      "Venus has the potential for scientific discovery due to its extreme temperature and volcanic activity.",
    ],
    size: [
      "Venus has a diameter of about 12,104 kilometers (7,582 miles), making it the second smallest planet in our solar system.",
    ],
    orbital: [
      "Venus orbits the Sun every 224 Earth days, making it the second closest planet to the Sun.",
    ],
    moons: ["Venus has no moons."],
    structure: ["Venus is composed primarily of rock and iron."],
    surface: [
      "Venus has a volcanic and rocky surface with plains and highlands.",
    ],
    atmosphere:
      "Venus has a thick atmosphere mainly of carbon dioxide with clouds of sulfuric acid.",
    magnethosphere: "Venus has a very weak magnetic field.",
    gallery: ["/img/venus1.webp", "/img/venus2.webp", "/img/venus3.webp"],
    imgdes1:
      "Venus has a dense atmosphere that traps heat, making it the hottest planet in our solar system.",
    imgdes2:
      "Venus has a volcanic and rocky surface with plains and highlands.",
    imgdes3:
      "Venus orbits the Sun every 224 Earth days, making it the second closest planet to the Sun.",
  },
  earth: {
    name: "Earth",
    description:
      "Earth is the third planet from the Sun, and the only known planet to support life.",
    description2: [
      "Earth has a rich diversity of life and complex ecosystems.",
    ],
    nameshake: "Named after the Latin word 'terra' meaning land or ground.",
    potential: [
      "Earth's geological features and atmosphere make it suitable for sustaining life.",
    ],
    size: ["Earth has a diameter of about 12,742 kilometers (7,917 miles)."],
    orbital: ["Earth orbits the Sun every 365 days."],
    moons: ["Earth has one moon, the Moon."],
    structure: ["Earth is composed primarily of rock and iron."],
    surface: ["Earth's surface includes mountains, oceans, and plains."],
    atmosphere: "Earth's atmosphere is composed mainly of nitrogen and oxygen.",
    magnethosphere:
      "Earth's magnetic field protects life from solar radiation.",
    gallery: ["/img/earth1.webp", "/img/earth2.webp", "/img/earth3.webp"],
    imgdes1: "Earth has a rich diversity of life and complex ecosystems.",
    imgdes2: "Earth's surface includes mountains, oceans, and plains.",
    imgdes3: "Earth's atmosphere is composed mainly of nitrogen and oxygen.",
  },
  mars: {
    name: "Mars",
    description:
      "Mars is the fourth planet from the Sun, and the second smallest planet in our solar system.",
    description2: [
      "Mars has ice caps, canyons, and the largest volcano in the solar system.",
    ],
    nameshake:
      "Named after the Roman god of war Mars, known for its red color.",
    potential: [
      "Mars has potential for exploration due to evidence of past water.",
    ],
    size: ["Mars has a diameter of about 6,779 kilometers (4,097 miles)."],
    orbital: ["Mars orbits the Sun every 687 Earth days."],
    moons: ["Mars has two moons, Phobos and Deimos."],
    structure: ["Mars is composed primarily of rock and iron."],
    surface: ["Mars' surface is covered with craters, volcanoes, and valleys."],
    atmosphere: "Mars has a thin atmosphere of carbon dioxide.",
    magnethosphere: "Mars has a weak magnetic field.",
    gallery: ["/img/mars1.webp", "/img/mars2.webp", "/img/mars3.webp"],
    imgdes1:
      "Mars has ice caps, canyons, and the largest volcano in the solar system.",
    imgdes2: "Mars' surface is covered with craters, volcanoes, and valleys.",
    imgdes3: "Mars has a thin atmosphere of carbon dioxide.",
  },
  jupiter: {
    name: "Jupiter",
    description:
      "Jupiter is the fifth planet from the Sun, and the largest planet in our solar system.",
    description2: ["Jupiter has a strong magnetic field and dozens of moons."],
    nameshake: "Named after the Roman king of the gods Jupiter.",
    potential: [
      "Jupiter has potential for studying gas giants and magnetospheres.",
    ],
    size: [
      "Jupiter has a diameter of about 142,984 kilometers (90,567 miles).",
    ],
    orbital: ["Jupiter orbits the Sun every 4,333 Earth days."],
    moons: ["Jupiter has 67 known moons."],
    structure: ["Jupiter is composed mainly of hydrogen and helium."],
    surface: ["Jupiter does not have a solid surface; it is a gas giant."],
    atmosphere: "Jupiter's atmosphere consists of hydrogen and helium.",
    magnethosphere: "Jupiter has a strong magnetic field.",
    gallery: ["/img/jupiter1.webp", "/img/jupiter2.webp", "/img/jupiter3.webp"],
    imgdes1: "Jupiter has a strong magnetic field and dozens of moons.",
    imgdes2: "Jupiter's atmosphere consists of hydrogen and helium.",
    imgdes3: "Jupiter does not have a solid surface; it is a gas giant.",
  },
  saturn: {
    name: "Saturn",
    description:
      "Saturn is the sixth planet from the Sun, known for its rings.",
    description2: ["Saturn's rings are composed mainly of ice and rock."],
    nameshake: "Named after the Roman god of agriculture Saturn.",
    potential: [
      "Saturn offers insights into planetary ring systems and gas giants.",
    ],
    size: ["Saturn has a diameter of about 120,536 kilometers (77,136 miles)."],
    orbital: ["Saturn orbits the Sun every 10,747 Earth days."],
    moons: ["Saturn has 82 known moons."],
    structure: ["Saturn is composed mainly of hydrogen and helium."],
    surface: ["Saturn has no solid surface; it is a gas giant."],
    atmosphere: "Saturn's atmosphere is mainly hydrogen and helium.",
    magnethosphere: "Saturn has a magnetic field stronger than Earth's.",
    gallery: ["/img/saturn1.webp", "/img/saturn2.webp", "/img/saturn3.webp"],
    imgdes1: "Saturn's rings are composed mainly of ice and rock.",
    imgdes2: "Saturn has no solid surface; it is a gas giant.",
    imgdes3: "Saturn's atmosphere is mainly hydrogen and helium.",
  },
  uranus: {
    name: "Uranus",
    description:
      "Uranus is the seventh planet from the Sun, and has a unique sideways rotation.",
    description2: ["Uranus rotates almost perpendicular to its orbital plane."],
    nameshake: "Named after the Greek god of the sky Uranus.",
    potential: ["Uranus has potential for studying ice giants."],
    size: ["Uranus has a diameter of about 51,118 kilometers (32,110 miles)."],
    orbital: ["Uranus orbits the Sun every 30,589 Earth days."],
    moons: ["Uranus has 27 known moons."],
    structure: ["Uranus is composed mainly of hydrogen, helium, and ices."],
    surface: ["Uranus has no solid surface; it is an ice giant."],
    atmosphere: "Uranus's atmosphere is mostly hydrogen and helium.",
    magnethosphere: "Uranus has a weak magnetic field.",
    gallery: ["/img/uranus1.webp", "/img/uranus2.webp", "/img/uranus3.webp"],
    imgdes1: "Uranus rotates almost perpendicular to its orbital plane.",
    imgdes2: "Uranus has no solid surface; it is an ice giant.",
    imgdes3: "Uranus's atmosphere is mostly hydrogen and helium.",
  },
  neptune: {
    name: "Neptune",
    description:
      "Neptune is the eighth planet from the Sun, known for its deep blue color.",
    description2: ["Neptune has strong winds and storms."],
    nameshake: "Named after the Greek god of the sea Neptune.",
    potential: [
      "Neptune offers potential for studying ice giants and extreme weather.",
    ],
    size: ["Neptune has a diameter of about 49,244 kilometers (30,700 miles)."],
    orbital: ["Neptune orbits the Sun every 60,190 Earth days."],
    moons: ["Neptune has 14 known moons."],
    structure: ["Neptune is composed mainly of hydrogen, helium, and ices."],
    surface: ["Neptune has no solid surface; it is an ice giant."],
    atmosphere: "Neptune's atmosphere is mostly hydrogen, helium, and methane.",
    magnethosphere: "Neptune has a weak magnetic field.",
    gallery: ["/img/neptune1.webp", "/img/neptune2.webp", "/img/neptune3.webp"],
    imgdes1: "Neptune has strong winds and storms.",
    imgdes2: "Neptune has no solid surface; it is an ice giant.",
    imgdes3: "Neptune's atmosphere is mostly hydrogen, helium, and methane.",
  },
};
