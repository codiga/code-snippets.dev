import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { isLanguage, Language } from "types/Language";
import { isView, View } from "types/Search";

export function getSingleQueryValue(value: string | string[] | undefined) {
  if (!value) return undefined;

  return Array.isArray(value) ? value[0] : value;
}

function getLanguage(value: string | string[] | undefined) {
  const lang = getSingleQueryValue(value);

  return isLanguage(lang) ? lang : null;
}

function getView(value: string | string[] | undefined) {
  const view = getSingleQueryValue(value);

  return isView(view) ? view : "list";
}

export default function useSearchQueryParams() {
  const { query } = useRouter();

  const [term, setTerm] = useState("");
  const [language, setLanguage] = useState<Language | null>(null);
  const [view, setView] = useState<View>("list");

  useEffect(() => {
    setTerm(getSingleQueryValue(query.q) || "");
    setLanguage(getLanguage(query.lang));
    setView(getView(query.view));
  }, [query]);

  return { term, language, view };
}
