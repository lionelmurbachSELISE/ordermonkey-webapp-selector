/// <reference types="vite/client" />

declare module '*.png' {
  const pngValue: string;
  export default pngValue;
}

declare module '*.svg' {
  const svgValue: string;
  export default svgValue;
} 