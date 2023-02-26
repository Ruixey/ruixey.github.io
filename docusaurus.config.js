// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Ruixey Studios",
  tagline: "Performant. Reliable. Simple.",
  url: "https://ruixey.github.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "/img/favicon.ico",
  deploymentBranch: "production",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Ruixey", // Usually your GitHub org/user name.
  projectName: "ruixey.github.io", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    // /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    {
      colorMode: {
        defaultMode: "dark",
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: "",
        logo: {
          alt: "Ruixey Studios Icon",
          src: "img/navbar_logo.png",
        },
        items: [
          {
            type: "doc",
            docId: "about",
            position: "left",
            label: "Docs",
          },
          { to: "/portfolio", label: "Portfolio", position: "left" },
          {
            to: "/discord",
            position: "right",
            className: "navbar-discord-icon",
          },
          {
            type: 'dropdown',
            label: 'Assets',
            position: 'left',
            items: [
              {
                label: 'Tycoon Kit v1',
                to: '/docs/category/RTK1',
              },
            ],
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Documentation",
            items: [
              {
                label: "About",
                to: "/docs/about",
              },
              {
                label: "License",
                to: "/docs/license",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                to: "/discord",
              },
              {
                label: "Roblox",
                to: "https://www.roblox.com/groups/11702703",
              },
              {
                label: "DevForum",
                to: "https://devforum.roblox.com/t/a-very-advanced-kit-for-tycoons-ruixeys-tycoonkit/1850596",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Portfolio",
                to: "/portfolio",
              },
              {
                label: "Roblox Profile",
                to: "https://www.roblox.com/users/1580897793/profile",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Ruixey Studios, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    },
};

module.exports = config;
