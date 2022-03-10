export const UNKNOWN_LANGUAGE = "Unknown";
export const ALL_LANGUAGES = "All languages";

// do not change order, affects LanguagePicker
export const LANGUAGES = [
  UNKNOWN_LANGUAGE, // must be first to easly remove it when not needed
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
  ALL_LANGUAGES, // must be first to easly remove it when not needed
] as const;

export type Language = typeof LANGUAGES[number];