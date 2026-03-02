# Playground image descriptions (MDX)

Edit the `.mdx` files here to change what appears in the modal when you click an image on the playground. Each file is one description; you can use normal Markdown (paragraphs, **bold**, [links](url), lists, etc.).

**Adding a new image and description:**

1. Add the image to `PLAYGROUND_IMAGES` in `app/playground/page.js` with a `slug` (e.g. `slug: "my-experiment"`).
2. Create `my-experiment.mdx` in this folder with your description.
3. In `index.js`, add: `import MyExperiment from "./my-experiment.mdx";` and add `"my-experiment": MyExperiment` to the `playgroundDescriptions` object.
