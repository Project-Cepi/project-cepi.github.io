const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Cepi Yard',
  tagline: 'Documentation for anything cepi.',
  url: 'https://project-cepi.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Project-Cepi', // Usually your GitHub org/user name.
  projectName: 'yard', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Cepi Yard',
      logo: {
        alt: 'Cepi Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'tools/tools',
          position: 'left',
          label: 'Tools',
        },
		{
			type: "doc",
			docId: "contributing/intro",
			position: 'left',
			label: "Contributing"
		},
        {
          href: 'https://github.cepi.world',
          label: 'GitHub',
          position: 'right',
        },
		{
			href: "https://discord.cepi.world",
			label: "Discord",
			position: "right"
		}
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tools',
              to: '/docs/tools/tools',
            },
			{
				label: "Contributing",
				to: "/docs/contributing/intro"
			}
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.cepi.world',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.cepi.worlds',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.cepi.world',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Cepi, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
	  additionalLanguages: ['powershell'],
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/Project-Cepi/project-cepi.github.io/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
