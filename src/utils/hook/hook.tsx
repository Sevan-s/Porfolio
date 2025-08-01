import { useEffect, useRef, useState } from "react";

export function useInView(options = { threshold: 0.2 }) {
    const ref = useRef<HTMLDivElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIsVisible(entry.isIntersecting);
        }, options);

        if (ref.current)
            observer.observe(ref.current);

        return () => {
            if (ref.current)
                observer.unobserve(ref.current);
        };
    }, [ref, options]);

    return { ref, isVisible };
}

export function FadeSection({ children }: { children: React.ReactNode }) {
    const { ref, isVisible } = useInView();

    return (
        <div
            ref={ref}
            className={`transition-opacity duration-1000 ease-out w-full overflow-hidden ${isVisible ? "opacity-100" : "opacity-0"
                }`}
        >
            {children}
        </div>
    );
}