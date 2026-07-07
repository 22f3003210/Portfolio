import pypdf
import os

pdf_path = r"c:\Users\sayed\Downloads\Kimi_Agent_Clone HBJ Digital Lab\app\brochure\case_studies_final.pdf"
out_txt_path = r"c:\Users\sayed\Downloads\Kimi_Agent_Clone HBJ Digital Lab\app\scratch\case_studies_text.txt"

if not os.path.exists(pdf_path):
    print("Error: PDF file does not exist!")
    exit(1)

reader = pypdf.PdfReader(pdf_path)
total_pages = len(reader.pages)
print(f"PDF verified. Total pages: {total_pages}")

with open(out_txt_path, "w", encoding="utf-8") as f:
    f.write(f"Total Pages: {total_pages}\n\n")
    for i, page in enumerate(reader.pages):
        text = page.extract_text()
        f.write(f"=== PAGE {i+1} ===\n")
        f.write(text)
        f.write("\n\n" + "="*50 + "\n\n")

print(f"Extracted text successfully written to: {out_txt_path}")

if total_pages == 10:
    print("SUCCESS: PDF has exactly 10 pages as designed.")
else:
    print(f"WARNING: PDF has {total_pages} pages instead of 10. Check for layout overflow!")
