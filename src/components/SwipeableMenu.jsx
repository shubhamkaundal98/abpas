import React, { useState, useEffect, useRef } from "react";
import { useSpring, animated } from "react-spring";
import { useGesture } from "@use-gesture/react";
import manualVersion from "../assets/ABPAS_II_USER _MANUAL_ VERSION_3.2.pdf";
import bvnRule from "../assets/2012_06_01_BVN_rule_2012.pdf";

const SwipeableMenu = ({ isOpen, onClose }) => {
  const menuRef = useRef();
  const [{ y }, api] = useSpring(() => ({ y: 100 }));

  const openMenu = () => {
    api.start({ y: 0, immediate: false });
  };

  const closeMenu = () => {
    api.start({ y: 100, immediate: false });
    onClose();
  };

  useEffect(() => {
    if (isOpen) {
      openMenu();
    } else {
      closeMenu();
    }
  }, [isOpen]);

  useGesture(
    {
      onDrag: ({ down, movement: [, my], memo = y.get() }) => {
        if (my > 0) {
          api.start({ y: down ? my : 100 });
          if (!down) onClose();
        }
        return memo;
      },
    },
    {
      target: menuRef,
      eventOptions: { passive: false },
    }
  );

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <animated.div
      ref={menuRef}
      className="fixed bottom-0 left-0 right-0 h-[90vh] bg-white shadow-lg"
      style={{
        transform: y.to((y) => `translateY(${y}%)`),
      }}
    >
      <div className="p-4">
        <h2 className="text-lg font-semibold text-center mb-5">
          Drag down or press ESC to close
        </h2>
        {/* Your download links here */}
        <ul className="flex justify-around">
          <li>
            <a
              href="https://www.mptownplan.gov.in/plan_bhopal.html"
              target="_blank"
            >
              MASTER PLAN
            </a>
          </li>
          <li>
            <a href={bvnRule} target="_blank">
              BVN 2012
            </a>
          </li>
          <li>
            <a href={manualVersion} target="_blank">
              ABPAS II USER MANUAL VERSION 3.2
            </a>
          </li>
        </ul>
      </div>
    </animated.div>
  );
};

export default SwipeableMenu;
