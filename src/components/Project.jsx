import React, { useState } from "react";
import ProjectDetails from "./ProjectDetails";

const Project = ({
  title,
  description,
  subDescription,
  href,
  liveLinks,
  image,
  tags,
  setPreview,
}) => {
  const [isHidden, setIsHidden] = useState(false);
  return (
    <>
      <div
        className="flex-wrap items-center justify-between py-10 space-y-14 sm:flex sm:space-y-0 cursor-pointer group"
        onMouseEnter={() => setPreview(image)}
        onMouseLeave={() => setPreview(null)}
        onClick={() => setIsHidden(true)}
      >
        <div>
          <div className="flex items-center gap-3">
            <p className="text-2xl group-hover:text-sand transition-colors">{title}</p>
            {liveLinks?.length > 0 && (
              <span className="flex items-center gap-1.5 px-2 py-0.5 text-xs font-medium text-green-400 border border-green-400/30 rounded-full bg-green-400/10">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                Live
              </span>
            )}
          </div>
          <div className="flex gap-5 mt-2 text-sand">
            {tags.map((tag) => (
              <span key={tag.id}>{tag.name}</span>
            ))}
          </div>
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsHidden(true);
          }}
          className="flex items-center gap-1 cursor-pointer hover-animation"
        >
          Read More
          <img src="/assets/arrow-right.svg" className="w-5" alt="" />
        </button>
      </div>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
      {isHidden && (
        <ProjectDetails
          title={title}
          description={description}
          subDescription={subDescription}
          image={image}
          tags={tags}
          href={href}
          liveLinks={liveLinks}
          closeModal={() => setIsHidden(false)}
        />
      )}
    </>
  );
};

export default Project;
