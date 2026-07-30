import sys
from PIL import Image
import numpy as np
import os

def remove_solid_bg(image_path, bg_hex, threshold=30):
    print(f"Processing {image_path}...")
    try:
        img = Image.open(image_path).convert("RGBA")
        data = np.array(img)
        
        # hex to rgb
        bg_hex = bg_hex.lstrip('#')
        bg_rgb = tuple(int(bg_hex[i:i+2], 16) for i in (0, 2, 4))
        print(f"Target BG RGB: {bg_rgb}")
        
        # Calculate Euclidean distance to background color
        r, g, b, a = data[:,:,0], data[:,:,1], data[:,:,2], data[:,:,3]
        
        # Calculate distance
        distance = np.sqrt((r.astype(int) - bg_rgb[0])**2 + 
                           (g.astype(int) - bg_rgb[1])**2 + 
                           (b.astype(int) - bg_rgb[2])**2)
        
        # Create mask: True where pixel is NOT background (distance > threshold)
        mask = distance > threshold
        
        # Update alpha channel: 255 for foreground, 0 for background
        # We also keep pixels that are already transparent as transparent
        data[..., 3] = np.where(mask, data[..., 3], 0)
        
        # For smooth edges (optional simple feathering), we could do a softer alpha
        # But hard threshold usually works if background is perfectly solid AI color.
        
        new_img = Image.fromarray(data)
        
        # Save output (cache bust by renaming or just overwriting)
        out_path = image_path.replace('.png', '_fixed.png')
        new_img.save(out_path)
        print(f"Successfully processed and saved to {out_path}")
        return out_path
    except Exception as e:
        print(f"Error processing {image_path}: {e}")
        return None

if __name__ == "__main__":
    img_path = "d:/HUZAIFA/cafewebdemo/public/images/hero_coffee_1785415845728_transparent.png"
    # The background in the image is approximately #051F20
    remove_solid_bg(img_path, "#051F20", threshold=45)
