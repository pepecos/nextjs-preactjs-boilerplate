import { addDecorator, addParameters, configure } from "@storybook/preact";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { withA11y } from "@storybook/addon-a11y";
import { create } from "@storybook/theming";
import "./index.css";

addDecorator(withA11y);

addParameters({
  options: {
    theme: create({
      base: "light",
      brandTitle: "NextJS",
      // brandUrl: 'https://example.com',
      // brandImage: '',
    }),
  },
});

const req = require.context("../src/components", true, /\.stories\.tsx$/);

function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

addParameters({ viewport: INITIAL_VIEWPORTS, defaultViewport: "medium" });

configure(loadStories, module);
