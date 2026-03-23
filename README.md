
# AI Text Summarizer CLI

## 1. How to Set Up and Run the Tool

### Setup

1. Clone the repository:
git clone <https://github.com/snehi16savula/projectnext>
 cd ai-text-summarizer-cli

3. Install dependencies:
4. npm install

```bash
npm install
```

3. Create a `.env` file:

Create a .env file:

OPENAI_API_KEY=AIzaSyCDpLn7pn5DlerAO3j3f6KVuAxKwytavQY
GEMINI_API_KEY=AIzaSyCDpLn7pn5DlerAO3j3f6KVuAxKwytavQY


5. Ensure `.env` is not committed .

---

### Run the Tool

#### Using a file:

```bash
node index.js simple.txt
```

#### Using stdin:

```bash
echo "MY INPUT" | node index.js
```

---

## 2. Which LLM API You Used and Why

This project uses an LLM API (OpenAI ) to generate structured summaries from unstructured text.

**Why this API:**

* Provides high-quality summarization
* Supports structured prompt-based outputs
* Easy integration with Node.js
* Reliable for extracting key points and sentiment


## 3. Prompt Design (Why It Is Written This Way)

The prompt is designed to enforce a strict structure in the output:

* One-line summary
* Exactly three key points
* One sentiment label (positive / neutral / negative)

Reasoning:

* Ensures consistent output format
* Makes results easy to read and verify
* Prevents unnecessary or verbose responses
* Helps maintain deterministic behavior

---

## 4. What I Would Do Differently or Add With More Time

* Add JSON output format option
* Support batch processing for multiple files
* Add confidence score for model output
* Build a minimal web UI
* Add better validation and logging
* Include unit tests

## 5. Trade-offs / Shortcuts Taken

* Focused on CLI instead of UI to save time
* Minimal error handling 
* No advanced parsing or formatting
* Did not implement batch processing
* Prioritized working solution over feature-rich design

## 6. Example Output

### Input:

```bash
node index.js simple.txt
```

### Output:

Summary:
War refers to large-scale organized conflict between groups.

Key Points:
1. It involves structured violence.
2. It may affect civilians and economies.
3. Total war extends beyond battlefields.

Sentiment:
Neutral
```

### Screenshot:

SCREENSHOT-1:<img width="1258" height="707" alt="Screenshot 2026-03-23 132558" src="https://github.com/user-attachments/assets/d98d565b-6bd1-4acc-a810-c6aff00327c4" />

SCREENSHOT 2:
<img width="1256" height="702" alt="Screenshot 2026-03-23 132612" src="https://github.com/user-attachments/assets/f20eb2e5-8390-4409-bfc2-546c50b6ba43" />


---

## 7. Error Handling

The tool handles the following cases:

* Missing API key:

```
Error: API key is not set in .env
```

* Empty input:

```
Error: Input text is empty
```

* API failure:

```
Error: Failed to fetch response from API
```

---

## 8. Notes{MY VIEWS AND PROCEDURE FOLLOWED

This solution focuses on:

* Clean and minimal implementation
* Clear prompt design
* Effective use of LLM API

The goal is to demonstrate understanding rather than building a production-ready system.


## 9. Project Structure-THE EXACT STRUCTURE I FOLLOWED.

ai-text-summarizer-cli/
│── index.js
│── package.json
│── README.md
│── simple.txt
│── screenshots/
│     └── output.png
│── .env.example
│── .gitignore


##  Setup

```bash
git clone <https://github.com/snehi16savula/projectnext>
cd ai-text-summarizer-cli
npm install
