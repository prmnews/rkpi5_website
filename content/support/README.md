# Support Documentation

This directory contains MDX documentation files for the RKPi5 support wiki.

## Structure

```
content/support/
├── quick-start.mdx            - Quick start guide
├── first-time-setup.mdx       - Detailed first-time setup
├── system-requirements.mdx    - System requirements and specs
├── connection-issues.mdx      - WiFi and connectivity troubleshooting
├── battery-problems.mdx       - Battery and power troubleshooting
├── content-not-loading.mdx    - Content access troubleshooting
├── faqs.mdx                   - General frequently asked questions
├── technical-faqs.mdx         - Technical FAQs for advanced users
└── pricing-faqs.mdx           - Pricing and ordering FAQs
```

## Adding New Documentation

To add a new documentation page:

1. Create a new `.mdx` file in this directory
2. Use the existing files as templates
3. The file will automatically be available at `/support/[filename]`
4. Add a link to the new page in `/src/app/(public)/support/page.tsx`

## MDX Features

All MDX files support:

### Custom Components

- `<Callout>` - Info, warning, error, success callouts
- `<CodeBlock>` - Code blocks with optional titles

### Styling

The prose plugin provides automatic styling for:
- Headings (h1-h6)
- Paragraphs
- Links
- Lists (ordered and unordered)
- Tables
- Code blocks
- Blockquotes
- Horizontal rules

### Example Usage

```mdx
# Page Title

Regular markdown content here.

<Callout type="info" title="Note">
This is an informational callout.
</Callout>

<Callout type="warning">
This is a warning without a title.
</Callout>

<CodeBlock title="config.js" language="javascript">
const config = { foo: 'bar' };
</CodeBlock>

## Section with table

| Column 1 | Column 2 |
|----------|----------|
| Data 1   | Data 2   |
```

## Beta Documentation Notice

All current files are placeholder content marked with:

```mdx
<Callout type="info" title="Beta Documentation">
Content will be added during beta testing.
</Callout>
```

These placeholders should be replaced with real content during the beta program based on:
- Beta tester feedback
- Common support questions
- Real-world usage scenarios
- Technical issues encountered

## File Naming Convention

- Use kebab-case for filenames (e.g., `first-time-setup.mdx`)
- Keep filenames short and descriptive
- Avoid special characters except hyphens
- The filename becomes the URL slug

## Metadata

Each MDX page automatically generates:
- **Title**: Derived from filename (e.g., "first-time-setup" → "First Time Setup")
- **Description**: Generic description with page title
- **URL**: `/support/[filename]`

To customize metadata, update the `generateMetadata` function in:
`/src/app/(public)/support/[slug]/page.tsx`

## Testing

Before committing new documentation:

1. Build the site: `npm run build`
2. Check for MDX syntax errors
3. Verify links work correctly
4. Test on mobile and desktop
5. Ensure images load (if any)

## Style Guide

### Headings

- Use H1 (#) for page title only
- Use H2 (##) for main sections
- Use H3 (###) for subsections
- Use H4 (####) for minor sections

### Links

- Use absolute paths for internal links: `/support/other-page`
- Use full URLs for external links
- Add descriptive link text (avoid "click here")

### Code

- Use inline code for commands, file paths, and short snippets
- Use code blocks for multi-line code
- Always specify language for syntax highlighting

### Lists

- Use bullet points for unordered content
- Use numbered lists for sequential steps
- Keep list items concise

### Callouts

- **Info** (blue): General information, tips
- **Warning** (yellow): Cautions, potential issues
- **Error** (red): Critical warnings, errors
- **Success** (green): Confirmations, best practices

## Maintenance

Documentation should be reviewed and updated:

- After major feature releases
- When common support questions arise
- When technical specs change
- Based on user feedback

---

*Documentation system implemented in Epic 7, Story 7.1*

