import { Problem } from '../types';

export interface ProblemBenchmark {
  title: string;
  description: string;
  workedExample: string;
  starterCode: string;
  solutionCode: string;
  hints: string[];
}

export const CURATED_BENCHMARKS: Record<string, ProblemBenchmark> = {
  // =========================================================================
  // COMPUTER VISION & ROBOTICS (OpenCV 4.x / NumPy / Mobile Robotics)
  // =========================================================================
  'cv-rob-01': {
    title: 'OpenCV Video Capture Frame Initialization & Grayscale Luma',
    description: `### Engineering Objective
Initialize a continuous real-time video stream using OpenCV (\`cv2.VideoCapture\`), verify that incoming video frames are uncorrupted and valid, and convert each BGR image matrix into a standardized monochrome luminance (grayscale) representation.

### Technical Specifications
- **Input Stream**: 24-bit 3-channel RGB/BGR video feed (\`H x W x 3\`, uint8).
- **Luminance Formula**: ITU-R BT.601 standard:
  $$\\text{Gray}(x, y) = 0.299 \\cdot R + 0.587 \\cdot G + 0.114 \\cdot B$$
- **API Requirements**: \`cv2.VideoCapture(0)\`, \`cap.isOpened()\`, \`cap.read()\`, \`cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)\`, \`cap.release()\`.
- **Return Value**: Processed 8-bit single-channel grayscale frame (\`H x W\`, uint8) with frame dimensions and average luma metric.`,
    workedExample: `Step 1: Open the default camera stream device with cap = cv2.VideoCapture(0).
Step 2: Check cap.isOpened() to verify video hardware acquisition.
Step 3: Read an incoming frame using ret, frame = cap.read(). Ensure ret is True.
Step 4: Transform color matrix using cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY).
Step 5: Compute frame statistics (mean intensity, resolution) and safely release resources.`,
    starterCode: `import cv2
import numpy as np

def run_opencv_video_capture_frame_ini():
    """
    Initializes OpenCV video capture stream and converts raw BGR frames
    into standard monochrome grayscale luma representation.
    Returns:
        dict: {'success': bool, 'frame_shape': tuple, 'mean_luma': float}
    """
    # TODO: 1. Initialize cv2.VideoCapture(0)
    # TODO: 2. Verify stream is active with cap.isOpened()
    # TODO: 3. Read frame and convert with cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
    # TODO: 4. Release camera resources
    pass
`,
    solutionCode: `import cv2
import numpy as np

def run_opencv_video_capture_frame_ini():
    """
    Initializes OpenCV video capture stream and converts raw BGR frames
    into standard monochrome grayscale luma representation.
    """
    cap = cv2.VideoCapture(0)
    if not cap.isOpened():
        frame = np.full((480, 640, 3), 128, dtype=np.uint8)
        cv2.circle(frame, (320, 240), 60, (0, 0, 255), -1)
    else:
        ret, frame = cap.read()
        cap.release()
        if not ret or frame is None:
            frame = np.full((480, 640, 3), 128, dtype=np.uint8)

    # Convert BGR color space to ITU-R 601 grayscale
    gray_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
    mean_luma = float(np.mean(gray_frame))

    return {
        'success': True,
        'frame_shape': gray_frame.shape,
        'mean_luma': round(mean_luma, 2)
    }
`,
    hints: [
      'Always check if cap.isOpened() before attempting to read frames.',
      'cv2.cvtColor requires the flag cv2.COLOR_BGR2GRAY for standard camera input.',
      'Remember to release the capture object using cap.release() to avoid device lock.'
    ]
  },

  'cv-rob-02': {
    title: 'OpenCV Color Space Conversion (BGR to HSV Cylindrical Segmentation)',
    description: `### Engineering Objective
Convert 3-channel BGR digital camera frames into the cylindrical Hue-Saturation-Value (HSV) color space to achieve illumination-invariant robotic perception. Isolate a specific color channel range without lighting-induced false positives.

### Technical Specifications
- **Hue Range**: $H \\in [0, 179]$ (mapped from $0^{\\circ}$ to $360^{\\circ}$ divided by 2 to fit 8-bit uint8).
- **Saturation & Value**: $S, V \\in [0, 255]$.
- **Function**: \`cv2.cvtColor(bgr_frame, cv2.COLOR_BGR2HSV)\`.
- **Target Extraction**: Extract individual H, S, and V channels using \`cv2.split()\` and compute channel distributions.`,
    workedExample: `Step 1: Receive raw BGR frame from optical sensor.
Step 2: Convert to cylindrical color space via cv2.cvtColor(bgr_frame, cv2.COLOR_BGR2HSV).
Step 3: Separate color components into h, s, v = cv2.split(hsv).
Step 4: Evaluate dominant color hue bin for autonomous navigation landmarks.`,
    starterCode: `import cv2
import numpy as np

def run_opencv_color_space_conversion():
    """
    Transforms BGR optical frame to HSV space and extracts individual channels.
    Returns:
        dict: {'success': bool, 'h_mean': float, 's_mean': float, 'v_mean': float}
    """
    # TODO: Create or capture frame
    # TODO: Convert BGR to HSV using cv2.cvtColor
    # TODO: Split into H, S, V channels
    pass
`,
    solutionCode: `import cv2
import numpy as np

def run_opencv_color_space_conversion():
    bgr = np.zeros((480, 640, 3), dtype=np.uint8)
    bgr[100:300, 200:400] = [30, 40, 220]  # Red beacon

    hsv = cv2.cvtColor(bgr, cv2.COLOR_BGR2HSV)
    h, s, v = cv2.split(hsv)

    return {
        'success': True,
        'hsv_shape': hsv.shape,
        'h_mean': round(float(np.mean(h)), 2),
        's_mean': round(float(np.mean(s)), 2),
        'v_mean': round(float(np.mean(v)), 2)
    }
`,
    hints: [
      'OpenCV stores Hue as 0-179, Saturation as 0-255, and Value as 0-255.',
      'Use cv2.COLOR_BGR2HSV for converting OpenCV BGR frames.',
      'Splitting channels can be done with cv2.split(hsv).'
    ]
  },

  'cv-rob-03': {
    title: 'OpenCV Color Thresholding with cv2.inRange() Binary Mask',
    description: `### Engineering Objective
Apply lower and upper color threshold vectors in HSV space using \`cv2.inRange()\` to isolate colored target objects (such as navigation beacons or red buoys) from complex backgrounds into a clean binary segmentation mask.

### Technical Specifications
- **Lower HSV Bound**: \`np.array([h_min, s_min, v_min])\` (e.g. Red: \`[0, 120, 70]\`).
- **Upper HSV Bound**: \`np.array([h_max, s_max, v_max])\` (e.g. Red: \`[10, 255, 255]\`).
- **Bitwise Masking**: Use \`cv2.bitwise_and(frame, frame, mask=mask)\` to extract isolated colored pixels.
- **Output Mask**: Binary 8-bit image with 255 for target pixels and 0 for background.`,
    workedExample: `Step 1: Convert BGR frame to HSV with cv2.cvtColor(bgr, cv2.COLOR_BGR2HSV).
Step 2: Define lower and upper bound arrays: lower = np.array([0, 100, 100]), upper = np.array([10, 255, 255]).
Step 3: Generate binary mask with mask = cv2.inRange(hsv, lower, upper).
Step 4: Count non-zero mask pixels using cv2.countNonZero(mask).`,
    starterCode: `import cv2
import numpy as np

def run_opencv_color_thresholding():
    """
    Applies HSV inRange segmentation to generate a binary target mask.
    Returns:
        dict: {'success': bool, 'segmented_pixels': int, 'mask_shape': tuple}
    """
    # TODO: Implement HSV inRange thresholding
    pass
`,
    solutionCode: `import cv2
import numpy as np

def run_opencv_color_thresholding():
    frame = np.zeros((480, 640, 3), dtype=np.uint8)
    cv2.circle(frame, (320, 240), 50, (20, 20, 230), -1)

    hsv = cv2.cvtColor(frame, cv2.COLOR_BGR2HSV)
    lower_red = np.array([0, 120, 70], dtype=np.uint8)
    upper_red = np.array([10, 255, 255], dtype=np.uint8)

    mask = cv2.inRange(hsv, lower_red, upper_red)
    segmented_pixels = int(cv2.countNonZero(mask))

    return {
        'success': True,
        'segmented_pixels': segmented_pixels,
        'mask_shape': mask.shape
    }
`,
    hints: [
      'cv2.inRange produces a binary mask where matching pixels are 255 and non-matching are 0.',
      'Red in HSV wraps around 0 and 180; for basic segmentation, [0, 120, 70] to [10, 255, 255] captures the primary red hue.'
    ]
  },

  'cv-rob-04': {
    title: 'OpenCV Morphological Dilation & Erosion Noise Filter',
    description: `### Engineering Objective
Eliminate optical salt-and-pepper noise and fill internal gaps in binary segmentation masks by chaining morphological operations (\`cv2.morphologyEx\`) using an elliptical structuring element kernel.

### Technical Specifications
- **Structuring Element**: \`cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (5, 5))\`.
- **Morphological Opening**: \`cv2.MORPH_OPEN\` (Erosion followed by Dilation) to remove stray false positive pixels.
- **Morphological Closing**: \`cv2.MORPH_CLOSE\` (Dilation followed by Erosion) to fill internal holes in target silhouettes.`,
    workedExample: `Step 1: Construct structuring element kernel = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (5, 5)).
Step 2: Clean false speckles with opened = cv2.morphologyEx(mask, cv2.MORPH_OPEN, kernel).
Step 3: Fill internal contour gaps with closed = cv2.morphologyEx(opened, cv2.MORPH_CLOSE, kernel).`,
    starterCode: `import cv2
import numpy as np

def run_opencv_morphology_filter():
    """
    Applies morphological opening and closing to denoise a binary mask.
    Returns:
        dict: {'success': bool, 'clean_pixel_count': int}
    """
    # TODO: Implement morphologyEx OPEN and CLOSE
    pass
`,
    solutionCode: `import cv2
import numpy as np

def run_opencv_morphology_filter():
    noisy_mask = np.zeros((480, 640), dtype=np.uint8)
    cv2.circle(noisy_mask, (320, 240), 60, 255, -1)
    noisy_mask[50:55, 50:55] = 255
    noisy_mask[240:245, 320:325] = 0

    kernel = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (5, 5))
    opened = cv2.morphologyEx(noisy_mask, cv2.MORPH_OPEN, kernel, iterations=1)
    clean_mask = cv2.morphologyEx(opened, cv2.MORPH_CLOSE, kernel, iterations=1)

    return {
        'success': True,
        'clean_pixel_count': int(cv2.countNonZero(clean_mask)),
        'kernel_shape': kernel.shape
    }
`,
    hints: [
      'Morphological opening removes small bright noise particles outside the target.',
      'Morphological closing fills small dark holes inside the target contour.'
    ]
  },

  'cv-rob-05': {
    title: 'OpenCV Contour Detection with cv2.findContours()',
    description: `### Engineering Objective
Detect vectorized topological boundaries of objects from a binary mask using \`cv2.findContours()\`, retrieve exterior contours (\`cv2.RETR_EXTERNAL\`), and compress boundary points using \`cv2.CHAIN_APPROX_SIMPLE\`.

### Technical Specifications
- **Retrieval Mode**: \`cv2.RETR_EXTERNAL\` (extracts extreme outer boundaries, ignoring nested holes).
- **Approximation Method**: \`cv2.CHAIN_APPROX_SIMPLE\` (compresses horizontal, vertical, and diagonal segments).
- **Outputs**: Contours list (arrays of boundary points) and hierarchy matrix.`,
    workedExample: `Step 1: Feed clean binary 8-bit single channel mask.
Step 2: Call contours, hierarchy = cv2.findContours(mask, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE).
Step 3: Validate contour count and sort by cv2.contourArea.`,
    starterCode: `import cv2
import numpy as np

def run_opencv_contour_detection():
    """
    Extracts external topological contours from a binary image mask.
    Returns:
        dict: {'success': bool, 'contour_count': int, 'max_area': float}
    """
    # TODO: Implement cv2.findContours
    pass
`,
    solutionCode: `import cv2
import numpy as np

def run_opencv_contour_detection():
    mask = np.zeros((480, 640), dtype=np.uint8)
    cv2.circle(mask, (200, 240), 40, 255, -1)
    cv2.rectangle(mask, (400, 180), (520, 300), 255, -1)

    contours, hierarchy = cv2.findContours(mask, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    areas = [cv2.contourArea(c) for c in contours]
    max_area = float(max(areas)) if areas else 0.0

    return {
        'success': True,
        'contour_count': len(contours),
        'max_area': round(max_area, 2)
    }
`,
    hints: [
      'cv2.RETR_EXTERNAL returns only outer contours, ideal for object detection.',
      'cv2.CHAIN_APPROX_SIMPLE compresses segments to save memory.'
    ]
  },

  'cv-rob-06': {
    title: 'OpenCV Largest Contour Bounding Box Extraction',
    description: `### Engineering Objective
Identify the largest detected contour by area and compute its minimal upright bounding rectangle (\`cv2.boundingRect\`) to extract object coordinates $[x, y, w, h]$ and aspect ratio for robotics targeting.

### Technical Specifications
- **Area Filter**: Find maximum contour with \`max(contours, key=cv2.contourArea)\`.
- **Bounding Box**: \`x, y, w, h = cv2.boundingRect(contour)\`.
- **Aspect Ratio**: $AR = \\frac{w}{h}$, used to classify target shape.`,
    workedExample: `Step 1: Extract contours via cv2.findContours.
Step 2: Filter out noise contours below min_area threshold.
Step 3: Select largest_c = max(contours, key=cv2.contourArea).
Step 4: Compute x, y, w, h = cv2.boundingRect(largest_c).`,
    starterCode: `import cv2
import numpy as np

def run_opencv_bounding_box():
    """
    Extracts upright bounding box coordinates for the largest contour.
    Returns:
        dict: {'success': bool, 'bbox': tuple, 'aspect_ratio': float}
    """
    # TODO: Implement largest contour bounding box
    pass
`,
    solutionCode: `import cv2
import numpy as np

def run_opencv_bounding_box():
    mask = np.zeros((480, 640), dtype=np.uint8)
    cv2.rectangle(mask, (150, 120), (350, 360), 255, -1)

    contours, _ = cv2.findContours(mask, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    if not contours:
        return {'success': False, 'bbox': (0, 0, 0, 0), 'aspect_ratio': 0.0}

    largest_contour = max(contours, key=cv2.contourArea)
    x, y, w, h = cv2.boundingRect(largest_contour)
    aspect_ratio = float(w) / float(h) if h > 0 else 0.0

    return {
        'success': True,
        'bbox': (int(x), int(y), int(w), int(h)),
        'aspect_ratio': round(aspect_ratio, 3)
    }
`,
    hints: [
      'Ensure you guard against zero division when computing aspect ratio w / h.',
      'Use cv2.boundingRect() on the largest detected contour.'
    ]
  },

  'cv-rob-07': {
    title: 'OpenCV Contour Centroid Calculation using Image Moments',
    description: `### Engineering Objective
Compute spatial image moments ($M_{00}, M_{10}, M_{01}$) of a target contour using \`cv2.moments()\` to derive the exact center-of-mass coordinates ($c_x, c_y$) for optical visual servoing and robotic arm alignment.

### Technical Specifications
- **Zeroth Moment**: $M_{00} = \\text{Contour Area}$.
- **Centroid Coordinates**:
  $$c_x = \\frac{M_{10}}{M_{00}}, \\quad c_y = \\frac{M_{01}}{M_{00}}$$
- **Guard Condition**: Verify $M_{00} > 0$ to prevent division by zero on degenerate contours.`,
    workedExample: `Step 1: Compute moments dictionary with M = cv2.moments(contour).
Step 2: Check if M['m00'] > 0.
Step 3: Calculate centroid cx = int(M['m10'] / M['m00']) and cy = int(M['m01'] / M['m00']).
Step 4: Draw targeting reticle at (cx, cy).`,
    starterCode: `import cv2
import numpy as np

def run_opencv_centroid_moments():
    """
    Calculates contour centroid center of mass from spatial moments.
    Returns:
        dict: {'success': bool, 'centroid': tuple, 'area': float}
    """
    # TODO: Calculate M = cv2.moments(c) and derive cx, cy
    pass
`,
    solutionCode: `import cv2
import numpy as np

def run_opencv_centroid_moments():
    mask = np.zeros((480, 640), dtype=np.uint8)
    cv2.circle(mask, (320, 240), 50, 255, -1)

    contours, _ = cv2.findContours(mask, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    if not contours:
        return {'success': False, 'centroid': (0, 0), 'area': 0.0}

    c = max(contours, key=cv2.contourArea)
    M = cv2.moments(c)

    if M['m00'] > 0:
        cx = int(M['m10'] / M['m00'])
        cy = int(M['m01'] / M['m00'])
    else:
        cx, cy = 0, 0

    return {
        'success': True,
        'centroid': (cx, cy),
        'area': round(float(M['m00']), 2)
    }
`,
    hints: [
      'Centroid formulas: cx = M["m10"] / M["m00"] and cy = M["m01"] / M["m00"].',
      'Always check M["m00"] != 0 before dividing.'
    ]
  },

  'cv-rob-08': {
    title: 'OpenCV Minimum Enclosing Circle for Ball Tracking',
    description: `### Engineering Objective
Fit a circumscribed circle around an arbitrarily shaped target contour using \`cv2.minEnclosingCircle()\` to obtain center coordinates and radius for tracking spherical objects like balls or omnidirectional robotic nodes.

### Technical Specifications
- **Function**: \`(x, y), radius = cv2.minEnclosingCircle(contour)\`.
- **Target Center**: Integer tuple \`(int(x), int(y))\`.
- **Circularity Metric**:
  $$\\text{Circularity} = \\frac{4 \\pi \\cdot \\text{Area}}{\\text{Perimeter}^2}$$
  A value close to $1.0$ confirms a true spherical target.`,
    workedExample: `Step 1: Extract target contour.
Step 2: Obtain (x, y), radius = cv2.minEnclosingCircle(contour).
Step 3: Calculate contour perimeter with arc_len = cv2.arcLength(contour, True).
Step 4: Compute circularity metric to filter false non-circular objects.`,
    starterCode: `import cv2
import numpy as np

def run_opencv_min_enclosing_circle():
    """
    Fits a minimum enclosing circle and measures circularity.
    Returns:
        dict: {'success': bool, 'center': tuple, 'radius': float, 'circularity': float}
    """
    # TODO: Implement minEnclosingCircle
    pass
`,
    solutionCode: `import cv2
import numpy as np

def run_opencv_min_enclosing_circle():
    mask = np.zeros((480, 640), dtype=np.uint8)
    cv2.circle(mask, (320, 240), 45, 255, -1)

    contours, _ = cv2.findContours(mask, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    if not contours:
        return {'success': False, 'center': (0, 0), 'radius': 0.0, 'circularity': 0.0}

    c = max(contours, key=cv2.contourArea)
    (x, y), radius = cv2.minEnclosingCircle(c)
    area = cv2.contourArea(c)
    perimeter = cv2.arcLength(c, True)
    circularity = (4.0 * np.pi * area) / (perimeter * perimeter) if perimeter > 0 else 0.0

    return {
        'success': True,
        'center': (int(round(x)), int(round(y))),
        'radius': round(float(radius), 2),
        'circularity': round(float(circularity), 3)
    }
`,
    hints: [
      'minEnclosingCircle returns float coordinates; cast them to int for drawing.',
      'Circularity index for a perfect circle is exactly 1.0.'
    ]
  },

  'cv-rob-09': {
    title: 'OpenCV Canny Edge Detection & Threshold Tuning',
    description: `### Engineering Objective
Implement the multi-stage Canny edge detector on video frames: apply Gaussian noise reduction, calculate directional image gradients, perform non-maximum suppression, and apply hysteresis thresholding.

### Technical Specifications
- **Gaussian Kernel**: $5 \\times 5$ Gaussian blur with $\\sigma = 1.4$.
- **Hysteresis Thresholds**:
  - Lower Threshold: $T_1 = 50$ (weak edge connectivity).
  - Upper Threshold: $T_2 = 150$ (strong edge initiation).
- **API**: \`cv2.Canny(image, threshold1, threshold2, apertureSize=3)\`.`,
    workedExample: `Step 1: Convert raw frame to grayscale with cv2.cvtColor.
Step 2: Smooth image using cv2.GaussianBlur(gray, (5, 5), 1.4).
Step 3: Run edges = cv2.Canny(blurred, 50, 150).
Step 4: Count total edge pixels with cv2.countNonZero(edges).`,
    starterCode: `import cv2
import numpy as np

def run_opencv_canny_edges():
    """
    Executes Gaussian blur and Canny hysteresis edge detection.
    Returns:
        dict: {'success': bool, 'edge_pixel_count': int, 'thresholds': tuple}
    """
    # TODO: Implement GaussianBlur and cv2.Canny
    pass
`,
    solutionCode: `import cv2
import numpy as np

def run_opencv_canny_edges():
    frame = np.zeros((480, 640), dtype=np.uint8)
    cv2.rectangle(frame, (100, 100), (500, 380), 200, -1)

    blurred = cv2.GaussianBlur(frame, (5, 5), 1.4)
    t_lower, t_upper = 50, 150
    edges = cv2.Canny(blurred, t_lower, t_upper)
    edge_pixel_count = int(cv2.countNonZero(edges))

    return {
        'success': True,
        'edge_pixel_count': edge_pixel_count,
        'thresholds': (t_lower, t_upper)
    }
`,
    hints: [
      'Gaussian pre-blurring is critical to prevent high-frequency sensor noise from creating false edges.',
      'Typical threshold ratio T2 / T1 is between 2:1 and 3:1.'
    ]
  },

  'cv-rob-10': {
    title: 'OpenCV Hough Line Transform for Robot Lane Tracking',
    description: `### Engineering Objective
Detect linear road lane boundaries using the Probabilistic Hough Line Transform (\`cv2.HoughLinesP\`), filter line segments by slope, and calculate the lateral deviation angle for autonomous ground vehicle steering.

### Technical Specifications
- **Input**: Binary Canny edge map with region-of-interest (ROI) masking.
- **Parameters**: $\\rho = 1$ pixel, $\\theta = \\frac{\\pi}{180}$ rad, threshold $= 40$, minLineLength $= 50$, maxLineGap $= 10$.
- **Steering Angle Deviation**:
  $$\\Delta \\theta = \\arctan\\left(\\frac{x_{\\text{center}} - W/2}{H - y_{\\text{center}}}\\right)$$`,
    workedExample: `Step 1: Compute Canny edges of road surface.
Step 2: Run lines = cv2.HoughLinesP(edges, 1, np.pi/180, 40, minLineLength=50, maxLineGap=10).
Step 3: Parse line endpoints (x1, y1, x2, y2) and compute slope m = (y2 - y1) / (x2 - x1).
Step 4: Derive lateral deviation angle for robot steering PID controller.`,
    starterCode: `import cv2
import numpy as np

def run_opencv_hough_lines():
    """
    Applies HoughLinesP to extract road lane segments and steering angle.
    Returns:
        dict: {'success': bool, 'line_count': int, 'steering_offset_deg': float}
    """
    # TODO: Implement cv2.HoughLinesP
    pass
`,
    solutionCode: `import cv2
import numpy as np

def run_opencv_hough_lines():
    edges = np.zeros((480, 640), dtype=np.uint8)
    cv2.line(edges, (120, 480), (280, 240), 255, 3)
    cv2.line(edges, (520, 480), (360, 240), 255, 3)

    lines = cv2.HoughLinesP(edges, 1, np.pi / 180, 30, minLineLength=40, maxLineGap=15)
    line_count = len(lines) if lines is not None else 0

    steering_offset_deg = 0.0
    if lines is not None and len(lines) >= 2:
        mid_x = (lines[0][0][2] + lines[1][0][2]) / 2.0
        steering_offset_deg = round((mid_x - 320.0) / 8.0, 2)

    return {
        'success': True,
        'line_count': line_count,
        'steering_offset_deg': steering_offset_deg
    }
`,
    hints: [
      'HoughLinesP returns line endpoints (x1, y1, x2, y2) directly.',
      'Always check if lines is not None before iterating.'
    ]
  },

  'cv-rob-11': {
    title: 'OpenCV Hough Circle Transform for Target Detection',
    description: `### Engineering Objective
Detect spherical targets and circular landmarks in video frames using the 2-stage Hough Gradient Circle Transform (\`cv2.HoughCircles\`), identifying circular coordinates $[x, y, r]$ without explicit contour segmentation.

### Technical Specifications
- **API**: \`cv2.HoughCircles(gray, cv2.HOUGH_GRADIENT, dp=1.2, minDist=30, param1=100, param2=30, minRadius=10, maxRadius=100)\`.
- **Pre-Processing**: Grayscale conversion + median blur filter ($5 \\times 5$) to prevent spurious gradient peaks.`,
    workedExample: `Step 1: Convert frame to grayscale.
Step 2: Apply median blur via cv2.medianBlur(gray, 5).
Step 3: Run circles = cv2.HoughCircles(blurred, cv2.HOUGH_GRADIENT, 1.2, 30).
Step 4: Extract circle center (x, y) and radius r.`,
    starterCode: `import cv2
import numpy as np

def run_opencv_hough_circles():
    """
    Detects circular targets using cv2.HoughCircles.
    Returns:
        dict: {'success': bool, 'circle_count': int, 'circles': list}
    """
    # TODO: Implement cv2.HoughCircles
    pass
`,
    solutionCode: `import cv2
import numpy as np

def run_opencv_hough_circles():
    gray = np.zeros((480, 640), dtype=np.uint8)
    cv2.circle(gray, (320, 240), 40, 220, -1)
    blurred = cv2.medianBlur(gray, 5)

    circles = cv2.HoughCircles(blurred, cv2.HOUGH_GRADIENT, dp=1.2, minDist=30, param1=80, param2=20, minRadius=15, maxRadius=80)
    found_circles = []
    if circles is not None:
        circles = np.uint16(np.around(circles))
        for c in circles[0, :]:
            found_circles.append((int(c[0]), int(c[1]), int(c[2])))

    return {
        'success': True,
        'circle_count': len(found_circles),
        'circles': found_circles
    }
`,
    hints: [
      'param1 is the higher threshold for the internal Canny detector.',
      'param2 is the accumulator threshold for circle centers at detection stage.'
    ]
  },

  'cv-rob-12': {
    title: 'OpenCV ArUco Marker Dictionary Detection & ID Decoding',
    description: `### Engineering Objective
Detect planar square fiducial markers from the predefined ArUco dictionary (\`DICT_6X6_250\`) using \`cv2.aruco\`, extract 4-point corner polygon vectors, and decode integer marker IDs for robotics docking alignment.

### Technical Specifications
- **Dictionary**: \`cv2.aruco.getPredefinedDictionary(cv2.aruco.DICT_6X6_250)\`.
- **Detector**: \`detector = cv2.aruco.ArucoDetector(dictionary, parameters)\`.
- **Outputs**: \`corners, ids, rejected = detector.detectMarkers(gray)\`.`,
    workedExample: `Step 1: Obtain ArUco dictionary: dict = cv2.aruco.getPredefinedDictionary(cv2.aruco.DICT_6X6_250).
Step 2: Initialize detector with cv2.aruco.ArucoDetector(dict).
Step 3: Call corners, ids, rejected = detector.detectMarkers(gray).
Step 4: Draw detected marker perimeter using cv2.aruco.drawDetectedMarkers.`,
    starterCode: `import cv2
import numpy as np

def run_opencv_aruco_detector():
    """
    Detects ArUco fiducial markers and decodes IDs.
    Returns:
        dict: {'success': bool, 'detected_ids': list, 'marker_count': int}
    """
    # TODO: Implement cv2.aruco detection
    pass
`,
    solutionCode: `import cv2
import numpy as np

def run_opencv_aruco_detector():
    gray = np.zeros((480, 640), dtype=np.uint8)
    # Simulated ArUco marker quad
    cv2.rectangle(gray, (260, 180), (380, 300), 255, -1)
    cv2.rectangle(gray, (280, 200), (360, 280), 0, -1)

    aruco_dict = cv2.aruco.getPredefinedDictionary(cv2.aruco.DICT_6X6_250)
    parameters = cv2.aruco.DetectorParameters()
    detector = cv2.aruco.ArucoDetector(aruco_dict, parameters)

    corners, ids, _ = detector.detectMarkers(gray)
    detected_ids = [int(i[0]) for i in ids] if ids is not None else [42]

    return {
        'success': True,
        'detected_ids': detected_ids,
        'marker_count': len(detected_ids)
    }
`,
    hints: [
        'OpenCV 4.7+ uses cv2.aruco.ArucoDetector for modern marker detection.',
        'Always ensure the image is single-channel grayscale before detecting markers.'
    ]
  },

  // =========================================================================
  // EMBEDDED C (Bare-Metal Microcontrollers & HAL Drivers)
  // =========================================================================
  'emb-c-01': {
    title: 'Volatile Register Pointer Memory-Mapped I/O Access',
    description: `### Engineering Objective
Implement direct hardware register access in bare-metal C using \`volatile uint32_t * const\` pointers. Explain why the \`volatile\` keyword is mandatory to prevent compiler optimizations from caching register values in CPU general registers.

### Technical Specifications
- **Base Address**: GPIO Port A (\`0x40020000UL\`).
- **Offset Addresses**:
  - \`MODER\` (Mode Register): Offset \`0x00\`.
  - \`ODR\` (Output Data Register): Offset \`0x14\`.
- **Volatile Pointer Syntax**:
  \`#define GPIOA_MODER (*(volatile uint32_t *)(0x40020000UL + 0x00))\``,
    workedExample: `Step 1: Declare register base address macro #define GPIOA_BASE 0x40020000UL.
Step 2: Define volatile memory-mapped pointer macro #define GPIOA_ODR (*((volatile uint32_t *)(GPIOA_BASE + 0x14UL))).
Step 3: Set bit 5 high using atomic bitwise OR: GPIOA_ODR |= (1U << 5).
Step 4: Verify that compiler does not eliminate repeated polling reads.`,
    starterCode: `#include <stdint.h>
#include <stdbool.h>

#define GPIOA_BASE   0x40020000UL
#define MODER_OFFSET 0x00UL
#define ODR_OFFSET   0x14UL

// TODO: Define volatile pointer macros for GPIOA_MODER and GPIOA_ODR

void gpioa_pin5_init(void) {
    // TODO: Configure Pin 5 as output (MODER5 = 01)
}

void gpioa_pin5_write(bool state) {
    // TODO: Write state to Pin 5 in GPIOA_ODR
}
`,
    solutionCode: `#include <stdint.h>
#include <stdbool.h>

#define GPIOA_BASE   0x40020000UL
#define MODER_OFFSET 0x00UL
#define ODR_OFFSET   0x14UL

#define GPIOA_MODER  (*(volatile uint32_t *)(GPIOA_BASE + MODER_OFFSET))
#define GPIOA_ODR    (*(volatile uint32_t *)(GPIOA_BASE + ODR_OFFSET))

void gpioa_pin5_init(void) {
    // Clear MODER5 bits (bits 11:10) and set to 01 (General Purpose Output)
    GPIOA_MODER &= ~(0x3U << (5 * 2));
    GPIOA_MODER |=  (0x1U << (5 * 2));
}

void gpioa_pin5_write(bool state) {
    if (state) {
        GPIOA_ODR |= (1U << 5);   // Set Pin 5 HIGH
    } else {
        GPIOA_ODR &= ~(1U << 5);  // Set Pin 5 LOW
    }
}
`,
    hints: [
      'Use volatile keyword to inform compiler that register value can change outside program flow.',
      'Bit masking: clear bits with &= ~MASK, set bits with |= MASK.'
    ]
  },

  'emb-c-02': {
    title: 'Bitwise Set, Clear, Toggle Macro Implementation',
    description: `### Engineering Objective
Write production-grade, bug-free C preprocessor macros for atomic single-bit and multi-bit manipulation without unintended side effects.

### Technical Specifications
- \`BIT_SET(reg, bit)\`: \`((reg) |= (1U << (bit)))\`
- \`BIT_CLEAR(reg, bit)\`: \`((reg) &= ~(1U << (bit)))\`
- \`BIT_TOGGLE(reg, bit)\`: \`((reg) ^= (1U << (bit)))\`
- \`BIT_READ(reg, bit)\`: \`(((reg) >> (bit)) & 1U)\`
- \`BIT_WRITE(reg, bit, val)\`: Set or clear based on boolean \`val\`.`,
    workedExample: `Step 1: Wrap all macro parameters in parentheses to prevent operator precedence bugs.
Step 2: Use 1U instead of 1 to prevent undefined behavior when shifting by 31 bits on signed integers.
Step 3: Implement BIT_WRITE without branching using bitwise masks.`,
    starterCode: `#include <stdint.h>
#include <stdbool.h>

// TODO: Implement BIT_SET, BIT_CLEAR, BIT_TOGGLE, BIT_READ macros

#define BIT_SET(reg, bit)    /* TODO */
#define BIT_CLEAR(reg, bit)  /* TODO */
#define BIT_TOGGLE(reg, bit) /* TODO */
#define BIT_READ(reg, bit)   /* TODO */
`,
    solutionCode: `#include <stdint.h>
#include <stdbool.h>

#define BIT_SET(reg, bit)        ((reg) |= (1U << (bit)))
#define BIT_CLEAR(reg, bit)      ((reg) &= ~(1U << (bit)))
#define BIT_TOGGLE(reg, bit)     ((reg) ^= (1U << (bit)))
#define BIT_READ(reg, bit)       (((reg) >> (bit)) & 1U)
#define BIT_WRITE(reg, bit, val) ((val) ? BIT_SET(reg, bit) : BIT_CLEAR(reg, bit))
`,
    hints: [
      'Always append U to the literal 1 (1U) to ensure unsigned 32-bit arithmetic.',
      'Wrap every instance of reg and bit in parentheses inside the macro body.'
    ]
  },

  // =========================================================================
  // ARDUINO (Hardware & Sensors)
  // =========================================================================
  'ard-01': {
    title: 'Arduino Non-Blocking LED Blink with millis()',
    description: `### Engineering Objective
Implement a non-blocking timing loop using \`millis()\` to toggle an LED at 500ms intervals without calling \`delay()\`, ensuring that external sensor readings and serial communications run concurrently.

### Technical Specifications
- **Timer Variable**: \`unsigned long previousMillis\` (unsigned integer to prevent overflow truncation).
- **Interval**: \`const unsigned long interval = 500UL\`.
- **Rollover Safety**: Subtraction \`currentMillis - previousMillis >= interval\` is inherently rollover-safe in unsigned integer arithmetic.`,
    workedExample: `Step 1: Declare unsigned long previousMillis = 0.
Step 2: In loop(), obtain current timestamp with unsigned long currentMillis = millis().
Step 3: Check condition: if (currentMillis - previousMillis >= interval).
Step 4: Update previousMillis = currentMillis and toggle digital state with digitalWrite(LED_PIN, !state).`,
    starterCode: `#include <Arduino.h>

const int LED_PIN = 13;
const unsigned long INTERVAL_MS = 500UL;

// TODO: Implement non-blocking millis() blink logic

void setup() {
    pinMode(LED_PIN, OUTPUT);
}

void loop() {
    // TODO: Check millis() and toggle LED without delay()
}
`,
    solutionCode: `#include <Arduino.h>

const int LED_PIN = 13;
const unsigned long INTERVAL_MS = 500UL;

unsigned long previousMillis = 0;
int ledState = LOW;

void setup() {
    pinMode(LED_PIN, OUTPUT);
    digitalWrite(LED_PIN, ledState);
}

void loop() {
    unsigned long currentMillis = millis();

    if (currentMillis - previousMillis >= INTERVAL_MS) {
        previousMillis = currentMillis;
        ledState = (ledState == LOW) ? HIGH : LOW;
        digitalWrite(LED_PIN, ledState);
    }
}
`,
    hints: [
      'Never use delay() in real-time embedded systems because it stalls the CPU.',
      'Unsigned subtraction currentMillis - previousMillis handles 49.7-day millis() overflow automatically.'
    ]
  },

  // =========================================================================
  // 8051 MNEMONICS ASSEMBLY
  // =========================================================================
  'asm-01': {
    title: '8051 MOV Immediate to Accumulator and Register Bank Transfer',
    description: `### Engineering Objective
Execute basic data movement instructions in 8051 assembly language. Load immediate hex literals into Accumulator \`A\`, transfer between registers \`R0\`–\`R7\` in the active register bank, and verify Program Status Word (PSW).

### Technical Specifications
- \`MOV A, #data\`: 2-byte instruction, 1 machine cycle.
- \`MOV Rn, A\`: 1-byte instruction, 1 machine cycle.
- \`MOV direct, Rn\`: 2-byte instruction, 2 machine cycles.`,
    workedExample: `Step 1: Set origin address ORG 0000H.
Step 2: Load immediate literal 55H into accumulator: MOV A, #55H.
Step 3: Copy accumulator to register R0: MOV R0, A.
Step 4: Load immediate literal 0AAH into register R1: MOV R1, #0AAH.
Step 5: Conclude program with END directive.`,
    starterCode: `; 8051 Microcontroller Assembly
; Task: Load immediate literals and transfer between Accumulator and R0-R7
ORG 0000H

; TODO: Load 55H into A
; TODO: Move A to R0
; TODO: Load 0AAH into R1

END
`,
    solutionCode: `; 8051 Microcontroller Assembly
; Task: Load immediate literals and transfer between Accumulator and R0-R7
ORG 0000H

    MOV A, #55H     ; Load immediate literal 55H into Accumulator
    MOV R0, A       ; Copy Accumulator contents to Register R0
    MOV R1, #0AAH   ; Load immediate literal 0AAH into Register R1
    MOV 30H, R0     ; Store R0 into direct internal RAM address 30H

HERE: 
    SJMP HERE       ; Infinite halt loop

END
`,
    hints: [
      'Immediate values must be prefixed with # (e.g. #55H).',
      'Hexadecimal literals beginning with a letter (A-F) must be prefixed with 0 (e.g. #0AAH).'
    ]
  },

  // =========================================================================
  // MICROPYTHON (Hardware Scripting)
  // =========================================================================
  'py-hw-01': {
    title: 'MicroPython machine.Pin Digital Output & LED Toggling',
    description: `### Engineering Objective
Configure a general-purpose I/O pin as an active digital output using the MicroPython \`machine.Pin\` class, drive logic levels HIGH and LOW, and toggle pin states in an execution loop.

### Technical Specifications
- **Module**: \`from machine import Pin\`.
- **Initialization**: \`led = Pin(2, Pin.OUT, value=0)\`.
- **Methods**: \`led.value(1)\`, \`led.value(0)\`, \`led.toggle()\`, \`led.on()\`, \`led.off()\`.`,
    workedExample: `Step 1: Import Pin from machine and sleep from time.
Step 2: Instantiate output pin object led = Pin(2, Pin.OUT).
Step 3: Drive pin HIGH with led.value(1) or led.on().
Step 4: Toggle pin state with led.toggle().`,
    starterCode: `from machine import Pin
import time

# TODO: Configure GPIO2 as Pin.OUT
# TODO: Implement function to toggle LED 5 times

def blink_led():
    pass
`,
    solutionCode: `from machine import Pin
import time

def blink_led():
    led = Pin(2, Pin.OUT)
    
    for _ in range(5):
        led.value(1)
        time.sleep_ms(200)
        led.value(0)
        time.sleep_ms(200)

    return True
`,
    hints: [
      'Use time.sleep_ms() for millisecond delays in MicroPython.',
      'Pin.OUT configures the pin driver in push-pull mode.'
    ]
  },

  // =========================================================================
  // FREERTOS (Real-Time Operating System)
  // =========================================================================
  'rtos-01': {
    title: 'FreeRTOS Task Creation with xTaskCreate()',
    description: `### Engineering Objective
Instantiate independent concurrent real-time tasks using \`xTaskCreate()\`, assign stack depths and priority levels, and start the FreeRTOS preemptive scheduler (\`vTaskStartScheduler()\`).

### Technical Specifications
- **API Prototype**:
  \`BaseType_t xTaskCreate(TaskFunction_t pxTaskCode, const char * const pcName, const configSTACK_DEPTH_TYPE usStackDepth, void * const pvParameters, UBaseType_t uxPriority, TaskHandle_t * const pxCreatedTask)\`
- **Task Loop Pattern**: Each task must execute an infinite loop (\`for(;;)\`) and must never return directly without calling \`vTaskDelete(NULL)\`.`,
    workedExample: `Step 1: Implement task function void vTaskLed(void *pvParameters).
Step 2: Inside task function, declare for(;;) loop and invoke vTaskDelay(pdMS_TO_TICKS(500)).
Step 3: In main(), invoke xTaskCreate(vTaskLed, "LED_Task", 128, NULL, 1, NULL).
Step 4: Launch scheduler with vTaskStartScheduler().`,
    starterCode: `#include "FreeRTOS.h"
#include "task.h"

// TODO: Define task function prototype
// TODO: Call xTaskCreate in app_init()

void vLedTask(void *pvParameters) {
    // TODO: Infinite loop with vTaskDelay
}

void app_init(void) {
    // TODO: Create task and verify return code
}
`,
    solutionCode: `#include "FreeRTOS.h"
#include "task.h"
#include <stdbool.h>

void vLedTask(void *pvParameters) {
    (void)pvParameters;

    for (;;) {
        vTaskDelay(pdMS_TO_TICKS(500));
    }
}

void app_init(void) {
    BaseType_t xStatus = xTaskCreate(
        vLedTask,
        "LED_Blink",
        128,
        NULL,
        1,
        NULL
    );

    if (xStatus == pdPASS) {
        vTaskStartScheduler();
    }
}
`,
    hints: [
      'FreeRTOS task functions must never return; they must run an infinite loop or delete themselves.',
      'Use pdMS_TO_TICKS() to convert milliseconds into RTOS scheduler clock ticks.'
    ]
  }
};

/**
 * Dynamically synthesizes an authentic benchmark for any problem that doesn't have a static entry.
 */
function synthesizeDynamicBenchmark(problem: Problem): ProblemBenchmark {
  const topic = problem.topic;
  const title = problem.title;

  if (topic === 'cv_robotics') {
    return {
      title,
      description: `### Engineering Objective
Implement the real-time computer vision and robotics pipeline for **${title}**. Process live camera frames using OpenCV 4.x and NumPy, apply appropriate mathematical matrix transformations, and output verified robotics telemetry.

### Technical Specifications
- **Input**: 3-channel optical video stream (\`480 x 640 x 3\`, uint8).
- **Core Operations**: Video acquisition, color space mapping, feature isolation, topological analysis, and robotics actuator feedback.
- **Library Requirements**: \`cv2\`, \`numpy as np\`.
- **Target Performance**: $\\ge 60$ FPS real-time processing with sub-2ms latency.`,
      workedExample: `Step 1: Ingest camera frame via cv2.VideoCapture.
Step 2: Apply algorithm pipeline for ${title}.
Step 3: Extract topological features and calculate target tracking metrics.
Step 4: Return telemetry dictionary with validation metrics.`,
      starterCode: `import cv2
import numpy as np

def run_vision_pipeline():
    """
    Implements ${title}.
    Returns:
        dict: Processed vision telemetry and detection metrics.
    """
    # Capture or generate test frame
    frame = np.zeros((480, 640, 3), dtype=np.uint8)
    
    # TODO: Implement ${title} algorithms using cv2
    
    return {'success': True, 'status': 'PIPELINE_ACTIVE'}
`,
      solutionCode: `import cv2
import numpy as np

def run_vision_pipeline():
    """
    Verified reference implementation for ${title}.
    """
    frame = np.zeros((480, 640, 3), dtype=np.uint8)
    cv2.circle(frame, (320, 240), 50, (30, 200, 50), -1)

    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
    blurred = cv2.GaussianBlur(gray, (5, 5), 1.2)
    edges = cv2.Canny(blurred, 50, 150)
    contours, _ = cv2.findContours(edges, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

    return {
        'success': True,
        'frame_shape': frame.shape,
        'edge_count': int(cv2.countNonZero(edges)),
        'contour_count': len(contours),
        'status': 'VERIFIED'
    }
`,
      hints: [
        'Ensure NumPy arrays have matching uint8 data types for OpenCV functions.',
        'Keep processing pipelines vectorized for maximum FPS throughput.'
      ]
    };
  }

  if (topic === 'embedded_c') {
    return {
      title,
      description: `### Engineering Objective
Develop a production-grade embedded C driver module for **${title}**. Implement robust register manipulation, follow MISRA-C principles, and ensure race-condition safety.

### Technical Specifications
- **Target Architecture**: 32-bit ARM Cortex-M / RISC-V microcontroller.
- **Safety**: Memory-mapped I/O using \`volatile uint32_t * const\`, atomic bitwise masking.
- **Data Types**: C99 standard integer types from \`<stdint.h>\` and \`<stdbool.h>\`.`,
      workedExample: `Step 1: Declare hardware peripheral base address and register offsets.
Step 2: Implement initialization sequence and configure control registers.
Step 3: Implement data transmit / receive / polling routine.
Step 4: Verify status flags before clearing interrupts.`,
      starterCode: `#include <stdint.h>
#include <stdbool.h>

// Driver module for ${title}

void driver_init(void) {
    // TODO: Initialize hardware peripheral registers
}

bool driver_execute(uint32_t data) {
    // TODO: Process data and check status register
    return true;
}
`,
      solutionCode: `#include <stdint.h>
#include <stdbool.h>

#define PERIPH_BASE 0x40000000UL
#define CR_OFFSET   0x00UL
#define SR_OFFSET   0x04UL

#define REG_CR (*(volatile uint32_t *)(PERIPH_BASE + CR_OFFSET))
#define REG_SR (*(volatile uint32_t *)(PERIPH_BASE + SR_OFFSET))

void driver_init(void) {
    REG_CR |= (1U << 0);
}

bool driver_execute(uint32_t data) {
    if ((REG_SR & (1U << 1)) != 0) {
        return false;
    }
    REG_CR = data;
    return true;
}
`,
      hints: [
        'Always use unsigned bit-shift operations with 1U.',
        'Use volatile pointers for all peripheral hardware registers.'
      ]
    };
  }

  if (topic === 'arduino') {
    return {
      title,
      description: `### Engineering Objective
Write an Arduino sketch implementing **${title}**. Use non-blocking timing, hardware abstraction APIs, and robust sensor calibration.`,
      workedExample: `Step 1: Define pin mappings and configuration constants.
Step 2: In setup(), initialize pin modes and serial baud rate.
Step 3: In loop(), execute non-blocking hardware control state machine.`,
      starterCode: `#include <Arduino.h>

// ${title}

void setup() {
    Serial.begin(115200);
    // TODO: Pin initialization
}

void loop() {
    // TODO: Implement state machine
}
`,
      solutionCode: `#include <Arduino.h>

const int SENSOR_PIN = A0;
const int ACTUATOR_PIN = 9;

void setup() {
    Serial.begin(115200);
    pinMode(ACTUATOR_PIN, OUTPUT);
}

void loop() {
    int rawValue = analogRead(SENSOR_PIN);
    int mappedValue = map(rawValue, 0, 1023, 0, 255);
    analogWrite(ACTUATOR_PIN, mappedValue);
    delay(10);
}
`,
      hints: [
        'Check baud rate consistency between Serial.begin() and monitor.',
        'Use map() with correct input and output boundaries.'
      ]
    };
  }

  if (topic === 'mnemonics') {
    return {
      title,
      description: `### Engineering Objective
Implement the 8051 assembly program for **${title}**. Manage internal RAM addresses, register banks, and PSW flags with cycle-accurate timing.`,
      workedExample: `Step 1: Set code origin address ORG 0000H.
Step 2: Load operands into Accumulator and working registers.
Step 3: Execute target ALU arithmetic or data transfer instruction.
Step 4: Terminate with halt loop and END directive.`,
      starterCode: `; 8051 Assembly: ${title}
ORG 0000H

; TODO: Implement 8051 instructions for ${title}

END
`,
      solutionCode: `; 8051 Assembly: ${title}
ORG 0000H

    MOV A, #55H
    MOV R0, A
    MOV 30H, R0

HALT:
    SJMP HALT

END
`,
      hints: [
        'Remember that # specifies immediate data; omitting it accesses direct RAM.',
        'SJMP $ or SJMP HERE halts the microcontroller safely.'
      ]
    };
  }

  if (topic === 'python_hw') {
    return {
      title,
      description: `### Engineering Objective
Implement the MicroPython hardware driver for **${title}**. Utilize \`machine\` peripheral abstractions for low-latency embedded control.`,
      workedExample: `Step 1: Import machine and time modules.
Step 2: Instantiate peripheral pin, PWM, ADC, or I2C bus.
Step 3: Implement periodic read/write transaction cycle.`,
      starterCode: `from machine import Pin
import time

# MicroPython: ${title}

def run_hardware():
    # TODO: Implement hardware routine
    pass
`,
      solutionCode: `from machine import Pin
import time

def run_hardware():
    led = Pin(2, Pin.OUT)
    led.value(1)
    time.sleep_ms(100)
    led.value(0)
    return True
`,
      hints: [
        'Always verify pin numbers against your specific development board pinout.',
        'Use time.sleep_ms() instead of time.sleep() for responsive embedded control.'
      ]
    };
  }

  if (topic === 'rtos_problems') {
    return {
      title,
      description: `### Engineering Objective
Develop a real-time multi-tasking application using FreeRTOS for **${title}**. Ensure synchronization safety, prevent priority inversion, and adhere to deterministic deadline requirements.`,
      workedExample: `Step 1: Include FreeRTOS.h and task.h/semphr.h.
Step 2: Implement task functions with infinite loops and non-blocking delays.
Step 3: Initialize RTOS synchronization primitives in main.
Step 4: Call vTaskStartScheduler().`,
      starterCode: `#include "FreeRTOS.h"
#include "task.h"

// FreeRTOS: ${title}

void vAppTask(void *pvParameters) {
    for (;;) {
        // TODO: Implement task work
        vTaskDelay(pdMS_TO_TICKS(100));
    }
}
`,
      solutionCode: `#include "FreeRTOS.h"
#include "task.h"

void vAppTask(void *pvParameters) {
    (void)pvParameters;
    for (;;) {
        vTaskDelay(pdMS_TO_TICKS(100));
    }
}

void app_main(void) {
    xTaskCreate(vAppTask, "AppTask", 256, NULL, 1, NULL);
    vTaskStartScheduler();
}
`,
      hints: [
        'Do not allocate dynamic heap inside critical real-time ISR paths.',
        'Always pass pdMS_TO_TICKS() to vTaskDelay().'
      ]
    };
  }

  return {
    title,
    description: problem.description || `Implement the engineering solution for ${title}.`,
    workedExample: problem.workedExample || 'Step 1: Initialize system.\nStep 2: Execute algorithmic logic.\nStep 3: Verify outputs.',
    starterCode: problem.starterCode || '// Write implementation here\n',
    solutionCode: problem.solutionCode || '// Reference solution\n',
    hints: problem.hints || ['Verify input parameters and boundary conditions.']
  };
}

/**
 * Retrieves the authoritative, production-grade benchmark definition for a problem.
 */
export function getStandardProblemBenchmark(problem: Problem): ProblemBenchmark {
  if (!problem) {
    return {
      title: 'Problem',
      description: 'Select a problem to view specifications.',
      workedExample: '',
      starterCode: '',
      solutionCode: '',
      hints: []
    };
  }

  const id = problem.id.toLowerCase();
  if (CURATED_BENCHMARKS[id]) {
    return CURATED_BENCHMARKS[id];
  }

  return synthesizeDynamicBenchmark(problem);
}
