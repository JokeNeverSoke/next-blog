import { extendTheme, ThemeConfig } from "@chakra-ui/react";
// 2. Add your color mode config
const config: ThemeConfig = {
  useSystemColorMode: true,
};
// 3. extend the theme
const theme = extendTheme({
  config,
  fonts: {
    body: "Noto Sans SC, system-ui, sans-serif",
    mono: '"Fira Code", Menlo, monospace',
  },
});
export default theme;
