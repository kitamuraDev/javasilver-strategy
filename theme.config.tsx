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
    return (
      <>
        {/* Primary Meta Tags */}
        <meta name="title" content="JavaSilver Strategy - Java Silver 試験対策サンプルコード集" />
        <meta name="description" content="JavaSilver Strategy は Java言語の認定資格試験である Java Silver の試験対策サンプルコード集です" />

        {/* Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://javasilver-strategy.vercel.app/" />
        <meta property="og:title" content="JavaSilver Strategy - Java Silver 試験対策サンプルコード集" />
        <meta property="og:description" content="JavaSilver Strategy は Java言語の認定資格試験である Java Silver の試験対策サンプルコード集です" />
        <meta property="og:image" content="/og.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://javasilver-strategy.vercel.app/" />
        <meta property="twitter:title" content="JavaSilver Strategy - Java Silver 試験対策サンプルコード集" />
        <meta property="twitter:description" content="JavaSilver Strategy は Java言語の認定資格試験である Java Silver の試験対策サンプルコード集です" />
        <meta property="twitter:image" content="/og.jpg" />

        {/* favicon */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="icon" href="/favicon-dark.svg" type="image/svg+xml" media="(prefers-color-scheme: dark)" />
        <link rel="icon" href="/favicon-dark.png" type="image/png" media="(prefers-color-scheme: dark)" />
      </>
    );
  },
};

export default config;
