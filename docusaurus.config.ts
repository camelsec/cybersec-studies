import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
	title: "CyberSecurity Studies",
	tagline: "crazy individual 2",
	favicon: "img/favicon-green.png",

	// Set the production url of your site here
	url: "https://camelsec.github.com",
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: "/cybersec-studies",

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: "CamelSec", // Usually your GitHub org/user name.
	projectName: "cybersec-studies", // Usually your repo name.

	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",

	// Even if you don't use internationalization, you can use this field to set
	// useful metadata like html lang. For example, if your site is Chinese, you
	// may want to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: "en",
		locales: ["en", "pt"],
	},

	presets: [
		[
			"classic",
			{
				docs: {
					sidebarPath: "./sidebars.ts",
					routeBasePath: "/",
				},
				blog: false,
				theme: {
					customCss: "./src/css/custom.css",
				},
			} satisfies Preset.Options,
		],
	],

	themeConfig: {
		// Replace with your project's social card
		image: "img/docusaurus-social-card.jpg",
		navbar: {
			title: "CamelSec",
			logo: {
				alt: "CamelSec Logo",
				src: "img/favicon-green.png",
			},
			items: [
				{
					type: "docSidebar",
					sidebarId: "studiesSidebar",
					position: "left",
					label: "Studies",
				},
				{
					href: "https://camelsec.com",
					label: "About CamelSec",
					position: "right",
				},
			],
		},
		footer: {
			style: "dark",
			links: [],
			copyright: `Copyright © ${new Date().getFullYear()} CamelSec, Inc. Built with Docusaurus.`,
		},
		prism: {
			theme: prismThemes.github,
			darkTheme: prismThemes.dracula,
		},
	} satisfies Preset.ThemeConfig,
};

export default config;
