import Image from "next/image";
import { Language } from "types/Language";

const LANGUAGE_LOGO_MAP: { [x in Language]: string } = {
  Unknown: "/logos/c.svg",
  "All languages": "/logos/c.svg",
  Docker: "/logos/docker.svg",
  Objectivec: "/logos/objective-c.svg",
  Terraform: "/logos/terraform.svg",
  Json: "/logos/json.svg",
  Yaml: "/logos/yaml.svg",
  Typescript: "/logos/typescript.svg",
  Swift: "/logos/swift.svg",
  Solidity: "/logos/solidity.svg",
  Sql: "/logos/sql.svg",
  Shell: "/logos/shell.svg",
  Scala: "/logos/scala.svg",
  React: "/logos/react.svg",
  Pascal: "/logos/pascal.svg",
  Rust: "/logos/rust.svg",
  Ruby: "/logos/ruby.svg",
  Php: "/logos/php.svg",
  Python: "/logos/python.svg",
  Perl: "/logos/perl.svg",
  Kotlin: "/logos/kotlin.svg",
  Javascript: "/logos/javascript.svg",
  Java: "/logos/java.svg",
  Html: "/logos/html.svg",
  Haskell: "/logos/haskell.svg",
  Go: "/logos/go.svg",
  Dart: "/logos/dart.svg",
  Csharp: "/logos/csharp.svg",
  Css: "/logos/css.svg",
  Cpp: "/logos/cpp.svg",
  C: "/logos/c.svg",
  Apex: "/logos/apex.svg",
  Visual: "/logos/visual.svg",
};

type LanguageIconProps = {
  language: Language;
};

const LanguageIcon = ({ language }: LanguageIconProps) => {
  const src = LANGUAGE_LOGO_MAP[language] || "/logos/c.svg";

  return <Image alt={`${language} logo`} width={32} height={32} src={src} />;
};

export default LanguageIcon;
