import React from "react";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";

const config: DocsThemeConfig = {
  project: {
    link: "https://github.com/kitamuraDev/javasilver-strategy",
    // todo: icon追加
  },
  docsRepositoryBase: "https://github.com/kitamuraDev/javasilver-strategy",

  useNextSeoProps: () => {
    const { route } = useRouter();
    if (route !== "/") {
      return { titleTemplate: "%s - JavaSilver Strategy" };
    }

    return {
      titleTemplate: "JavaSilver Strategy - Java Silver 試験対策サンプルコード集",
    };
  },

  // todo: icon追加
  logo: <h1 style={{ fontWeight: "bold" }}>JavaSilver Strategy</h1>,

  // todo: 適宜カスタマイズ
  sidebar: {
    toggleButton: true,
    defaultMenuCollapseLevel: 1
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

  head: () => {
    const { asPath } = useRouter();
    const { frontMatter } = useConfig();
    return (
      <>
        {/* todo: url書き換える */}
        <meta property="og:url" content={`https://my-app.com${asPath}`} />
        <meta
          property="og:title"
          content={ frontMatter.title + " - JavaSilver Strategy" || "JavaSilver Strategy" }
        />
        <meta
          property="og:description"
          content={ frontMatter.description || "JavaSilver Strategy document site" }
        />
      </>
    );
  },
};

export default config;
