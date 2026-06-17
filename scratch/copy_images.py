import os
import shutil

# Paths
artifact_dir = r"C:\Users\sayed\.gemini\antigravity\brain\c56a9c70-4a12-4063-8b7e-d5db152fb2af"
public_dir = r"c:\Users\sayed\Downloads\Kimi_Agent_Clone HBJ Digital Lab\app\public"
brochure_images_dir = r"c:\Users\sayed\Downloads\Kimi_Agent_Clone HBJ Digital Lab\app\brochure\images"

# Ensure directories exist
os.makedirs(public_dir, exist_ok=True)
os.makedirs(brochure_images_dir, exist_ok=True)

# Find generated images in artifact dir
files = os.listdir(artifact_dir)

mapping = {
    "cover.png": "founder_office_cover",
    "trenches.png": "trench_collaboration",
    "dashboard.png": "metrics_dashboard",
    "freedom.png": "founder_freedom"
}

for dest_name, prefix in mapping.items():
    # Find the file that starts with the prefix and ends with .png
    target_file = None
    for f in files:
        if f.startswith(prefix) and f.endswith(".png"):
            target_file = os.path.join(artifact_dir, f)
            break
    
    if target_file and os.path.exists(target_file):
        # Copy to public
        shutil.copy(target_file, os.path.join(public_dir, dest_name))
        # Copy to brochure/images
        shutil.copy(target_file, os.path.join(brochure_images_dir, dest_name))
        print(f"Copied {os.path.basename(target_file)} -> {dest_name}")
    else:
        print(f"Error: Could not find image for {prefix}")

print("Copy completed.")
