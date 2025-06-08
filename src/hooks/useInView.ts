import { useEffect, useRef, useState } from "react";

export const useInView = (options?: IntersectionObserverInit) => {
    const ref = useRef<HTMLDivElement | null>(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        if (!ref.current) return;

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsInView(true);
                observer.unobserve(entry.target); // stops observing after first reveal
            }
        }, options);

        observer.observe(ref.current);

        return () => observer.disconnect();
    }, [options]);

    return { ref, isInView };
};
