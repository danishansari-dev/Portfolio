import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    if (!dot) return;

    const move = (e: MouseEvent) => {
      dot.style.left = `${e.clientX - 6}px`;
      dot.style.top = `${e.clientY - 6}px`;
    };

    const addHover = () => dot.classList.add("hovered");
    const removeHover = () => dot.classList.remove("hovered");

    document.addEventListener("mousemove", move);

    const observe = () => {
      document.querySelectorAll("a, button, .interactive").forEach((el) => {
        el.addEventListener("mouseenter", addHover);
        el.addEventListener("mouseleave", removeHover);
      });
    };
    observe();
    const observer = new MutationObserver(observe);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener("mousemove", move);
      observer.disconnect();
    };
  }, []);

  return <div ref={dotRef} className="cursor-dot hidden md:block" />;
};

export default CustomCursor;
