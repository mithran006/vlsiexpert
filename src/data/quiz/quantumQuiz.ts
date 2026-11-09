import { QuizQuestion } from '../quizData';

export const QUANTUM_QUESTIONS: QuizQuestion[] = [
  {
    id: 'qp-q1',
    topicId: 'quantum_prog',
    category: 'Quantum Fundamentals',
    question: 'What is the state of a pure qubit represented geometrically on the Bloch sphere with angles θ and φ?',
    options: [
      '|ψ⟩ = cos(θ/2)|0⟩ + e^(iφ)sin(θ/2)|1⟩',
      '|ψ⟩ = cos(θ)|0⟩ + sin(θ)|1⟩',
      '|ψ⟩ = e^(iθ)|0⟩ + e^(iφ)|1⟩',
      '|ψ⟩ = (1/√2)(|0⟩ + |1⟩)'
    ],
    correctAnswer: 0,
    explanation: 'A pure single-qubit state is parameterized on the unit Bloch sphere as |ψ⟩ = cos(θ/2)|0⟩ + e^(iφ)sin(θ/2)|1⟩, where θ ∈ [0, π] is the polar angle and φ ∈ [0, 2π) is the azimuthal relative phase angle.'
  },
  {
    id: 'qp-q2',
    topicId: 'quantum_prog',
    category: 'Superposition & Measurement',
    question: 'According to the Born Rule, what is the probability of measuring the outcome |0⟩ for a general state |ψ⟩ = α|0⟩ + β|1⟩?',
    options: [
      'P(0) = |α|²',
      'P(0) = α + β',
      'P(0) = |α|² / |β|²',
      'P(0) = 2|α|'
    ],
    correctAnswer: 0,
    explanation: 'The Born rule dictates that the probability of obtaining measurement outcome |0⟩ is given by the squared modulus of its complex probability amplitude: P(0) = |⟨0|ψ⟩|² = |α|², with normalization condition |α|² + |β|² = 1.'
  },
  {
    id: 'qp-q3',
    topicId: 'quantum_prog',
    category: 'Quantum Gates',
    question: 'What is the action of the Hadamard gate (H) when applied to the computational basis states |0⟩ and |1⟩?',
    options: [
      'H|0⟩ = (|0⟩ + |1⟩)/√2 = |+⟩, and H|1⟩ = (|0⟩ - |1⟩)/√2 = |-⟩',
      'H|0⟩ = |1⟩, and H|1⟩ = |0⟩',
      'H|0⟩ = i|1⟩, and H|1⟩ = -i|0⟩',
      'H|0⟩ = |0⟩, and H|1⟩ = -|1⟩'
    ],
    correctAnswer: 0,
    explanation: 'The Hadamard transformation acts as a rotation that maps computational basis states into equal superpositions with relative phases: H|0⟩ = (1/√2)(|0⟩ + |1⟩) = |+⟩, and H|1⟩ = (1/√2)(|0⟩ - |1⟩) = |-⟩.'
  },
  {
    id: 'qp-q4',
    topicId: 'quantum_prog',
    category: 'Pauli Operators',
    question: 'Which Pauli matrix corresponds to the phase-flip operation that leaves |0⟩ unchanged and maps |1⟩ to -|1⟩?',
    options: [
      'Pauli-Z: [[1, 0], [0, -1]]',
      'Pauli-X: [[0, 1], [1, 0]]',
      'Pauli-Y: [[0, -i], [i, 0]]',
      'Hadamard: [[1, 1], [1, -1]] / √2'
    ],
    correctAnswer: 0,
    explanation: 'The Pauli-Z matrix Z = [[1, 0], [0, -1]] acts as a π phase flip on the |1⟩ computational basis state (Z|0⟩ = |0⟩, Z|1⟩ = -|1⟩), leaving Z-basis measurement probabilities unchanged while shifting relative quantum phase.'
  },
  {
    id: 'qp-q5',
    topicId: 'quantum_prog',
    category: 'Entanglement & Bell States',
    question: 'What gate sequence transforms the separable two-qubit ground state |00⟩ into the maximally entangled Bell pair |Φ+⟩ = (|00⟩ + |11⟩)/√2?',
    options: [
      'Hadamard on qubit 0, followed by CNOT with control qubit 0 and target qubit 1',
      'Pauli-X on qubit 0, followed by Pauli-X on qubit 1',
      'CNOT on qubit 0 and 1, followed by Hadamard on qubit 1',
      'SWAP gate between qubit 0 and qubit 1'
    ],
    correctAnswer: 0,
    explanation: 'Applying H on qubit 0 creates (1/√2)(|0⟩ + |1⟩) ⊗ |0⟩ = (1/√2)(|00⟩ + |10⟩). Subsequent CNOT(0, 1) flips the second qubit if the first is 1, creating the entangled state (|00⟩ + |11⟩)/√2.'
  },
  {
    id: 'qp-q6',
    topicId: 'quantum_prog',
    category: 'Quantum Information Theory',
    question: 'Why does the No-Cloning Theorem prohibit creating an identical copy of an arbitrary unknown quantum state |ψ⟩?',
    options: [
      'Unitary evolution is strictly linear, which mathematically prevents U(|ψ⟩|0⟩) = |ψ⟩|ψ⟩ for non-orthogonal states.',
      'Thermal decoherence always destroys the target register before copying completes.',
      'Heisenberg uncertainty principle prohibits knowing position and momentum simultaneously.',
      'Superconducting qubits cannot share microwave drive resonators.'
    ],
    correctAnswer: 0,
    explanation: 'The No-Cloning Theorem states that linearity of unitary transformations prevents the existence of a unitary operator U such that U(|ψ⟩|0⟩) = |ψ⟩|ψ⟩ for all arbitrary states |ψ⟩, which guarantees the fundamental security of quantum cryptography.'
  },
  {
    id: 'qp-q7',
    topicId: 'quantum_prog',
    category: 'Quantum Protocols',
    question: 'In the Bennett et al. Quantum Teleportation protocol, what resources are strictly required to transmit an unknown 1-qubit state?',
    options: [
      'One pre-shared EPR entangled Bell pair and two classical bits sent through a classical channel',
      'One classical bit and a direct optical quantum fiber',
      'Three ancilla qubits with no classical communication',
      'A cloning unitary gate and one single-photon detector'
    ],
    correctAnswer: 0,
    explanation: 'Quantum teleportation consumes one entangled EPR pair (Bell state) between Alice and Bob and requires Alice to transmit two classical bits (the outcome of her Bell measurement) to Bob so he can apply the appropriate Pauli correction (I, X, Z, or XZ).'
  },
  {
    id: 'qp-q8',
    topicId: 'quantum_prog',
    category: 'Superdense Coding',
    question: 'How many classical bits can Alice transmit to Bob using Superdense Coding by sending a single qubit, assuming they share a pre-distributed Bell pair?',
    options: [
      '2 classical bits',
      '1 classical bit',
      '4 classical bits',
      'Infinite bits through analog phase encoding'
    ],
    correctAnswer: 0,
    explanation: 'In superdense coding, Alice applies one of four local unitary operations (I, Z, X, or XZ) to her half of a shared Bell pair to encode two classical bits (00, 01, 10, or 11), which Bob decodes by performing a complete Bell basis measurement.'
  },
  {
    id: 'qp-q9',
    topicId: 'quantum_prog',
    category: 'Quantum Oracles & Phase Kickback',
    question: 'What is Phase Kickback in quantum computation?',
    options: [
      'An operation where an eigenvalue phase shift of a target register is transferred into the relative phase of the control qubit',
      'Reflection of microwave drive pulses back into the cryogenic amplifier',
      'Unwanted qubit frequency shift caused by AC Stark effect',
      'Decoherence induced by thermal Johnson-Nyquist noise'
    ],
    correctAnswer: 0,
    explanation: "When a controlled unitary gate U is applied with the target register in an eigenstate U|u⟩ = e^(iθ)|u⟩, the phase e^(iθ) is mathematically 'kicked back' onto the control qubit superposition state, enabling algorithms like Deutsch-Jozsa, Simon, and Grover."
  },
  {
    id: 'qp-q10',
    topicId: 'quantum_prog',
    category: 'Quantum Algorithms',
    question: 'For an n-bit input function, how many oracle evaluations does the Deutsch-Jozsa algorithm require to deterministically prove if f(x) is constant or balanced?',
    options: [
      'Exactly 1 quantum evaluation',
      '2^(n-1) + 1 evaluations',
      'n evaluations',
      'O(n²) evaluations'
    ],
    correctAnswer: 0,
    explanation: 'While classical deterministic algorithms require 2^(n-1) + 1 queries in the worst case, the Deutsch-Jozsa quantum algorithm determines whether f(x) is constant or balanced with 100% certainty in exactly 1 quantum query.'
  },
  {
    id: 'qp-q11',
    topicId: 'quantum_prog',
    category: 'Quantum Algorithms',
    question: 'In the Bernstein-Vazirani algorithm to find a hidden secret bitstring s ∈ {0, 1}^n with oracle f(x) = s · x (mod 2), what is the quantum query complexity?',
    options: [
      '1 query (compared to n queries classically)',
      'O(√n) queries',
      'O(log n) queries',
      'O(2^n) queries'
    ],
    correctAnswer: 0,
    explanation: 'The Bernstein-Vazirani algorithm recovers all n bits of the secret string s in a single quantum evaluation (1 query), whereas a classical algorithm strictly requires n evaluations to query each bit position.'
  },
  {
    id: 'qp-q12',
    topicId: 'quantum_prog',
    category: 'Grover Search',
    question: 'What is the asymptotic speedup of Grover’s search algorithm for searching an unstructured database of N items?',
    options: [
      'Quadratic speedup: O(√N) quantum queries vs O(N) classical queries',
      'Exponential speedup: O(log N) queries vs O(N) classical queries',
      'Linear speedup: O(N/2) queries vs O(N) classical queries',
      'Polynomial speedup: O(N^(1/3)) queries'
    ],
    correctAnswer: 0,
    explanation: 'Grover’s algorithm provides a provable quadratic quantum speedup, finding a marked item in an unsorted database of size N in O(√N) iterations (specifically ≈ (π/4)√N steps), compared to O(N) for classical search.'
  },
  {
    id: 'qp-q13',
    topicId: 'quantum_prog',
    category: 'Quantum Fourier Transform',
    question: 'What is the circuit gate complexity of the Quantum Fourier Transform (QFT) on n qubits, compared to the classical Fast Fourier Transform (FFT)?',
    options: [
      'O(n²) gates for QFT vs O(n · 2^n) operations for classical FFT on N=2^n amplitudes',
      'O(2^n) gates for QFT vs O(n) operations for classical FFT',
      'O(n³) gates for QFT vs O(n²) operations for classical FFT',
      'O(n) gates for QFT vs O(log n) operations for classical FFT'
    ],
    correctAnswer: 0,
    explanation: 'The Quantum Fourier Transform on n qubits requires O(n²) quantum gates (specifically n(n+1)/2 Hadamard and controlled-phase gates), providing an exponential speedup over the classical Fast Fourier Transform which requires O(n · 2^n) operations.'
  },
  {
    id: 'qp-q14',
    topicId: 'quantum_prog',
    category: 'Shor’s Factoring Algorithm',
    question: 'In Shor’s prime factoring algorithm, which sub-routine executes on the quantum hardware to achieve exponential speedup?',
    options: [
      'Order (period) finding of the modular function f(x) = a^x mod N via Quantum Phase Estimation and QFT',
      'Greatest Common Divisor (GCD) extraction via Euclidean algorithm',
      'Continued fractions expansion for finding convergent rationales',
      'Primality testing via Miller-Rabin test'
    ],
    correctAnswer: 0,
    explanation: 'The quantum speedup in Shor’s algorithm is entirely rooted in finding the period r of modular exponentiation a^x mod N using Quantum Phase Estimation and QFT; the remaining steps (GCD and continued fractions) are efficient classical post-processing.'
  },
  {
    id: 'qp-q15',
    topicId: 'quantum_prog',
    category: 'Variational Quantum Algorithms (NISQ)',
    question: 'How does the Variational Quantum Eigensolver (VQE) algorithm guarantee an upper bound on the ground state energy E_0 of a Hamiltonian H?',
    options: [
      'By the Rayleigh-Ritz variational principle: ⟨ψ(θ)|H|ψ(θ)⟩ ≥ E_0 for any trial ansatz state |ψ(θ)⟩',
      'By the Adiabatic theorem using infinitely slow parameter ramping',
      'By the quantum Zeno effect projecting into the lowest eigenvalue',
      'By error mitigation extrapolation using zero-noise limit'
    ],
    correctAnswer: 0,
    explanation: 'The variational theorem dictates that the expectation value ⟨ψ(θ)|H|ψ(θ)⟩ of any parameterized state |ψ(θ)⟩ with respect to Hamiltonian H is always greater than or equal to the exact ground state energy E_0, allowing classical optimizers to minimize the energy bound.'
  },
  {
    id: 'qp-q16',
    topicId: 'quantum_prog',
    category: 'QAOA & Optimization',
    question: 'What are the two alternating unitaries in each layer of the Quantum Approximate Optimization Algorithm (QAOA)?',
    options: [
      'The Cost (Phase) Hamiltonian evolution U(C, γ) = e^(-iγ C) and the Mixer (Driver) Hamiltonian evolution U(B, β) = e^(-iβ B)',
      'The Hadamard transform and the SWAP network',
      'The QFT operator and the Inverse QFT operator',
      'The Toffoli gate and the Pauli-X bit flip'
    ],
    correctAnswer: 0,
    explanation: 'QAOA alternates between parameterized evolutions under the problem Cost Hamiltonian C (which encodes the objective function, such as Max-Cut) and a transverse-field Mixer Hamiltonian B = ∑ X_i, parameterized by variational angles γ and β.'
  },
  {
    id: 'qp-q17',
    topicId: 'quantum_prog',
    category: 'Quantum Error Correction',
    question: 'In the 3-qubit bit-flip error correcting code, what do the two syndrome ancilla measurements detect?',
    options: [
      'Parity checks Z_0 Z_1 and Z_1 Z_2 to identify which specific qubit experienced a Pauli-X bit-flip without destroying quantum superposition',
      'The exact amplitude α and β of the encoded logical state',
      'Phase drift caused by T2 dephasing noise',
      'Leakage to higher non-computational transmon energy levels'
    ],
    correctAnswer: 0,
    explanation: 'The syndrome measurement measures the multi-qubit parity operators Z_0 Z_1 and Z_1 Z_2 via ancilla qubits, revealing whether adjacent qubits differ (the syndrome) to locate the flipped bit without measuring the state itself.'
  },
  {
    id: 'qp-q18',
    topicId: 'quantum_prog',
    category: 'Fault-Tolerant Quantum Computing',
    question: 'What is the Eastin-Knill Theorem in quantum error correction?',
    options: [
      'No quantum error-correcting code can implement a universal set of quantum gates using exclusively transversal (fault-tolerant) gates.',
      'Surface codes cannot correct both X and Z errors simultaneously.',
      'Physical error rates must be below 50% to achieve fault-tolerant threshold.',
      'Magic state distillation requires an exponential number of T gates.'
    ],
    correctAnswer: 0,
    explanation: 'The Eastin-Knill theorem proves that no non-trivial quantum error-correcting code can implement a universal set of quantum gates using only transversal operations, necessitating techniques like magic state distillation for fault-tolerant universal computing.'
  },
  {
    id: 'qp-q19',
    topicId: 'quantum_prog',
    category: 'Qiskit & OpenQASM',
    question: 'What is the purpose of Qiskit transpilation (e.g. transpile(qc, backend, optimization_level=3))?',
    options: [
      'Map abstract circuit gates into the hardware’s native basis gates (e.g. cx, rz, sx, x) and route qubits to satisfy the device coupling map while minimizing depth',
      'Convert OpenQASM 3.0 scripts directly into C++ binary shared libraries',
      'Simulate the statevector mathematically on CPU vectors',
      'Eliminate all quantum phase noise using cryogenic cooling'
    ],
    correctAnswer: 0,
    explanation: "Transpilation takes a high-level quantum circuit and transforms it into an equivalent circuit optimized for a specific quantum device by rewriting gates into the hardware's native basis gate set, inserting SWAPs for limited qubit connectivity, and consolidating redundant single-qubit rotations."
  },
  {
    id: 'qp-q20',
    topicId: 'quantum_prog',
    category: 'Bell Nonlocality & CHSH',
    question: 'What is the maximum value of the CHSH correlation parameter |S| achievable by quantum entanglement (Tsirelson’s Bound), compared to the classical local hidden variable limit?',
    options: [
      'Quantum limit |S| = 2√2 ≈ 2.828, while classical local realism limits |S| ≤ 2',
      'Quantum limit |S| = 4, while classical limit is |S| ≤ 3',
      'Quantum limit |S| = 2, while classical limit is |S| ≤ 1',
      'Quantum limit |S| = π ≈ 3.14, while classical limit is |S| ≤ 2'
    ],
    correctAnswer: 0,
    explanation: "Bell's theorem and the Clauser-Horne-Shimony-Holt (CHSH) inequality prove that classical local realistic theories are bounded by |S| ≤ 2. Entangled quantum states violate this inequality up to Tsirelson's bound |S| = 2√2 ≈ 2.828, proving quantum nonlocality."
  }
];
