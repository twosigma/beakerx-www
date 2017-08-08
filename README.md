# two-sigma-open-source

## Instalation

This site is rendered by [Jekyll](https://jekyllrb.com), so you will need some dependencies to run it.

```bash
bundle install
```

Once all dependencies are properly installed, run Jekyll.

```bash
bundle exec jekyll serve
```

 This will render the site at http://127.0.0.1:4000

 ## Development
 ### Adding data
 Text, images, icons and links are defined in yaml files in the **_data** directory.
 Each yaml file represents a region of the site.

 #### To insert an image or icon
 - SVG files are located in the **_includes/_icons** directory.
 - Rasterized images are located in the **static/img** directory.
 - After adding or removing an image or icon file, register where they belong on the page using the yaml files in the **_data** directory.
 - Rebuild the code by running Jekyll.

 ### Styling the site
 - While running the Jekyll server, edit the scss files in the **_sass** directory.
 - :warning: Do not write changes directly on css files. They will be overwritten by the content in the scss files.

 ### Changing the site's layout
 - The template files of each region are in the includes directory.
 - Jekyll uses [Liquid](https://shopify.github.io/liquid) as its templating language.

## Adding data to subpages

- Subpages live in the **_projects** directory, each project containing a subdirectory with the project's name.
- The subdirectory must contain an **index.md** page as the landing page for the project.
- The data is written in the [kramdown](https://kramdown.gettalong.org/) flavor or markdown.
- The files must include front matter to be rendered.

### Required page front matter

```yaml
---
project: project-name
title: page-title
layout: page
order: 1
---
```
#### project
The name's project will group all files belonging to the same project in the navigation bar. It will also populate the header with the project's data located in **_data/projects.yaml**

#### title
This is the name of the page, as it will display on the navigation bar.

#### layout
The "page" layout is the only one currently available for subpages. The page order will determine the sub-layout.

#### order
The page order in the navigation bar. "Order: 1" is reserved for the landing page and has an unique layout.

### Project header data

#### title
Name of project. Must match with the name on the project's markdown page's front matter. It's case sensitive. This entry is not optional.

#### text
The project's description.

#### github
Parameters github.user and github.project must match a github repository to display its stars and forks.

#### icon
Name of project's icon svg file, found in **_includes/_icons**.

#### twitter
The twitter handle associated with the project.

#### header
Short information and instructions on the header's sidebar. It's divided in sections.

##### Structure of header data area

```yaml
header:
  - section:
      title: section title
      icon: section-icon.svg
      content: > #
        section content text
```

###### title
Title of section.

###### icon
Name of icon file to be on the left of the title.

###### content
An area that allows some markdown to indicate hyperlinks, buttons or a line of code.

## File Tree

```
.
├── _config.yml
├── _data
|   ├── contributions.yaml
|   ├── cta.yaml
|   └── ...
├── _includes
|   ├── _home
|   |   ├─ contributions.html
|   |   └─ ...
|   ├── _icons
|   |   ├─ icon-camera.svg
|   |   ├─ icon-cart.svg
|   |   └─ ...
|   ├── _pages
|   |   └─ ...
|   ├── footer.html
|   └── header.html
├── _layouts
|   ├── home.html
|   └── page.html
├── _plugins
|   └── ...
├── _projects
|   ├── project-name
|   |   ├─ documentation.md
|   |   ├─ faq.md
|   |   └─ index.md
|   └── ...
├── _sass
|   ├── base
|   |   ├─ __base.scss
|   |   └─ ...
|   ├── includes
|   |   ├─ __includes.scss
|   |   └─ ...
|   └── vendor
|       └─ ...
├── _site
├── static
|   ├── css
|   ├── img
|   |   ├─ favicon.ico
|   |   ├─ stats-1.png
|   |   └─ ...
|   └── js
├── _config.yml
├── Gemfile
├── Gemfile.lock
└── index.html
```
