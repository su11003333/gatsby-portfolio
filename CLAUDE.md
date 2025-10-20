# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Start development server (port 8000)
gatsby develop

# Production build
gatsby build

# Serve production build locally
gatsby serve

# Clean cached files (.cache & public directories)
gatsby clean
```

**Note**: If you encounter build issues or unexpected behavior, run `gatsby clean` before `gatsby develop`.

## Architecture Overview

This is a Gatsby 5 portfolio site with **bilingual support (English/Chinese)** and a **GraphQL-driven content architecture**. Key architectural decisions:

### Data & Content Layer
- **Content source**: JSON files in `content/works/` and `content/blog/`
- **GraphQL queries**: All page data is fetched via GraphQL (not direct imports)
- **Translation structure**: Each content item has nested `translations.en` and `translations.zh` fields
- **Page generation**: `gatsby-node.js` programmatically creates pages from JSON files using templates

### Internationalization (i18n)
- **Locale management**: `LocaleContext` provides `locale` and `setLocale` across the app
- **Persistence**: User locale preference stored in `localStorage` as `"site-locale"`
- **Fallback pattern**: Always use `translations?.[locale] ?? translations?.en` to handle missing translations
- **Context wrapper**: Both `gatsby-browser.js` and `gatsby-ssr.js` wrap the root with `LocaleProvider`

### Page Generation Flow
1. `gatsby-node.js` queries all `worksJson` and `blogJson` nodes
2. For each node, creates a page using the appropriate template
3. Passes `slug` as context to the template's GraphQL query
4. Templates fetch full data and render using locale-aware components

### Page Structure
- **Collection pages** (`/work/index.js`, `/blog/index.js`): List all items sorted by year/date
- **Detail templates** (`/templates/work.js`, `/templates/post.js`): Render individual items with prev/next navigation
- **Detail components** (`WorkDetail.js`, `PostDetail.js`): Reusable presentation components
- **Homepage** (`/pages/index.js`): Embedded translations object with complete bilingual copy

### Navigation Pattern
Detail pages compute previous/next navigation by:
1. Querying all items sorted by year (works) or date (posts)
2. Finding the current item's index in the sorted array
3. Extracting adjacent items for prev/next links

### Animation System
- **Hook**: `useAnimateOnScroll` uses Intersection Observer to detect when elements enter viewport
- **Trigger**: Elements with `data-animate` attribute get `.is-visible` class when scrolled into view
- **Staggered animations**: Use `style={{ "--delay": "120ms" }}` for sequential reveals
- **CSS-driven**: All animation effects defined in CSS using `.is-visible` class

### Styling
- **Global styles**: Imported via `gatsby-browser.js` and `gatsby-ssr.js`
- **Page-specific CSS**: `home.css`, `collection.css`, `detail.css`
- **No CSS-in-JS or utility framework**: Plain CSS with custom properties for theming

### Netlify CMS Integration
- **CMS entry**: `src/cms/cms.js` initializes Netlify CMS
- **Admin UI**: Accessible at `/admin` route (via `gatsby-plugin-netlify-cms`)
- **Content editing**: Provides UI for editing JSON content files

## Content Management

### Adding a New Work Project
1. Create JSON file in `content/works/{slug}.json` with structure:
```json
{
  "slug": "project-slug",
  "year": 2025,
  "coverImage": "url",
  "heroImage": "url",
  "tools": ["Tool1", "Tool2"],
  "externalLink": "url or null",
  "translations": {
    "en": {
      "title": "Project Title",
      "label": "Category · Year",
      "summary": "Brief summary",
      "role": "Your role",
      "description": "Full description (supports HTML)",
      "highlights": ["Point 1", "Point 2"]
    },
    "zh": { /* Same structure in Chinese */ }
  }
}
```
2. Gatsby will automatically generate the page at `/work/{slug}` on next build

### Adding a New Blog Post
1. Create JSON file in `content/blog/{slug}.json` with structure:
```json
{
  "slug": "post-slug",
  "date": "2025-05-12",
  "heroImage": "url",
  "translations": {
    "en": {
      "title": "Post Title",
      "meta": "Category · Reading time",
      "excerpt": "Brief excerpt",
      "body": "Full content (supports HTML/markdown)",
      "tags": ["Tag1", "Tag2"],
      "readingTime": "6 min"
    },
    "zh": { /* Same structure in Chinese */ }
  }
}
```
2. Gatsby will automatically generate the page at `/blog/{slug}` on next build

## Key Implementation Details

### Data Sorting
- **Works**: Sorted by `year` (descending) in GraphQL: `sort: { fields: [year], order: DESC }`
- **Posts**: Sorted by `date` (descending) in GraphQL: `sort: { fields: [date], order: DESC }`

### Locale-Aware Content Access
Always use this pattern for accessing translated content:
```javascript
const { locale } = useLocale();
const translation = item.translations?.[locale] ?? item.translations?.en;
```

### Homepage Translations
Homepage (`/pages/index.js`) contains a large embedded `translations` object with all copy. This is an exception to the JSON-based content pattern.

### Layout Component
Standard wrapper that includes `Navbar`, main content area, and `Footer`. All pages should be wrapped in `<Layout>`.

## Configuration

### Site Metadata
Located in `gatsby-config.js`:
- Update `siteMetadata` for SEO and manifest
- Icon path: `src/images/icon.png`

### Content Sources
- Works: `content/works/` (transformed by `gatsby-transformer-json`)
- Blog: `content/blog/` (transformed by `gatsby-transformer-json`)
- Images: `src/images/` (processed by `gatsby-plugin-sharp`)
