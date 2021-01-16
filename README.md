# Panelbear Vuepress Plugin

The Vuepress Plugin for [Panelbear Analytics](https://panelbear.com).

## Quickstart

### Install

Run the following command to install in your project:

```
npm install --dev @panelbear/vuepress-plugin-panelbear
```

Or with yarn:

```
yarn add --dev @panelbear/vuepress-plugin-panelbear
```

### Usage

You can now add the Panelbear plugin to your project's site or theme config file (`.vuepress/config.js`). Simply include Panelbear in the plugins section:

```javascript
module.exports = {
  plugins: [
    [
      '@panelbear/vuepress-plugin-panelbear',
      {
        site: '', // Your Site ID
        debug: false, // Enable if you wish to send events from localhost / log to console
      },
    ],
  ],
  // Other Vuepress config
};
```

## Options

### site

The Site ID of your Panelbear website.

- Required: true
- Type: `string`
- Default: `undefined`

### debug

Enable debug mode on your Panelbear installation.

- Required: false
- Type: `bool`
- Default: `undefined`

## Changelog

### 1.0.0

- Initial open source release.

## Security Disclosure

If you discover any issue regarding security, please disclose the information responsibly by following the instructions [here](https://panelbear.com/security/). Do NOT create a Issue on the GitHub repo.

## Contributing

Please check for any existing issues before openning a new Issue. If you'd like to work on something, please open a new Issue describing what you'd like to do before submitting a Pull Request.

## License

See [LICENSE](https://github.com/panelbearhq/vuepress-plugin-panelbear/blob/master/LICENSE).
