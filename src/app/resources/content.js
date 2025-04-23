import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Rohit",
  lastName: "Giri Rg",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Full Stack Developer",
  avatar: "/images/avatar.jpg",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Hindi", "Marathi"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I write about design, technology, and engineering—where creativity meets code. Passionate about building intuitive UIs and scalable systems, I share insights on crafting user-friendly, high-performance applications. Let’s connect! 🚀
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/RohitGiriRg",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/rohit-giri-rg/",
  },
  {
    name: "X",
    icon: "x",
    link: "https://x.com/RohitGi82891634",
  },
  {
    name: "Email",
    icon: "email",
    link: "rohitgiri7@yahoo.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `I'm Rohit Full Stack Developer where I craft UI & scalable system.I write about design, technology, and the art of engineering.`,
  headline: <>Full Stack Developer</>,
  images: [
    {
      src: "/images/avatar.jpg",
      alt: "image",
      orientation: "vertical",
    }],
  subline: (
    <>
      I'm Rohit <InlineCode>Full Stack Developer</InlineCode> where I craft UI & scalable system.
      <br /> I write about design, technology, and the art of engineering.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Passionate Full Stack Developer with expertise in web (MERN/MEAN, Node.js, Java) and mobile (Flutter, React Native, Android/iOS) development.Built impactful projects like E-commerce platforms and Back-end Services.Active open-source contributor, focused on collaboration and innovation.Currently enhancing web/mobile experiences with modern tech stacks. </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Pisyst India Pvt.Ltd.",
        timeframe: "April 2024 - October 2024",
        role: "Full Stack Developer",
        achievements: [
          <>
            Developed responsive interfaces with HTML, CSS, JavaScript, and React built server-side logic and integrated MySQL and MongoDB.
          </>,
          <>
            Collaborated with clients to understand their needs and deliver tailored
            solutions.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images

        ],
      },
      {
        company: "Keplaar eSports Pvt. Ltd.",
        timeframe: "March 2023 - April 2024",
        role: "Front End Developer",
        achievements: [
          <>
            Designed new features for the prototype model and led BRD creation for Keplaar eSports App and coordinated third-party meetings
          </>,
          <>
            Secured investment meetings, successfully raising funds for company
            growth and strategic initiatives.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images

        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University of Amravati (SGBAU)",
        description: <>Master of Computer Application (MCA).</>,
      },
      {
        name: "University of Amravati (SGBAU)",
        description: <>Bachelor of Computer Application (BCA).</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Web Applications",
        description: <>Able to prototype in MERN with speed.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Mobile Applications",
        description: <>Building next gen apps with Flutter + React Native + Angular.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
