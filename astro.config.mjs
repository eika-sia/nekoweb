import "dotenv/config";
import { defineConfig } from "astro/config";
import nekoweb from "@indiefellas/astro-adapter-nekoweb";

// https://astro.build/config
export default defineConfig({
	site: "https://eika.nekoweb.org",
	adapter: nekoweb({
		apiKey: process.env.NEKOWEB_API,
		domain: "eika.nekoweb.org",
		rssFeed: "/rss.xml",
	}),
});
