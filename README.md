# Betsie Garner's Pro Site

This site is made with Gatsby and Netlify CMS.

## Updating Content

1. Login in via betsiegarner.com/admin
2. Pick a page (Home, Bio, or CV) to edit
3. Edit and publish

> Publishing pushes to Git. Be sure to pull if working locally on the project after content changes.

## Modifying CMS Fields

1. Edit `config.yml`
2. Run `yarn build` (you'll need to do this after each change)
3. Run `yarn serve`
4. Open http://localhost:9000/admin/ to view changes
5. Make content updates in the CMS and click Publish
6. `git pull` content updates

> If working on different sites with their own Netlifty CMS setup, you'll need to delete local storage for the local host.

> To test content changes, you can publish. Note, this published to Git and wil modify the pages `.md` file. Dont forget to pull.

## Adding or Modifying a Feature

1. Run `yarn develop`
4. Open http://localhost:8000/ to view changes
2. Make changes to `.js` and `.sass` files. Saving edits will display via hot reloading.
