# AI Overview Remover for AqweBrowser

A simple extension that removes AI-generated overview panels from search results, giving you a cleaner and more traditional search experience.

## Features

* 🚫 Removes AI Overview sections from supported search engines.
* ⚡ Lightweight and fast.
* 🔄 Automatically works when search result pages load.
* 🧩 Easy to install in AqweBrowser.
* 🛠️ Open source and easy to customize.

## Installation

1. Download or clone this repository.
2. Open **AqweBrowser**.
3. Go to the Extensions page.
4. Enable **Developer Mode** (if required).
5. Select **Load Unpacked**.
6. Choose this project's folder.
7. Visit a supported search engine—the extension will automatically remove AI Overview sections.

## How It Works

The extension detects AI Overview elements on supported search result pages and removes or hides them after the page loads. It also watches for dynamically added content to ensure AI Overview panels stay hidden.

## Supported Sites

* Google Search *(AI Overviews)*
* Additional search engines can be added through future updates.

## Project Structure

```text
.
├── manifest.json
├── content.js
├── styles.css
├── icons/
└── README.md
```

## Contributing

Contributions are welcome! Feel free to:

* Report bugs
* Suggest new features
* Improve compatibility
* Submit pull requests

## Disclaimer

This extension is an independent project and is not affiliated with, endorsed by, or sponsored by Google, AqweBrowser, or any other search engine provider. It only modifies the way pages are displayed in your browser.

## License

This project is licensed under the **MIT License**. See the `LICENSE` file for details.
