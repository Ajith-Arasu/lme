const formatLabel = (segment: string) => {
    return segment
        .replace(/-/g, " ")
        .replace(/\b\w/g, (c) => c.toUpperCase());
};

 export const generateBreadcrumb = (pathname: string) => {
    switch (pathname) {
        case "/exam-events":
            return {
                activeLink: [],
                inactiveLink: { label: "Exam Events" }
            };
            case "/exam-event":
            return {
                activeLink: [{ linkLable: "Exam Events", linkRedirect: "/exam-events" }],
                inactiveLink: { label: "Exam Event" }
            };
        case "/users":
            return {
                activeLink: [
                    { linkLable: "Dashboard", linkRedirect: "/" }
                ],
                inactiveLink: { label: "Users" }
            };
        case "/users/details":
            return {
                activeLink: [
                    { linkLable: "Dashboard", linkRedirect: "/" },
                    { linkLable: "Users", linkRedirect: "/users" }
                ],
                inactiveLink: { label: "User Details" }
            };
        case "/settings":
            return {
                activeLink: [
                    { linkLable: "Dashboard", linkRedirect: "/" }
                ],
                inactiveLink: { label: "Settings" }
            };
        case "/settings/profile":
            return {
                activeLink: [
                    { linkLable: "Dashboard", linkRedirect: "/" },
                    { linkLable: "Settings", linkRedirect: "/settings" }
                ],
                inactiveLink: { label: "Profile" }
            };
        default:
            return {
                activeLink: [{ linkLable: "Dashboard", linkRedirect: "/" }],
                inactiveLink: { label: formatLabel(pathname.replace("/", "")) }
            };
    }
};

