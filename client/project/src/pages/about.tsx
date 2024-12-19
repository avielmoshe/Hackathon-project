import { FaLinkedin, FaInstagram, FaGithub, FaEnvelope } from "react-icons/fa";

const teamMembers = [
  {
    name: "Ben",
    photo:
      "https://media.licdn.com/dms/image/v2/D4D03AQGM-T3ky__9pA/profile-displayphoto-shrink_800_800/B4DZPFvBgxHcAg-/0/1734189259490?e=1740009600&v=beta&t=MIBIlMAXE1fdNdQ5X0NcbZZqrOD83dUtPrEU9VXXXl0",
    linkedin: "https://linkedin.com",
    instagram: "https://www.instagram.com/",
    github: "https://github.com/Ben-Kilinski",
    email: "https://accounts.google.com/v3/signin/identifier",
  },
  {
    name: "Eden",
    photo:
      "https://media.licdn.com/dms/image/v2/D5603AQGHDYebMU11Gg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1728936119785?e=1740009600&v=beta&t=QYTQU_X1Z_Js3mjTSuw1LK4OJAKPtDHEbH_V7qMopW4",
    linkedin: "https://www.linkedin.com/in/eden-shabi-2b003a320/",
    instagram: "https://www.instagram.com/",
    github: "https://github.com/eden182",
    email: "https://accounts.google.com/v3/signin/identifier",
  },
  {
    name: "Elchanan",
    photo:
      "https://media.licdn.com/dms/image/v2/D4E03AQGogS1Mvt7ohQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1727109997734?e=1740009600&v=beta&t=aLYivL5g2jJ8IerJKXe-y7DqBXpo3FoOmAZFqt5RRBo",
    linkedin: "https://www.linkedin.com/in/elchanan-chen-0b3037320/",
    instagram: "https://www.instagram.com/",
    github: "https://github.com/nimrodamos",
    email: "https://accounts.google.com/v3/signin/identifier",
  },
  {
    name: "Aviel",
    photo:
      "https://media.licdn.com/dms/image/v2/D4D03AQEYpRWB3TE4qA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1728365101933?e=1740009600&v=beta&t=vxHVmp-WU2whb9WXTJjR8NVDNI6ajpZxg8FD9DvE3zA",
    linkedin: "https://www.linkedin.com/in/aviel-moshe-83385a320/",
    instagram: "https://www.instagram.com/rachel/",
    github: "https://github.com/avielmoshe",
    email: "mosheavieli@gmail.com",
  },
];

const About = () => {
  return (
    <>
      <div className="flex flex-col items-center py-8 bg-background text-foreground transition-all duration-300">
        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-extrabold ">Our Team</h1>
          <div className="h-1 w-24 bg-primary mx-auto"></div>
        </div>

        {/* Team Members Section */}
        <div className="flex flex-wrap justify-center gap-12 mb-4">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center group relative"
            >
              {/* Circular Photo */}
              <div className="relative overflow-hidden rounded-full w-40 h-40 transition-transform duration-300 group-hover:scale-110 shadow-lg">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Name */}
              <p className="mt-4 text-xl font-semibold">{member.name}</p>

              {/* Icons Below Name */}
              <div className="flex gap-4 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 dark:text-blue-400 hover:scale-125 transition-transform"
                >
                  <FaLinkedin size={24} />
                </a>
                <a
                  href={member.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-500 hover:scale-125 transition-transform"
                >
                  <FaInstagram size={24} />
                </a>
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-900 dark:text-gray-400 hover:scale-125 transition-transform"
                >
                  <FaGithub size={24} />
                </a>
                <a
                  href={`mailto:${member.email}`}
                  className="text-red-500 dark:text-red-400 hover:scale-125 transition-transform"
                >
                  <FaEnvelope size={24} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Explanatory Text */}
        <div className="max-w-3xl text-center">
          <p className="text-lg leading-relaxed">
            Hello there, that's a mock social media built as our students'
            project. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis
            euismod malesuada. Phasellus at tincidunt enim. Aliquam erat
            volutpat. Ut feugiat velit sit amet orci malesuada, a porttitor elit
            gravida. Pellentesque vel urna nec leo ultrices viverra ac vel
            purus. Nullam congue tortor in quam tempus, vitae auctor metus
            mollis. Aenean sit amet felis sit amet justo tincidunt porttitor non
            vel libero.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
