import re

file_path = r"c:\Users\sayed\Downloads\Kimi_Agent_Clone HBJ Digital Lab\app\brochure\brochure.html"
out_path = r"c:\Users\sayed\Downloads\Kimi_Agent_Clone HBJ Digital Lab\app\scratch\first_page_output.txt"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

lines = content.split('\n')
with open(out_path, "w", encoding="utf-8") as f_out:
    # Let's extract lines 1335 to 1420
    for i in range(1334, min(1420, len(lines))):
        f_out.write(f"{i+1}: {lines[i]}\n")

print("Output written to:", out_path)
