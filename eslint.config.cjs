// Load Next's shareable config and export its `core-web-vitals` config in flat format
const nextConfig = require('eslint-config-next');
const core = nextConfig && nextConfig.configs && nextConfig.configs['core-web-vitals'];
if (!core) {
	// Fallback: export empty config
	module.exports = [];
} else {
	module.exports = [core];
}

