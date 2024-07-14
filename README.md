# llm-chrome-extension
# URL Phishing Checker - Chrome Extension

This project is a Chrome extension that uses AI to check if a URL is a phishing site. It's powered by GPT-3 and built with Python and JavaScript.

## Features

- Check the current URL of the active tab for phishing threats.
- Display the result in a user-friendly popup.

## Installation

1. Clone this repository.
2. Install the required Python packages using pip: `pip install -r requirements.txt`.
3. Set your OpenAI API key in the `.env` file.
4. Load the extension into Chrome.

## Usage

1. Navigate to a website.
2. Click on the extension icon to open the popup.
3. Click the "Check Current URL" button.
4. The result will be displayed in the popup.

## Development

This project uses Python for the backend and JavaScript for the frontend. The backend server communicates with the OpenAI API to check URLs. The frontend is a Chrome extension that interacts with the user and sends requests to the backend.

## Contributing

Contributions are welcome! 

