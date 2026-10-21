# amkosman.xyz

Portfolio website of composer and vocalist Adele Marcia Kosman, live at
[amkosman.xyz](https://amkosman.xyz).

The site is a small single-page React app built with
[Create React App](https://create-react-app.dev/). It is compiled to plain
static files (HTML, CSS, JS, images) and those files are uploaded to one.com
web hosting. There is no server-side code.

## Where to edit content

| Page | File | What's in it |
|---|---|---|
| Menu | `src/pages/Menu.js` | Menu links |
| About | `src/pages/About.js` | Intro, bio and credits |
| Works | `src/pages/Works.js` | Selected works, by year (`WORKS` list at the bottom) |
| Discography | `src/pages/Discography.js` | Releases with Bandcamp players |
| Installations | `src/pages/Installations.js` | Installations, by year (`INSTALLATION` list) |
| Multichannel | `src/pages/Sounds.js` | Multichannel pieces, by year (`SOUNDS` list) |
| Contact | `src/pages/Contact.js` | Instagram and email |

- Styling: `src/styles/App.css`
- Images: `src/img/` (background collage, plus a separate mobile background)
- Routes (which URL shows which page): `src/App.js`

## Run locally

Requires [Node.js](https://nodejs.org/) (version 20 or newer).

```sh
npm install --legacy-peer-deps
npm start
```

Opens the site at http://localhost:3000 and reloads when you save a file.

`--legacy-peer-deps` is needed because of an old dependency conflict in
`package.json`.

## Build

```sh
npm run build
```

Creates the finished website in `build/`. Those are the files that go on the
web host. `public/.htaccess` is included so links like `/about` work on the
server.

## Deployment

Every push to `master` builds the site and uploads `build/` to one.com over
SFTP (`.github/workflows/deploy.yml`). To deploy by hand, open the
[Deploy workflow](https://github.com/adler-kosma/amkosman_xyz/actions/workflows/deploy.yml)
and click **Run workflow**. Files on the server are never deleted, only added
or overwritten.

Required repository secrets (Settings → Secrets and variables → Actions),
found in the one.com Control Panel under SSH & SFTP:

- `SFTP_HOST` – one.com SFTP host
- `SFTP_USER` – SFTP username
- `SFTP_PASSWORD` – SFTP password
- `SFTP_REMOTE_DIR` – optional, folder that holds the website (defaults to `/www`)

## Credits

Design: Joakim Aronsson · Code: Adele Kosman · Photo: Yi-Chen Lee
