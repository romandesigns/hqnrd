import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  overrides: [
    {
      files: ["components/ui/particles.tsx"],
      rules: {
        "react-hooks/exhaustive-deps": "off",
      },
    },
    {
      files: ["components/ui/text-animate.tsx"],
      rules: {
        "@typescript-eslint/no-unused-vars": "off",
      },
    },]
];

export default eslintConfig;
