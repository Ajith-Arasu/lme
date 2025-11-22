import { Breadcrumbs, Link, Typography } from "@mui/material";

interface LinkData {
    linkLable: string;
    linkRedirect: string;
}

interface BreadcrumbProps {
    activeLink: LinkData[];
    inactiveLink: { label: string };
}

const BreadCrumb = (data: BreadcrumbProps) => {
    return (
        <Breadcrumbs 
            aria-label="breadcrumb"
            sx={{
                // Target the list items (li) which contain the links and separators
                '& .MuiBreadcrumbs-li': {
                    // Reduce the default horizontal margin applied by MUI
                    paddingRight: '0px', 
                    paddingLeft: '0px', 
                },
                // Target the separator (/) element
                '& .MuiBreadcrumbs-separator': {
                     fontSize: '12px',
                    // Reduce the space around the separator
                    marginLeft: '3px', 
                    marginRight: '3px',
                },
            }}
        >
            {/* Traversable Links (Active/Clickable Links) */}
            {data.activeLink.map((item, index) => (
                <Link
                    key={index}
                    underline="hover"
                    color="inherit"
                    href={item.linkRedirect}
                    sx={{
                        fontSize: '12px',
                        fontWeight: 'bold',
                        color: ' var(--text-blue)',
                    }}
                >
                    {item.linkLable}
                </Link>
            ))}

            {/* Current Page (Inactive/Non-clickable Link) */}
            <Typography
                sx={{
                    fontSize: '12px',
                    fontWeight: 'bold',
                }}
            >
                {data.inactiveLink.label}
            </Typography>
        </Breadcrumbs>
    );
}

export default BreadCrumb;