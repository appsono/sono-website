import vue from "@vitejs/plugin-vue";
import { readFileSync } from "node:fs";
import { defineConfig } from "vite";

//reads .git directly incase there is no git binary
function commitHash() {
  try {
    const head = readFileSync(".git/HEAD", "utf8").trim();
    if (!head.startsWith("ref: ")) return head;

    const ref = head.slice("ref: ".length);
    try {
      return readFileSync(`.git/${ref}`, "utf8").trim();
    } catch {
      const packed = readFileSync(".git/packed-refs", "utf8");
      return packed
        .split("\n")
        .find((line) => line.endsWith(` ${ref}`))
        .split(" ")[0];
    }
  } catch {
    return "unknown";
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],

  define: {
    __COMMIT__: JSON.stringify(commitHash()),
  },
});
