import os
from PIL import Image
import random

def generate_noise(filename, width=128, height=128):
    img = Image.new('RGBA', (width, height))
    pixels = img.load()
    for y in range(height):
        for x in range(width):
            # Generate black and white noise with random opacity
            val = random.randint(0, 255)
            alpha = random.randint(0, 40) # Very subtle
            pixels[x, y] = (val, val, val, alpha)
    
    img.save(filename)
    print(f"Generated {filename}")

if __name__ == "__main__":
    out_dir = "d:/HUZAIFA/cafewebdemo/public/images"
    os.makedirs(out_dir, exist_ok=True)
    generate_noise(os.path.join(out_dir, "noise.png"))
