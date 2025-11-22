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
        <Breadcrumbs aria-label="breadcrumb">
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