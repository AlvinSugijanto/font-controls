# Publishing to npm

## Prerequisites

Before publishing, make sure you have:

- An npm account (create one at https://www.npmjs.com/signup)
- npm CLI installed and logged in

## Steps to Publish

### 1. Update package.json

Update the following fields in `package.json`:

```json
{
  "name": "font-controls", // Change if name is taken
  "version": "1.0.0",
  "author": "Your Name <your.email@example.com>",
  "repository": {
    "type": "git",
    "url": "https://github.com/yourusername/font-controls"
  }
}
```

### 2. Check Package Name Availability

```bash
npm search font-controls
```

If the name is taken, choose a different name like:

- `@yourname/font-controls`
- `react-font-controls`
- `font-controls-react`

### 3. Build the Library

```bash
npm run build
```

This will create the `dist` folder with all necessary files.

### 4. Test the Package Locally

```bash
# In the font-controls directory
npm pack

# This creates a .tgz file you can test in another project
# In another project:
npm install /path/to/font-controls-1.0.0.tgz
```

### 5. Login to npm

```bash
npm login
```

Enter your username, password, and email.

### 6. Publish

```bash
npm publish
```

For scoped packages (e.g., `@yourname/font-controls`):

```bash
npm publish --access public
```

### 7. Verify Publication

Visit: `https://www.npmjs.com/package/font-controls`

## Post-Publishing

### Create Git Repository

```bash
git init
git add .
git commit -m "Initial commit: font-controls library v1.0.0"
git branch -M main
git remote add origin https://github.com/yourusername/font-controls.git
git push -u origin main
```

### Add Badges to README

Update README.md with:

```markdown
![npm version](https://img.shields.io/npm/v/font-controls)
![npm downloads](https://img.shields.io/npm/dm/font-controls)
![license](https://img.shields.io/npm/l/font-controls)
```

### Create GitHub Release

1. Go to your GitHub repository
2. Click "Releases" → "Create a new release"
3. Tag version: `v1.0.0`
4. Release title: `v1.0.0 - Initial Release`
5. Add release notes

## Updating the Package

When you make changes:

1. Update version in `package.json`:
   - Patch: `1.0.1` (bug fixes)
   - Minor: `1.1.0` (new features, backward compatible)
   - Major: `2.0.0` (breaking changes)

2. Build and publish:
   ```bash
   npm run build
   npm publish
   ```

## Troubleshooting

### "Package name already exists"

- Choose a different name or use a scoped package (`@yourname/font-controls`)

### "You must verify your email"

- Check your email and verify your npm account

### "You do not have permission to publish"

- Make sure you're logged in with the correct account
- Check if the package name is already taken by someone else

## Optional: Setup CI/CD

Add GitHub Actions for automatic publishing:

Create `.github/workflows/publish.yml`:

```yaml
name: Publish to npm

on:
  release:
    types: [created]

jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: "18"
          registry-url: "https://registry.npmjs.org"
      - run: npm install
      - run: npm run build
      - run: npm publish
        env:
          NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
```

Add your npm token to GitHub Secrets as `NPM_TOKEN`.
