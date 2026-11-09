import { QuizQuestion } from '../quizData';

export const CONTROL_AUTOMATION_QUESTIONS: QuizQuestion[] = [
  {
    id: 'ca-q1',
    topicId: 'control_automation',
    category: 'Feedback Control & Stability',
    question: 'In a continuous-time linear time-invariant (LTI) control system, what is the necessary and sufficient condition for bounded-input bounded-output (BIBO) stability?',
    options: [
      'All closed-loop transfer function poles must strictly lie in the open left-half of the s-plane (Re(s) < 0).',
      'All open-loop transfer function zeros must lie in the left-half s-plane.',
      'The system must have at least one integrator in the forward path.',
      'The phase margin must be equal to 180 degrees.'
    ],
    correctAnswer: 0,
    explanation: 'A continuous LTI system is BIBO stable if and only if all poles of its closed-loop transfer function have strictly negative real parts (located in the left-half of the s-plane), which guarantees the impulse response decays exponentially to zero.'
  },
  {
    id: 'ca-q2',
    topicId: 'control_automation',
    category: 'PID Controllers',
    question: 'What is the primary function of the Integral (I) term in a standard three-term PID controller?',
    options: [
      'Eliminate steady-state error (offset) in response to step inputs by accumulating past tracking error.',
      'Predict future error trends and increase the system damping ratio.',
      'Provide instantaneous proportional control to high-frequency sensor noise.',
      'Prevent physical saturation of the final control actuator.'
    ],
    correctAnswer: 0,
    explanation: 'The integral term integrates the error over time ($u_I(t) = K_i \\int_0^t e(\\tau) d\\tau$), increasing the system type number by one and forcing steady-state error to zero for step reference inputs and constant disturbances.'
  },
  {
    id: 'ca-q3',
    topicId: 'control_automation',
    category: 'PID Controllers',
    question: 'What adverse phenomenon occurs in PID controllers when an actuator saturates (e.g. valve 100% open) while a persistent tracking error remains?',
    options: [
      'Integrator Windup (Reset Windup), causing large overshoot and delayed settling time when the setpoint changes.',
      'Derivative Kick caused by sudden setpoint steps.',
      'Aliasing in discrete time-sampling.',
      'High-frequency chatter due to sensor quantization noise.'
    ],
    correctAnswer: 0,
    explanation: 'Integrator Windup occurs when the integral term continues accumulating during actuator saturation. Once the error reverses, the controller remains saturated until the integrator unwinds, causing massive overshoot. Anti-windup clamping circuits or back-calculation are used to remedy this.'
  },
  {
    id: 'ca-q4',
    topicId: 'control_automation',
    category: 'Frequency Response',
    question: 'How is the Gain Margin (GM) defined on a Bode or Nyquist diagram?',
    options: [
      'The factor by which open-loop gain can be increased before the system becomes unstable, measured at the phase crossover frequency (where phase = -180°).',
      'The additional phase lag required to destabilize the system, measured at the gain crossover frequency (where gain = 0 dB).',
      'The maximum closed-loop resonant peak magnitude divided by static DC gain.',
      'The ratio of dominant pole time constants to derivative lead times.'
    ],
    correctAnswer: 0,
    explanation: 'Gain Margin (GM) is the reciprocal of the open-loop magnitude $|G(j\\omega)H(j\\omega)|$ evaluated at the phase crossover frequency $\\omega_{pc}$ where $\\angle G(j\\omega)H(j\\omega) = -180^\\circ$. In dB, $GM = -20\\log_{10}|G(j\\omega_{pc})H(j\\omega_{pc})|$.'
  },
  {
    id: 'ca-q5',
    topicId: 'control_automation',
    category: 'Frequency Response',
    question: 'A stable minimum-phase closed-loop system typically requires what range of Phase Margin (PM) to ensure well-damped transient response without excessive ringing?',
    options: [
      'Between 45° and 60° (damping ratio $\\zeta \\approx PM / 100$).',
      'Exactly 0° to minimize rise time.',
      'Between -15° and -30° to induce self-sustained oscillation.',
      'Greater than 175° to maximize bandwidth.'
    ],
    correctAnswer: 0,
    explanation: 'A Phase Margin between 45° and 60° provides an optimal trade-off between speed of response and damping (damping ratio $\\zeta \\approx 0.5$ to $0.7$), yielding less than 15-20% overshoot.'
  },
  {
    id: 'ca-q6',
    topicId: 'control_automation',
    category: 'Programmable Logic Controllers',
    question: 'In industrial PLC programming (IEC 61131-3), how does the internal cyclic execution scan sequence operate?',
    options: [
      '1. Read physical inputs into image table -> 2. Execute ladder logic/user program sequentially -> 3. Write image table to physical outputs -> 4. Housekeeping/diagnostics.',
      'Execute ladder logic continuously, reading individual GPIO pins asynchronously on demand.',
      'Interrupt-driven execution where each sensor pulse preempts the entire CPU scan cycle.',
      'Compile and flash user logic into FPGA bitstream on every push-button trigger.'
    ],
    correctAnswer: 0,
    explanation: 'Standard PLCs run a deterministic cyclical scan: input scan (reading hardware sensors into input memory table), program scan (evaluating ladder rungs from top-left to bottom-right), output scan (updating physical relays/actuators), and diagnostic/communication checks.'
  },
  {
    id: 'ca-q7',
    topicId: 'control_automation',
    category: 'Programmable Logic Controllers',
    question: 'In PLC Ladder Logic, what is the difference between a Normally Open (NO / XIC - Examine If Closed) contact and a Normally Closed (NC / XIO - Examine If Open) contact?',
    options: [
      'NO evaluates to TRUE (passes virtual power) when its associated bit is 1; NC evaluates to TRUE when its associated bit is 0.',
      'NO is used strictly for safety emergency stops; NC is only for indicator lamps.',
      'NO switches high AC voltage; NC switches low DC voltage.',
      'NO latches power indefinitely; NC unlatches power on falling edge.'
    ],
    correctAnswer: 0,
    explanation: 'In ladder logic, Examine If Closed (XIC / NO) is logically true when the memory bit is 1 (energized). Examine If Open (XIO / NC) is logically true when the memory bit is 0 (de-energized).'
  },
  {
    id: 'ca-q8',
    topicId: 'control_automation',
    category: 'Industrial Protocols & SCADA',
    question: 'Which serial industrial protocol standard uses master-slave polling, CRC-16 error checking, and registers addressed as 0xxxx (Coils), 1xxxx (Discrete Inputs), 3xxxx (Input Registers), and 4xxxx (Holding Registers)?',
    options: [
      'Modbus RTU / Modbus TCP',
      'CANopen High-Speed Bus',
      'EtherCAT Distributed Clocks',
      'HART Smart Transmitter Protocol'
    ],
    correctAnswer: 0,
    explanation: 'Modbus (Modicon, 1979) is the foundational open industrial protocol using Master-Slave query/response architecture with 16-bit register definitions (Coils, Discrete Inputs, Input Registers, and Holding Registers) over RS-485 (RTU) or Ethernet (TCP).'
  },
  {
    id: 'ca-q9',
    topicId: 'control_automation',
    category: 'Sensors & Instrumentation',
    question: 'What type of transducer is an LVDT (Linear Variable Differential Transformer), and what physical quantity does it measure with sub-micron precision?',
    options: [
      'An inductive electromagnetic transducer measuring linear mechanical displacement via differential mutual inductance.',
      'A capacitive bridge transducer measuring fluid dynamic viscosity.',
      'An optical encoder measuring rotational shaft angular velocity.',
      'A piezoelectric crystal measuring steady-state static pressure.'
    ],
    correctAnswer: 0,
    explanation: 'An LVDT consists of one primary coil and two symmetrical secondary coils connected in series opposition. A movable ferromagnetic core alters mutual coupling, producing an AC output voltage linearly proportional to linear core position.'
  },
  {
    id: 'ca-q10',
    topicId: 'control_automation',
    category: 'Sensors & Instrumentation',
    question: 'Why are 4-wire RTD (Resistance Temperature Detector, e.g. Pt100) configurations preferred over 2-wire circuits in high-accuracy industrial temperature loops?',
    options: [
      '4-wire Kelvin sensing forces a constant current through two leads and measures voltage with high-impedance instrumentation through two separate leads, eliminating lead-wire resistance errors.',
      '4-wire RTDs generate thermoelectric Seebeck voltage eliminating the need for external power.',
      '4-wire connections allow simultaneous bidirectional UART serial telemetry.',
      '4-wire circuits double the thermal time constant to eliminate high-frequency turbulence.'
    ],
    correctAnswer: 0,
    explanation: 'In 4-wire RTD circuits, excitation current flows through outer leads, while a high-impedance voltmeter measures voltage across inner leads. Because virtually zero current flows through the measurement leads, lead resistance drop $I \\times R_{wire}$ is completely cancelled.'
  },
  {
    id: 'ca-q11',
    topicId: 'control_automation',
    category: 'Industrial Actuators & Motors',
    question: 'What is the key functional difference between a Stepper Motor (open-loop) and a Brushless DC (BLDC) Servo Motor with optical encoder feedback?',
    options: [
      'Stepper motors rotate in discrete steps without position verification (vulnerable to stalling/lost steps under overload); servo motors continuously modulate current based on closed-loop encoder feedback.',
      'Stepper motors operate only on high AC voltages; servo motors operate only on pneumatic pressure.',
      'Servo motors cannot produce holding torque at zero RPM.',
      'Stepper motors require Hall-effect commutators while servo motors require no electronics.'
    ],
    correctAnswer: 0,
    explanation: 'Stepper motors advance by fixed step angles in open-loop mode and can lose steps if load torque exceeds pull-out torque. Servo motors use closed-loop encoder feedback to drive dynamic torque/velocity/position loops, delivering high efficiency and stall prevention.'
  },
  {
    id: 'ca-q12',
    topicId: 'control_automation',
    category: 'Industrial Actuators & Motors',
    question: 'In variable frequency drives (VFD) controlling 3-phase AC induction motors, why is the Volts-per-Hertz ($V/f$) ratio kept constant below base rated speed?',
    options: [
      'To maintain constant magnetic flux in the motor core and prevent magnetic saturation or torque degradation.',
      'To force the motor slip to exactly zero under all load conditions.',
      'To eliminate harmonic distortion in the inverter PWM bridge.',
      'To reduce the rotor shaft mechanical friction coefficient.'
    ],
    correctAnswer: 0,
    explanation: 'Motor stator flux $\\Phi \\propto \\frac{V}{f}$. Maintaining a constant $V/f$ ratio below rated frequency keeps magnetic core flux at optimal rated density, providing full rated torque capability across varying speeds without saturating the magnetic laminations.'
  },
  {
    id: 'ca-q13',
    topicId: 'control_automation',
    category: 'State Space & Modern Control',
    question: 'For a state-space system $\\dot{x} = Ax + Bu$, $y = Cx + Du$, what matrix condition proves that the system is completely Controllable according to Kalman’s Controllability Criterion?',
    options: [
      'The Controllability matrix $\\mathcal{C} = [B \\quad AB \\quad A^2B \\quad \\dots \\quad A^{n-1}B]$ must have full rank equal to $n$ (state dimension).',
      'The matrix $A$ must be diagonal with all positive real eigenvalues.',
      'The Observability matrix $\\mathcal{O} = [C^T \\quad A^TC^T \\quad \\dots]$ must have determinant equal to 0.',
      'The feedforward matrix $D$ must be non-zero.'
    ],
    correctAnswer: 0,
    explanation: 'A continuous LTI system with $n$ states is controllable if and only if the Kalman controllability matrix $\\mathcal{C} = [B, AB, A^2B, \\dots, A^{n-1}B]$ has rank $n$, meaning control input $u(t)$ can steer any initial state to any arbitrary final state in finite time.'
  },
  {
    id: 'ca-q14',
    topicId: 'control_automation',
    category: 'State Space & Modern Control',
    question: 'What is the purpose of an Observers/Estimator (such as a Luenberger Observer or Kalman Filter) in state-feedback control ($u = -K\\hat{x}$)?',
    options: [
      'Estimate inaccessible internal state variables from measured plant inputs $u(t)$ and outputs $y(t)$ in real-time.',
      'Filter out 50/60 Hz power grid hum from analog supply rails.',
      'Prevent high-frequency electrical arcing across relay contacts.',
      'Convert discrete pulses into analog 4-20mA current loops.'
    ],
    correctAnswer: 0,
    explanation: 'A state observer reconstructs internal system states $\\hat{x}(t)$ that cannot be physically or economically measured with sensors, allowing full state-feedback pole placement control $u = -K\\hat{x}$.'
  },
  {
    id: 'ca-q15',
    topicId: 'control_automation',
    category: 'Digital & Discrete Control',
    question: 'When implementing a discrete-time digital controller with sampling period $T_s$, what is the stability region in the complex $z$-plane corresponding to the left-half of the continuous $s$-plane ($Re(s) < 0$)?',
    options: [
      'The interior of the unit circle, $|z| < 1$.',
      'The upper half of the complex plane, $Im(z) > 0$.',
      'The entire right half-plane, $Re(z) > 0$.',
      'The region outside the unit circle, $|z| > 1$.'
    ],
    correctAnswer: 0,
    explanation: 'Under the standard bilinear or impulse-invariant mapping $z = e^{sT_s}$, the continuous stable region $Re(s) < 0$ maps directly to the interior of the unit circle $|z| < 1$ in the discrete z-plane.'
  },
  {
    id: 'ca-q16',
    topicId: 'control_automation',
    category: 'Digital & Discrete Control',
    question: 'Why is an analog Anti-Aliasing Low-Pass Filter (AA filter) mandatory before an ADC in a digital closed-loop feedback path?',
    options: [
      'To attenuate signal frequencies above the Nyquist frequency ($f_s/2$), preventing high-frequency noise from folding down as false low frequencies that destabilize the loop.',
      'To amplify the microvolt transducer signals to the full 3.3V ADC input range.',
      'To convert differential analog signals into single-ended PWM pulses.',
      'To provide galvanic isolation against high-voltage industrial surges.'
    ],
    correctAnswer: 0,
    explanation: 'According to the Nyquist-Shannon theorem, frequency content above $f_s/2$ reflects back into the baseband spectrum as alias signals that cannot be removed digitally, corrupting control feedback.'
  },
  {
    id: 'ca-q17',
    topicId: 'control_automation',
    category: 'Industrial Robotics',
    question: 'In robotic arm kinematics, what is the key distinction between Forward Kinematics and Inverse Kinematics?',
    options: [
      'Forward Kinematics computes end-effector Cartesian coordinates $(x,y,z,\\theta)$ from joint angles; Inverse Kinematics calculates the required joint angles to achieve a desired end-effector target pose.',
      'Forward Kinematics calculates motor torque; Inverse Kinematics calculates payload mass.',
      'Forward Kinematics applies only to mobile AGVs; Inverse Kinematics applies only to 6-axis articulated arms.',
      'Forward Kinematics is non-linear with multiple solutions; Inverse Kinematics always yields a single unique linear equation.'
    ],
    correctAnswer: 0,
    explanation: 'Forward kinematics uses geometric/trigonometric transforms (e.g. Denavit-Hartenberg matrices) to map joint angles to Cartesian coordinates (unique solution). Inverse kinematics solves for joint angles given a target 3D pose, often requiring iterative or closed-form handling of multiple possible configurations.'
  },
  {
    id: 'ca-q18',
    topicId: 'control_automation',
    category: 'Industrial Robotics & Safety',
    question: 'Under international industrial machinery safety standards (ISO 13849-1 / IEC 62061), what is a dual-channel Category 4 / SIL 3 Emergency Stop (E-Stop) circuit design requirement?',
    options: [
      'Dual redundant cross-monitored channels with force-guided safety relays, ensuring a single wire fault or welded contact does not prevent emergency machine shutdown.',
      'Software-only emergency stop routine executed in high-priority operating system threads.',
      'Single NO push button wired directly to an unmonitored digital input pin of a general-purpose micro-controller.',
      'A wireless Bluetooth beacon connected to the operator console.'
    ],
    correctAnswer: 0,
    explanation: 'Cat 4 / SIL 3 safety architectures mandate hardware redundancy (dual NC contact channels) with continuous diagnostic cross-monitoring and pulsed test outputs so that any single component fault is detected before or at the next demand, safely dropping power to actuators.'
  },
  {
    id: 'ca-q19',
    topicId: 'control_automation',
    category: 'Control System Tuning',
    question: 'In the classic Ziegler-Nichols Closed-Loop Frequency Response tuning method, what are the two critical parameters experimentally determined by increasing proportional gain $K_p$ until sustained, constant-amplitude oscillation begins?',
    options: [
      'Ultimate Gain ($K_u$) and Ultimate Period of oscillation ($T_u$).',
      'Phase Crossover Frequency ($\\omega_{pc}$) and Damping Ratio ($\\zeta$).',
      'Settling Time ($T_s$) and Peak Overshoot Percentage ($M_p$).',
      'Static Velocity Error Constant ($K_v$) and Bandwidth ($\\omega_{bw}$).'
    ],
    correctAnswer: 0,
    explanation: 'Ziegler-Nichols closed-loop tuning sets integral and derivative gains to zero, increases proportional gain until the system marginally oscillates with constant amplitude. The critical gain is Ultimate Gain $K_u$ and the oscillation cycle time is Ultimate Period $T_u$, from which PID constants $K_p = 0.6K_u$, $T_i = 0.5T_u$, $T_d = 0.125T_u$ are computed.'
  },
  {
    id: 'ca-q20',
    topicId: 'control_automation',
    category: 'Industrial Control & Current Loops',
    question: 'Why is 4-20 mA current signaling globally favored over 0-10 V voltage signaling for analog sensor telemetry in harsh industrial factory floors?',
    options: [
      'Current loops are immune to wire resistance voltage drops over kilometer distances, and the 4 mA "live zero" immediately distinguishes a true 0% reading from a broken wire or power loss.',
      '4-20 mA signals generate less electromagnetic radiation than voltage signals.',
      'Current loops eliminate the requirement for analog-to-digital converters at the PLC rack.',
      '4-20 mA signals permit direct optical wireless transmission across glass windows.'
    ],
    correctAnswer: 0,
    explanation: 'Because current is invariant along a series loop regardless of line resistance ($I = I_{sensor}$), 4-20 mA signals are highly immune to noise and wire resistance drops over long distances. The 4 mA offset acts as a "live zero"—if the signal drops to 0 mA, the PLC immediately triggers a wire-break / open-circuit fault alarm.'
  }
];
