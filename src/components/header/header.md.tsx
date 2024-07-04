import * as React from "react";
import { Box, Typography, Button } from "@mui/material";
import Image from "next/image";
import { Images } from "../../../public/images";

interface HeaderMDProps {
  pages: string[];
  goTo: (link: string) => void;
  handleCloseNavMenu: () => void;
}
export const HeaderMD: React.FC<HeaderMDProps> = ({
  pages,
  goTo,
  handleCloseNavMenu,
}) => {
  const resources = { store: "STORE" };

  return (
    <>
      <Box
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          gap: "8px",
        }}
        sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
        onClick={() => goTo("")}
      >
        <Box sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
          <Image src={Images.Head} alt="" width={45} height={45} />
        </Box>
        <Typography
          variant="h6"
          noWrap
          component="a"
          sx={{
            mr: 2,
            display: { xs: "none", md: "flex" },
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".2rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          {resources.store}
        </Typography>
      </Box>
      <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
        {pages.map((page) => (
          <Button
            key={page}
            onClick={() => {
              handleCloseNavMenu();
              goTo(page);
            }}
            sx={{
              my: 2,
              color: "white",
              display: "block",
            }}
          >
            {page}
          </Button>
        ))}
      </Box>
    </>
  );
};
