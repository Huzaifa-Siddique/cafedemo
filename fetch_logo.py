from duckduckgo_search import DDGS
import urllib.request
import os

def download_locais_logo():
    print("Searching DuckDuckGo for Locais Cafe Riyadh logo...")
    results = DDGS().images(
        keywords="Locais cafe Riyadh logo",
        region="wt-wt",
        safesearch="off",
        size="Small",
        max_results=5,
    )
    
    if not results:
        print("No logo found.")
        return False

    for result in results:
        img_url = result['image']
        print(f"Found logo URL: {img_url}")
        
        # Prefer png or jpg
        out_path = "d:/HUZAIFA/cafewebdemo/public/images/locais_logo.png"
        
        try:
            req = urllib.request.Request(img_url, headers={'User-Agent': 'Mozilla/5.0'})
            with urllib.request.urlopen(req, timeout=10) as response, open(out_path, 'wb') as out_file:
                out_file.write(response.read())
            
            print(f"Success! Saved to {out_path}")
            return True
        except Exception as e:
            print(f"Failed to download {img_url}: {e}")

    return False

if __name__ == "__main__":
    download_locais_logo()
