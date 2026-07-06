/**
 * Site + download config for ah20-dev/designFlow-webpage.
 * Download URLs: https://github.com/{owner}/{repo}/releases/latest/download/{filename}
 */
window.DESIGNFLOW_CONFIG = {
  github: {
    owner: 'ah20-dev',
    repo: 'designFlow-webpage',
  },

  version: '1.0.0',

  downloads: {
    'darwin-arm64': {
      label: 'Mac (Apple Silicon)',
      filename: 'DesignFlow_1.0.0_aarch64-signed.dmg',
      enabled: true,
    },
    'darwin-x64': {
      label: 'Mac (Intel)',
      filename: 'DesignFlow_1.0.0_x64-signed.dmg',
      enabled: true,
    },
    'win-x64': {
      label: 'Windows',
      filename: 'DesignFlow_1.0.0_x64-setup.exe',
      enabled: false,
    },
  },

  screenshots: [
    {
      src: './screenshots/editor.png',
      alt: 'DesignFlow workspace with PRD editor and canvas',
      caption: 'Editor + canvas workspace',
    },
  ],

  legal: {
    productName: 'DesignFlow',
    operatorLabel: 'the operator of DesignFlow',
    effectiveDate: '2026-07-06',
    governingLaw: 'the State of Delaware, United States',
  },
};
