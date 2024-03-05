import { useEffect, useRef } from "react";

const Scroll = () => {
  const aboutRef = useRef();
  const skillsRef = useRef();
  const projectRef = useRef();
  const contactRef = useRef();

  const refArray = [aboutRef, skillsRef, projectRef, contactRef];

  useEffect(() => {
    console.log(aboutRef, skillsRef, projectRef, contactRef);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log("entry", entry.target.id);
        if (entry.isIntersecting) {
          entry.target.className = "show";
        } else {
          entry.target.className = "hidden";
        }
      });
    });

    refArray.forEach((el) => {
      observer.observe(el.current);
    });
  }, []);

  return refArray;
};

export default Scroll;
