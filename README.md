# Transnetrix website

Built with Astro. Hosted free on Cloudflare Pages at transnetrix.com.pk.

## Where to edit things

| What | File |
|---|---|
| Email, phones, office, SECP and NTN, social links, form key | `src/data/site.ts` |
| Practice pages (Marcom, EdTech, FinTech, IT Solutions) | `src/content/practices/*.md` |
| Case studies | `src/content/work/*.md` |
| Experience table, partners, values, advisory | `src/data/company.ts` |
| Home page text | `src/pages/index.astro` |
| About page text | `src/pages/about.astro` |
| Colours and styles | `src/styles/global.css` |
| Images and the company profile PDF | `public/images/` and `public/docs/` |

To edit on GitHub: open the file, click the pencil icon, change the text, click **Commit changes**. Cloudflare rebuilds the site in about a minute.

Keep the layout of the `---` blocks at the top of `.md` files exactly as it is. Change only the text after each colon.

## One time setup

1. **GitHub:** create a new repository called `transnetrix-site` (private is fine). Click **uploading an existing file**, drag in everything from this folder, and commit.
2. **Cloudflare:** Workers & Pages, Create, Pages, Connect to Git. Pick the repository.
   * Framework preset: **Astro**
   * Build command: `npm run build`
   * Build output directory: `dist`
   * Environment variable: `NODE_VERSION` = `22`
3. **Custom domain:** in the Pages project, Custom domains, add `transnetrix.com.pk`, then add `www.transnetrix.com.pk`.
4. **Contact form:** get a free access key at web3forms.com with transnetrix@gmail.com, paste it into `web3formsKey` in `src/data/site.ts`, and commit.

## Running it on a computer (optional)

```
npm install
npm run dev
```
