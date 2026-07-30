import cv2
import glob
import os

videos = glob.glob('d:/HUZAIFA/cafewebdemo/inspiration/*.mp4')
for video in videos:
    cap = cv2.VideoCapture(video)
    total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
    cap.set(cv2.CAP_PROP_POS_FRAMES, total_frames // 2)
    ret, frame = cap.read()
    if ret:
        name = os.path.basename(video).replace('.mp4', '.jpg')
        cv2.imwrite(f'd:/HUZAIFA/cafewebdemo/inspiration/{name}', frame)
        print(f'Extracted {name}')
    cap.release()
