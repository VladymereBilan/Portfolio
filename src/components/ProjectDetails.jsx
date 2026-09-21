import { motion } from "motion/react";
const ProjectDetails = ({
  title,
  description,
  subDescription,
  image,
  tags,
  href,
  liveLinks,
  closeModal,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-hidden backdrop-blur-sm">
      <motion.div
        className="relative max-w-2xl border shadow-sm rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <button
          onClick={closeModal}
          className="absolute p-2 rounded-sm top-5 right-5 bg-midnight hover:bg-gray-500"
        >
          <img src="/assets/close.svg" className="w-6 h-6" alt="Close" />
        </button>
        <img
          src={image}
          alt={title}
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = "/assets/projects/accessories.jpg";
          }}
          className="w-full rounded-t-2xl"
        />
        <div className="p-5">
          <div className="flex items-center gap-3 mb-2">
            <h5 className="text-2xl font-bold text-white">{title}</h5>
            {liveLinks?.length > 0 && (
              <span className="flex items-center gap-1.5 px-2 py-0.5 text-xs font-medium text-green-400 border border-green-400/30 rounded-full bg-green-400/10">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                Live
              </span>
            )}
          </div>
          <p className="mb-3 font-normal text-neutral-400">{description}</p>
          {subDescription.map((subDesc, index) => (
            <p key={index} className="mb-3 font-normal text-neutral-400">
              {subDesc}
            </p>
          ))}
          {liveLinks?.length > 0 && (
            <div className="flex flex-wrap gap-3 mb-4">
              {liveLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md bg-radial from-lavender to-royal hover-animation"
                >
                  {link.label}
                  <img src="/assets/arrow-up.svg" className="w-4 h-4" alt="" />
                </a>
              ))}
            </div>
          )}
          <div className="flex items-center justify-between mt-4">
            <div className="flex gap-3">
              {tags.map((tag) => (
                <img
                  key={tag.id}
                  src={tag.path}
                  alt={tag.name}
                  className="rounded-lg w-10 h-10 object-contain hover:scale-110"
                />
              ))}
            </div>
            {href && (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-medium hover-animation"
              >
                {liveLinks?.length > 0 ? "Source Code" : "View Project"}
                <img src="/assets/arrow-up.svg" className="w-4 h-4" alt="" />
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
