import { OrbitingCircles } from "./OrbitingCircles";

export function Frameworks() {
  // Explicit skill list with optional logo paths. If a logo file isn't
  // available in `public/assets/logos`, the Icon component will render
  // a simple text badge instead.
  const skills = [
    { name: "HTML5", src: "/assets/logos/html5.svg" },
    { name: "CSS3", src: "/assets/logos/css3.svg" },
    { name: "JavaScript", src: "/assets/logos/javascript.svg" },
    { name: "Python", src: "/assets/logos/Python.jpg" },
    { name: "Laravel / PHP", src: "/assets/logos/laravel.png" },
    { name: "MERN (React)", src: "/assets/logos/react.svg" },
    { name: "Node / Express", src: "/assets/logos/NodeJS.png" },
    { name: "MySQL", src: "/assets/logos/MySQL.png" },
    { name: "MongoDB", src: "/assets/logos/MongoDB.png" },
    { name: "Tailwind", src: "/assets/logos/tailwindcss.svg" },
    { name: "Vite", src: "/assets/logos/vitejs.svg" },
  ];

  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40}>
        {skills.map((skill, index) => (
          <Icon key={index} name={skill.name} src={skill.src} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
        {[...skills].reverse().map((skill, index) => (
          <Icon key={index} name={skill.name} src={skill.src} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src, name }) => {
  if (src) {
    return (
      <img
        src={src}
        alt={name}
        className="duration-200 rounded-sm hover:scale-110 w-10 h-10 object-contain"
      />
    );
  }

  // Fallback badge when no logo file is available
  const initials = name
    .split(/\s|\//)
    .map((n) => n[0])
    .slice(0, 3)
    .join("")
    .toUpperCase();

  return (
    <div className="duration-200 flex items-center justify-center w-10 h-10 rounded-sm bg-white/10 text-xs font-semibold text-white/90 hover:scale-110">
      {initials}
    </div>
  );
};
