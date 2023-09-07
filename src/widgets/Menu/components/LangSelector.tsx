import React from "react";
import Text from "../../../components/Text/Text";
import {LangDropdown} from "../../../components/Dropdown/Dropdown";
import Button from "../../../components/Button/Button";
import LanguageIcon from "../../../components/Svg/Icons/Language";
import { Language } from "../types";
import {LangMenuButton} from "./MenuButton";

interface Props {
  currentLang: string;
  langs: Language[];
  setLang: (lang: Language) => void;
}

const LangSelector: React.FC<Props> = ({ currentLang, langs, setLang }) => (
  <LangDropdown
    position="top-right"
    target={
      <Button variant="text" startIcon={<LanguageIcon color="#fff" width="24px" />}>
        <Text color="#fff">{currentLang?.toUpperCase()}</Text>
      </Button>
    }
  >
    {langs.map((lang) => (
      <LangMenuButton
        key={lang.locale}
        fullWidth
        onClick={() => setLang(lang)}
        // Safari fix
        style={{ minHeight: "32px", height: "auto" }}
      >
        {lang.language}
      </LangMenuButton>
    ))}
  </LangDropdown>
);

export default React.memo(LangSelector, (prev, next) => prev.currentLang === next.currentLang);
