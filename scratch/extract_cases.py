import re
import json

file_path = r"c:\Users\sayed\Downloads\Kimi_Agent_Clone HBJ Digital Lab\app\src\sections\case-studies\ArticleGrid.tsx"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Let's extract the array of case studies/articles.
# Since it's typescript, we can search for blocks that look like objects with playbookTitle.
# Or let's print all lines containing "playbookTitle", "title", "subtitle", "category", etc.
lines = content.split('\n')
for idx, line in enumerate(lines):
    if "playbookTitle:" in line or "title:" in line or "category:" in line or "tagline:" in line:
        print(f"L{idx+1}: {line.strip()}")
