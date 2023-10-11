// components/LanguageSwitcher.tsx
import { Box, Button, background } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import Home from "../styles/Home.module.css";

const LanguageSwitcher = () => {
  const router = useRouter();
  const { i18n } = useTranslation();

  const [active, setActive] = useState("");

  const isActive = (locale: any) => {
    return router.locale === locale ? "active" : "";
  };

  const handleChangeLanguage = (language: string) => {
    i18n.changeLanguage(language);
    router.push(router.pathname, router.asPath, { locale: language });
    //router.push(`/${language}`);
    setActive(language);
  };

  return (
    <Box>
      <Button
        onClick={() => handleChangeLanguage("en")}
        size="sm"
        className={active === "en" ? `${Home.active}` : ""}
      >
        En
      </Button>
      <Button
        onClick={() => handleChangeLanguage("fi")}
        size="sm"
        className={active === "fi" ? `${Home.active}` : ""}
      >
        Fi
      </Button>
    </Box>
  );
};

export default LanguageSwitcher;
