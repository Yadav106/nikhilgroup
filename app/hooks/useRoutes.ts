import { usePathname } from "next/navigation";
import { useMemo } from "react";

const useRoutes = () => {
    const pathname = usePathname();

    const routes = useMemo(() => [
        {
            label:"Upcoming Treks",
            href:"/pages/upcoming",
            active:pathname === "/pages/upcoming"
        },
        {
            label:"Articles",
            href:"/pages/articles",
            options: [
                {
                    label:"FAQs",
                    href:"/pages/faq"
                },
                {
                    label:"Photo Gallery",
                    href:"/pages/gallery"
                }
            ],
            active:pathname === "/pages/articles"
        },
        {
            label:"Our Story",
            href:"/pages/aboutus",
            options: [
                {
                    label:"About Us",
                    href:"/pages/aboutus"
                },
                {
                    label:"Our Team",
                    href:"/pages/team"
                }
            ],
            active:pathname === "/pages/aboutus"
        },
    ],[pathname])

    return routes;
}

export default useRoutes;