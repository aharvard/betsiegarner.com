const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function (eleventyConfig) {
  eleventyConfig.setUseGitIgnore(false);
  eleventyConfig.addPassthroughCopy("./src/static/**/*");
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  
  return {
    dir: {
      input: "src",
      output: "dist"
    }
  }
};
