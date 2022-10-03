import { defineConfig } from 'cypress';

export default defineConfig({
  projectId: 'aqqwm5',
  e2e: {
    experimentalSessionAndOrigin: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

