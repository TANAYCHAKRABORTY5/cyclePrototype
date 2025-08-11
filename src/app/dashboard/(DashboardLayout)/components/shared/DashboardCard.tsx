import React, { ReactNode } from "react";
import { Card, CardContent, Typography, Stack, Box } from "@mui/material";

interface DashboardCardProps {
  title?: string;
  subtitle?: string;
  action?: ReactNode;
  footer?: ReactNode;
  cardheading?: boolean; // This was previously string | ReactNode but you seem to use it as a flag
  headtitle?: string | ReactNode;
  headsubtitle?: string | ReactNode;
  children?: ReactNode;
  middlecontent?: string | ReactNode;
}

const DashboardCard: React.FC<DashboardCardProps> = ({
  title,
  subtitle,
  children,
  action,
  footer,
  cardheading,
  headtitle,
  headsubtitle,
  middlecontent,
}) => {
  return (
    <Card sx={{ padding: 0 }} elevation={9}>
      {cardheading ? (
        <CardContent>
          {headtitle && <Typography variant="h5">{headtitle}</Typography>}
          {headsubtitle && (
            <Typography variant="subtitle2" color="textSecondary">
              {headsubtitle}
            </Typography>
          )}
        </CardContent>
      ) : (
        <CardContent sx={{ p: "30px" }}>
          {title && (
            <Stack
              direction="row"
              spacing={2}
              justifyContent="space-between"
              alignItems="center"
              mb={3}
            >
              <Box>
                <Typography variant="h5">{title}</Typography>
                {subtitle && (
                  <Typography variant="subtitle2" color="textSecondary">
                    {subtitle}
                  </Typography>
                )}
              </Box>
              {action}
            </Stack>
          )}
          {children}
        </CardContent>
      )}

      {middlecontent}
      {footer}
    </Card>
  );
};

export default DashboardCard;
