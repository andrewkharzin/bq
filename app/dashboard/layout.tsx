import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";

import Sidebar from './_ui/dashboard/sidebar/sidebar';
import Navbar from './_ui/dashboard/navbar/navbar';
import styles from './_ui/dashboard/dashboard.module.css';

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon-16x16.png",
		apple: "/apple-touch-icon.png",
	},
};

export default function Layout({ children }: { children: React.ReactNode }) {

  return (
			<div className={styles.container}>
				<div className={styles.menu}>
					<Sidebar />
				</div>
				<div className={styles.content}>
					<Navbar />
					{children}
					</div>
			</div>
  );
}