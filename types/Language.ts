export enum LanguageEnum {
  UNKNOWN = "Unknown",
  DOCKER = "Docker",
  OBJECTIVE_C = "Objectivec",
  TERRAFORM = "Terraform",
  JSON = "Json",
  YAML = "Yaml",
  TYPESCRIPT = "Typescript",
  SWIFT = "Swift",
  SOLIDITY = "Solidity",
  SQL = "Sql",
  SHELL = "Shell",
  SCALA = "Scala",
  REACT = "React",
  PASCAL = "Pascal",
  RUST = "Rust",
  RUBY = "Ruby",
  PHP = "Php",
  PYTHON = "Python",
  PERL = "Perl",
  KOTLIN = "Kotlin",
  JAVASCRIPT = "Javascript",
  JAVA = "Java",
  HTML = "Html",
  HASKELL = "Haskell",
  GO = "Go",
  ART = "Dart",
  CSHARP = "Csharp",
  CSS = "Css",
  CPP = "Cpp",
  C = "C",
  APEX = "Apex",
  VISUAL = "Visual",
  ALL_LANGUAGES = "All languages",
}

export type Language =
  | LanguageEnum.UNKNOWN
  | LanguageEnum.VISUAL
  | LanguageEnum.DOCKER
  | LanguageEnum.OBJECTIVE_C
  | LanguageEnum.TERRAFORM
  | LanguageEnum.JSON
  | LanguageEnum.YAML
  | LanguageEnum.TYPESCRIPT
  | LanguageEnum.SWIFT
  | LanguageEnum.SOLIDITY
  | LanguageEnum.SQL
  | LanguageEnum.SHELL
  | LanguageEnum.SCALA
  | LanguageEnum.RUST
  | LanguageEnum.RUBY
  | LanguageEnum.PHP
  | LanguageEnum.PYTHON
  | LanguageEnum.PERL
  | LanguageEnum.KOTLIN
  | LanguageEnum.JAVASCRIPT
  | LanguageEnum.JAVA
  | LanguageEnum.HTML
  | LanguageEnum.HASKELL
  | LanguageEnum.GO
  | LanguageEnum.ART
  | LanguageEnum.CSHARP
  | LanguageEnum.CSS
  | LanguageEnum.CPP
  | LanguageEnum.PASCAL
  | LanguageEnum.REACT
  | LanguageEnum.C
  | LanguageEnum.APEX
  | LanguageEnum.ALL_LANGUAGES;
