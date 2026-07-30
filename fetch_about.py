import urllib.request
import urllib.parse
import os

def fetch_about_image():
    # The URL from the user's Google Maps link
    encoded_url = "https:%2F%2Flh3.googleusercontent.com%2Fgps-cs-s%2FAHRPTWl4PnLP9ewJ_esfI48ZrnloitakwUP2UdbT4Mqlo9SZT6Sj_PeM3rlNoDO6fwpzcBBAA3lo_CCANv9JbzrgWoZ6LWvsbXNJVnFDyaBKyKI_DOdZ6BjPImuajSFoWkEKoSDl_4d0%3Dw203-h360-k-no"
    decoded_url = urllib.parse.unquote(encoded_url)
    
    # Change resolution parameters for high quality
    high_res_url = decoded_url.replace("=w203-h360", "=w1200-h1200")
    print(f"Fetching from: {high_res_url}")
    
    out_path = "d:/HUZAIFA/cafewebdemo/public/images/locais_about.jpg"
    
    req = urllib.request.Request(high_res_url, headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(req) as response, open(out_path, 'wb') as out_file:
        out_file.write(response.read())
        print(f"Successfully downloaded to {out_path}")

if __name__ == "__main__":
    fetch_about_image()
