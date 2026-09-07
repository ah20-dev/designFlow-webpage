/**
 * Site + download config for ah20-dev/designFlow-webpage.
 * Download URLs: https://github.com/{owner}/{repo}/releases/latest/download/{filename}
 */
window.DESIGNFLOW_CONFIG = {
  github: {
    owner: 'ah20-dev',
    repo: 'designFlow-webpage',
  },

  version: '2.1.1',

  downloads: {
    'darwin-arm64': {
      label: 'Mac (Apple Silicon)',
      filename: 'DesignFlow_2.1.1_aarch64.dmg',
      enabled: true,
    },
    'darwin-x64': {
      label: 'Mac (Intel)',
      filename: 'DesignFlow_2.1.1_x64.dmg',
      enabled: true,
    },
    'win-x64': {
      label: 'Windows',
      filename: 'DesignFlow_2.1.1_x64-setup.exe',
      enabled: true,
    },
  },

  video: {
    src: './assets/demo.mp4',
    poster: './assets/demo-poster.jpg',
    caption: 'Building an architecture canvas with AI through MCP',
  },

  screenshots: [
    {
      src: './screenshots/appView.png',
      alt: 'DesignFlow workspace with architecture canvas, PRD editor, and element catalog',
      caption: 'Full workspace — canvas, notes, and element catalog',
    },
    {
      src: './screenshots/layoutView.png',
      alt: 'DesignFlow focused canvas view of a system architecture diagram',
      caption: 'Focused canvas — diagram your stack',
    },
  ],

  legal: {
    productName: 'DesignFlow',
    operatorLabel: 'the operator of DesignFlow',
    effectiveDate: '2026-07-07',
    governingLaw: 'the State of Delaware, United States',
  },
};
