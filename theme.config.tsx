import React from "react";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";
import logo from "./src/components/Logo";

const config: DocsThemeConfig = {
  project: { link: "https://github.com/kitamuraDev/javasilver-strategy" },
  docsRepositoryBase: "https://github.com/kitamuraDev/javasilver-strategy",
  logo,

  sidebar: {
    toggleButton: true,
    defaultMenuCollapseLevel: 1,
  },

  editLink: {
    text: "Edit this page on GitHub →",
  },

  footer: {
    text: (
      <p style={{ fontSize: "12px" }}>
        © {new Date().getFullYear()} JavaSilver Strategy
      </p>
    ),
  },

  useNextSeoProps: () => {
    const { route } = useRouter();
    if (route !== "/") {
      return { titleTemplate: "%s - JavaSilver Strategy" };
    }

    return {
      titleTemplate:
        "JavaSilver Strategy - Java Silver 試験対策サンプルコード集",
    };
  },

  head: () => {
    const { asPath } = useRouter();
    const { frontMatter } = useConfig();
    return (
      <>
        <meta name="description" content="JavaSilver Strategy document site" />
        <meta name="og:description" content="JavaSilver Strategy document site" />
        <meta
          name="og:title"
          content={
            frontMatter.title + " - JavaSilver Strategy" ||
            "JavaSilver Strategy"
          }
        />
        <meta
          property="og:title"
          content={
            frontMatter.title + " - JavaSilver Strategy" ||
            "JavaSilver Strategy"
          }
        />
        <meta
          property="og:description"
          content={
            frontMatter.description || "JavaSilver Strategy document site"
          }
        />
        <meta name="og:image" content="/og.jpg" />
        <meta name="apple-mobile-web-app-title" content="JavaSilver Strategy" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link
          rel="icon"
          href="/favicon-dark.svg"
          type="image/svg+xml"
          media="(prefers-color-scheme: dark)"
        />
        <link
          rel="icon"
          href="/favicon-dark.png"
          type="image/png"
          media="(prefers-color-scheme: dark)"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/og.jpg" />
        {/* todo: デプロイ後に対応 */}
        {/* <meta name="twitter:site:domain" content="nextra.site" />
        <meta name="twitter:url" content="https://nextra.site" />
        <meta property="og:url" content={`https://my-app.com${asPath}`} /> */}
      </>
    );
  },
};

export default config;
