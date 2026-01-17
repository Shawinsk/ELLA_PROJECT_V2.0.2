try:
    import cv2
    print("cv2: OK")
except ImportError as e:
    print(f"cv2: ERROR {e}")

try:
    import mediapipe
    print("mediapipe: OK")
except ImportError as e:
    print(f"mediapipe: ERROR {e}")
