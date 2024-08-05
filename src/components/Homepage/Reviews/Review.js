import React, { useRef, useState, useEffect } from "react";
import { reviewsData } from "./reviewsData";

function Review() {
  const scrollContainerRef = useRef(null);

  const [isOverflow, setIsOverflow] = useState(false);

  useEffect(() => {
    // Function to check if the content overflows
    const checkOverflow = () => {
      if (scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        const totalWidth = Array.from(container.children).reduce(
          (acc, child) => acc + child.offsetWidth,
          0
        );
        const viewportWidth = window.innerWidth;
        setIsOverflow(totalWidth > viewportWidth);
      }
    };

    checkOverflow(); // Check on mount and resize
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reviewsData]);

  const handleMouseDown = (event) => {
    scrollContainerRef.current.isDragging = true;
    scrollContainerRef.current.startX =
      event.pageX - scrollContainerRef.current.offsetLeft;
    scrollContainerRef.current.scrollLeftStart =
      scrollContainerRef.current.scrollLeft;
  };

  const handleMouseMove = (event) => {
    if (scrollContainerRef.current.isDragging) {
      const x = event.pageX - scrollContainerRef.current.offsetLeft;
      const walk = (x - scrollContainerRef.current.startX) * 2; // Scroll speed
      scrollContainerRef.current.scrollLeft =
        scrollContainerRef.current.scrollLeftStart - walk;
    }
  };

  const handleMouseUp = () => {
    scrollContainerRef.current.isDragging = false;
  };
  return (
    <article className="py-20 flex items-center flex-col select-none">
      <h1 className="text-5xl font-[700] text-dark-blue">What they've said</h1>
      <div
        ref={scrollContainerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        // className="scroll-container py-10 flex  gap-10 overflow-x-auto bg-blue-200 3xl:bg-red-200 w-full
        // whitespace-nowrap"
        className={`pt-20 pb-10 flex w-full scroll-container ${
          isOverflow ? "overflow-x-auto" : "overflow-hidden justify-center"
        }`}
      >
        <ul className="flex gap-10 mx-5">
          {reviewsData.map((review, index) => (
            <li
              key={index}
              className="bg-[#FAFAFA] p-10 w-[30rem] flex flex-col text-center relative"
            >
              <img
                src={review.icon}
                alt="icon"
                className="w-14 h-14 absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
              />
              <p className="mt-4 font-semibold text-dark-blue">{review.name}</p>
              <p className="mt-2 text-wrap text-dark-grayish-blue">
                "{review.review}"
              </p>
            </li>
          ))}
        </ul>
      </div>
      <button className="bg-bright-red px-8 py-3 rounded-full text-white shadow-bright-red shadow-md">
        Get Started
      </button>
    </article>
  );
}

export default Review;
