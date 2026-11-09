import { QuizQuestion } from '../quizData';

export const ADDITIONAL_SOC_FPGA_TOOLS_QUESTIONS: QuizQuestion[] = [
  {
    "id": "cv-add-01",
    "topicId": "cv_robotics",
    "category": "Filtering & Noise",
    "question": "In computer vision, what is the mathematical function of a 2D Gaussian Blur kernel applied to an image?",
    "options": [
      "Convolves pixel neighborhoods with a 2D Gaussian distribution filter to suppress high-frequency spatial noise and speckles prior to edge detection",
      "Detects straight lines using Hough transforms",
      "Enhances image contrast by histogram stretching",
      "Converts RGB images to HSV color space"
    ],
    "correctAnswer": 0,
    "explanation": "Computer Vision & Robotics: Filtering & Noise. Correct answer option 1 accurately reflects industrial robotics standards."
  },
  {
    "id": "cv-add-02",
    "topicId": "cv_robotics",
    "category": "Canny Edge Detection",
    "question": "What are the four primary algorithmic steps of the Canny Edge Detector?",
    "options": [
      "1) Gaussian smoothing; 2) Intensity gradient magnitude and direction calculation; 3) Non-maximum suppression along gradient; 4) Hysteresis thresholding with dual thresholds",
      "1) Thresholding; 2) Inversion; 3) Dilation; 4) Erosion",
      "1) Fast Fourier Transform; 2) Bandpass filter; 3) Inverse FFT; 4) Normalization",
      "1) Bounding box estimation; 2) Non-maximum suppression; 3) Labeling; 4) Tracking"
    ],
    "correctAnswer": 0,
    "explanation": "Computer Vision & Robotics: Canny Edge Detection. Correct answer option 1 accurately reflects industrial robotics standards."
  },
  {
    "id": "cv-add-03",
    "topicId": "cv_robotics",
    "category": "Binarization",
    "question": "What does the Otsu Thresholding algorithm compute to binarize grayscale images?",
    "options": [
      "Iteratively searches for the threshold that minimizes intra-class variance (equivalent to maximizing inter-class variance between foreground and background pixels)",
      "Computes the mean pixel value of the four image corners",
      "Applies fixed threshold at intensity 128",
      "Calculates the median gradient of the image"
    ],
    "correctAnswer": 0,
    "explanation": "Computer Vision & Robotics: Binarization. Correct answer option 1 accurately reflects industrial robotics standards."
  },
  {
    "id": "cv-add-04",
    "topicId": "cv_robotics",
    "category": "Kinematics",
    "question": "In robotics kinematics, what is the difference between 'Forward Kinematics' (FK) and 'Inverse Kinematics' (IK)?",
    "options": [
      "FK calculates end-effector Cartesian pose $(x, y, z, \\text{roll}, \\text{pitch}, \\text{yaw})$ given joint angles; IK calculates required joint angles given target end-effector Cartesian pose",
      "FK calculates robot speed; IK calculates robot mass",
      "FK is for mobile rovers; IK is for robotic arms",
      "They are identical mathematical problems"
    ],
    "correctAnswer": 0,
    "explanation": "Computer Vision & Robotics: Kinematics. Correct answer option 1 accurately reflects industrial robotics standards."
  },
  {
    "id": "cv-add-05",
    "topicId": "cv_robotics",
    "category": "DH Parameters",
    "question": "What is the role of the Denavit-Hartenberg (DH) convention parameters in robot arm modeling?",
    "options": [
      "Standardizes description of kinematic linkages using four geometric parameters per joint: link length ($a_i$), link twist ($\\alpha_i$), link offset ($d_i$), and joint angle ($\\theta_i$)",
      "Calculates motor electrical resistance",
      "Measures battery capacity",
      "Calibrates camera lens distortion"
    ],
    "correctAnswer": 0,
    "explanation": "Computer Vision & Robotics: DH Parameters. Correct answer option 1 accurately reflects industrial robotics standards."
  },
  {
    "id": "cv-add-06",
    "topicId": "cv_robotics",
    "category": "Camera Calibration",
    "question": "In camera calibration, what are the 'Intrinsic Parameters' of a pinhole camera model?",
    "options": [
      "Focal lengths ($f_x, f_y$), principal point optical center coordinates ($c_x, c_y$), and skew coefficient",
      "Camera 3D position $(X, Y, Z)$ and rotation matrix $(R)$ relative to world frame",
      "Camera shutter speed and ISO gain",
      "Camera lens glass temperature"
    ],
    "correctAnswer": 0,
    "explanation": "Computer Vision & Robotics: Camera Calibration. Correct answer option 1 accurately reflects industrial robotics standards."
  },
  {
    "id": "cv-add-07",
    "topicId": "cv_robotics",
    "category": "Feature Extraction",
    "question": "What does the Hough Transform algorithm detect in edge-detected binary images?",
    "options": [
      "Geometric shapes (straight lines, circles, ellipses) by mapping edge points into parametric voting accumulator space",
      "Shadows caused by overhead lights",
      "Color histograms across color spaces",
      "Camera lens optical focal length"
    ],
    "correctAnswer": 0,
    "explanation": "Computer Vision & Robotics: Feature Extraction. Correct answer option 1 accurately reflects industrial robotics standards."
  },
  {
    "id": "cv-add-08",
    "topicId": "cv_robotics",
    "category": "Visual Odometry",
    "question": "What is 'Visual Odometry' in mobile robotics and autonomous vehicles?",
    "options": [
      "Estimating the robot's real-time position and trajectory by analyzing consecutive camera image frames over time",
      "Measuring wheel rotations using optical encoders",
      "Calculating distance using sonar pingers",
      "Measuring vehicle speed with radar guns"
    ],
    "correctAnswer": 0,
    "explanation": "Computer Vision & Robotics: Visual Odometry. Correct answer option 1 accurately reflects industrial robotics standards."
  },
  {
    "id": "cv-add-09",
    "topicId": "cv_robotics",
    "category": "SLAM Systems",
    "question": "What is SLAM (Simultaneous Localization and Mapping)?",
    "options": [
      "Constructing or updating a map of an unknown environment while simultaneously tracking the robot's location within it using onboard sensor streams",
      "Simulating robot collisions in physics engines",
      "A speed test for servo motors",
      "A robot battery management protocol"
    ],
    "correctAnswer": 0,
    "explanation": "Computer Vision & Robotics: SLAM Systems. Correct answer option 1 accurately reflects industrial robotics standards."
  },
  {
    "id": "cv-add-10",
    "topicId": "cv_robotics",
    "category": "Sensor Fusion",
    "question": "What is the function of an Extended Kalman Filter (EKF) in robot state estimation?",
    "options": [
      "Fuses noisy, non-linear sensor measurements (IMU, wheel odometry, GPS, LiDAR) to maintain an optimal probabilistic state estimate of robot pose and velocity",
      "Filters high-voltage electrical surges on DC motors",
      "Calculates trajectory paths around static obstacles",
      "Controls camera exposure levels"
    ],
    "correctAnswer": 0,
    "explanation": "Computer Vision & Robotics: Sensor Fusion. Correct answer option 1 accurately reflects industrial robotics standards."
  },
  {
    "id": "cv-add-11",
    "topicId": "cv_robotics",
    "category": "OpenCV Formats",
    "question": "In OpenCV, how are color image channels ordered by default in `cv2.imread()`?",
    "options": [
      "BGR (Blue, Green, Red)",
      "RGB (Red, Green, Blue)",
      "CMYK (Cyan, Magenta, Yellow, Black)",
      "HSV (Hue, Saturation, Value)"
    ],
    "correctAnswer": 0,
    "explanation": "Computer Vision & Robotics: OpenCV Formats. Correct answer option 1 accurately reflects industrial robotics standards."
  },
  {
    "id": "cv-add-12",
    "topicId": "cv_robotics",
    "category": "Morphology",
    "question": "What do the morphological operations 'Erosion' and 'Dilation' do on binary images?",
    "options": [
      "Erosion shrinks white foreground boundaries, removing small noise spikes; Dilation expands white boundaries, bridging small gaps and holes",
      "Erosion brightens the image; dilation darkens it",
      "Erosion rotates the image; dilation scales it",
      "They invert the binary image colors"
    ],
    "correctAnswer": 0,
    "explanation": "Computer Vision & Robotics: Morphology. Correct answer option 1 accurately reflects industrial robotics standards."
  },
  {
    "id": "cv-add-13",
    "topicId": "cv_robotics",
    "category": "Corner Detection",
    "question": "What is the purpose of the 'Harris Corner Detector' in feature tracking?",
    "options": [
      "Computes the autocorrelation matrix $M$ of image gradients over a local window; if both eigenvalues are large and positive, a corner is confirmed",
      "Detects rectangular bounding boxes around cars",
      "Finds the center of mass of binary blobs",
      "Measures camera perspective distortion"
    ],
    "correctAnswer": 0,
    "explanation": "Computer Vision & Robotics: Corner Detection. Correct answer option 1 accurately reflects industrial robotics standards."
  },
  {
    "id": "cv-add-14",
    "topicId": "cv_robotics",
    "category": "Feature Descriptors",
    "question": "What is the advantage of the ORB (Oriented FAST and Rotated BRIEF) feature extractor over SIFT/SURF?",
    "options": [
      "ORB is computationally efficient, free of patent licensing restrictions, rotation invariant, and fast enough for real-time robotics on embedded processors",
      "ORB has infinite spatial resolution",
      "ORB works in complete darkness",
      "ORB requires no camera lens"
    ],
    "correctAnswer": 0,
    "explanation": "Computer Vision & Robotics: Feature Descriptors. Correct answer option 1 accurately reflects industrial robotics standards."
  },
  {
    "id": "cv-add-15",
    "topicId": "cv_robotics",
    "category": "Stereo Vision",
    "question": "What is 'Epipolar Geometry' in stereo vision systems?",
    "options": [
      "The geometric relationship between two camera perspectives where 3D world points and camera optical centers form an epipolar plane that constrains corresponding point searches to 1D epipolar lines",
      "A lens grinding technique for fisheye cameras",
      "The geometry of triangular robot chassis",
      "A camera sensor color filter array layout"
    ],
    "correctAnswer": 0,
    "explanation": "Computer Vision & Robotics: Stereo Vision. Correct answer option 1 accurately reflects industrial robotics standards."
  },
  {
    "id": "cv-add-16",
    "topicId": "cv_robotics",
    "category": "Stereo Depth",
    "question": "How is 'Disparity' related to depth ($Z$) in a calibrated rectified stereo camera rig?",
    "options": [
      "Depth is inversely proportional to disparity: $Z = \\frac{f \\cdot B}{d}$ (where $f$ is focal length, $B$ is stereo baseline distance, and $d$ is disparity in pixels)",
      "Depth is directly proportional to disparity squared: $Z = d^2 \\cdot f$",
      "Depth is independent of disparity",
      "Depth equals $f + B + d$"
    ],
    "correctAnswer": 0,
    "explanation": "Computer Vision & Robotics: Stereo Depth. Correct answer option 1 accurately reflects industrial robotics standards."
  },
  {
    "id": "cv-add-17",
    "topicId": "cv_robotics",
    "category": "PID Control",
    "question": "In robotics motion control, what is a PID controller and what do P, I, and D parameters control?",
    "options": [
      "Proportional (present error correction), Integral (accumulated past steady-state error elimination), and Derivative (future error anticipation and damping)",
      "Position, Inertia, Direction",
      "Power, Input, Displacement",
      "Pressure, Intensity, Distance"
    ],
    "correctAnswer": 0,
    "explanation": "Computer Vision & Robotics: PID Control. Correct answer option 1 accurately reflects industrial robotics standards."
  },
  {
    "id": "cv-add-18",
    "topicId": "cv_robotics",
    "category": "Robot Jacobians",
    "question": "What is the 'Jacobian Matrix' in robotic arm differential kinematics?",
    "options": [
      "A matrix of first-order partial derivatives that relates joint velocities $(\\dot{\\theta})$ to end-effector linear and angular Cartesian velocities $(\\dot{x} = J(\\theta) \\cdot \\dot{\\theta})$",
      "A matrix defining motor gear ratios",
      "A matrix of mass moments of inertia",
      "A transformation matrix between camera and hand"
    ],
    "correctAnswer": 0,
    "explanation": "Computer Vision & Robotics: Robot Jacobians. Correct answer option 1 accurately reflects industrial robotics standards."
  },
  {
    "id": "cv-add-19",
    "topicId": "cv_robotics",
    "category": "Singularities",
    "question": "What is a 'Kinematic Singularity' in a robotic manipulator?",
    "options": [
      "A joint configuration where the Jacobian matrix loses rank (determinant equals zero), causing loss of mobility in one or more Cartesian directions and theoretically infinite joint velocities",
      "A broken mechanical gear tooth",
      "A single joint carrying the entire arm weight",
      "The robot operating at maximum payload"
    ],
    "correctAnswer": 0,
    "explanation": "Computer Vision & Robotics: Singularities. Correct answer option 1 accurately reflects industrial robotics standards."
  },
  {
    "id": "cv-add-20",
    "topicId": "cv_robotics",
    "category": "LiDAR Sensors",
    "question": "What is the purpose of LiDAR (Light Detection and Ranging) in autonomous robotics?",
    "options": [
      "Emits pulsed laser beams and measures time-of-flight return to construct high-accuracy 3D spatial point clouds of the surrounding environment",
      "Measures ambient sunlight intensity",
      "Illuminates dark paths for human drivers",
      "Transmits optical data packets to other robots"
    ],
    "correctAnswer": 0,
    "explanation": "Computer Vision & Robotics: LiDAR Sensors. Correct answer option 1 accurately reflects industrial robotics standards."
  },
  {
    "id": "cv-add-21",
    "topicId": "cv_robotics",
    "category": "Grid Mapping",
    "question": "What is an 'Occupancy Grid Map' in mobile robot navigation?",
    "options": [
      "A 2D spatial grid where each cell stores a probability value representing whether that physical space is free, occupied by an obstacle, or unknown",
      "A grid showing occupied parking spaces",
      "A map of robot battery charge distribution",
      "A CAD drawing of the robot PCB"
    ],
    "correctAnswer": 0,
    "explanation": "Computer Vision & Robotics: Grid Mapping. Correct answer option 1 accurately reflects industrial robotics standards."
  },
  {
    "id": "cv-add-22",
    "topicId": "cv_robotics",
    "category": "ROS 2 Architecture",
    "question": "In the Robot Operating System (ROS 2), what is the DDS (Data Distribution Service) middleware layer responsible for?",
    "options": [
      "Provides peer-to-peer, discovery-based publish/subscribe communication between nodes with configurable Quality of Service (QoS) profiles without requiring a central roscore master",
      "Compiles C++ and Python nodes into binaries",
      "Simulates robot physics in Gazebo",
      "Controls brushless motor ESCs"
    ],
    "correctAnswer": 0,
    "explanation": "Computer Vision & Robotics: ROS 2 Architecture. Correct answer option 1 accurately reflects industrial robotics standards."
  },
  {
    "id": "cv-add-23",
    "topicId": "cv_robotics",
    "category": "ROS Coordinate Frames",
    "question": "What does the `tf2` library in ROS/ROS 2 manage?",
    "options": [
      "Tracks coordinate frame transformations (e.g. `base_link` -> `laser_frame` -> `camera_link` -> `map`) over time in a buffered coordinate tree",
      "Controls 2-factor user authentication",
      "Transfers files over FTP",
      "Tests frame rates of USB webcams"
    ],
    "correctAnswer": 0,
    "explanation": "Computer Vision & Robotics: ROS Coordinate Frames. Correct answer option 1 accurately reflects industrial robotics standards."
  },
  {
    "id": "cv-add-24",
    "topicId": "cv_robotics",
    "category": "Path Planning",
    "question": "What is the 'A*' (A-Star) algorithm widely used for in robot global path planning?",
    "options": [
      "A graph search algorithm that finds the shortest obstacle-free path between start and goal nodes using the cost function $f(n) = g(n) + h(n)$ with an admissible heuristic",
      "An algorithm for sorting motor PWM values",
      "A camera autofocus algorithm",
      "An object recognition convolutional network"
    ],
    "correctAnswer": 0,
    "explanation": "Computer Vision & Robotics: Path Planning. Correct answer option 1 accurately reflects industrial robotics standards."
  },
  {
    "id": "cv-add-25",
    "topicId": "cv_robotics",
    "category": "Motion Planning",
    "question": "What is RRT (Rapidly-exploring Random Tree) in high-degree-of-freedom robot motion planning?",
    "options": [
      "A randomized search algorithm that incrementally builds a space-filling tree biased toward unexplored areas of high-dimensional configuration space (C-space)",
      "A real-time radio transceiver protocol",
      "A method for pruning decision trees in ML",
      "A rapid prototyping 3D printing technique"
    ],
    "correctAnswer": 0,
    "explanation": "Computer Vision & Robotics: Motion Planning. Correct answer option 1 accurately reflects industrial robotics standards."
  },
  {
    "id": "cv-add-26",
    "topicId": "cv_robotics",
    "category": "Motor Actuation",
    "question": "What is a Brushless DC (BLDC) motor Electronic Speed Controller (ESC) responsible for?",
    "options": [
      "Electronically commutates power across three motor stator phases using MOSFET/IGBT inverter bridges synchronized to rotor position (via Hall sensors or back-EMF zero-crossing)",
      "Regulates DC battery voltage to 5V",
      "Controls mechanical brake shoes",
      "Measures motor temperature with thermocouples"
    ],
    "correctAnswer": 0,
    "explanation": "Computer Vision & Robotics: Motor Actuation. Correct answer option 1 accurately reflects industrial robotics standards."
  },
  {
    "id": "cv-add-27",
    "topicId": "cv_robotics",
    "category": "Gradient Operators",
    "question": "What is the function of the Sobel operator in image processing?",
    "options": [
      "Applies two 3x3 convolution kernels ($G_x$ and $G_y$) to compute directional spatial gradient approximations, highlighting vertical and horizontal edges",
      "Smooths out image noise",
      "Compresses JPEG files",
      "Inverts image colors"
    ],
    "correctAnswer": 0,
    "explanation": "Computer Vision & Robotics: Gradient Operators. Correct answer option 1 accurately reflects industrial robotics standards."
  },
  {
    "id": "cv-add-28",
    "topicId": "cv_robotics",
    "category": "Homography",
    "question": "What does the Perspective Transform (`cv2.warpPerspective`) accomplish in lane detection pipelines?",
    "options": [
      "Applies a homography matrix to project an angled forward-looking road camera view into a top-down 'bird's-eye view' where parallel lane markings appear parallel",
      "Rotates the image by 90 degrees",
      "Converts color images to black and white",
      "Crops out the vehicle hood"
    ],
    "correctAnswer": 0,
    "explanation": "Computer Vision & Robotics: Homography. Correct answer option 1 accurately reflects industrial robotics standards."
  },
  {
    "id": "cv-add-29",
    "topicId": "cv_robotics",
    "category": "3D Point Clouds",
    "question": "What is the 'Point Cloud Library' (PCL) primarily used for in robotics?",
    "options": [
      "A comprehensive framework of algorithms for 3D point cloud filtering, surface reconstruction, registration (ICP), segmentation, and model fitting (RANSAC)",
      "A library for drawing point-and-click GUIs",
      "A cloud storage driver for remote logs",
      "A library for plotting scatter plots in Python"
    ],
    "correctAnswer": 0,
    "explanation": "Computer Vision & Robotics: 3D Point Clouds. Correct answer option 1 accurately reflects industrial robotics standards."
  },
  {
    "id": "cv-add-30",
    "topicId": "cv_robotics",
    "category": "RANSAC Fitting",
    "question": "What does RANSAC (Random Sample Consensus) accomplish when fitting a plane to 3D LiDAR point clouds?",
    "options": [
      "Iteratively estimates plane model parameters from minimal random subsets of points, identifying inliers while robustly rejecting extreme noise outliers (e.g. wall vs floor segmentation)",
      "Averaging all points in the point cloud",
      "Sorting 3D points by distance",
      "Calculating the volume of bounding boxes"
    ],
    "correctAnswer": 0,
    "explanation": "Computer Vision & Robotics: RANSAC Fitting. Correct answer option 1 accurately reflects industrial robotics standards."
  },
  {
    "id": "soc-add-01",
    "topicId": "soc_design",
    "category": "AMBA AXI4 Architecture",
    "question": "In modern ARM AMBA AXI4 bus protocols, how many independent channels make up the interface?",
    "options": [
      "5 channels: Read Address (AR), Read Data (R), Write Address (AW), Write Data (W), and Write Response (B)",
      "2 channels: Read and Write",
      "3 channels: Address, Data, Control",
      "4 channels: RX, TX, Clock, Reset"
    ],
    "correctAnswer": 0,
    "explanation": "SoC Design: AMBA AXI4 Architecture. Correct answer option 1 accurately reflects industrial SoC architecture standards."
  },
  {
    "id": "soc-add-02",
    "topicId": "soc_design",
    "category": "AXI Protocol Handshake",
    "question": "In AMBA AXI4, why does write transaction require a separate Write Response (B) channel while read does not require a separate Read Response channel?",
    "options": [
      "Read data and read response are transmitted together on the Read Data (R) channel (`RDATA` and `RRESP`); write transactions send data forward and need an explicit return channel for status completion",
      "Write operations do not generate responses",
      "Read operations are synchronous, write operations are asynchronous",
      "The AXI specification considers write responses optional"
    ],
    "correctAnswer": 0,
    "explanation": "SoC Design: AXI Protocol Handshake. Correct answer option 1 accurately reflects industrial SoC architecture standards."
  },
  {
    "id": "soc-add-03",
    "topicId": "soc_design",
    "category": "AXI Handshake Rules",
    "question": "What is the AMBA AXI4 two-way handshake rule governing `VALID` and `READY` signals?",
    "options": [
      "A master asserts `VALID` when data is ready; once asserted, `VALID` must remain high until `READY` is asserted by the slave; the transfer occurs on the rising clock edge where both `VALID` and `READY` are high",
      "`READY` must always precede `VALID`",
      "`VALID` can toggle freely every clock cycle",
      "The slave must assert `READY` within 2 clock cycles"
    ],
    "correctAnswer": 0,
    "explanation": "SoC Design: AXI Handshake Rules. Correct answer option 1 accurately reflects industrial SoC architecture standards."
  },
  {
    "id": "soc-add-04",
    "topicId": "soc_design",
    "category": "AXI4-Lite",
    "question": "What is the primary difference between AXI4 and AXI4-Lite?",
    "options": [
      "AXI4-Lite does not support burst transfers (burst length is fixed at 1 transfer), data width is fixed at 32 or 64 bits, and ID tags are removed, simplifying control register interfaces",
      "AXI4-Lite operates at half the clock frequency",
      "AXI4-Lite is non-synthesizable",
      "AXI4-Lite supports only read operations"
    ],
    "correctAnswer": 0,
    "explanation": "SoC Design: AXI4-Lite. Correct answer option 1 accurately reflects industrial SoC architecture standards."
  },
  {
    "id": "soc-add-05",
    "topicId": "soc_design",
    "category": "Cache Coherency",
    "question": "In multicore SoC architectures, what is 'Cache Coherency' and why is it necessary?",
    "options": [
      "Ensures that all CPU cores and DMA masters observe a consistent, up-to-date view of shared memory when data is duplicated in private L1/L2 caches across different cores",
      "Ensures that all cache memories have the exact same size",
      "Clears cache memory on every clock cycle",
      "Prevents memory fragmentation in DDR DRAM"
    ],
    "correctAnswer": 0,
    "explanation": "SoC Design: Cache Coherency. Correct answer option 1 accurately reflects industrial SoC architecture standards."
  },
  {
    "id": "soc-add-06",
    "topicId": "soc_design",
    "category": "MESI Protocol",
    "question": "What does the MESI (Illinois) cache coherency protocol state acronym stand for?",
    "options": [
      "Modified, Exclusive, Shared, Invalid",
      "Master, Enable, Synchronous, Interrupt",
      "Memory, Execution, Storage, Instruction",
      "Maximum, Minimum, Average, Standard"
    ],
    "correctAnswer": 0,
    "explanation": "SoC Design: MESI Protocol. Correct answer option 1 accurately reflects industrial SoC architecture standards."
  },
  {
    "id": "soc-add-07",
    "topicId": "soc_design",
    "category": "Coherent Interconnects",
    "question": "What is the function of the AMBA AXI Coherency Extensions (ACE) or CHI (Coherent Hub Interface)?",
    "options": [
      "Extends the AXI interface with snoop address, snoop data, and snoop response channels to manage hardware cache coherency across multi-cluster CPU and accelerator cores",
      "Converts AXI packets into Ethernet frames",
      "Encrypts memory transactions using AES",
      "Controls power supply voltages to CPU clusters"
    ],
    "correctAnswer": 0,
    "explanation": "SoC Design: Coherent Interconnects. Correct answer option 1 accurately reflects industrial SoC architecture standards."
  },
  {
    "id": "soc-add-08",
    "topicId": "soc_design",
    "category": "NoC Architecture",
    "question": "What is a 'Network-on-Chip' (NoC) and why is it preferred over monolithic shared crossbars in large modern SoCs (>64 cores)?",
    "options": [
      "Replaces monolithic crossbar buses with a packet-switched routing network (routers, switches, links), providing scalable bandwidth, localized routing, and predictable wire delays across large die areas",
      "Connects chips directly to the internet over Wi-Fi",
      "A cellular modem integrated into the SoC",
      "An optical network operating inside silicon"
    ],
    "correctAnswer": 0,
    "explanation": "SoC Design: NoC Architecture. Correct answer option 1 accurately reflects industrial SoC architecture standards."
  },
  {
    "id": "soc-add-09",
    "topicId": "soc_design",
    "category": "Power Management & DVFS",
    "question": "What is 'Dynamic Voltage and Frequency Scaling' (DVFS) in SoC power management?",
    "options": [
      "Dynamically adjusts the processor supply voltage and operating clock frequency according to workload demands to minimize energy consumption ($P \\propto V^2 f$)",
      "Alters voltage randomly to confuse hackers",
      "Regulates battery charging current",
      "Adjusts I/O pad drive strength"
    ],
    "correctAnswer": 0,
    "explanation": "SoC Design: Power Management & DVFS. Correct answer option 1 accurately reflects industrial SoC architecture standards."
  },
  {
    "id": "soc-add-10",
    "topicId": "soc_design",
    "category": "Power Gating",
    "question": "What is a 'Power Domain' with power gating in modern advanced SoCs?",
    "options": [
      "An isolated physical block of circuitry that can be completely disconnected from the power supply via sleep transistors (header/footer PMOS/NMOS) to eliminate static leakage when idle",
      "A dedicated power generator on the PCB",
      "A battery cell connected to an SoC",
      "A regional regulatory certification"
    ],
    "correctAnswer": 0,
    "explanation": "SoC Design: Power Gating. Correct answer option 1 accurately reflects industrial SoC architecture standards."
  },
  {
    "id": "soc-add-11",
    "topicId": "soc_design",
    "category": "Isolation Cells",
    "question": "What is an 'Isolation Cell' in an SoC multi-voltage/power-domain architecture?",
    "options": [
      "A special standard cell placed on signals crossing from a power-gated domain to an always-on domain, clamping the output to a safe logic 0 or 1 when the source domain is powered down to prevent floating gates",
      "A cell that blocks electromagnetic interference",
      "A cell that isolates analog from digital grounds",
      "An optical coupler cell"
    ],
    "correctAnswer": 0,
    "explanation": "SoC Design: Isolation Cells. Correct answer option 1 accurately reflects industrial SoC architecture standards."
  },
  {
    "id": "soc-add-12",
    "topicId": "soc_design",
    "category": "Level Shifters",
    "question": "What is a 'Level Shifter' cell in SoC physical design?",
    "options": [
      "Translates digital signals crossing between two domains operating at different voltage levels (e.g. 0.75V core logic to 1.8V I/O logic) without introducing signal distortion or crowbar leakage",
      "Shifts binary numbers left or right",
      "Shifts the silicon die physically on the package",
      "Changes clock phase by 90 degrees"
    ],
    "correctAnswer": 0,
    "explanation": "SoC Design: Level Shifters. Correct answer option 1 accurately reflects industrial SoC architecture standards."
  },
  {
    "id": "soc-add-13",
    "topicId": "soc_design",
    "category": "UPF Standards",
    "question": "What is the IEEE 1801 Unified Power Format (UPF) used for in SoC design?",
    "options": [
      "Standardized language specifying power intent (power domains, supply nets, power switches, isolation rules, level shifters, retention strategies) across RTL simulation, synthesis, and physical layout",
      "A format for AC power cords",
      "A specification for battery chemistry",
      "A high-voltage safety standard"
    ],
    "correctAnswer": 0,
    "explanation": "SoC Design: UPF Standards. Correct answer option 1 accurately reflects industrial SoC architecture standards."
  },
  {
    "id": "soc-add-14",
    "topicId": "soc_design",
    "category": "State Retention",
    "question": "What is a 'Retention Flip-Flop' in low-power SoC design?",
    "options": [
      "A flip-flop with a small dedicated always-on secondary shadow latch that retains the flip-flop state during sleep mode, enabling near-instantaneous state restoration when power returns",
      "A flip-flop that retains heat to prevent cold boot issues",
      "A flip-flop that permanently burns fuses",
      "A flip-flop that stores user passwords"
    ],
    "correctAnswer": 0,
    "explanation": "SoC Design: State Retention. Correct answer option 1 accurately reflects industrial SoC architecture standards."
  },
  {
    "id": "soc-add-15",
    "topicId": "soc_design",
    "category": "DDR Memory Controllers",
    "question": "In a DDR4/DDR5 SDRAM memory controller, what is the purpose of 'Row Buffer Management' (Open-Page vs Closed-Page policy)?",
    "options": [
      "Open-page keeps the active row open, providing ultra-fast read/write access (hit) for consecutive memory requests to the same DRAM row; closed-page closes rows immediately, optimizing random access",
      "Sorts rows alphabetically in memory",
      "Compresses row buffer data into flash",
      "Manages DDR memory power states"
    ],
    "correctAnswer": 0,
    "explanation": "SoC Design: DDR Memory Controllers. Correct answer option 1 accurately reflects industrial SoC architecture standards."
  },
  {
    "id": "soc-add-16",
    "topicId": "soc_design",
    "category": "MMU & Virtual Memory",
    "question": "What is the purpose of the 'Memory Management Unit' (MMU) in an application processor SoC (like ARM Cortex-A)?",
    "options": [
      "Translates virtual addresses to physical addresses using Page Tables and Translation Lookaside Buffers (TLB), providing hardware memory isolation between operating system processes",
      "Allocates heap memory for C programs",
      "Controls DDR memory refresh cycles",
      "Protects against electrostatic discharge"
    ],
    "correctAnswer": 0,
    "explanation": "SoC Design: MMU & Virtual Memory. Correct answer option 1 accurately reflects industrial SoC architecture standards."
  },
  {
    "id": "soc-add-17",
    "topicId": "soc_design",
    "category": "TLB Architecture",
    "question": "What is a 'Translation Lookaside Buffer' (TLB) in CPU architecture?",
    "options": [
      "A high-speed associative hardware cache that stores recently used virtual-to-physical address translations, avoiding costly page table walks in main memory on every memory access",
      "A buffer that translates English to machine code",
      "A FIFO buffer for serial packets",
      "A graphics texture buffer"
    ],
    "correctAnswer": 0,
    "explanation": "SoC Design: TLB Architecture. Correct answer option 1 accurately reflects industrial SoC architecture standards."
  },
  {
    "id": "soc-add-18",
    "topicId": "soc_design",
    "category": "CDC Metastability",
    "question": "What is 'Clock Domain Crossing' (CDC) metastability?",
    "options": [
      "When a signal generated in one clock domain is sampled during its transition window by a register in an asynchronous clock domain, violating setup/hold times and causing the flip-flop output to hover unpredictably between logic levels for an indeterminate duration",
      "Two clocks running at identical frequencies",
      "Clock jitter generated by a crystal oscillator",
      "A short circuit between clock trees"
    ],
    "correctAnswer": 0,
    "explanation": "SoC Design: CDC Metastability. Correct answer option 1 accurately reflects industrial SoC architecture standards."
  },
  {
    "id": "soc-add-19",
    "topicId": "soc_design",
    "category": "Metastability MTBF",
    "question": "What is the MTBF (Mean Time Between Failures) formula for a 2-flip-flop synchronizer resolving metastability?",
    "options": [
      "$\\text{MTBF} = \\frac{e^{t_{resolve} / \\tau}}{T_0 \\cdot f_{clk} \\cdot f_{data}}$ (exponentially dependent on resolution time $t_{resolve}$)",
      "$\\text{MTBF} = f_{clk} \\cdot f_{data}$",
      "$\\text{MTBF} = \\frac{1}{t_{setup} + t_{hold}}$",
      "$\\text{MTBF} = \\tau \\cdot 1000$"
    ],
    "correctAnswer": 0,
    "explanation": "SoC Design: Metastability MTBF. Correct answer option 1 accurately reflects industrial SoC architecture standards."
  },
  {
    "id": "soc-add-20",
    "topicId": "soc_design",
    "category": "CDC Synchronizers",
    "question": "What is a 'Handshake Synchronizer' (req/ack) used for in CDC design?",
    "options": [
      "Transfers multi-bit data vectors across asynchronous clock domains safely by asserting a synchronized 1-bit `req` flag after data is stable, and holding data unchanged until a synchronized `ack` flag returns",
      "A hardware handshake between two USB cables",
      "A login handshake between user and server",
      "A calibration routine for analog sensors"
    ],
    "correctAnswer": 0,
    "explanation": "SoC Design: CDC Synchronizers. Correct answer option 1 accurately reflects industrial SoC architecture standards."
  },
  {
    "id": "soc-add-21",
    "topicId": "soc_design",
    "category": "CDC Incoherency",
    "question": "Why is a single 2-FF synchronizer INSUFFICIENT for synchronizing a multi-bit binary bus (e.g. 8-bit counter) across asynchronous clock domains?",
    "options": [
      "Routing skews cause different bits of the bus to arrive at different times; during multi-bit transitions, the destination domain samples an intermediate, invalid hybrid state (bus incoherency)",
      "2-FF synchronizers can only handle 1-volt signals",
      "2-FF synchronizers invert the bits",
      "Binary counters cannot cross clock domains"
    ],
    "correctAnswer": 0,
    "explanation": "SoC Design: CDC Incoherency. Correct answer option 1 accurately reflects industrial SoC architecture standards."
  },
  {
    "id": "soc-add-22",
    "topicId": "soc_design",
    "category": "Clock Tree Synthesis",
    "question": "What is 'Clock Tree Synthesis' (CTS) in physical SoC design?",
    "options": [
      "The physical implementation step where an engineered balanced tree of clock buffers and inverters is placed to distribute the clock signal from the source to thousands of flip-flops with minimal skew and insertion delay",
      "Synthesizing a crystal oscillator model in Verilog",
      "Designing a clock face for smartwatches",
      "Writing timing constraints in SDC"
    ],
    "correctAnswer": 0,
    "explanation": "SoC Design: Clock Tree Synthesis. Correct answer option 1 accurately reflects industrial SoC architecture standards."
  },
  {
    "id": "soc-add-23",
    "topicId": "soc_design",
    "category": "Clock Timing Metrics",
    "question": "What is the difference between 'Clock Skew' and 'Clock Jitter'?",
    "options": [
      "Clock Skew is the spatial difference in arrival time of the same clock edge at two different physical registers; Clock Jitter is the temporal variation of clock period over time at a single physical node",
      "Skew is random; jitter is constant",
      "Skew is measured in GHz; jitter is measured in Volts",
      "They are identical physical phenomena"
    ],
    "correctAnswer": 0,
    "explanation": "SoC Design: Clock Timing Metrics. Correct answer option 1 accurately reflects industrial SoC architecture standards."
  },
  {
    "id": "soc-add-24",
    "topicId": "soc_design",
    "category": "SDC Constraints",
    "question": "What is an 'SDC' (Synopsys Design Constraints) file in the ASIC synthesis and STA flow?",
    "options": [
      "A Tcl-based specification file declaring system clock periods, clock uncertainty, input delays, output delays, false paths, and multicycle paths required for timing closure",
      "A file containing C firmware code",
      "A silicon fabrication order document",
      "A circuit board layout file"
    ],
    "correctAnswer": 0,
    "explanation": "SoC Design: SDC Constraints. Correct answer option 1 accurately reflects industrial SoC architecture standards."
  },
  {
    "id": "soc-add-25",
    "topicId": "soc_design",
    "category": "Timing Constraints",
    "question": "What is a 'False Path' constraint (`set_false_path`) in Static Timing Analysis?",
    "options": [
      "Instructs the STA timing engine to ignore timing checks on designated paths that physically exist in the netlist but can never be sensitized or exercised during functional operation (e.g. static configuration pins or CDC paths)",
      "A broken copper trace on a PCB",
      "A path with negative delay",
      "A software bug in the timing tool"
    ],
    "correctAnswer": 0,
    "explanation": "SoC Design: Timing Constraints. Correct answer option 1 accurately reflects industrial SoC architecture standards."
  },
  {
    "id": "soc-add-26",
    "topicId": "soc_design",
    "category": "Multicycle Paths",
    "question": "What is a 'Multicycle Path' constraint (`set_multicycle_path 2`) in STA?",
    "options": [
      "Informs the timing analysis tool that a specific combinational logic path has been architected to take multiple clock cycles (e.g. 2 cycles) between launch and capture registers, relaxing the setup time requirement",
      "A path that executes twice as fast as normal",
      "A path that loops infinitely",
      "A path crossing between two chips"
    ],
    "correctAnswer": 0,
    "explanation": "SoC Design: Multicycle Paths. Correct answer option 1 accurately reflects industrial SoC architecture standards."
  },
  {
    "id": "soc-add-27",
    "topicId": "soc_design",
    "category": "Power Delivery (PDN)",
    "question": "What is 'IR Drop' in modern high-performance SoC power distribution networks (PDN)?",
    "options": [
      "The electrical voltage drop across the finite resistance ($R$) of the on-chip metal power grid caused by the flow of supply current ($I$), reducing the actual operating voltage delivered to standard cells",
      "A drop in ambient room temperature",
      "Infrared radiation emitted by hot transistors",
      "A failure in the reset circuit"
    ],
    "correctAnswer": 0,
    "explanation": "SoC Design: Power Delivery (PDN). Correct answer option 1 accurately reflects industrial SoC architecture standards."
  },
  {
    "id": "soc-add-28",
    "topicId": "soc_design",
    "category": "Physical Reliability",
    "question": "What is 'Electromigration' analysis in ASIC backend signoff?",
    "options": [
      "Verifying that the current density ($mA/\\mu m^2$) through every metal wire and via in the chip power and signal grid remains below foundry electromigration limits to guarantee 10-year reliability",
      "Tracking how electrons flow into memory cells",
      "Simulating electrical storms on chip packaging",
      "Checking the velocity of electrons in copper"
    ],
    "correctAnswer": 0,
    "explanation": "SoC Design: Physical Reliability. Correct answer option 1 accurately reflects industrial SoC architecture standards."
  },
  {
    "id": "soc-add-29",
    "topicId": "soc_design",
    "category": "DFT Insertion",
    "question": "What is 'Scan Insertion' during the DFT synthesis phase of an SoC?",
    "options": [
      "Replacing standard functional flip-flops with scan flip-flops and threading them into serial scan chains to provide controllability and observability for manufacturing fault testing",
      "Inserting barcode scanners onto the assembly line",
      "Scanning the silicon die for optical defects",
      "Inserting voltage sensors onto power rails"
    ],
    "correctAnswer": 0,
    "explanation": "SoC Design: DFT Insertion. Correct answer option 1 accurately reflects industrial SoC architecture standards."
  },
  {
    "id": "soc-add-30",
    "topicId": "soc_design",
    "category": "Interconnect Fabrics",
    "question": "What is an 'AXI Interconnect' (or Crossbar Switch) in an SoC design?",
    "options": [
      "A routing fabric that arbitrates, decodes addresses, and multiplexes traffic between multiple AXI masters (CPUs, GPUs, DMAs) and multiple AXI slaves (DDR controllers, SRAMs, peripherals) with concurrent read/write transactions",
      "A physical bridge connecting two PCB boards",
      "A software protocol converter",
      "A network switch for Ethernet cables"
    ],
    "correctAnswer": 0,
    "explanation": "SoC Design: Interconnect Fabrics. Correct answer option 1 accurately reflects industrial SoC architecture standards."
  },
  {
    "id": "fpga-add-01",
    "topicId": "fpga",
    "category": "FPGA Architecture",
    "question": "What are the four primary configurable hardware resources inside a modern FPGA fabric (e.g. AMD Xilinx UltraScale+)?",
    "options": [
      "Configurable Logic Blocks (CLBs with 6-input LUTs and Flip-Flops), Block RAMs (BRAM), DSP slices (multipliers/accumulators), and reconfigurable interconnect routing matrices",
      "Microprocessor cores, hard drives, cooling fans, and power supplies",
      "Operational amplifiers, capacitors, inductors, and diodes",
      "Printed circuit tracks, solder pads, plastic headers, and jumpers"
    ],
    "correctAnswer": 0,
    "explanation": "FPGA Architecture: FPGA Architecture. Correct answer option 1 accurately reflects physical FPGA hardware structures."
  },
  {
    "id": "fpga-add-02",
    "topicId": "fpga",
    "category": "LUT Architecture",
    "question": "How many independent boolean inputs can a Xilinx 6-input Look-Up Table (LUT6) evaluate?",
    "options": [
      "Any arbitrary 6-input boolean function, or two arbitrary 5-input boolean functions sharing identical inputs",
      "Up to 64 inputs using analog decoders",
      "Only AND and OR functions with 6 inputs",
      "Exactly 1 input with 6 outputs"
    ],
    "correctAnswer": 0,
    "explanation": "FPGA Architecture: LUT Architecture. Correct answer option 1 accurately reflects physical FPGA hardware structures."
  },
  {
    "id": "fpga-add-03",
    "topicId": "fpga",
    "category": "DSP Slices",
    "question": "What is a 'DSP48 Slice' in Xilinx FPGAs optimized to perform in hardware?",
    "options": [
      "High-speed pipelined Multiply-Accumulate ($P = A \\cdot B + C$) operations at maximum fabric clock frequency (up to 700-800MHz) with built-in pre-adders and pattern detectors",
      "Analog audio filtering",
      "Digital camera image compression",
      "Floating-point division exclusively"
    ],
    "correctAnswer": 0,
    "explanation": "FPGA Architecture: DSP Slices. Correct answer option 1 accurately reflects physical FPGA hardware structures."
  },
  {
    "id": "fpga-add-04",
    "topicId": "fpga",
    "category": "Memory Types",
    "question": "What is 'Block RAM' (BRAM) in an FPGA compared to 'Distributed RAM'?",
    "options": [
      "BRAM consists of dedicated, hard dual-port SRAM blocks (typically 18Kb or 36Kb each); Distributed RAM repurposes the SRAM LUT memory inside CLBs for small, shallow FIFOs and shift registers",
      "BRAM is off-chip DDR memory; Distributed RAM is on-chip",
      "Distributed RAM is read-only; BRAM is read-write",
      "BRAM does not require clock signals"
    ],
    "correctAnswer": 0,
    "explanation": "FPGA Architecture: Memory Types. Correct answer option 1 accurately reflects physical FPGA hardware structures."
  },
  {
    "id": "fpga-add-05",
    "topicId": "fpga",
    "category": "HLS Flow",
    "question": "What is 'High-Level Synthesis' (HLS, e.g. Vitis HLS) in FPGA development?",
    "options": [
      "Compiling algorithmic C, C++, or OpenCL code into cycle-accurate synthesizable Verilog or VHDL RTL, inferring pipelined datapaths, state machines, and interface protocols",
      "Writing Verilog code with high-level comments",
      "Synthesizing FPGAs at high altitude",
      "Compiling Python into machine code"
    ],
    "correctAnswer": 0,
    "explanation": "FPGA Architecture: HLS Flow. Correct answer option 1 accurately reflects physical FPGA hardware structures."
  },
  {
    "id": "fpga-add-06",
    "topicId": "fpga",
    "category": "HLS Directives",
    "question": "What does the HLS directive `#pragma HLS PIPELINE II=1` specify?",
    "options": [
      "Instructs the synthesis engine to schedule the loop/function so that a new transaction or input sample can be accepted on EVERY single clock cycle (Initiation Interval = 1)",
      "Executes the code on two parallel CPU cores",
      "Pipelines the design across 2 clock domains",
      "Reduces clock frequency to 1MHz"
    ],
    "correctAnswer": 0,
    "explanation": "FPGA Architecture: HLS Directives. Correct answer option 1 accurately reflects physical FPGA hardware structures."
  },
  {
    "id": "fpga-add-07",
    "topicId": "fpga",
    "category": "HLS Optimization",
    "question": "What does the HLS directive `#pragma HLS ARRAY_PARTITION` achieve?",
    "options": [
      "Splits a monolithic C array into multiple smaller physical Block RAMs or individual registers, increasing memory ports and enabling parallel data access required for unrolled loops",
      "Deletes unused array elements",
      "Partitions arrays into flash memory",
      "Sorts the array in ascending order"
    ],
    "correctAnswer": 0,
    "explanation": "FPGA Architecture: HLS Optimization. Correct answer option 1 accurately reflects physical FPGA hardware structures."
  },
  {
    "id": "fpga-add-08",
    "topicId": "fpga",
    "category": "FPGA Synthesis",
    "question": "What is a 'Clock Gating' check in FPGA synthesis?",
    "options": [
      "FPGAs generally lack discrete fine-grained clock gating cells; clock gating in RTL is mapped to the native 'Clock Enable' (CE) pin of the CLB flip-flops by the synthesis tool",
      "A check that the clock frequency is under 100MHz",
      "A physical gate that locks the FPGA case",
      "A check for clock jitter"
    ],
    "correctAnswer": 0,
    "explanation": "FPGA Architecture: FPGA Synthesis. Correct answer option 1 accurately reflects physical FPGA hardware structures."
  },
  {
    "id": "fpga-add-09",
    "topicId": "fpga",
    "category": "Clock Routing",
    "question": "What is the function of a 'Dedicated Global Clock Buffer' (e.g. BUFG) in an FPGA?",
    "options": [
      "Distributes the clock signal onto dedicated, low-skew, high-drive global clock routing backbones, ensuring minimal clock skew across the entire physical die",
      "Converts digital square waves into analog sine waves",
      "Buffers UART serial data streams",
      "Generates clock signals from thermal noise"
    ],
    "correctAnswer": 0,
    "explanation": "FPGA Architecture: Clock Routing. Correct answer option 1 accurately reflects physical FPGA hardware structures."
  },
  {
    "id": "fpga-add-10",
    "topicId": "fpga",
    "category": "Clock Synthesis",
    "question": "What is a Mixed-Mode Clock Manager (MMCM) or PLL inside an FPGA?",
    "options": [
      "A dedicated analog/digital macro that performs frequency synthesis (multiplying and dividing clock frequencies) and phase shifting with zero-delay buffer deskewing",
      "A software timer module in Verilog",
      "A tool for managing CPU memory",
      "A mechanical clock generator"
    ],
    "correctAnswer": 0,
    "explanation": "FPGA Architecture: Clock Synthesis. Correct answer option 1 accurately reflects physical FPGA hardware structures."
  },
  {
    "id": "fpga-add-11",
    "topicId": "fpga",
    "category": "SRL Primitives",
    "question": "What is an 'SRL16 / SRL32' (Shift Register LUT) feature in Xilinx FPGAs?",
    "options": [
      "A mode that configures a single 6-input LUT as a 32-bit dynamic serial shift register without consuming any dedicated flip-flops, ideal for delay lines and deep pipeline buffers",
      "A 32-bit floating point multiplier",
      "A specialized serial port transceiver",
      "A 32-bit RISC-V processor core"
    ],
    "correctAnswer": 0,
    "explanation": "FPGA Architecture: SRL Primitives. Correct answer option 1 accurately reflects physical FPGA hardware structures."
  },
  {
    "id": "fpga-add-12",
    "topicId": "fpga",
    "category": "Timing Analysis",
    "question": "What is 'Static Timing Analysis' (STA) Slack in FPGA timing closure reports?",
    "options": [
      "The difference between Required Time and Arrival Time: $\\text{Slack} = T_{required} - T_{arrival}$; positive slack means timing meets requirements, negative slack denotes a timing violation",
      "The percentage of unused LUT resources",
      "The amount of memory allocated on the host PC",
      "The delay caused by thermal heating"
    ],
    "correctAnswer": 0,
    "explanation": "FPGA Architecture: Timing Analysis. Correct answer option 1 accurately reflects physical FPGA hardware structures."
  },
  {
    "id": "fpga-add-13",
    "topicId": "fpga",
    "category": "Setup vs Hold",
    "question": "What is the difference between 'Setup Slack' and 'Hold Slack' in an FPGA timing report?",
    "options": [
      "Setup slack checks that data arrives BEFORE the next clock edge (max delay check); Hold slack checks that data remains stable AFTER the clock edge and does not race ahead (min delay check)",
      "Setup slack is checked at DC; hold slack at AC",
      "Setup slack applies only to inputs; hold slack only to outputs",
      "They are identical numbers with opposite signs"
    ],
    "correctAnswer": 0,
    "explanation": "FPGA Architecture: Setup vs Hold. Correct answer option 1 accurately reflects physical FPGA hardware structures."
  },
  {
    "id": "fpga-add-14",
    "topicId": "fpga",
    "category": "Dynamic Reconfiguration",
    "question": "What is 'Partial Reconfiguration' (Dynamic Function eXchange / DFX) in advanced FPGAs?",
    "options": [
      "The ability to reconfigure a specific designated physical partition of the FPGA fabric while the remainder of the chip continues operating uninterrupted without a system reset",
      "Replacing damaged FPGA chips on a board",
      "Recompiling half of a Verilog file",
      "Updating firmware over serial ports"
    ],
    "correctAnswer": 0,
    "explanation": "FPGA Architecture: Dynamic Reconfiguration. Correct answer option 1 accurately reflects physical FPGA hardware structures."
  },
  {
    "id": "fpga-add-15",
    "topicId": "fpga",
    "category": "SerDes Transceivers",
    "question": "What is a High-Speed Multi-Gigabit Transceiver (e.g. GTY / GTH) on an FPGA?",
    "options": [
      "Hardened analog/digital SerDes PHY blocks supporting serial data rates from 1Gbps up to 32-112Gbps per channel for protocols like PCIe Gen4/Gen5, 100G/400G Ethernet, and JESD204B",
      "A radio antenna built into the chip",
      "A high-power audio output stage",
      "A parallel 64-bit bus interface"
    ],
    "correctAnswer": 0,
    "explanation": "FPGA Architecture: SerDes Transceivers. Correct answer option 1 accurately reflects physical FPGA hardware structures."
  },
  {
    "id": "fpga-add-16",
    "topicId": "fpga",
    "category": "SerDes Architecture",
    "question": "What is the primary role of a Phase-Locked Loop (PLL) in high-speed SerDes transceivers?",
    "options": [
      "Multiplies a clean low-frequency reference clock (e.g. 156.25MHz) up to microwave bit-rate clock frequencies (e.g. 10.3125GHz or 25.78125GHz) for serialization and clock-data recovery (CDR)",
      "Regulates power supply voltage",
      "Decodes video frames",
      "Filters noise from cooling fans"
    ],
    "correctAnswer": 0,
    "explanation": "FPGA Architecture: SerDes Architecture. Correct answer option 1 accurately reflects physical FPGA hardware structures."
  },
  {
    "id": "fpga-add-17",
    "topicId": "fpga",
    "category": "Hardware Debugging",
    "question": "What is an 'Integrated Logic Analyzer' (ILA, e.g. Vivado ILA / ChipScope)?",
    "options": [
      "An on-chip debug IP core instantiated into the design that samples internal FPGA signals at full clock speed into Block RAM and uploads waveforms to the host PC via JTAG",
      "A physical oscilloscope probe needle",
      "A software simulator running on the PC",
      "A logic gate tester machine"
    ],
    "correctAnswer": 0,
    "explanation": "FPGA Architecture: Hardware Debugging. Correct answer option 1 accurately reflects physical FPGA hardware structures."
  },
  {
    "id": "fpga-add-18",
    "topicId": "fpga",
    "category": "Asynchronous Inputs",
    "question": "What is 'Meta-stability' in an FPGA asynchronous input pin?",
    "options": [
      "When an external asynchronous input transitions simultaneously with the internal clock edge, violating setup/hold times and causing the input flip-flop to oscillate between 0 and 1 before settling",
      "A state where the FPGA enters sleep mode",
      "A short circuit between two I/O banks",
      "A memory corruption in configuration SRAM"
    ],
    "correctAnswer": 0,
    "explanation": "FPGA Architecture: Asynchronous Inputs. Correct answer option 1 accurately reflects physical FPGA hardware structures."
  },
  {
    "id": "fpga-add-19",
    "topicId": "fpga",
    "category": "CDC Synchronizers",
    "question": "What is the standard engineering fix for an asynchronous single-bit input signal entering an FPGA?",
    "options": [
      "Pass the signal through a 2-stage (or 3-stage) cascading D-flip-flop synchronizer clocked by the destination clock domain before using it in logic",
      "Place an external 100kΩ resistor in series",
      "Lower the clock frequency to 1Hz",
      "Use an inverter gate"
    ],
    "correctAnswer": 0,
    "explanation": "FPGA Architecture: CDC Synchronizers. Correct answer option 1 accurately reflects physical FPGA hardware structures."
  },
  {
    "id": "fpga-add-20",
    "topicId": "fpga",
    "category": "I/O Banking",
    "question": "What is an 'I/O Bank' in an FPGA and why do banks have independent $V_{CCO}$ power pins?",
    "options": [
      "Groups physical I/O pins together, allowing each bank to be powered at a different I/O voltage standard (e.g. Bank 1 at 1.8V for DDR, Bank 2 at 3.3V for legacy sensors) independently",
      "A bank storing cryptocurrency",
      "A memory bank for DSP algorithms",
      "A backup power supply bank"
    ],
    "correctAnswer": 0,
    "explanation": "FPGA Architecture: I/O Banking. Correct answer option 1 accurately reflects physical FPGA hardware structures."
  },
  {
    "id": "fpga-add-21",
    "topicId": "fpga",
    "category": "FPGA CAD Flow",
    "question": "What does 'Place and Route' (PAR) accomplish in the FPGA compilation CAD flow?",
    "options": [
      "Places netlist logic elements (LUTs, Flops, BRAMs) onto exact physical coordinate locations on the silicon die, and routes metal interconnect wires through programmable switch boxes to connect them",
      "Compiles C code into Verilog",
      "Writes the bitstream onto an external SD card",
      "Tests the board for solder shorts"
    ],
    "correctAnswer": 0,
    "explanation": "FPGA Architecture: FPGA CAD Flow. Correct answer option 1 accurately reflects physical FPGA hardware structures."
  },
  {
    "id": "fpga-add-22",
    "topicId": "fpga",
    "category": "Bitstreams",
    "question": "What is a 'Bitstream' file (`.bit` or `.bin`) in FPGA development?",
    "options": [
      "The final compiled binary configuration file that programs the millions of static SRAM configuration bits, routing multiplexers, and look-up tables inside the FPGA at power-up",
      "A file listing code comments",
      "An audio sound file",
      "A schematic layout diagram"
    ],
    "correctAnswer": 0,
    "explanation": "FPGA Architecture: Bitstreams. Correct answer option 1 accurately reflects physical FPGA hardware structures."
  },
  {
    "id": "fpga-add-23",
    "topicId": "fpga",
    "category": "FPGA Technologies",
    "question": "What is the difference between an SRAM-based FPGA (Xilinx, Intel) and a Flash-based FPGA (Microchip PolarFire)?",
    "options": [
      "SRAM FPGAs are volatile and require an external SPI flash to reload their bitstream on every power-up; Flash FPGAs store their configuration in non-volatile flash cells on-chip, offering instant-on operation and immunity to radiation single-event upsets",
      "Flash FPGAs cannot be reprogrammed",
      "SRAM FPGAs operate without power",
      "There is no functional difference"
    ],
    "correctAnswer": 0,
    "explanation": "FPGA Architecture: FPGA Technologies. Correct answer option 1 accurately reflects physical FPGA hardware structures."
  },
  {
    "id": "fpga-add-24",
    "topicId": "fpga",
    "category": "Radiation & SEU",
    "question": "What is a 'Single Event Upset' (SEU) in aerospace FPGA applications?",
    "options": [
      "A cosmic ray or high-energy neutron strikes a configuration SRAM cell, flipping its stored bit from 0 to 1 and unintentionally altering the functional hardware circuit",
      "A single user pressing the reset button",
      "A single-cycle power outage",
      "An error in the C++ testbench"
    ],
    "correctAnswer": 0,
    "explanation": "FPGA Architecture: Radiation & SEU. Correct answer option 1 accurately reflects physical FPGA hardware structures."
  },
  {
    "id": "fpga-add-25",
    "topicId": "fpga",
    "category": "TMR Redundancy",
    "question": "How is Triple Modular Redundancy (TMR) implemented to mitigate SEU errors in mission-critical FPGAs?",
    "options": [
      "Triplicates the critical hardware logic into three parallel independent instances and uses a majority voting circuit to select the 2-out-of-3 matching output, masking any single failure",
      "Runs the clock three times faster",
      "Stores three copies of the bitstream on an SD card",
      "Uses three power supplies in parallel"
    ],
    "correctAnswer": 0,
    "explanation": "FPGA Architecture: TMR Redundancy. Correct answer option 1 accurately reflects physical FPGA hardware structures."
  },
  {
    "id": "fpga-add-26",
    "topicId": "fpga",
    "category": "LVDS Signaling",
    "question": "What is a 'Differential I/O Standard' (e.g. LVDS - Low Voltage Differential Signaling) on FPGA pins?",
    "options": [
      "Uses two complementary wires ($P$ and $N$) carrying equal and opposite voltage swings (350mV), rejecting common-mode electromagnetic noise and allowing data rates exceeding 1 Gbps per pin pair",
      "Uses one wire for power and one for ground",
      "Transmits digital signals as audio tones",
      "Measures battery differential voltage"
    ],
    "correctAnswer": 0,
    "explanation": "FPGA Architecture: LVDS Signaling. Correct answer option 1 accurately reflects physical FPGA hardware structures."
  },
  {
    "id": "fpga-add-27",
    "topicId": "fpga",
    "category": "DDR Primitives",
    "question": "What is the purpose of an 'ODDR' (Output Double Data Rate) primitive in FPGA I/O architectures?",
    "options": [
      "Drives data onto output pins on BOTH the rising edge and falling edge of the clock (DDR transmission), doubling data throughput without increasing clock frequency",
      "Overclocks the output pin by 2x voltage",
      "Converts serial data to parallel",
      "Buffers clock signals internally"
    ],
    "correctAnswer": 0,
    "explanation": "FPGA Architecture: DDR Primitives. Correct answer option 1 accurately reflects physical FPGA hardware structures."
  },
  {
    "id": "fpga-add-28",
    "topicId": "fpga",
    "category": "Hard Carry Logic",
    "question": "What is a 'Carry Chain' (e.g. CARRY4 / CARRY8) hard macro in FPGA logic slices?",
    "options": [
      "Fast dedicated lookahead carry logic and routing connecting adjacent CLB slices vertically, allowing addition and subtraction to execute far faster than routing carry bits through general-purpose LUTs",
      "A chain of flip-flops used for scan testing",
      "A physical chain securing the FPGA server",
      "A daisy-chained SPI bus interface"
    ],
    "correctAnswer": 0,
    "explanation": "FPGA Architecture: Hard Carry Logic. Correct answer option 1 accurately reflects physical FPGA hardware structures."
  },
  {
    "id": "fpga-add-29",
    "topicId": "fpga",
    "category": "Resource Utilization",
    "question": "What does the FPGA synthesis term 'Resource Utilization' refer to?",
    "options": [
      "The percentage of total available physical hardware resources (LUTs, FFs, BRAMs, DSPs, I/O pins) consumed by the compiled design relative to the chip's total silicon capacity",
      "The percentage of time the FPGA is powered on",
      "The amount of CPU usage on the developer PC",
      "The bandwidth consumed over PCIe"
    ],
    "correctAnswer": 0,
    "explanation": "FPGA Architecture: Resource Utilization. Correct answer option 1 accurately reflects physical FPGA hardware structures."
  },
  {
    "id": "fpga-add-30",
    "topicId": "fpga",
    "category": "SoC Interconnects",
    "question": "What is an 'AXI SmartConnect' IP core in Xilinx Vivado SoC designs?",
    "options": [
      "A high-performance interconnect IP that converts between different AXI protocols, data widths (e.g. 512-bit to 32-bit), clock domains, and burst modes with pipelined routing",
      "A smart Wi-Fi connector for FPGAs",
      "A tool for auto-generating C code",
      "A power cable for FPGA boards"
    ],
    "correctAnswer": 0,
    "explanation": "FPGA Architecture: SoC Interconnects. Correct answer option 1 accurately reflects physical FPGA hardware structures."
  },
  {
    "id": "lin-add-01",
    "topicId": "linux",
    "category": "Device Tree",
    "question": "In embedded Linux, what is the 'Device Tree' (`.dts` source, `.dtb` binary blob) responsible for?",
    "options": [
      "Provides a hardware description data structure passed to the Linux kernel at boot time describing non-discoverable memory-mapped peripherals, pinmuxing, interrupts, and clocks",
      "A graphical tree showing filesystem folders",
      "A device driver for USB flash drives",
      "A tree showing Linux user permissions"
    ],
    "correctAnswer": 0,
    "explanation": "Embedded Linux: Device Tree. Correct answer option 1 accurately reflects operating system and kernel driver architecture."
  },
  {
    "id": "lin-add-02",
    "topicId": "linux",
    "category": "U-Boot Bootloader",
    "question": "What is the primary role of the U-Boot (Universal Boot Loader) in an embedded Linux board?",
    "options": [
      "Initializes minimal hardware (DRAM, clocks, storage), loads the Linux kernel image and Device Tree blob from storage (eMMC, NAND, network) into RAM, and jumps to the kernel entry point",
      "Acts as the graphical desktop window manager",
      "Compiles Linux applications on the board",
      "Controls the audio volume"
    ],
    "correctAnswer": 0,
    "explanation": "Embedded Linux: U-Boot Bootloader. Correct answer option 1 accurately reflects operating system and kernel driver architecture."
  },
  {
    "id": "lin-add-03",
    "topicId": "linux",
    "category": "Device Drivers",
    "question": "In the Linux kernel, what is the difference between a 'Char Device' and a 'Block Device'?",
    "options": [
      "Char devices stream unstructured bytes sequentially (e.g. UART, keyboard, raw sensor) without caching; Block devices transfer fixed-size blocks (e.g. 512B/4KB sectors) and support random access via the OS page cache (e.g. eMMC, NVMe)",
      "Char devices store text; block devices store numbers",
      "Char devices are read-only",
      "There is no difference in Linux"
    ],
    "correctAnswer": 0,
    "explanation": "Embedded Linux: Device Drivers. Correct answer option 1 accurately reflects operating system and kernel driver architecture."
  },
  {
    "id": "lin-add-04",
    "topicId": "linux",
    "category": "Kernel Modules",
    "question": "What does the Linux command `insmod` do compared to `modprobe`?",
    "options": [
      "`insmod` inserts a specific `.ko` kernel module file from an exact path without resolving dependencies; `modprobe` searches module directories and automatically loads all required prerequisite dependency modules",
      "`insmod` deletes modules; `modprobe` installs them",
      "`insmod` is for user applications; `modprobe` is for kernel code",
      "`insmod` compiles modules from source"
    ],
    "correctAnswer": 0,
    "explanation": "Embedded Linux: Kernel Modules. Correct answer option 1 accurately reflects operating system and kernel driver architecture."
  },
  {
    "id": "lin-add-05",
    "topicId": "linux",
    "category": "Virtual Filesystems",
    "question": "What is the purpose of the `/proc` virtual filesystem in Linux?",
    "options": [
      "A pseudo-filesystem residing purely in kernel RAM that exposes real-time runtime kernel information, system statistics (CPU, memory, interrupts), and process states as text files",
      "Stores temporary files deleted on reboot",
      "Contains user application programs",
      "Is an encrypted disk partition"
    ],
    "correctAnswer": 0,
    "explanation": "Embedded Linux: Virtual Filesystems. Correct answer option 1 accurately reflects operating system and kernel driver architecture."
  },
  {
    "id": "lin-add-06",
    "topicId": "linux",
    "category": "Sysfs & Device Model",
    "question": "What is the purpose of the `/sys` (sysfs) virtual filesystem in Linux?",
    "options": [
      "A structured hierarchical representation of all hardware devices, busses, drivers, and power states managed by the unified Linux device model",
      "Stores system passwords",
      "Contains Linux source code",
      "Holds system log files"
    ],
    "correctAnswer": 0,
    "explanation": "Embedded Linux: Sysfs & Device Model. Correct answer option 1 accurately reflects operating system and kernel driver architecture."
  },
  {
    "id": "lin-add-07",
    "topicId": "linux",
    "category": "BusyBox & RootFS",
    "question": "In embedded Linux systems, what does BusyBox provide?",
    "options": [
      "A single compact executable combining lightweight implementations of dozens of standard Unix command-line utilities (sh, ls, cp, grep, vi, etc.), vastly minimizing root filesystem size",
      "A graphical web browser for Linux",
      "An automated PCB router",
      "A hardware stress-testing tool"
    ],
    "correctAnswer": 0,
    "explanation": "Embedded Linux: BusyBox & RootFS. Correct answer option 1 accurately reflects operating system and kernel driver architecture."
  },
  {
    "id": "lin-add-08",
    "topicId": "linux",
    "category": "Initramfs",
    "question": "What is the function of an 'Initramfs' (Initial RAM Filesystem) in Linux boot sequence?",
    "options": [
      "A small, root filesystem image loaded into RAM by the bootloader that the kernel executes first to run user-space drivers and scripts necessary to locate and mount the real root filesystem",
      "A permanent storage partition on eMMC",
      "A tool for formatting hard drives",
      "A memory test diagnostic utility"
    ],
    "correctAnswer": 0,
    "explanation": "Embedded Linux: Initramfs. Correct answer option 1 accurately reflects operating system and kernel driver architecture."
  },
  {
    "id": "lin-add-09",
    "topicId": "linux",
    "category": "Kernel Interrupts",
    "question": "What is the difference between an interrupt 'Top Half' and 'Bottom Half' (tasklets, workqueues) in Linux device drivers?",
    "options": [
      "Top half executes immediately with interrupts disabled to service critical hardware flags quickly; Bottom half runs deferred processing asynchronously with interrupts re-enabled to prevent starving the system",
      "Top half is for high-priority cores; bottom half is for low-priority cores",
      "Top half runs in user space; bottom half runs in kernel space",
      "There is no distinction in Linux"
    ],
    "correctAnswer": 0,
    "explanation": "Embedded Linux: Kernel Interrupts. Correct answer option 1 accurately reflects operating system and kernel driver architecture."
  },
  {
    "id": "lin-add-10",
    "topicId": "linux",
    "category": "Bottom Halves",
    "question": "What is the difference between a Linux 'Tasklet' and a 'Workqueue' in bottom-half processing?",
    "options": [
      "Tasklets execute in softirq (atomic) context and CANNOT sleep or block; Workqueues execute in kernel thread context and CAN sleep, block, and allocate memory",
      "Tasklets run on multi-core; workqueues run on single core",
      "Workqueues are strictly for networking",
      "Tasklets run in user space"
    ],
    "correctAnswer": 0,
    "explanation": "Embedded Linux: Bottom Halves. Correct answer option 1 accurately reflects operating system and kernel driver architecture."
  },
  {
    "id": "lin-add-11",
    "topicId": "linux",
    "category": "Kernel Diagnostics",
    "question": "What does the Linux command `dmesg` display?",
    "options": [
      "The kernel ring buffer log containing hardware boot messages, peripheral driver initialization logs, and kernel error traces",
      "The user's email messages",
      "The list of installed Debian packages",
      "The disk partition table"
    ],
    "correctAnswer": 0,
    "explanation": "Embedded Linux: Kernel Diagnostics. Correct answer option 1 accurately reflects operating system and kernel driver architecture."
  },
  {
    "id": "lin-add-12",
    "topicId": "linux",
    "category": "Kernel Locking",
    "question": "What is a 'Spinlock' in Linux kernel driver synchronization?",
    "options": [
      "A low-overhead, busy-wait lock for short critical sections; the waiting CPU loops ('spins') until the lock is released; cannot sleep and safe inside interrupt handlers",
      "A lock that spins the hard drive",
      "A mutex that sleeps when contended",
      "A lock for user-space threads only"
    ],
    "correctAnswer": 0,
    "explanation": "Embedded Linux: Kernel Locking. Correct answer option 1 accurately reflects operating system and kernel driver architecture."
  },
  {
    "id": "lin-add-13",
    "topicId": "linux",
    "category": "Atomic Context Rules",
    "question": "Why is a `mutex` or `semaphore` forbidden inside an atomic context (such as an interrupt handler) in Linux?",
    "options": [
      "Mutexes can put the calling process to sleep (suspend); interrupt contexts have no process thread to sleep or be rescheduled, causing an immediate kernel panic crash",
      "Mutexes require floating-point calculations",
      "Interrupts have no access to memory",
      "Mutexes are user-space constructs only"
    ],
    "correctAnswer": 0,
    "explanation": "Embedded Linux: Atomic Context Rules. Correct answer option 1 accurately reflects operating system and kernel driver architecture."
  },
  {
    "id": "lin-add-14",
    "topicId": "linux",
    "category": "Kernel Memory Access",
    "question": "What is the function of the Linux `copy_from_user()` and `copy_to_user()` functions in device drivers?",
    "options": [
      "Safely copies data between user space virtual address buffers and kernel space memory, validating pointer addresses to prevent segmentation faults and kernel privilege escalation exploits",
      "Copies files from PC to embedded board over SSH",
      "Duplicates files on the hard drive",
      "Transfers data over Bluetooth"
    ],
    "correctAnswer": 0,
    "explanation": "Embedded Linux: Kernel Memory Access. Correct answer option 1 accurately reflects operating system and kernel driver architecture."
  },
  {
    "id": "lin-add-15",
    "topicId": "linux",
    "category": "Linux Audio",
    "question": "In embedded Linux audio systems, what does ALSA stand for?",
    "options": [
      "Advanced Linux Sound Architecture",
      "Automated Linear Software Architecture",
      "Analog Logic Sound Algorithm",
      "Audio Low-latency Signal Accelerator"
    ],
    "correctAnswer": 0,
    "explanation": "Embedded Linux: Linux Audio. Correct answer option 1 accurately reflects operating system and kernel driver architecture."
  },
  {
    "id": "lin-add-16",
    "topicId": "linux",
    "category": "Real-Time Linux",
    "question": "What is the purpose of the 'PREEMPT_RT' real-time patch for the Linux kernel?",
    "options": [
      "Converts the standard monolithic Linux kernel into a hard real-time operating system by making in-kernel lock sections preemptible and converting interrupt handlers into priority-scheduled threads",
      "Accelerates Linux boot time to 1 millisecond",
      "Preempts user applications when memory is low",
      "Enables real-time 3D gaming on Linux"
    ],
    "correctAnswer": 0,
    "explanation": "Embedded Linux: Real-Time Linux. Correct answer option 1 accurately reflects operating system and kernel driver architecture."
  },
  {
    "id": "lin-add-17",
    "topicId": "linux",
    "category": "Yocto & Buildroot",
    "question": "What is the Yocto Project / OpenEmbedded build framework used for?",
    "options": [
      "An open-source collaborative project that generates custom, fully tailored embedded Linux distributions, cross-toolchains, and Board Support Packages (BSPs) from declarative recipe files (.bb)",
      "A package manager for desktop Ubuntu",
      "An IDE for writing Python code",
      "A cloud deployment tool like Docker"
    ],
    "correctAnswer": 0,
    "explanation": "Embedded Linux: Yocto & Buildroot. Correct answer option 1 accurately reflects operating system and kernel driver architecture."
  },
  {
    "id": "lin-add-18",
    "topicId": "linux",
    "category": "Buildroot",
    "question": "What is Buildroot compared to Yocto in embedded Linux development?",
    "options": [
      "A simpler, faster alternative to Yocto that uses a Kconfig-based menu interface to cross-compile a minimal Linux kernel and BusyBox root filesystem for embedded boards",
      "A tool for building physical enclosures",
      "A cloud Kubernetes cluster manager",
      "A package manager for Android"
    ],
    "correctAnswer": 0,
    "explanation": "Embedded Linux: Buildroot. Correct answer option 1 accurately reflects operating system and kernel driver architecture."
  },
  {
    "id": "lin-add-19",
    "topicId": "linux",
    "category": "Kernel Errors",
    "question": "What is a 'Kernel Panic' in Linux?",
    "options": [
      "An unrecoverable fatal internal kernel error (such as a hardware fault, invalid memory dereference in kernel space, or missing init process) that causes the kernel to halt execution safely",
      "A user typing a wrong password 3 times",
      "A high CPU usage notification",
      "A network link disconnect"
    ],
    "correctAnswer": 0,
    "explanation": "Embedded Linux: Kernel Errors. Correct answer option 1 accurately reflects operating system and kernel driver architecture."
  },
  {
    "id": "lin-add-20",
    "topicId": "linux",
    "category": "Linux Debugging",
    "question": "What does the `strace` utility do when debugging a Linux application?",
    "options": [
      "Monitors and intercepts all system calls (e.g. `open`, `read`, `ioctl`) made by an application and signals received, displaying them with arguments and return codes",
      "Traces electrical tracks on PCB boards",
      "Traces network IP routes across the globe",
      "Decompiles binary files into C source code"
    ],
    "correctAnswer": 0,
    "explanation": "Embedded Linux: Linux Debugging. Correct answer option 1 accurately reflects operating system and kernel driver architecture."
  },
  {
    "id": "lin-add-21",
    "topicId": "linux",
    "category": "Memory Profiling",
    "question": "What is the purpose of `valgrind` in Linux software development?",
    "options": [
      "A memory debugging and profiling tool suite that detects memory leaks, invalid pointer memory dereferences, and use-after-free bugs in C/C++ applications",
      "A firewall utility",
      "A compiler for ARM architecture",
      "A disk encryption tool"
    ],
    "correctAnswer": 0,
    "explanation": "Embedded Linux: Memory Profiling. Correct answer option 1 accurately reflects operating system and kernel driver architecture."
  },
  {
    "id": "lin-add-22",
    "topicId": "linux",
    "category": "Systemd Services",
    "question": "What does the Linux command `systemctl` control?",
    "options": [
      "Manages the systemd system and service manager, controlling background daemons, system targets, startup units, and logging services",
      "Controls the CPU fan speed",
      "Adjusts the system clock frequency",
      "Controls system RAM allocation"
    ],
    "correctAnswer": 0,
    "explanation": "Embedded Linux: Systemd Services. Correct answer option 1 accurately reflects operating system and kernel driver architecture."
  },
  {
    "id": "lin-add-23",
    "topicId": "linux",
    "category": "Process Management",
    "question": "What is a 'Zombie Process' (`defunct`) in Linux?",
    "options": [
      "A process that has completed execution but still has an entry in the process table because its parent process has not yet read its exit status via `wait()` / `waitpid()`",
      "A process that has been infected by malware",
      "A process running on multiple cores simultaneously",
      "A background daemon that never sleeps"
    ],
    "correctAnswer": 0,
    "explanation": "Embedded Linux: Process Management. Correct answer option 1 accurately reflects operating system and kernel driver architecture."
  },
  {
    "id": "lin-add-24",
    "topicId": "linux",
    "category": "OOM Killer",
    "question": "What is the function of the `OOM Killer` (Out-Of-Memory Killer) in Linux?",
    "options": [
      "When the system completely exhausts physical RAM and swap space, the OOM Killer scores processes and terminates the highest badness process (e.g. memory hogs) to prevent the kernel from crashing",
      "Kills old background processes after 24 hours",
      "Deletes temporary files from disk",
      "Kills processes with high CPU usage"
    ],
    "correctAnswer": 0,
    "explanation": "Embedded Linux: OOM Killer. Correct answer option 1 accurately reflects operating system and kernel driver architecture."
  },
  {
    "id": "lin-add-25",
    "topicId": "linux",
    "category": "Network Tools",
    "question": "What does the `ethtool` utility configure in embedded Linux networking?",
    "options": [
      "Queries and controls Ethernet network interface controller (NIC) hardware parameters (speed, duplex, auto-negotiation, ring buffer sizes, and wake-on-LAN)",
      "Monitors Ethernet cable color",
      "Sets Wi-Fi passwords",
      "Generates synthetic network traffic"
    ],
    "correctAnswer": 0,
    "explanation": "Embedded Linux: Network Tools. Correct answer option 1 accurately reflects operating system and kernel driver architecture."
  },
  {
    "id": "lin-add-26",
    "topicId": "linux",
    "category": "Kernel Build",
    "question": "What is 'Kbuild' in the Linux kernel source tree?",
    "options": [
      "The Makefile infrastructure that compiles the Linux kernel and its modular drivers, supporting configuration via `make menuconfig` and `.config`",
      "A build tool for Kubernetes",
      "A compiler developed by Google",
      "A flash programming utility"
    ],
    "correctAnswer": 0,
    "explanation": "Embedded Linux: Kernel Build. Correct answer option 1 accurately reflects operating system and kernel driver architecture."
  },
  {
    "id": "lin-add-27",
    "topicId": "linux",
    "category": "Random Devices",
    "question": "What is the purpose of the Linux `/dev/urandom` device?",
    "options": [
      "A cryptographically secure pseudo-random number generator device file fed by the kernel entropy pool (hardware interrupt timings, thermal noise)",
      "A device that generates random errors for testing",
      "A memory test file",
      "A storage device for user passwords"
    ],
    "correctAnswer": 0,
    "explanation": "Embedded Linux: Random Devices. Correct answer option 1 accurately reflects operating system and kernel driver architecture."
  },
  {
    "id": "lin-add-28",
    "topicId": "linux",
    "category": "Ioctl Mechanism",
    "question": "What is an `ioctl` (Input/Output Control) system call in Linux?",
    "options": [
      "A versatile system call allowing user-space applications to invoke device-specific control commands and transfer structured configuration packets to underlying hardware device drivers",
      "An interrupt handler function",
      "A tool for formatting hard disks",
      "A network routing protocol"
    ],
    "correctAnswer": 0,
    "explanation": "Embedded Linux: Ioctl Mechanism. Correct answer option 1 accurately reflects operating system and kernel driver architecture."
  },
  {
    "id": "lin-add-29",
    "topicId": "linux",
    "category": "System Info",
    "question": "What does the command `uname -a` output on a Linux system?",
    "options": [
      "Complete system architecture, kernel version, hostname, build timestamp, and operating system release details",
      "User account usernames",
      "Network IP addresses",
      "Hardware serial numbers"
    ],
    "correctAnswer": 0,
    "explanation": "Embedded Linux: System Info. Correct answer option 1 accurately reflects operating system and kernel driver architecture."
  },
  {
    "id": "lin-add-30",
    "topicId": "linux",
    "category": "Cron Daemons",
    "question": "What is the purpose of the Linux `cron` daemon (`crond`)?",
    "options": [
      "A background daemon that executes scheduled shell commands, maintenance scripts, and periodic jobs at recurring calendar intervals specified in crontab files",
      "Monitors crystal oscillator frequency",
      "Controls user password expiration dates",
      "Manages CPU clock scaling"
    ],
    "correctAnswer": 0,
    "explanation": "Embedded Linux: Cron Daemons. Correct answer option 1 accurately reflects operating system and kernel driver architecture."
  },
  {
    "id": "ctrl-add-01",
    "topicId": "control_automation",
    "category": "Control Fundamentals",
    "question": "What is the primary difference between an Open-Loop and a Closed-Loop control system?",
    "options": [
      "Closed-loop systems incorporate feedback measurements of the output to dynamically adjust the control action and correct errors; open-loop systems execute commands without feedback verification",
      "Open-loop systems are always digital; closed-loop systems are always analog",
      "Open-loop systems have infinite gain",
      "Closed-loop systems can never oscillate"
    ],
    "correctAnswer": 0,
    "explanation": "Control & Automation: Control Fundamentals. Correct answer option 1 accurately reflects industrial automation and control theory."
  },
  {
    "id": "ctrl-add-02",
    "topicId": "control_automation",
    "category": "System Stability",
    "question": "What does the Routh-Hurwitz stability criterion determine for a linear time-invariant (LTI) system?",
    "options": [
      "The number of closed-loop poles located in the right-half of the s-plane (RHP), proving system stability if all elements in the first column of the Routh array have the same sign",
      "The steady-state error of the system",
      "The gain margin in decibels",
      "The phase angle at resonance"
    ],
    "correctAnswer": 0,
    "explanation": "Control & Automation: System Stability. Correct answer option 1 accurately reflects industrial automation and control theory."
  },
  {
    "id": "ctrl-add-03",
    "topicId": "control_automation",
    "category": "Bode & Stability Margins",
    "question": "In control theory, what is 'Phase Margin' (PM)?",
    "options": [
      "The amount of additional phase lag at the gain crossover frequency (where $|G(j\\omega)| = 1$ / 0dB) required to bring the system to the verge of instability (180° total lag)",
      "The phase angle at zero frequency",
      "The maximum phase shift of an audio amplifier",
      "The delay between input and output in seconds"
    ],
    "correctAnswer": 0,
    "explanation": "Control & Automation: Bode & Stability Margins. Correct answer option 1 accurately reflects industrial automation and control theory."
  },
  {
    "id": "ctrl-add-04",
    "topicId": "control_automation",
    "category": "Gain Margin",
    "question": "What is 'Gain Margin' (GM) in frequency domain stability analysis?",
    "options": [
      "The reciprocal of the open-loop gain magnitude at the phase crossover frequency (where phase is -180°), indicating how much gain can increase before instability occurs",
      "The maximum amplifier gain in decibels",
      "The gain at DC frequency",
      "The ratio of input voltage to output voltage"
    ],
    "correctAnswer": 0,
    "explanation": "Control & Automation: Gain Margin. Correct answer option 1 accurately reflects industrial automation and control theory."
  },
  {
    "id": "ctrl-add-05",
    "topicId": "control_automation",
    "category": "Root Locus",
    "question": "What is a 'Root Locus' diagram in control system engineering?",
    "options": [
      "A graphical trajectory plot showing how the closed-loop poles of a system migrate across the complex s-plane as a system parameter (typically loop gain $K$) varies from 0 to $\\infty$",
      "A map of plant roots in agriculture",
      "A frequency response plot on logarithmic axes",
      "A 3D simulation of motor torque"
    ],
    "correctAnswer": 0,
    "explanation": "Control & Automation: Root Locus. Correct answer option 1 accurately reflects industrial automation and control theory."
  },
  {
    "id": "ctrl-add-06",
    "topicId": "control_automation",
    "category": "PID Controllers",
    "question": "What does the 'Integral' term ($K_i$) in a PID controller specifically eliminate?",
    "options": [
      "Steady-state error ($e_{ss} = 0$) for step inputs by continuously accumulating residual error over time until the actuator reaches the exact target point",
      "High-frequency sensor noise",
      "Initial transient overshoot",
      "Actuator saturation"
    ],
    "correctAnswer": 0,
    "explanation": "Control & Automation: PID Controllers. Correct answer option 1 accurately reflects industrial automation and control theory."
  },
  {
    "id": "ctrl-add-07",
    "topicId": "control_automation",
    "category": "Integral Windup",
    "question": "What is the risk of excessive Integral gain ($K_i$) in a PID controller?",
    "options": [
      "Causes 'Integral Windup' during large setpoint changes or actuator saturation, resulting in massive overshoot, prolonged settling times, and potential instability",
      "Causes steady-state error to increase",
      "Disables the derivative term permanently",
      "Causes the motor to stop spinning"
    ],
    "correctAnswer": 0,
    "explanation": "Control & Automation: Integral Windup. Correct answer option 1 accurately reflects industrial automation and control theory."
  },
  {
    "id": "ctrl-add-08",
    "topicId": "control_automation",
    "category": "PID Derivative Action",
    "question": "What is the function of the 'Derivative' term ($K_d$) in a PID controller?",
    "options": [
      "Anticipates future error by measuring the rate of change of error ($de/dt$), providing damping that reduces overshoot and suppresses oscillatory transients",
      "Eliminates steady-state error",
      "Amplifies DC signals",
      "Converts AC signals to DC"
    ],
    "correctAnswer": 0,
    "explanation": "Control & Automation: PID Derivative Action. Correct answer option 1 accurately reflects industrial automation and control theory."
  },
  {
    "id": "ctrl-add-09",
    "topicId": "control_automation",
    "category": "Practical PID",
    "question": "Why is a low-pass filter typically applied to the Derivative term in practical industrial PID controllers?",
    "options": [
      "Derivative action amplifies high-frequency measurement noise ($d(\\sin\\omega t)/dt = \\omega\\cos\\omega t$), which would otherwise cause violent, chattering actuator jitter",
      "To slow down the motor speed",
      "To convert temperature into voltage",
      "To eliminate battery power consumption"
    ],
    "correctAnswer": 0,
    "explanation": "Control & Automation: Practical PID. Correct answer option 1 accurately reflects industrial automation and control theory."
  },
  {
    "id": "ctrl-add-10",
    "topicId": "control_automation",
    "category": "PID Tuning",
    "question": "What is the Ziegler-Nichols 'Ultimate Gain' tuning method for PID controllers?",
    "options": [
      "Increases proportional gain $K_p$ with $I$ and $D$ disabled until sustained, non-decaying oscillations occur at ultimate gain $K_u$ and period $T_u$, then calculates PID gains using standard lookup formulas",
      "Guesses random gains until the system stabilizes",
      "Tunes gains using neural networks",
      "Sets all gains to 1.0"
    ],
    "correctAnswer": 0,
    "explanation": "Control & Automation: PID Tuning. Correct answer option 1 accurately reflects industrial automation and control theory."
  },
  {
    "id": "ctrl-add-11",
    "topicId": "control_automation",
    "category": "PLC Architecture",
    "question": "In a Programmable Logic Controller (PLC), what is the cyclic 'Scan Cycle' execution sequence?",
    "options": [
      "1) Read physical input terminals and update input image table; 2) Execute user logic program sequentially; 3) Update physical output terminals from output image table; 4) Execute diagnostics and communications",
      "1) Compile ladder logic; 2) Reboot PLC; 3) Send email",
      "1) Measure motor temperature; 2) Turn off power",
      "1) Scan barcode; 2) Print label"
    ],
    "correctAnswer": 0,
    "explanation": "Control & Automation: PLC Architecture. Correct answer option 1 accurately reflects industrial automation and control theory."
  },
  {
    "id": "ctrl-add-12",
    "topicId": "control_automation",
    "category": "IEC 61131-3",
    "question": "What are the five standard PLC programming languages defined by IEC 61131-3?",
    "options": [
      "Ladder Diagram (LD), Function Block Diagram (FBD), Structured Text (ST), Instruction List (IL), and Sequential Function Chart (SFC)",
      "C, C++, Python, Java, Rust",
      "HTML, CSS, JavaScript, PHP, SQL",
      "Assembly, VHDL, Verilog, SystemC, Fortran"
    ],
    "correctAnswer": 0,
    "explanation": "Control & Automation: IEC 61131-3. Correct answer option 1 accurately reflects industrial automation and control theory."
  },
  {
    "id": "ctrl-add-13",
    "topicId": "control_automation",
    "category": "SCADA Systems",
    "question": "What is an SCADA (Supervisory Control and Data Acquisition) system in industrial automation?",
    "options": [
      "A high-level software supervisory architecture that gathers real-time data from distributed PLCs/RTUs, provides graphical HMI visualization, manages alarms, and logs historical telemetry",
      "A physical conveyor belt system",
      "An analog temperature gauge",
      "A software compiler for robots"
    ],
    "correctAnswer": 0,
    "explanation": "Control & Automation: SCADA Systems. Correct answer option 1 accurately reflects industrial automation and control theory."
  },
  {
    "id": "ctrl-add-14",
    "topicId": "control_automation",
    "category": "HMI Interfaces",
    "question": "What is an industrial 'HMI' (Human-Machine Interface)?",
    "options": [
      "A graphical touchscreen terminal or PC console that allows operators to monitor process variables, acknowledge alarms, and enter recipe parameters to control factory automation",
      "A robotic humanoid arm",
      "A physical safety emergency stop button",
      "A barcode scanner"
    ],
    "correctAnswer": 0,
    "explanation": "Control & Automation: HMI Interfaces. Correct answer option 1 accurately reflects industrial automation and control theory."
  },
  {
    "id": "ctrl-add-15",
    "topicId": "control_automation",
    "category": "Current Loops",
    "question": "In industrial instrumentation, why is the '4-20mA Current Loop' standard preferred over 0-10V voltage signals for long-distance sensor transmission?",
    "options": [
      "Current signals are immune to voltage drops along long field wire resistances, and the 'live zero' at 4mA allows the receiver to instantly distinguish between zero measurement and a broken/disconnected wire",
      "4-20mA carries digital audio",
      "4-20mA operates at gigahertz speeds",
      "Voltage signals cannot travel through copper"
    ],
    "correctAnswer": 0,
    "explanation": "Control & Automation: Current Loops. Correct answer option 1 accurately reflects industrial automation and control theory."
  },
  {
    "id": "ctrl-add-16",
    "topicId": "control_automation",
    "category": "HART Protocol",
    "question": "What is the HART (Highway Addressable Remote Transducer) protocol used in industrial sensors?",
    "options": [
      "Superimposes digital FSK communication signals (1200 baud) on top of the standard 4-20mA analog current loop without disrupting the analog signal, enabling two-way smart sensor diagnostics",
      "A protocol for medical heart monitors",
      "A highway toll collection system",
      "A wireless protocol for smartphones"
    ],
    "correctAnswer": 0,
    "explanation": "Control & Automation: HART Protocol. Correct answer option 1 accurately reflects industrial automation and control theory."
  },
  {
    "id": "ctrl-add-17",
    "topicId": "control_automation",
    "category": "Nyquist Criterion",
    "question": "What is the Nyquist Stability Criterion in frequency response analysis?",
    "options": [
      "Determines closed-loop stability by counting the number of clockwise encirclements ($N$) of the critical point $(-1 + j0)$ by the open-loop Nyquist plot: $Z = N + P$",
      "Measures the maximum volume of audio speakers",
      "Calculates the speed of sound in air",
      "Measures the power output of a motor"
    ],
    "correctAnswer": 0,
    "explanation": "Control & Automation: Nyquist Criterion. Correct answer option 1 accurately reflects industrial automation and control theory."
  },
  {
    "id": "ctrl-add-18",
    "topicId": "control_automation",
    "category": "State Space",
    "question": "What does 'State-Space Representation' of a dynamic system describe?",
    "options": [
      "Models an Nth-order dynamic system as a set of first-order differential matrix equations: $\\dot{x} = Ax + Bu$ (state equation) and $y = Cx + Du$ (output equation)",
      "Models 3D orbital satellites",
      "Describes solid, liquid, and gas phases",
      "Calculates storage space on a hard drive"
    ],
    "correctAnswer": 0,
    "explanation": "Control & Automation: State Space. Correct answer option 1 accurately reflects industrial automation and control theory."
  },
  {
    "id": "ctrl-add-19",
    "topicId": "control_automation",
    "category": "Controllability",
    "question": "What is 'Controllability' in modern state-space control theory (Kalman Controllability)?",
    "options": [
      "A system is controllable if an input vector $u(t)$ can steer any initial internal state $x(0)$ to any arbitrary target state $x(t_1)$ in finite time (controllability matrix $\\mathcal{C} = [B, AB, A^2B, \\dots]$ has full rank)",
      "The ability of a human to operate the machine",
      "Having an emergency stop button",
      "Controlling the speed of an AC motor"
    ],
    "correctAnswer": 0,
    "explanation": "Control & Automation: Controllability. Correct answer option 1 accurately reflects industrial automation and control theory."
  },
  {
    "id": "ctrl-add-20",
    "topicId": "control_automation",
    "category": "Observability",
    "question": "What is 'Observability' in state-space systems?",
    "options": [
      "A system is observable if the initial internal state $x(0)$ can be completely reconstructed from observing the system outputs $y(t)$ over a finite time interval (observability matrix $\\mathcal{O}$ has full rank)",
      "The visibility of status LEDs through the enclosure",
      "Having transparent windows on the machine",
      "Monitoring a machine with video cameras"
    ],
    "correctAnswer": 0,
    "explanation": "Control & Automation: Observability. Correct answer option 1 accurately reflects industrial automation and control theory."
  },
  {
    "id": "ctrl-add-21",
    "topicId": "control_automation",
    "category": "State Observers",
    "question": "What is a 'Luenberger Observer' (State Estimator) used for?",
    "options": [
      "A mathematical algorithm that estimates unmeasurable internal state variables (e.g. internal rotor flux or temperature) using measured system inputs and outputs: $\\dot{\\hat{x}} = A\\hat{x} + Bu + L(y - C\\hat{x})$",
      "An optical telescope for space research",
      "A security guard inspecting factory workers",
      "A tool for observing binary code"
    ],
    "correctAnswer": 0,
    "explanation": "Control & Automation: State Observers. Correct answer option 1 accurately reflects industrial automation and control theory."
  },
  {
    "id": "ctrl-add-22",
    "topicId": "control_automation",
    "category": "Compensators",
    "question": "What is a 'Lead Compensator' network in frequency domain design?",
    "options": [
      "An analog network that adds positive phase lead near the gain crossover frequency, increasing phase margin and accelerating transient response speed",
      "A compensator made of lead metal",
      "A network that adds negative phase lag",
      "A battery charging regulator"
    ],
    "correctAnswer": 0,
    "explanation": "Control & Automation: Compensators. Correct answer option 1 accurately reflects industrial automation and control theory."
  },
  {
    "id": "ctrl-add-23",
    "topicId": "control_automation",
    "category": "Compensators",
    "question": "What is a 'Lag Compensator' network designed to do?",
    "options": [
      "Provides high gain at low frequencies to drastically reduce steady-state error without significantly degrading transient stability phase margin at higher frequencies",
      "Delays motor startup by 10 seconds",
      "Introduces latency in network packets",
      "Compensates for computer lag"
    ],
    "correctAnswer": 0,
    "explanation": "Control & Automation: Compensators. Correct answer option 1 accurately reflects industrial automation and control theory."
  },
  {
    "id": "ctrl-add-24",
    "topicId": "control_automation",
    "category": "VFD Motor Drives",
    "question": "What is a 'Variable Frequency Drive' (VFD) used for in industrial automation?",
    "options": [
      "Controls the rotational speed, torque, and acceleration of AC induction motors by rectifying AC to DC and synthesizing variable-frequency, variable-voltage PWM AC waveforms via an IGBT inverter",
      "Changes the frequency of radio broadcasts",
      "Converts 50Hz mains power to 60Hz",
      "Measures vibration on motor shafts"
    ],
    "correctAnswer": 0,
    "explanation": "Control & Automation: VFD Motor Drives. Correct answer option 1 accurately reflects industrial automation and control theory."
  },
  {
    "id": "ctrl-add-25",
    "topicId": "control_automation",
    "category": "Modbus RTU",
    "question": "What is 'Modbus RTU' in industrial fieldbus networks?",
    "options": [
      "An open master/slave serial communication protocol running over RS-485 balanced differential pairs using 16-bit CRC checksums to read/write registers in industrial devices",
      "A video streaming protocol",
      "A high-speed optical fiber standard",
      "A wireless Wi-Fi protocol"
    ],
    "correctAnswer": 0,
    "explanation": "Control & Automation: Modbus RTU. Correct answer option 1 accurately reflects industrial automation and control theory."
  },
  {
    "id": "ctrl-add-26",
    "topicId": "control_automation",
    "category": "Industrial Ethernet",
    "question": "What is PROFINET in modern factory automation?",
    "options": [
      "An open Industrial Ethernet standard providing deterministic real-time communication (down to sub-millisecond cycle times with IRT) for distributed I/O, motion control, and safety systems",
      "A programming language for robots",
      "A professional networking tool on LinkedIn",
      "A brand of industrial cables"
    ],
    "correctAnswer": 0,
    "explanation": "Control & Automation: Industrial Ethernet. Correct answer option 1 accurately reflects industrial automation and control theory."
  },
  {
    "id": "ctrl-add-27",
    "topicId": "control_automation",
    "category": "Temperature Sensors",
    "question": "What does an RTD (Resistance Temperature Detector, e.g. PT100) measure in process control?",
    "options": [
      "Measures temperature based on the predictable positive temperature coefficient of platinum wire resistance (exactly 100.00Ω at 0°C)",
      "Measures physical pressure in pipes",
      "Measures liquid flow velocity",
      "Measures ambient humidity"
    ],
    "correctAnswer": 0,
    "explanation": "Control & Automation: Temperature Sensors. Correct answer option 1 accurately reflects industrial automation and control theory."
  },
  {
    "id": "ctrl-add-28",
    "topicId": "control_automation",
    "category": "Functional Safety",
    "question": "What is the function of an Industrial Safety Relay (e.g. PILZ PNOZ)?",
    "options": [
      "A force-guided, redundant dual-channel safety relay module that reliably cuts power to hazardous machinery actuators upon emergency stop activation, preventing single-fault failure hazards",
      "A relay that runs on 12V batteries",
      "A relay used to turn on factory lights",
      "A software relay in PLC code"
    ],
    "correctAnswer": 0,
    "explanation": "Control & Automation: Functional Safety. Correct answer option 1 accurately reflects industrial automation and control theory."
  },
  {
    "id": "ctrl-add-29",
    "topicId": "control_automation",
    "category": "Motion Control",
    "question": "What is the difference between a Stepper Motor and a Servo Motor in precision positioning?",
    "options": [
      "Stepper motors advance in discrete open-loop angular steps (e.g. 1.8°/step) and can lose steps if overloaded; Servo motors incorporate high-resolution closed-loop encoder feedback to continuously correct position and torque",
      "Stepper motors run at 10,000 RPM; servo motors run at 10 RPM",
      "Servo motors have no electrical coils",
      "Stepper motors require hydraulic oil"
    ],
    "correctAnswer": 0,
    "explanation": "Control & Automation: Motion Control. Correct answer option 1 accurately reflects industrial automation and control theory."
  },
  {
    "id": "ctrl-add-30",
    "topicId": "control_automation",
    "category": "Functional Safety",
    "question": "What does the SIL (Safety Integrity Level, SIL 1 to SIL 4) rating quantify in functional safety (IEC 61508)?",
    "options": [
      "The statistical probability of dangerous failure on demand (PFD) for a safety instrumented system, with SIL 4 offering the highest reliability ($PFD < 10^{-4}$)",
      "The maximum decibel sound level of safety alarms",
      "The physical thickness of steel enclosures",
      "The speed of robot arm movements"
    ],
    "correctAnswer": 0,
    "explanation": "Control & Automation: Functional Safety. Correct answer option 1 accurately reflects industrial automation and control theory."
  },
  {
    "id": "qnt-add-01",
    "topicId": "quantum_prog",
    "category": "Qubit Fundamentals",
    "question": "What is a 'Qubit' (quantum bit) in quantum computing?",
    "options": [
      "A two-level quantum mechanical system that can exist in a linear superposition of both basis states $|0\\rangle$ and $|1\\rangle$: $|\\psi\\rangle = \\alpha|0\\rangle + \\beta|1\\rangle$ where $|\\alpha|^2 + |\\beta|^2 = 1$",
      "A byte containing 8 quantum particles",
      "A computer chip operating at room temperature",
      "A high-speed optical fiber connection"
    ],
    "correctAnswer": 0,
    "explanation": "Quantum Programming: Qubit Fundamentals. Correct answer option 1 accurately reflects quantum computing theory and gate models."
  },
  {
    "id": "qnt-add-02",
    "topicId": "quantum_prog",
    "category": "Quantum Gates",
    "question": "What does the Hadamard Gate ($H$) do to the computational basis state $|0\\rangle$?",
    "options": [
      "Creates an equal superposition state: $H|0\\rangle = \\frac{|0\\rangle + |1\\rangle}{\\sqrt{2}} = |+\\rangle$",
      "Inverts $|0\\rangle$ to $|1\\rangle$",
      "Measures the qubit immediately",
      "Rotates the phase by 90 degrees"
    ],
    "correctAnswer": 0,
    "explanation": "Quantum Programming: Quantum Gates. Correct answer option 1 accurately reflects quantum computing theory and gate models."
  },
  {
    "id": "qnt-add-03",
    "topicId": "quantum_prog",
    "category": "Pauli Gates",
    "question": "What is the matrix representation of the Pauli-X gate in the computational basis?",
    "options": [
      "$\\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$ (acts as a quantum bit-flip / NOT gate)",
      "$\\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix}$",
      "$\\begin{pmatrix} 0 & -i \\\\ i & 0 \\end{pmatrix}$",
      "$\\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$"
    ],
    "correctAnswer": 0,
    "explanation": "Quantum Programming: Pauli Gates. Correct answer option 1 accurately reflects quantum computing theory and gate models."
  },
  {
    "id": "qnt-add-04",
    "topicId": "quantum_prog",
    "category": "Entangling Gates",
    "question": "What is the function of the Controlled-NOT (CNOT / CX) gate on a 2-qubit state?",
    "options": [
      "Flips the target qubit if and only if the control qubit is in the state $|1\\rangle$, leaving control unchanged; transforms $|10\\rangle \\to |11\\rangle$ and $|11\\rangle \\to |10\\rangle$",
      "Inverts both qubits simultaneously",
      "Measures both qubits into classical bits",
      "Swaps the two qubits unconditionally"
    ],
    "correctAnswer": 0,
    "explanation": "Quantum Programming: Entangling Gates. Correct answer option 1 accurately reflects quantum computing theory and gate models."
  },
  {
    "id": "qnt-add-05",
    "topicId": "quantum_prog",
    "category": "Bell States",
    "question": "How is a maximally entangled Bell State $|\\Phi^+\\rangle = \\frac{|00\\rangle + |11\\rangle}{\\sqrt{2}}$ created from the initial state $|00\\rangle$?",
    "options": [
      "Apply a Hadamard gate to qubit 0, followed by a CNOT gate with qubit 0 as control and qubit 1 as target: $\\text{CNOT}(H \\otimes I)|00\\rangle$",
      "Apply two Pauli-X gates",
      "Apply two Hadamard gates in parallel",
      "Measure qubit 0 then qubit 1"
    ],
    "correctAnswer": 0,
    "explanation": "Quantum Programming: Bell States. Correct answer option 1 accurately reflects quantum computing theory and gate models."
  },
  {
    "id": "qnt-add-06",
    "topicId": "quantum_prog",
    "category": "Quantum Theorems",
    "question": "What does the 'No-Cloning Theorem' in quantum mechanics prove?",
    "options": [
      "It is physically impossible to create an identical copy of an arbitrary unknown quantum state without destroying the original state",
      "Quantum computers cannot execute loops",
      "Quantum software cannot be downloaded from GitHub",
      "Qubits cannot be measured more than once"
    ],
    "correctAnswer": 0,
    "explanation": "Quantum Programming: Quantum Theorems. Correct answer option 1 accurately reflects quantum computing theory and gate models."
  },
  {
    "id": "qnt-add-07",
    "topicId": "quantum_prog",
    "category": "Superposition",
    "question": "What is 'Quantum Superposition'?",
    "options": [
      "The physical ability of a quantum state to exist simultaneously as a linear combination of multiple mutually orthogonal basis states until measurement collapses the wave function",
      "Stacking two quantum chips on top of each other",
      "Running two quantum programs at once",
      "Overclocking a quantum processor"
    ],
    "correctAnswer": 0,
    "explanation": "Quantum Programming: Superposition. Correct answer option 1 accurately reflects quantum computing theory and gate models."
  },
  {
    "id": "qnt-add-08",
    "topicId": "quantum_prog",
    "category": "Entanglement",
    "question": "What is 'Quantum Entanglement'?",
    "options": [
      "A quantum mechanical phenomenon where two or more qubits become correlated such that the quantum state of each particle cannot be described independently of the others, regardless of distance",
      "Wires tangling on a breadboard",
      "A software bug in Qiskit compilers",
      "Superconductors shorting to ground"
    ],
    "correctAnswer": 0,
    "explanation": "Quantum Programming: Entanglement. Correct answer option 1 accurately reflects quantum computing theory and gate models."
  },
  {
    "id": "qnt-add-09",
    "topicId": "quantum_prog",
    "category": "Quantum Algorithms",
    "question": "What does Shor's Algorithm achieve on a fault-tolerant quantum computer?",
    "options": [
      "Factors large composite integers $N = p \\cdot q$ in polynomial time $O((\\log N)^3)$, breaking classical RSA public-key cryptography using the Quantum Fourier Transform",
      "Searches unsorted databases in $O(N)$ time",
      "Calculates weather forecasts in real time",
      "Simulates molecular chemistry"
    ],
    "correctAnswer": 0,
    "explanation": "Quantum Programming: Quantum Algorithms. Correct answer option 1 accurately reflects quantum computing theory and gate models."
  },
  {
    "id": "qnt-add-10",
    "topicId": "quantum_prog",
    "category": "Grover Algorithm",
    "question": "What is the theoretical speedup of Grover's Algorithm for searching an unsorted database of $N$ items?",
    "options": [
      "Quadratic speedup: finds the marked item in $O(\\sqrt{N})$ evaluations compared to $O(N)$ classical search evaluations",
      "Exponential speedup: $O(\\log N)$",
      "Linear speedup: $2x$ faster",
      "Zero speedup"
    ],
    "correctAnswer": 0,
    "explanation": "Quantum Programming: Grover Algorithm. Correct answer option 1 accurately reflects quantum computing theory and gate models."
  },
  {
    "id": "qnt-add-11",
    "topicId": "quantum_prog",
    "category": "Bloch Sphere",
    "question": "What is the 'Bloch Sphere' in quantum information theory?",
    "options": [
      "A geometrical representation of the pure state space of a single 2-level qubit as points on the surface of a unit sphere in 3D space: $|\\psi\\rangle = \\cos(\\theta/2)|0\\rangle + e^{i\\phi}\\sin(\\theta/2)|1\\rangle$",
      "A 3D spherical silicon packaging enclosure",
      "A particle accelerator for quantum ions",
      "A sphere used to calibrate lasers"
    ],
    "correctAnswer": 0,
    "explanation": "Quantum Programming: Bloch Sphere. Correct answer option 1 accurately reflects quantum computing theory and gate models."
  },
  {
    "id": "qnt-add-12",
    "topicId": "quantum_prog",
    "category": "Pauli-Z Gate",
    "question": "What is the Pauli-Z gate and how does it transform the state $|1\\rangle$?",
    "options": [
      "$\\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix}$; leaves $|0\\rangle$ unchanged and applies a $\\pi$ phase flip to $|1\\rangle$: $Z|1\\rangle = -|1\\rangle$",
      "Flips $|1\\rangle$ to $|0\\rangle$",
      "Converts $|1\\rangle$ to $|+\\rangle$",
      "Collapses $|1\\rangle$ to zero"
    ],
    "correctAnswer": 0,
    "explanation": "Quantum Programming: Pauli-Z Gate. Correct answer option 1 accurately reflects quantum computing theory and gate models."
  },
  {
    "id": "qnt-add-13",
    "topicId": "quantum_prog",
    "category": "Universal Gate Sets",
    "question": "What is the T gate (also known as $\\pi/8$ gate) in universal quantum computation?",
    "options": [
      "A single-qubit phase gate represented by $\\begin{pmatrix} 1 & 0 \\\\ 0 & e^{i\\pi/4} \\end{pmatrix}$, essential along with Clifford gates (H, S, CNOT) to form a universal quantum gate set",
      "A gate that runs for 8 seconds",
      "A three-qubit Toffoli gate",
      "A thermal reset gate"
    ],
    "correctAnswer": 0,
    "explanation": "Quantum Programming: Universal Gate Sets. Correct answer option 1 accurately reflects quantum computing theory and gate models."
  },
  {
    "id": "qnt-add-14",
    "topicId": "quantum_prog",
    "category": "Reversible Logic",
    "question": "What is the Toffoli Gate (CCNOT gate)?",
    "options": [
      "A 3-qubit reversible logic gate that flips the target qubit if and only if both control qubits are in state $|1\\rangle$, capable of implementing any classical reversible boolean function",
      "A gate invented by IBM in 2020",
      "A single-qubit rotation gate",
      "A quantum measurement filter"
    ],
    "correctAnswer": 0,
    "explanation": "Quantum Programming: Reversible Logic. Correct answer option 1 accurately reflects quantum computing theory and gate models."
  },
  {
    "id": "qnt-add-15",
    "topicId": "quantum_prog",
    "category": "Quantum Measurement",
    "question": "What does the 'Measurement Postulate' state about observing a qubit $|psi\\rangle = \\alpha|0\\rangle + \\beta|1\\rangle$ in the computational basis?",
    "options": [
      "The measurement outcome is probabilistically either 0 with probability $|\\alpha|^2$ or 1 with probability $|\\beta|^2$, and the post-measurement state collapses irreversibly to the measured basis state",
      "The qubit displays both 0 and 1 simultaneously on screen",
      "The measurement produces an average number $\\alpha + \\beta$",
      "The qubit is destroyed and vanishes"
    ],
    "correctAnswer": 0,
    "explanation": "Quantum Programming: Quantum Measurement. Correct answer option 1 accurately reflects quantum computing theory and gate models."
  },
  {
    "id": "qnt-add-16",
    "topicId": "quantum_prog",
    "category": "Decoherence",
    "question": "What is 'Quantum Decoherece' in physical quantum computing hardware?",
    "options": [
      "The loss of quantum coherence and superposition caused by unwanted environmental interactions (thermal fluctuations, magnetic noise, stray photons), causing qubits to decay into classical noise",
      "The melting of superconducting metal",
      "A software crash in Python",
      "The clock frequency drifting over time"
    ],
    "correctAnswer": 0,
    "explanation": "Quantum Programming: Decoherence. Correct answer option 1 accurately reflects quantum computing theory and gate models."
  },
  {
    "id": "qnt-add-17",
    "topicId": "quantum_prog",
    "category": "Qubit Coherence Times",
    "question": "What is the difference between $T_1$ (relaxation time) and $T_2$ (dephasing time) of a physical qubit?",
    "options": [
      "$T_1$ is the longitudinal relaxation time (energy decay from state $|1\\rangle$ to ground state $|0\\rangle$); $T_2$ is the transverse dephasing time (loss of phase coherence between $|0\\rangle$ and $|1\\rangle$)",
      "$T_1$ is gate execution time; $T_2$ is measurement time",
      "$T_1$ is hardware boot time; $T_2$ is compiler runtime",
      "They are identical time constants"
    ],
    "correctAnswer": 0,
    "explanation": "Quantum Programming: Qubit Coherence Times. Correct answer option 1 accurately reflects quantum computing theory and gate models."
  },
  {
    "id": "qnt-add-18",
    "topicId": "quantum_prog",
    "category": "Superconducting Qubits",
    "question": "What physical mechanism is used to implement 'Superconducting Qubits' (e.g. Transmon qubits by IBM / Google)?",
    "options": [
      "Non-linear LC resonant circuits constructed using Josephson junctions (thin insulating barriers between superconducting aluminum or niobium layers) operating at dilution refrigerator temperatures (~15 mK)",
      "Trapped atomic ions in vacuum chambers",
      "Photons traveling down optical fiber cables",
      "Silicon flash memory floating gates"
    ],
    "correctAnswer": 0,
    "explanation": "Quantum Programming: Superconducting Qubits. Correct answer option 1 accurately reflects quantum computing theory and gate models."
  },
  {
    "id": "qnt-add-19",
    "topicId": "quantum_prog",
    "category": "Cryogenic Systems",
    "question": "Why must superconducting quantum computers be cooled to cryogenic temperatures (~15 millikelvin)?",
    "options": [
      "To suppress thermal energy ($k_B T$) far below the qubit transition energy level (few GHz, $\\sim 50\\mu eV$), preventing ambient thermal photons from randomly exciting the ground state",
      "To freeze the copper wires into rigid shapes",
      "To make cooling fans run quietly",
      "To prevent the dilution refrigerator from overheating"
    ],
    "correctAnswer": 0,
    "explanation": "Quantum Programming: Cryogenic Systems. Correct answer option 1 accurately reflects quantum computing theory and gate models."
  },
  {
    "id": "qnt-add-20",
    "topicId": "quantum_prog",
    "category": "Quantum Teleportation",
    "question": "What is 'Quantum Teleportation'?",
    "options": [
      "A protocol that transfers the exact unknown quantum state of a qubit to a distant qubit using a shared pre-existing entangled Bell pair and classical communication of two classical bits",
      "Teleporting human bodies through physical space",
      "Faster-than-light data transmission violating relativity",
      "Downloading files over a quantum internet"
    ],
    "correctAnswer": 0,
    "explanation": "Quantum Programming: Quantum Teleportation. Correct answer option 1 accurately reflects quantum computing theory and gate models."
  },
  {
    "id": "qnt-add-21",
    "topicId": "quantum_prog",
    "category": "Qiskit Framework",
    "question": "What is Qiskit in quantum software development?",
    "options": [
      "An open-source software development kit (SDK) created by IBM for working with quantum computers at the level of circuits, pulses, and algorithms using Python",
      "A quantum operating system written in Rust",
      "A hardware cryogenic controller",
      "An online quantum video game"
    ],
    "correctAnswer": 0,
    "explanation": "Quantum Programming: Qiskit Framework. Correct answer option 1 accurately reflects quantum computing theory and gate models."
  },
  {
    "id": "qnt-add-22",
    "topicId": "quantum_prog",
    "category": "Qiskit Syntax",
    "question": "In Qiskit, how is a quantum circuit created with 2 qubits and 2 classical bits?",
    "options": [
      "`qc = QuantumCircuit(2, 2)`",
      "`qc = create_circuit(2)`",
      "`qc = QuantumRegister(2)`",
      "`qc = Circuit(qubits=2, bits=2)`"
    ],
    "correctAnswer": 0,
    "explanation": "Quantum Programming: Qiskit Syntax. Correct answer option 1 accurately reflects quantum computing theory and gate models."
  },
  {
    "id": "qnt-add-23",
    "topicId": "quantum_prog",
    "category": "QPE Subroutine",
    "question": "What is the Quantum Phase Estimation (QPE) algorithm used for?",
    "options": [
      "Estimates the eigenvalue phase $\\theta$ of a unitary operator $U$ corresponding to an eigenvector $|\\psi\\rangle$: $U|\\psi\\rangle = e^{2\\pi i \\theta}|\\psi\\rangle$, acting as the core subroutine of Shor's algorithm and chemistry simulation",
      "Measures the physical phase of AC power supplies",
      "Estimates the phase of radio waves",
      "Calculates the moon phases"
    ],
    "correctAnswer": 0,
    "explanation": "Quantum Programming: QPE Subroutine. Correct answer option 1 accurately reflects quantum computing theory and gate models."
  },
  {
    "id": "qnt-add-24",
    "topicId": "quantum_prog",
    "category": "VQE & Chemistry",
    "question": "What is the Variational Quantum Eigensolver (VQE) algorithm?",
    "options": [
      "A hybrid quantum-classical algorithm using parameterized quantum circuits (ansatz) and classical optimizers to find the ground state energy of molecular Hamiltonians on noisy intermediate-scale quantum (NISQ) devices",
      "An algorithm for sorting quantum databases",
      "A compiler for quantum assembly language",
      "An encryption algorithm for banking"
    ],
    "correctAnswer": 0,
    "explanation": "Quantum Programming: VQE & Chemistry. Correct answer option 1 accurately reflects quantum computing theory and gate models."
  },
  {
    "id": "qnt-add-25",
    "topicId": "quantum_prog",
    "category": "NISQ Era",
    "question": "What does the term 'NISQ' stand for in contemporary quantum computing?",
    "options": [
      "Noisy Intermediate-Scale Quantum (processors with 50 to a few thousand physical qubits without full fault-tolerant quantum error correction)",
      "New Integrated Superconducting Qubits",
      "Non-Invasive Quantum Sensing",
      "Networked Industrial Quantum Systems"
    ],
    "correctAnswer": 0,
    "explanation": "Quantum Programming: NISQ Era. Correct answer option 1 accurately reflects quantum computing theory and gate models."
  },
  {
    "id": "qnt-add-26",
    "topicId": "quantum_prog",
    "category": "Quantum Error Correction",
    "question": "What is 'Quantum Error Correction' (QEC, e.g. Surface Code)?",
    "options": [
      "Encodes a single protected logical qubit across an array of multiple entangled physical data and syndrome ancilla qubits, detecting and correcting bit-flip and phase-flip errors without collapsing the logical state",
      "A software linter for Qiskit code",
      "Fixing syntax errors in quantum Python scripts",
      "Resetting qubits to zero when errors occur"
    ],
    "correctAnswer": 0,
    "explanation": "Quantum Programming: Quantum Error Correction. Correct answer option 1 accurately reflects quantum computing theory and gate models."
  },
  {
    "id": "qnt-add-27",
    "topicId": "quantum_prog",
    "category": "Surface Code",
    "question": "What is the 'Surface Code' in 2D quantum error correction architectures?",
    "options": [
      "A topological 2D lattice of physical qubits with nearest-neighbor interactions that measures local stabilizer operators (X-type and Z-type plaquettes) to achieve high fault-tolerance error thresholds (~1%)",
      "An anti-reflective optical surface coating on quantum dies",
      "A visual graphics shader for quantum states",
      "A method for cooling the chip surface"
    ],
    "correctAnswer": 0,
    "explanation": "Quantum Programming: Surface Code. Correct answer option 1 accurately reflects quantum computing theory and gate models."
  },
  {
    "id": "qnt-add-28",
    "topicId": "quantum_prog",
    "category": "QAOA Optimization",
    "question": "What does the Quantum Approximate Optimization Algorithm (QAOA) solve?",
    "options": [
      "Combinatorial optimization problems (e.g. Max-Cut, Traveling Salesperson) by mapping problem cost functions to Ising spin Hamiltonians and optimizing alternating driver/cost unitary layers",
      "Linear algebra matrix inversion",
      "Quantum audio synthesis",
      "Sorting lists of names"
    ],
    "correctAnswer": 0,
    "explanation": "Quantum Programming: QAOA Optimization. Correct answer option 1 accurately reflects quantum computing theory and gate models."
  },
  {
    "id": "qnt-add-29",
    "topicId": "quantum_prog",
    "category": "Swap Gates",
    "question": "What is a 'SWAP Gate' in quantum circuit synthesis?",
    "options": [
      "Exchanges the quantum states of two qubits: $\\text{SWAP}|a, b\\rangle = |b, a\\rangle$, constructed from three alternating CNOT gates",
      "Swaps the quantum computer with a classical computer",
      "Swaps the sign of the wave function",
      "Swaps the basis from X to Z"
    ],
    "correctAnswer": 0,
    "explanation": "Quantum Programming: Swap Gates. Correct answer option 1 accurately reflects quantum computing theory and gate models."
  },
  {
    "id": "qnt-add-30",
    "topicId": "quantum_prog",
    "category": "OpenQASM",
    "question": "What does OpenQASM (Open Quantum Assembly Language) provide in quantum toolchains?",
    "options": [
      "An intermediate representation language describing low-level quantum circuits and pulse instructions for hardware quantum execution engines and compilers",
      "An open-source classical CPU assembly language",
      "A quantum database query language",
      "A network protocol for quantum keys"
    ],
    "correctAnswer": 0,
    "explanation": "Quantum Programming: OpenQASM. Correct answer option 1 accurately reflects quantum computing theory and gate models."
  }
];
