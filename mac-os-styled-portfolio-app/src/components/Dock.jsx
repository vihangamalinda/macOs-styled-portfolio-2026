import React, { useRef } from "react";
import { dockApps } from "#constants/index.js";
import { Tooltip } from "react-tooltip";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const DOCK_ICON_CLASSNAME_SELECTOR = ".dock-icon";

const animateIcons = (container, mouseX, iconList) => {
  const { left } = container.getBoundingClientRect();

  iconList.forEach((icon) => {
    const { left: iconLeft, width } = icon.getBoundingClientRect();
    const center = iconLeft - left + width / 2;
    const distance = Math.abs(mouseX - center);

    const intensity = Math.exp(-(distance ** 2.5) / 2000);

    gsap.to(icon, {
      scale: 1 + 0.25 * intensity,
      y: -15 * intensity,
      duration: 0.2,
      ease: "power1.out",
    });
  });
};

const handleMouseMove = (event, container, iconList) => {
  const { left } = container.getBoundingClientRect();
  const mouseX = event.clientX - left;

  animateIcons(container, mouseX, iconList);
};

const resetIcons = (iconList) =>
  iconList.forEach((icon) =>
    gsap.to(icon, {
      scale: 1,
      y: 0,
      duration: 0.3,
      ease: "power1.out",
    }),
  );

const setUpDockAppHover = (container) => {
  if (!container) () => {};

  const iconList = container.querySelectorAll(DOCK_ICON_CLASSNAME_SELECTOR);

  container.addEventListener("mousemove", (e) =>
    handleMouseMove(e, container, iconList),
  );
  container.addEventListener("mouseleave", () => resetIcons(iconList));

  return () => {
    container.removeEventListener("mousemove", (e) =>
      handleMouseMove(e, container, iconList),
    );
    container.removeEventListener("mouseleave", () => resetIcons(iconList));
  };
};

function Dock() {
  const dockRef = useRef(null);

  useGSAP(() => {
    const dock = dockRef.current;

    const dockAnimationCleanUp = setUpDockAppHover(dock);
    return () => {
      dockAnimationCleanUp();
    };
  }, []);

  const toggleApp = (app) => {};

  return (
    <section id="dock">
      <div ref={dockRef} className="dock-container">
        {dockApps.map(({ id, name, icon, canOpen }) => {
          return (
            <div key={id} className="relative flex justify-center">
              <button
                type="button"
                className="dock-icon"
                aria-label={name}
                data-tooltip-id={`dock-tooltip`}
                data-tooltip-content={name}
                data-tooltip-delay-show={150}
                disabled={!canOpen}
                onClick={() => toggleApp({ id, canOpen })}
              >
                <img
                  src={`/images/${icon}`}
                  alt={name}
                  loading="lazy"
                  className={canOpen ? "" : "opacity-60"}
                />
              </button>
            </div>
          );
        })}
        <Tooltip id="dock-tooltip" placement="top" className="tooltip" />
      </div>
    </section>
  );
}

export default Dock;
