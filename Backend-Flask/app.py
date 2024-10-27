from flask import Flask, request, jsonify
import os
from openai import OpenAI

token = os.environ["GITHUB_TOKEN"]
endpoint = "https://models.inference.ai.azure.com"
model_name = "gpt-4o"

client = OpenAI(
    base_url=endpoint,
    api_key=token,
)


app = Flask(__name__)

# Load the summarization pipeline
#summarizer = pipeline("summarization", model="facebook/bart-large-cnn")

@app.route('/summarize', methods=['POST'])
def summarize():
    data = request.json
    text = data.get('policy', '').strip()
    
    if not text:
        return jsonify({"error": "Text cannot be empty."}), 400
    
    # Summarize the text
    #summary = summarizer(text, max_length=150, min_length=50, do_sample=False)[0]['summary_text']
    response = client.chat.completions.create(
        messages=[
            {
                "role": "user",
                "content": text,
            }
        ],
        model=model_name,
    )
    print (response.choices[0].message.content)
    return jsonify({"summary": response.choices[0].message.content})