import pypdf

pdf_path = r"c:\Users\sayed\Downloads\Kimi_Agent_Clone HBJ Digital Lab\app\brochure\brochure_final.pdf"
reader = pypdf.PdfReader(pdf_path)
page_6_text = reader.pages[5].extract_text()
print("--- FULL PAGE 6 TEXT (UTF-8 safe) ---")
print(page_6_text.encode('ascii', errors='replace').decode('ascii'))
print("------------------------")
