from duckduckgo_search import DDGS
import urllib.request
import os

def download_locais_image():
    print("Searching DuckDuckGo for Locais Cafe Riyadh...")
    results = DDGS().images(
        keywords="Locais cafe Riyadh interior OR exterior",
        region="wt-wt",
        safesearch="off",
        size="Large",
        max_results=5,
    )
    
    if not results:
        print("No images found.")
        return

    for result in results:
        img_url = result['image']
        print(f"Found image URL: {img_url}")
        out_path = "d:/HUZAIFA/cafewebdemo/public/images/locais_vibe_real.jpg"
        
        try:
            req = urllib.request.Request(img_url, headers={'User-Agent': 'Mozilla/5.0'})
            with urllib.request.urlopen(req, timeout=10) as response, open(out_path, 'wb') as out_file:
                out_file.write(response.read())
            
            print(f"Success! Saved to {out_path}")
            break
        except Exception as e:
            print(f"Failed to download {img_url}: {e}")

if __name__ == "__main__":
    download_locais_image()
