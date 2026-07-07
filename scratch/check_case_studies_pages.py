import re

pdf_path = r"c:\Users\sayed\Downloads\Kimi_Agent_Clone HBJ Digital Lab\app\brochure\case_studies_final.pdf"

with open(pdf_path, 'rb') as f:
    content = f.read()

# Look for /Count in the PDF content
counts = re.findall(rb'/Count\s+(\d+)', content)
if counts:
    page_counts = [int(c) for c in counts]
    print("Page counts found in Case Studies PDF:", page_counts)
    print("Estimated total pages:", max(page_counts))
else:
    print("No page count found in Case Studies PDF.")
