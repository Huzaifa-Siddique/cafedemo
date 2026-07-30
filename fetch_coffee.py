from duckduckgo_search import DDGS
import urllib.request
import os
from rembg import remove
from PIL import Image

def download_and_cut():
    print("Searching DuckDuckGo for transparent iced coffee...")
    results = DDGS().images(
        keywords="iced coffee transparent png",
        region="wt-wt",
        safesearch="off",
        size="Large",
        type_image="transparent",
        max_results=5,
    )
    
    if not results:
        print("No images found.")
        return

    for result in results:
        img_url = result['image']
        print(f"Found image URL: {img_url}")
        tmp_img = "d:/HUZAIFA/cafewebdemo/public/images/tmp_coffee.png"
        
        try:
            req = urllib.request.Request(img_url, headers={'User-Agent': 'Mozilla/5.0'})
            with urllib.request.urlopen(req, timeout=10) as response, open(tmp_img, 'wb') as out_file:
                out_file.write(response.read())
            
            print("Running rembg just in case it's not fully transparent...")
            input_img = Image.open(tmp_img).convert("RGBA")
            output_img = remove(input_img)
            
            out_path = "d:/HUZAIFA/cafewebdemo/public/images/real_internet_coffee.png"
            output_img.save(out_path)
            print(f"Success! Saved to {out_path}")
            
            os.remove(tmp_img)
            break
        except Exception as e:
            print(f"Failed to download or process {img_url}: {e}")

if __name__ == "__main__":
    download_and_cut()
