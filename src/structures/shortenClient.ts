import fetch from "node-fetch";

export default class shortener {
  constructor() {}

  async new(slug: string, redirect_url: string) {
    if (!slug) throw new Error("[CTGS.JS] The slug was not provided");
    if (!redirect_url) throw new Error("[CTGS.JS] The redirect url was not provided");
    const res = await fetch("https://ctgs.ga/api/new", {
      method: "POST",
      body: JSON.stringify({
        url: redirect_url,
        slug,
      }),
    });

    const result = await res.json();
    if (result.error) throw new Error(result.error);
    return `https://ctgs.ga/${result.doc.slug}`;
  }

  async get(slug: string) {
    const res = await fetch(`https://ctgs.ga/api/${slug}`).then((r) => r.json());

    if (res.status === "success") {
      return res.doc.url;
    } else {
      throw new Error("[CTGS.JS] Slug not found! Invalid maybe?");
    }
  }
}
