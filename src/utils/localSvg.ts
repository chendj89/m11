const modules = import.meta.glob('../assets/svgs/*.svg', { import: 'default', eager: true })

/**
 * 获取本地svg
 * @param svgName 名称
 * @returns
 */
export default function getLocalSvg(svgName: string) {
  return String(modules[`../assets/svgs/${svgName}.svg`])
}
