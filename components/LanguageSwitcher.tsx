// components/LanguageSwitcher.tsx
import { Box, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const router = useRouter();
  const { i18n } = useTranslation();

  const isActive = (locale: any) => {
    return router.locale === locale ? "active" : "";
  };

  const handleChangeLanguage = (language: string) => {
    i18n.changeLanguage(language);
    router.push(router.pathname, router.asPath, { locale: language });
    //router.push(`/${language}`);
  };

  return (
    <Box>
      <Button
        onClick={() => handleChangeLanguage("en")}
        size="sm"
        className={isActive("en")}
      >
        En
      </Button>
      <Button
        onClick={() => handleChangeLanguage("fi")}
        size="sm"
        className={isActive("fi")}
      >
        Fi
      </Button>
    </Box>
  );
};

export default LanguageSwitcher;
