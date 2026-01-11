export interface SunInfo{
    name: string
    description: string[]
    lifecycle: string[]
    orbit: string
    structure: string[]
    spaceweather: string[]
    solarobservation: string[]
    gallery: string[]
    imgdes1: string
    imgdes2: string
    imgdes3: string
    imgdes4: string
    imgdes5: string
    imgdes6: string
}

export type SunDataType = {
    [key: string]: SunInfo
}

export const SUN_DATA: SunDataType = {
    'sun': {
        name: "The Sun",
        description: ["The Sun's gravity holds the solar system together, keeping everything, from the biggest planets to the smallest particles of debris, in its orbit. The connection and interactions between the Sun and Earth drive the seasons, ocean currents, weather, climate, radiation belts and auroras. Though it is special to us, there are billions of stars like our Sun scattered across the Milky Way galaxy",
                    "The Sun has many names in many cultures. The Latin word for Sun is “sol,” which is the main adjective for all things Sun-related: solar."
                    ],
        lifecycle: ['The Sun and the solar system were formed about 4.5 billion years ago when a giant cloud of gas and dust collapsed on itself. Since then, the Sun has continued to burn its fuel, hydrogen gas, and release particles and radiation (including light and heat!) out into the solar system.',
            'In about five billion years, the Sun will run out of fuel and will start swelling up into a red giant star, a process that will last billions of years. It will become so large that it will swallow up Mercury and Venus – and possibly even Earth. Later on, the Sun will shed its outer envelope and leave behind a white dwarf, surrounded by an outer shell of gas. These glowing remains of Sun-like stars are called planetary nebulae.', 
            ],
        orbit: 'The Sun orbits the centre of our galaxy, the Milky Way. It takes the Sun about 250 million years to complete one full orbit. Like the planets, it also rotates on its own axis. It takes a little over 25 days for the Sun to complete a full rotation.',
        structure: ['The Sun is made up of several layers that each have different characteristics.',
            "The core:is the innermost part of the Sun, has a temperature of over 15 million degrees Celsius. It is where nuclear fusion produces all of the Sun's energy",
            'Energy from the core is transported outward through two layers called the radiative and convective zones.', 
            'The surface of the Sun has a temperature of about 5500 degrees Celsius.',
        "The outermost region of the Sun's atmosphere, the corona, is hotter than the Sun's core. The corona can reach a scorching 20 million degrees Celsius, and scientists are still not sure why it is so incredibly hot. This outer layer can be seen during total solar eclipses."
        ],
        spaceweather: ["The Sun's activity can have a significant impact on our daily lives. Powerful bursts, flares, and sudden increases in brightness can launch particles and radiation throughout the solar system. Solar storms are often associated with the beautiful aurora, as particles released by the Sun interact with Earth's magnetic field.",
            "But these unpredictable events can also be dangerous, as solar storms can trigger power outages, satellite malfunctions, and even disruptions to GPS and communications systems. The intensity of these storms is sometimes influenced by the Sun's seasons: our closest star goes through a cycle of minimum and maximum activity that lasts roughly 11 years. With each cycle, the Sun's north and south poles trade places.",],
        solarobservation: ['Astronomers – amateur and professional alike – must use specialized equipment to observe the Sun because it is so incredibly bright.',
            "Scientists have studied the Sun using space probes since the 1950s. NASA's Pioneer probes measured the Sun's winds and magnetic field. Launched in 1995, the Solar and Heliospheric Observatory, built by NASA and the European Space Agency, provided constant direct observations of the Sun until 2012. It continues to monitor the Sun at many different wavelengths.", 
            "NASA's Parker Solar Probe was launched in 2018 to study the Sun while in orbit around our star. As the probe makes its closest approaches to the Sun in late 2024, it will achieve speeds of up to 200 km per second, making it the fastest artificial object. During its mission, the probe will graze the Sun's outer corona at a relatively close distance, only 7 million kilometres away! This flyby should help scientists solve the mystery of why the corona is much hotter than the surface. Parker will also study the Sun's magnetic field and collect data about energy and particles associated with solar winds."
        ],
        gallery: ['/img/sun00.webp', '/img/sun01.webp', '/img/sun02.webp', '/img/sun03.webp', '/img/sun04.webp', '/img/sun05.webp'],
        imgdes1: "The Sun photographed at 304 angstroms by the Atmospheric Imaging Assembly (AIA 304) of NASA's Solar Dynamics Observatory (SDO). This is a false-color image of the Sun observed in the extreme ultraviolet region of the spectrum.",
        imgdes2: 'Diagram of the Sun.',
        imgdes3: "On August 31, 2012 a long filament of solar material that had been hovering in the sun's atmosphere, the corona, erupted out into space at 4:36 p.m. EDT. The coronal mass ejection, or CME, traveled at over 900 miles per second. The CME did not travel directly toward Earth, but did connect with Earth's magnetic environment, or magnetosphere, causing aurora to appear on the night of Monday, September 3.",
        imgdes4: "This composite image of the Sun includes high-energy X-ray data from NASA's Nuclear Spectroscopic Telescope Array (NuSTAR) shown in blue; lower energy X-ray data from the X-ray Telescope (XRT) on the Japanese Aerospace Exploration Agency's Hinode mission shown in green; and ultraviolet light detected by the Atmospheric Imaging Assembly (AIA) on NASA's Solar Dynamics Observatory (SDO) shown in red",
        imgdes5: "The Sun blew out a coronal mass ejection along with part of a solar filament over a three-hour period (Feb. 24, 2015). While some of the strands fell back into the Sun, a substantial part raced into space in a bright cloud of particles (as observed by the SOHO spacecraft).",
        imgdes6: 'CME blast and subsequent impact at Earth -- This illustration shows a CME blasting off the Sun’s surface in the direction of Ea CME blast and subsequent impact at Earth -- This illustration shows a CME blasting off the Sun’s surface in the direction of Earth.',
    }
}