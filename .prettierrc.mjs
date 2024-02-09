/** @type {import('prettier').Config} */
export default {
  plugins: [
    import.meta.resolve('prettier-plugin-organize-imports'),
    import.meta.resolve('prettier-plugin-tailwindcss'),
  ],
  singleQuote: true,
  tailwindFunctions: [],
};
