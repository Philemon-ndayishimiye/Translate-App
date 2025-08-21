// Make sure this file is in the root of your `src` or project folder
// so TypeScript picks it up automatically.

interface Window {
  myCustomGlobalVar: string;
}

declare module "*.svg" {
  const content: any;
  export default content;
}
