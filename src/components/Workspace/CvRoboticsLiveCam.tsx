import React, { useState, useRef, useEffect } from 'react';
import {
  Camera, Video, Activity, RefreshCw, Eye, Sliders, Scan, Target,
  Compass, Gauge, AlertCircle, Maximize2, SplitSquareVertical,
  CheckCircle2, XCircle, Terminal, Play, Download, ChevronDown, ChevronUp,
  Sparkles, ShieldCheck, Code, AlertTriangle, Layers, Copy, Check, FileText
} from 'lucide-react';
import { Problem, SimulationResult } from '../../types';
import { classifyCvProblem, CvCategory } from '../../services/nonHdlEvaluationService';

interface CvRoboticsLiveCamProps {
  problem: Problem;
  simulationResult: SimulationResult | null;
  code?: string;
  onDownloadCode?: () => void;
  isSimulating?: boolean;
  onRunCode?: () => void;
  onLoadTemplate?: () => void;
  isProblemSolved?: boolean;
}

export type CvSceneType =
  | 'autonomous_lane'
  | 'aruco_marker'
  | 'face_detection'
  | 'ball_tracker'
  | 'pcb_inspection'
  | 'shape_sorter'
  | 'optical_flow'
  | 'pose_estimation'
  | 'pid_controller'
  | 'kinematics'
  | 'visual_servoing'
  | 'pinhole_distance'
  | 'ros2_node'
  | 'qr_scanner'
  | 'stereo_depth'
  | 'canny_edge'
  | 'blur_filter'
  | 'roi_crop'
  | 'video_grayscale'
  | 'hsv_segmentation'
  | 'threshold_mask'
  | 'morphology'
  | 'contours'
  | 'bounding_box'
  | 'moments_centroid'
  | 'min_enclosing_circle'
  | 'hough_lines'
  | 'hough_circles'
  | 'histogram'
  | 'feature_corners'
  | 'perspective_warp'
  | 'general_cv';

export type CvFilterType =
  | 'auto'
  | 'original'
  | 'grayscale'
  | 'red_mask'
  | 'hsv'
  | 'canny'
  | 'sobel'
  | 'blur'
  | 'contours'
  | 'bbox'
  | 'threshold'
  | 'morphology'
  | 'moments'
  | 'corners'
  | 'hough_lines'
  | 'hough_circles'
  | 'histogram'
  | 'warp'
  | 'pose'
  | 'flow'
  | 'pid'
  | 'distance'
  | 'ros2';

/**
 * Maps any CV & Robotics problem statement and code to the individual matching scene and filter.
 */
export function detectCvProblemScene(problem: Problem, userCode: string): {
  scene: CvSceneType;
  filter: CvFilterType;
  title: string;
  primaryTarget: string;
} {
  const category = classifyCvProblem(problem, userCode);

  switch (category) {
    case 'video_grayscale':
      return {
        scene: 'video_grayscale',
        filter: 'grayscale',
        title: 'OpenCV Video Capture Frame Initialization & Grayscale Luma',
        primaryTarget: 'Monochrome Luma Y [0.299R + 0.587G + 0.114B]'
      };
    case 'hsv_segmentation':
      return {
        scene: 'hsv_segmentation',
        filter: 'hsv',
        title: 'OpenCV Color Space Conversion (BGR to HSV Cylindrical)',
        primaryTarget: 'Hue Channel [0-179°] & Saturation [0-255]'
      };
    case 'threshold_mask':
      return {
        scene: 'threshold_mask',
        filter: 'threshold',
        title: 'OpenCV Color Thresholding & inRange Binary Segmentation',
        primaryTarget: 'Binary Segmentation Mask [0 / 255]'
      };
    case 'morphology':
      return {
        scene: 'morphology',
        filter: 'morphology',
        title: 'OpenCV Morphological Dilation & Erosion Noise Filter',
        primaryTarget: 'Structuring Kernel (5x5 Ellipse) & Hole Filling'
      };
    case 'contours':
      return {
        scene: 'contours',
        filter: 'contours',
        title: 'OpenCV Contour Detection & Topological Boundaries',
        primaryTarget: 'Vectorized Polygonal Contours (RETR_EXTERNAL)'
      };
    case 'bounding_box':
      return {
        scene: 'bounding_box',
        filter: 'bbox',
        title: 'OpenCV Largest Contour Bounding Box Extraction',
        primaryTarget: 'Upright Bounding Box Rect [X, Y, W, H]'
      };
    case 'moments_centroid':
      return {
        scene: 'moments_centroid',
        filter: 'moments',
        title: 'OpenCV Contour Centroid Calculation using Image Moments',
        primaryTarget: 'Spatial Center-of-Mass (M10/M00, M01/M00)'
      };
    case 'min_enclosing_circle':
      return {
        scene: 'min_enclosing_circle',
        filter: 'bbox',
        title: 'OpenCV Minimum Enclosing Circle & Ball Tracker',
        primaryTarget: 'Circumscribed Circle [Center (X,Y), Radius R]'
      };
    case 'canny_edge':
      return {
        scene: 'canny_edge',
        filter: 'canny',
        title: 'OpenCV Canny Edge Detection & Threshold Tuning',
        primaryTarget: 'Hysteresis Gradient Edges (T1=50, T2=150)'
      };
    case 'hough_lines':
      return {
        scene: 'hough_lines',
        filter: 'hough_lines',
        title: 'OpenCV Hough Line Transform for Robot Lane Tracking',
        primaryTarget: 'Parametric Polar Lines [ρ, θ] & Steering PID'
      };
    case 'hough_circles':
      return {
        scene: 'hough_circles',
        filter: 'hough_circles',
        title: 'OpenCV Hough Circle Transform for Target Detection',
        primaryTarget: '2-Stage Hough Gradient Accumulator Circles'
      };
    case 'histogram':
      return {
        scene: 'histogram',
        filter: 'histogram',
        title: 'OpenCV Histogram Equalization & Contrast Enhancement',
        primaryTarget: '256-Bin Cumulative Distribution Function'
      };
    case 'feature_corners':
      return {
        scene: 'feature_corners',
        filter: 'corners',
        title: 'OpenCV Harris & Shi-Tomasi Corner Feature Detector',
        primaryTarget: 'High-Eigenvalue Corner Interest Points'
      };
    case 'perspective_warp':
      return {
        scene: 'perspective_warp',
        filter: 'warp',
        title: "OpenCV Perspective Transform & Bird's-Eye View Warp",
        primaryTarget: 'Planar Homography Matrix H [3x3]'
      };
    case 'autonomous_lane':
      return {
        scene: 'autonomous_lane',
        filter: 'canny',
        title: 'Autonomous Mobile Robot Road Lane & Steering Vector',
        primaryTarget: 'Lane Boundary & Vanishing Point'
      };
    case 'aruco_marker':
      return {
        scene: 'aruco_marker',
        filter: 'bbox',
        title: 'ArUco Fiducial Marker Pose Estimation & Docking Alignment',
        primaryTarget: 'Marker ID #23 [6-DoF Pose]'
      };
    case 'face_detection':
      return {
        scene: 'face_detection',
        filter: 'bbox',
        title: 'Real-time Facial Landmark & Feature Tracking',
        primaryTarget: 'Face Bounding Box & Eye Centers'
      };
    case 'pcb_inspection':
      return {
        scene: 'pcb_inspection',
        filter: 'canny',
        title: 'Industrial PCB SMT Component & Solder Bridge Inspection',
        primaryTarget: 'IC Pins & Copper Traces'
      };
    case 'shape_sorter':
      return {
        scene: 'shape_sorter',
        filter: 'contours',
        title: 'Robotic Pick-and-Place Geometric Shape Classifier',
        primaryTarget: 'Contour Polygons & Centroids'
      };
    case 'optical_flow':
      return {
        scene: 'optical_flow',
        filter: 'flow',
        title: 'OpenCV Lucas-Kanade Optical Flow Motion Vector Tracking',
        primaryTarget: 'Pyramidal Sparse Velocity Vector Field (Δu, Δv)'
      };
    case 'pose_estimation':
      return {
        scene: 'pose_estimation',
        filter: 'pose',
        title: 'OpenCV Pose Estimation with cv2.solvePnP() & 3D Axes',
        primaryTarget: '6-DoF Pose [Rvec, Tvec] & Camera Reprojection'
      };
    case 'pid_controller':
      return {
        scene: 'pid_controller',
        filter: 'pid',
        title: 'Robot Proportional-Integral-Derivative (PID) Controller',
        primaryTarget: 'Closed-Loop Target Centering Error (e_x, e_y) & PWM'
      };
    case 'kinematics':
      return {
        scene: 'kinematics',
        filter: 'original',
        title: 'Differential Drive Robot Forward & Inverse Kinematics',
        primaryTarget: 'Wheel Odometry (ω_L, ω_R), ICC Arc, & Chassis Pose'
      };
    case 'visual_servoing':
      return {
        scene: 'visual_servoing',
        filter: 'pid',
        title: 'Visual Servoing Camera Target Centering Feedback Loop',
        primaryTarget: 'Image-Based Visual Servoing (IBVS) Optical Center Setpoint'
      };
    case 'pinhole_distance':
      return {
        scene: 'pinhole_distance',
        filter: 'distance',
        title: 'Obstacle Bounding Box Distance Estimation using Pinhole Model',
        primaryTarget: 'Pinhole Model Depth Z = (f * H_real) / h_px'
      };
    case 'ros2_node':
      return {
        scene: 'ros2_node',
        filter: 'ros2',
        title: 'ROS2 Python Node Publishing Processed Camera Frames',
        primaryTarget: 'Topic /camera/image_proc [sensor_msgs/Image] @ 60Hz'
      };
    case 'qr_scanner':
      return {
        scene: 'qr_scanner',
        filter: 'bbox',
        title: 'Warehouse Logistics AGV QR Code & Barcode Decoder',
        primaryTarget: 'QR Finder Patterns & Laser Beam'
      };
    case 'stereo_depth':
      return {
        scene: 'stereo_depth',
        filter: 'hsv',
        title: 'Stereo Vision Disparity & Depth Map Obstacle Estimation',
        primaryTarget: 'Point Cloud Depth Gradient'
      };
    case 'blur_filter':
      return {
        scene: 'blur_filter',
        filter: 'blur',
        title: 'Gaussian Kernel & Median Denoising Filter',
        primaryTarget: 'Spatial Smoothing & SNR Improvement'
      };
    case 'roi_crop':
      return {
        scene: 'roi_crop',
        filter: 'bbox',
        title: 'Dynamic Region-of-Interest (ROI) Cropping & Resizing',
        primaryTarget: 'Sub-frame Window [320x240]'
      };
    case 'ball_tracker':
      return {
        scene: 'ball_tracker',
        filter: 'red_mask',
        title: 'HSV Color Space Thresholding & Centroid Ball Tracker',
        primaryTarget: 'Red Sphere Centroid & Trajectory'
      };
    default:
      return {
        scene: 'general_cv',
        filter: 'bbox',
        title: problem.title,
        primaryTarget: `Target Feature & Algorithm Pipeline (${problem.title})`
      };
  }
}

export const CvRoboticsLiveCam: React.FC<CvRoboticsLiveCamProps> = ({
  problem,
  simulationResult,
  code = '',
  onDownloadCode,
  isSimulating,
  onRunCode,
  onLoadTemplate,
  isProblemSolved = false
}) => {
  const logs = simulationResult?.logs || [];
  const passed = simulationResult?.passed ?? false;
  const isSolvedOrPassed = Boolean(passed || isProblemSolved);

  // Determine if code has been written and if code has been executed
  const cleanCode = (code || '').replace(/#.*/g, '').trim();
  const isPlaceholderOnly = !cleanCode ||
    /def\s+\w+\s*\(.*?\)\s*:\s*(?:#.*?\n\s*)*pass\s*$/.test((code || '').trim()) ||
    cleanCode.replace(/def\s+\w+\s*\(.*?\)\s*:/g, '').replace(/import\s+[a-zA-Z0-9_,\s]+/g, '').replace(/from\s+[a-zA-Z0-9_.]+\s+import\s+[a-zA-Z0-9_,\s*]+/g, '').trim() === 'pass';

  const hasWrittenCode = Boolean(code && code.trim().length > 15 && !isPlaceholderOnly);
  const hasExecuted = Boolean((simulationResult !== null && hasWrittenCode) || isSolvedOrPassed);

  // Automatically select matching scene and filter based on problem
  const detected = detectCvProblemScene(problem, code);

  const [selectedScene, setSelectedScene] = useState<CvSceneType>(detected.scene);
  const [selectedFilter, setSelectedFilter] = useState<CvFilterType>('auto');
  const [viewMode, setViewMode] = useState<'side_by_side' | 'processed' | 'raw'>('side_by_side');
  const [useSyntheticFeed, setUseSyntheticFeed] = useState<boolean>(true);
  const [isCameraActive, setIsCameraActive] = useState<boolean>(() => hasExecuted || Boolean(isSimulating) || isSolvedOrPassed);
  const [cameraError, setCameraError] = useState<string | null>(null);
  const [showLogsDrawer, setShowLogsDrawer] = useState<boolean>(false);

  useEffect(() => {
    if (hasExecuted || isSimulating || isSolvedOrPassed) {
      setIsCameraActive(true);
    } else {
      setIsCameraActive(false);
    }
  }, [hasExecuted, isSimulating, isSolvedOrPassed]);

  // Synchronize scene when problem changes
  useEffect(() => {
    const config = detectCvProblemScene(problem, code);
    setSelectedScene(config.scene);
    setSelectedFilter('auto');
  }, [problem.id]);

  // Telemetry HUD state
  const [telemetry, setTelemetry] = useState({
    fps: 60.0,
    latencyMs: 1.1,
    centroidX: 320,
    centroidY: 240,
    targetArea: 4070,
    contourCount: 2,
    activeFilterName: 'cv2.Canny + BoundingBox',
    steeringOffsetDeg: -1.8,
    confidence: 99.4,
    statusText: 'TRACKING_LOCKED'
  });

  const [copiedReport, setCopiedReport] = useState<boolean>(false);

  const handleCopyReport = () => {
    const reportLines = [
      '====================================================================',
      '       VLSI EXPERT • COMPUTER VISION & ROBOTICS TELEMETRY REPORT    ',
      '====================================================================',
      `Problem: ${problem.title} (${problem.id})`,
      `Verification Status: ${passed ? 'VERIFIED (100% PASS)' : simulationResult ? 'FAILED' : 'READY TO RUN'}`,
      `Active Vision Scene: ${selectedScene}`,
      `Active Filter Pipeline: ${telemetry.activeFilterName}`,
      `Processing Speed: ${telemetry.fps.toFixed(1)} FPS | Latency: ${telemetry.latencyMs}ms (< 16.6ms standard)`,
      `Resolution: 640 x 480 px @ 60 FPS`,
      `Target Centroid: [X: ${telemetry.centroidX}, Y: ${telemetry.centroidY}]`,
      `Target Bounding Area: ${telemetry.targetArea} px² | Contours Tracked: ${telemetry.contourCount}`,
      `Robotics Closed-Loop Steering: ${telemetry.steeringOffsetDeg}° (PID Status: ${telemetry.statusText})`,
      `Algorithm Confidence: ${telemetry.confidence}%`,
      '--------------------------------------------------------------------',
      'OPENCV & ROS2 EXECUTION STDOUT LOGS:',
      ...(logs.length > 0 ? logs : ['No execution logs recorded. Click Run Code to execute and generate logs.']),
      '===================================================================='
    ];
    navigator.clipboard.writeText(reportLines.join('\n'));
    setCopiedReport(true);
    setTimeout(() => setCopiedReport(false), 2500);
  };

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const rawCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const processedCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const animFrameRef = useRef<number | null>(null);
  const simStepRef = useRef<number>(0);
  const trajectoryHistoryRef = useRef<Array<{ x: number; y: number }>>([]);

  // Real Webcam Start
  const startRealWebcam = async () => {
    setCameraError(null);
    try {
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        throw new Error('Webcam API is unavailable in this environment. Switched to Synthetic Robotics Scene.');
      }
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { width: { ideal: 640 }, height: { ideal: 480 }, frameRate: { ideal: 60 } }
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play().catch(() => {});
      }
      setUseSyntheticFeed(false);
      setIsCameraActive(true);
    } catch (err: any) {
      const errMsg = err?.name === 'NotAllowedError' || err?.message?.includes('Permission')
        ? 'Live webcam permission requested. If blocked by browser, enable camera access or enjoy the 60 FPS Synthetic Robotics Feed.'
        : (err?.message || 'Webcam permission denied or camera device not found. Running HD Synthetic Robotics Feed.');
      setCameraError(errMsg);
      setUseSyntheticFeed(true);
      setIsCameraActive(true);
    }
  };

  // Automatically request and open live camera stream when CV problem is solved
  useEffect(() => {
    if (isSolvedOrPassed) {
      startRealWebcam();
    }
  }, [isSolvedOrPassed]);

  const stopCameraStream = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      stream.getTracks().forEach(track => track.stop());
      videoRef.current.srcObject = null;
    }
    setIsCameraActive(false);
  };

  useEffect(() => {
    return () => {
      stopCameraStream();
    };
  }, []);

  // Main 60FPS Video Processing Pipeline
  useEffect(() => {
    if (!isCameraActive) {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      return;
    }

    const processFrame = () => {
      const rawCanvas = rawCanvasRef.current;
      const procCanvas = processedCanvasRef.current;
      const video = videoRef.current;
      if (!procCanvas) return;

      const w = 640;
      const h = 480;

      if (procCanvas.width !== w || procCanvas.height !== h) {
        procCanvas.width = w;
        procCanvas.height = h;
      }
      if (rawCanvas && (rawCanvas.width !== w || rawCanvas.height !== h)) {
        rawCanvas.width = w;
        rawCanvas.height = h;
      }

      const procCtx = procCanvas.getContext('2d', { willReadFrequently: true });
      const rawCtx = rawCanvas ? rawCanvas.getContext('2d', { willReadFrequently: true }) : null;
      if (!procCtx) return;

      simStepRef.current += 0.035;
      const step = simStepRef.current;

      // -------------------------------------------------------------
      // 1. RENDER RAW SOURCE SCENE (Webcam or High-Fidelity Synthetic)
      // -------------------------------------------------------------
      const renderSourceScene = (ctx: CanvasRenderingContext2D) => {
        // If user enabled real webcam and video is ready
        if (!useSyntheticFeed && video && video.readyState >= 2) {
          ctx.drawImage(video, 0, 0, w, h);
          return { targetX: w / 2, targetY: h / 2, targetRadius: 35, primaryVal: 0 };
        }

        // --- SYNTHETIC HIGH-FIDELITY SCENES ---
        ctx.fillStyle = '#090d16';
        ctx.fillRect(0, 0, w, h);

        if (selectedScene === 'autonomous_lane') {
          // Asphalt road
          ctx.fillStyle = '#1e293b';
          ctx.fillRect(0, 180, w, h - 180);
          // Horizon & Sky
          const skyGrad = ctx.createLinearGradient(0, 0, 0, 180);
          skyGrad.addColorStop(0, '#020617');
          skyGrad.addColorStop(1, '#0f172a');
          ctx.fillStyle = skyGrad;
          ctx.fillRect(0, 0, w, 180);

          // Moving road texture lines
          ctx.strokeStyle = 'rgba(255,255,255,0.05)';
          ctx.lineWidth = 1;
          for (let y = 190; y < h; y += 30) {
            ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
          }

          // Left Yellow Solid Boundary Line
          ctx.strokeStyle = '#facc15';
          ctx.lineWidth = 7;
          ctx.beginPath();
          ctx.moveTo(w / 2 - 40, 180);
          ctx.lineTo(60, h);
          ctx.stroke();

          // Right White Solid Boundary Line
          ctx.strokeStyle = '#ffffff';
          ctx.lineWidth = 7;
          ctx.beginPath();
          ctx.moveTo(w / 2 + 40, 180);
          ctx.lineTo(w - 60, h);
          ctx.stroke();

          // Center Dashed Lane Marker with curve animation
          const curveOffset = Math.sin(step * 0.7) * 45;
          ctx.strokeStyle = '#ffffff';
          ctx.lineWidth = 5;
          ctx.setLineDash([24, 20]);
          ctx.beginPath();
          ctx.moveTo(w / 2, 180);
          ctx.quadraticCurveTo(w / 2 + curveOffset * 0.5, 320, w / 2 + curveOffset, h);
          ctx.stroke();
          ctx.setLineDash([]);

          return { targetX: Math.floor(w / 2 + curveOffset), targetY: 360, targetRadius: 40, primaryVal: curveOffset };
        }

        if (selectedScene === 'aruco_marker') {
          // Neutral grey lab background
          ctx.fillStyle = '#0f172a';
          ctx.fillRect(0, 0, w, h);

          // Lab bench grid
          ctx.strokeStyle = 'rgba(71, 85, 105, 0.25)';
          ctx.lineWidth = 1;
          for (let x = 0; x < w; x += 40) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke(); }
          for (let y = 0; y < h; y += 40) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke(); }

          const mx = Math.floor(w / 2 + Math.cos(step * 0.8) * 110);
          const my = Math.floor(h / 2 + Math.sin(step * 0.8) * 65);
          const size = 160;

          // Outer White Border
          ctx.fillStyle = '#ffffff';
          ctx.fillRect(mx - size / 2, my - size / 2, size, size);
          // Inner Black Margin
          ctx.fillStyle = '#000000';
          ctx.fillRect(mx - size / 2 + 16, my - size / 2 + 16, size - 32, size - 32);

          // ArUco 4x4 Grid Pattern for ID #23
          ctx.fillStyle = '#ffffff';
          const bitSize = (size - 32) / 4;
          const bits = [
            [1, 0, 1, 0],
            [0, 1, 1, 0],
            [1, 1, 0, 1],
            [0, 0, 1, 1]
          ];
          for (let r = 0; r < 4; r++) {
            for (let c = 0; c < 4; c++) {
              if (bits[r][c]) {
                ctx.fillRect(mx - size / 2 + 16 + c * bitSize, my - size / 2 + 16 + r * bitSize, bitSize, bitSize);
              }
            }
          }

          return { targetX: mx, targetY: my, targetRadius: 75, primaryVal: 23 };
        }

        if (selectedScene === 'face_detection') {
          // Dark studio background
          ctx.fillStyle = '#0b0f19';
          ctx.fillRect(0, 0, w, h);

          const fx = Math.floor(w / 2 + Math.sin(step * 0.6) * 130);
          const fy = Math.floor(h / 2 + Math.cos(step * 0.6) * 45);

          // Face oval
          ctx.fillStyle = '#fbd5b5';
          ctx.beginPath();
          ctx.ellipse(fx, fy, 70, 92, 0, 0, 2 * Math.PI);
          ctx.fill();

          // Eyes
          ctx.fillStyle = '#1e293b';
          ctx.beginPath(); ctx.arc(fx - 24, fy - 16, 7, 0, 2 * Math.PI); ctx.fill();
          ctx.beginPath(); ctx.arc(fx + 24, fy - 16, 7, 0, 2 * Math.PI); ctx.fill();

          // Iris specular highlight
          ctx.fillStyle = '#ffffff';
          ctx.beginPath(); ctx.arc(fx - 22, fy - 18, 2, 0, 2 * Math.PI); ctx.fill();
          ctx.beginPath(); ctx.arc(fx + 26, fy - 18, 2, 0, 2 * Math.PI); ctx.fill();

          // Smile
          ctx.strokeStyle = '#c2410c';
          ctx.lineWidth = 3.5;
          ctx.beginPath();
          ctx.arc(fx, fy + 20, 26, 0.2 * Math.PI, 0.8 * Math.PI);
          ctx.stroke();

          return { targetX: fx, targetY: fy, targetRadius: 70, primaryVal: 1 };
        }

        if (selectedScene === 'pcb_inspection' || selectedScene === 'canny_edge') {
          // PCB Dark Green Solder Mask
          ctx.fillStyle = '#064e3b';
          ctx.fillRect(0, 0, w, h);

          // Gold Copper Traces
          ctx.strokeStyle = '#fbbf24';
          ctx.lineWidth = 2.5;
          for (let y = 60; y < h; y += 45) {
            ctx.beginPath();
            ctx.moveTo(30, y);
            ctx.lineTo(210, y);
            ctx.lineTo(250, y + 25);
            ctx.lineTo(w - 30, y + 25);
            ctx.stroke();
          }

          // Main SMD Microcontroller (ARM Cortex-M4 IC)
          const chipX = w / 2 - 85;
          const chipY = h / 2 - 65;
          ctx.fillStyle = '#0f172a';
          ctx.fillRect(chipX, chipY, 170, 130);
          ctx.strokeStyle = '#94a3b8';
          ctx.lineWidth = 2;
          ctx.strokeRect(chipX, chipY, 170, 130);

          // SMT IC Pins with solder pads
          ctx.fillStyle = '#e2e8f0';
          for (let py = chipY + 12; py <= chipY + 118; py += 16) {
            ctx.fillRect(chipX - 14, py, 14, 7);
            ctx.fillRect(chipX + 170, py, 14, 7);
          }

          ctx.fillStyle = '#f8fafc';
          ctx.font = 'bold 11px monospace';
          ctx.fillText('STM32F407VGT6', chipX + 22, chipY + 68);
          ctx.fillStyle = '#94a3b8';
          ctx.font = '9px monospace';
          ctx.fillText('ARM CORTEX-M4 168MHz', chipX + 14, chipY + 84);

          return { targetX: w / 2, targetY: h / 2, targetRadius: 85, primaryVal: 16 };
        }

        if (selectedScene === 'shape_sorter') {
          // Industrial Conveyor Belt (Slate-800)
          ctx.fillStyle = '#1e293b';
          ctx.fillRect(0, 0, w, h);

          // Moving conveyor rollers
          ctx.strokeStyle = '#334155';
          ctx.lineWidth = 2;
          for (let y = 0; y < h; y += 30) {
            ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
          }

          // Shape 1: Moving Blue Square Block
          const sqX = Math.floor(160 + Math.sin(step) * 40);
          const sqY = 240;
          ctx.fillStyle = '#2563eb';
          ctx.fillRect(sqX - 35, sqY - 35, 70, 70);
          ctx.strokeStyle = '#60a5fa';
          ctx.strokeRect(sqX - 35, sqY - 35, 70, 70);

          // Shape 2: Vibrant Red Circle Gear
          const crX = Math.floor(w / 2 + Math.cos(step) * 30);
          const crY = 240;
          ctx.fillStyle = '#dc2626';
          ctx.beginPath(); ctx.arc(crX, crY, 36, 0, 2 * Math.PI); ctx.fill();
          ctx.strokeStyle = '#f87171';
          ctx.stroke();

          // Shape 3: Yellow Triangle
          const trX = Math.floor(480 + Math.sin(step * 0.8) * 30);
          const trY = 240;
          ctx.fillStyle = '#eab308';
          ctx.beginPath();
          ctx.moveTo(trX, trY - 38);
          ctx.lineTo(trX + 38, trY + 32);
          ctx.lineTo(trX - 38, trY + 32);
          ctx.closePath();
          ctx.fill();
          ctx.strokeStyle = '#fde047';
          ctx.stroke();

          return { targetX: crX, targetY: crY, targetRadius: 40, primaryVal: 3 };
        }

        if (selectedScene === 'pose_estimation') {
          // 3D Calibration Workbench for solvePnP
          ctx.fillStyle = '#090d16';
          ctx.fillRect(0, 0, w, h);

          // Perspective ground grid
          ctx.strokeStyle = 'rgba(56, 189, 248, 0.15)';
          ctx.lineWidth = 1;
          for (let gx = 0; gx < w; gx += 40) { ctx.beginPath(); ctx.moveTo(gx, 0); ctx.lineTo(gx, h); ctx.stroke(); }
          for (let gy = 0; gy < h; gy += 40) { ctx.beginPath(); ctx.moveTo(0, gy); ctx.lineTo(w, gy); ctx.stroke(); }

          const px = Math.floor(w / 2 + Math.cos(step * 0.6) * 70);
          const py = Math.floor(h / 2 + Math.sin(step * 0.5) * 45);
          const tilt = Math.sin(step * 0.5) * 0.3;

          // 3D Perspective Calibration Board
          ctx.save();
          ctx.translate(px, py);
          ctx.rotate(tilt);
          // Chessboard pattern
          const sqSize = 22;
          for (let r = -2; r < 2; r++) {
            for (let c = -2; c < 2; c++) {
              ctx.fillStyle = (r + c) % 2 === 0 ? '#f8fafc' : '#0f172a';
              ctx.fillRect(c * sqSize, r * sqSize, sqSize, sqSize);
            }
          }
          ctx.strokeStyle = '#38bdf8';
          ctx.lineWidth = 2;
          ctx.strokeRect(-2 * sqSize, -2 * sqSize, 4 * sqSize, 4 * sqSize);
          ctx.restore();

          return { targetX: px, targetY: py, targetRadius: 48, primaryVal: 6 };
        }

        if (selectedScene === 'optical_flow') {
          // Drone aerial terrain view with optical flow motion vector features
          ctx.fillStyle = '#0f172a';
          ctx.fillRect(0, 0, w, h);

          // Moving textured terrain grid
          const driftX = Math.floor(Math.sin(step * 0.8) * 60);
          const driftY = Math.floor(Math.cos(step * 0.7) * 40);

          ctx.strokeStyle = 'rgba(30, 58, 138, 0.4)';
          ctx.lineWidth = 2;
          for (let gx = -100; gx < w + 100; gx += 50) {
            ctx.beginPath();
            ctx.moveTo(gx + driftX, 0);
            ctx.lineTo(gx + driftX, h);
            ctx.stroke();
          }
          for (let gy = -100; gy < h + 100; gy += 50) {
            ctx.beginPath();
            ctx.moveTo(0, gy + driftY);
            ctx.lineTo(w, gy + driftY);
            ctx.stroke();
          }

          // Scattered high-contrast corner landmarks for Lucas-Kanade tracking
          ctx.fillStyle = '#38bdf8';
          for (let i = 0; i < 16; i++) {
            const lx = ((i * 137 + 50 + driftX) % (w - 80)) + 40;
            const ly = ((i * 193 + 60 + driftY) % (h - 80)) + 40;
            ctx.beginPath();
            ctx.arc(lx, ly, 4, 0, 2 * Math.PI);
            ctx.fill();
          }

          return { targetX: w / 2 + driftX, targetY: h / 2 + driftY, targetRadius: 40, primaryVal: 1.5 };
        }

        if (selectedScene === 'pid_controller' || selectedScene === 'visual_servoing') {
          // Visual Servoing & Closed-Loop Steering Test Track
          ctx.fillStyle = '#020617';
          ctx.fillRect(0, 0, w, h);

          // Radar concentric rings centered at optical axis (320, 240)
          ctx.strokeStyle = 'rgba(148, 163, 184, 0.15)';
          ctx.lineWidth = 1;
          for (let rad = 60; rad <= 240; rad += 60) {
            ctx.beginPath(); ctx.arc(w / 2, h / 2, rad, 0, 2 * Math.PI); ctx.stroke();
          }
          ctx.beginPath(); ctx.moveTo(w / 2 - 120, h / 2); ctx.lineTo(w / 2 + 120, h / 2); ctx.stroke();
          ctx.beginPath(); ctx.moveTo(w / 2, h / 2 - 120); ctx.lineTo(w / 2, h / 2 + 120); ctx.stroke();

          // Target object moving with smooth trajectory
          const targetX = Math.floor(w / 2 + Math.sin(step * 0.9) * 150);
          const targetY = Math.floor(h / 2 + Math.cos(step * 0.7) * 95);

          // Target sphere (high-visibility amber/orange)
          ctx.fillStyle = '#f59e0b';
          ctx.beginPath(); ctx.arc(targetX, targetY, 32, 0, 2 * Math.PI); ctx.fill();
          ctx.fillStyle = '#fbbf24';
          ctx.beginPath(); ctx.arc(targetX - 8, targetY - 8, 10, 0, 2 * Math.PI); ctx.fill();
          ctx.strokeStyle = '#d97706';
          ctx.lineWidth = 2;
          ctx.stroke();

          return { targetX, targetY, targetRadius: 32, primaryVal: 0 };
        }

        if (selectedScene === 'kinematics') {
          // Differential Drive Arena Floor
          ctx.fillStyle = '#0f172a';
          ctx.fillRect(0, 0, w, h);

          // Coordinate grid
          ctx.strokeStyle = 'rgba(148, 163, 184, 0.12)';
          ctx.lineWidth = 1;
          for (let gx = 0; gx < w; gx += 40) { ctx.beginPath(); ctx.moveTo(gx, 0); ctx.lineTo(gx, h); ctx.stroke(); }
          for (let gy = 0; gy < h; gy += 40) { ctx.beginPath(); ctx.moveTo(0, gy); ctx.lineTo(w, gy); ctx.stroke(); }

          // Robot Chassis Pose
          const heading = step * 0.6;
          const rx = Math.floor(w / 2 + Math.cos(step * 0.5) * 80);
          const ry = Math.floor(h / 2 + Math.sin(step * 0.5) * 50);

          ctx.save();
          ctx.translate(rx, ry);
          ctx.rotate(heading);

          // Robot body (differential chassis)
          ctx.fillStyle = '#1e293b';
          ctx.fillRect(-35, -28, 70, 56);
          ctx.strokeStyle = '#38bdf8';
          ctx.lineWidth = 2;
          ctx.strokeRect(-35, -28, 70, 56);

          // Left wheel
          ctx.fillStyle = '#ef4444';
          ctx.fillRect(-22, -38, 44, 10);
          // Right wheel
          ctx.fillStyle = '#22c55e';
          ctx.fillRect(-22, 28, 44, 10);
          // Front caster wheel
          ctx.fillStyle = '#94a3b8';
          ctx.beginPath(); ctx.arc(28, 0, 6, 0, 2 * Math.PI); ctx.fill();

          // Forward heading vector
          ctx.strokeStyle = '#f59e0b';
          ctx.lineWidth = 3;
          ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(45, 0); ctx.stroke();

          ctx.restore();

          return { targetX: rx, targetY: ry, targetRadius: 38, primaryVal: heading };
        }

        if (selectedScene === 'pinhole_distance') {
          // Perspective Hallway for Distance Estimation
          ctx.fillStyle = '#020617';
          ctx.fillRect(0, 0, w, h);

          // Horizon & Perspective converging lines
          const horizonY = 160;
          ctx.strokeStyle = 'rgba(56, 189, 248, 0.2)';
          ctx.lineWidth = 1;
          ctx.beginPath(); ctx.moveTo(0, horizonY); ctx.lineTo(w, horizonY); ctx.stroke();

          // Converging road / hallway lines
          ctx.beginPath(); ctx.moveTo(w / 2, horizonY); ctx.lineTo(40, h); ctx.stroke();
          ctx.beginPath(); ctx.moveTo(w / 2, horizonY); ctx.lineTo(w - 40, h); ctx.stroke();
          ctx.beginPath(); ctx.moveTo(w / 2, horizonY); ctx.lineTo(w / 2 - 120, h); ctx.stroke();
          ctx.beginPath(); ctx.moveTo(w / 2, horizonY); ctx.lineTo(w / 2 + 120, h); ctx.stroke();

          // Distance oscillates between 0.9m and 2.6m
          const distZ = 1.7 + Math.sin(step * 0.7) * 0.8;
          // Pinhole formula: h_px = (f * H_real) / Z
          const boxH = Math.round((615.0 * 0.20) / distZ);
          const boxW = Math.round(boxH * 1.1);
          const ox = Math.floor(w / 2 + Math.sin(step * 0.4) * 80);
          const groundY = Math.floor(horizonY + (boxH * 1.8));
          const oy = groundY - boxH / 2;

          // Obstacle Cube
          ctx.fillStyle = '#e11d48';
          ctx.fillRect(ox - boxW / 2, oy - boxH / 2, boxW, boxH);
          ctx.strokeStyle = '#f43f5e';
          ctx.lineWidth = 2;
          ctx.strokeRect(ox - boxW / 2, oy - boxH / 2, boxW, boxH);

          // Highlight
          ctx.fillStyle = '#fb7185';
          ctx.fillRect(ox - boxW / 2 + 4, oy - boxH / 2 + 4, boxW - 8, 8);

          return { targetX: ox, targetY: oy, targetRadius: Math.round(boxH / 2), primaryVal: distZ };
        }

        if (selectedScene === 'ros2_node') {
          // ROS2 Camera publisher testbed
          ctx.fillStyle = '#0f172a';
          ctx.fillRect(0, 0, w, h);

          // Industrial alignment card
          ctx.strokeStyle = 'rgba(74, 222, 128, 0.25)';
          ctx.lineWidth = 1.5;
          ctx.strokeRect(30, 30, w - 60, h - 60);
          ctx.strokeRect(w / 2 - 80, h / 2 - 80, 160, 160);

          const rosX = Math.floor(w / 2 + Math.cos(step * 0.8) * 110);
          const rosY = Math.floor(h / 2 + Math.sin(step * 0.8) * 70);

          ctx.fillStyle = '#22c55e';
          ctx.beginPath(); ctx.arc(rosX, rosY, 36, 0, 2 * Math.PI); ctx.fill();
          ctx.strokeStyle = '#4ade80';
          ctx.lineWidth = 2;
          ctx.stroke();

          // Timecode & node banner
          ctx.fillStyle = '#ffffff';
          ctx.font = 'bold 10px monospace';
          ctx.fillText(`ROS2 /camera/image_raw [BGR888 @ 60Hz]`, 42, 50);

          return { targetX: rosX, targetY: rosY, targetRadius: 36, primaryVal: 60 };
        }

        if (selectedScene === 'qr_scanner') {
          // Logistics carton cardboard
          ctx.fillStyle = '#78350f';
          ctx.fillRect(0, 0, w, h);

          const qx = w / 2 - 80;
          const qy = h / 2 - 80;
          ctx.fillStyle = '#ffffff';
          ctx.fillRect(qx, qy, 160, 160);

          // QR Corner Finder Patterns
          const drawFinder = (px: number, py: number) => {
            ctx.fillStyle = '#000000';
            ctx.fillRect(px, py, 36, 36);
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(px + 6, py + 6, 24, 24);
            ctx.fillStyle = '#000000';
            ctx.fillRect(px + 12, py + 12, 12, 12);
          };

          drawFinder(qx + 10, qy + 10);
          drawFinder(qx + 114, qy + 10);
          drawFinder(qx + 10, qy + 114);

          // QR Random Bit Matrix
          ctx.fillStyle = '#000000';
          for (let i = 0; i < 60; i++) {
            const rx = qx + 50 + (i * 7) % 60;
            const ry = qy + 50 + (i * 13) % 60;
            ctx.fillRect(rx, ry, 6, 6);
          }

          return { targetX: w / 2, targetY: h / 2, targetRadius: 80, primaryVal: 42 };
        }

        if (selectedScene === 'stereo_depth') {
          // Multi-depth scene with near block, mid cylinder, far wall
          ctx.fillStyle = '#0f172a';
          ctx.fillRect(0, 0, w, h);

          // Far background
          ctx.fillStyle = '#1e293b';
          ctx.fillRect(40, 40, w - 80, h - 80);

          // Midground cylinder
          ctx.fillStyle = '#334155';
          ctx.fillRect(120, 120, 140, 200);

          // Foreground close box
          const fx = Math.floor(w / 2 + 60 + Math.sin(step) * 50);
          ctx.fillStyle = '#475569';
          ctx.fillRect(fx, 180, 160, 160);

          return { targetX: fx + 80, targetY: 260, targetRadius: 70, primaryVal: 0.85 };
        }

        if (selectedScene === 'video_grayscale') {
          // Camera Studio & SMPTE Color Bars Calibration Card
          ctx.fillStyle = '#0f172a';
          ctx.fillRect(0, 0, w, h);

          // SMPTE Color Bars
          const barW = w / 7;
          const colors = ['#ffffff', '#facc15', '#06b6d4', '#22c55e', '#ec4899', '#ef4444', '#3b82f6'];
          for (let i = 0; i < 7; i++) {
            ctx.fillStyle = colors[i];
            ctx.fillRect(i * barW, 40, barW, 200);
          }

          // Grayscale gradient staircase
          for (let i = 0; i < 16; i++) {
            const v = Math.round((i / 15) * 255);
            ctx.fillStyle = `rgb(${v},${v},${v})`;
            ctx.fillRect(i * (w / 16), 240, w / 16, 60);
          }

          // Camera Timecode & Resolution Grid
          ctx.strokeStyle = '#38bdf8';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(w / 2 - 30, h / 2 + 80); ctx.lineTo(w / 2 + 30, h / 2 + 80);
          ctx.moveTo(w / 2, h / 2 + 50); ctx.lineTo(w / 2, h / 2 + 110);
          ctx.stroke();

          ctx.fillStyle = '#ef4444';
          ctx.beginPath(); ctx.arc(40, 24, 6, 0, 2 * Math.PI); ctx.fill();
          ctx.fillStyle = '#ffffff';
          ctx.font = 'bold 11px monospace';
          ctx.fillText(`REC [640x480 @ 60.0 FPS]  Y=0.299R+0.587G+0.114B`, 54, 28);

          return { targetX: w / 2, targetY: h / 2 + 80, targetRadius: 40, primaryVal: 128 };
        }

        if (selectedScene === 'hsv_segmentation') {
          // Dark Studio Background with Vibrant Saturated Colors
          ctx.fillStyle = '#020617';
          ctx.fillRect(0, 0, w, h);

          // Moving Vibrant Red Target
          const rx = Math.floor(w / 2 + Math.cos(step) * 160);
          const ry = Math.floor(h / 2 + Math.sin(step * 1.4) * 100);
          ctx.fillStyle = '#ef4444';
          ctx.beginPath(); ctx.arc(rx, ry, 38, 0, 2 * Math.PI); ctx.fill();

          // Green Saturated Block
          ctx.fillStyle = '#10b981';
          ctx.fillRect(80, 100, 70, 70);

          // Blue Saturated Block
          ctx.fillStyle = '#3b82f6';
          ctx.fillRect(w - 150, 100, 70, 70);

          // Yellow Saturated Block
          ctx.fillStyle = '#eab308';
          ctx.fillRect(80, h - 170, 70, 70);

          return { targetX: rx, targetY: ry, targetRadius: 38, primaryVal: 176 };
        }

        if (selectedScene === 'threshold_mask' || selectedScene === 'morphology') {
          // Low-Contrast Noisy Scene for Thresholding & Morphological Testing
          ctx.fillStyle = '#111827';
          ctx.fillRect(0, 0, w, h);

          const mx = Math.floor(w / 2 + Math.sin(step * 0.8) * 140);
          const my = Math.floor(h / 2 + Math.cos(step * 0.8) * 80);

          // Primary Solid Target
          ctx.fillStyle = '#f43f5e';
          ctx.beginPath(); ctx.arc(mx, my, 42, 0, 2 * Math.PI); ctx.fill();

          // Internal void (hole to test morphological hole filling)
          if (selectedScene === 'morphology') {
            ctx.fillStyle = '#111827';
            ctx.beginPath(); ctx.arc(mx - 8, my - 8, 10, 0, 2 * Math.PI); ctx.fill();
          }

          // Simulated noise particles
          ctx.fillStyle = '#f43f5e';
          for (let i = 0; i < 12; i++) {
            const nx = (mx + (i * 27) % 180 - 90 + w) % w;
            const ny = (my + (i * 37) % 140 - 70 + h) % h;
            ctx.fillRect(nx, ny, 3, 3);
          }

          return { targetX: mx, targetY: my, targetRadius: 42, primaryVal: 255 };
        }

        if (selectedScene === 'contours' || selectedScene === 'bounding_box' || selectedScene === 'moments_centroid' || selectedScene === 'min_enclosing_circle') {
          // Robotic Inspection Conveyor
          ctx.fillStyle = '#0f172a';
          ctx.fillRect(0, 0, w, h);

          // Conveyor Grid
          ctx.strokeStyle = 'rgba(71, 85, 105, 0.2)';
          for (let y = 0; y < h; y += 35) {
            ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
          }

          const cx = Math.floor(w / 2 + Math.cos(step * 0.7) * 150);
          const cy = Math.floor(h / 2 + Math.sin(step * 0.7) * 90);

          // Primary Inspection Part (Machined Mechanical Hex Nut / Polygon)
          ctx.fillStyle = '#e11d48';
          ctx.beginPath();
          const sides = 6;
          const rad = 44;
          for (let s = 0; s < sides; s++) {
            const angle = (s * 2 * Math.PI) / sides + step * 0.5;
            const px = cx + Math.cos(angle) * rad;
            const py = cy + Math.sin(angle) * rad;
            if (s === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
          }
          ctx.closePath();
          ctx.fill();

          // Center Hole
          ctx.fillStyle = '#0f172a';
          ctx.beginPath(); ctx.arc(cx, cy, 16, 0, 2 * Math.PI); ctx.fill();

          return { targetX: cx, targetY: cy, targetRadius: rad, primaryVal: 6 };
        }

        if (selectedScene === 'hough_lines') {
          // Road Lane with Dashed Markers
          ctx.fillStyle = '#1e293b';
          ctx.fillRect(0, 180, w, h - 180);
          ctx.fillStyle = '#020617';
          ctx.fillRect(0, 0, w, 180);

          // Left Yellow Solid Boundary Line
          ctx.strokeStyle = '#facc15';
          ctx.lineWidth = 6;
          ctx.beginPath(); ctx.moveTo(w / 2 - 40, 180); ctx.lineTo(60, h); ctx.stroke();

          // Right White Solid Boundary Line
          ctx.strokeStyle = '#ffffff';
          ctx.lineWidth = 6;
          ctx.beginPath(); ctx.moveTo(w / 2 + 40, 180); ctx.lineTo(w - 60, h); ctx.stroke();

          const curveOffset = Math.sin(step * 0.7) * 45;
          ctx.strokeStyle = '#ffffff';
          ctx.lineWidth = 4;
          ctx.setLineDash([20, 18]);
          ctx.beginPath(); ctx.moveTo(w / 2, 180); ctx.quadraticCurveTo(w / 2 + curveOffset * 0.5, 320, w / 2 + curveOffset, h); ctx.stroke();
          ctx.setLineDash([]);

          return { targetX: Math.floor(w / 2 + curveOffset), targetY: 360, targetRadius: 40, primaryVal: curveOffset };
        }

        if (selectedScene === 'hough_circles') {
          ctx.fillStyle = '#0b0f19';
          ctx.fillRect(0, 0, w, h);

          const hx = Math.floor(w / 2 + Math.cos(step * 0.8) * 130);
          const hy = Math.floor(h / 2 + Math.sin(step * 0.8) * 75);

          // Concentric circular target
          ctx.fillStyle = '#ec4899';
          ctx.beginPath(); ctx.arc(hx, hy, 45, 0, 2 * Math.PI); ctx.fill();
          ctx.fillStyle = '#0b0f19';
          ctx.beginPath(); ctx.arc(hx, hy, 30, 0, 2 * Math.PI); ctx.fill();
          ctx.fillStyle = '#ec4899';
          ctx.beginPath(); ctx.arc(hx, hy, 15, 0, 2 * Math.PI); ctx.fill();

          return { targetX: hx, targetY: hy, targetRadius: 45, primaryVal: 1 };
        }

        if (selectedScene === 'histogram' || selectedScene === 'feature_corners' || selectedScene === 'perspective_warp' || selectedScene === 'general_cv') {
          ctx.fillStyle = '#0f172a';
          ctx.fillRect(0, 0, w, h);

          // Grid pattern
          ctx.strokeStyle = 'rgba(148, 163, 184, 0.15)';
          for (let x = 0; x < w; x += 40) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke(); }
          for (let y = 0; y < h; y += 40) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke(); }

          const gx = Math.floor(w / 2 + Math.cos(step * 0.7) * 120);
          const gy = Math.floor(h / 2 + Math.sin(step * 0.7) * 70);

          // Geometric calibration object with sharp corners
          ctx.fillStyle = '#38bdf8';
          ctx.fillRect(gx - 45, gy - 45, 90, 90);
          ctx.fillStyle = '#0284c7';
          ctx.beginPath(); ctx.arc(gx, gy, 25, 0, 2 * Math.PI); ctx.fill();

          // Title badge in scene
          ctx.fillStyle = '#f8fafc';
          ctx.font = 'bold 11px monospace';
          ctx.fillText(`TESTBED: ${problem.title}`, 20, 30);

          return { targetX: gx, targetY: gy, targetRadius: 45, primaryVal: 100 };
        }

        // Default: Ball Tracker / HSV Color Masking Scene
        // Lab Calibrated Grid
        ctx.strokeStyle = 'rgba(56, 189, 248, 0.12)';
        ctx.lineWidth = 1;
        for (let x = 0; x < w; x += 40) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke(); }
        for (let y = 0; y < h; y += 40) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke(); }

        // Calibration Test Card
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(30, 40, 80, 50);
        ctx.fillStyle = '#000000';
        ctx.fillRect(30, 40, 40, 25);
        ctx.fillRect(70, 65, 40, 25);
        ctx.strokeStyle = '#38bdf8';
        ctx.strokeRect(30, 40, 80, 50);

        // Moving Vibrant Red Sphere
        const tx = Math.floor(w / 2 + Math.cos(step) * 190);
        const ty = Math.floor(h / 2 + Math.sin(step * 1.6) * 125);
        const tr = 36;

        const redGrad = ctx.createRadialGradient(tx - 8, ty - 8, 4, tx, ty, tr);
        redGrad.addColorStop(0, '#ff6b6b');
        redGrad.addColorStop(0.7, '#e11d48');
        redGrad.addColorStop(1, '#881337');

        ctx.fillStyle = redGrad;
        ctx.beginPath();
        ctx.arc(tx, ty, tr, 0, 2 * Math.PI);
        ctx.fill();
        ctx.strokeStyle = '#f43f5e';
        ctx.lineWidth = 2;
        ctx.stroke();

        // Green Obstacle Block
        ctx.fillStyle = '#10b981';
        ctx.fillRect(480, 320, 90, 60);

        return { targetX: tx, targetY: ty, targetRadius: tr, primaryVal: 0 };
      };

      // Draw Raw Stage
      if (rawCtx) {
        renderSourceScene(rawCtx);
      }
      const { targetX, targetY, targetRadius, primaryVal } = renderSourceScene(procCtx);

      // Trajectory History for Centroid Tracker
      trajectoryHistoryRef.current.push({ x: targetX, y: targetY });
      if (trajectoryHistoryRef.current.length > 25) {
        trajectoryHistoryRef.current.shift();
      }

      // -------------------------------------------------------------
      // 2. DETERMINE ACTIVE FILTER MODE
      // -------------------------------------------------------------
      let activeFilter: CvFilterType = selectedFilter;
      if (activeFilter === 'auto') {
        const lowerCode = code.toLowerCase();
        if (lowerCode.includes('canny') || lowerCode.includes('sobel') || lowerCode.includes('edge')) {
          activeFilter = 'canny';
        } else if (lowerCode.includes('inrange') || lowerCode.includes('threshold') || lowerCode.includes('binary')) {
          activeFilter = 'threshold';
        } else if (lowerCode.includes('morphologyex') || lowerCode.includes('erode') || lowerCode.includes('dilate')) {
          activeFilter = 'morphology';
        } else if (lowerCode.includes('color_bgr2hsv') || lowerCode.includes('hsv')) {
          activeFilter = 'hsv';
        } else if (lowerCode.includes('color_bgr2gray') || lowerCode.includes('cvtcolor') || lowerCode.includes('gray')) {
          activeFilter = 'grayscale';
        } else if (lowerCode.includes('gaussianblur') || lowerCode.includes('blur') || lowerCode.includes('median')) {
          activeFilter = 'blur';
        } else if (lowerCode.includes('findcontours') || lowerCode.includes('contour')) {
          activeFilter = 'contours';
        } else if (lowerCode.includes('boundingrect') || lowerCode.includes('bbox')) {
          activeFilter = 'bbox';
        } else if (lowerCode.includes('moments') || lowerCode.includes('centroid')) {
          activeFilter = 'moments';
        } else if (lowerCode.includes('houghlines')) {
          activeFilter = 'hough_lines';
        } else if (lowerCode.includes('houghcircles')) {
          activeFilter = 'hough_circles';
        } else if (lowerCode.includes('equalizehist') || lowerCode.includes('calchist') || lowerCode.includes('histogram')) {
          activeFilter = 'histogram';
        } else if (lowerCode.includes('cornerharris') || lowerCode.includes('goodfeaturestotrack')) {
          activeFilter = 'corners';
        } else if (lowerCode.includes('warpperspective') || lowerCode.includes('perspective')) {
          activeFilter = 'warp';
        } else if (lowerCode.includes('solvepnp') || lowerCode.includes('rvec') || lowerCode.includes('tvec')) {
          activeFilter = 'pose';
        } else if (lowerCode.includes('calcopticalflowpyrlk') || lowerCode.includes('optical_flow') || lowerCode.includes('opticalflow')) {
          activeFilter = 'flow';
        } else if (lowerCode.includes('pid') || lowerCode.includes('servoing')) {
          activeFilter = 'pid';
        } else if (lowerCode.includes('pinhole') || lowerCode.includes('distance')) {
          activeFilter = 'distance';
        } else if (lowerCode.includes('ros2') || lowerCode.includes('cv_bridge') || lowerCode.includes('sensor_msgs')) {
          activeFilter = 'ros2';
        } else {
          activeFilter = detected.filter;
        }
      }

      // -------------------------------------------------------------
      // 3. APPLY COMPUTER VISION IMAGE PROCESSING TO PROCESSED CANVAS
      // -------------------------------------------------------------
      const imgData = procCtx.getImageData(0, 0, w, h);
      const data = imgData.data;
      const len = data.length;

      if (activeFilter === 'grayscale') {
        for (let i = 0; i < len; i += 4) {
          const g = 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2];
          data[i] = g; data[i + 1] = g; data[i + 2] = g;
        }
        procCtx.putImageData(imgData, 0, 0);
      } else if (activeFilter === 'red_mask' || activeFilter === 'threshold') {
        // Binary Thresholding & Color Isolation Mask
        for (let i = 0; i < len; i += 4) {
          const r = data[i], g = data[i + 1], b = data[i + 2];
          const isTarget = (r > 120 && r > g * 1.3 && r > b * 1.3) || (r > 130 && g > 130 && b > 130);
          const v = isTarget ? 255 : 0;
          data[i] = v; data[i + 1] = v; data[i + 2] = v;
        }
        procCtx.putImageData(imgData, 0, 0);
      } else if (activeFilter === 'hsv') {
        // Cylindrical HSV Color Map representation
        for (let i = 0; i < len; i += 4) {
          const r = data[i] / 255, g = data[i + 1] / 255, b = data[i + 2] / 255;
          const max = Math.max(r, g, b), min = Math.min(r, g, b);
          const d = max - min;
          let hVal = 0;
          if (d !== 0) {
            if (max === r) hVal = ((g - b) / d + (g < b ? 6 : 0)) / 6;
            else if (max === g) hVal = ((b - r) / d + 2) / 6;
            else hVal = ((r - g) / d + 4) / 6;
          }
          const sVal = max === 0 ? 0 : d / max;
          const vVal = max;
          data[i] = Math.round(hVal * 255);
          data[i + 1] = Math.round(sVal * 255);
          data[i + 2] = Math.round(vVal * 255);
        }
        procCtx.putImageData(imgData, 0, 0);
      } else if (activeFilter === 'morphology') {
        // Morphological opening simulation (erosion + dilation)
        const binary = new Uint8ClampedArray(len / 4);
        for (let i = 0; i < len; i += 4) {
          const r = data[i], g = data[i + 1], b = data[i + 2];
          binary[i / 4] = (r > 110 && r > g * 1.2 && r > b * 1.2) ? 1 : 0;
        }
        for (let y = 1; y < h - 1; y++) {
          for (let x = 1; x < w - 1; x++) {
            const idx = y * w + x;
            let sum = 0;
            for (let dy = -1; dy <= 1; dy++) {
              for (let dx = -1; dx <= 1; dx++) {
                sum += binary[(y + dy) * w + (x + dx)];
              }
            }
            const cleanVal = sum >= 4 ? 255 : 0;
            const pIdx = idx * 4;
            data[pIdx] = cleanVal;
            data[pIdx + 1] = cleanVal;
            data[pIdx + 2] = cleanVal;
          }
        }
        procCtx.putImageData(imgData, 0, 0);
      } else if (activeFilter === 'canny' || activeFilter === 'sobel') {
        const gray = new Uint8ClampedArray(len / 4);
        for (let i = 0; i < len; i += 4) {
          gray[i / 4] = 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2];
        }
        for (let y = 1; y < h - 1; y++) {
          for (let x = 1; x < w - 1; x++) {
            const idx = y * w + x;
            const gx = gray[idx + 1] - gray[idx - 1];
            const gy = gray[idx + w] - gray[idx - w];
            const mag = Math.abs(gx) + Math.abs(gy);
            const pIdx = idx * 4;
            const isEdge = mag > 26;
            data[pIdx] = isEdge ? 0 : 4;
            data[pIdx + 1] = isEdge ? 255 : 8;
            data[pIdx + 2] = isEdge ? 180 : 16;
          }
        }
        procCtx.putImageData(imgData, 0, 0);
      } else if (activeFilter === 'blur') {
        for (let y = 2; y < h - 2; y += 2) {
          for (let x = 2; x < w - 2; x += 2) {
            const idx = (y * w + x) * 4;
            data[idx] = (data[idx] + data[idx + 4] + data[idx - 4]) / 3;
            data[idx + 1] = (data[idx + 1] + data[idx + 5] + data[idx - 3]) / 3;
            data[idx + 2] = (data[idx + 2] + data[idx + 6] + data[idx - 2]) / 3;
          }
        }
        procCtx.putImageData(imgData, 0, 0);
      } else if (activeFilter === 'contours') {
        // High-contrast scene with neon contour outlines
        for (let i = 0; i < len; i += 4) {
          const g = 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2];
          data[i] = Math.round(g * 0.18);
          data[i + 1] = Math.round(g * 0.25);
          data[i + 2] = Math.round(g * 0.35);
        }
        procCtx.putImageData(imgData, 0, 0);
      } else if (activeFilter === 'histogram') {
        // 256-bin histogram equalization
        const hist = new Uint32Array(256);
        for (let i = 0; i < len; i += 4) {
          const l = Math.round(0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2]);
          hist[l]++;
        }
        const cdf = new Float32Array(256);
        let sum = 0;
        const total = len / 4;
        for (let i = 0; i < 256; i++) {
          sum += hist[i];
          cdf[i] = sum / total;
        }
        for (let i = 0; i < len; i += 4) {
          const l = Math.round(0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2]);
          const eq = Math.round(cdf[l] * 255);
          data[i] = eq; data[i + 1] = eq; data[i + 2] = eq;
        }
        procCtx.putImageData(imgData, 0, 0);
      } else if (activeFilter === 'corners') {
        for (let i = 0; i < len; i += 4) {
          data[i] = Math.round(data[i] * 0.45);
          data[i + 1] = Math.round(data[i + 1] * 0.45);
          data[i + 2] = Math.round(data[i + 2] * 0.45);
        }
        procCtx.putImageData(imgData, 0, 0);
      } else if (activeFilter === 'hough_lines') {
        for (let i = 0; i < len; i += 4) {
          const g = 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2];
          data[i] = Math.round(g * 0.2);
          data[i + 1] = Math.round(g * 0.25);
          data[i + 2] = Math.round(g * 0.35);
        }
        procCtx.putImageData(imgData, 0, 0);
      }

      // -------------------------------------------------------------
      // 4. DRAW PROBLEM-SPECIFIC OVERLAYS, TELEMETRY & ROBOTICS HUD
      // -------------------------------------------------------------
      const isFailed = Boolean(simulationResult && simulationResult.passed === false);
      if (isFailed) {
        // Visual feedback when user code fails / has syntax errors
        procCtx.fillStyle = 'rgba(15, 23, 42, 0.72)';
        procCtx.fillRect(0, 0, w, h);

        // Scanlines
        procCtx.fillStyle = 'rgba(239, 68, 68, 0.08)';
        for (let y = 0; y < h; y += 4) {
          procCtx.fillRect(0, y, w, 2);
        }

        // Glitch bar
        const glitchY = Math.floor((Math.sin(step * 3) * 0.5 + 0.5) * (h - 20));
        procCtx.fillStyle = 'rgba(244, 63, 94, 0.22)';
        procCtx.fillRect(0, glitchY, w, 6);

        // Broken Red Reticle
        procCtx.strokeStyle = '#ef4444';
        procCtx.lineWidth = 2.5;
        procCtx.beginPath();
        procCtx.moveTo(w / 2 - 28, h / 2 - 28); procCtx.lineTo(w / 2 + 28, h / 2 + 28);
        procCtx.moveTo(w / 2 + 28, h / 2 - 28); procCtx.lineTo(w / 2 - 28, h / 2 + 28);
        procCtx.stroke();

        procCtx.setLineDash([6, 6]);
        procCtx.beginPath();
        procCtx.arc(w / 2, h / 2, 44, 0, 2 * Math.PI);
        procCtx.stroke();
        procCtx.setLineDash([]);

        // Prominent Failure HUD Diagnostic Box
        const errBoxW = 460;
        const errBoxH = 92;
        const errBoxX = (w - errBoxW) / 2;
        const errBoxY = h / 2 + 55;

        procCtx.fillStyle = 'rgba(15, 23, 42, 0.94)';
        procCtx.fillRect(errBoxX, errBoxY, errBoxW, errBoxH);
        procCtx.strokeStyle = '#ef4444';
        procCtx.lineWidth = 2;
        procCtx.strokeRect(errBoxX, errBoxY, errBoxW, errBoxH);

        // Top Warning Banner
        procCtx.fillStyle = '#ef4444';
        procCtx.fillRect(errBoxX, errBoxY, errBoxW, 24);
        procCtx.fillStyle = '#ffffff';
        procCtx.font = 'bold 11px monospace';
        procCtx.fillText(`[!] PIPELINE INACTIVE - CODE EXECUTION FAILED`, errBoxX + 10, errBoxY + 16);

        // Error message text
        procCtx.fillStyle = '#fca5a5';
        procCtx.font = '10px monospace';
        const msg = (simulationResult.message || 'Syntax or logical error in OpenCV code').slice(0, 56);
        procCtx.fillText(msg, errBoxX + 10, errBoxY + 42);

        if (simulationResult.errorLine) {
          procCtx.fillStyle = '#f59e0b';
          const lineStr = `Line ${simulationResult.errorLine}: ${simulationResult.errorSnippet || ''}`.slice(0, 56);
          procCtx.fillText(lineStr, errBoxX + 10, errBoxY + 60);
        } else if (simulationResult.errorHint) {
          procCtx.fillStyle = '#94a3b8';
          procCtx.fillText(`Hint: ${simulationResult.errorHint}`.slice(0, 56), errBoxX + 10, errBoxY + 60);
        }

        procCtx.fillStyle = '#f87171';
        procCtx.font = 'bold 9px monospace';
        procCtx.fillText(`ROBOTICS STATUS: MOTOR_ESTOP • TRACKING_ABORTED`, errBoxX + 10, errBoxY + 80);

        setTelemetry({
          fps: 0.0,
          latencyMs: 0.0,
          centroidX: w / 2,
          centroidY: h / 2,
          targetArea: 0,
          contourCount: 0,
          activeFilterName: simulationResult.errorType ? simulationResult.errorType.toUpperCase() + '_ERROR' : 'PIPELINE_ERROR',
          steeringOffsetDeg: 0.0,
          confidence: 0.0,
          statusText: 'EXECUTION_FAILED'
        });

        animFrameRef.current = requestAnimationFrame(processFrame);
        return;
      }

      const cx = targetX;
      const cy = targetY;
      const r = targetRadius;

      if (selectedScene === 'autonomous_lane') {
        // Drivable Lane Green Polygon
        procCtx.fillStyle = 'rgba(16, 185, 129, 0.22)';
        procCtx.beginPath();
        procCtx.moveTo(w / 2 - 40, 180);
        procCtx.lineTo(w / 2 + 40, 180);
        procCtx.lineTo(w - 60, h);
        procCtx.lineTo(60, h);
        procCtx.closePath();
        procCtx.fill();

        // Vehicle Center Guidance Line
        procCtx.strokeStyle = '#38bdf8';
        procCtx.lineWidth = 2;
        procCtx.beginPath();
        procCtx.moveTo(w / 2, h);
        procCtx.lineTo(cx, 340);
        procCtx.stroke();

        // Steering Arrow
        const angleDeg = ((cx - w / 2) / 8).toFixed(1);
        procCtx.strokeStyle = '#f59e0b';
        procCtx.lineWidth = 3;
        procCtx.beginPath();
        procCtx.moveTo(w / 2, h - 30);
        procCtx.lineTo(cx, h - 90);
        procCtx.stroke();

        // Steering Target Reticle
        procCtx.strokeStyle = '#f59e0b';
        procCtx.strokeRect(cx - 15, 340 - 15, 30, 30);
        procCtx.fillStyle = '#f59e0b';
        procCtx.font = 'bold 11px monospace';
        procCtx.fillText(`STEER: ${angleDeg}°`, cx - 35, 320);

        setTelemetry({
          fps: 60.0,
          latencyMs: 1.2,
          centroidX: cx,
          centroidY: 340,
          targetArea: 5820,
          contourCount: 2,
          activeFilterName: 'cv2.Canny + PerspectiveWarp',
          steeringOffsetDeg: parseFloat(angleDeg),
          confidence: 99.6,
          statusText: 'LANE_TRACK_LOCKED'
        });

      } else if (selectedScene === 'aruco_marker') {
        // ArUco Quad Boundary
        procCtx.strokeStyle = '#10b981';
        procCtx.lineWidth = 3;
        procCtx.strokeRect(cx - r, cy - r, r * 2, r * 2);

        // 3D Coordinate Pose Projection Axes:
        // Red = X-axis, Green = Y-axis, Blue = Z-axis projecting out
        procCtx.lineWidth = 4;
        // X Axis (Red)
        procCtx.strokeStyle = '#ef4444';
        procCtx.beginPath(); procCtx.moveTo(cx, cy); procCtx.lineTo(cx + 60, cy); procCtx.stroke();
        // Y Axis (Green)
        procCtx.strokeStyle = '#22c55e';
        procCtx.beginPath(); procCtx.moveTo(cx, cy); procCtx.lineTo(cx, cy + 60); procCtx.stroke();
        // Z Axis (Blue / Cyan angled projection)
        procCtx.strokeStyle = '#06b6d4';
        procCtx.beginPath(); procCtx.moveTo(cx, cy); procCtx.lineTo(cx - 40, cy - 40); procCtx.stroke();

        // Tag Info
        procCtx.fillStyle = '#10b981';
        procCtx.fillRect(cx - r, cy - r - 22, 140, 22);
        procCtx.fillStyle = '#ffffff';
        procCtx.font = 'bold 11px monospace';
        procCtx.fillText(`ARUCO #23 [0.84m]`, cx - r + 6, cy - r - 7);

        setTelemetry({
          fps: 60.0,
          latencyMs: 1.0,
          centroidX: cx,
          centroidY: cy,
          targetArea: Math.round(r * r * 4),
          contourCount: 4,
          activeFilterName: 'cv2.aruco.detectMarkers',
          steeringOffsetDeg: 0.4,
          confidence: 99.8,
          statusText: 'DOCKING_ALIGNED'
        });

      } else if (selectedScene === 'pose_estimation') {
        // 3D Coordinate Pose Projection Axes via solvePnP
        // Red = X-axis, Green = Y-axis, Blue = Z-axis projecting out
        procCtx.lineWidth = 4;
        // X Axis (Red)
        procCtx.strokeStyle = '#ef4444';
        procCtx.beginPath(); procCtx.moveTo(cx, cy); procCtx.lineTo(cx + 65, cy - 10); procCtx.stroke();
        procCtx.fillStyle = '#ef4444'; procCtx.font = 'bold 10px monospace'; procCtx.fillText('+X', cx + 70, cy - 10);

        // Y Axis (Green)
        procCtx.strokeStyle = '#22c55e';
        procCtx.beginPath(); procCtx.moveTo(cx, cy); procCtx.lineTo(cx - 20, cy + 65); procCtx.stroke();
        procCtx.fillStyle = '#22c55e'; procCtx.font = 'bold 10px monospace'; procCtx.fillText('+Y', cx - 25, cy + 78);

        // Z Axis (Cyan / Blue perspective arrow projecting outward)
        procCtx.strokeStyle = '#38bdf8';
        procCtx.beginPath(); procCtx.moveTo(cx, cy); procCtx.lineTo(cx - 45, cy - 45); procCtx.stroke();
        procCtx.fillStyle = '#38bdf8'; procCtx.font = 'bold 10px monospace'; procCtx.fillText('+Z (Depth)', cx - 60, cy - 50);

        // Bounding Quadrilateral
        procCtx.strokeStyle = '#38bdf8';
        procCtx.lineWidth = 2;
        procCtx.strokeRect(cx - r, cy - r, r * 2, r * 2);

        // Corner Points
        const corners = [
          { x: cx - r, y: cy - r, label: 'P0' },
          { x: cx + r, y: cy - r, label: 'P1' },
          { x: cx + r, y: cy + r, label: 'P2' },
          { x: cx - r, y: cy + r, label: 'P3' }
        ];
        corners.forEach((c) => {
          procCtx.fillStyle = '#f59e0b';
          procCtx.beginPath(); procCtx.arc(c.x, c.y, 4, 0, 2 * Math.PI); procCtx.fill();
          procCtx.fillStyle = '#ffffff';
          procCtx.font = 'bold 9px monospace';
          procCtx.fillText(c.label, c.x + 6, c.y - 4);
        });

        // 6-DoF Pose Readout HUD Banner
        procCtx.fillStyle = 'rgba(15, 23, 42, 0.9)';
        procCtx.fillRect(cx - r - 20, cy - r - 32, 240, 26);
        procCtx.strokeStyle = '#38bdf8';
        procCtx.strokeRect(cx - r - 20, cy - r - 32, 240, 26);
        procCtx.fillStyle = '#38bdf8';
        procCtx.font = 'bold 10px monospace';
        procCtx.fillText(`solvePnP: Tvec=[0.05, -0.02, 0.85m]`, cx - r - 14, cy - r - 18);
        procCtx.fillStyle = '#a5f3fc';
        procCtx.font = '9px monospace';
        procCtx.fillText(`Rvec=[0.12, -0.25, 1.57] • RMSE: 0.14px`, cx - r - 14, cy - r - 8);

        setTelemetry({
          fps: 60.0,
          latencyMs: 1.1,
          centroidX: cx,
          centroidY: cy,
          targetArea: Math.round(r * r * 4),
          contourCount: 4,
          activeFilterName: 'cv2.solvePnP(Iterative)',
          steeringOffsetDeg: 0.0,
          confidence: 99.8,
          statusText: 'POSE_LOCKED_6DOF'
        });

      } else if (selectedScene === 'optical_flow') {
        // Optical Flow Motion Velocity Vector Field
        procCtx.lineWidth = 2;
        const driftX = Math.sin(step * 0.8) * 18;
        const driftY = Math.cos(step * 0.7) * 12;

        // Draw motion vector grid of arrows across 16 feature points
        for (let i = 0; i < 16; i++) {
          const fx = ((i * 137 + 50) % (w - 80)) + 40;
          const fy = ((i * 193 + 60) % (h - 80)) + 40;
          const vx = driftX + Math.sin(i * 1.5) * 4;
          const vy = driftY + Math.cos(i * 1.5) * 4;

          procCtx.strokeStyle = '#38bdf8';
          procCtx.beginPath();
          procCtx.moveTo(fx, fy);
          procCtx.lineTo(fx + vx, fy + vy);
          procCtx.stroke();

          // Arrowhead
          procCtx.fillStyle = '#facc15';
          procCtx.beginPath();
          procCtx.arc(fx + vx, fy + vy, 3, 0, 2 * Math.PI);
          procCtx.fill();
        }

        // Center flight velocity HUD
        procCtx.fillStyle = 'rgba(15, 23, 42, 0.85)';
        procCtx.fillRect(20, 40, 260, 28);
        procCtx.strokeStyle = '#38bdf8';
        procCtx.strokeRect(20, 40, 260, 28);
        procCtx.fillStyle = '#38bdf8';
        procCtx.font = 'bold 10px monospace';
        procCtx.fillText(`OPTICAL FLOW: Vx=${driftX.toFixed(1)}px/f, Vy=${driftY.toFixed(1)}px/f`, 26, 54);
        procCtx.fillStyle = '#facc15';
        procCtx.font = '9px monospace';
        procCtx.fillText(`Ground Drift Speed = ${(Math.sqrt(driftX * driftX + driftY * driftY) * 0.04).toFixed(2)} m/s`, 26, 64);

        setTelemetry({
          fps: 60.0,
          latencyMs: 1.0,
          centroidX: cx,
          centroidY: cy,
          targetArea: 5120,
          contourCount: 16,
          activeFilterName: 'cv2.calcOpticalFlowPyrLK',
          steeringOffsetDeg: parseFloat((driftX * 0.2).toFixed(1)),
          confidence: 99.5,
          statusText: 'FLOW_VECTORS_LOCKED'
        });

      } else if (selectedScene === 'pid_controller' || selectedScene === 'visual_servoing') {
        // Visual Servoing & PID Closed-Loop Steering
        // 1. Camera optical center crosshair at (w/2, h/2)
        procCtx.strokeStyle = '#ffffff';
        procCtx.lineWidth = 1.5;
        procCtx.beginPath();
        procCtx.moveTo(w / 2 - 30, h / 2); procCtx.lineTo(w / 2 + 30, h / 2);
        procCtx.moveTo(w / 2, h / 2 - 30); procCtx.lineTo(w / 2, h / 2 + 30);
        procCtx.arc(w / 2, h / 2, 20, 0, 2 * Math.PI);
        procCtx.stroke();
        procCtx.fillStyle = '#ffffff';
        procCtx.font = 'bold 9px monospace';
        procCtx.fillText('OPTICAL_SETPOINT (320, 240)', w / 2 - 65, h / 2 + 35);

        // 2. Error Vector line between optical center and target
        procCtx.strokeStyle = '#f59e0b';
        procCtx.lineWidth = 2;
        procCtx.setLineDash([5, 4]);
        procCtx.beginPath();
        procCtx.moveTo(w / 2, h / 2);
        procCtx.lineTo(cx, cy);
        procCtx.stroke();
        procCtx.setLineDash([]);

        // 3. Target reticle
        procCtx.strokeStyle = '#06b6d4';
        procCtx.lineWidth = 2.5;
        procCtx.beginPath();
        procCtx.arc(cx, cy, 32, 0, 2 * Math.PI);
        procCtx.stroke();

        const errX = cx - w / 2;
        const errY = cy - h / 2;
        const steerDeg = (-errX / 8).toFixed(1);
        const pwmL = Math.min(99, Math.max(20, Math.round(75 - errX * 0.35)));
        const pwmR = Math.min(99, Math.max(20, Math.round(75 + errX * 0.35)));

        // Error & PWM HUD box at bottom
        procCtx.fillStyle = 'rgba(15, 23, 42, 0.9)';
        procCtx.fillRect(20, h - 75, 340, 55);
        procCtx.strokeStyle = '#06b6d4';
        procCtx.strokeRect(20, h - 75, 340, 55);

        procCtx.fillStyle = '#f59e0b';
        procCtx.font = 'bold 10px monospace';
        procCtx.fillText(`PID ERROR: ΔX=${errX > 0 ? '+' : ''}${errX}px, ΔY=${errY > 0 ? '+' : ''}${errY}px`, 28, h - 58);

        procCtx.fillStyle = '#38bdf8';
        procCtx.font = '10px monospace';
        procCtx.fillText(`STEERING EFFORT: ${steerDeg}° • Kp=1.25, Ki=0.04, Kd=0.32`, 28, h - 42);

        procCtx.fillStyle = '#22c55e';
        procCtx.font = 'bold 9px monospace';
        procCtx.fillText(`ACTUATION: PWM_L: ${pwmL}% | PWM_R: ${pwmR}% (CLOSED LOOP: OK)`, 28, h - 26);

        setTelemetry({
          fps: 60.0,
          latencyMs: 1.1,
          centroidX: cx,
          centroidY: cy,
          targetArea: 3200,
          contourCount: 1,
          activeFilterName: 'PID Closed-Loop Servoing',
          steeringOffsetDeg: parseFloat(steerDeg),
          confidence: 99.7,
          statusText: 'SERVO_PID_LOCKED'
        });

      } else if (selectedScene === 'kinematics') {
        // Differential Drive Kinematics Overlay
        const heading = primaryVal || 0;
        procCtx.strokeStyle = '#38bdf8';
        procCtx.lineWidth = 2;
        procCtx.beginPath();
        procCtx.arc(cx, cy, 48, 0, 2 * Math.PI);
        procCtx.stroke();

        // Trajectory arc
        procCtx.strokeStyle = 'rgba(251, 191, 36, 0.6)';
        procCtx.lineWidth = 2;
        procCtx.setLineDash([4, 4]);
        procCtx.beginPath();
        procCtx.arc(cx - 30, cy + 30, 80, -0.5, 1.2);
        procCtx.stroke();
        procCtx.setLineDash([]);

        // Readout HUD
        procCtx.fillStyle = 'rgba(15, 23, 42, 0.9)';
        procCtx.fillRect(20, 40, 280, 40);
        procCtx.strokeStyle = '#38bdf8';
        procCtx.strokeRect(20, 40, 280, 40);
        procCtx.fillStyle = '#38bdf8';
        procCtx.font = 'bold 10px monospace';
        procCtx.fillText(`DIFFERENTIAL KINEMATICS (UNICYCLE MODEL)`, 28, 54);
        procCtx.fillStyle = '#f8fafc';
        procCtx.font = '9px monospace';
        procCtx.fillText(`V=0.45 m/s | ω=0.28 rad/s | Wheelbase L=0.24m`, 28, 68);

        setTelemetry({
          fps: 60.0,
          latencyMs: 1.0,
          centroidX: cx,
          centroidY: cy,
          targetArea: 3900,
          contourCount: 1,
          activeFilterName: 'Differential Drive Kinematics',
          steeringOffsetDeg: 0.0,
          confidence: 99.6,
          statusText: 'ODOMETRY_TRACKED'
        });

      } else if (selectedScene === 'pinhole_distance') {
        // Pinhole Camera Obstacle Distance Estimation
        const distZ = primaryVal || 1.7;
        const boxH = r * 2;
        const boxW = Math.round(boxH * 1.1);

        // Distance projection laser sight
        procCtx.strokeStyle = distZ < 1.1 ? '#ef4444' : distZ < 1.6 ? '#f59e0b' : '#10b981';
        procCtx.lineWidth = 2;
        procCtx.setLineDash([6, 4]);
        procCtx.beginPath();
        procCtx.moveTo(w / 2, h);
        procCtx.lineTo(cx, cy + boxH / 2);
        procCtx.stroke();
        procCtx.setLineDash([]);

        // Corner brackets on obstacle box
        const bx = cx - boxW / 2;
        const by = cy - boxH / 2;
        const bracket = 14;
        procCtx.strokeStyle = procCtx.strokeStyle;
        procCtx.lineWidth = 3;
        // Top-Left
        procCtx.beginPath(); procCtx.moveTo(bx, by + bracket); procCtx.lineTo(bx, by); procCtx.lineTo(bx + bracket, by); procCtx.stroke();
        // Top-Right
        procCtx.beginPath(); procCtx.moveTo(bx + boxW - bracket, by); procCtx.lineTo(bx + boxW, by); procCtx.lineTo(bx + boxW, by + bracket); procCtx.stroke();
        // Bottom-Left
        procCtx.beginPath(); procCtx.moveTo(bx, by + boxH - bracket); procCtx.lineTo(bx, by + boxH); procCtx.lineTo(bx + bracket, by + boxH); procCtx.stroke();
        // Bottom-Right
        procCtx.beginPath(); procCtx.moveTo(bx + boxW - bracket, by + boxH); procCtx.lineTo(bx + boxW, by + boxH); procCtx.lineTo(bx + boxW, by + boxH - bracket); procCtx.stroke();

        // Distance Badge directly above obstacle
        procCtx.fillStyle = 'rgba(15, 23, 42, 0.92)';
        procCtx.fillRect(bx - 20, by - 38, 220, 32);
        procCtx.strokeStyle = distZ < 1.1 ? '#ef4444' : distZ < 1.6 ? '#f59e0b' : '#10b981';
        procCtx.lineWidth = 1.5;
        procCtx.strokeRect(bx - 20, by - 38, 220, 32);

        procCtx.fillStyle = distZ < 1.1 ? '#ef4444' : distZ < 1.6 ? '#f59e0b' : '#10b981';
        procCtx.font = 'bold 11px monospace';
        procCtx.fillText(`Z = ${distZ.toFixed(2)}m [${distZ < 1.1 ? 'PROXIMITY_DANGER' : distZ < 1.6 ? 'WARNING' : 'CLEAR'}]`, bx - 12, by - 22);

        procCtx.fillStyle = '#94a3b8';
        procCtx.font = '9px monospace';
        procCtx.fillText(`Z=(f*H)/h = (615*0.2m)/${boxH}px • TTC: ${(distZ / 0.45).toFixed(1)}s`, bx - 12, by - 10);

        setTelemetry({
          fps: 60.0,
          latencyMs: 1.2,
          centroidX: cx,
          centroidY: cy,
          targetArea: boxW * boxH,
          contourCount: 1,
          activeFilterName: 'Pinhole Depth Model',
          steeringOffsetDeg: 0.0,
          confidence: 99.5,
          statusText: distZ < 1.1 ? 'PROXIMITY_WARN' : 'DISTANCE_TRACKED'
        });

      } else if (selectedScene === 'ros2_node') {
        // ROS2 sensor_msgs Image Publisher HUD
        procCtx.strokeStyle = '#22c55e';
        procCtx.lineWidth = 2;
        procCtx.strokeRect(cx - r - 4, cy - r - 4, (r + 4) * 2, (r + 4) * 2);

        // ROS2 Topic and QoS Banner
        procCtx.fillStyle = 'rgba(15, 23, 42, 0.9)';
        procCtx.fillRect(20, h - 70, 360, 50);
        procCtx.strokeStyle = '#22c55e';
        procCtx.strokeRect(20, h - 70, 360, 50);

        procCtx.fillStyle = '#4ade80';
        procCtx.font = 'bold 10px monospace';
        procCtx.fillText(`ROS2 TOPIC: /camera/image_proc [sensor_msgs/Image]`, 28, h - 52);

        procCtx.fillStyle = '#ffffff';
        procCtx.font = '9px monospace';
        procCtx.fillText(`Node: /vision_processor • DDS QoS: Reliable @ 60.0 Hz`, 28, h - 38);

        procCtx.fillStyle = '#a7f3d0';
        procCtx.font = '9px monospace';
        procCtx.fillText(`cv_bridge: BGR888 -> imgmsg (0.38ms serialize) • STATUS: OK`, 28, h - 25);

        setTelemetry({
          fps: 60.0,
          latencyMs: 0.9,
          centroidX: cx,
          centroidY: cy,
          targetArea: Math.round(r * r * 4),
          contourCount: 1,
          activeFilterName: 'ROS2 cv_bridge',
          steeringOffsetDeg: 0.0,
          confidence: 99.9,
          statusText: 'ROS2_STREAMING'
        });

      } else if (selectedScene === 'face_detection') {
        // Cyan Face Bounding Box
        procCtx.strokeStyle = '#06b6d4';
        procCtx.lineWidth = 2.5;
        procCtx.strokeRect(cx - r, cy - r * 1.25, r * 2, r * 2.5);

        // Eye Circles
        procCtx.strokeStyle = '#38bdf8';
        procCtx.lineWidth = 2;
        procCtx.beginPath(); procCtx.arc(cx - 24, cy - 16, 12, 0, 2 * Math.PI); procCtx.stroke();
        procCtx.beginPath(); procCtx.arc(cx + 24, cy - 16, 12, 0, 2 * Math.PI); procCtx.stroke();

        // Label
        procCtx.fillStyle = '#06b6d4';
        procCtx.fillRect(cx - r, cy - r * 1.25 - 22, 130, 22);
        procCtx.fillStyle = '#0f172a';
        procCtx.font = 'bold 11px monospace';
        procCtx.fillText(`FACE 99.2% MATCH`, cx - r + 6, cy - r * 1.25 - 7);

        setTelemetry({
          fps: 60.0,
          latencyMs: 1.4,
          centroidX: cx,
          centroidY: cy,
          targetArea: Math.round(r * 2 * r * 2.5),
          contourCount: 3,
          activeFilterName: 'cv2.CascadeClassifier',
          steeringOffsetDeg: 0.0,
          confidence: 99.2,
          statusText: 'FACE_LOCKED'
        });

      } else if (selectedScene === 'shape_sorter') {
        // Robotic Sorter Gripper Crosshair at center circle
        procCtx.strokeStyle = '#e11d48';
        procCtx.lineWidth = 2;
        procCtx.strokeRect(cx - 42, cy - 42, 84, 84);
        procCtx.fillStyle = '#e11d48';
        procCtx.fillRect(cx - 42, cy - 64, 110, 20);
        procCtx.fillStyle = '#ffffff';
        procCtx.font = 'bold 10px monospace';
        procCtx.fillText(`CIRCLE r=36mm`, cx - 38, cy - 50);

        setTelemetry({
          fps: 60.0,
          latencyMs: 1.3,
          centroidX: cx,
          centroidY: cy,
          targetArea: 4070,
          contourCount: 3,
          activeFilterName: 'cv2.approxPolyDP + Sorter',
          steeringOffsetDeg: 0.0,
          confidence: 99.5,
          statusText: 'PART_CLASSIFIED'
        });

      } else if (selectedScene === 'video_grayscale') {
        // Video Grayscale Calibration Overlay
        procCtx.strokeStyle = '#38bdf8';
        procCtx.lineWidth = 1.5;
        procCtx.strokeRect(40, 40, w - 80, h - 80);

        // Center reticle
        procCtx.beginPath();
        procCtx.arc(w / 2, h / 2, 28, 0, 2 * Math.PI);
        procCtx.moveTo(w / 2 - 40, h / 2); procCtx.lineTo(w / 2 + 40, h / 2);
        procCtx.moveTo(w / 2, h / 2 - 40); procCtx.lineTo(w / 2, h / 2 + 40);
        procCtx.stroke();

        procCtx.fillStyle = '#38bdf8';
        procCtx.fillRect(40, 40, 190, 22);
        procCtx.fillStyle = '#0f172a';
        procCtx.font = 'bold 10px monospace';
        procCtx.fillText(`MONOCHROME 8-BIT [640x480]`, 46, 55);

        setTelemetry({
          fps: 60.0,
          latencyMs: 1.1,
          centroidX: w / 2,
          centroidY: h / 2,
          targetArea: 307200,
          contourCount: 1,
          activeFilterName: 'cv2.cvtColor(BGR2GRAY)',
          steeringOffsetDeg: 0.0,
          confidence: 99.9,
          statusText: 'STREAMING_ACTIVE'
        });

      } else if (selectedScene === 'hsv_segmentation') {
        // HSV Color Segmentation Target Reticle
        procCtx.strokeStyle = '#ef4444';
        procCtx.lineWidth = 2.5;
        procCtx.strokeRect(cx - r - 4, cy - r - 4, (r + 4) * 2, (r + 4) * 2);

        procCtx.fillStyle = '#ef4444';
        procCtx.fillRect(cx - r - 4, cy - r - 26, 170, 22);
        procCtx.fillStyle = '#ffffff';
        procCtx.font = 'bold 10px monospace';
        procCtx.fillText(`HSV H:176° S:86% V:86%`, cx - r, cy - r - 11);

        setTelemetry({
          fps: 60.0,
          latencyMs: 1.2,
          centroidX: cx,
          centroidY: cy,
          targetArea: Math.round(r * r * 4),
          contourCount: 4,
          activeFilterName: 'cv2.cvtColor(BGR2HSV)',
          steeringOffsetDeg: 0.0,
          confidence: 99.7,
          statusText: 'COLOR_SEGMENTED'
        });

      } else if (selectedScene === 'threshold_mask') {
        // Binary Threshold Mask Bounding Box
        procCtx.strokeStyle = '#f43f5e';
        procCtx.lineWidth = 2;
        procCtx.strokeRect(cx - r, cy - r, r * 2, r * 2);

        procCtx.fillStyle = '#f43f5e';
        procCtx.fillRect(cx - r, cy - r - 22, 140, 22);
        procCtx.fillStyle = '#ffffff';
        procCtx.font = 'bold 10px monospace';
        procCtx.fillText(`inRange MASK [0/255]`, cx - r + 4, cy - r - 7);

        setTelemetry({
          fps: 60.0,
          latencyMs: 1.0,
          centroidX: cx,
          centroidY: cy,
          targetArea: Math.round(r * r * 3.14),
          contourCount: 1,
          activeFilterName: 'cv2.inRange(Binary)',
          steeringOffsetDeg: 0.0,
          confidence: 99.5,
          statusText: 'THRESHOLD_LOCKED'
        });

      } else if (selectedScene === 'morphology') {
        // Morphological Filter Overlays
        procCtx.strokeStyle = '#10b981';
        procCtx.lineWidth = 2;
        procCtx.strokeRect(cx - r - 2, cy - r - 2, (r + 2) * 2, (r + 2) * 2);

        procCtx.fillStyle = '#10b981';
        procCtx.fillRect(cx - r - 2, cy - r - 22, 160, 20);
        procCtx.fillStyle = '#ffffff';
        procCtx.font = 'bold 10px monospace';
        procCtx.fillText(`KERNEL: 5x5 ELLIPSE`, cx - r + 4, cy - r - 8);

        setTelemetry({
          fps: 60.0,
          latencyMs: 1.3,
          centroidX: cx,
          centroidY: cy,
          targetArea: Math.round(r * r * 3.14),
          contourCount: 1,
          activeFilterName: 'cv2.morphologyEx(Open)',
          steeringOffsetDeg: 0.0,
          confidence: 99.8,
          statusText: 'DENOISED_CLEAN'
        });

      } else if (selectedScene === 'contours') {
        // Vectorized Contour Polygon
        procCtx.strokeStyle = '#06b6d4';
        procCtx.lineWidth = 3;
        procCtx.beginPath();
        const sides = 6;
        for (let s = 0; s < sides; s++) {
          const angle = (s * 2 * Math.PI) / sides + step * 0.5;
          const px = cx + Math.cos(angle) * (r + 6);
          const py = cy + Math.sin(angle) * (r + 6);
          if (s === 0) procCtx.moveTo(px, py); else procCtx.lineTo(px, py);
        }
        procCtx.closePath();
        procCtx.stroke();

        procCtx.fillStyle = '#06b6d4';
        procCtx.fillRect(cx - r, cy - r - 24, 150, 22);
        procCtx.fillStyle = '#0f172a';
        procCtx.font = 'bold 10px monospace';
        procCtx.fillText(`CONTOUR [6 VERTICES]`, cx - r + 6, cy - r - 9);

        setTelemetry({
          fps: 60.0,
          latencyMs: 1.2,
          centroidX: cx,
          centroidY: cy,
          targetArea: 4860,
          contourCount: 1,
          activeFilterName: 'cv2.findContours',
          steeringOffsetDeg: 0.0,
          confidence: 99.7,
          statusText: 'CONTOUR_EXTRACTED'
        });

      } else if (selectedScene === 'bounding_box') {
        // Upright Bounding Box with Dimensions
        const bw = r * 2.2;
        const bh = r * 2.2;
        procCtx.strokeStyle = '#22c55e';
        procCtx.lineWidth = 2.5;
        procCtx.strokeRect(cx - bw / 2, cy - bh / 2, bw, bh);

        procCtx.fillStyle = '#22c55e';
        procCtx.fillRect(cx - bw / 2, cy - bh / 2 - 22, 160, 22);
        procCtx.fillStyle = '#0f172a';
        procCtx.font = 'bold 10px monospace';
        procCtx.fillText(`BBOX [${Math.round(bw)}x${Math.round(bh)} px]`, cx - bw / 2 + 6, cy - bh / 2 - 7);

        setTelemetry({
          fps: 60.0,
          latencyMs: 1.1,
          centroidX: cx,
          centroidY: cy,
          targetArea: Math.round(bw * bh),
          contourCount: 1,
          activeFilterName: 'cv2.boundingRect',
          steeringOffsetDeg: 0.0,
          confidence: 99.6,
          statusText: 'BBOX_LOCKED'
        });

      } else if (selectedScene === 'moments_centroid') {
        // Centroid Crosshairs & Spatial Moment Vectors
        procCtx.strokeStyle = '#eab308';
        procCtx.lineWidth = 2;
        procCtx.beginPath();
        procCtx.arc(cx, cy, 22, 0, 2 * Math.PI);
        procCtx.moveTo(cx - 32, cy); procCtx.lineTo(cx + 32, cy);
        procCtx.moveTo(cx, cy - 32); procCtx.lineTo(cx, cy + 32);
        procCtx.stroke();

        procCtx.fillStyle = '#eab308';
        procCtx.fillRect(cx - 50, cy - 48, 140, 20);
        procCtx.fillStyle = '#0f172a';
        procCtx.font = 'bold 10px monospace';
        procCtx.fillText(`CENTROID [${cx}, ${cy}]`, cx - 44, cy - 34);

        setTelemetry({
          fps: 60.0,
          latencyMs: 1.0,
          centroidX: cx,
          centroidY: cy,
          targetArea: 4120,
          contourCount: 1,
          activeFilterName: 'cv2.moments',
          steeringOffsetDeg: 0.0,
          confidence: 99.8,
          statusText: 'CENTROID_TRACKED'
        });

      } else if (selectedScene === 'min_enclosing_circle') {
        // Min Enclosing Circle
        procCtx.strokeStyle = '#f59e0b';
        procCtx.lineWidth = 2.5;
        procCtx.beginPath();
        procCtx.arc(cx, cy, r + 4, 0, 2 * Math.PI);
        procCtx.stroke();

        procCtx.fillStyle = '#f59e0b';
        procCtx.fillRect(cx - r, cy - r - 22, 140, 20);
        procCtx.fillStyle = '#0f172a';
        procCtx.font = 'bold 10px monospace';
        procCtx.fillText(`CIRCLE r=${Math.round(r + 4)}px`, cx - r + 6, cy - r - 8);

        setTelemetry({
          fps: 60.0,
          latencyMs: 1.1,
          centroidX: cx,
          centroidY: cy,
          targetArea: Math.round(Math.PI * (r + 4) * (r + 4)),
          contourCount: 1,
          activeFilterName: 'cv2.minEnclosingCircle',
          steeringOffsetDeg: 0.0,
          confidence: 99.7,
          statusText: 'CIRCLE_BOUNDED'
        });

      } else if (selectedScene === 'hough_lines') {
        // Hough Lines Overlay
        const angleDeg = ((cx - w / 2) / 8).toFixed(1);
        procCtx.strokeStyle = '#38bdf8';
        procCtx.lineWidth = 2;
        procCtx.beginPath();
        procCtx.moveTo(w / 2, h);
        procCtx.lineTo(cx, 340);
        procCtx.stroke();

        procCtx.fillStyle = '#38bdf8';
        procCtx.fillRect(cx - 30, 316, 120, 20);
        procCtx.fillStyle = '#0f172a';
        procCtx.font = 'bold 10px monospace';
        procCtx.fillText(`HOUGH LINE ${angleDeg}°`, cx - 24, 330);

        setTelemetry({
          fps: 60.0,
          latencyMs: 1.2,
          centroidX: cx,
          centroidY: 340,
          targetArea: 5820,
          contourCount: 2,
          activeFilterName: 'cv2.HoughLinesP',
          steeringOffsetDeg: parseFloat(angleDeg),
          confidence: 99.5,
          statusText: 'HOUGH_LINES_LOCKED'
        });

      } else if (selectedScene === 'hough_circles') {
        procCtx.strokeStyle = '#ec4899';
        procCtx.lineWidth = 2.5;
        procCtx.beginPath();
        procCtx.arc(cx, cy, r, 0, 2 * Math.PI);
        procCtx.stroke();

        procCtx.fillStyle = '#ec4899';
        procCtx.fillRect(cx - r, cy - r - 22, 140, 20);
        procCtx.fillStyle = '#ffffff';
        procCtx.font = 'bold 10px monospace';
        procCtx.fillText(`HOUGH CIRCLE r=${r}px`, cx - r + 4, cy - r - 8);

        setTelemetry({
          fps: 60.0,
          latencyMs: 1.3,
          centroidX: cx,
          centroidY: cy,
          targetArea: Math.round(Math.PI * r * r),
          contourCount: 1,
          activeFilterName: 'cv2.HoughCircles',
          steeringOffsetDeg: 0.0,
          confidence: 99.4,
          statusText: 'HOUGH_CIRCLES_LOCKED'
        });

      } else if (selectedScene === 'histogram' || selectedScene === 'feature_corners' || selectedScene === 'perspective_warp' || selectedScene === 'general_cv') {
        // General Problem Feature Box
        procCtx.strokeStyle = '#38bdf8';
        procCtx.lineWidth = 2;
        procCtx.strokeRect(cx - r, cy - r, r * 2, r * 2);

        procCtx.fillStyle = '#38bdf8';
        procCtx.fillRect(cx - r, cy - r - 22, 160, 20);
        procCtx.fillStyle = '#0f172a';
        procCtx.font = 'bold 9px monospace';
        procCtx.fillText(`ALGO: ${detected.primaryTarget.slice(0, 18)}`, cx - r + 4, cy - r - 8);

        setTelemetry({
          fps: 60.0,
          latencyMs: 1.1,
          centroidX: cx,
          centroidY: cy,
          targetArea: Math.round(r * r * 4),
          contourCount: 2,
          activeFilterName: `cv2.${activeFilter.toUpperCase()}`,
          steeringOffsetDeg: 0.0,
          confidence: 99.6,
          statusText: 'ALGORITHM_VERIFIED'
        });

      } else {
        // Centroid Ball Tracking Crosshair & Trajectory Trail
        // 1. Draw breadcrumb trajectory trail
        if (trajectoryHistoryRef.current.length > 1) {
          procCtx.strokeStyle = 'rgba(236, 72, 153, 0.6)';
          procCtx.lineWidth = 2;
          procCtx.beginPath();
          trajectoryHistoryRef.current.forEach((pt, i) => {
            if (i === 0) procCtx.moveTo(pt.x, pt.y);
            else procCtx.lineTo(pt.x, pt.y);
          });
          procCtx.stroke();
        }

        // 2. Crosshair Centroid
        procCtx.lineWidth = 2;
        procCtx.strokeStyle = '#00ff88';
        procCtx.beginPath();
        procCtx.arc(cx, cy, 26, 0, 2 * Math.PI);
        procCtx.stroke();

        procCtx.beginPath();
        procCtx.moveTo(cx - 36, cy); procCtx.lineTo(cx + 36, cy);
        procCtx.moveTo(cx, cy - 36); procCtx.lineTo(cx, cy + 36);
        procCtx.stroke();

        // 3. Purple Bounding Box
        const boxW = r * 2.4;
        const boxH = r * 2.4;
        const boxX = cx - boxW / 2;
        const boxY = cy - boxH / 2;

        procCtx.strokeStyle = '#a855f7';
        procCtx.lineWidth = 2.5;
        procCtx.strokeRect(boxX, boxY, boxW, boxH);

        // 4. Tag Badge
        procCtx.fillStyle = '#a855f7';
        procCtx.fillRect(boxX, boxY - 22, 140, 22);
        procCtx.fillStyle = '#ffffff';
        procCtx.font = 'bold 11px monospace';
        procCtx.fillText(`BALL [${cx}, ${cy}] 99%`, boxX + 6, boxY - 7);

        // 5. Robotics Center Vector
        const dx = cx - w / 2;
        const dy = cy - h / 2;
        const steeringAngle = (Math.atan2(dy, dx) * (180 / Math.PI)).toFixed(1);

        procCtx.strokeStyle = 'rgba(251, 191, 36, 0.8)';
        procCtx.lineWidth = 2;
        procCtx.setLineDash([4, 4]);
        procCtx.beginPath();
        procCtx.moveTo(w / 2, h / 2);
        procCtx.lineTo(cx, cy);
        procCtx.stroke();
        procCtx.setLineDash([]);

        setTelemetry({
          fps: 60.0,
          latencyMs: 1.2,
          centroidX: cx,
          centroidY: cy,
          targetArea: Math.round(boxW * boxH),
          contourCount: 2,
          activeFilterName: `cv2.${activeFilter.toUpperCase()}`,
          steeringOffsetDeg: parseFloat(steeringAngle),
          confidence: 99.4,
          statusText: 'TRACKING_LOCKED'
        });
      }

      animFrameRef.current = requestAnimationFrame(processFrame);
    };

    animFrameRef.current = requestAnimationFrame(processFrame);

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [isCameraActive, selectedFilter, selectedScene, useSyntheticFeed, code, detected.filter]);

  return (
    <div className="h-full flex flex-col bg-slate-950 border-t border-slate-800 text-slate-100 font-mono text-xs overflow-hidden select-none">
      
      {/* Sleek Dedicated CV & Robotics Header Bar */}
      <div className="h-11 bg-slate-900 border-b border-slate-800 px-3.5 flex items-center justify-between shrink-0 gap-2">
        
        {/* Left: Engine identity & Problem-Matched Target */}
        <div className="flex items-center gap-2 min-w-0">
          <div className="p-1 rounded-lg bg-purple-500/20 text-purple-400 border border-purple-500/30 shrink-0">
            <Camera className="w-4 h-4" />
          </div>
          <div className="flex flex-col min-w-0">
            <div className="flex items-center gap-1.5 truncate">
              <span className="font-bold text-white text-xs truncate">
                {detected.title}
              </span>
              <span className="text-[9px] px-1.5 py-0.2 rounded bg-purple-500/20 text-purple-300 font-bold border border-purple-500/30 uppercase shrink-0">
                OpenCV 4.9
              </span>
            </div>
            <div className="text-[10px] text-slate-400 font-sans flex items-center gap-2 truncate">
              {isSimulating ? (
                <span className="text-purple-400 font-bold flex items-center gap-1 animate-pulse">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                  INITIALIZING PIPELINE...
                </span>
              ) : hasExecuted ? (
                <span className={`font-bold flex items-center gap-1 ${passed ? 'text-emerald-400' : 'text-rose-400'}`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${passed ? 'bg-emerald-400 animate-pulse' : 'bg-rose-400'}`} />
                  {passed ? '60 FPS LIVE' : 'EXECUTION FAILED'}
                </span>
              ) : hasWrittenCode ? (
                <span className="text-sky-400 font-bold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                  CODE READY TO EXECUTE
                </span>
              ) : (
                <span className="text-amber-400 font-bold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  AWAITING CODE
                </span>
              )}
              <span className="text-slate-600">•</span>
              <span className="truncate text-slate-400">Target: {detected.primaryTarget}</span>
            </div>
          </div>
        </div>

        {/* Center & Right Controls */}
        <div className="flex items-center gap-1.5 shrink-0">
          
          {/* Dual / Processed / Raw Mode Selector */}
          <div className="flex items-center gap-0.5 bg-slate-950 p-0.5 rounded-lg border border-slate-800 text-[10px]">
            <button
              onClick={() => setViewMode('side_by_side')}
              className={`px-2 py-0.5 rounded font-semibold transition-all ${
                viewMode === 'side_by_side' ? 'bg-purple-600 text-white shadow' : 'text-slate-400 hover:text-white'
              }`}
              title="View Raw Camera Frame side-by-side with OpenCV Processed Output"
            >
              Dual View
            </button>
            <button
              onClick={() => setViewMode('processed')}
              className={`px-2 py-0.5 rounded font-semibold transition-all ${
                viewMode === 'processed' ? 'bg-purple-600 text-white shadow' : 'text-slate-400 hover:text-white'
              }`}
              title="Show Full Width OpenCV Processed Vision Output"
            >
              CV Only
            </button>
            <button
              onClick={() => setViewMode('raw')}
              className={`px-2 py-0.5 rounded font-semibold transition-all ${
                viewMode === 'raw' ? 'bg-purple-600 text-white shadow' : 'text-slate-400 hover:text-white'
              }`}
              title="Show Raw Camera Input Stream"
            >
              Raw Feed
            </button>
          </div>

          {/* Test Scene Selector */}
          <select
            value={selectedScene}
            onChange={(e) => setSelectedScene(e.target.value as CvSceneType)}
            className="bg-slate-950 border border-slate-800 rounded px-2 py-1 text-[11px] text-amber-300 font-mono focus:outline-none focus:border-amber-500 hidden sm:block"
            title="Switch Vision Problem Test Environment"
          >
            <option value="video_grayscale">📹 Video Grayscale Luma</option>
            <option value="hsv_segmentation">🌈 BGR to HSV Manifold</option>
            <option value="threshold_mask">🔲 inRange Binary Mask</option>
            <option value="morphology">🔬 Morphology Dilation/Erosion</option>
            <option value="contours">〰️ findContours Extraction</option>
            <option value="bounding_box">📐 Bounding Box Extractor</option>
            <option value="moments_centroid">🎯 Image Moments Centroid</option>
            <option value="min_enclosing_circle">⭕ Min Enclosing Circle</option>
            <option value="canny_edge">⚡ Canny Edge Detector</option>
            <option value="hough_lines">🛣️ Hough Lines Lane</option>
            <option value="hough_circles">🔘 Hough Circles Target</option>
            <option value="histogram">📊 Histogram Equalization</option>
            <option value="feature_corners">✨ Harris/Shi-Tomasi Corners</option>
            <option value="perspective_warp">📐 Perspective Warp BEV</option>
            <option value="autonomous_lane">🛣️ Road Lane (Autonomous)</option>
            <option value="aruco_marker">🔲 ArUco Fiducial #23</option>
            <option value="pose_estimation">📐 3D Pose Estimation (solvePnP)</option>
            <option value="optical_flow">🚁 Lucas-Kanade Optical Flow</option>
            <option value="pid_controller">🎯 PID Target Centering</option>
            <option value="kinematics">🤖 Differential Drive Kinematics</option>
            <option value="visual_servoing">👁️ Visual Servoing Feedback</option>
            <option value="pinhole_distance">📏 Pinhole Distance Estimator</option>
            <option value="ros2_node">📦 ROS2 Camera Publisher Node</option>
            <option value="face_detection">👤 Facial Landmark</option>
            <option value="ball_tracker">🎯 Red Ball Centroid (HSV)</option>
            <option value="pcb_inspection">🟩 Industrial PCB IC Defect</option>
            <option value="shape_sorter">🤖 Robotic Shape Sorter</option>
            <option value="qr_scanner">📦 AGV QR / Barcode</option>
            <option value="stereo_depth">🌐 Stereo Disparity Depth</option>
            <option value="blur_filter">💧 Gaussian Denoise</option>
            <option value="roi_crop">🔍 Sub-frame ROI Crop</option>
          </select>

          {/* Filter Algorithm Selector */}
          <select
            value={selectedFilter}
            onChange={(e) => setSelectedFilter(e.target.value as CvFilterType)}
            className="bg-slate-950 border border-slate-800 rounded px-2 py-1 text-[11px] text-purple-300 font-mono focus:outline-none focus:border-purple-500 hidden md:block"
            title="OpenCV Filter Algorithm"
          >
            <option value="auto">⚡ Auto (Problem Logic)</option>
            <option value="grayscale">☯ cv2.cvtColor Grayscale</option>
            <option value="hsv">🌈 cv2.cvtColor HSV</option>
            <option value="threshold">🔴 cv2.inRange Binary Mask</option>
            <option value="morphology">🧼 cv2.morphologyEx Kernel</option>
            <option value="canny">⚡ cv2.Canny Edge Detector</option>
            <option value="blur">💧 cv2.GaussianBlur Denoise</option>
            <option value="contours">〰️ cv2.findContours Vector</option>
            <option value="bbox">🎯 cv2.boundingRect Box</option>
            <option value="moments">📐 cv2.moments Centroid</option>
            <option value="hough_lines">📏 cv2.HoughLinesP Lanes</option>
            <option value="hough_circles">⭕ cv2.HoughCircles Radar</option>
            <option value="pose">📐 cv2.solvePnP 3D Axes</option>
            <option value="flow">🚁 cv2.calcOpticalFlow PyrLK</option>
            <option value="pid">🎯 PID Steering Feedback</option>
            <option value="distance">📏 Pinhole Z=(f*H)/h Depth</option>
            <option value="ros2">📦 ROS2 sensor_msgs Bridge</option>
            <option value="histogram">📊 cv2.equalizeHist Contrast</option>
            <option value="corners">✨ cv2.goodFeatures Corners</option>
            <option value="original">📷 Raw Unfiltered Feed</option>
          </select>

          {/* Physical Webcam vs Synthetic Feed Toggle */}
          <button
            onClick={() => {
              if (useSyntheticFeed) {
                startRealWebcam();
              } else {
                stopCameraStream();
                setUseSyntheticFeed(true);
                setIsCameraActive(true);
              }
            }}
            className={`px-2.5 py-1 rounded text-[11px] font-bold transition-all flex items-center gap-1 border ${
              !useSyntheticFeed
                ? 'bg-purple-600 text-white border-purple-500 shadow-md shadow-purple-600/30'
                : 'bg-slate-800 hover:bg-slate-700 text-amber-300 border-slate-700'
            }`}
            title={useSyntheticFeed ? 'Switch to your physical device live webcam' : 'Switch to High-Fidelity Synthetic Simulation Scene'}
          >
            <Video className="w-3 h-3" />
            <span>{!useSyntheticFeed ? 'Webcam Active' : 'Use Webcam'}</span>
          </button>

          {/* Code Execution Logs Drawer Toggle */}
          <button
            onClick={() => setShowLogsDrawer(prev => !prev)}
            className={`px-2.5 py-1 rounded text-[11px] font-bold transition-all flex items-center gap-1 border ${
              showLogsDrawer
                ? 'bg-blue-600 text-white border-blue-500'
                : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border-slate-700'
            }`}
            title="Toggle OpenCV Python Execution Logs & Assertions"
          >
            <Terminal className="w-3 h-3" />
            <span className="hidden sm:inline">Execution Logs</span>
            {showLogsDrawer ? <ChevronDown className="w-3 h-3" /> : <ChevronUp className="w-3 h-3" />}
          </button>

          {/* Copy Full Telemetry & Stdout Report Button */}
          <button
            onClick={handleCopyReport}
            className={`px-2.5 py-1 rounded text-[11px] font-bold transition-all flex items-center gap-1 border cursor-pointer ${
              copiedReport
                ? 'bg-emerald-600 text-white border-emerald-500'
                : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700 hover:text-white'
            }`}
            title="Copy full textable CV telemetry & OpenCV logs to clipboard"
          >
            {copiedReport ? <Check className="w-3 h-3 text-white" /> : <Copy className="w-3 h-3 text-amber-400" />}
            <span className="hidden sm:inline">{copiedReport ? 'Report Copied!' : 'Copy Telemetry'}</span>
          </button>

        </div>
      </div>

      {/* Hidden HTML5 Video element for physical webcam stream */}
      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted
        className="hidden"
      />

      {/* Main Vision Stage & Canvas Display */}
      <div className="flex-1 p-3 overflow-y-auto space-y-2.5">

        {/* If code has not been executed yet: Show Standby / Code-Required screen */}
        {!hasExecuted && !isSimulating ? (
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-2xl flex flex-col items-center justify-center text-center space-y-4 min-h-[380px]">
            {/* Standby Radar Graphic */}
            <div className="relative w-20 h-20 rounded-2xl bg-slate-950 border border-purple-500/40 flex items-center justify-center shadow-lg shadow-purple-950/30">
              <Camera className="w-10 h-10 text-purple-400" />
              <div className="absolute inset-0 rounded-2xl border border-purple-400/20 animate-ping opacity-25" />
              <span className="absolute -top-2 -right-2 px-1.5 py-0.5 rounded bg-purple-500/20 text-purple-300 font-mono text-[9px] border border-purple-500/40 font-bold uppercase">
                Standby
              </span>
            </div>

            <div className="space-y-1.5 max-w-lg">
              <h3 className="text-base font-bold text-white flex items-center justify-center gap-2">
                <span>{detected.title}</span>
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {!hasWrittenCode ? (
                  <>
                    Write your computer vision code above in OpenCV & NumPy. In CV & Robotics hardware, the camera stream and simulation output will appear <strong className="text-amber-300">only after writing your code and executing it</strong>.
                  </>
                ) : (
                  <>
                    Your OpenCV algorithm is written and ready! Click <strong className="text-emerald-300">"Run Code"</strong> below or press <strong className="text-emerald-300">Ctrl+Enter</strong> to initialize the live camera feed and stream real-time robotics HUD simulation output.
                  </>
                )}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 pt-1">
              {hasWrittenCode ? (
                <button
                  onClick={onRunCode}
                  className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-2 shadow-lg shadow-emerald-600/30 transition-all select-none cursor-pointer active:scale-95"
                >
                  <Play className="w-4 h-4 fill-current text-white" />
                  <span>Run Code & Launch Live Camera Output (Ctrl+Enter)</span>
                </button>
              ) : (
                <>
                  {onLoadTemplate && (
                    <button
                      onClick={onLoadTemplate}
                      className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs flex items-center gap-2 shadow-md shadow-purple-600/30 transition-all select-none cursor-pointer active:scale-95"
                    >
                      <Code className="w-4 h-4" />
                      <span>Load OpenCV Starter Template</span>
                    </button>
                  )}
                  {onRunCode && (
                    <button
                      onClick={onRunCode}
                      className="px-3.5 py-2 rounded-xl bg-[#222430] hover:bg-[#2c2f3f] text-slate-300 border border-[#3b3e52] text-xs font-medium flex items-center gap-1.5 transition-all select-none cursor-pointer"
                    >
                      <Play className="w-3.5 h-3.5 text-amber-400" />
                      <span>Execute Code (Ctrl+Enter)</span>
                    </button>
                  )}
                </>
              )}
            </div>

            {/* Hardware & Video Spec Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-3 border-t border-slate-800/80 w-full max-w-lg text-[11px]">
              <div className="p-2 rounded-lg bg-slate-950 border border-slate-800 text-left">
                <div className="text-[9px] text-slate-500 font-bold uppercase">Sensor Resolution</div>
                <div className="font-mono text-cyan-300 font-semibold">640 x 480 BGR</div>
              </div>
              <div className="p-2 rounded-lg bg-slate-950 border border-slate-800 text-left">
                <div className="text-[9px] text-slate-500 font-bold uppercase">Vision Framework</div>
                <div className="font-mono text-purple-300 font-semibold">OpenCV v4.9.0</div>
              </div>
              <div className="p-2 rounded-lg bg-slate-950 border border-slate-800 text-left">
                <div className="text-[9px] text-slate-500 font-bold uppercase">Camera Mode</div>
                <div className="font-mono text-amber-300 font-semibold">{useSyntheticFeed ? 'Synthetic Feed' : 'Live Webcam'}</div>
              </div>
              <div className="p-2 rounded-lg bg-slate-950 border border-slate-800 text-left">
                <div className="text-[9px] text-slate-500 font-bold uppercase">Primary Target</div>
                <div className="font-mono text-emerald-300 font-semibold truncate" title={detected.primaryTarget}>{detected.primaryTarget}</div>
              </div>
            </div>
          </div>
        ) : (
          /* Live Stream & Simulation Output Stage - Only shown after execution */
          <div className="space-y-2.5">
            {/* Execution Diagnostic / Status Banner */}
            {isSolvedOrPassed ? (
              <div className="p-3 rounded-xl bg-gradient-to-r from-emerald-950/80 via-purple-950/50 to-[#11131c] border border-emerald-500/40 flex flex-wrap items-center justify-between gap-2.5 text-xs animate-in fade-in shadow-lg">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 font-bold text-white">
                      <span>OpenCV Vision Solution Verified!</span>
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded border font-semibold flex items-center gap-1.5 ${
                        !useSyntheticFeed
                          ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                          : 'bg-purple-500/20 text-purple-300 border-purple-500/40'
                      }`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${!useSyntheticFeed ? 'bg-emerald-400 animate-ping' : 'bg-purple-400'}`} />
                        <span>{!useSyntheticFeed ? 'Live Webcam Stream Output' : 'Synthetic Robotics Feed Output'}</span>
                      </span>
                    </div>
                    <div className="text-[11px] text-slate-300 mt-0.5">
                      {!useSyntheticFeed
                        ? 'Live camera frames are streaming directly into your OpenCV pipeline in real time.'
                        : 'Simulating high-precision autonomous camera feed at 60 FPS.'}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {useSyntheticFeed ? (
                    <button
                      onClick={startRealWebcam}
                      className="px-3 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs flex items-center gap-1.5 shadow-md shadow-purple-600/30 transition-all cursor-pointer active:scale-95"
                    >
                      <Video className="w-3.5 h-3.5" />
                      <span>Switch to Live Webcam</span>
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        stopCameraStream();
                        setUseSyntheticFeed(true);
                        setIsCameraActive(true);
                      }}
                      className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium border border-slate-700 transition-all cursor-pointer"
                    >
                      Use Synthetic Feed
                    </button>
                  )}
                </div>
              </div>
            ) : simulationResult && (
              <div className="p-3 rounded-xl bg-rose-950/40 border border-rose-500/40 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs animate-in fade-in">
                <div className="flex items-start sm:items-center gap-2 min-w-0">
                  <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5 sm:mt-0" />
                  <div className="min-w-0">
                    <span className="font-bold text-rose-300 mr-2">{simulationResult.message}</span>
                    {simulationResult.errorHint && (
                      <span className="text-slate-400 text-[11px] block sm:inline">• {simulationResult.errorHint}</span>
                    )}
                  </div>
                </div>
                {onRunCode && (
                  <button
                    onClick={onRunCode}
                    className="px-2.5 py-1 rounded bg-rose-600 hover:bg-rose-500 text-white font-bold text-[10px] shrink-0 self-end sm:self-auto cursor-pointer"
                  >
                    Re-run Code
                  </button>
                )}
              </div>
            )}

            {cameraError && (
              <div className="p-2.5 rounded-xl bg-amber-950/40 border border-amber-500/30 text-xs text-amber-200 flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{cameraError}</span>
                </div>
                <button
                  onClick={startRealWebcam}
                  className="px-2.5 py-1 rounded bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 font-bold text-[11px] cursor-pointer"
                >
                  Retry Camera Access
                </button>
              </div>
            )}

            {/* Real-time Video Stream Stage */}
            <div className="relative bg-slate-900/90 border border-slate-800 rounded-2xl p-3 shadow-2xl overflow-hidden">
              {/* Simulating Overlay */}
              {isSimulating && (
                <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm z-20 flex flex-col items-center justify-center space-y-2">
                  <RefreshCw className="w-7 h-7 text-purple-400 animate-spin" />
                  <span className="text-xs font-bold text-white">Compiling OpenCV Pipeline & Streaming Video Feed...</span>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-center justify-center">
                
                {/* Stage 1: Raw Input Stream */}
                {(viewMode === 'side_by_side' || viewMode === 'raw') && (
                  <div className="space-y-1.5 text-center">
                    <div className="flex items-center justify-between px-2 text-[11px] font-bold text-slate-400">
                      <span className="flex items-center gap-1 text-sky-400">
                        <Scan className="w-3.5 h-3.5" /> [STAGE 1] Camera Raw Input Feed (BGR888)
                      </span>
                      <span className="text-[10px] text-slate-500 font-mono">
                        {useSyntheticFeed ? 'SYNTHETIC 640x480' : 'WEBCAM 640x480'}
                      </span>
                    </div>
                    <div className="relative rounded-xl border border-sky-500/30 overflow-hidden bg-slate-950 flex items-center justify-center shadow-lg">
                      <canvas
                        ref={rawCanvasRef}
                        className="w-full max-h-[260px] object-contain block mx-auto"
                      />
                    </div>
                  </div>
                )}

                {/* Stage 2: OpenCV Vision & Robotics Output */}
                {(viewMode === 'side_by_side' || viewMode === 'processed') && (
                  <div className={`space-y-1.5 text-center ${viewMode === 'processed' ? 'md:col-span-2' : ''}`}>
                    <div className="flex items-center justify-between px-2 text-[11px] font-bold text-slate-400">
                      <span className="flex items-center gap-1 text-purple-400">
                        <Target className="w-3.5 h-3.5" /> [STAGE 2] OpenCV Algorithm & Robotics HUD Output
                      </span>
                      <span className="text-[10px] text-emerald-400 font-mono font-bold flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        LIVE PIPELINE
                      </span>
                    </div>
                    <div className="relative rounded-xl border border-purple-500/50 overflow-hidden bg-slate-950 flex items-center justify-center shadow-2xl shadow-purple-950/40">
                      <canvas
                        ref={processedCanvasRef}
                        className="w-full max-h-[260px] object-contain block mx-auto"
                      />
                    </div>
                  </div>
                )}

              </div>

              {/* Real-time Computer Vision Telemetry Dashboard */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mt-3 pt-3 border-t border-slate-800">
                <div className="p-2 rounded-lg bg-slate-950 border border-slate-800">
                  <div className="text-[9px] text-slate-500 uppercase tracking-wider font-bold">Video FPS</div>
                  <div className="text-xs font-bold text-emerald-400 font-mono">{telemetry.fps.toFixed(1)} FPS</div>
                  <div className="text-[9px] text-slate-500">Latency: {telemetry.latencyMs}ms</div>
                </div>

                <div className="p-2 rounded-lg bg-slate-950 border border-slate-800">
                  <div className="text-[9px] text-slate-500 uppercase tracking-wider font-bold">Centroid (X, Y)</div>
                  <div className="text-xs font-bold text-sky-400 font-mono">[{telemetry.centroidX}, {telemetry.centroidY}]</div>
                  <div className="text-[9px] text-slate-500">Frame: 640x480</div>
                </div>

                <div className="p-2 rounded-lg bg-slate-950 border border-slate-800">
                  <div className="text-[9px] text-slate-500 uppercase tracking-wider font-bold">Target Bounding Area</div>
                  <div className="text-xs font-bold text-purple-400 font-mono">{telemetry.targetArea} px²</div>
                  <div className="text-[9px] text-slate-500">Contours: {telemetry.contourCount}</div>
                </div>

                <div className="p-2 rounded-lg bg-slate-950 border border-slate-800">
                  <div className="text-[9px] text-slate-500 uppercase tracking-wider font-bold">Algorithm Filter</div>
                  <div className="text-xs font-bold text-amber-400 truncate">{telemetry.activeFilterName}</div>
                  <div className="text-[9px] text-slate-500">State: {telemetry.statusText}</div>
                </div>

                <div className="p-2 rounded-lg bg-slate-950 border border-slate-800">
                  <div className="text-[9px] text-slate-500 uppercase tracking-wider font-bold">Robotics Steering</div>
                  <div className={`text-xs font-bold font-mono ${simulationResult && !passed ? 'text-rose-400' : 'text-emerald-400'}`}>
                    {simulationResult && !passed ? '0.0° (ESTOP)' : `${telemetry.steeringOffsetDeg}°`}
                  </div>
                  <div className="text-[9px] text-slate-500">
                    {simulationResult && !passed ? 'MOTOR CUTOFF' : 'PID Closed-Loop: OK'}
                  </div>
                </div>

                <div className="p-2 rounded-lg bg-slate-950 border border-slate-800">
                  <div className="text-[9px] text-slate-500 uppercase tracking-wider font-bold">Specification Match</div>
                  <div className={`text-xs font-bold font-mono ${passed ? 'text-emerald-400' : simulationResult ? 'text-rose-400' : 'text-amber-400'}`}>
                    {passed ? '100% PASS' : simulationResult ? 'EXECUTION FAILED' : 'READY TO RUN'}
                  </div>
                  <div className="text-[9px] text-slate-500">
                    {simulationResult && !passed ? (simulationResult.errorType?.toUpperCase() || 'SYNTAX ERROR') : `Confidence: ${telemetry.confidence}%`}
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Camera Error / Sandbox Notice */}
        {cameraError && (
          <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{cameraError}</span>
          </div>
        )}

        {/* Collapsible OpenCV Python Execution Logs Drawer */}
        {showLogsDrawer && (
          <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl space-y-2 animate-in fade-in slide-in-from-bottom duration-200">
            <div className="flex items-center justify-between text-[11px] font-bold text-slate-300 pb-1.5 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-purple-400" />
                <span>OpenCV & ROS2 Execution Stdout</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyReport}
                  className="px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center gap-1 text-[10px] font-mono transition-all cursor-pointer"
                  title="Copy full terminal stdout to clipboard"
                >
                  {copiedReport ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3 text-amber-400" />}
                  <span>{copiedReport ? 'Copied' : 'Copy Stdout'}</span>
                </button>
                <span className={`text-[10px] px-2 py-0.5 rounded font-bold ${
                  !simulationResult ? 'bg-slate-800 text-slate-400' :
                  passed ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' :
                  'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                }`}>
                  {!simulationResult ? 'READY TO RUN' : passed ? 'ALL ASSERTIONS PASSED' : 'EXECUTION FAILED'}
                </span>
              </div>
            </div>

            <div className="space-y-1 font-mono text-[11px] max-h-40 overflow-y-auto">
              {logs.length === 0 ? (
                <div className="py-4 text-center text-slate-500 text-xs">
                  Click "Run Code" in the editor above to execute and verify your OpenCV vision algorithm.
                </div>
              ) : (
                logs.map((log, idx) => {
                  const isErr = log.includes('ERROR') || log.includes('FAIL');
                  const isPass = log.includes('PASS') || log.includes('SUCCESS');
                  return (
                    <div
                      key={idx}
                      className={`p-1.5 rounded border ${
                        isErr
                          ? 'bg-rose-500/10 text-rose-300 border-rose-500/20'
                          : isPass
                          ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20'
                          : 'bg-slate-950 text-slate-300 border-slate-800/80'
                      }`}
                    >
                      {log}
                    </div>
                  );
                })
              )}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
