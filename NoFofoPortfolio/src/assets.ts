/** Resolve public assets under the hosting base path, preserving remote image URLs. */
export function assetUrl(path: string): string {
  if (/^(?:https?:|data:|blob:|\/\/)/i.test(path)) return path
  return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`
}
