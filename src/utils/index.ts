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
                inactiveLink: {}
            };
        case "/exam-event":
            return {
                activeLink: [{ linkLable: "Exam Events", linkRedirect: "/exam-events" }],
                inactiveLink: { label: "Event" }
            };
        case "/answer-page":
            return {
                activeLink: [{ linkLable: "Exam Events", linkRedirect: "/exam-events" }, { linkLable: "Event", linkRedirect: "/exam-event" }],
                inactiveLink: { label: "Exam Answer" }
            };
        default:
            return {
                activeLink: [{ linkLable: "Exam Events", linkRedirect: "/exam-events" }],
                inactiveLink: { label: formatLabel(pathname.replace("/", "")) }
            };
    }
};

