import { gql } from "@apollo/client";

export const GET_SEMANTIC_PUBLIC_RECIPES = gql`
  query getPublicRecipes(
    $howmany: Long!
    $skip: Long!
    $languages: [LanguageEnumeration!]
    $term: String
    $onlyPublic: Boolean
  ) {
    assistantRecipesSemanticSearch(
      howmany: $howmany
      skip: $skip
      languages: $languages
      term: $term
      onlyPublic: $onlyPublic
    ) {
      id
      name
      tags
      uses
      language
    }
  }
`;

export const GET_PUBLIC_RECIPE_BY_ID = gql`
  query assistantPublicRecipe(
    $id: Long!
    $howmanycomments: Long!
    $skipcomments: Long!
  ) {
    assistantPublicRecipe(id: $id) {
      id
      name
      description
      keywords
      tags
      presentableFormat
      imports
      language
      uses
      averageRating
      comments(howmany: $howmanycomments, skip: $skipcomments) {
        id
        creationTimestampMs
        rating
        comment
        author {
          id
          username
          info {
            firstname
            lastname
            url
          }
        }
      }
      commentsCount
    }
  }
`;
