import Image from "next/image";
import { Language, LANGUAGES_MAP } from "types/Language";

type LanguageIconProps = {
  language: Language;
};

const LanguageIcon = ({ language }: LanguageIconProps) => {
  const src = LANGUAGES_MAP[language].logo;

  return <Image alt={`${language} logo`} width={32} height={32} src={src} />;
};

export default LanguageIcon;
