import os
import sys
import pypdf

pdf_path = r"C:\Users\sayed\.gemini\antigravity\brain\c56a9c70-4a12-4063-8b7e-d5db152fb2af\.tempmediaStorage\8b866fa8c71f715d.pdf"
out_path = r"c:\Users\sayed\Downloads\Kimi_Agent_Clone HBJ Digital Lab\app\scratch\extracted_pdf_text.txt"

reader = pypdf.PdfReader(pdf_path)
print("Total pages:", len(reader.pages))

with open(out_path, "w", encoding="utf-8") as f:
    f.write(f"Total Pages: {len(reader.pages)}\n\n")
    for i, page in enumerate(reader.pages):
        text = page.extract_text()
        f.write(f"=== PAGE {i+1} ===\n")
        f.write(text)
        f.write("\n\n" + "="*50 + "\n\n")

print("Text successfully written to:", out_path)
