export function decodeIndent(code: string | undefined) {
  if (!code) return "";

  const decodeFromBase64 = Buffer.from(code, "base64").toString("ascii");

  return decodeFromBase64.replace(/&\[CODIGA_INDENT\]/g, "  ");
}
