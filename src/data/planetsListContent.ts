interface PlanetCardData {
  id: string;
  title: string;
  description: string;
  videoSrc: string; 
  className: string;
}

interface PlanetLayoutGroup {
  containerClass?: string;
  planets: PlanetCardData[];
}

export const PLANETS_LIST_CONTENT = {
  title: "The planets",
  introduction: [
    "What is a planet? The word goes back to the ancient Greek word planēt, and it means \"wanderer.\" A more modern definition can be found in the Merriam-Webster dictionary which defines a planet as \"any of the large bodies that revolve around the Sun in the solar system.\"",
    "In 2006, the International Astronomical Union (IAU) - a group of astronomers that names objects in our solar system - agreed on their own definition of the word \"planet.\" This new definition changed caused Pluto's famous \"demotion\" to a dwarf planet."
  ],
  innerPlanets: {
    title: "Inner planets",
    description: "The first four, Mercury, Venus, Earth, and Mars, have something in common: they are located in the closest orbits to the Sun, have a metallic core, and are composed of solid materials, which is why they are called rocky planets or inner planets."
  },
  outerPlanets: {
    title: "Outer planets",
    description: "On the other hand, the orbits of Jupiter, Saturn, Uranus, and Neptune are much farther from the Sun, in the outer part of the solar system, and they are mostly made of gas, which is why they are known as outer planets or Jovian planets."
  }
};

export const PLANETS_LAYOUT: PlanetLayoutGroup[] = [
  {
    planets: [
      {
        id: "mercury",
        title: "Mercury",
        description: "Mercury is the planet nearest to the Sun, and the smallest planet in our solar system.",
        videoSrc: "img/mercury-planet.gif",
        className: "border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]"
      }
    ]
  },
  {
    containerClass: "grid pb-7 grid-cols-2 grid-rows-2 gap-7",
    planets: [
      {
        id: "venus",
        title: "Venus",
        description: "Venus is the second planet from the Sun, and the sixth largest planet.",
        videoSrc: "img/venus.gif",
        className: "card-tilt_1 h-[40vh] md:h-[60vh] border-hsla row-span-1 md:col-span-1 md:row-span-2 ms-32 md:ms-0"
      },
      {
        id: "mars",
        title: "Mars",
        description: "Mars is the fourth planet from the Sun, and the seventh largest planet.",
        videoSrc: "img/mars.gif",
        className: "card-tilt_1 border-hsla row-span-1 md:col-span-1 md:row-span-2 me-30 md:me-0"
      }
    ]
  },
  {
    planets: [
      {
        id: "earth",
        title: "Earth",
        description: "Earth our home planet is the third planet from the Sun, and the fifth largest planet.",
        videoSrc: "img/earth.gif",
        className: "border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]"
      }
    ]
  },
  {
    containerClass: "grid grid-cols-2 grid-rows-3 gap-7",
    planets: [
      {
        id: "jupiter",
        title: "Jupiter",
        description: "Jupiter is the fifth planet from the Sun, and the largest planet in our solar system.",
        videoSrc: "img/jupiter00.gif",
        className: "card-tilt_1 border-hsla row-span-1 ms-32 md:ms-0 h-[40vh] md:h-[65vh]"
      },
      {
        id: "saturn",
        title: "Saturn",
        description: "Saturn is the sixth planet from the Sun, and the second largest planet in our solar system.",
        videoSrc: "img/saturn.gif",
        className: "card-tilt_1 border-hsla me-30 md:me-0"
      },
      {
        id: "uranus",
        title: "Uranus",
        description: "Uranus is the seventh planet from the Sun, and the third largest planet in our solar system.",
        videoSrc: "img/uranus.gif",
        className: "card-tilt_1 border-hsla"
      },
      {
        id: "neptune",
        title: "Neptune",
        description: "Neptune is the eighth and most distant planet in our solar system. It's the fourth largest planet.",
        videoSrc: "img/neptune.gif",
        className: "card-tilt_1 border-hsla h-[30vh] md:h-auto"
      }
    ]
  }
];
