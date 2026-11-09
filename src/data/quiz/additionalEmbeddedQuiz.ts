import { QuizQuestion } from '../quizData';

export const ADDITIONAL_EMBEDDED_QUESTIONS: QuizQuestion[] = [
  {
    "id": "embc-add-01",
    "topicId": "embedded_c",
    "category": "Volatile & Hardware",
    "question": "What is the purpose of the `volatile` type qualifier in embedded C programming?",
    "options": [
      "Tells the compiler that the variable can change unexpectedly (e.g. by hardware peripherals or ISRs), preventing dangerous compiler optimization caching in registers",
      "Allocates the variable in flash ROM",
      "Increases pointer dereferencing speed",
      "Encrypts memory variables against stack smashing"
    ],
    "correctAnswer": 0,
    "explanation": "Embedded C concept: Volatile & Hardware. Correct answer option 1 accurately reflects real-world firmware principles."
  },
  {
    "id": "embc-add-02",
    "topicId": "embedded_c",
    "category": "ISR Design Rules",
    "question": "Why should `printf()` typically be avoided inside an Interrupt Service Routine (ISR)?",
    "options": [
      "ISRs cannot access serial ports",
      "printf() is non-reentrant, thread-unsafe, and extremely slow (blocking I/O), which disrupts high-priority real-time interrupt latency",
      "printf() disables the MCU core permanently",
      "printf() requires 64-bit hardware floating point"
    ],
    "correctAnswer": 1,
    "explanation": "Embedded C concept: ISR Design Rules. Correct answer option 2 accurately reflects real-world firmware principles."
  },
  {
    "id": "embc-add-03",
    "topicId": "embedded_c",
    "category": "Bit Manipulation",
    "question": "How is an atomic bit set operation performed on a 32-bit hardware control register `REG_CTRL` at bit 5?",
    "options": [
      "`REG_CTRL |= (1U << 5);`",
      "`REG_CTRL &= ~(1U << 5);`",
      "`REG_CTRL = 5;`",
      "`REG_CTRL ^= (5 << 1);`"
    ],
    "correctAnswer": 0,
    "explanation": "Embedded C concept: Bit Manipulation. Correct answer option 1 accurately reflects real-world firmware principles."
  },
  {
    "id": "embc-add-04",
    "topicId": "embedded_c",
    "category": "ARM Cortex-M MPU",
    "question": "In ARM Cortex-M microcontrollers, what is the significance of the Memory Protection Unit (MPU)?",
    "options": [
      "Protects external SD cards from read errors",
      "Defines memory access permissions (privileged vs unprivileged, read/write/execute) for designated address regions to prevent stack overflows and task corruption",
      "Converts big-endian to little-endian bytes",
      "Multiplies clock frequency dynamically"
    ],
    "correctAnswer": 1,
    "explanation": "Embedded C concept: ARM Cortex-M MPU. Correct answer option 2 accurately reflects real-world firmware principles."
  },
  {
    "id": "embc-add-05",
    "topicId": "embedded_c",
    "category": "MISRA-C & Memory",
    "question": "What is a 'memory leak' in embedded C and why is dynamic allocation (`malloc`) generally prohibited in safety-critical firmware (MISRA-C)?",
    "options": [
      "Physical electrolyte leaking from capacitor components",
      "Failure to free dynamically allocated heap memory leading to heap fragmentation and non-deterministic allocation failure during prolonged operation",
      "Memory being stolen over Wi-Fi",
      "Stack frame pointers becoming corrupted during interrupts"
    ],
    "correctAnswer": 1,
    "explanation": "Embedded C concept: MISRA-C & Memory. Correct answer option 2 accurately reflects real-world firmware principles."
  },
  {
    "id": "embc-add-06",
    "topicId": "embedded_c",
    "category": "Struct Packing",
    "question": "How does the `#pragma pack(1)` directive affect C struct memory layout?",
    "options": [
      "Compresses struct data using zlib",
      "Eliminates compiler padding bytes between struct members, producing tightly packed binary structures matching hardware wire protocols at the cost of potential unaligned access penalties",
      "Forces all members to be 1 byte wide",
      "Aligns struct to 64-byte cache lines"
    ],
    "correctAnswer": 1,
    "explanation": "Embedded C concept: Struct Packing. Correct answer option 2 accurately reflects real-world firmware principles."
  },
  {
    "id": "embc-add-07",
    "topicId": "embedded_c",
    "category": "Stack Management",
    "question": "What happens during a stack overflow in a bare-metal microcontroller?",
    "options": [
      "The CPU frequency drops to zero",
      "The call stack pointer grows beyond its allocated memory boundary and silently overwrites global variables, heap data, or hardware registers, causing system crashes or unpredictable execution",
      "The watchdog timer is disabled",
      "The flash ROM is erased"
    ],
    "correctAnswer": 1,
    "explanation": "Embedded C concept: Stack Management. Correct answer option 2 accurately reflects real-world firmware principles."
  },
  {
    "id": "embc-add-08",
    "topicId": "embedded_c",
    "category": "Scope & Linkage",
    "question": "What does the keyword `static` signify when applied to a global variable in a C source file?",
    "options": [
      "The variable is stored in flash memory instead of RAM",
      "Limits the variable scope strictly to the current translation unit (.c file), preventing namespace collisions and unauthorized external linkage",
      "The variable can never be modified",
      "The variable is synchronized across multiple CPU cores"
    ],
    "correctAnswer": 1,
    "explanation": "Embedded C concept: Scope & Linkage. Correct answer option 2 accurately reflects real-world firmware principles."
  },
  {
    "id": "embc-add-09",
    "topicId": "embedded_c",
    "category": "Watchdog Timers",
    "question": "What is the primary role of a hardware Watchdog Timer (WDT) in embedded systems?",
    "options": [
      "Counts system clock cycles for profilers",
      "Monitors firmware health; if software hangs or crashes and fails to periodically 'kick/feed' the WDT before its countdown expires, it triggers an automated hardware system reset",
      "Monitors battery temperature",
      "Prevents reverse engineering of firmware"
    ],
    "correctAnswer": 1,
    "explanation": "Embedded C concept: Watchdog Timers. Correct answer option 2 accurately reflects real-world firmware principles."
  },
  {
    "id": "embc-add-10",
    "topicId": "embedded_c",
    "category": "Function Pointers",
    "question": "How is a function pointer declared in C that takes two `int` arguments and returns `void`?",
    "options": [
      "`void (*func_ptr)(int, int);`",
      "`void *func_ptr(int, int);`",
      "`func_ptr(void, int, int);`",
      "`void (func_ptr*)(int, int);`"
    ],
    "correctAnswer": 0,
    "explanation": "Embedded C concept: Function Pointers. Correct answer option 1 accurately reflects real-world firmware principles."
  },
  {
    "id": "embc-add-11",
    "topicId": "embedded_c",
    "category": "Compiler Attributes",
    "question": "What does the compiler attribute `__attribute__((aligned(4)))` achieve?",
    "options": [
      "Ensures the variable or structure is placed at a memory address that is an exact multiple of 4 bytes, avoiding unaligned memory access faults on RISC architectures",
      "Forces the variable to 4 bits",
      "Allocates 4 copies of the variable",
      "Enforces 4-stage pipeline alignment"
    ],
    "correctAnswer": 0,
    "explanation": "Embedded C concept: Compiler Attributes. Correct answer option 1 accurately reflects real-world firmware principles."
  },
  {
    "id": "embc-add-12",
    "topicId": "embedded_c",
    "category": "CMSIS Standards",
    "question": "What is the purpose of the CMSIS (Cortex Microcontroller Software Interface Standard) library?",
    "options": [
      "Provides a unified, vendor-independent hardware abstraction layer (HAL) for ARM Cortex-M processor cores, peripheral registers, and DSP libraries",
      "Compiles C into FPGA bitstreams",
      "Acts as an operating system kernel",
      "Simulates PCB board traces"
    ],
    "correctAnswer": 0,
    "explanation": "Embedded C concept: CMSIS Standards. Correct answer option 1 accurately reflects real-world firmware principles."
  },
  {
    "id": "embc-add-13",
    "topicId": "embedded_c",
    "category": "Linker Scripts",
    "question": "What is the purpose of an embedded system linker script (`.ld` file)?",
    "options": [
      "Compiles C source code into assembly",
      "Defines the physical memory map of the MCU (Flash, SRAM, CCM, Peripherals) and specifies exact section placement (.text, .rodata, .data, .bss, stack, heap)",
      "Links the microcontroller to PC USB ports",
      "Decrypts protected bootloader code"
    ],
    "correctAnswer": 1,
    "explanation": "Embedded C concept: Linker Scripts. Correct answer option 2 accurately reflects real-world firmware principles."
  },
  {
    "id": "embc-add-14",
    "topicId": "embedded_c",
    "category": "Memory Sections",
    "question": "What is the key difference between `.data` and `.bss` sections in embedded memory maps?",
    "options": [
      ".data holds initialized global/static variables copied from flash to RAM at startup; .bss holds uninitialized global/static variables that are zeroed out at startup by crt0",
      ".bss is stored permanently in flash; .data is in registers",
      ".data is read-only; .bss is read-write",
      "There is no difference"
    ],
    "correctAnswer": 0,
    "explanation": "Embedded C concept: Memory Sections. Correct answer option 1 accurately reflects real-world firmware principles."
  },
  {
    "id": "embc-add-15",
    "topicId": "embedded_c",
    "category": "Data Structures",
    "question": "Why is circular buffer (ring buffer) implementation preferred for UART receive data in firmware?",
    "options": [
      "Ring buffers consume zero CPU memory",
      "Provides a fixed-size FIFO queue with separate read and write head pointers that avoids costly memory reallocation and prevents buffer shifting during continuous byte stream reception",
      "Ring buffers automatically correct bit parity errors",
      "Ring buffers encrypt incoming serial data"
    ],
    "correctAnswer": 1,
    "explanation": "Embedded C concept: Data Structures. Correct answer option 2 accurately reflects real-world firmware principles."
  },
  {
    "id": "embc-add-16",
    "topicId": "embedded_c",
    "category": "DMA Architecture",
    "question": "What does Direct Memory Access (DMA) accomplish in microcontroller architectures?",
    "options": [
      "Allows high-speed data transfer between peripherals (e.g. SPI, ADC, UART) and SRAM without involving the CPU core, freeing the CPU for computation",
      "Directly programs flash memory without a programmer",
      "Overclocks peripheral bus clocks",
      "Acts as an external DDR memory controller"
    ],
    "correctAnswer": 0,
    "explanation": "Embedded C concept: DMA Architecture. Correct answer option 1 accurately reflects real-world firmware principles."
  },
  {
    "id": "embc-add-17",
    "topicId": "embedded_c",
    "category": "Reentrancy",
    "question": "What is a 'reentrant' function in embedded software?",
    "options": [
      "A function that calls itself recursively",
      "A function that can be interrupted in the middle of its execution, safely called again by an ISR or another thread, and later resume its original execution without data corruption",
      "A function stored in read-only memory",
      "A function that can never be interrupted"
    ],
    "correctAnswer": 1,
    "explanation": "Embedded C concept: Reentrancy. Correct answer option 2 accurately reflects real-world firmware principles."
  },
  {
    "id": "embc-add-18",
    "topicId": "embedded_c",
    "category": "Endianness",
    "question": "How is an endianness check typically performed in C at runtime?",
    "options": [
      "`uint32_t x = 1; bool is_little = (*(char*)&x == 1);`",
      "`sizeof(int) == 4;`",
      "`check_endian();`",
      "`#ifdef __BIG_ENDIAN__`"
    ],
    "correctAnswer": 0,
    "explanation": "Embedded C concept: Endianness. Correct answer option 1 accurately reflects real-world firmware principles."
  },
  {
    "id": "embc-add-19",
    "topicId": "embedded_c",
    "category": "Stack Safety",
    "question": "What is the danger of using recursion in embedded firmware on microcontrollers?",
    "options": [
      "Recursion is not supported by GCC",
      "Each recursive call consumes a new stack frame, rapidly exhausting limited microcontroller SRAM and causing catastrophic stack overflow crashes",
      "Recursion disables hardware floating-point units",
      "Recursion causes flash wear out"
    ],
    "correctAnswer": 1,
    "explanation": "Embedded C concept: Stack Safety. Correct answer option 2 accurately reflects real-world firmware principles."
  },
  {
    "id": "embc-add-20",
    "topicId": "embedded_c",
    "category": "Inlining",
    "question": "What does the `inline` keyword suggest to the C compiler in performance-critical code?",
    "options": [
      "Places the variable in the CPU cache",
      "Advises the compiler to replace function calls directly with the function's body code at the call site, eliminating call/return overhead at the expense of code size",
      "Forces function execution on a single core",
      "Compiles the function into inline assembly"
    ],
    "correctAnswer": 1,
    "explanation": "Embedded C concept: Inlining. Correct answer option 2 accurately reflects real-world firmware principles."
  },
  {
    "id": "embc-add-21",
    "topicId": "embedded_c",
    "category": "Power Integrity",
    "question": "In embedded systems, what is the role of a Brown-Out Detector (BOD)?",
    "options": [
      "Detects overheating in the CPU core",
      "Continuously monitors VDD supply voltage; if voltage drops below a safe operating threshold, it triggers a clean reset to prevent erratic CPU execution and EEPROM corruption",
      "Protects against static ESD shocks",
      "Detects brown color on camera sensors"
    ],
    "correctAnswer": 1,
    "explanation": "Embedded C concept: Power Integrity. Correct answer option 2 accurately reflects real-world firmware principles."
  },
  {
    "id": "embc-add-22",
    "topicId": "embedded_c",
    "category": "Bitwise Operations",
    "question": "How is a bit cleared in a register without modifying any other bits?",
    "options": [
      "`REG &= ~(1U << bit_pos);`",
      "`REG |= (1U << bit_pos);`",
      "`REG ^= (1U << bit_pos);`",
      "`REG = 0;`"
    ],
    "correctAnswer": 0,
    "explanation": "Embedded C concept: Bitwise Operations. Correct answer option 1 accurately reflects real-world firmware principles."
  },
  {
    "id": "embc-add-23",
    "topicId": "embedded_c",
    "category": "ARM Fault Handling",
    "question": "What is the difference between hard fault and usage fault in ARM Cortex-M?",
    "options": [
      "Hard fault is for hardware overheating; usage fault is for user login",
      "Hard fault is a generic high-priority exception for critical errors (e.g. bus errors, vector table failures); usage fault handles execution faults like division by zero or unaligned memory access",
      "Hard fault is an analog fault; usage fault is digital",
      "They are identical exceptions"
    ],
    "correctAnswer": 1,
    "explanation": "Embedded C concept: ARM Fault Handling. Correct answer option 2 accurately reflects real-world firmware principles."
  },
  {
    "id": "embc-add-24",
    "topicId": "embedded_c",
    "category": "C/C++ Interop",
    "question": "What is the purpose of the `extern \"C\"` block when including C headers in C++ embedded projects?",
    "options": [
      "Enables C++ class templates in C",
      "Prevents C++ compiler name mangling, allowing C++ linkers to locate and link standard C function symbols correctly",
      "Forces strict C99 syntax rules",
      "Exports code to Linux kernel modules"
    ],
    "correctAnswer": 1,
    "explanation": "Embedded C concept: C/C++ Interop. Correct answer option 2 accurately reflects real-world firmware principles."
  },
  {
    "id": "embc-add-25",
    "topicId": "embedded_c",
    "category": "MMIO Access",
    "question": "What does a memory-mapped I/O (MMIO) pointer declaration look like in embedded C?",
    "options": [
      "`#define UART_DR (*((volatile uint32_t *)0x4000C000))`",
      "`uint32_t UART_DR = 0x4000C000;`",
      "`pointer UART_DR at 0x4000C000;`",
      "`void *UART_DR = malloc(4);`"
    ],
    "correctAnswer": 0,
    "explanation": "Embedded C concept: MMIO Access. Correct answer option 1 accurately reflects real-world firmware principles."
  },
  {
    "id": "embc-add-26",
    "topicId": "embedded_c",
    "category": "Const Correctness",
    "question": "Why is the `const` qualifier used extensively on embedded function parameter pointers (e.g. `void send_data(const uint8_t *buf, size_t len);`)?",
    "options": [
      "Stores the buffer in flash ROM permanently",
      "Documents and enforces that the function will treat the referenced buffer as read-only, preventing accidental mutation of caller data",
      "Accelerates RAM access speed by 2x",
      "Allows the function to be called from ISRs"
    ],
    "correctAnswer": 1,
    "explanation": "Embedded C concept: Const Correctness. Correct answer option 2 accurately reflects real-world firmware principles."
  },
  {
    "id": "embc-add-27",
    "topicId": "embedded_c",
    "category": "GPIO Filtering",
    "question": "What is 'Debouncing' in microcontroller switch input handling?",
    "options": [
      "Amplifying weak switch signals",
      "Software filtering (delay or state integration) that ignores rapid mechanical contact bounce glitches (1-10ms) occurring when a physical button is pressed or released",
      "Disabling electrical pull-ups on pins",
      "Calibrating analog switch resistance"
    ],
    "correctAnswer": 1,
    "explanation": "Embedded C concept: GPIO Filtering. Correct answer option 2 accurately reflects real-world firmware principles."
  },
  {
    "id": "embc-add-28",
    "topicId": "embedded_c",
    "category": "CPU Intrinsics",
    "question": "What does the `__NOP()` intrinsic function execute in embedded firmware?",
    "options": [
      "Executes a No-Operation assembly instruction (NOP), consuming exactly one clock cycle without modifying registers, useful for micro-delays or pipeline synchronization",
      "Shuts down the microcontroller core",
      "Disables all interrupts globally",
      "Resets the CPU stack pointer"
    ],
    "correctAnswer": 0,
    "explanation": "Embedded C concept: CPU Intrinsics. Correct answer option 1 accurately reflects real-world firmware principles."
  },
  {
    "id": "embc-add-29",
    "topicId": "embedded_c",
    "category": "Communication Protocols",
    "question": "In embedded communications, what is the purpose of a Cyclic Redundancy Check (CRC)?",
    "options": [
      "Encrypts communication frames",
      "Computes an algebraic polynomial checksum across transmitted data packets, allowing the receiver to detect bit errors and frame corruption with high mathematical certainty",
      "Compresses data payload bytes",
      "Controls baud rate synchronization"
    ],
    "correctAnswer": 1,
    "explanation": "Embedded C concept: Communication Protocols. Correct answer option 2 accurately reflects real-world firmware principles."
  },
  {
    "id": "embc-add-30",
    "topicId": "embedded_c",
    "category": "Startup & Boot",
    "question": "What is the startup code `Reset_Handler` responsible for before calling `main()` in ARM Cortex-M?",
    "options": [
      "Initializing system clocks, copying the `.data` section from flash to SRAM, zeroing the `.bss` section in SRAM, and initializing the FPU if present",
      "Compiling user C code at boot time",
      "Connecting to Wi-Fi networks",
      "Running unit test regressions"
    ],
    "correctAnswer": 0,
    "explanation": "Embedded C concept: Startup & Boot. Correct answer option 1 accurately reflects real-world firmware principles."
  },
  {
    "id": "mnem-add-01",
    "topicId": "mnemonics",
    "category": "ARM Addressing Modes",
    "question": "In ARM Cortex-M assembly, what does the mnemonic `LDR R0, [R1, #4]!` perform?",
    "options": [
      "Loads R0 from memory address [R1 + 4] and updates R1 with the new address (pre-indexed with writeback)",
      "Loads R0 from [R1] and then adds 4 to R1 (post-indexed)",
      "Loads R0 from [R1 + 4] without altering R1",
      "Stores R0 into memory at [R1 - 4]"
    ],
    "correctAnswer": 0,
    "explanation": "Assembly & Mnemonics: ARM Addressing Modes. Correct answer option 1 accurately reflects ISA specifications."
  },
  {
    "id": "mnem-add-02",
    "topicId": "mnemonics",
    "category": "RISC-V Instructions",
    "question": "What is the function of the RISC-V instruction `auipc rd, imm`?",
    "options": [
      "Adds immediate to program counter and places result in rd: `rd = PC + (imm << 12)`",
      "Adds immediate to stack pointer",
      "Jumps unconditionally to target address",
      "Executes an atomic memory swap"
    ],
    "correctAnswer": 0,
    "explanation": "Assembly & Mnemonics: RISC-V Instructions. Correct answer option 1 accurately reflects ISA specifications."
  },
  {
    "id": "mnem-add-03",
    "topicId": "mnemonics",
    "category": "x86 Instructions",
    "question": "In x86 assembly, how does the `TEST EAX, EAX` instruction differ from `CMP EAX, 0`?",
    "options": [
      "`TEST` performs a non-destructive bitwise AND, updating Zero and Sign flags without consuming arithmetic subtraction hardware",
      "`TEST` modifies EAX; `CMP` does not",
      "`TEST` is only allowed in 16-bit mode",
      "`CMP` does not update the Zero flag"
    ],
    "correctAnswer": 0,
    "explanation": "Assembly & Mnemonics: x86 Instructions. Correct answer option 1 accurately reflects ISA specifications."
  },
  {
    "id": "mnem-add-04",
    "topicId": "mnemonics",
    "category": "ARM Condition Flags",
    "question": "In ARM assembly, what does the suffix `S` on an instruction signify (e.g. `ADDS R0, R1, R2`)?",
    "options": [
      "Indicates signed multiplication",
      "Instructs the ALU to update the condition status flags (N, Z, C, V) in the APSR based on the operation result",
      "Executes the instruction in supervisor mode",
      "Saves the result to stack memory"
    ],
    "correctAnswer": 1,
    "explanation": "Assembly & Mnemonics: ARM Condition Flags. Correct answer option 2 accurately reflects ISA specifications."
  },
  {
    "id": "mnem-add-05",
    "topicId": "mnemonics",
    "category": "RISC-V Architecture",
    "question": "What does the RISC-V pseudo-instruction `nop` assemble into?",
    "options": [
      "`addi x0, x0, 0`",
      "`jal x0, 0`",
      "`sub x0, x0, x0`",
      "`fence`"
    ],
    "correctAnswer": 0,
    "explanation": "Assembly & Mnemonics: RISC-V Architecture. Correct answer option 1 accurately reflects ISA specifications."
  },
  {
    "id": "mnem-add-06",
    "topicId": "mnemonics",
    "category": "Power Management",
    "question": "In ARM Cortex-M, what does the mnemonic `WFI` (Wait For Interrupt) do?",
    "options": [
      "Suspends CPU instruction execution and puts the core into low-power sleep mode until a hardware interrupt or event fires",
      "Waits for an Ethernet packet",
      "Resets the watchdog timer",
      "Clears the interrupt pending register"
    ],
    "correctAnswer": 0,
    "explanation": "Assembly & Mnemonics: Power Management. Correct answer option 1 accurately reflects ISA specifications."
  },
  {
    "id": "mnem-add-07",
    "topicId": "mnemonics",
    "category": "Calling Conventions",
    "question": "What is the purpose of the `PUSH {R4-R7, LR}` and `POP {R4-R7, PC}` instruction pair in ARM functions?",
    "options": [
      "Saves callee-saved registers and return link register to the stack upon entry, and restores them directly into the Program Counter upon exit to perform a clean function return",
      "Swaps register contents atomically",
      "Allocates 64 bytes of heap memory",
      "Configures DMA transfer registers"
    ],
    "correctAnswer": 0,
    "explanation": "Assembly & Mnemonics: Calling Conventions. Correct answer option 1 accurately reflects ISA specifications."
  },
  {
    "id": "mnem-add-08",
    "topicId": "mnemonics",
    "category": "RISC-V Registers",
    "question": "In RISC-V, which register is hardwired to constant zero?",
    "options": [
      "`x0` (zero)",
      "`x1` (ra)",
      "`x2` (sp)",
      "`x10` (a0)"
    ],
    "correctAnswer": 0,
    "explanation": "Assembly & Mnemonics: RISC-V Registers. Correct answer option 1 accurately reflects ISA specifications."
  },
  {
    "id": "mnem-add-09",
    "topicId": "mnemonics",
    "category": "ARM Thumb-2",
    "question": "What does the ARM instruction `CBZ Rn, label` do?",
    "options": [
      "Compares register Rn with zero and branches to label if Rn is zero, without modifying condition flags",
      "Clears bit zero in register Rn",
      "Counts leading zeros in Rn",
      "Calls a C function if Rn is zero"
    ],
    "correctAnswer": 0,
    "explanation": "Assembly & Mnemonics: ARM Thumb-2. Correct answer option 1 accurately reflects ISA specifications."
  },
  {
    "id": "mnem-add-10",
    "topicId": "mnemonics",
    "category": "x86 ABI",
    "question": "In x86-64 assembly, which register holds the function return value according to System V AMD64 ABI?",
    "options": [
      "RAX",
      "RDI",
      "RSP",
      "RDX"
    ],
    "correctAnswer": 0,
    "explanation": "Assembly & Mnemonics: x86 ABI. Correct answer option 1 accurately reflects ISA specifications."
  },
  {
    "id": "mnem-add-11",
    "topicId": "mnemonics",
    "category": "Memory Barriers",
    "question": "What is the purpose of the ARM mnemonic `DSB` (Data Synchronization Barrier)?",
    "options": [
      "Ensures all explicit memory accesses occurring before the DSB instruction complete before any subsequent instructions execute",
      "Synchronizes two clock domains",
      "Clears CPU data cache entirely",
      "Disables the external bus interface"
    ],
    "correctAnswer": 0,
    "explanation": "Assembly & Mnemonics: Memory Barriers. Correct answer option 1 accurately reflects ISA specifications."
  },
  {
    "id": "mnem-add-12",
    "topicId": "mnemonics",
    "category": "RISC-V Jumps",
    "question": "In RISC-V assembly, how is a jump to a subroutine (function call) performed?",
    "options": [
      "`jal ra, offset` (Jump and Link saving return address in ra / x1)",
      "`call_sub offset`",
      "`jump_sub offset`",
      "`ret offset`"
    ],
    "correctAnswer": 0,
    "explanation": "Assembly & Mnemonics: RISC-V Jumps. Correct answer option 1 accurately reflects ISA specifications."
  },
  {
    "id": "mnem-add-13",
    "topicId": "mnemonics",
    "category": "ARM Barriers",
    "question": "What does the mnemonic `ISB` (Instruction Synchronization Barrier) do in modern pipelined ARM cores?",
    "options": [
      "Flushes the processor instruction pipeline and prefetch buffer, forcing re-fetching of subsequent instructions (vital after modifying vector tables or MPU settings)",
      "Inserts a 1-second delay",
      "Synchronizes UART baud rate",
      "Disables interrupts globally"
    ],
    "correctAnswer": 0,
    "explanation": "Assembly & Mnemonics: ARM Barriers. Correct answer option 1 accurately reflects ISA specifications."
  },
  {
    "id": "mnem-add-14",
    "topicId": "mnemonics",
    "category": "x86 LEA",
    "question": "In x86 assembly, what does the `LEA` (Load Effective Address) instruction do?",
    "options": [
      "Calculates memory addresses (e.g. `LEA EAX, [EBX + ECX*4 + 8]`) using address generation hardware without accessing actual memory contents",
      "Loads data from external EEPROM",
      "Loads the interrupt descriptor table",
      "Clears the accumulator register"
    ],
    "correctAnswer": 0,
    "explanation": "Assembly & Mnemonics: x86 LEA. Correct answer option 1 accurately reflects ISA specifications."
  },
  {
    "id": "mnem-add-15",
    "topicId": "mnemonics",
    "category": "Interrupt Control",
    "question": "What does the ARM mnemonic `CPSID I` perform?",
    "options": [
      "Disables configurable interrupts globally by setting the PRIMASK register bit to 1",
      "Clears the processor cache ID register",
      "Enables supervisor call exceptions",
      "Changes CPU clock frequency"
    ],
    "correctAnswer": 0,
    "explanation": "Assembly & Mnemonics: Interrupt Control. Correct answer option 1 accurately reflects ISA specifications."
  },
  {
    "id": "mnem-add-16",
    "topicId": "mnemonics",
    "category": "RISC-V Traps",
    "question": "In RISC-V assembly, what does the `ecall` (Environment Call) instruction do?",
    "options": [
      "Requests operating system services (syscall) or traps into supervisor/machine mode execution",
      "Calls an external C library",
      "Outputs a character to serial console",
      "Powers down the core"
    ],
    "correctAnswer": 0,
    "explanation": "Assembly & Mnemonics: RISC-V Traps. Correct answer option 1 accurately reflects ISA specifications."
  },
  {
    "id": "mnem-add-17",
    "topicId": "mnemonics",
    "category": "Bit Manipulation",
    "question": "What does the ARM mnemonic `CLZ Rd, Rm` calculate?",
    "options": [
      "Counts the number of leading zero bits in source register Rm starting from MSB and places the count into Rd",
      "Clears register Rm to zero",
      "Checks for low-voltage zone errors",
      "Calculates long-division zeros"
    ],
    "correctAnswer": 0,
    "explanation": "Assembly & Mnemonics: Bit Manipulation. Correct answer option 1 accurately reflects ISA specifications."
  },
  {
    "id": "mnem-add-18",
    "topicId": "mnemonics",
    "category": "8051 Architecture",
    "question": "In 8051 microcontroller assembly, which instruction exchanges the low nibble of the accumulator with RAM?",
    "options": [
      "`XCHD A, @R0`",
      "`SWAP A`",
      "`MOV A, R0`",
      "`XCH A, R0`"
    ],
    "correctAnswer": 0,
    "explanation": "Assembly & Mnemonics: 8051 Architecture. Correct answer option 1 accurately reflects ISA specifications."
  },
  {
    "id": "mnem-add-19",
    "topicId": "mnemonics",
    "category": "Atomic Primitives",
    "question": "What does the ARM Cortex-M instruction `LDREX` / `STREX` provide?",
    "options": [
      "Atomic load-linked and store-conditional primitives for implementing lock-free synchronization and multi-core mutexes",
      "Extended precision floating-point arithmetic",
      "High-speed external DDR RAM transfer",
      "DMA channel configuration"
    ],
    "correctAnswer": 0,
    "explanation": "Assembly & Mnemonics: Atomic Primitives. Correct answer option 1 accurately reflects ISA specifications."
  },
  {
    "id": "mnem-add-20",
    "topicId": "mnemonics",
    "category": "RISC-V ABI",
    "question": "In RISC-V, which calling convention register holds the stack pointer?",
    "options": [
      "`x2` (`sp`)",
      "`x1` (`ra`)",
      "`x8` (`s0`)",
      "`x10` (`a0`)"
    ],
    "correctAnswer": 0,
    "explanation": "Assembly & Mnemonics: RISC-V ABI. Correct answer option 1 accurately reflects ISA specifications."
  },
  {
    "id": "mnem-add-21",
    "topicId": "mnemonics",
    "category": "Byte Reversal",
    "question": "What does the ARM mnemonic `REV Rd, Rm` do?",
    "options": [
      "Reverses the byte order in a 32-bit word (converting between big-endian and little-endian format)",
      "Reverses the bit order across all 32 bits",
      "Reverses branch prediction tables",
      "Decrements register Rm by 1"
    ],
    "correctAnswer": 0,
    "explanation": "Assembly & Mnemonics: Byte Reversal. Correct answer option 1 accurately reflects ISA specifications."
  },
  {
    "id": "mnem-add-22",
    "topicId": "mnemonics",
    "category": "String Instructions",
    "question": "In x86 assembly, what is the role of the `REP MOVSB` instruction?",
    "options": [
      "Repeatedly copies bytes from memory address [ESI/RSI] to [EDI/RDI] based on the count stored in ECX/RCX",
      "Compares two strings in memory",
      "Reverses a byte string in memory",
      "Represents an atomic semaphore lock"
    ],
    "correctAnswer": 0,
    "explanation": "Assembly & Mnemonics: String Instructions. Correct answer option 1 accurately reflects ISA specifications."
  },
  {
    "id": "mnem-add-23",
    "topicId": "mnemonics",
    "category": "Debug Architecture",
    "question": "What does the mnemonic `BKPT` (Breakpoint) accomplish in ARM debugging?",
    "options": [
      "Causes the processor to enter debug state or generate a DebugMonitor exception for debugger software inspection",
      "Halts the power supply permanently",
      "Breaks out of a loop",
      "Clears memory breakpoints"
    ],
    "correctAnswer": 0,
    "explanation": "Assembly & Mnemonics: Debug Architecture. Correct answer option 1 accurately reflects ISA specifications."
  },
  {
    "id": "mnem-add-24",
    "topicId": "mnemonics",
    "category": "Memory Ordering",
    "question": "In RISC-V assembly, what does the `fence` instruction guarantee?",
    "options": [
      "Enforces strict memory ordering between device I/O, memory reads, and memory writes across threads/harts",
      "Locks the CPU against unauthorized code",
      "Protects against stack overflow",
      "Forces all branch predictions to taken"
    ],
    "correctAnswer": 0,
    "explanation": "Assembly & Mnemonics: Memory Ordering. Correct answer option 1 accurately reflects ISA specifications."
  },
  {
    "id": "mnem-add-25",
    "topicId": "mnemonics",
    "category": "Syscalls",
    "question": "What does the ARM instruction `SVC #0` (Supervisor Call) execute?",
    "options": [
      "Generates a software interrupt exception that transitions the processor from unprivileged User mode to privileged Handler mode (standard OS syscall entry)",
      "Shuts down the processor core",
      "Switches from 32-bit to 64-bit mode",
      "Saves all registers to flash memory"
    ],
    "correctAnswer": 0,
    "explanation": "Assembly & Mnemonics: Syscalls. Correct answer option 1 accurately reflects ISA specifications."
  },
  {
    "id": "mnem-add-26",
    "topicId": "mnemonics",
    "category": "Arithmetic",
    "question": "In x86 assembly, how does the `IMUL` instruction differ from `MUL`?",
    "options": [
      "`IMUL` performs signed two's complement multiplication; `MUL` performs unsigned multiplication",
      "`IMUL` works only on floating point registers",
      "`IMUL` is a 16-bit instruction only",
      "`MUL` handles signed division"
    ],
    "correctAnswer": 0,
    "explanation": "Assembly & Mnemonics: Arithmetic. Correct answer option 1 accurately reflects ISA specifications."
  },
  {
    "id": "mnem-add-27",
    "topicId": "mnemonics",
    "category": "Bit Field Operations",
    "question": "What does the ARM mnemonic `BFC Rd, #lsb, #width` do?",
    "options": [
      "Bit Field Clear: clears adjacent bits in Rd starting at `#lsb` for `#width` bits to zero",
      "Branch if Carry Flag is clear",
      "Broadcast Fast Clock signal",
      "Bit Flip Compare"
    ],
    "correctAnswer": 0,
    "explanation": "Assembly & Mnemonics: Bit Field Operations. Correct answer option 1 accurately reflects ISA specifications."
  },
  {
    "id": "mnem-add-28",
    "topicId": "mnemonics",
    "category": "RISC-V CSR",
    "question": "In RISC-V, what is a `CSR` instruction (e.g. `csrrw`, `csrrs`, `csrrc`) used for?",
    "options": [
      "Reading and writing Control and Status Registers (e.g. mstatus, mepc, mie, mcause) for privilege and interrupt configuration",
      "Controlling serial SPI peripherals",
      "Communicating with external DRAM",
      "Resetting hardware timers"
    ],
    "correctAnswer": 0,
    "explanation": "Assembly & Mnemonics: RISC-V CSR. Correct answer option 1 accurately reflects ISA specifications."
  },
  {
    "id": "mnem-add-29",
    "topicId": "mnemonics",
    "category": "Thumb-2 IT Blocks",
    "question": "What does the ARM Thumb-2 mnemonic `IT` (If-Then) block do?",
    "options": [
      "Enables conditional execution for up to four consecutive instructions in 16-bit Thumb mode",
      "Declares an interrupt handler",
      "Inverts the truth value of a register",
      "Imports external assembly libraries"
    ],
    "correctAnswer": 0,
    "explanation": "Assembly & Mnemonics: Thumb-2 IT Blocks. Correct answer option 1 accurately reflects ISA specifications."
  },
  {
    "id": "mnem-add-30",
    "topicId": "mnemonics",
    "category": "Exception Entry/Exit",
    "question": "In ARM assembly, what value is loaded into the Link Register (LR / R14) when an interrupt/exception triggers in Cortex-M?",
    "options": [
      "An `EXC_RETURN` magic code (e.g. `0xFFFFFFF9` or `0xFFFFFFFD`) that tells the processor which stack pointer (MSP/PSP) and execution mode to restore on exit",
      "The exact PC address of the interrupted instruction",
      "The interrupt priority level",
      "The vector table base address"
    ],
    "correctAnswer": 0,
    "explanation": "Assembly & Mnemonics: Exception Entry/Exit. Correct answer option 1 accurately reflects ISA specifications."
  },
  {
    "id": "ard-add-01",
    "topicId": "arduino",
    "category": "Electrical Specs",
    "question": "What is the key electrical constraint of the standard ATmega328P microcontroller GPIO pins on an Arduino Uno?",
    "options": [
      "Absolute maximum DC current per I/O pin is 40mA (20mA recommended continuous)",
      "Pins can drive up to 2A continuous motor loads",
      "Pins tolerate up to 12V direct input without damage",
      "GPIO pins operate at 1.2V logic levels"
    ],
    "correctAnswer": 0,
    "explanation": "Arduino & MicroPython: Electrical Specs. Correct answer option 1 accurately reflects physical hardware and framework constraints."
  },
  {
    "id": "ard-add-02",
    "topicId": "arduino",
    "category": "Non-Blocking Architecture",
    "question": "Why should `delay()` be avoided inside Arduino loops for responsive sensor and communication projects?",
    "options": [
      "`delay()` consumes excessive battery power",
      "`delay()` is a blocking busy-wait loop that freezes the CPU, preventing button sensing, serial communication, and motor control until the duration completes",
      "`delay()` disables hardware timer interrupts",
      "`delay()` causes flash memory degradation"
    ],
    "correctAnswer": 1,
    "explanation": "Arduino & MicroPython: Non-Blocking Architecture. Correct answer option 2 accurately reflects physical hardware and framework constraints."
  },
  {
    "id": "ard-add-03",
    "topicId": "arduino",
    "category": "GPIO Pull-Ups",
    "question": "What does the `pinMode(pin, INPUT_PULLUP)` function configure in the microcontroller hardware?",
    "options": [
      "Enables an internal ~20kΩ to 50kΩ pull-up resistor to VCC on the pin, preventing floating input states when connected to an active-low button",
      "Connects a 100kΩ pull-down resistor to GND",
      "Powers an external motor relay",
      "Configures the pin as a high-speed PWM output"
    ],
    "correctAnswer": 0,
    "explanation": "Arduino & MicroPython: GPIO Pull-Ups. Correct answer option 1 accurately reflects physical hardware and framework constraints."
  },
  {
    "id": "ard-add-04",
    "topicId": "arduino",
    "category": "Hardware I2C",
    "question": "In Arduino Uno, which hardware pins are dedicated to the hardware I2C (Wire) bus?",
    "options": [
      "A4 (SDA) and A5 (SCL)",
      "Pins 0 (RX) and 1 (TX)",
      "Pins 10 (SS) and 11 (MOSI)",
      "Pins 2 (INT0) and 3 (INT1)"
    ],
    "correctAnswer": 0,
    "explanation": "Arduino & MicroPython: Hardware I2C. Correct answer option 1 accurately reflects physical hardware and framework constraints."
  },
  {
    "id": "ard-add-05",
    "topicId": "arduino",
    "category": "ADC Resolution",
    "question": "What is the resolution of the default Analog-to-Digital Converter (ADC) on the Arduino Uno ATmega328P?",
    "options": [
      "10-bit (returns integer values from 0 to 1023)",
      "8-bit (returns 0 to 255)",
      "12-bit (returns 0 to 4095)",
      "16-bit (returns 0 to 65535)"
    ],
    "correctAnswer": 0,
    "explanation": "Arduino & MicroPython: ADC Resolution. Correct answer option 1 accurately reflects physical hardware and framework constraints."
  },
  {
    "id": "ard-add-06",
    "topicId": "arduino",
    "category": "PWM Output",
    "question": "How does the `analogWrite(pin, val)` function produce an 'analog-like' voltage on standard 8-bit Arduino pins?",
    "options": [
      "Uses an internal digital-to-analog converter (DAC)",
      "Generates a high-speed Pulse Width Modulation (PWM) square wave with a duty cycle proportional to val (0 to 255)",
      "Alters the internal power supply voltage directly",
      "Varies pin electrical resistance dynamically"
    ],
    "correctAnswer": 1,
    "explanation": "Arduino & MicroPython: PWM Output. Correct answer option 2 accurately reflects physical hardware and framework constraints."
  },
  {
    "id": "ard-add-07",
    "topicId": "arduino",
    "category": "EEPROM Storage",
    "question": "What is the function of the `EEPROM.put(address, data)` function in Arduino?",
    "options": [
      "Writes arbitrary structs or primitives to non-volatile EEPROM and only updates cells if the new data differs from stored data to preserve write endurance",
      "Erases all flash memory",
      "Streams data to the serial monitor",
      "Saves variables to RAM cache"
    ],
    "correctAnswer": 0,
    "explanation": "Arduino & MicroPython: EEPROM Storage. Correct answer option 1 accurately reflects physical hardware and framework constraints."
  },
  {
    "id": "ard-add-08",
    "topicId": "arduino",
    "category": "MicroPython IRQ",
    "question": "In MicroPython, how is an interrupt handler attached to a GPIO pin on an ESP32 or RP2040?",
    "options": [
      "`pin.irq(trigger=Pin.IRQ_RISING, handler=my_callback)`",
      "`attachInterrupt(pin, my_callback)`",
      "`pin.set_interrupt(my_callback)`",
      "`interrupt.register(pin, my_callback)`"
    ],
    "correctAnswer": 0,
    "explanation": "Arduino & MicroPython: MicroPython IRQ. Correct answer option 1 accurately reflects physical hardware and framework constraints."
  },
  {
    "id": "ard-add-09",
    "topicId": "arduino",
    "category": "MicroPython Scheduling",
    "question": "What is the role of `micropython.schedule()` in MicroPython interrupt programming?",
    "options": [
      "Schedules tasks to run at a specific calendar date",
      "Defers complex operations (like memory allocation or print) from hard ISR context to the main Python execution thread to prevent heap errors",
      "Controls the CPU clock frequency",
      "Schedules deep-sleep wakeups"
    ],
    "correctAnswer": 1,
    "explanation": "Arduino & MicroPython: MicroPython Scheduling. Correct answer option 2 accurately reflects physical hardware and framework constraints."
  },
  {
    "id": "ard-add-10",
    "topicId": "arduino",
    "category": "MicroPython ISR Rules",
    "question": "Why will memory allocation (`val = [0] * 10`) crash inside a MicroPython hard interrupt handler?",
    "options": [
      "Interrupts run with the MicroPython garbage collector locked; attempting to allocate heap memory inside an ISR throws a `MemoryError`",
      "MicroPython cannot handle lists",
      "The CPU disables RAM during interrupts",
      "Variables must be declared as global"
    ],
    "correctAnswer": 0,
    "explanation": "Arduino & MicroPython: MicroPython ISR Rules. Correct answer option 1 accurately reflects physical hardware and framework constraints."
  },
  {
    "id": "ard-add-11",
    "topicId": "arduino",
    "category": "Timing",
    "question": "What is the role of the `millis()` function in Arduino timing?",
    "options": [
      "Returns elapsed milliseconds since the board began running the current program, utilizing Timer0 overflow interrupts",
      "Measures battery voltage in millivolts",
      "Sets the processor clock frequency in MHz",
      "Calculates motor rotation speed"
    ],
    "correctAnswer": 0,
    "explanation": "Arduino & MicroPython: Timing. Correct answer option 1 accurately reflects physical hardware and framework constraints."
  },
  {
    "id": "ard-add-12",
    "topicId": "arduino",
    "category": "Millis Rollover",
    "question": "What happens when the `millis()` 32-bit unsigned integer counter overflows?",
    "options": [
      "The Arduino halts permanently",
      "It rolls over smoothly from 4,294,967,295 to 0 after approximately 50 days; subtraction comparisons (`currentMillis - prevMillis >= interval`) remain mathematically accurate",
      "The flash memory corrupts",
      "The board enters power-down mode"
    ],
    "correctAnswer": 1,
    "explanation": "Arduino & MicroPython: Millis Rollover. Correct answer option 2 accurately reflects physical hardware and framework constraints."
  },
  {
    "id": "ard-add-13",
    "topicId": "arduino",
    "category": "SPI Bus",
    "question": "In Arduino SPI communication, what are the four standard signals used?",
    "options": [
      "MOSI (Master Out Slave In), MISO (Master In Slave Out), SCK (Serial Clock), SS/CS (Slave Select)",
      "SDA, SCL, VCC, GND",
      "TX, RX, RTS, CTS",
      "CAN_H, CAN_L, VCC, GND"
    ],
    "correctAnswer": 0,
    "explanation": "Arduino & MicroPython: SPI Bus. Correct answer option 1 accurately reflects physical hardware and framework constraints."
  },
  {
    "id": "ard-add-14",
    "topicId": "arduino",
    "category": "ISR Volatile",
    "question": "What is the function of the `volatile` keyword when declaring a global variable shared with `attachInterrupt()` in Arduino?",
    "options": [
      "Instructs the compiler not to cache the variable in CPU registers, ensuring changes made by the ISR are immediately visible to the main `loop()`",
      "Stores the variable in EEPROM",
      "Increases variable bit width",
      "Prevents the variable from being overwritten"
    ],
    "correctAnswer": 0,
    "explanation": "Arduino & MicroPython: ISR Volatile. Correct answer option 1 accurately reflects physical hardware and framework constraints."
  },
  {
    "id": "ard-add-15",
    "topicId": "arduino",
    "category": "MicroPython System",
    "question": "In MicroPython, what does `machine.reset()` do?",
    "options": [
      "Resets the board hardware cleanly, equivalent to pressing the physical reset button",
      "Erases all Python script files",
      "Restores factory default MicroPython firmware",
      "Clears the Python dictionary"
    ],
    "correctAnswer": 0,
    "explanation": "Arduino & MicroPython: MicroPython System. Correct answer option 1 accurately reflects physical hardware and framework constraints."
  },
  {
    "id": "ard-add-16",
    "topicId": "arduino",
    "category": "I2C Hardware",
    "question": "How are external I2C pull-up resistors sized for standard 100kHz / 400kHz I2C buses?",
    "options": [
      "Typically 2.2kΩ to 4.7kΩ between SDA/SCL lines and VCC, balancing rise-time RC constants against current sink capabilities of drivers",
      "100kΩ to 1MΩ",
      "10Ω to 50Ω",
      "Pull-up resistors are forbidden in I2C"
    ],
    "correctAnswer": 0,
    "explanation": "Arduino & MicroPython: I2C Hardware. Correct answer option 1 accurately reflects physical hardware and framework constraints."
  },
  {
    "id": "ard-add-17",
    "topicId": "arduino",
    "category": "MicroPython SPI",
    "question": "What is the maximum clock frequency of the standard SPI interface on an ESP32 running MicroPython?",
    "options": [
      "Up to 80 MHz depending on GPIO pin matrix routing",
      "Fixed at 9600 baud",
      "100 kHz maximum",
      "1 MHz maximum"
    ],
    "correctAnswer": 0,
    "explanation": "Arduino & MicroPython: MicroPython SPI. Correct answer option 1 accurately reflects physical hardware and framework constraints."
  },
  {
    "id": "ard-add-18",
    "topicId": "arduino",
    "category": "ADC Reference",
    "question": "What does the `analogReference(INTERNAL)` function do on an ATmega328P Arduino?",
    "options": [
      "Changes the ADC reference voltage from 5V VCC to the internal precision 1.1V bandgap voltage, providing higher sensitivity for small voltage signals",
      "Calibrates internal crystal clock frequency",
      "Measures internal CPU temperature",
      "Sets analog output voltage to 1.1V"
    ],
    "correctAnswer": 0,
    "explanation": "Arduino & MicroPython: ADC Reference. Correct answer option 1 accurately reflects physical hardware and framework constraints."
  },
  {
    "id": "ard-add-19",
    "topicId": "arduino",
    "category": "MicroPython Asyncio",
    "question": "In MicroPython on microcontrollers, what is `asyncio` used for?",
    "options": [
      "Cooperative non-blocking multitasking using coroutines (`async def`, `await`), allowing multiple tasks (sensors, display, network) to run concurrently on a single CPU core without an RTOS",
      "Executing multi-core assembly instructions",
      "Compiling Python scripts into machine code",
      "Managing battery charging curves"
    ],
    "correctAnswer": 0,
    "explanation": "Arduino & MicroPython: MicroPython Asyncio. Correct answer option 1 accurately reflects physical hardware and framework constraints."
  },
  {
    "id": "ard-add-20",
    "topicId": "arduino",
    "category": "Serial Communication",
    "question": "What does the `Serial.available()` function return in Arduino?",
    "options": [
      "The number of bytes received and currently waiting in the serial buffer queue to be read via `Serial.read()`",
      "True if the serial cable is plugged in",
      "The baud rate of the serial connection",
      "The number of remaining free bytes in RAM"
    ],
    "correctAnswer": 0,
    "explanation": "Arduino & MicroPython: Serial Communication. Correct answer option 1 accurately reflects physical hardware and framework constraints."
  },
  {
    "id": "ard-add-21",
    "topicId": "arduino",
    "category": "Motor Driver Protection",
    "question": "What is the role of a flyback diode connected in antiparallel across a relay coil or DC motor driven by an Arduino transistor?",
    "options": [
      "Dissipates the high-voltage inductive kickback spike generated when the coil current is suddenly interrupted, protecting the switching transistor from destruction",
      "Increases motor torque",
      "Regulates motor speed to 5V",
      "Acts as an electrical fuse"
    ],
    "correctAnswer": 0,
    "explanation": "Arduino & MicroPython: Motor Driver Protection. Correct answer option 1 accurately reflects physical hardware and framework constraints."
  },
  {
    "id": "ard-add-22",
    "topicId": "arduino",
    "category": "MicroPython Memory",
    "question": "In MicroPython, what does `gc.collect()` perform?",
    "options": [
      "Forces immediate garbage collection to reclaim unreferenced heap memory objects and reduce heap fragmentation",
      "Collects GPS coordinates",
      "Reads all analog ADC channels",
      "Flushes serial print buffers"
    ],
    "correctAnswer": 0,
    "explanation": "Arduino & MicroPython: MicroPython Memory. Correct answer option 1 accurately reflects physical hardware and framework constraints."
  },
  {
    "id": "ard-add-23",
    "topicId": "arduino",
    "category": "UART Types",
    "question": "What is the primary difference between a hardware UART and the `SoftwareSerial` library on Arduino?",
    "options": [
      "Hardware UART uses dedicated silicon shift registers and baud generators with zero CPU overhead; SoftwareSerial bit-bangs GPIO pins using CPU timing interrupts, degrading system performance",
      "SoftwareSerial is 10x faster than hardware UART",
      "Hardware UART cannot transmit ASCII characters",
      "SoftwareSerial works without electrical ground"
    ],
    "correctAnswer": 0,
    "explanation": "Arduino & MicroPython: UART Types. Correct answer option 1 accurately reflects physical hardware and framework constraints."
  },
  {
    "id": "ard-add-24",
    "topicId": "arduino",
    "category": "Quadrature Decoding",
    "question": "How is an optical rotary encoder decoded on Arduino for reliable high-speed operation?",
    "options": [
      "By attaching pin-change interrupts to both Channel A and Channel B and decoding the 2-bit Gray code state transition matrix in the ISR",
      "Using `analogRead()` in a fast loop",
      "Connecting the encoder to a PWM pin",
      "Reading the encoder via I2C"
    ],
    "correctAnswer": 0,
    "explanation": "Arduino & MicroPython: Quadrature Decoding. Correct answer option 1 accurately reflects physical hardware and framework constraints."
  },
  {
    "id": "ard-add-25",
    "topicId": "arduino",
    "category": "Critical Sections",
    "question": "What is the purpose of `noInterrupts()` and `interrupts()` in Arduino code?",
    "options": [
      "Creates a critical section by disabling global interrupts before reading/modifying multi-byte volatile variables shared with an ISR, then re-enabling interrupts to prevent corrupt torn reads",
      "Pauses the crystal clock oscillator",
      "Turns off power to all peripheral chips",
      "Resets the microcontroller core"
    ],
    "correctAnswer": 0,
    "explanation": "Arduino & MicroPython: Critical Sections. Correct answer option 1 accurately reflects physical hardware and framework constraints."
  },
  {
    "id": "ard-add-26",
    "topicId": "arduino",
    "category": "Power Optimization",
    "question": "In MicroPython, what does `machine.deepsleep()` accomplish?",
    "options": [
      "Shuts down CPU core, high-speed clocks, and digital peripherals, maintaining only the ultra-low-power RTC and wake-up pins to consume microamperes of battery power",
      "Saves all Python variables to SD card",
      "Puts the display screen in dark mode",
      "Turns off Wi-Fi while keeping the CPU at full speed"
    ],
    "correctAnswer": 0,
    "explanation": "Arduino & MicroPython: Power Optimization. Correct answer option 1 accurately reflects physical hardware and framework constraints."
  },
  {
    "id": "ard-add-27",
    "topicId": "arduino",
    "category": "Math Functions",
    "question": "What does the `map(value, fromLow, fromHigh, toLow, toHigh)` function compute in Arduino?",
    "options": [
      "Linearly re-maps an integer number from one range to another: `(val - fromLow) * (toHigh - toLow) / (fromHigh - fromLow) + toLow`",
      "Generates a 2D topographical map",
      "Sorts array values into memory buckets",
      "Allocates memory on the heap"
    ],
    "correctAnswer": 0,
    "explanation": "Arduino & MicroPython: Math Functions. Correct answer option 1 accurately reflects physical hardware and framework constraints."
  },
  {
    "id": "ard-add-28",
    "topicId": "arduino",
    "category": "Hardware Decoupling",
    "question": "What is the purpose of decoupling capacitors (e.g. 0.1µF ceramic) placed adjacent to IC VCC pins on breadboards?",
    "options": [
      "Provides localized high-frequency charge storage to suppress VCC voltage dips caused by rapid CMOS transistor switching, preventing spurious microcontroller brownouts",
      "Increases analog sensor gain",
      "Acts as a timing crystal",
      "Filters 50Hz mains hum from audio signals"
    ],
    "correctAnswer": 0,
    "explanation": "Arduino & MicroPython: Hardware Decoupling. Correct answer option 1 accurately reflects physical hardware and framework constraints."
  },
  {
    "id": "ard-add-29",
    "topicId": "arduino",
    "category": "MicroPython Boot Flow",
    "question": "In MicroPython, what is the file `boot.py` used for compared to `main.py`?",
    "options": [
      "`boot.py` executes first on startup to configure system settings (like file systems, USB modes, and Wi-Fi); `main.py` executes second to run the user application script",
      "`boot.py` is read-only firmware; `main.py` is RAM storage",
      "`boot.py` compiles Python into C",
      "`main.py` runs only if there is an error in `boot.py`"
    ],
    "correctAnswer": 0,
    "explanation": "Arduino & MicroPython: MicroPython Boot Flow. Correct answer option 1 accurately reflects physical hardware and framework constraints."
  },
  {
    "id": "ard-add-30",
    "topicId": "arduino",
    "category": "Heap Fragmentation",
    "question": "Why should `String` objects (dynamic concatenation) be avoided in long-running Arduino microcontrollers?",
    "options": [
      "`String` dynamic allocations repeatedly create and destroy small heap buffers, causing severe RAM heap fragmentation that eventually leads to out-of-memory crashes; fixed C char arrays (`char buf[64]`) are preferred",
      "String objects cannot hold numbers",
      "String objects do not work with serial monitors",
      "String objects are proprietary to Microsoft"
    ],
    "correctAnswer": 0,
    "explanation": "Arduino & MicroPython: Heap Fragmentation. Correct answer option 1 accurately reflects physical hardware and framework constraints."
  },
  {
    "id": "pyhw-add-01",
    "topicId": "python_hw",
    "category": "Binary Packing",
    "question": "In Python hardware interfacing, what is the purpose of the `struct.pack(format, *args)` function?",
    "options": [
      "Converts Python values into packed binary bytes corresponding to exact C struct memory layouts for serial, SPI, or network hardware transmission",
      "Compresses image files",
      "Sorts hardware registers into dictionaries",
      "Encrypts strings with AES"
    ],
    "correctAnswer": 0,
    "explanation": "Python Hardware Interfacing: Binary Packing. Correct answer option 1 accurately reflects engineering standards."
  },
  {
    "id": "pyhw-add-02",
    "topicId": "python_hw",
    "category": "Serial Communication",
    "question": "What does the `pyserial` method `ser.read(10)` do when the configured timeout is 1.0 second?",
    "options": [
      "Blocks until exactly 10 bytes are read, or returns whatever bytes were received within 1.0 second if fewer than 10 arrive",
      "Always waits indefinitely until 10 bytes arrive",
      "Throws an exception immediately if 10 bytes are not instantly available in the buffer",
      "Reads 10 megabytes of data"
    ],
    "correctAnswer": 0,
    "explanation": "Python Hardware Interfacing: Serial Communication. Correct answer option 1 accurately reflects engineering standards."
  },
  {
    "id": "pyhw-add-03",
    "topicId": "python_hw",
    "category": "Ctypes Interop",
    "question": "What is the function of the `ctypes` library in Python hardware programming?",
    "options": [
      "Provides C-compatible data types and allows calling native compiled functions in dynamic libraries (DLLs, .so) and accessing physical hardware memory buffers directly",
      "Converts Python scripts into Verilog",
      "Generates printed circuit board designs",
      "Manages Python virtual environments"
    ],
    "correctAnswer": 0,
    "explanation": "Python Hardware Interfacing: Ctypes Interop. Correct answer option 1 accurately reflects engineering standards."
  },
  {
    "id": "pyhw-add-04",
    "topicId": "python_hw",
    "category": "Linux libgpiod",
    "question": "In Python embedded Linux, how are GPIO pins accessed using the modern `libgpiod` library instead of legacy `/sys/class/gpio`?",
    "options": [
      "Via the character device `/dev/gpiochipN` using ioctl calls, providing atomic pin control, hardware timestamping, and low-latency interrupt event monitoring",
      "By writing text strings to sysfs files",
      "By compiling kernel modules at runtime",
      "Using raw memory pointers in user space"
    ],
    "correctAnswer": 0,
    "explanation": "Python Hardware Interfacing: Linux libgpiod. Correct answer option 1 accurately reflects engineering standards."
  },
  {
    "id": "pyhw-add-05",
    "topicId": "python_hw",
    "category": "I2C Interfacing",
    "question": "What is the purpose of the `smbus2` Python package?",
    "options": [
      "Provides Python bindings for the Linux I2C / SMBus kernel driver subsystem to communicate with I2C sensor chips",
      "Simulates bus topologies in 3D graphics",
      "Manages CAN bus packets on automotive ECUs",
      "Monitors battery charging status"
    ],
    "correctAnswer": 0,
    "explanation": "Python Hardware Interfacing: I2C Interfacing. Correct answer option 1 accurately reflects engineering standards."
  },
  {
    "id": "pyhw-add-06",
    "topicId": "python_hw",
    "category": "Memory-Mapped I/O",
    "question": "How does `mmap` (memory-mapped files) allow Python to access physical peripheral registers on a Raspberry Pi or SoC?",
    "options": [
      "Maps the physical hardware memory range (e.g. `/dev/mem` at peripheral base `0x3F200000`) directly into the Python process virtual address space for high-speed register reads/writes",
      "Downloads peripheral drivers from the internet",
      "Compresses RAM memory blocks",
      "Emulates an ARM CPU in software"
    ],
    "correctAnswer": 0,
    "explanation": "Python Hardware Interfacing: Memory-Mapped I/O. Correct answer option 1 accurately reflects engineering standards."
  },
  {
    "id": "pyhw-add-07",
    "topicId": "python_hw",
    "category": "Linux Ioctl",
    "question": "What does `fcntl.ioctl()` perform in Python hardware scripting?",
    "options": [
      "Sends device-specific control commands and configuration parameters to underlying Linux hardware device drivers via open file descriptors",
      "Formats hard disk drives",
      "Controls network firewall ports",
      "Executes unit test suites"
    ],
    "correctAnswer": 0,
    "explanation": "Python Hardware Interfacing: Linux Ioctl. Correct answer option 1 accurately reflects engineering standards."
  },
  {
    "id": "pyhw-add-08",
    "topicId": "python_hw",
    "category": "Test Automation",
    "question": "In Python test automation, what is the role of the VISA (Virtual Instrument Software Architecture) standard (e.g. `pyvisa`)?",
    "options": [
      "Standardized API for discovering, connecting to, and controlling laboratory test instruments (oscilloscopes, power supplies, spectrum analyzers) over GPIB, USB, Ethernet, and RS-232",
      "Validates user credit card credentials",
      "Simulates quantum computers",
      "Compiles FPGA bitstreams"
    ],
    "correctAnswer": 0,
    "explanation": "Python Hardware Interfacing: Test Automation. Correct answer option 1 accurately reflects engineering standards."
  },
  {
    "id": "pyhw-add-09",
    "topicId": "python_hw",
    "category": "SCPI Protocol",
    "question": "What is the SCPI (Standard Commands for Programmable Instruments) protocol used with `pyvisa`?",
    "options": [
      "An ASCII text command language (e.g. `:MEAS:VOLT:DC?`) used to query and configure laboratory electronic test equipment",
      "A binary encryption algorithm",
      "A high-speed DMA bus protocol",
      "A PCB routing format"
    ],
    "correctAnswer": 0,
    "explanation": "Python Hardware Interfacing: SCPI Protocol. Correct answer option 1 accurately reflects engineering standards."
  },
  {
    "id": "pyhw-add-10",
    "topicId": "python_hw",
    "category": "Real-Time & GIL",
    "question": "Why is Python's Global Interpreter Lock (GIL) an important consideration when developing real-time hardware data acquisition scripts?",
    "options": [
      "The GIL prevents multiple native operating system threads from executing Python bytecode simultaneously, meaning high-frequency data polling threads can be delayed by garbage collection or compute-heavy loops",
      "The GIL limits serial baud rates to 9600",
      "The GIL disables USB ports",
      "The GIL forces all numbers to floating point"
    ],
    "correctAnswer": 0,
    "explanation": "Python Hardware Interfacing: Real-Time & GIL. Correct answer option 1 accurately reflects engineering standards."
  },
  {
    "id": "pyhw-add-11",
    "topicId": "python_hw",
    "category": "SPI Interfacing",
    "question": "What is the purpose of the `spidev` library in Python?",
    "options": [
      "Interfaces with the Linux SPI kernel driver (`/dev/spidevX.Y`) to send and receive full-duplex synchronous data packets to SPI peripherals",
      "Monitors optical spider sensors",
      "Decodes video streams",
      "Measures CPU fan RPM"
    ],
    "correctAnswer": 0,
    "explanation": "Python Hardware Interfacing: SPI Interfacing. Correct answer option 1 accurately reflects engineering standards."
  },
  {
    "id": "pyhw-add-12",
    "topicId": "python_hw",
    "category": "Struct Unpacking",
    "question": "In Python, how is a 16-bit big-endian unsigned integer unpacked from a 2-byte binary payload?",
    "options": [
      "`struct.unpack('>H', data)[0]`",
      "`struct.unpack('<H', data)[0]`",
      "`struct.unpack('i', data)[0]`",
      "`data.to_int('big')`"
    ],
    "correctAnswer": 0,
    "explanation": "Python Hardware Interfacing: Struct Unpacking. Correct answer option 1 accurately reflects engineering standards."
  },
  {
    "id": "pyhw-add-13",
    "topicId": "python_hw",
    "category": "FTDI USB Bridges",
    "question": "What does the `pyftdi` library accomplish in hardware engineering?",
    "options": [
      "Provides user-space Python drivers for FTDI FT2232/FT4232 USB-to-UART/FIFO/SPI/I2C/JTAG bridge chips using `libusb` without requiring root kernel drivers",
      "Flushes FTDI flash memory",
      "Programs FPGA fuses",
      "Monitors USB current draw"
    ],
    "correctAnswer": 0,
    "explanation": "Python Hardware Interfacing: FTDI USB Bridges. Correct answer option 1 accurately reflects engineering standards."
  },
  {
    "id": "pyhw-add-14",
    "topicId": "python_hw",
    "category": "CAN Bus",
    "question": "What is the purpose of `can-utils` and the `python-can` library?",
    "options": [
      "Enables sending, receiving, decoding, and logging Controller Area Network (CAN / SocketCAN) bus traffic for automotive and industrial vehicle networks",
      "Controls canned audio files",
      "Compresses network packets",
      "Manages camera sensors"
    ],
    "correctAnswer": 0,
    "explanation": "Python Hardware Interfacing: CAN Bus. Correct answer option 1 accurately reflects engineering standards."
  },
  {
    "id": "pyhw-add-15",
    "topicId": "python_hw",
    "category": "Cocotb Verification",
    "question": "What is the role of `cocotb` (Coroutine-based Co-simulation Testbench) in hardware verification?",
    "options": [
      "Allows writing advanced verification testbenches in Python that drive and sample Verilog/VHDL RTL simulators (Icarus, Verilator, Questa, VCS) via standard VPI/VHPI interfaces",
      "Translates Python into C++",
      "Simulates printed circuit boards in 3D",
      "Compiles microcode for GPUs"
    ],
    "correctAnswer": 0,
    "explanation": "Python Hardware Interfacing: Cocotb Verification. Correct answer option 1 accurately reflects engineering standards."
  },
  {
    "id": "pyhw-add-16",
    "topicId": "python_hw",
    "category": "Data Buffering",
    "question": "In Python hardware interfacing, what does a cyclic buffer implemented via `collections.deque(maxlen=1000)` achieve?",
    "options": [
      "A bounded FIFO queue where newly appended items automatically push out oldest items once capacity is reached, running in $O(1)$ time without memory reallocation",
      "A sorted binary search tree",
      "A persistent disk database",
      "An encrypted storage container"
    ],
    "correctAnswer": 0,
    "explanation": "Python Hardware Interfacing: Data Buffering. Correct answer option 1 accurately reflects engineering standards."
  },
  {
    "id": "pyhw-add-17",
    "topicId": "python_hw",
    "category": "Signal Handlers",
    "question": "What is the function of the Python `signal` module in hardware daemons?",
    "options": [
      "Intercepts operating system termination signals (SIGINT, SIGTERM) to execute graceful hardware shutdown (turning off high-voltage relays, motors, and closing serial ports)",
      "Generates PWM audio signals",
      "Measures RF signal strength",
      "Calculates FFT frequencies"
    ],
    "correctAnswer": 0,
    "explanation": "Python Hardware Interfacing: Signal Handlers. Correct answer option 1 accurately reflects engineering standards."
  },
  {
    "id": "pyhw-add-18",
    "topicId": "python_hw",
    "category": "USB Enumeration",
    "question": "What does the `pylibftdi` or `libusb` library use to identify connected hardware devices?",
    "options": [
      "USB Vendor ID (VID) and Product ID (PID) hex pairs (e.g. `0x0403:0x6001`)",
      "Device IP address",
      "MAC address",
      "Microcontroller clock frequency"
    ],
    "correctAnswer": 0,
    "explanation": "Python Hardware Interfacing: USB Enumeration. Correct answer option 1 accurately reflects engineering standards."
  },
  {
    "id": "pyhw-add-19",
    "topicId": "python_hw",
    "category": "Zero-Copy Buffers",
    "question": "In Python, what is the advantage of using `memoryview` on large sensor byte buffers?",
    "options": [
      "Allows zero-copy slicing and data passing of underlying buffer memory, eliminating expensive memory allocation and data copying during high-throughput streaming",
      "Encrypts memory buffers",
      "Compresses data automatically",
      "Converts bytes to ASCII"
    ],
    "correctAnswer": 0,
    "explanation": "Python Hardware Interfacing: Zero-Copy Buffers. Correct answer option 1 accurately reflects engineering standards."
  },
  {
    "id": "pyhw-add-20",
    "topicId": "python_hw",
    "category": "Serial Buffer Flushing",
    "question": "What is the purpose of `pyserial`'s `ser.reset_input_buffer()`?",
    "options": [
      "Discards all incoming bytes currently waiting in the OS serial receiver buffer, clearing old stale data before initiating a new sensor transaction",
      "Resets the microcontroller hardware pin",
      "Clears the baud rate setting",
      "Closes the serial connection"
    ],
    "correctAnswer": 0,
    "explanation": "Python Hardware Interfacing: Serial Buffer Flushing. Correct answer option 1 accurately reflects engineering standards."
  },
  {
    "id": "pyhw-add-21",
    "topicId": "python_hw",
    "category": "Bit Manipulation",
    "question": "What does the `bitstring` or `bitarray` Python library provide for hardware protocol development?",
    "options": [
      "Allows bit-level slicing, packing, parsing, and inspection of non-byte-aligned binary protocols (like military telemetry or custom radio packets)",
      "Generates random binary bitstreams",
      "Simulates FPGA LUT primitives",
      "Measures bit error rates on fiber"
    ],
    "correctAnswer": 0,
    "explanation": "Python Hardware Interfacing: Bit Manipulation. Correct answer option 1 accurately reflects engineering standards."
  },
  {
    "id": "pyhw-add-22",
    "topicId": "python_hw",
    "category": "Hardware Mocking",
    "question": "In Python test automation, what does a Mock hardware object achieve?",
    "options": [
      "Simulates the software interface of a physical hardware instrument (like a power supply) without requiring the physical device to be connected during CI/CD unit testing",
      "Generates fake serial numbers",
      "Simulates hardware thermal failures",
      "Replaces physical oscilloscopes"
    ],
    "correctAnswer": 0,
    "explanation": "Python Hardware Interfacing: Hardware Mocking. Correct answer option 1 accurately reflects engineering standards."
  },
  {
    "id": "pyhw-add-23",
    "topicId": "python_hw",
    "category": "Non-Blocking I/O",
    "question": "What does `os.O_NONBLOCK` do when opening a serial port or hardware device in Python?",
    "options": [
      "Configures file operations (read/write) to return immediately rather than waiting for data, raising an exception if no data is available",
      "Prevents other processes from opening the file",
      "Enables hardware flow control",
      "Disables operating system caching"
    ],
    "correctAnswer": 0,
    "explanation": "Python Hardware Interfacing: Non-Blocking I/O. Correct answer option 1 accurately reflects engineering standards."
  },
  {
    "id": "pyhw-add-24",
    "topicId": "python_hw",
    "category": "Modbus Protocol",
    "question": "What is the purpose of the `modbus-tk` or `pymodbus` library?",
    "options": [
      "Implements the industrial Modbus RTU (serial RS-485) and Modbus TCP protocols to communicate with industrial PLCs, energy meters, and VFD motor drives",
      "Modulates RF carrier waves",
      "Programs Arduino bootloaders",
      "Controls servo motors"
    ],
    "correctAnswer": 0,
    "explanation": "Python Hardware Interfacing: Modbus Protocol. Correct answer option 1 accurately reflects engineering standards."
  },
  {
    "id": "pyhw-add-25",
    "topicId": "python_hw",
    "category": "High-Precision Timing",
    "question": "Why is `time.perf_counter()` preferred over `time.time()` for profiling hardware latency in Python?",
    "options": [
      "Provides the highest available resolution monotonic clock that is not affected by system clock updates or daylight saving adjustments",
      "Returns real-world UTC time in milliseconds",
      "Syncs with atomic time servers",
      "Measures CPU instruction cycles directly"
    ],
    "correctAnswer": 0,
    "explanation": "Python Hardware Interfacing: High-Precision Timing. Correct answer option 1 accurately reflects engineering standards."
  },
  {
    "id": "pyhw-add-26",
    "topicId": "python_hw",
    "category": "Async Subprocesses",
    "question": "In embedded Linux, what does Python's `asyncio.create_subprocess_exec()` allow?",
    "options": [
      "Asynchronously launches external hardware utility commands (like `flashrom` or `avrdude`) and streams their standard output without blocking the main event loop",
      "Compiles C++ drivers into the kernel",
      "Spawns multi-core threads",
      "Controls GPU shader pipelines"
    ],
    "correctAnswer": 0,
    "explanation": "Python Hardware Interfacing: Async Subprocesses. Correct answer option 1 accurately reflects engineering standards."
  },
  {
    "id": "pyhw-add-27",
    "topicId": "python_hw",
    "category": "CRC Algorithms",
    "question": "What is the function of the `crcmod` Python module?",
    "options": [
      "Generates customized, high-speed C-optimized CRC calculation functions based on arbitrary generator polynomials (e.g. CRC-16-CCITT, CRC-32)",
      "Modulates radio frequencies",
      "Programs microcontroller fuses",
      "Checks disk filesystem health"
    ],
    "correctAnswer": 0,
    "explanation": "Python Hardware Interfacing: CRC Algorithms. Correct answer option 1 accurately reflects engineering standards."
  },
  {
    "id": "pyhw-add-28",
    "topicId": "python_hw",
    "category": "GPIO Frameworks",
    "question": "What does the `gpiozero` Python library provide for Raspberry Pi projects?",
    "options": [
      "A high-level, object-oriented API that simplifies interfacing with components like LEDs, buttons, motor controllers, and distance sensors with built-in queueing and event handling",
      "A zero-latency Linux kernel driver",
      "A firmware compiler for AVR chips",
      "An automated circuit schematic generator"
    ],
    "correctAnswer": 0,
    "explanation": "Python Hardware Interfacing: GPIO Frameworks. Correct answer option 1 accurately reflects engineering standards."
  },
  {
    "id": "pyhw-add-29",
    "topicId": "python_hw",
    "category": "PyVISA Backends",
    "question": "What is the role of `pyvisa-py` in Python test setups?",
    "options": [
      "A pure Python backend implementation for PyVISA that communicates directly with instruments over USB-TMC, TCPIP, and Serial without requiring proprietary vendor VISA runtime binaries (NI-VISA / Keysight VISA)",
      "An emulator for vintage HP calculators",
      "A waveform graphics viewer",
      "A testbench report generator"
    ],
    "correctAnswer": 0,
    "explanation": "Python Hardware Interfacing: PyVISA Backends. Correct answer option 1 accurately reflects engineering standards."
  },
  {
    "id": "pyhw-add-30",
    "topicId": "python_hw",
    "category": "Network Streaming",
    "question": "How are binary sensor payloads sent over WebSocket connections in Python using `websockets`?",
    "options": [
      "Using `await websocket.send(binary_bytes)` where payload is a `bytes` or `bytearray` object, allowing efficient transmission without base64 text encoding overhead",
      "Converting bytes into JSON strings",
      "Encoding bytes into hexadecimal ASCII",
      "Sending bytes through standard HTTP GET"
    ],
    "correctAnswer": 0,
    "explanation": "Python Hardware Interfacing: Network Streaming. Correct answer option 1 accurately reflects engineering standards."
  },
  {
    "id": "rtos-add-01",
    "topicId": "rtos_problems",
    "category": "Context Switching",
    "question": "In a preemptive Real-Time Operating System (RTOS), what determines when a context switch occurs?",
    "options": [
      "When an interrupt or higher-priority task transitions from Blocked to Ready state, or when the current task yields, blocks, or exhausts its time slice",
      "Only when the current task explicitly calls `exit()`",
      "Context switches occur at a fixed 1-minute interval",
      "The user presses a hardware button"
    ],
    "correctAnswer": 0,
    "explanation": "RTOS & Concurrency: Context Switching. Correct answer option 1 accurately reflects real-time operating system design principles."
  },
  {
    "id": "rtos-add-02",
    "topicId": "rtos_problems",
    "category": "Priority Inversion",
    "question": "What is 'Priority Inversion' and how does the Priority Inheritance Protocol resolve it?",
    "options": [
      "A high-priority task is blocked waiting for a shared mutex held by a low-priority task, while medium tasks preempt the low task; Priority Inheritance temporarily elevates the low task's priority to match the high task until it releases the mutex",
      "Low-priority tasks run faster than high-priority tasks",
      "Interrupts are inverted into software tasks",
      "The RTOS inverts task IDs"
    ],
    "correctAnswer": 0,
    "explanation": "RTOS & Concurrency: Priority Inversion. Correct answer option 1 accurately reflects real-time operating system design principles."
  },
  {
    "id": "rtos-add-03",
    "topicId": "rtos_problems",
    "category": "Mutexes vs Semaphores",
    "question": "What is the difference between a `binary semaphore` and a `mutex` in FreeRTOS?",
    "options": [
      "A mutex includes an ownership concept and priority inheritance to prevent priority inversion; a binary semaphore has no ownership and is ideal for task-to-task synchronization or ISR signaling",
      "A binary semaphore can count to 10; a mutex can only count to 1",
      "A mutex cannot be unlocked by any task",
      "Binary semaphores are only allowed in Linux"
    ],
    "correctAnswer": 0,
    "explanation": "RTOS & Concurrency: Mutexes vs Semaphores. Correct answer option 1 accurately reflects real-time operating system design principles."
  },
  {
    "id": "rtos-add-04",
    "topicId": "rtos_problems",
    "category": "ISR Safety Rules",
    "question": "Why must standard RTOS blocking API calls (e.g. `xQueueSend()`) NEVER be invoked from inside an Interrupt Service Routine (ISR)?",
    "options": [
      "ISRs cannot access RAM",
      "ISRs do not have a task control block (TCB) or task stack and cannot be put into a blocked/sleeping state; specialized non-blocking `...FromISR()` variants must be used instead",
      "ISRs run in 16-bit mode",
      "The compiler generates syntax errors"
    ],
    "correctAnswer": 1,
    "explanation": "RTOS & Concurrency: ISR Safety Rules. Correct answer option 2 accurately reflects real-time operating system design principles."
  },
  {
    "id": "rtos-add-05",
    "topicId": "rtos_problems",
    "category": "ISR Context Switch",
    "question": "What does the FreeRTOS macro `portYIELD_FROM_ISR(xHigherPriorityTaskWoken)` accomplish?",
    "options": [
      "Informs the scheduler to immediately execute a context switch upon exiting the ISR if the interrupt action caused a higher-priority task to unblock",
      "Terminates the current ISR",
      "Clears the hardware timer",
      "Reboots the microcontroller core"
    ],
    "correctAnswer": 0,
    "explanation": "RTOS & Concurrency: ISR Context Switch. Correct answer option 1 accurately reflects real-time operating system design principles."
  },
  {
    "id": "rtos-add-06",
    "topicId": "rtos_problems",
    "category": "Heap Allocation",
    "question": "In RTOS memory management, what is the risk of using FreeRTOS Heap 2 or standard C `malloc/free` in safety-critical systems?",
    "options": [
      "Heap fragmentation caused by repeated allocation and deallocation of varying-sized memory blocks can cause allocation failure even when total free RAM is sufficient",
      "Heap memory runs 10x slower than stack memory",
      "Heap allocations disable interrupts permanently",
      "FreeRTOS does not support dynamic allocation"
    ],
    "correctAnswer": 0,
    "explanation": "RTOS & Concurrency: Heap Allocation. Correct answer option 1 accurately reflects real-time operating system design principles."
  },
  {
    "id": "rtos-add-07",
    "topicId": "rtos_problems",
    "category": "Counting Semaphores",
    "question": "What is the functionality of a 'Counting Semaphore' in an RTOS?",
    "options": [
      "Counts the number of clock cycles since boot",
      "Controls access to a pool of multiple identical resources, or tracks events where the count represents the number of pending event occurrences",
      "Counts the total number of running tasks",
      "Monitors stack memory overflow"
    ],
    "correctAnswer": 1,
    "explanation": "RTOS & Concurrency: Counting Semaphores. Correct answer option 2 accurately reflects real-time operating system design principles."
  },
  {
    "id": "rtos-add-08",
    "topicId": "rtos_problems",
    "category": "Idle Task",
    "question": "What is the primary function of the RTOS 'Idle Task'?",
    "options": [
      "Executes low-priority background housekeeping, frees memory of deleted tasks, and places the CPU core into low-power sleep mode (`WFI`) when no application tasks are ready",
      "Compiles firmware updates",
      "Runs periodic file backups",
      "Controls the cooling fan"
    ],
    "correctAnswer": 0,
    "explanation": "RTOS & Concurrency: Idle Task. Correct answer option 1 accurately reflects real-time operating system design principles."
  },
  {
    "id": "rtos-add-09",
    "topicId": "rtos_problems",
    "category": "TCB Data Structure",
    "question": "What does a Task Control Block (TCB) in an RTOS store?",
    "options": [
      "Task state, current stack pointer (SP), base and limit of stack memory, task priority, event wait list pointers, and task name",
      "The entire compiled machine code of the task",
      "The hardware schematic netlist",
      "User login credentials"
    ],
    "correctAnswer": 0,
    "explanation": "RTOS & Concurrency: TCB Data Structure. Correct answer option 1 accurately reflects real-time operating system design principles."
  },
  {
    "id": "rtos-add-10",
    "topicId": "rtos_problems",
    "category": "Scheduling Anomalies",
    "question": "What is 'Task Starvation' in fixed-priority preemptive scheduling?",
    "options": [
      "A low-priority task never receives CPU execution time because higher-priority tasks continuously occupy the processor",
      "A task running out of stack memory",
      "The CPU core shutting down due to low battery",
      "A task waiting on an empty queue"
    ],
    "correctAnswer": 0,
    "explanation": "RTOS & Concurrency: Scheduling Anomalies. Correct answer option 1 accurately reflects real-time operating system design principles."
  },
  {
    "id": "rtos-add-11",
    "topicId": "rtos_problems",
    "category": "Event Groups",
    "question": "What is an 'Event Group' (or Event Flags) in FreeRTOS?",
    "options": [
      "A set of binary bit flags that allows a task to wait for complex logical combinations (AND / OR) of multiple independent events before unblocking",
      "A calendar scheduling tool",
      "A group of user accounts",
      "A hardware interrupt vector table"
    ],
    "correctAnswer": 0,
    "explanation": "RTOS & Concurrency: Event Groups. Correct answer option 1 accurately reflects real-time operating system design principles."
  },
  {
    "id": "rtos-add-12",
    "topicId": "rtos_problems",
    "category": "Real-Time Scheduling",
    "question": "How does 'Rate Monotonic Scheduling' (RMS) assign task priorities in real-time systems?",
    "options": [
      "Tasks with the shortest execution periods (highest execution frequency) are assigned the highest static priorities",
      "Tasks with the largest memory usage receive highest priority",
      "Priorities are assigned randomly",
      "The oldest running task receives highest priority"
    ],
    "correctAnswer": 0,
    "explanation": "RTOS & Concurrency: Real-Time Scheduling. Correct answer option 1 accurately reflects real-time operating system design principles."
  },
  {
    "id": "rtos-add-13",
    "topicId": "rtos_problems",
    "category": "Periodic Timing",
    "question": "What is the purpose of FreeRTOS `vTaskDelayUntil(&xLastWakeTime, xFrequency)`?",
    "options": [
      "Achieves constant, jitter-free periodic task execution by calculating the exact delay needed relative to the previous wake time, preventing cumulative timing drift",
      "Delays execution until an external pin toggles",
      "Pauses the RTOS kernel clock",
      "Delays execution by a random interval"
    ],
    "correctAnswer": 0,
    "explanation": "RTOS & Concurrency: Periodic Timing. Correct answer option 1 accurately reflects real-time operating system design principles."
  },
  {
    "id": "rtos-add-14",
    "topicId": "rtos_problems",
    "category": "Deadlock Hazards",
    "question": "What is a 'Deadlock' condition between two tasks in an RTOS?",
    "options": [
      "Task A holds Mutex 1 and waits for Mutex 2; Task B holds Mutex 2 and waits for Mutex 1; neither task can proceed, permanently freezing both",
      "A task that has completed execution",
      "A CPU that has run out of power",
      "A queue that has reached full capacity"
    ],
    "correctAnswer": 0,
    "explanation": "RTOS & Concurrency: Deadlock Hazards. Correct answer option 1 accurately reflects real-time operating system design principles."
  },
  {
    "id": "rtos-add-15",
    "topicId": "rtos_problems",
    "category": "SysTick Timer",
    "question": "What is the role of the RTOS SysTick timer in ARM Cortex-M?",
    "options": [
      "Generates regular periodic hardware interrupts (typically every 1ms) that increment the RTOS tick count and invoke the scheduler for time-slicing and delay evaluations",
      "Measures UART baud rate",
      "Drives the external real-time clock chip",
      "Monitors battery discharge current"
    ],
    "correctAnswer": 0,
    "explanation": "RTOS & Concurrency: SysTick Timer. Correct answer option 1 accurately reflects real-time operating system design principles."
  },
  {
    "id": "rtos-add-16",
    "topicId": "rtos_problems",
    "category": "Stack Diagnostics",
    "question": "What does FreeRTOS `configCHECK_FOR_STACK_OVERFLOW` enable?",
    "options": [
      "Runtime stack overflow detection hooks that check whether the task stack pointer has breached boundary limits or corrupted known canary watermark patterns",
      "Dynamic stack memory expansion",
      "Automatic garbage collection",
      "Stack memory compression"
    ],
    "correctAnswer": 0,
    "explanation": "RTOS & Concurrency: Stack Diagnostics. Correct answer option 1 accurately reflects real-time operating system design principles."
  },
  {
    "id": "rtos-add-17",
    "topicId": "rtos_problems",
    "category": "Queue Sets",
    "question": "What is the key advantage of FreeRTOS 'Queue Sets'?",
    "options": [
      "Allows a single task to block simultaneously on multiple queues and semaphores, waking up whenever ANY of the member queues receive data",
      "Doubles queue data throughput",
      "Compresses queue payload bytes",
      "Allows queues to cross network boundaries"
    ],
    "correctAnswer": 0,
    "explanation": "RTOS & Concurrency: Queue Sets. Correct answer option 1 accurately reflects real-time operating system design principles."
  },
  {
    "id": "rtos-add-18",
    "topicId": "rtos_problems",
    "category": "Scheduling Paradigms",
    "question": "What is 'Cooperative Scheduling' compared to 'Preemptive Scheduling' in an RTOS?",
    "options": [
      "In cooperative scheduling, a running task retains the CPU until it voluntarily yields (`taskYIELD()`) or blocks; the scheduler never interrupts it mid-execution",
      "Cooperative scheduling assigns priorities dynamically",
      "Preemptive scheduling does not use clock ticks",
      "Cooperative scheduling requires multi-core CPUs"
    ],
    "correctAnswer": 0,
    "explanation": "RTOS & Concurrency: Scheduling Paradigms. Correct answer option 1 accurately reflects real-time operating system design principles."
  },
  {
    "id": "rtos-add-19",
    "topicId": "rtos_problems",
    "category": "Software Timers",
    "question": "What is a 'Software Timer' in FreeRTOS?",
    "options": [
      "A virtual timer managed by the RTOS daemon task that invokes a user callback function after a specified duration without requiring dedicated hardware timer peripherals",
      "A hardware crystal oscillator",
      "A stopwatch app on the screen",
      "An analog RC delay line"
    ],
    "correctAnswer": 0,
    "explanation": "RTOS & Concurrency: Software Timers. Correct answer option 1 accurately reflects real-time operating system design principles."
  },
  {
    "id": "rtos-add-20",
    "topicId": "rtos_problems",
    "category": "Task Notifications",
    "question": "What is 'Task Notification' in modern FreeRTOS and why is it preferred over semaphores?",
    "options": [
      "Each task has built-in notification values that can act as binary/counting semaphores or mailboxes, running up to 45% faster and consuming zero additional RAM overhead compared to standalone IPC objects",
      "Sends SMS text messages to engineers",
      "Logs events to external cloud servers",
      "Displays popups on test monitors"
    ],
    "correctAnswer": 0,
    "explanation": "RTOS & Concurrency: Task Notifications. Correct answer option 1 accurately reflects real-time operating system design principles."
  },
  {
    "id": "rtos-add-21",
    "topicId": "rtos_problems",
    "category": "Task States",
    "question": "What does `vTaskSuspend(NULL)` do to a running task?",
    "options": [
      "Places the calling task into the Suspended state indefinitely until another task explicitly calls `vTaskResume()` on its handle",
      "Deletes the task permanently",
      "Lowers the task priority to zero",
      "Puts the microcontroller into deep sleep"
    ],
    "correctAnswer": 0,
    "explanation": "RTOS & Concurrency: Task States. Correct answer option 1 accurately reflects real-time operating system design principles."
  },
  {
    "id": "rtos-add-22",
    "topicId": "rtos_problems",
    "category": "Dynamic Scheduling",
    "question": "What is the 'Earliest Deadline First' (EDF) dynamic scheduling algorithm?",
    "options": [
      "Assigns highest priority dynamically to the task whose absolute deadline is nearest in time, achieving theoretically optimal 100% CPU utilization on uniprocessors",
      "Executes the task with the shortest deadline first at boot time only",
      "Schedules tasks based on alphabetical order",
      "Terminates tasks that miss deadlines"
    ],
    "correctAnswer": 0,
    "explanation": "RTOS & Concurrency: Dynamic Scheduling. Correct answer option 1 accurately reflects real-time operating system design principles."
  },
  {
    "id": "rtos-add-23",
    "topicId": "rtos_problems",
    "category": "Critical Sections",
    "question": "Why should `taskENTER_CRITICAL()` and `taskEXIT_CRITICAL()` regions be kept extremely brief?",
    "options": [
      "They disable interrupts globally (or up to `configMAX_SYSCALL_INTERRUPT_PRIORITY`), increasing interrupt latency and delaying critical hardware event responses",
      "They consume high battery power",
      "They cause stack overflow errors",
      "They corrupt the program counter register"
    ],
    "correctAnswer": 0,
    "explanation": "RTOS & Concurrency: Critical Sections. Correct answer option 1 accurately reflects real-time operating system design principles."
  },
  {
    "id": "rtos-add-24",
    "topicId": "rtos_problems",
    "category": "Memory Management",
    "question": "What is the difference between FreeRTOS Heap 4 and Heap 5?",
    "options": [
      "Heap 4 manages a single contiguous array in RAM; Heap 5 allows combining multiple non-contiguous memory blocks across different physical RAM banks (e.g. internal SRAM and external PSRAM) into a single unified heap",
      "Heap 4 uses best-fit; Heap 5 uses worst-fit",
      "Heap 5 is only for 64-bit systems",
      "There is no difference"
    ],
    "correctAnswer": 0,
    "explanation": "RTOS & Concurrency: Memory Management. Correct answer option 1 accurately reflects real-time operating system design principles."
  },
  {
    "id": "rtos-add-25",
    "topicId": "rtos_problems",
    "category": "Task Deletion",
    "question": "What is the purpose of the FreeRTOS `vTaskDelete(NULL)` call?",
    "options": [
      "Removes the calling task from the scheduler lists and frees its allocated TCB and stack memory (cleaned up by the Idle task if dynamically allocated)",
      "Restores factory default firmware",
      "Deletes all files from the SD card",
      "Resets the CPU stack pointer"
    ],
    "correctAnswer": 0,
    "explanation": "RTOS & Concurrency: Task Deletion. Correct answer option 1 accurately reflects real-time operating system design principles."
  },
  {
    "id": "rtos-add-26",
    "topicId": "rtos_problems",
    "category": "Low-Power RTOS",
    "question": "What is 'Tickless Idle' mode in modern low-power RTOS implementations?",
    "options": [
      "Stops the periodic SysTick interrupt during prolonged idle periods and programs a low-power timer to wake the core only when the next task is scheduled, maximizing deep-sleep battery life",
      "Runs the RTOS without any clocks",
      "Disables all task scheduling",
      "Accelerates clock frequency by 10x"
    ],
    "correctAnswer": 0,
    "explanation": "RTOS & Concurrency: Low-Power RTOS. Correct answer option 1 accurately reflects real-time operating system design principles."
  },
  {
    "id": "rtos-add-27",
    "topicId": "rtos_problems",
    "category": "Queue Semantics",
    "question": "What does the `xQueueReceive(queue, buffer, xTicksToWait)` call do when the queue is empty?",
    "options": [
      "Blocks the calling task and places it into the Event List until data arrives on the queue or until `xTicksToWait` expires",
      "Returns random noise data immediately",
      "Crashes the operating system",
      "Generates a hardware interrupt"
    ],
    "correctAnswer": 0,
    "explanation": "RTOS & Concurrency: Queue Semantics. Correct answer option 1 accurately reflects real-time operating system design principles."
  },
  {
    "id": "rtos-add-28",
    "topicId": "rtos_problems",
    "category": "Real-Time Metrics",
    "question": "In RTOS systems, what is 'Jitter'?",
    "options": [
      "Unwanted mechanical vibration of the PCB",
      "The statistical variation and deviation in the actual periodic timing interval or response latency between consecutive task executions",
      "Random electrical noise on analog pins",
      "Packet loss over Wi-Fi"
    ],
    "correctAnswer": 1,
    "explanation": "RTOS & Concurrency: Real-Time Metrics. Correct answer option 2 accurately reflects real-time operating system design principles."
  },
  {
    "id": "rtos-add-29",
    "topicId": "rtos_problems",
    "category": "FreeRTOS Config",
    "question": "What does the FreeRTOS macro `INCLUDE_vTaskPrioritySet` control?",
    "options": [
      "Conditionally compiles the code for `vTaskPrioritySet()`, allowing the linker to exclude unused API code and minimize flash memory footprint",
      "Sets the maximum priority of the CPU",
      "Enables priority inheritance on all mutexes",
      "Forces all tasks to run at equal priority"
    ],
    "correctAnswer": 0,
    "explanation": "RTOS & Concurrency: FreeRTOS Config. Correct answer option 1 accurately reflects real-time operating system design principles."
  },
  {
    "id": "rtos-add-30",
    "topicId": "rtos_problems",
    "category": "RTOS Diagnostics",
    "question": "What is the purpose of 'Trace' tools (e.g. Percepio Tracealyzer) in RTOS firmware engineering?",
    "options": [
      "Records and visualizes task switching, ISR executions, mutex contentions, and queue communications on a chronological timeline to diagnose timing bottlenecks and race conditions",
      "Traces PCB copper routing tracks",
      "Debugs optical fibers",
      "Measures battery capacity"
    ],
    "correctAnswer": 0,
    "explanation": "RTOS & Concurrency: RTOS Diagnostics. Correct answer option 1 accurately reflects real-time operating system design principles."
  }
];
