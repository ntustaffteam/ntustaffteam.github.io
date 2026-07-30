# NTU Staff Football Team Website

A simple 3-file website (`index.html`, `style.css`, `script.js`) with a signup
form. No backend, no server, no account signups required.

## How the form works

Clicking **"Open Email to Send"** opens the visitor's own default email app
(Mail, Outlook, Gmail desktop client, etc.) with a new message already
addressed to **ntustaffteam@gmail.com**, subject line, and a plain-text body
pre-filled from what they typed:

```
Name: Jane Doe
Preferred Position: Midfielder
Other Position: Not specified
Contact: jane@example.com
```

They just review and hit send from their own email app — nothing is sent
automatically, so there's nothing to configure or connect.

To change the recipient address, open `script.js` and edit this line:

```js
const TEAM_EMAIL = "ntustaffteam@gmail.com";
```

**Note:** this relies on the visitor having a default email app configured
on their device (common on desktop; on some phones/browsers with no default
mail app set, nothing will open). If that's a concern for your audience, we
can add a fallback like a "copy details to clipboard" button.

## Add your photos

Replace the placeholder boxes in the "Gallery" section of `index.html`
with real `<img>` tags once you send over photos, e.g.:

```html
<img src="photos/team1.jpg" alt="Team photo" class="gallery-img">
```

Create a `photos/` folder next to `index.html` and drop images in there.

## Host the site (pick one, all free)

- **GitHub Pages**: push this folder to a GitHub repo, enable Pages in repo
  settings.
- **Netlify / Vercel**: drag-and-drop this folder into their dashboard.

## Files

- `index.html` — page content and structure
- `style.css` — styling (blue #181C62 / red #D71440 theme)
- `script.js` — builds a mailto: link from the form fields and opens it
