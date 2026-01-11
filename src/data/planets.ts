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

export const PLANET_ORDER = [
  "mercury",
  "venus",
  "earth",
  "mars",
  "jupiter",
  "saturn",
  "uranus",
  "neptune",
];

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
      "Venus is the second planet from the Sun, and Earth's closest planetary neighbor. Venus is the third brightest object in the sky after the Sun and Moon. Venus spins slowly in the opposite direction from most planets.",
    description2: [
      "Venus is similar in structure and size to Earth, and is sometimes called Earth's evil twin. Its thick atmosphere traps heat in a runaway greenhouse effect, making it the hottest planet in our solar system with surface temperatures hot enough to melt lead. Below the dense, persistent clouds, the surface has volcanoes and deformed mountains.",
    ],
    nameshake:
      "Venus is named for the ancient Roman goddess of love and beauty, who was known as Aphrodite to the ancient Greeks. Most features on Venus are named for women. It’s the only planet named after a female god.",
    potential: [
      "Thirty miles up (about 50 kilometers) from the surface of Venus temperatures range from 86 to 158 Fahrenheit (30 to 70 Celsius). This temperature range could accommodate Earthly life, such as “extremophile” microbes. And atmospheric pressure at that height is similar to what we find on Earth’s surface.",
      "At the tops of Venus’ clouds, whipped around the planet by winds measured as high as 224 mph (360 kph), we find another transformation. Persistent, dark streaks appear. Scientists are so far unable to explain why these streaks remain stubbornly intact, even amid hurricane-force winds. They also have the odd habit of absorbing ultraviolet radiation.",
      "The most likely explanations focus on fine particles, ice crystals, or even a chemical compound called iron chloride. Although it's much less likely, another possibility considered by scientists who study astrobiology is that these streaks could be made up of microbial life, Venus-style. Astrobiologists note that ring-shaped linkages of sulfur atoms, known to exist in Venus’ atmosphere, could provide microbes with a kind of coating that would protect them from sulfuric acid. These handy chemical cloaks would also absorb potentially damaging ultraviolet light and re-radiate it as visible light.",
      "Some of the Russian Venera probes did, indeed, detect particles in Venus’ lower atmosphere about a micron in length – roughly the same size as a bacterium on Earth.",
      "None of these findings provide compelling evidence for the existence of life in Venus’ clouds. But the questions they raise, along with Venus’ vanished ocean, its violently volcanic surface, and its hellish history, make a compelling case for missions to investigate our temperamental sister planet. There is much, it would seem, that she can teach us."
    ],
    size: [
      "Venus orbits the Sun from an average distance of 67 million miles (108 million kilometers), or 0.72 astronomical units. One astronomical unit (abbreviated as AU), is the distance from the Sun to Earth. From this distance, it takes sunlight about six minutes to travel from the Sun to Venus.",
      "Earth's nearness to Venus is a matter of perspective. The planet is nearly as big around as Earth. Its diameter at its equator is about 7,521 miles (12,104 kilometers), versus 7,926 miles (12,756 kilometers) for Earth. From Earth, Venus is the brightest object in the night sky after our own Moon. The ancients, therefore, gave it great importance in their cultures, even thinking it was two objects: a morning star and an evening star. That’s where the trick of perspective comes in.",
      "Because Venus’ orbit is closer to the Sun than ours, the two of them – from our viewpoint – never stray far from each other. The ancient Egyptians and Greeks saw Venus in two guises: first in one orbital position (seen in the morning), then another (your “evening” Venus), just at different times of the year.",
      "At its nearest to Earth, Venus is about 24 million (about 38 million kilometers) away. But most of the time the two planets are farther apart. The maximum distance between Venus and Earth is about 162 million miles (261 million kilometers). Mercury, the innermost planet, actually spends more time in Earth’s proximity than Venus.",
      "One more trick of perspective: how Venus looks through binoculars or a telescope. Keep watch over many months, and you’ll notice that Venus has phases, just like our Moon – full, half, quarter, etc. The complete cycle, however, new to full, takes 584 days, while our Moon takes just a month. And it was this perspective, the phases of Venus first observed by Galileo through his telescope, that provided the key scientific proof for the Copernican heliocentric nature of the solar system."
    ],
    orbital: [
      "Spending a day on Venus would be quite a disorienting experience – that is, if your spacecraft or spacesuit could protect you from temperatures in the range of 900 degrees Fahrenheit (475 Celsius). For one thing, your “day” would be 243 Earth days long – longer even than a Venus year (one trip around the Sun), which takes only 225 Earth days. For another, because of the planet's extremely slow rotation, sunrise to sunset would take 117 Earth days. And by the way, the Sun would rise in the west and set in the east, because Venus spins backward compared to Earth.",
      "While you’re waiting, don’t expect any seasonal relief from the unrelenting temperatures. On Earth, with its spin axis tilted by about 23 degrees, we experience summer when our part of the planet (our hemisphere) receives the Sun’s rays more directly – a result of that tilt. In winter, the tilt means the rays are less direct. No such luck on Venus: Its very slight tilt is only three degrees, which is too little to produce noticeable seasons."
    ],
    moons: [
      "Venus is one of only two planets in our solar system that doesn't have a moon, but it does have a quasi-satellite that has officially been named Zoozve. This object was discovered on Nov. 11, 2002, by Brian Skiff at the Lowell Observatory Near-Earth-Object Search (LONEOS) in Flagstaff, Arizona, a project funded by NASA that ended in February 2008.",
      "This quasi-satellite, officially designated 2002 VE68, is about 0.16 miles (0.25 kilometers) in diameter and orbits the Sun once every 225 days, the same amount of time it takes Venus to orbit the Sun. From Venus, 2002 VE68 appears to travel around the planet once every 1.6 years.",
      "A quasi-satellite is an object that stays near a planet over many orbital periods, but is not gravitationally bound to it the way a true moon is. Instead, a quasi-satellite orbits the Sun in a synchronized pattern with the planet. 2002 VE68 follows a kidney bean-shaped path around Venus as both orbit the Sun. The quasi-satellite's orbit is unstable, and it is expected to leave its current orbit around Venus in about 500 years.",
    ],
    structure: [
      "If we could slice Venus and Earth in half, pole to pole, and place them side by side, they would look remarkably similar. Each planet has an iron core enveloped by a hot-rock mantle; the thinnest of skins forms a rocky, exterior crust. On both planets, this thin skin changes form and sometimes erupts into volcanoes in response to the ebb and flow of heat and pressure deep beneath.",
      "On Earth, the slow movement of continents over thousands and millions of years reshapes the surface, a process known as “plate tectonics.” Something similar might have happened on Venus early in its history. Today a key element of this process could be operating: subduction, or the sliding of one continental “plate” beneath another, which can also trigger volcanoes. Subduction is believed to be the first step in creating plate tectonics.",
      "Venus’ surface is covered with vast plains, highland regions, and more than 1,600 major volcanoes or volcanic features. Some of these volcanoes are more than 300 miles (500 kilometers) across and rise thousands of feet above the surrounding plains. Scientists believe that many of these volcanoes could still be active today.",
    ],
    surface: [
      "The Soviet Union sent a series of probes to Venus between 1961 and 1984 as part of its Venera program (Venera is Russian for Venus). Ten probes made it to the surface, and a few functioned briefly after landing. The longest survivor lasted two hours; the shortest, 23 minutes. Photos snapped before the landers fried show a barren, dim, and rocky landscape, and a sky that is likely some shade of sulfur yellow.",
      "Volcanoes and tectonic forces appear to have erased most traces of the early surface of Venus. Newer computer models indicate the resurfacing may have happened piecemeal over an extended period of time. The average age of surface features could be as young as 150 million years, with some older surfaces mixed in.",
      "Venus has valleys and high mountains dotted with thousands of volcanoes. Its surface features – most named for both real and mythical women – include Ishtar Terra, a rocky, highland area around the size of Australia near the north pole, and an even larger, South-America-sized region called Aphrodite Terra that stretches across the equator. One mountain reaches 36,000 feet (11 kilometers), higher than Mt. Everest. Notably, except for Earth, Venus has by far the fewest impact craters of any rocky planet."
    ],
    atmosphere:
      "Venus’ atmosphere is one of extremes. With the hottest surface in the solar system, apart from the Sun itself, Venus is hotter even than the innermost planet, charbroiled Mercury. The atmosphere is mostly carbon dioxide – the same gas driving the greenhouse effect on Venus and Earth – with clouds composed of sulfuric acid. And at the surface, the hot, high-pressure carbon dioxide behaves in a corrosive fashion. But higher up in the atmosphere, temperatures and pressure begin to ease.",
    magnethosphere: "Even though Venus is similar in size to Earth and has a similar-sized iron core, the planet does not have its own internally generated magnetic field. Instead, Venus has what is known as an induced magnetic field. This weak magnetic field is created by the interaction of the Sun's magnetic field and the planet's outer atmosphere. Ultraviolet light from the Sun excites gases in Venus' outermost atmosphere; these electrically excited gases are called ions, and thus this region is called the ionosphere (Earth has an ionosphere as well). The solar wind – a million-mile-per-hour gale of electrically charged particles streaming continuously from the Sun – carries with it the Sun's magnetic field. When the Sun's magnetic field interacts with the electrically excited ionosphere of Venus, it creates or induces, a magnetic field there. This induced magnetic field envelops the planet and is shaped like an extended teardrop, or the tail of a comet, as the solar wind blows past Venus and outward into the solar system.",
    gallery: ["/img/venus.webp", "/img/venus01.webp", "/img/venus02.webp"],
    imgdes1:
      "As it sped away from Venus in February 1974, NASA's Mariner 10 spacecraft captured this seemingly peaceful view of Venus. But, contrary to its serene appearance, Venus is a world of intense heat, crushing atmospheric pressure and clouds of corrosive acid.",
    imgdes2:
      "This hemispheric view of Venus was created using radar observations, including images from NASA's Magellan spacecraft. Magellan imaged more than 98% of Venus. Gaps in the Magellan coverage were filled with images from the Earth-based Arecibo radar. The composite image was processed to improve contrast and to emphasize small features, and was color-coded to represent elevation.",
    imgdes3:
      "This is a Venus in accurate colour. ",
  },
  earth: {
    name: "Earth",
    description:
      "While Earth is only the fifth largest planet in the solar system, it is the only planet in our solar system with liquid water on the surface. Just slightly larger than nearby Venus, Earth is the biggest of the four planets closest to the Sun, all of which are made of rock and metal.",
    description2: [
      'Earth is the only planet in the solar system whose English name does not come from Greek or Roman mythology. The name was taken from Old English and Germanic. It simply means "the ground." There are, of course, many names for our planet in the thousands of languages spoken by the people of the third planet from the Sun.',
    ],
    nameshake: "The name Earth is about 1,000 years old. All of the planets, except for Earth, were named after Greek and Roman gods and goddesses. However, the name Earth is a Germanic word, which simply means “the ground.”",
    potential: [
      "Earth has a very hospitable temperature and mix of chemicals that have made life abundant here. Most notably, Earth is unique in that most of our planet is covered in liquid water, since the temperature allows liquid water to exist for extended periods of time. Earth's vast oceans provided a convenient place for life to begin about 3.8 billion years ago.",
      "Some of the features of our planet that make it great for sustaining life are changing due to the ongoing effects of climate change."
    ],
    size: [
      "With an equatorial diameter of 7,926 miles (12,756 kilometers), Earth is the biggest of the terrestrial planets and the fifth largest planet in our solar system.",
      "From an average distance of 93 million miles (150 million kilometers), Earth is exactly one astronomical unit away from the Sun because one astronomical unit (abbreviated as AU), is the distance from the Sun to Earth. This unit provides an easy way to quickly compare planets' distances from the Sun.",
      "It takes about eight minutes for light from the Sun to reach our planet."
    ],
    orbital: [
      "As Earth orbits the Sun, it completes one rotation every 23.9 hours. It takes 365.25 days to complete one trip around the Sun. That extra quarter of a day presents a challenge to our calendar system, which counts one year as 365 days. To keep our yearly calendars consistent with our orbit around the Sun, every four years we add one day. That day is called a leap day, and the year it's added to is called a leap year.",
      "Earth's axis of rotation is tilted 23.4 degrees with respect to the plane of Earth's orbit around the Sun. This tilt causes our yearly cycle of seasons. During part of the year, the northern hemisphere is tilted toward the Sun, and the southern hemisphere is tilted away. With the Sun higher in the sky, solar heating is greater in the north producing summer there. Less direct solar heating produces winter in the south. Six months later, the situation is reversed. When spring and fall begin, both hemispheres receive roughly equal amounts of heat from the Sun."
    ],
    moons: [
      "Earth is the only planet in our solar system with only one moon. Our Moon is the brightest and most familiar object in the night sky. In many ways, the Moon is responsible for making Earth such a great home. It stabilizes our planet's wobble, which has made the climate less variable over thousands of years.",
      "Earth sometimes temporarily hosts orbiting asteroids or large rocks. They are typically trapped by Earth's gravity for a few months or years before returning to an orbit around the Sun. Some asteroids will be in a long “dance” with Earth as both orbit the Sun.",
      "Some moons are bits of rock that were captured by a planet's gravity, but our Moon is likely the result of a collision billions of years ago. When Earth was a young planet, a large chunk of rock smashed into it, displacing a portion of Earth's interior. The resulting chunks clumped together and formed our Moon. With a radius of 1,080 miles (1,738 kilometers), the Moon is the fifth largest moon in our solar system (after Ganymede, Titan, Callisto, and Io).",
      "The Moon is an average of 238,855 miles (384,400 kilometers) away from Earth. That means 30 Earth-sized planets could fit in between Earth and its Moon.",
    ],
    structure: [
      "Earth is composed primarily of rock and iron.Earth is composed of four main layers, starting with an inner core at the planet's center, enveloped by the outer core, mantle, and crust.",
      "The inner core is a solid sphere made of iron and nickel metals about 759 miles (1,221 kilometers) in radius. There the temperature is as high as 9,800 degrees Fahrenheit (5,400 degrees Celsius). Surrounding the inner core is the outer core. This layer is about 1,400 miles (2,300 kilometers) thick, made of iron and nickel fluids.",
      "In between the outer core and crust is the mantle, the thickest layer. This hot, viscous mixture of molten rock is about 1,800 miles (2,900 kilometers) thick and has the consistency of caramel. The outermost layer, Earth's crust, goes about 19 miles (30 kilometers) deep on average on land. At the bottom of the ocean, the crust is thinner and extends about 3 miles (5 kilometers) from the seafloor to the top of the mantle."
    ],
    surface: [
      "Like Mars and Venus, Earth has volcanoes, mountains, and valleys. Earth's lithosphere, which includes the crust (both continental and oceanic) and the upper mantle, is divided into huge plates that are constantly moving. For example, the North American plate moves west over the Pacific Ocean basin, roughly at a rate equal to the growth of our fingernails. Earthquakes result when plates grind past one another, ride up over one another, collide to make mountains, or split and separate.",
      "Earth's global ocean, which covers about 71% of the planet's surface, has an average depth of about 2.3 miles (3.6 kilometers) and contains 97% of Earth's water. Almost all of Earth's volcanoes are hidden under these oceans. Hawaii's Mauna Kea volcano is taller from base to summit than Mount Everest, but most of it is underwater. Earth's longest mountain range is also underwater, at the bottom of the Arctic and Atlantic oceans. It is four times longer than the Andes, Rockies and Himalayas combined."
    ],
    atmosphere: "Near the surface, Earth has an atmosphere that consists of 78% nitrogen, 21% oxygen, and 1% other gases such as argon, carbon dioxide, and neon. The atmosphere affects Earth's long-term climate and short-term local weather and shields us from much of the harmful radiation coming from the Sun. It also protects us from meteoroids, most of which burn up in the atmosphere, seen as meteors in the night sky, before they can strike the surface as meteorites.",
    magnethosphere:
      "Our planet's rapid rotation and molten nickel-iron core give rise to a magnetic field, which the solar wind distorts into a teardrop shape in space. (The solar wind is a stream of charged particles continuously ejected from the Sun.) When charged particles from the solar wind become trapped in Earth's magnetic field, they collide with air molecules above our planet's magnetic poles. These air molecules then begin to glow and cause aurorae, or the northern and southern lights. The magnetic field is what causes compass needles to point to the North Pole regardless of which way you turn. But the magnetic polarity of Earth can change, flipping the direction of the magnetic field. The geologic record tells scientists that a magnetic reversal takes place about every 300,000 years on average, but the timing is very irregular. As far as we know, such a magnetic reversal doesn't cause any harm to life on Earth, and a reversal is very unlikely to happen for at least another thousand years. But when it does happen, compass needles are likely to point in many different directions for a few centuries while the switch is being made. And after the switch is completed, they will all point south instead of north.",
    gallery: ["/img/earth.gif", "/img/earth01.webp", "/img/earth02.webp"],
    imgdes1: "The Earth as seen from space, showcasing its blue oceans and white clouds.",
    imgdes2: "The Applications Technology Satellite (ATS-3) carried a black-and-white weather camera which transmitted the first full-disk image of Earth from geosynchronous orbit. On December 22, 1966, ATS-1 captured thisimage of Earth and the Moon together.",
    imgdes3: "On Christmas Eve 1968, the crew of Apollo 8 took this iconic photograph of Earth rising over the lunar horizon. It was the first time humans had seen their home planet from such a distant vantage point.",
  },
  mars: {
    name: "Mars",
    description:
      "Mars – the fourth planet from the Sun – is a dusty, cold, desert world with a very thin atmosphere. This dynamic planet has seasons, polar ice caps, extinct volcanoes, canyons and weather.",
    description2: [
      "Mars is one of the most explored bodies in our solar system, and it's the only planet where we've sent rovers to roam the alien landscape. NASA missions have found lots of evidence that Mars was much wetter and warmer, with a thicker atmosphere, billions of years ago.",
    ],
    nameshake:
      'Mars was named by the ancient Romans for their god of war because its reddish color was reminiscent of blood. Other civilizations also named the planet for this attribute – for example, the Egyptians called it "Her Desher," meaning "the red one." Even today, it is frequently called the "Red Planet" because iron minerals in the Martian dirt oxidize, or rust, causing the surface to look red.',
    potential: [
      "Scientists don't expect to find living things currently thriving on Mars. Instead, they're looking for signs of life that existed long ago, when Mars was warmer and covered with water.",
    ],
    size: [
      "With a radius of 2,106 miles (3,390 kilometers), Mars is about half the size of Earth. If Earth were the size of a nickel, Mars would be about as big as a raspberry.",
      "From an average distance of 142 million miles (228 million kilometers), Mars is 1.5 astronomical units away from the Sun. One astronomical unit (abbreviated as AU), is the distance from the Sun to Earth. From this distance, it takes sunlight 13 minutes to travel from the Sun to Mars."
    ],
    orbital: [
      "As Mars orbits the Sun, it completes one rotation every 24.6 hours, which is very similar to one day on Earth (23.9 hours). Martian days are called sols – short for \"solar day.\" A year on Mars lasts 669.6 sols, which is the same as 687 Earth days.",
      "Mars' axis of rotation is tilted 25 degrees with respect to the plane of its orbit around the Sun. This is another similarity with Earth, which has an axial tilt of 23.4 degrees. Like Earth, Mars has distinct seasons, but they last longer than seasons here on Earth since Mars takes longer to orbit the Sun (because it's farther away). And while here on Earth the seasons are evenly spread over the year, lasting 3 months (or one quarter of a year), on Mars the seasons vary in length because of Mars' elliptical, egg-shaped orbit around the Sun.",
      "Spring in the northern hemisphere (autumn in the southern) is the longest season at 194 sols. Autumn in the northern hemisphere (spring in the southern) is the shortest at 142 days. Northern winter/southern summer is 154 sols, and northern summer/southern winter is 178 sols."
    ],
    moons: [
      "Mars has two small moons, Phobos and Deimos, that may be captured asteroids. They're potato-shaped because they have too little mass for gravity to make them spherical.",
      "The moons get their names from the horses that pulled the chariot of the Greek god of war, Ares.",
      "Phobos, the innermost and larger moon, is heavily cratered, with deep grooves on its surface. It is slowly moving towards Mars and will crash into the planet or break apart in about 50 million years.",
      "Deimos, the smaller and outermost moon, is smoother than Phobos because its craters are filled in with debris. It is slowly moving away from Mars, as most moons do, at a rate of about 1.5 inches (3.8 centimeters) per year.",
    ],
    structure: ["Mars has a dense core at its center between 930 and 1,300 miles (1,500 to 2,100 kilometers) in radius. It's made of iron, nickel, and sulfur. Surrounding the core is a rocky mantle between 770 and 1,170 miles (1,240 to 1,880 kilometers) thick, and above that, a crust made of iron, magnesium, aluminum, calcium, and potassium. This crust is between 6 and 30 miles (10 to 50 kilometers) deep."],
    surface: [
      "The Red Planet is actually many colors. At the surface, we see colors such as brown, gold, and tan. The reason Mars looks reddish is due to oxidization – or rusting – of iron in the rocks, regolith (Martian “soil”), and dust of Mars. This dust gets kicked up into the atmosphere and from a distance makes the planet appear mostly red.",
      "Interestingly, while Mars is about half the diameter of Earth, its surface has nearly the same area as Earth’s dry land. Its volcanoes, impact craters, crustal movement, and atmospheric conditions such as dust storms have altered the landscape of Mars over many years, creating some of the solar system's most interesting topographical features.",
      "A large canyon system called Valles Marineris is long enough to stretch from California to New York – more than 3,000 miles (4,800 kilometers). This Martian canyon is 200 miles (320 kilometers) at its widest and 4.3 miles (7 kilometers) at its deepest. That's about 10 times the size of Earth's Grand Canyon.",
      "Mars is home to the largest volcano in the solar system, Olympus Mons. It's three times taller than Earth's Mount Everest — which rises 29,029 feet, or 8,848 meters, above the Earth's surface — with a base the size of the state of New Mexico. Olympus Mons stands",
      "Mars appears to have had a watery past, with ancient river valley networks, deltas, and lakebeds, as well as rocks and minerals on the surface that could only have formed in liquid water. Some features suggest that Mars experienced huge floods about 3.5 billion years ago. Today, water mostly exists as ice at the poles and as vapor in the atmosphere. Some water ice is also mixed in with the soil at mid-latitudes. Liquid water cannot exist for long on the surface today because of the low atmospheric pressure and temperature.",
    ],
    atmosphere: "Mars has a thin atmosphere made up mostly of carbon dioxide, nitrogen, and argon gases. To our eyes, the sky would be hazy and red because of suspended dust instead of the familiar blue tint we see on Earth. Mars' sparse atmosphere doesn't offer much protection from impacts by such objects as meteorites, asteroids, and comets. The temperature on Mars can be as high as 70 degrees Fahrenheit (20 degrees Celsius) or as low as about -225 degrees Fahrenheit (-153 degrees Celsius).",
    magnethosphere: "Mars has no global magnetic field today, but areas of the Martian crust in the southern hemisphere are highly magnetized, indicating traces of a magnetic field from 4 billion years ago.",
    gallery: ["/img/mars.webp", "/img/mars01.webp", "/img/mars02.webp"],
    imgdes1:
      "Twelve orbits a day provide NASA Mars Global Surveyor MOC wide angle cameras a global napshot of weather patterns across the planet. Here, bluish-white water ice clouds hang above the Tharsis volcanoes.",
    imgdes2: "This is one of the last images ever taken by NASA's InSight Mars lander. Captured on Dec. 11, 2022, the 1,436th Martian day, or sol, of the mission, it shows InSight's seismometer on the Red Planet's",
    imgdes3: "This composite image, from NASA Galileo and Mars Global Survey orbiters, of Earth and Mars was created to allow viewers to gain a better understanding of the relative sizes of the two planets.",
  },
  jupiter: {
    name: "Jupiter",
    description:
      "Jupiter is a world of extremes. It's the largest planet in our solar system – if it were a hollow shell, 1,000 Earths could fit inside. It's also the oldest planet, forming from the dust and gases left over from the Sun's formation 4.6 billion years ago. But it has the shortest day in the solar system, taking about 9.9 hours to spin around once on its axis.",
    description2: ["Jupiter's signature stripes and swirls are actually cold, windy clouds of ammonia and water, floating in an atmosphere of hydrogen and helium. The dark orange stripes are called belts, while the lighter bands are called zones, and they flow east and west in opposite directions. Jupiter’s iconic Great Red Spot is a giant storm bigger than Earth that has raged for hundreds of years."],
    nameshake: "The king of planets was named for Jupiter, king of the gods in Roman mythology. Most of its moons are also named for mythological characters, figures associated with Jupiter or his Greek counterpart, Zeus.",
    potential: [
      "Jupiter’s environment is probably not conducive to life as we know it. The temperatures, pressures, and materials that characterize this planet are most likely too extreme and volatile for organisms to adapt to.",
      "While planet Jupiter is an unlikely place for living things to take hold, the same is not true of some of its many moons. Europa is one of the likeliest places to find life elsewhere in our solar system. There is evidence of a vast ocean just beneath its icy crust, where life could possibly be supported."
    ],
    size: [
      "With a radius of 43,440.7 miles (69,911 kilometers), Jupiter is 11 times wider than Earth. If Earth were the size of a grape, Jupiter would be about as big as a basketball.",
      "From an average distance of 484 million miles (778 million kilometers), Jupiter is 5.2 astronomical units away from the Sun. One astronomical unit (abbreviated as AU), is the distance from the Sun to Earth. From this distance, it takes sunlight 43 minutes to travel from the Sun to Jupiter."
    ],
    orbital: [
      "Jupiter has the shortest day in the solar system. One day on Jupiter takes 9.9 hours (the time it takes for Jupiter to rotate or spin around once), and Jupiter makes a complete orbit around the Sun (a year in Jovian time) in about 12 Earth years (4,333 Earth days).",
      "Its equator is tilted with respect to its orbital path around the Sun by just 3 degrees. This means Jupiter spins nearly upright and does not have seasons as extreme as other planets do."
    ],
    moons: [
      "With four large moons and many smaller moons, Jupiter forms a kind of miniature solar system.",
      "Jupiter has 95 moons that are officially recognized by the International Astronomical Union. The four largest moons – Io, Europa, Ganymede, and Callisto – were first observed by the astronomer Galileo Galilei in 1610 using an early version of the telescope. These four moons are known today as the Galilean satellites, and they're some of the most fascinating destinations in our solar system.",
      "Io is the most volcanically active body in the solar system. Ganymede is the largest moon in the solar system (even bigger than the planet Mercury). Callisto’s very few small craters indicate a small degree of current surface activity. A liquid-water ocean with the ingredients for life may lie beneath the frozen crust of Europa, the target of NASA's Europa Clipper mission slated to launch in 2024."
    ],
    structure: ["The composition of Jupiter is similar to that of the Sun – mostly hydrogen and helium. Deep in the atmosphere, pressure and temperature increase, compressing the hydrogen gas into a liquid. This gives Jupiter the largest ocean in the solar system – an ocean made of hydrogen instead of water. Scientists think that, at depths perhaps halfway to the planet's center, the pressure becomes so great that electrons are squeezed off the hydrogen atoms, making the liquid electrically conducting like metal. Jupiter's fast rotation is thought to drive electrical currents in this region, with the spinning of the liquid metallic hydrogen acting like a dynamo, generating the planet's powerful magnetic field.",
      "Deeper down, Jupiter's central core had long been a mystery. Scientists theorized Jupiter was a mostly homogeneous mix of hydrogen and helium gases, surrounding a small, solid core of heavier elements – ice, rock, and metal formed from debris and small objects swirling around that area of the embryonic solar system 4 billion years ago."
    ],
    surface: ["As a gas giant, Jupiter doesn’t have a true surface. The planet is mostly swirling gases and liquids. While a spacecraft would have nowhere to land on Jupiter, it wouldn’t be able to fly through unscathed either. The extreme pressures and temperatures deep inside the planet crush, melt, and vaporize spacecraft trying to fly into the planet."],
    atmosphere: "Jupiter’s atmosphere is a dynamic tapestry of colorful bands, storms, and cyclones, with three main cloud layers composed of ammonia ice, ammonium hydrosulfide crystals, and water. Its rapid 10-hour rotation drives strong jet streams, forming dark belts and bright zones, while long-lasting storms like the Great Red Spot—over twice the size of Earth—persist for centuries. NASA’s Juno mission revealed that these storms extend far below the cloud tops, with cyclones and anticyclones reaching depths of up to 350–500 kilometers, and that jet streams may be linked to deep ammonia movements. Jupiter’s poles host stable polygonal cyclones, maintained by a balance of forces, and the belts and zones exhibit layered behavior similar to Earth’s oceans, highlighting the planet’s complex and towering atmospheric dynamics.",
    magnethosphere: "The Jovian magnetosphere is the region of space influenced by Jupiter's powerful magnetic field. It balloons 600,000 to 2 million miles (1 to 3 million kilometers) toward the Sun (seven to 21 times the diameter of Jupiter itself) and tapers into a tadpole-shaped tail extending more than 600 million miles (1 billion kilometers) behind Jupiter, as far as Saturn's orbit. Jupiter's enormous magnetic field is 16 to 54 times as powerful as that of the Earth. It rotates with the planet and sweeps up particles that have an electric charge. Near the planet, the magnetic field traps swarms of charged particles and accelerates them to very high energies, creating intense radiation that bombards the innermost moons and can damage spacecraft.",
    gallery: ["/img/jupiter.webp", "/img/jupiterr.gif", "/img/jupiter02.webp"],
    imgdes1: "This enhanced Voyager image of Jupiter highlights its alternating light and dark cloud bands, which move eastward and westward at speeds up to 540 km/h. Massive storms, some as large as Earth, swirl across the planet, including the Great Red Spot, a giant anticyclonic storm that drifts along its belt and eventually circles the entire planet.",
    imgdes2: "The first color movie of Jupiter from NASA's Cassini spacecraft shows what it would look like to peel the entire globe of Jupiter, stretch it out on a wall into the form of a rectangular map, and watch its atmosphere evolve with time",
    imgdes3: "This image of Jupiter and its moon Io, at left, was taken by NASA's Cassini spacecraft on Dec. 1, 2000. It shows details of Jupiter's Great Red Spot and other features that were not visible in images taken earlier, when Cassini was farther from the planet.",
  },
  saturn: {
    name: "Saturn",
    description:
      "Like fellow gas giant Jupiter, Saturn is a massive ball made mostly of hydrogen and helium. Saturn is not the only planet to have rings, but none are as spectacular or as complex as Saturn's. Saturn also has dozens of moons.",
    description2: ["From the jets of water that spray from Saturn's moon Enceladus to the methane lakes on smoggy Titan, the Saturn system is a rich source of scientific discovery and still holds many mysteries."],
    nameshake: "The farthest planet from Earth discovered by the unaided human eye, Saturn has been known since ancient times. The planet is named for the Roman god of agriculture and wealth, who was also the father of Jupiter.",
    potential: [
      "Saturn's environment is not conducive to life as we know it. The temperatures, pressures, and materials that characterize this planet are most likely too extreme and volatile for organisms to adapt to.",
      "While planet Saturn is an unlikely place for living things to take hold, the same is not true of some of its many moons. Satellites like Enceladus and Titan, home to internal oceans, could possibly support life."
    ],
    size: ["With an equatorial diameter of about 74,897 miles (120,500 kilometers), Saturn is 9 times wider than Earth. If Earth were the size of a nickel, Saturn would be about as big as a volleyball.",
      "From an average distance of 886 million miles (1.4 billion kilometers), Saturn is 9.5 astronomical units away from the Sun. One astronomical unit (abbreviated as AU), is the distance from the Sun to Earth. From this distance, it takes sunlight 80 minutes to travel from the Sun to Saturn."
    ],
    orbital: ["Saturn has the second-shortest day in the solar system. One day on Saturn takes only 10.7 hours (the time it takes for Saturn to rotate or spin around once), and Saturn makes a complete orbit around the Sun (a year in Saturnian time) in about 29.4 Earth years (10,756 Earth days).",
      "Its axis is tilted by 26.73 degrees with respect to its orbit around the Sun, which is similar to Earth's 23.5-degree tilt. This means that, like Earth, Saturn experiences seasons."
    ],
    moons: ["Saturn is home to a vast array of intriguing and unique worlds. From the haze-shrouded surface of Titan to crater-riddled Phoebe, each of Saturn's moons tells another piece of the story surrounding the Saturn system. As of June 8, 2023, Saturn has 146 moons in its orbit, with others continually awaiting confirmation of their discovery and official naming by the International Astronomical Union (IAU).",
      "The largest moon, Titan, is bigger than the planet Mercury and is the second-largest moon in the solar system. Titan has a thick atmosphere and liquid methane lakes on its surface. Enceladus, another of Saturn's moons, has a subsurface ocean and geysers that spray water ice into space."],
    structure: ["Like Jupiter, Saturn is made mostly of hydrogen and helium. At Saturn's center is a dense core of metals like iron and nickel surrounded by rocky material and other compounds solidified by intense pressure and heat. It is enveloped by liquid metallic hydrogen inside a layer of liquid hydrogen –similar to Jupiter's core but considerably smaller.",
      "It's hard to imagine, but Saturn is the only planet in our solar system with an average density that is less than water. The giant gas planet could float in a bathtub if such a colossal thing existed."
    ],
    surface: ["As a gas giant, Saturn doesn’t have a true surface. The planet is mostly swirling gases and liquids deeper down. While a spacecraft would have nowhere to land on Saturn, it wouldn’t be able to fly through unscathed either. The extreme pressures and temperatures deep inside the planet would crush, melt, and vaporize any spacecraft trying to fly into the planet."],
    atmosphere: "Saturn’s atmosphere is covered in clouds forming faint stripes, storms, and powerful jet streams, with colors ranging from yellow to brown and gray. Winds at the equator reach up to 500 meters per second—far stronger than Earth’s hurricanes—while extreme atmospheric pressure compresses gas into liquid. Its north pole features a unique hexagonal jet stream, 30,000 kilometers across, with 200 mph winds and a massive central storm, a phenomenon unlike anything else in the solar system.",
    magnethosphere: "Saturn’s magnetic field, though smaller than Jupiter’s, is still 578 times stronger than Earth’s and shapes the environment for its rings and many moons. Aurorae occur when charged particles follow magnetic field lines into the atmosphere, but unlike Earth, some of Saturn’s aurorae are driven not by the solar wind but by particles from its moons and the planet’s rapid rotation—though these non-solar aurorae are still not fully understood.",
    gallery: ["/img/saturn.webp", "/img/saturn01.webp", "/img/saturn02.webp"],
    imgdes1: "It spent more than a decade making discoveries about Saturn and its system of rings and moons. On Sept. 15, 2017, Cassini's spacecraft ended its mission with a spectacular, planned plunge into Saturn’s atmosphere – sending science data back to the last second. This image captured one of Cassini’s last looks at Saturn and its main rings from a distance.",
    imgdes2: "NASA’s Pioneer 11, launched in 1973, was the first spacecraft to study Saturn up close. During its 1979 flyby, it captured images of Saturn, its rings, and Titan from over 1.7 million miles away, eventually coming within about 13,000 miles of the planet. Pioneer 11 discovered two new moons, a previously unknown F ring, and mapped Saturn’s magnetosphere, magnetic field, and interior structure.",
    imgdes3: "NASA’s Cassini spacecraft captured a natural-color mosaic of Saturn and its main rings on October 10, 2013, showing the planet’s golden hues and seasonal color changes. The image, made from 36 filtered photos, reveals Saturn’s C, B, and A rings, with the F ring faintly visible, and shadows cast by the rings on the planet’s surface. As Saturn’s seasons shifted, the northern hemisphere became more golden while the southern hemisphere turned bluer, illustrating the dynamic atmospheric changes over time.",
  },
  uranus: {
    name: "Uranus",
    description:
      "Uranus is a very cold and windy world. The ice giant is surrounded by 13 faint rings and 28 small moons. Uranus rotates at a nearly 90-degree angle from the plane of its orbit. This unique tilt makes Uranus appear to spin sideways, orbiting the Sun like a rolling ball.",
    description2: ["Uranus was the first planet found with the aid of a telescope. It was discovered in 1781 by astronomer William Herschel, although he originally thought it was either a comet or a star. It was two years later that the object was universally accepted as a new planet, in part because of observations by astronomer Johann Elert Bode."],
    nameshake: "William Herschel tried unsuccessfully to name his discovery Georgium Sidus after King George III. Instead, the planet was named for Uranus, the Greek god of the sky, as suggested by Johann Bode.",
    potential: ["Uranus' environment is not conducive to life as we know it. The temperatures, pressures, and materials that characterize this planet are most likely too extreme and volatile for organisms to adapt to."],
    size: ["With an equatorial diameter of 31,763 miles (51,118 kilometers), Uranus is four times wider than Earth. If Earth was the size of a nickel, Uranus would be about as big as a softball.",
      "From an average distance of 1.8 billion miles (2.9 billion kilometers), Uranus is about 19 astronomical units away from the Sun. One astronomical unit (abbreviated as AU), is the distance from the Sun to Earth. From this distance, it takes sunlight 2 hours and 40 minutes to travel from the Sun to Uranus."
    ],
    orbital: ["One day on Uranus takes about 17 hours. This is the amount of time it takes Uranus to rotate, or spin once around its axis. Uranus makes a complete orbit around the Sun (a year in Uranian time) in about 84 Earth years (30,687 Earth days).",
      "Uranus is the only planet whose equator is nearly at a right angle to its orbit, with a tilt of 97.77 degrees. This may be the result of a collision with an Earth-sized object long ago. This unique tilt causes Uranus to have the most extreme seasons in the solar system. For nearly a quarter of each Uranian year, the Sun shines directly over each pole, plunging the other half of the planet into a 21-year-long, dark winter.",
      "Uranus is also one of just two planets that rotate in the opposite direction than most of the planets. Venus is the other."
    ],
    moons: ["Uranus has 28 known moons. While most of the satellites orbiting other planets take their names from Greek or Roman mythology, Uranus' moons are unique in being named for characters from the works of William Shakespeare and Alexander Pope.",
      "All of Uranus' inner moons appear to be roughly half water ice and half rock. The composition of the outer moons remains unknown, but they are likely captured asteroids."
    ],
    structure: ["Uranus is one of two ice giants in the outer solar system (the other is Neptune). Most (80% or more) of the planet's mass is made up of a hot dense fluid of \"icy\" materials – water, methane, and ammonia – above a small rocky core. Near the core, it heats up to 9,000 degrees Fahrenheit (4,982 degrees Celsius).",
      "Uranus is slightly larger in diameter than its neighbor Neptune, yet smaller in mass. It is the second least dense planet; Saturn is the least dense of all.",
      "Uranus gets its blue-green color from methane gas in the atmosphere. Sunlight passes through the atmosphere and is reflected back out by Uranus' cloud tops. Methane gas absorbs the red portion of the light, resulting in a blue-green color."
    ],
    surface: ["As an ice giant, Uranus doesn’t have a true surface. The planet is mostly swirling fluids. While a spacecraft would have nowhere to land on Uranus, it wouldn’t be able to fly through its atmosphere unscathed either. The extreme pressures and temperatures would destroy a metal spacecraft."],
    atmosphere: "Uranus’ atmosphere is primarily hydrogen and helium, with methane giving it its characteristic blue color, along with traces of water and ammonia. While Voyager 2 observed few clouds and dark spots, more recent studies show dynamic cloud activity near equinox, with rapidly changing bright features. Temperatures drop to a frigid 49K (-224°C), and winds can reach up to 900 km/h, moving retrograde at the equator and prograde near the poles.",
    magnethosphere: "Uranus has an unusual, irregular magnetosphere, with its magnetic axis tilted nearly 60° from its rotation axis and offset from the planet’s center. This causes auroras that do not align with the poles, unlike on Earth, Jupiter, or Saturn. The planet’s sideways rotation twists its magnetosphere into a corkscrew-shaped tail that stretches millions of miles into space.",
    gallery: ["/img/uranus.webp", "/img/uranus01.webp", "/img/uranus02.webp"],
    imgdes1: "This is an image of the planet Uranus taken by the spacecraft Voyager 2 in 1986.",
    imgdes2: "A recent Hubble Space Telescope image shows Uranus with its four major rings and ten of its seventeen known moons. The false-color view, generated from near-infrared data, highlights about 20 clouds and uses color to indicate altitude: green and blue show clear atmosphere, yellow and gray indicate higher haze or cloud layers, and orange and red reveal very high clouds similar to Earth’s cirrus clouds.",
    imgdes3: "An infrared composite image of the two hemispheres of Uranus obtained with Keck Telescope adaptive optics.",
  },
  neptune: {
    name: "Neptune",
    description:
      "Dark, cold, and whipped by supersonic winds, ice giant Neptune is more than 30 times as far from the Sun as Earth. Neptune is the only planet in our solar system not visible to the naked eye. In 2011 Neptune completed its first 165-year orbit since its discovery in 1846.",
    description2: ["Neptune is so far from the Sun that high noon on the big blue planet would seem like dim twilight to us. The warm light we see here on our home planet is roughly 900 times as bright as sunlight on Neptune."],
    nameshake: "Galileo recorded Neptune as a fixed star during observations with his small telescope in 1612 and 1613. More than 200 years later, the ice giant became the first planet located through mathematical predictions rather than through regular observations of the sky. Because Uranus didn't travel exactly as astronomers expected it to, French mathematician Urbain Joseph Le Verrier proposed the position and mass of a then-unknown planet that could cause the observed changes to Uranus' orbit. Le Verrier sent his predictions to Johann Gottfried Galle at the Berlin Observatory, who found Neptune on his first night of searching in 1846. Seventeen days later, Neptune's largest moon Triton was discovered as well.",
    potential: [
      "Neptune's environment is not conducive to life as we know it. The temperatures, pressures, and materials that characterize this planet are most likely too extreme, and volatile for organisms to adapt to.",
    ],
    size: ["With an equatorial diameter of 30,775 miles (49,528 kilometers), Neptune is about four times wider than Earth. If Earth were the size of a nickel, Neptune would be about as big as a baseball.",
      "From an average distance of 2.8 billion miles (4.5 billion kilometers), Neptune is 30 astronomical units away from the Sun. One astronomical unit (abbreviated as AU), is the distance from the Sun to Earth. From this distance, it takes sunlight 4 hours to travel from the Sun to Neptune."
    ],
    orbital: ["One day on Neptune takes about 16 hours (the time it takes for Neptune to rotate or spin once). And Neptune makes a complete orbit around the Sun (a year in Neptunian time) in about 165 Earth years (60,190 Earth days).",
      "Sometimes Neptune is even farther from the Sun than dwarf planet Pluto. Pluto's highly eccentric, oval-shaped orbit brings it inside Neptune's orbit for a 20-year period every 248 Earth years. This switch, in which Pluto is closer to the Sun than Neptune, happened most recently from 1979 to 1999. Pluto can never crash into Neptune, though, because for every three laps Neptune takes around the Sun, Pluto makes two. This repeating pattern prevents close approaches of the two bodies.",
      "Neptune’s axis of rotation is tilted 28 degrees with respect to the plane of its orbit around the Sun, which is similar to the axial tilts of Mars and Earth. This means that Neptune experiences seasons just like we do on Earth; however, since its year is so long, each of the four seasons lasts for over 40 years."
    ],
    moons: ["Neptune has 16 known moons. Neptune's largest moon Triton was discovered on Oct. 10, 1846, by William Lassell, just 17 days after Johann Gottfried Galle discovered the planet. Since Neptune was named for the Roman god of the sea, its moons are named for various lesser sea gods and nymphs in Greek mythology.",
      "Triton is the only large moon in the solar system that circles its planet in a direction opposite to the planet's rotation (a retrograde orbit), which suggests that it may once have been an independent object that Neptune captured. Triton is extremely cold, with surface temperatures around minus 391 degrees Fahrenheit (minus 235 degrees Celsius). And yet, despite this deep freeze at Triton, Voyager 2 discovered geysers spewing icy material upward more than 5 miles (8 kilometers). Triton's thin atmosphere, also discovered by Voyager, has been detected from Earth several times since, and is growing warmer, but scientists do not yet know why."
    ],
    structure: ["Neptune is one of two ice giants in the outer solar system (the other is Uranus). Most (80% or more) of the planet's mass is made up of a hot dense fluid of \"icy\" materials – water, methane, and ammonia – above a small, rocky core. Of the giant planets, Neptune is the densest.",
      "Scientists think there might be an ocean of super hot water under Neptune's cold clouds. It does not boil away because incredibly high pressure keeps it locked inside."
    ],
    surface: ["Neptune does not have a solid surface. Its atmosphere (made up mostly of hydrogen, helium, and methane) extends to great depths, gradually merging into water and other melted ices over a heavier, solid core with about the same mass as Earth."],
    atmosphere: "Neptune’s atmosphere is mostly hydrogen and helium with a small amount of methane, which gives the planet its vivid blue color, similar to Uranus. Voyager 2 images from 1989 revealed Neptune’s distinctive clouds and features, showing it much bluer than Uranus, though modern reprocessing shows the two planets are more alike than previously thought. Neptune is the windiest planet in the solar system, with winds reaching over 2,000 km/h (1,200 mph), whipping frozen methane clouds across its surface. Its Great Dark Spot, a massive oval storm once larger than Earth, has disappeared, but new storms continue to form across the planet.",
    magnethosphere: "The main axis of Neptune's magnetic field is tipped over by about 47 degrees compared with the planet's rotation axis. Like Uranus, whose magnetic axis is tilted about 60 degrees from the axis of rotation, Neptune's magnetosphere undergoes wild variations during each rotation because of this misalignment. The magnetic field of Neptune is about 27 times more powerful than that of Earth.",
    gallery: ["/img/neptune.webp", "/img/neptune01.webp", "/img/neptune02.webp"],
    imgdes1: "This picture of Neptune was produced from images taken by NASA’s Voyager 2 in the summer of 1989 as it became the first spacecraft to fly by the planet.",
    imgdes2: "These pictures of Neptune were obtained by NASA Voyager 2 on Apr. 26,1989. The picture on the right was taken five hours after that at left, during which time the planet rotated 100 degrees.",
    imgdes3: "In this false color image of Neptune, objects that are deep in the atmosphere are blue, while those at higher altitudes are white. The image was taken by Voyager 2 wide-angle camera through an orange filter and two different methane filters.",
  },
};
