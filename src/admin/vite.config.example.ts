import { mergeConfig, type UserConfig } from "vite";
import { createHtmlPlugin } from "vite-plugin-html";

export default (config: UserConfig) => {
  return mergeConfig(config, {
    plugins: [
      createHtmlPlugin({
        inject: {
          data: {
            injectScript: `<link href="https://fonts.googleapis.com/css2?family=Inter&family=Poppins&family=Lato&family=Montserrat&family=Roboto&display=swap" rel="stylesheet">`,
          },
        },
      }),
    ],
    resolve: {
      alias: {
        "@": "/src",
      },
    },
  });
};
