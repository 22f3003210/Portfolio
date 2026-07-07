import fitz  # PyMuPDF
import os

pdf_path = r"c:\Users\sayed\Downloads\Kimi_Agent_Clone HBJ Digital Lab\app\brochure\brochure_final.pdf"
out_img_path = r"c:\Users\sayed\Downloads\Kimi_Agent_Clone HBJ Digital Lab\app\scratch\page_6_preview.png"

if not os.path.exists(pdf_path):
    print("Error: PDF file does not exist!")
    exit(1)

doc = fitz.open(pdf_path)
page = doc[5]  # Page 6 (0-indexed)
pix = page.get_pixmap(dpi=150)
pix.save(out_img_path)
print("SUCCESS! Rendered Page 6 to:", out_img_path)
doc.close()
