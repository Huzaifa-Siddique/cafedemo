import sys
from rembg import remove
from PIL import Image
import os
import glob

def process_images(directory):
    files = glob.glob(os.path.join(directory, '*.png'))
    for file_path in files:
        # Only process our generated images to save time
        if any(keyword in file_path for keyword in ['hero_coffee', 'honey_cake', 'medovik', 'croissant', 'specialty_coffee']):
            print(f"Processing {file_path}...")
            try:
                input_img = Image.open(file_path)
                output_img = remove(input_img)
                output_img.save(file_path)
                print(f"Successfully removed background from {file_path}")
            except Exception as e:
                print(f"Error processing {file_path}: {e}")

if __name__ == "__main__":
    img_dir = "d:/HUZAIFA/cafewebdemo/public/images"
    process_images(img_dir)
