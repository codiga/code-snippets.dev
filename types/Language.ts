// order here is important as is used in the LanguagePicker
export const LANGUAGES = [
  "Javascript", // most used languages first
  "Typescript", // most used languages first
  "Python", // most used languages first
  "Docker",
  "Objectivec",
  "Terraform",
  "Json",
  "Yaml",
  "Swift",
  "Solidity",
  "Sql",
  "Shell",
  "Scala",
  "React",
  "Pascal",
  "Rust",
  "Ruby",
  "Php",
  "Perl",
  "Kotlin",
  "Java",
  "Html",
  "Haskell",
  "Go",
  "Dart",
  "Csharp",
  "Css",
  "Cpp",
  "C",
  "Apex",
  "Visual",
] as const;

export type Language = typeof LANGUAGES[number];

export const LANGUAGES_MAP: {
  [K in Language]: { label: string; value: Language; logo: string };
} = {
  Javascript: {
    label: "JavaScript",
    value: "Javascript",
    logo: "/logos/javascript.svg",
  },
  Typescript: {
    label: "TypeScript",
    value: "Typescript",
    logo: "/logos/typescript.svg",
  },
  Python: {
    label: "Python",
    value: "Python",
    logo: "/logos/python.svg",
  },
  Docker: {
    label: "Docker",
    value: "Docker",
    logo: "/logos/docker.svg",
  },
  Objectivec: {
    label: "Objective-C",
    value: "Objectivec",
    logo: "/logos/objective-c.svg",
  },
  Terraform: {
    label: "Terraform",
    value: "Terraform",
    logo: "/logos/terraform.svg",
  },
  Json: {
    label: "JSON",
    value: "Json",
    logo: "/logos/json.svg",
  },
  Yaml: {
    label: "YAML",
    value: "Yaml",
    logo: "/logos/yaml.svg",
  },
  Swift: {
    label: "Swift",
    value: "Swift",
    logo: "/logos/swift.svg",
  },
  Solidity: {
    label: "Solidity",
    value: "Solidity",
    logo: "/logos/solidity.svg",
  },
  Sql: {
    label: "SQL",
    value: "Sql",
    logo: "/logos/sql.svg",
  },
  Shell: {
    label: "Shell",
    value: "Shell",
    logo: "/logos/shell.svg",
  },
  Scala: {
    label: "Scala",
    value: "Scala",
    logo: "/logos/scala.svg",
  },
  React: {
    label: "React",
    value: "React",
    logo: "/logos/react.svg",
  },
  Pascal: {
    label: "Pascal",
    value: "Pascal",
    logo: "/logos/pascal.svg",
  },
  Rust: {
    label: "Rust",
    value: "Rust",
    logo: "/logos/rust.svg",
  },
  Ruby: {
    label: "Ruby",
    value: "Ruby",
    logo: "/logos/ruby.svg",
  },
  Php: {
    label: "PHP",
    value: "Php",
    logo: "/logos/php.svg",
  },
  Perl: {
    label: "Perl",
    value: "Perl",
    logo: "/logos/perl.svg",
  },
  Kotlin: {
    label: "Kotlin",
    value: "Kotlin",
    logo: "/logos/kotlin.svg",
  },
  Java: {
    label: "Java",
    value: "Java",
    logo: "/logos/java.svg",
  },
  Html: {
    label: "HTML",
    value: "Html",
    logo: "/logos/html.svg",
  },
  Haskell: {
    label: "Haskell",
    value: "Haskell",
    logo: "/logos/haskell.svg",
  },
  Go: {
    label: "Go",
    value: "Go",
    logo: "/logos/go.svg",
  },
  Dart: {
    label: "Dart",
    value: "Dart",
    logo: "/logos/dart.svg",
  },
  Csharp: {
    label: "C#",
    value: "Csharp",
    logo: "/logos/csharp.svg",
  },
  Css: {
    label: "CSS",
    value: "Css",
    logo: "/logos/css.svg",
  },
  Cpp: {
    label: "C++",
    value: "Cpp",
    logo: "/logos/cpp.svg",
  },
  C: {
    label: "C",
    value: "C",
    logo: "/logos/c.svg",
  },
  Apex: {
    label: "Apex",
    value: "Apex",
    logo: "/logos/apex.svg",
  },
  Visual: {
    label: "Visual",
    value: "Visual",
    logo: "/logos/visual.svg",
  },
};

export function isLanguage(lang: string | undefined): lang is Language {
  return LANGUAGES.includes(lang as Language);
}
