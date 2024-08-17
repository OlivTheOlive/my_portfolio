import React from "react";
import Chip from "@mui/material/Chip";
import { styled } from "@mui/material/styles";

interface GreyChipProps {
  label: string;
}

const CustomChip = styled(Chip)(({ theme }) => ({
  backgroundColor: theme.palette.grey[800], // Darker grey
  color: theme.palette.common.white,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(0.2),
  border: `1px solid ${theme.palette.grey[900]}`, // Even darker grey for the border
  "& .MuiChip-label": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    padding: 2,
  },
}));

const SkillChip: React.FC<GreyChipProps> = ({ label }) => {
  return <CustomChip label={label} variant="outlined" size="small" />;
};

export default SkillChip;
