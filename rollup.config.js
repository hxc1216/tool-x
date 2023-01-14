import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";
import { uglify } from "rollup-plugin-uglify";
import json from "@rollup/plugin-json";

const paths = {
  input: {
    root: "src/index.js",
  },
  output: {
    root: "lib/",
  },
};

const fileName = `drrq.js`;

export default {
  input: `${paths.input.root}`, // 要打包的文件
  output: {
    file: `${paths.output.root}${fileName}`, // 输出的文件
    format: "esm", // 输出的文件类型
    name: "tool-x",
  },
  plugins: [
    json(),
    resolve(),
    commonjs(),
    babel({
      exclude: "/node_modules/**",
      runtimeHelpers: true,
    }),
    uglify(),
  ],
};
