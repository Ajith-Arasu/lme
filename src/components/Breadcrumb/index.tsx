import { Breadcrumbs, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface LinkData {
    linkLable: string;
    linkRedirect: string;
}

interface BreadcrumbProps {
    activeLink: LinkData[];
    inactiveLink: { label?: string };
}

const BreadCrumb = (data: BreadcrumbProps) => {
    const navigate = useNavigate();

    return (
        <Breadcrumbs
            aria-label="breadcrumb"
            sx={{
                '& .MuiBreadcrumbs-li': {
                    paddingRight: '0px',
                    paddingLeft: '0px',
                },
                '& .MuiBreadcrumbs-separator': {
                    fontSize: '12px',
                    marginLeft: '3px',
                    marginRight: '3px',
                },
            }}
        >
            {/* Traversable links */}
            {data.activeLink.map((item, index) => (
                <Typography
                    key={index}
                    onClick={() => navigate(item.linkRedirect)}
                    sx={{
                        fontSize: '12px',
                        fontWeight: 'bold',
                        color: 'var(--text-blue)',
                        cursor: 'pointer',
                        '&:hover': {
                            textDecoration: 'underline',
                        }
                    }}
                >
                    {item.linkLable}
                </Typography>
            ))}

            {/* Current Page */}
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
