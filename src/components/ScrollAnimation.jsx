import { useEffect, useRef, useState } from "react";
import '../styles/components-animation.css'

function ScrollAnimation({ children, className = ""}) {
    const elementRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);

                    // Stop observing after the first reveal
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.2
            }
        );

        const element = elementRef.current;

        if (element) {
            observer.observe(element);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={elementRef}
            className={`scroll-animate ${className} ${
                isVisible ? "show" : ""
            }`}
        >
            {children}
        </div>
    );
}

export default ScrollAnimation;