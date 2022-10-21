export const data = [
  {
    id: 5,
    tittle: "HTML",
    desc: "HyperText Markup Language is the primary language of the web, containing the content and structure of a website.",
    example: `
<!DOCTYPE html>
<html>
<title>HTML Tutorial</title>
<body>

<h1>This is a heading</h1>
<p>This is a paragraph.</p>

</body>
</html>
    `,
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    id: 1,
    tittle: "DOCTYPE",
    desc: "The required first line of every HTML file for telling the browser what version of html to use. A doctype of html will use the modern HTML5 standard. While a page will usually render properly without a doctype declaration, they should still always be included as some older browsers will not render pages following the modern specification without it (this is sometimes called 'quirks' mode).",
    example: `<!DOCTYPE HTML>`,
    link: "https://developer.mozilla.org/en-US/docs/Glossary/Doctype",
  },
  {
    id: 11,
    tittle: "<head>",
    desc: "The tag containing metadata about the HTML document (i.e. anything that isn't displayed on the page). The <head> of the HTML file should be the first tag within the <html> tag. The <title> is the only required tag within the <head>. This tag gives the page a title, which is used for the name of the tab in most browsers, and it gets used for search results in many search engines.",
    example: ``,
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head",
  },
  {
    id: 3,
    tittle: "favicon",
    desc: "Also called a favorite icon, the icon for a webpage. Browsers usually show these in a variety of places, such as next to the tab name. Favicons are created using the <link> tag. For example:",
    example: `<link rel="icon" href="favicon.png" />`,
    link: "",
  },
  {
    id: 18,
    tittle: "<meta>",
    desc: "An HTML tag for providing extra metadata about a webpage. Most meta tags will use a name and content pair for the type of metadata and its value. These are some of the more common metadata tags:",
    example: `
<!-- Sets the character encoding to utf-8 -->
<meta charset="utf-8" />

<!-- Allows for custom responsive CSS, rather than the default scaling behavior of small devices -->
<meta name="viewport" content="width=device-width, initial-scale=1" />

<!-- Sets the page author -->
<meta name="author" content="Conner Ardman" />

<!-- Sets the page description -->
<meta name="description" content="Ace the frontend interviews!" />
    `,
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta",
  },
  {
    id: 7,
    tittle: "<base>",
    desc: "A tag for setting the document base URL, which will be used for all relative links on the page. For example:",
    example: `
<!-- This line goes in the <head> -->
<base href="https://algoexpert.io" />

<!-- This would go to https://algoexpert.io/frontend -->
<a href="/frontend">FrontendExpert</a>
    `,
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/base",
  },
  {
    id: 8,
    tittle: "<body>",
    desc: "The tag containing the content of the webpage. The <body> of the HTML file should be the second tag within the <html> tag, just below the <head>.",
    example: `
<body>

<h1>This is a heading</h1>
<p>This is a paragraph.</p>

</body>
    `,
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/body",
  },
  {
    id: 2,
    tittle: "Attribute",
    desc: `
     Extra information provided to HTML elements, similar to function parameters.
    Attributes use the syntax EXAMPLE 1.
   
    The attribute name will always come after the tag name, with a space in
    between them. The quoted value will then be separated from the attribute
    name by an equals sign. For example, we can create an input of type
    "checkbox" with EXAMPLE 3. A small number of attributes are
    booleans rather than strings. Any value for a boolean attribute will be
    treated as true, so all of OTHERs EXAMPLE checkboxes would be disabled. 
    `,
    example: `
EXAMPLE 1
<tagname attribute="value">content</tagname>

EXAMPLE 2
<input type="checkbox" />

OTHERs EXAMPLE
<input type="checkbox" disabled="disabled" /> 
<input type="checkbox" disabled="true" />
<input type="checkbox" disabled />

    `,
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes",
  },
  {
    id: 4,
    tittle: "Heading tag",
    desc: "HTML tags represented by <h1> through <h6>. <h1> is the top level heading, while <h2> is a secondary subheading and so on. For example:",
    example: `
<h1>Main Heading</h1>
<h2>Secondary Heading</h2>
<h3>Third Heading</h3>
<h4>Fourth Heading</h4>
<h5>Fifth Heading</h5>
<h6>Sixth Heading</h6>
    `,
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements",
  },
  {
    id: 6,
    tittle: "<a>",
    desc: "The anchor tag, used for linking to other pages. This tag should include an href attribute with the path to the page being linked (absolute or relative). For example:",
    example: `
<a href="https://algoexpert.io">AlgoExpert</a>
    `,
  },
  {
    id: 9,
    tittle: "<br>",
    desc: "The line break tag. This is an empty tag used to create a line break in text, such as for the introduction of an email or new lines in a poem. However, this tag should not be used just for spacing out elements as that can be accomplished with CSS. For example:",
    example: `
<p>
    Dear User, <br />
    We hope you are enjoying FrontendExpert!
</p>
    `,
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/br",
  },
  {
    id: 10,
    tittle: "<form>",
    desc: "An HTML tag for a section of interactive inputs, used for submitting information to the server. Forms usually contain a variety of label-input pairs and a submit button. For example, this is a valid HTML form:",
    example: `
<form>
  <label for="username">Username:</label>
  <input type="text" id="username" />

  <label for="password">Password:</label>
  <input type="password" id="password" />

  <button>Submit</button>
</form>
    `,
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form",
  },
  {
    id: 12,
    tittle: "<hr>",
    desc: "The horizontal rule tag. This is an empty tag used to create a thematic break between content, drawn as a horizontal line by default. For example:",
    example: `
<p>Part 1</p>
<hr />
<p>Part 2</p>
    `,
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/hr",
  },
  {
    id: 13,
    tittle: "<img>",
    desc: `
The image tag. This is an empty tag, and it should always include two primary attributes:

src: The path to the image, either relative or absolute.
alt: Alternative text to be used with screen readers or any time the image cannot be displayed. 
    `,
    example: `
<img src="img/dog.png" alt="dog" />
    `,
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img",
  },
  {
    id: 15,
    tittle: "<ul>",
    desc: "The unordered list tag, used for a list where the order does not matter. By default, most browsers will show this as a bulleted list. The unordered list should contain any number of <li> tags. For example:",
    example: `
ul>
    <li>AlgoExpert</li>
    <li>SystemsExpert</li>
    <li>MLExpert</li>
    <li>FrontendExpert</li>
</ul>
    `,
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul",
  },
  {
    id: 16,
    tittle: "<ol>",
    desc: "The ordered list tag, used for a list where the order matters. By default, most browsers will show this as a numbered list. The ordered list should contain any number of <li> tags. For example:",
    example: `
<ol>
    <li>Step 1</li>
    <li>Step 2</li>
    <li>Step 3</li>
</ol>
    `,
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol",
  },
  {
    id: 14,
    tittle: "<li>",
    desc: "The list item tag, used for individual elements in both unordered and ordered lists. List items can also contain other lists to create nested lists. For example:",
    example: `
<ol>
    <li>Step 1</li>
    <li>
      Step 2:
      <ol>
        <li>Substep 1:</li>
        <li>Substep 2:</li>
      </ol>
    </li>
    <li>Step 3</li>
</ol>
    `,
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li",
  },
  {
    id: 17,
    tittle: "<link>",
    desc: "A self-closing HTML tag for linking to external resources, usually CSS stylesheets. When linking to a stylesheet, <link> will take two attributes:",
    example: `
- rel: The relationship to the other document. 
For CSS files, this should be stylesheet.
- href: The path to the linked file, either relative or absolute.

<link href="/media/examples/link-element-example.css" rel="stylesheet">
    `,
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link",
  },
  {
    id: 19,
    tittle: "<p>",
    desc: "The paragraph tag, usually used for blocks of text (although they can contain other elements that are part of the paragraph, such as images). For example:",
    example: `
<p>Hello World!</p>
    `,
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p",
  },
  {
    id: 20,
    tittle: "<pre>",
    desc: "The preformatted text tag. This tag preserves whitespace, which can be useful when indentation and newlines need to be preserved. For example:",
    example: `
<pre>
    *
   ***
  *****
 *******
*********
   | |
</pre>
    `,
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/pre",
  },
  {
    id: 21,
    tittle: "<script>",
    desc: "The HTML tag for adding JavaScript to the document. Usually the <script> appears in the <head> with no children. Instead of children, it usually has the src attribute set to the path of a JavaScript file. By default, scripts block the browser from continuing to parse and render the rest of the DOM until the script has finished downloading and executing. However, there are two boolean attributes that can change this behavior:",
    example: `

    `,
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script",
  },
  {
    id: 22,
    tittle: "<strong>",
    desc: "The strong tag, usually rendered as bold by default in the browser. For example:",
    example: `
p><strong>Note:</strong> This is important!</p>
    `,
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strong",
  },
  {
    id: 23,
    tittle: "<table>",
    desc: "An HTML tag for representing data with rows and columns. As a general rule, anything that could go in a spreadsheet probably also makes sense in a <table> There are a variety of tags associated with tables, with these being some of the most common:",
    example: `
- <tr>: A single row in the table.

- <th>: A heading in the table. This should be used 
with the scope attribute of either row or col to 
choose what the content is a heading for.

- <td>: A single piece of data in the table, also 
referred to as a cell.

- <thead>: A grouping tag for the heading of a table, 
usually containing a single <tr> with column headings.

- <tbody>: A grouping tag for the body of the table, 
used for containing the primary rows of data.

- <tfoot>: A grouping tag for the footer of the table.

- <caption>: A caption or title for the table.

For example, this is a valid HTML table:

<table>
  <caption>AlgoExpert Products</caption>
  <thead>
    <tr>
      <th scope="col">Product</th>
      <th scope="col">Rating</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">AlgoExpert</th>
      <td>5</td>
    </tr>
    <tr>
      <th scope="row">SystemsExpert</th>
      <td>5</td>
    </tr>
  </tbody>
</table>
    `,
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table",
  },
  {
    id: 24,
    tittle: "<em>",
    desc: "The emphasis tag, usually rendered as italics by default in the browser. For example:",
    example: `
<p>I <em>need</em> to study!</p>
    `,
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/em",
  },

  //   {
  //     id: 24,
  //     tittle: "<>",
  //     desc: "",
  //   },
  //   {
  //     id: 25,
  //     tittle: "<>",
  //     desc: "",
  //   },
  //   {
  //     id: 26,
  //     tittle: "<>",
  //     desc: "",
  //   },
  //   {
  //     id: 27,
  //     tittle: "<>",
  //     desc: "",
  //   },
  //   {
  //     id: 28,
  //     tittle: "<>",
  //     desc: "",
  //   },
  //   {
  //     id: 29,
  //     tittle: "<>",
  //     desc: "",
  //   },
  //   {
  //     id: 30,
  //     tittle: "<>",
  //     desc: "",
  //   },
];
