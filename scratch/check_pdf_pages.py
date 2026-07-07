import re

pdf_path = r"c:\Users\sayed\Downloads\Kimi_Agent_Clone HBJ Digital Lab\app\brochure\brochure_final.pdf"

with open(pdf_path, 'rb') as f:
    content = f.read()

# Look for /Count in the PDF content
counts = re.findall(rb'/Count\s+(\d+)', content)
if counts:
    # The last or largest count is usually the total page count
    page_counts = [int(c) for c in counts]
    print("Page counts found in PDF:", page_counts)
    print("Estimated total pages:", max(page_counts))
else:
    # Try pypdf or PyPDF2
    try:
        import PyPDF2
        with open(pdf_path, 'rb') as f:
            reader = PyPDF2.PdfReader(f)
            print("PyPDF2 page count:", len(reader.pages))
    except Exception as e:
        print("Could not import PyPDF2 or read page count:", e)
