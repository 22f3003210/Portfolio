import fitz  # PyMuPDF
import os

pdf_path = r"c:\Users\sayed\Downloads\Kimi_Agent_Clone HBJ Digital Lab\app\brochure\brochure_final.pdf"
out_p1_path = r"c:\Users\sayed\Downloads\Kimi_Agent_Clone HBJ Digital Lab\app\scratch\page_1_preview.png"
out_p6_path = r"c:\Users\sayed\Downloads\Kimi_Agent_Clone HBJ Digital Lab\app\scratch\page_6_preview.png"

if not os.path.exists(pdf_path):
    print("Error: PDF file does not exist!")
    exit(1)

doc = fitz.open(pdf_path)

# Page 1 (0-indexed)
page1 = doc[0]
pix1 = page1.get_pixmap(dpi=150)
pix1.save(out_p1_path)
print("SUCCESS! Rendered Page 1 to:", out_p1_path)

# Page 6 (5-indexed)
page6 = doc[5]
pix6 = page6.get_pixmap(dpi=150)
pix6.save(out_p6_path)
print("SUCCESS! Rendered Page 6 to:", out_p6_path)

doc.close()
