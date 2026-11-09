import { QuizQuestion } from '../quizData';

export const EMBEDDED_MCU_QUESTIONS: QuizQuestion[] = [
  // ==========================================
  // EMBEDDED C (20 QUESTIONS)
  // ==========================================
  {
    id: 'embc-q1',
    topicId: 'embedded_c',
    category: 'Keywords',
    question: 'Why must hardware memory-mapped I/O registers and ISR-shared variables be declared with the volatile keyword in C?',
    options: [
      'To prevent the compiler optimizer from caching the register in CPU registers or removing repeated read/write access.',
      'To allocate the variable in high-speed cache memory.',
      'To encrypt the variable value.',
      'To make the variable read-only.'
    ],
    correctAnswer: 0,
    explanation: 'The volatile qualifier informs the C compiler that the variable value can change asynchronously outside program control (e.g., hardware peripheral or ISR), forcing a fresh memory read/write on every access.'
  },
  {
    id: 'embc-q2',
    topicId: 'embedded_c',
    category: 'Bit Manipulation',
    question: 'What is the standard C bitwise operation to atomically set Bit 4 of peripheral register PORTB without altering other bits?',
    options: ['PORTB |= (1 << 4);', 'PORTB &= ~(1 << 4);', 'PORTB ^= (1 << 4);', 'PORTB = (1 << 4);'],
    correctAnswer: 0,
    explanation: 'PORTB |= (1 << 4) performs a bitwise OR with bitmask 0x10, setting Bit 4 to 1 while leaving all other bits unchanged.'
  },
  {
    id: 'embc-q3',
    topicId: 'embedded_c',
    category: 'Bit Manipulation',
    question: 'How do you clear Bit 3 of register DDRB in Embedded C?',
    options: ['DDRB &= ~(1 << 3);', 'DDRB |= (1 << 3);', 'DDRB ^= (1 << 3);', 'DDRB = ~0x08;'],
    correctAnswer: 0,
    explanation: 'DDRB &= ~(1 << 3) performs bitwise AND with the inverted bitmask, clearing bit 3 to 0 and preserving all other bits.'
  },
  {
    id: 'embc-q4',
    topicId: 'embedded_c',
    category: 'Interrupts',
    question: 'Which of the following is considered a severe anti-pattern inside an Interrupt Service Routine (ISR)?',
    options: [
      'Calling blocking delays (e.g. delay_ms, sleep) or unbounded memory allocation (malloc).',
      'Setting a volatile flag variable.',
      'Reading a hardware status register.',
      'Clearing peripheral interrupt flag bits.'
    ],
    correctAnswer: 0,
    explanation: 'ISRs must execute as quickly as possible. Blocking delays, heavy computations, or dynamic allocations cause ISR starvation and system deadlocks.'
  },
  {
    id: 'embc-q5',
    topicId: 'embedded_c',
    category: 'Pointers',
    question: 'What is the difference between "const int * ptr" and "int * const ptr" in C?',
    options: [
      '"const int * ptr" is a pointer to constant data (data is immutable); "int * const ptr" is a constant pointer (the pointer address cannot be changed).',
      '"const int * ptr" cannot be modified; "int * const ptr" can only point to NULL.',
      'Both declarations are identical in ISO C99.',
      '"int * const ptr" stores data in Flash ROM; "const int * ptr" stores in RAM.'
    ],
    correctAnswer: 0,
    explanation: 'Reading right-to-left: "const int * ptr" means ptr points to an integer that is constant. "int * const ptr" means ptr is a constant pointer to a mutable integer.'
  },
  {
    id: 'embc-q6',
    topicId: 'embedded_c',
    category: 'Memory Alignment',
    question: 'Why do embedded compilers insert padding bytes into C structs, and how can padding be eliminated for network protocol packets?',
    options: [
      'CPUs access memory faster when 32-bit words are aligned on 4-byte boundaries; use "__attribute__((packed))" or "#pragma pack(1)" to eliminate padding.',
      'Padding is used to encrypt struct members; use "static" to disable it.',
      'Padding prevents buffer overflows; it cannot be disabled in C.',
      'Padding occurs only when floating-point numbers are used.'
    ],
    correctAnswer: 0,
    explanation: 'Natural alignment prevents unaligned memory faults and maximizes bus efficiency on 32-bit architectures. For binary serialization over SPI/UART or network packets, GCC\'s __attribute__((packed)) disables padding.'
  },
  {
    id: 'embc-q7',
    topicId: 'embedded_c',
    category: 'Memory-Mapped I/O',
    question: 'What is the standard C idiom to access a 32-bit hardware control register at physical address 0x40004000?',
    options: [
      '#define UART_CR (*((volatile uint32_t *)0x40004000))',
      '#define UART_CR (volatile uint32_t)0x40004000',
      '#define UART_CR (&((uint32_t *)0x40004000))',
      'uint32_t UART_CR = 0x40004000;'
    ],
    correctAnswer: 0,
    explanation: 'Casting the numerical address to a volatile pointer "(volatile uint32_t *)0x40004000" and dereferencing it with "*" allows direct reading and writing to the hardware memory-mapped register.'
  },
  {
    id: 'embc-q8',
    topicId: 'embedded_c',
    category: 'Storage Classes',
    question: 'What is the effect of declaring a global variable or function with the "static" keyword in C?',
    options: [
      'Restricts its scope/visibility strictly to the translation unit (.c file) in which it is defined, preventing naming collisions during linking.',
      'Makes the variable value permanent and read-only.',
      'Allocates the variable in CPU register cache.',
      'Enables atomic access across multiple threads.'
    ],
    correctAnswer: 0,
    explanation: 'At file scope, static enforces internal linkage: the variable or function is private to that C source file and cannot be referenced or collided with by other translation units.'
  },
  {
    id: 'embc-q9',
    topicId: 'embedded_c',
    category: 'Bit Manipulation',
    question: 'How do you check if the 7th bit (0-indexed) of an 8-bit status register STATUS is set in C?',
    options: [
      'if (STATUS & (1 << 7))',
      'if (STATUS | (1 << 7))',
      'if (STATUS ^ 7)',
      'if (STATUS >> 8)'
    ],
    correctAnswer: 0,
    explanation: 'Performing a bitwise AND with bitmask (1 << 7, which is 0x80) evaluates to non-zero (true) if and only if bit 7 is high.'
  },
  {
    id: 'embc-q10',
    topicId: 'embedded_c',
    category: 'Data Structures',
    question: 'Why is a power-of-two buffer size advantageous when implementing a circular FIFO ring buffer in embedded firmware?',
    options: [
      'Index wrapping can be calculated using fast bitwise AND (head = (head + 1) & (SIZE - 1)) instead of slow hardware division/modulo (%).',
      'Eliminates the need for pointers in C.',
      'Prevents RAM leakage during resets.',
      'Automatically synchronizes with the system clock.'
    ],
    correctAnswer: 0,
    explanation: 'When SIZE is a power of two (e.g. 256), "(head + 1) & (SIZE - 1)" wraps the index around in a single single-cycle assembly bitwise AND instruction, whereas modulo "%" requires expensive multi-cycle integer division.'
  },
  {
    id: 'embc-q11',
    topicId: 'embedded_c',
    category: 'Endianness',
    question: 'How can you determine at runtime whether an embedded target processor is Little-Endian or Big-Endian in C?',
    options: [
      'uint16_t x = 0x0001; if (*((uint8_t *)&x) == 0x01) // Little-Endian else // Big-Endian',
      'if (sizeof(int) == 4) // Little-Endian else // Big-Endian',
      'if (volatile int == 1) // Big-Endian',
      'By checking the compiler version string.'
    ],
    correctAnswer: 0,
    explanation: 'In Little-Endian systems, the least significant byte (0x01) is stored at the lowest memory address. Casting the address of uint16_t 0x0001 to uint8_t* inspects the first byte in memory.'
  },
  {
    id: 'embc-q12',
    topicId: 'embedded_c',
    category: 'DMA & Caching',
    question: 'Why must DMA transmit/receive buffers be flushed or invalidated from Data Cache (D-Cache) on ARM Cortex-M7 processors?',
    options: [
      'DMA hardware transfers bypass CPU cache directly to SRAM; cache coherency maintenance ensures the CPU sees fresh data received by DMA and DMA reads recent data written by CPU.',
      'D-Cache corruption destroys the Flash bootloader.',
      'DMA cannot transfer data larger than 64 bytes without cache flushing.',
      'Flushing the cache powers down unused RAM banks.'
    ],
    correctAnswer: 0,
    explanation: 'Because DMA transfers data directly between SRAM and peripherals, the CPU\'s L1 D-Cache might hold stale or unwritten modified data. SCB_CleanDCache() and SCB_InvalidateDCache() maintain memory coherency.'
  },
  {
    id: 'embc-q13',
    topicId: 'embedded_c',
    category: 'Watchdog Timers',
    question: 'Why is it a dangerous design flaw to refresh (pet) the hardware Watchdog Timer inside a periodic timer Interrupt Service Routine (ISR)?',
    options: [
      'If the main firmware execution loop hangs, deadlocks, or crashes, the hardware timer ISR may keep running and petting the watchdog, preventing system recovery.',
      'Petting the watchdog in an ISR consumes too much power.',
      'Hardware watchdogs cannot be cleared by interrupts.',
      'It causes clock frequency jitter.'
    ],
    correctAnswer: 0,
    explanation: 'Timer interrupts continue firing even if the main thread or RTOS tasks are completely deadlocked or spinning in an infinite loop. The watchdog must be refreshed only after verifying that all critical software tasks are alive.'
  },
  {
    id: 'embc-q14',
    topicId: 'embedded_c',
    category: 'Memory Architecture',
    question: 'What is the purpose of the Stack Canary (Watermark) in embedded safety-critical firmware?',
    options: [
      'Detects runtime Stack Overflow by writing a known magic byte pattern at the stack boundary and checking if it gets corrupted.',
      'Accelerates mathematical division in the ALU.',
      'Stores encrypted firmware cryptographic keys.',
      'Calibrates the crystal oscillator.'
    ],
    correctAnswer: 0,
    explanation: 'A stack canary writes fixed values (e.g. 0xDEADBEEF) at the end of the allocated task stack. If the stack grows too deep and overwrites the canary, the system triggers a fault handler before memory corruption causes a crash.'
  },
  {
    id: 'embc-q15',
    topicId: 'embedded_c',
    category: 'Startup Sequence',
    question: 'In the bare-metal C startup sequence (Reset_Handler), what operations occur BEFORE main() is invoked?',
    options: [
      'Copy initialized global variables (.data) from Flash to SRAM, zero-initialize uninitialized globals (.bss), configure system clock, and set up the vector table.',
      'Format the file system and mount the SD card.',
      'Execute all interrupt handlers in sequence.',
      'Initialize dynamic memory malloc heap.'
    ],
    correctAnswer: 0,
    explanation: 'The C runtime startup code (crt0 / Reset_Handler) copies initial values of .data from Flash ROM to SRAM, clears the .bss section in SRAM to zero, initializes the stack pointer, and calls SystemInit() before entering main().'
  },
  {
    id: 'embc-q16',
    topicId: 'embedded_c',
    category: 'Linker Scripts',
    question: 'In a GCC Linker Script (.ld), what does the ".bss" section represent?',
    options: [
      'Uninitialized global and static variables that are zero-initialized at startup and reside in RAM without consuming Flash storage for initial values.',
      'Constant read-only string literals stored in Flash.',
      'Executable machine code instructions.',
      'The interrupt vector table only.'
    ],
    correctAnswer: 0,
    explanation: '.bss (Block Started by Symbol) allocates RAM for zero-initialized global/static variables. It only records section size in the ELF binary rather than storing thousands of zero bytes in Flash.'
  },
  {
    id: 'embc-q17',
    topicId: 'embedded_c',
    category: 'Concurrency',
    question: 'How is a simple Critical Section entered and exited in bare-metal ARM Cortex-M firmware?',
    options: [
      'uint32_t primask = __get_PRIMASK(); __disable_irq(); /* critical code */ __set_PRIMASK(primask);',
      '__enable_irq(); /* critical code */ __disable_irq();',
      'while(1); /* critical code */ break;',
      'NVIC_SystemReset();'
    ],
    correctAnswer: 0,
    explanation: 'Disabling global interrupts with __disable_irq() prevents ISR preemption. Storing and restoring PRIMASK ensures nested critical sections do not accidentally re-enable interrupts prematurely.'
  },
  {
    id: 'embc-q18',
    topicId: 'embedded_c',
    category: 'Fixed-Point Arithmetic',
    question: 'In Q15 fixed-point arithmetic on microcontrollers without a hardware FPU, how is the product of two Q15 numbers calculated?',
    options: [
      'int32_t prod = ((int32_t)a * b) >> 15;',
      'int16_t prod = a * b;',
      'int32_t prod = (a * b) << 15;',
      'int16_t prod = (a + b) / 15;'
    ],
    correctAnswer: 0,
    explanation: 'Multiplying two Q15 numbers (1 sign bit, 15 fractional bits) produces a Q30 result in a 32-bit accumulator. Shifting right by 15 bits scales the result back into standard Q15 format.'
  },
  {
    id: 'embc-q19',
    topicId: 'embedded_c',
    category: 'Assembly Inlining',
    question: 'What does "__asm volatile(\"\" ::: \"memory\");" do in GCC C code?',
    options: [
      'Acts as a Compiler Memory Barrier, preventing the compiler from reordering memory reads/writes across the instruction boundary.',
      'Clears all CPU registers to zero.',
      'Flushes the hardware cache controller.',
      'Triggers a software interrupt vector.'
    ],
    correctAnswer: 0,
    explanation: 'A compiler memory barrier ("memory" clobber) prevents GCC from reordering memory accesses across the barrier during aggressive compiler optimization, crucial in lock-free concurrency and hardware drivers.'
  },
  {
    id: 'embc-q20',
    topicId: 'embedded_c',
    category: 'Bit Manipulation',
    question: 'What does the C expression "x & (x - 1)" compute when applied to an unsigned integer x?',
    options: [
      'Clears the lowest set bit (rightmost 1) of x; returns 0 if x is a power of 2 (or 0).',
      'Multiplies x by 2.',
      'Calculates the square root of x.',
      'Inverts all odd bits of x.'
    ],
    correctAnswer: 0,
    explanation: 'Brian Kernighan\'s algorithm: subtracting 1 from x flips the lowest set bit and all subsequent trailing zeros. Bitwise ANDing with x clears that lowest bit, widely used to count set bits or verify power-of-2.'
  },

  // ==========================================
  // MICROCONTROLLER ASSEMBLY (20 QUESTIONS)
  // ==========================================
  {
    id: 'asm-q1',
    topicId: 'mnemonics',
    category: '8051 Architecture',
    question: 'In 8051 Microcontroller assembly, which instruction decrements a register and jumps if the result is not zero?',
    options: ['DJNZ Rn, rel_addr', 'CJNE A, direct, rel_addr', 'JNZ rel_addr', 'JZ rel_addr'],
    correctAnswer: 0,
    explanation: 'DJNZ (Decrement and Jump if Not Zero) decrements the specified register and branches if the value != 0, making it standard for software delay loops.'
  },
  {
    id: 'asm-q2',
    topicId: 'mnemonics',
    category: 'Addressing Modes',
    question: 'In the 8051 instruction "MOV A, @R0", which addressing mode is utilized?',
    options: ['Register Indirect Addressing', 'Direct Addressing', 'Immediate Addressing', 'Register Addressing'],
    correctAnswer: 0,
    explanation: 'The @ prefix indicates indirect addressing: R0 contains the internal RAM memory address from which data is loaded into the Accumulator.'
  },
  {
    id: 'asm-q3',
    topicId: 'mnemonics',
    category: 'Bit Operations',
    question: 'Which 8051 instruction sets a single bit in bit-addressable RAM or SFRs?',
    options: ['SETB bit_addr', 'CLR bit_addr', 'CPL bit_addr', 'MOV bit_addr, #1'],
    correctAnswer: 0,
    explanation: 'SETB sets the targeted bit to 1 (e.g. SETB P1.0 turns ON pin P1.0).'
  },
  {
    id: 'asm-q4',
    topicId: 'mnemonics',
    category: '8051 Data Pointer',
    question: 'Which 8051 16-bit register is used as a base pointer to access external RAM (MOVX) and external program ROM (MOVC)?',
    options: ['DPTR (Data Pointer, DPH:DPL)', 'PC (Program Counter)', 'SP (Stack Pointer)', 'PSW (Program Status Word)'],
    correctAnswer: 0,
    explanation: 'DPTR is a 16-bit register composed of high byte DPH and low byte DPL, used with instructions like MOVX A, @DPTR and MOVC A, @A+DPTR to access up to 64KB of external memory.'
  },
  {
    id: 'asm-q5',
    topicId: 'mnemonics',
    category: '8051 Timers',
    question: 'In the 8051 TMOD register, which operating mode configures Timer 0 as an 8-bit Auto-Reload timer?',
    options: ['Mode 2', 'Mode 0 (13-bit)', 'Mode 1 (16-bit)', 'Mode 3 (Split timer)'],
    correctAnswer: 0,
    explanation: 'Mode 2 configures an 8-bit counter in TL0 that automatically reloads its initial preset value from TH0 upon overflow, ideal for generating stable UART baud rates.'
  },
  {
    id: 'asm-q6',
    topicId: 'mnemonics',
    category: '8051 Interrupt Vectors',
    question: 'What is the physical ROM address of the External Interrupt 0 (INT0) ISR vector in the 8051 architecture?',
    options: ['0003H', '000BH', '0013H', '0023H'],
    correctAnswer: 0,
    explanation: 'The 8051 interrupt vector table maps: Reset = 0000H, INT0 = 0003H, Timer 0 = 000BH, INT1 = 0013H, Timer 1 = 001BH, Serial Port = 0023H.'
  },
  {
    id: 'asm-q7',
    topicId: 'mnemonics',
    category: '8051 Subroutines',
    question: 'What is the operational difference between LCALL and ACALL in 8051 assembly?',
    options: [
      'LCALL is a 3-byte instruction that can call any address in full 64KB ROM; ACALL is a 2-byte instruction restricted to the current 2KB memory page.',
      'LCALL is for interrupts; ACALL is for math functions.',
      'ACALL preserves the accumulator; LCALL clears it.',
      'LCALL executes in 1 clock cycle; ACALL takes 10 cycles.'
    ],
    correctAnswer: 0,
    explanation: 'LCALL (Long Call) specifies an absolute 16-bit destination anywhere in 64KB memory. ACALL (Absolute Call) encodes an 11-bit address within the same 2KB block to save 1 byte of program ROM.'
  },
  {
    id: 'asm-q8',
    topicId: 'mnemonics',
    category: '8051 Nibble Swap',
    question: 'Which single 8051 instruction swaps the lower 4 bits (nibble) of the Accumulator with its upper 4 bits?',
    options: ['SWAP A', 'XCH A', 'RR A', 'CPL A'],
    correctAnswer: 0,
    explanation: 'SWAP A exchanges bits D0-D3 with D4-D7 of the Accumulator without affecting any status flags.'
  },
  {
    id: 'asm-q9',
    topicId: 'mnemonics',
    category: 'ARM Thumb-2',
    question: 'What is the primary advantage of the ARM Thumb-2 instruction set architecture used in Cortex-M microcontrollers?',
    options: [
      'Blends 16-bit and 32-bit instructions seamlessly to achieve high code density while delivering full 32-bit ARM performance.',
      'Executes all instructions in analog voltage mode.',
      'Removes the need for branch instructions.',
      'Runs only on 8-bit data registers.'
    ],
    correctAnswer: 0,
    explanation: 'Thumb-2 technology provides a variable-length instruction set that achieves 26% better code density than pure ARM 32-bit code while retaining 98% of ARM 32-bit execution throughput.'
  },
  {
    id: 'asm-q10',
    topicId: 'mnemonics',
    category: 'ARM Stack Model',
    question: 'What stack memory model is implemented by default by the ARM Cortex-M architecture with PUSH and POP instructions?',
    options: [
      'Full Descending (FD) stack: Stack Pointer (SP) points to the last occupied byte and decrements before storing new data.',
      'Empty Ascending (EA) stack: SP increments after writing.',
      'FIFO ring buffer.',
      'Static heap array.'
    ],
    correctAnswer: 0,
    explanation: 'ARM processors use a Full Descending stack: SP points to the most recently pushed item. When pushing (PUSH {R0}), SP is decremented by 4 bytes first, and the data is stored at the new SP address.'
  },
  {
    id: 'asm-q11',
    topicId: 'mnemonics',
    category: 'ARM Assembly',
    question: 'In ARM assembly, what does the "S" suffix on an instruction (e.g. ADDS R0, R1, R2 vs ADD R0, R1, R2) denote?',
    options: [
      'Updates the APSR ALU condition status flags (N, Z, C, V) based on the operation result.',
      'Executes the instruction in Supervisor Privileged mode.',
      'Performs saturated arithmetic.',
      'Forces single-cycle execution.'
    ],
    correctAnswer: 0,
    explanation: 'In ARM, data processing instructions do not update condition flags by default unless the \'S\' suffix is appended (e.g. ADDS, SUBS, MOVS), updating Negative (N), Zero (Z), Carry (C), and Overflow (V) flags.'
  },
  {
    id: 'asm-q12',
    topicId: 'mnemonics',
    category: 'ARM Memory Instructions',
    question: 'Which ARM instruction loads a zero-extended 8-bit byte from memory address [R1] into 32-bit register R0?',
    options: ['LDRB R0, [R1]', 'LDR R0, [R1]', 'LDRH R0, [R1]', 'LDRSB R0, [R1]'],
    correctAnswer: 0,
    explanation: 'LDRB (Load Register Byte) reads an 8-bit value from memory into the lowest byte of the destination register and zero-extends the remaining 24 upper bits.'
  },
  {
    id: 'asm-q13',
    topicId: 'mnemonics',
    category: 'ARM Barrel Shifter',
    question: 'What does the ARM instruction "ADD R0, R1, R2, LSL #2" perform in a single clock cycle?',
    options: [
      'Multiplies R2 by 4 (shift left by 2) and adds the result to R1, storing the sum in R0.',
      'Adds R1 and R2, then shifts R0 left by 2.',
      'Shifts R0 left by 2 and adds R1 to R2.',
      'Adds 2 to R0, R1, and R2.'
    ],
    correctAnswer: 0,
    explanation: 'ARM includes a hardware barrel shifter on the second operand path, allowing shift operations (LSL, LSR, ASR, ROR) to be executed inline with arithmetic and logical operations in a single cycle.'
  },
  {
    id: 'asm-q14',
    topicId: 'mnemonics',
    category: 'ARM Subroutine Calls',
    question: 'Which register automatically receives the subroutine return address when the ARM "BL" (Branch with Link) instruction is executed?',
    options: ['Link Register (LR / R14)', 'Program Counter (PC / R15)', 'Stack Pointer (SP / R13)', 'Frame Pointer (R11)'],
    correctAnswer: 0,
    explanation: 'BL branches to the target address and copies the address of the next instruction into R14 (Link Register, LR). The subroutine returns by executing "BX LR" or "POP {PC}".'
  },
  {
    id: 'asm-q15',
    topicId: 'mnemonics',
    category: 'ARM Power Management',
    question: 'What is the purpose of the ARM "WFI" (Wait For Interrupt) assembly instruction?',
    options: [
      'Puts the processor core into a low-power standby sleep state until an interrupt or exception is triggered.',
      'Resets the MCU power supply.',
      'Loops infinitely until a hardware timer overflows.',
      'Disables all peripheral clocks permanently.'
    ],
    correctAnswer: 0,
    explanation: 'WFI suspends CPU instruction execution and disables the processor clock tree, conserving power until an enabled interrupt wakes the processor to handle the event.'
  },
  {
    id: 'asm-q16',
    topicId: 'mnemonics',
    category: '8051 Branching',
    question: 'In the 8051 instruction "CJNE A, #50H, target_label", what happens if Accumulator A contains 30H?',
    options: [
      'Jumps to target_label and sets the Carry Flag (CY = 1) because 30H < 50H.',
      'Jumps to target_label and clears the Carry Flag (CY = 0).',
      'Does not jump and continues to the next line.',
      'Causes an illegal instruction trap.'
    ],
    correctAnswer: 0,
    explanation: 'CJNE (Compare and Jump if Not Equal) compares operand 1 with operand 2. Since 30H != 50H, it branches to the target. Furthermore, because operand 1 < operand 2, the Carry flag is set (CY=1).'
  },
  {
    id: 'asm-q17',
    topicId: 'mnemonics',
    category: 'ARM Bit-Banding',
    question: 'What is the primary benefit of the Bit-Banding feature in ARM Cortex-M3/M4 microcontrollers?',
    options: [
      'Allows atomic single-cycle read and write operations on individual SRAM and peripheral register bits via alias memory addresses without requiring read-modify-write sequences.',
      'Compresses 32-bit instructions into 8-bit packets.',
      'Implements hardware encryption.',
      'Triples the clock speed of GPIO pins.'
    ],
    correctAnswer: 0,
    explanation: 'Bit-banding maps each individual bit in a 1MB memory region to a dedicated 32-bit word in a 32MB alias region. Writing to the alias word atomically modifies the target bit, preventing race conditions without disabling interrupts.'
  },
  {
    id: 'asm-q18',
    topicId: 'mnemonics',
    category: '8051 BCD Arithmetic',
    question: 'Why is the "DA A" (Decimal Adjust Accumulator) instruction executed immediately following an ADD or ADDC operation in 8051 BCD math?',
    options: [
      'Adjusts the 8-bit binary addition result into two valid 4-bit Binary Coded Decimal (BCD) digits by adding 6 to nibbles greater than 9 or where auxiliary carry (AC) occurred.',
      'Divides the result by 10.',
      'Converts decimal to floating-point numbers.',
      'Rounds the number to the nearest hundred.'
    ],
    correctAnswer: 0,
    explanation: 'DA A inspects the lower and upper nibbles of the Accumulator along with AC and CY flags, adding 06H, 60H, or 66H to correct binary addition into legitimate Packed BCD format.'
  },
  {
    id: 'asm-q19',
    topicId: 'mnemonics',
    category: 'ARM Vector Relocation',
    question: 'Which register in ARM Cortex-M processors is used to relocate the Interrupt Vector Table from Flash ROM to SRAM for dynamic bootloading?',
    options: ['VTOR (Vector Table Offset Register in SCB)', 'PRIMASK', 'CONTROL', 'SYSTICK_CSR'],
    correctAnswer: 0,
    explanation: 'The Vector Table Offset Register (VTOR at address 0xE000ED08) holds the base address of the exception vector table, allowing bootloaders to switch vector tables from Flash to SRAM or application partitions.'
  },
  {
    id: 'asm-q20',
    topicId: 'mnemonics',
    category: '8051 Register Banks',
    question: 'How are the four general-purpose register banks (Bank 0 - Bank 3, addresses 00H-1FH) selected in the 8051 microcontroller?',
    options: [
      'By configuring bits RS1 and RS0 (bits 4 and 3) in the Program Status Word (PSW) register.',
      'By changing the Stack Pointer (SP) value.',
      'Using the DPTR register.',
      'Through external hardware jumper pins.'
    ],
    correctAnswer: 0,
    explanation: 'The PSW register contains bit 3 (RS0) and bit 4 (RS1). Writing 00 selects Bank 0 (00H-07H), 01 selects Bank 1 (08H-0FH), 10 selects Bank 2 (10H-17H), and 11 selects Bank 3 (18H-1FH).'
  },

  // ==========================================
  // ARDUINO C/C++ (20 QUESTIONS)
  // ==========================================
  {
    id: 'ard-q1',
    topicId: 'arduino',
    category: 'GPIO',
    question: 'What Arduino core function configures an ATmega328P digital pin with an internal 20k pull-up resistor?',
    options: ['pinMode(pin, INPUT_PULLUP);', 'pinMode(pin, INPUT);', 'pinMode(pin, PULLUP);', 'digitalWrite(pin, HIGH);'],
    correctAnswer: 0,
    explanation: 'INPUT_PULLUP enables the internal pull-up resistor, keeping the input pin at HIGH state until pulled to ground by a switch/button.'
  },
  {
    id: 'ard-q2',
    topicId: 'arduino',
    category: 'PWM',
    question: 'What is the resolution and voltage range of the analogWrite(pin, val) function on an Arduino Uno (5V system)?',
    options: [
      '8-bit resolution (0 to 255), generating a PWM duty cycle from 0% to 100% (0V to 5V average).',
      '10-bit resolution (0 to 1023), outputting true DC voltage.',
      '12-bit resolution (0 to 4095).',
      '16-bit analog audio output.'
    ],
    correctAnswer: 0,
    explanation: 'analogWrite outputs an 8-bit hardware PWM signal (0-255) modulated by timer counter compare registers.'
  },
  {
    id: 'ard-q3',
    topicId: 'arduino',
    category: 'Timing',
    question: 'Why is millis() preferred over delay() in real-time embedded firmware?',
    options: [
      'millis() is non-blocking, enabling multitasking and concurrent sensor reading while timing intervals.',
      'millis() consumes zero battery power.',
      'millis() is accurate to nanoseconds.',
      'delay() corrupts serial communication.'
    ],
    correctAnswer: 0,
    explanation: 'millis() returns elapsed milliseconds without blocking the CPU, allowing non-blocking state machines and concurrent tasks.'
  },
  {
    id: 'ard-q4',
    topicId: 'arduino',
    category: 'External Interrupts',
    question: 'Which digital pins on an Arduino Uno (ATmega328P) support external hardware interrupts via attachInterrupt()?',
    options: ['Digital Pin 2 (INT0) and Digital Pin 3 (INT1)', 'Digital Pins 0 and 1', 'All analog pins A0-A5', 'Digital Pins 9, 10, and 11'],
    correctAnswer: 0,
    explanation: 'On the ATmega328P Arduino Uno, dedicated external hardware interrupts INT0 and INT1 are physically mapped to digital pins 2 and 3 respectively.'
  },
  {
    id: 'ard-q5',
    topicId: 'arduino',
    category: 'Non-Volatile Memory',
    question: 'Why should EEPROM.update(address, val) or EEPROM.put() be preferred over EEPROM.write() in Arduino code?',
    options: [
      'update() checks if the data byte has changed before writing, preserving the limited 100,000-cycle EEPROM write endurance.',
      'update() writes 100x faster than write().',
      'write() deletes the bootloader.',
      'update() encrypts the stored data.'
    ],
    correctAnswer: 0,
    explanation: 'EEPROM memory cells degrade after ~100,000 write cycles. EEPROM.update() only writes to the cell if the new value differs from the existing value, preventing premature silicon wear.'
  },
  {
    id: 'ard-q6',
    topicId: 'arduino',
    category: 'I2C Bus Protocol',
    question: 'Which Arduino library and pins are used for I2C (Two-Wire Interface) communication on an Arduino Uno?',
    options: [
      'Wire.h library using pins A4 (SDA) and A5 (SCL)',
      'SPI.h library using pins 11 (MOSI) and 12 (MISO)',
      'SoftwareSerial.h using pins 0 and 1',
      'Servo.h using pin 9'
    ],
    correctAnswer: 0,
    explanation: 'The standard Wire.h library controls the hardware TWI/I2C peripheral, which is routed to analog pins A4 (Data / SDA) and A5 (Clock / SCL) on the Uno.'
  },
  {
    id: 'ard-q7',
    topicId: 'arduino',
    category: 'Memory Optimization',
    question: 'What is the purpose of the F() macro when printing constant string literals (e.g. Serial.println(F("Initializing..."));)?',
    options: [
      'Stores the string literal in Flash Program Memory (PROGMEM) instead of copying it into scarce 2KB dynamic SRAM at startup.',
      'Increases serial baud rate to 1 Mbps.',
      'Formats the text with bold styling.',
      'Flushes the serial transmit FIFO buffer.'
    ],
    correctAnswer: 0,
    explanation: 'Without the F() macro, constant strings in C++ are copied from Flash into SRAM during boot. Using F() forces the string to remain in Flash ROM, saving critical SRAM on memory-constrained AVR chips.'
  },
  {
    id: 'ard-q8',
    topicId: 'arduino',
    category: 'Direct Port Manipulation',
    question: 'What is the execution time benefit of direct port manipulation (e.g. PORTB |= 0x20;) compared to digitalWrite(13, HIGH) on ATmega328P?',
    options: [
      'Direct port manipulation executes in 1 clock cycle (~62.5 ns at 16MHz) compared to ~50-60 cycles (~3.5-4 µs) for digitalWrite().',
      'Direct port manipulation saves 50% battery current.',
      'digitalWrite() is faster than direct port manipulation.',
      'Direct port manipulation produces true analog sine waves.'
    ],
    correctAnswer: 0,
    explanation: 'digitalWrite() incurs heavy overhead due to pin-to-timer lookups, bitmask calculations, and disabling PWM timers. Direct port manipulation (sbi/cbi instructions) executes in a single 62.5ns machine cycle.'
  },
  {
    id: 'ard-q9',
    topicId: 'arduino',
    category: 'Analog Input',
    question: 'What is the ADC resolution and maximum sampling rate of the analogRead() function on an Arduino Uno?',
    options: [
      '10-bit resolution (0 to 1023), taking approximately 100 microseconds per conversion (~10,000 samples/sec).',
      '8-bit resolution (0 to 255), 1 microsecond per conversion.',
      '16-bit resolution (0 to 65535), 1 millisecond per conversion.',
      '24-bit resolution (audio grade).'
    ],
    correctAnswer: 0,
    explanation: 'The ATmega328P ADC has a 10-bit successive approximation converter clocked via a prescaler of 128 (125 kHz ADC clock), requiring 13 ADC clock cycles (~104 µs) per analogRead().'
  },
  {
    id: 'ard-q10',
    topicId: 'arduino',
    category: 'Serial Communication',
    question: 'Why should SoftwareSerial be avoided at baud rates above 57600 on 16MHz AVR microcontrollers?',
    options: [
      'SoftwareSerial bit-bangs UART using heavy pin-change interrupts, leading to timing jitter, dropped bytes, and CPU starvation at high baud rates.',
      'SoftwareSerial burns out the digital I/O pins.',
      'The AVR hardware UART disables SoftwareSerial.',
      'SoftwareSerial only works with 3.3V logic levels.'
    ],
    correctAnswer: 0,
    explanation: 'SoftwareSerial emulates UART timing via software loops and interrupts. At high speeds (>57600 baud), interrupt latency and CPU overhead cause frequent frame and parity errors.'
  },
  {
    id: 'ard-q11',
    topicId: 'arduino',
    category: 'Analog Reference',
    question: 'What happens when "analogReference(INTERNAL)" is executed on an Arduino Uno?',
    options: [
      'Configures the ADC to use the built-in precision 1.1V bandgap voltage reference instead of the default 5V VCC.',
      'Limits analog inputs to 0.5V.',
      'Connects the AREF pin directly to 12V.',
      'Switches the ADC into differential mode.'
    ],
    correctAnswer: 0,
    explanation: 'analogReference(INTERNAL) engages the stable 1.1V internal bandgap reference on ATmega328P, providing higher sensitivity (1.07 mV/step) for low-voltage sensor measurements regardless of 5V rail fluctuations.'
  },
  {
    id: 'ard-q12',
    topicId: 'arduino',
    category: 'SPI Bus Protocol',
    question: 'Which SPI pins are used on the Arduino Uno hardware SPI bus?',
    options: [
      'Pin 10 (SS/CS), Pin 11 (MOSI), Pin 12 (MISO), Pin 13 (SCK)',
      'Pin 2 (SDA), Pin 3 (SCL)',
      'Pin 0 (RX), Pin 1 (TX)',
      'Pins A0, A1, A2, A3'
    ],
    correctAnswer: 0,
    explanation: 'The AVR hardware SPI peripheral is routed to digital pins 10 (Slave Select / SS), 11 (Master Out Slave In / MOSI), 12 (Master In Slave Out / MISO), and 13 (Serial Clock / SCK).'
  },
  {
    id: 'ard-q13',
    topicId: 'arduino',
    category: 'Hardware Servos',
    question: 'What type of PWM control signal does the Arduino Servo.h library generate to control standard hobby RC servos?',
    options: [
      'A 50 Hz (20 ms period) pulse whose high pulse width varies between 1.0 ms (0°) and 2.0 ms (180°).',
      'A 1000 Hz variable duty cycle square wave (0-100%).',
      'A continuous 5V DC analog voltage.',
      'A high-frequency 25 kHz audio signal.'
    ],
    correctAnswer: 0,
    explanation: 'Hobby RC servos require PPM/PWM frames at 50Hz (every 20ms). A 1.5ms pulse centers the servo at 90°, 1.0ms turns to 0°, and 2.0ms rotates to 180°.'
  },
  {
    id: 'ard-q14',
    topicId: 'arduino',
    category: 'Debouncing',
    question: 'What is the primary cause of contact bounce in mechanical pushbuttons, and how is it resolved in software?',
    options: [
      'Mechanical spring contacts oscillate open/closed for 5-20 ms upon press/release; resolved by verifying the pin state remains stable past a 20-50ms debounce threshold.',
      'Electromagnetic radiation from AC power lines; resolved by increasing clock speed.',
      'Static electricity build-up; resolved by analogRead().',
      'Thermal noise in copper traces; resolved by cooling the chip.'
    ],
    correctAnswer: 0,
    explanation: 'Mechanical metal contacts physically bounce on make/break for several milliseconds, creating rapid spurious digital transitions. Software debouncing samples the pin and registers a state change only after it remains steady for 20-50ms.'
  },
  {
    id: 'ard-q15',
    topicId: 'arduino',
    category: 'Watchdog Timer',
    question: 'How is the AVR hardware watchdog timer enabled and refreshed in Arduino using avr/wdt.h?',
    options: [
      'wdt_enable(WDTO_2S); in setup() and wdt_reset(); periodically in loop()',
      'watchdog.start(2000); and watchdog.feed();',
      'timer.attach(2, reset);',
      'pinMode(WDT, OUTPUT); digitalWrite(WDT, HIGH);'
    ],
    correctAnswer: 0,
    explanation: 'Including <avr/wdt.h>, wdt_enable(WDTO_2S) arms the on-chip 128kHz watchdog oscillator with a 2-second timeout, and wdt_reset() resets the watchdog counter during normal execution.'
  },
  {
    id: 'ard-q16',
    topicId: 'arduino',
    category: 'Pulse Measurement',
    question: 'What does the pulseIn(pin, value, timeout) Arduino function measure?',
    options: [
      'The duration (in microseconds) that a pulse on the specified pin remains in the designated HIGH or LOW state.',
      'The number of pulses per second (frequency in Hz).',
      'The peak analog voltage of a signal.',
      'The total elapsed runtime since boot.'
    ],
    correctAnswer: 0,
    explanation: 'pulseIn() waits for a pin to transition to the specified state, times how long it remains in that state, and returns the duration in microseconds (commonly used with HC-SR04 ultrasonic echo pulses).'
  },
  {
    id: 'ard-q17',
    topicId: 'arduino',
    category: 'Power Management',
    question: 'Which sleep mode in AVR microcontrollers (via avr/sleep.h) provides the lowest power consumption (under 1 µA)?',
    options: [
      'SLEEP_MODE_PWR_DOWN',
      'SLEEP_MODE_IDLE',
      'SLEEP_MODE_ADC',
      'SLEEP_MODE_STANDBY'
    ],
    correctAnswer: 0,
    explanation: 'Power-down mode (SLEEP_MODE_PWR_DOWN) halts the main oscillator and all internal peripherals except external pin-change interrupts and watchdog timer, reducing current consumption to <1 µA.'
  },
  {
    id: 'ard-q18',
    topicId: 'arduino',
    category: 'Volatile in ISR',
    question: 'Why must variables modified inside an Arduino ISR (such as a pulse counter) be declared "volatile"?',
    options: [
      'Forces the compiler to read the variable from RAM on each access instead of keeping a stale copy cached in a CPU register.',
      'Makes the variable accessible to other microcontrollers.',
      'Encrypts the variable data against tampering.',
      'Allocates the variable in Flash memory.'
    ],
    correctAnswer: 0,
    explanation: 'Without "volatile", the compiler\'s optimizer assumes no asynchronous modification can occur in a loop, caching the variable in a register and failing to see updates made by the ISR.'
  },
  {
    id: 'ard-q19',
    topicId: 'arduino',
    category: 'PWM Timers',
    question: 'Which hardware timer on the ATmega328P controls the PWM outputs on pins 5 and 6 (and the millis() timekeeper)?',
    options: ['Timer0 (8-bit)', 'Timer1 (16-bit)', 'Timer2 (8-bit)', 'Timer3 (32-bit)'],
    correctAnswer: 0,
    explanation: 'Timer0 is configured by the Arduino core for millis()/micros() timekeeping and drives PWM on Pins 5 & 6. Changing Timer0 prescaler alters millis() timing.'
  },
  {
    id: 'ard-q20',
    topicId: 'arduino',
    category: 'I2C Addressing',
    question: 'What is the address format used by the Arduino Wire.beginTransmission(address) method?',
    options: [
      '7-bit I2C slave address (0x08 to 0x77); the read/write bit is automatically appended by the Wire library.',
      '8-bit address including the R/W bit.',
      '16-bit extended address.',
      '32-bit MAC address.'
    ],
    correctAnswer: 0,
    explanation: 'The Arduino Wire library accepts standard 7-bit I2C addresses (e.g. 0x68 for MPU6050, 0x27 for LCD). The library shifts the address left by 1 and appends the 0 (write) or 1 (read) bit automatically.'
  },

  // ==========================================
  // PYTHON HARDWARE / MICROPYTHON (20 QUESTIONS)
  // ==========================================
  {
    id: 'pyhw-q1',
    topicId: 'python_hw',
    category: 'MicroPython',
    question: 'In MicroPython on an ESP32/RP2040, which standard module controls physical GPIO pins, ADC, PWM, and I2C buses?',
    options: ['machine', 'sys', 'os', 'socket'],
    correctAnswer: 0,
    explanation: 'The machine module contains hardware control classes: machine.Pin, machine.ADC, machine.PWM, machine.I2C, and machine.SPI.'
  },
  {
    id: 'pyhw-q2',
    topicId: 'python_hw',
    category: 'Pin Toggle',
    question: 'How do you instantiate and toggle an output pin on GPIO2 in MicroPython?',
    options: [
      'from machine import Pin; led = Pin(2, Pin.OUT); led.toggle()',
      'import gpio; gpio.set(2, HIGH)',
      'Pin.set_output(2); Pin.toggle(2)',
      'import RPi.GPIO; GPIO.toggle(2)'
    ],
    correctAnswer: 0,
    explanation: 'machine.Pin(id, Pin.OUT) configures the pin as output, and led.toggle() (or led.value(not led.value())) toggles its state.'
  },
  {
    id: 'pyhw-q3',
    topicId: 'python_hw',
    category: 'ADC Sampling',
    question: 'In modern MicroPython, what method reads the analog voltage as a standardized 16-bit unsigned integer (0-65535)?',
    options: ['adc.read_u16()', 'adc.read()', 'adc.read_voltage()', 'adc.sample()'],
    correctAnswer: 0,
    explanation: 'MicroPython standardizes ADC readings across all microcontrollers (RP2040, ESP32, STM32) using adc.read_u16(), returning a uniform range of 0 to 65535 regardless of underlying hardware bit resolution.'
  },
  {
    id: 'pyhw-q4',
    topicId: 'python_hw',
    category: 'PWM Configuration',
    question: 'How do you configure a hardware PWM signal at 1 kHz frequency with 50% duty cycle on GPIO 15 in MicroPython?',
    options: [
      'from machine import Pin, PWM; pwm = PWM(Pin(15), freq=1000, duty_u16=32768)',
      'pwm = PWM(15); pwm.set(1000, 50)',
      'import pwm; pwm.init(15, 1000, 0.5)',
      'machine.PWM(15, 50, 1000)'
    ],
    correctAnswer: 0,
    explanation: 'PWM(Pin(15), freq=1000, duty_u16=32768) sets frequency to 1000 Hz and duty cycle to 50% (32768 is half of 65535 in 16-bit duty scaling).'
  },
  {
    id: 'pyhw-q5',
    topicId: 'python_hw',
    category: 'I2C Bus',
    question: 'How is a hardware I2C peripheral initialized at 400 kHz on ESP32 in MicroPython?',
    options: [
      'from machine import I2C, Pin; i2c = I2C(0, scl=Pin(22), sda=Pin(21), freq=400000)',
      'i2c = I2C.open(22, 21, speed=400)',
      'import smbus; i2c = smbus.SMBus(1)',
      'machine.i2c_init(22, 21, 400000)'
    ],
    correctAnswer: 0,
    explanation: 'machine.I2C(id, scl=Pin(scl), sda=Pin(sda), freq=freq) initializes the hardware I2C controller with specified pins and clock speed (400kHz fast-mode).'
  },
  {
    id: 'pyhw-q6',
    topicId: 'python_hw',
    category: 'Hardware Interrupts',
    question: 'What is the correct syntax to attach a falling-edge interrupt handler to a push-button pin in MicroPython?',
    options: [
      'btn.irq(trigger=Pin.IRQ_FALLING, handler=my_callback)',
      'btn.attach_interrupt(FALLING, my_callback)',
      'machine.interrupt(btn, Pin.FALLING, my_callback)',
      'btn.on_press(my_callback)'
    ],
    correctAnswer: 0,
    explanation: 'Pin.irq(trigger=Pin.IRQ_FALLING, handler=callback) registers an ISR callback that executes immediately when the digital input voltage drops from high to low.'
  },
  {
    id: 'pyhw-q7',
    topicId: 'python_hw',
    category: 'ISR Memory Management',
    question: 'Why does attempting to allocate memory (e.g. creating lists, formatting strings) inside a MicroPython hard ISR raise a MemoryError?',
    options: [
      'The Python Garbage Collector (GC) heap cannot be locked or modified during a hardware interrupt service routine.',
      'MicroPython disables all RAM during interrupts.',
      'Interrupts can only execute in Flash memory.',
      'The CPU switches into read-only mode.'
    ],
    correctAnswer: 0,
    explanation: 'Hard ISRs run in interrupt context where the Python heap allocator is disabled. Any memory allocation throws a MemoryError.micropython.schedule() is used to defer execution back to the main thread.'
  },
  {
    id: 'pyhw-q8',
    topicId: 'python_hw',
    category: 'Asynchronous Concurrency',
    question: 'Which built-in MicroPython module enables cooperative multitasking and non-blocking coroutines without RTOS threads?',
    options: ['uasyncio', 'threading', 'multiprocessing', 'concurrent.futures'],
    correctAnswer: 0,
    explanation: 'uasyncio implements an event-loop cooperative multitasking framework using async/await syntax, enabling concurrent sensor polling, network servers, and display updates on microcontrollers.'
  },
  {
    id: 'pyhw-q9',
    topicId: 'python_hw',
    category: 'Deep Sleep',
    question: 'How do you place an ESP32 into deep sleep for 10 seconds in MicroPython to achieve microamp standby current?',
    options: [
      'import machine; machine.deepsleep(10000)',
      'import time; time.sleep(10)',
      'machine.sleep(10)',
      'esp32.power_down(10000)'
    ],
    correctAnswer: 0,
    explanation: 'machine.deepsleep(10000) shuts down CPU cores, high-speed clocks, and digital peripherals for 10,000 milliseconds (10 seconds), waking up via the ULP/RTC timer as a fresh boot.'
  },
  {
    id: 'pyhw-q10',
    topicId: 'python_hw',
    category: 'Raspberry Pi GPIO',
    question: 'What is the recommended modern high-level Python library for controlling GPIO, sensors, and robotics on Raspberry Pi OS?',
    options: ['gpiozero', 'RPi.GPIO', 'wiringpi', 'pigpio_old'],
    correctAnswer: 0,
    explanation: 'gpiozero is the official Raspberry Pi Foundation library providing an intuitive, object-oriented, and event-driven API for LEDs, buttons, servos, motors, and distance sensors.'
  },
  {
    id: 'pyhw-q11',
    topicId: 'python_hw',
    category: 'Addressable LEDs',
    question: 'How do you set the first LED of an 8-LED WS2812B / NeoPixel strip to full red in MicroPython?',
    options: [
      'import neopixel, machine; np = neopixel.NeoPixel(machine.Pin(4), 8); np[0] = (255, 0, 0); np.write()',
      'neopixel.set(4, 0, "RED")',
      'neopixel.write_rgb(0, 255, 0, 0)',
      'import led; led.color(1, 255, 0, 0)'
    ],
    correctAnswer: 0,
    explanation: 'The neopixel module creates an array-like buffer of RGB tuples. Modifying np[0] = (255, 0, 0) sets the color in RAM, and np.write() transmits the precise 800kHz single-wire timing stream.'
  },
  {
    id: 'pyhw-q12',
    topicId: 'python_hw',
    category: 'Hardware Timers',
    question: 'How do you create a periodic 500 ms hardware timer callback on ESP32/RP2040 in MicroPython?',
    options: [
      'from machine import Timer; tim = Timer(-1); tim.init(period=500, mode=Timer.PERIODIC, callback=my_handler)',
      'tim = Timer.periodic(500, my_handler)',
      'Timer.start(500, callback=my_handler)',
      'machine.Timer(500).run(my_handler)'
    ],
    correctAnswer: 0,
    explanation: 'Timer(-1) creates a virtual/hardware timer initialized with period=500 (in milliseconds) and mode=Timer.PERIODIC to invoke the callback repeatedly.'
  },
  {
    id: 'pyhw-q13',
    topicId: 'python_hw',
    category: 'UART Serial',
    question: 'How do you read all available incoming bytes from a hardware UART port in MicroPython?',
    options: [
      'if uart.any(): data = uart.read()',
      'data = uart.recv_all()',
      'data = uart.get_buffer()',
      'data = uart.read_string()'
    ],
    correctAnswer: 0,
    explanation: 'uart.any() checks if any bytes are queued in the RX FIFO buffer, and uart.read() reads all available buffered bytes into a bytes object.'
  },
  {
    id: 'pyhw-q14',
    topicId: 'python_hw',
    category: 'Performance Optimization',
    question: 'What decorator in MicroPython compiles a Python function directly into high-speed raw native machine code with C-like integer pointers?',
    options: ['@micropython.viper', '@jit', '@numba', '@fast_execution'],
    correctAnswer: 0,
    explanation: '@micropython.viper compiles code into direct assembly instructions with zero-overhead integer memory pointers, providing execution speeds matching compiled C firmware.'
  },
  {
    id: 'pyhw-q15',
    topicId: 'python_hw',
    category: 'Non-Volatile Storage',
    question: 'How can small key-value configuration variables be persisted across resets in ESP32 MicroPython without raw flash corruption?',
    options: [
      'esp32.NVS (Non-Volatile Storage)',
      'machine.EEPROM',
      'sys.save_config()',
      'os.persist()'
    ],
    correctAnswer: 0,
    explanation: 'The esp32.NVS module provides direct access to the ESP-IDF Non-Volatile Storage flash partition for atomic, wear-leveled storage of integer, string, and blob key-value pairs.'
  },
  {
    id: 'pyhw-q16',
    topicId: 'python_hw',
    category: 'Hardware SPI',
    question: 'How do you initialize hardware SPI on an RP2040 (Raspberry Pi Pico) at 10 MHz in MicroPython?',
    options: [
      'from machine import SPI, Pin; spi = SPI(0, baudrate=10000000, polarity=0, phase=0, sck=Pin(18), mosi=Pin(19), miso=Pin(16))',
      'spi = SPI(0, 10000000)',
      'spi = machine.SPI_Open(10, Pins=(18, 19, 16))',
      'import spi; spi.init(10000000)'
    ],
    correctAnswer: 0,
    explanation: 'machine.SPI(0, baudrate=10_000_000, polarity=0, phase=0, ...) binds SPI0 to the designated GPIO pins with explicit SPI mode (CPOL=0, CPHA=0) and 10MHz clock speed.'
  },
  {
    id: 'pyhw-q17',
    topicId: 'python_hw',
    category: 'Garbage Collection',
    question: 'How can you manually trigger garbage collection and check remaining free RAM in MicroPython?',
    options: [
      'import gc; gc.collect(); free_bytes = gc.mem_free()',
      'import mem; mem.cleanup()',
      'sys.garbage_collect()',
      'os.free_ram()'
    ],
    correctAnswer: 0,
    explanation: 'gc.collect() runs the mark-and-sweep garbage collection algorithm to reclaim unreachable heap blocks, and gc.mem_free() returns the remaining available heap space in bytes.'
  },
  {
    id: 'pyhw-q18',
    topicId: 'python_hw',
    category: 'IoT Protocols',
    question: 'Which lightweight standard MicroPython library is used to publish telemetry data to an MQTT message broker?',
    options: ['umqtt.simple / umqtt.robust', 'paho.mqtt', 'socket.mqtt', 'urabbitmq'],
    correctAnswer: 0,
    explanation: 'umqtt.simple provides a compact, memory-efficient MQTT client implementation designed specifically for embedded microcontrollers in the MicroPython ecosystem.'
  },
  {
    id: 'pyhw-q19',
    topicId: 'python_hw',
    category: 'Real-Time Clock',
    question: 'How do you synchronize and set the hardware Real-Time Clock (RTC) on an ESP32 in MicroPython?',
    options: [
      'from machine import RTC; rtc = RTC(); rtc.datetime((year, month, day, weekday, hour, minute, second, subsecond))',
      'time.set_clock(year, month, day)',
      'machine.RTC.set_epoch(1700000000)',
      'rtc.init_time(now)'
    ],
    correctAnswer: 0,
    explanation: 'machine.RTC().datetime(tuple) updates the internal battery-backed/sub-second RTC counter, which is maintained continuously in low-power and deep-sleep modes.'
  },
  {
    id: 'pyhw-q20',
    topicId: 'python_hw',
    category: 'Capacitive Touch',
    question: 'Which ESP32 peripheral capability is exposed via the "machine.TouchPad" class in MicroPython?',
    options: [
      'Capacitive touch sensing on dedicated GPIO pins without external pull resistors or active touch ICs.',
      'Resistive touch matrix scanning.',
      'Optical finger detection.',
      'Piezoelectric pressure sensing.'
    ],
    correctAnswer: 0,
    explanation: 'The ESP32 includes internal capacitive touch measurement circuitry on specific GPIOs (e.g. GPIO4, GPIO0, GPIO2, GPIO15). machine.TouchPad(Pin(4)).read() measures capacitance variations caused by human touch.'
  },

  // ==========================================
  // RTOS SYSTEM PROGRAMMING (20 QUESTIONS)
  // ==========================================
  {
    id: 'rtos-q1',
    topicId: 'rtos_problems',
    category: 'Scheduling',
    question: 'In a priority-based preemptive RTOS (e.g. FreeRTOS), what occurs when a higher-priority task transitions from Blocked to Ready state?',
    options: [
      'The RTOS kernel immediately context-switches and preempts the running lower-priority task.',
      'The running task completes its time slice before context switching.',
      'The higher-priority task waits until the running task yields voluntarily.',
      'The kernel terminates the lower-priority task.'
    ],
    correctAnswer: 0,
    explanation: 'In preemptive scheduling, the highest-priority Ready task always executes immediately, preempting lower-priority running tasks.'
  },
  {
    id: 'rtos-q2',
    topicId: 'rtos_problems',
    category: 'Synchronization',
    question: 'What is Priority Inversion in an RTOS, and how does Priority Inheritance resolve it?',
    options: [
      'A low-priority task holds a mutex needed by a high-priority task, while a medium task preempts the low task; Priority Inheritance temporarily raises the low task priority to match the high task.',
      'All tasks receive equal priority.',
      'Tasks run in alphabetical order.',
      'Memory is doubled during priority switches.'
    ],
    correctAnswer: 0,
    explanation: 'Priority Inheritance elevates the mutex holder\'s priority to match the highest waiting task, preventing intermediate tasks from starving high-priority tasks.'
  },
  {
    id: 'rtos-q3',
    topicId: 'rtos_problems',
    category: 'Semaphores vs Mutexes',
    question: 'What is the crucial architectural difference between a Binary Semaphore and a Mutex in an RTOS?',
    options: [
      'A Mutex has ownership and supports Priority Inheritance; a Binary Semaphore has no concept of ownership and is used for unidirectional task-to-task signaling.',
      'A Binary Semaphore can count to infinity; a Mutex counts to 1.',
      'A Mutex can be taken in an ISR; a Semaphore cannot.',
      'Binary Semaphores encrypt data transfers.'
    ],
    correctAnswer: 0,
    explanation: 'A Mutex must be unlocked by the exact same task that locked it (ownership), allowing the kernel to track priority inheritance. A binary semaphore can be signaled/given by any task or ISR without ownership.'
  },
  {
    id: 'rtos-q4',
    topicId: 'rtos_problems',
    category: 'Counting Semaphores',
    question: 'When should a Counting Semaphore be used in an embedded RTOS system?',
    options: [
      'To manage access to a finite pool of identical shared resources (e.g. 5 available network buffers) or count asynchronous event arrivals.',
      'To replace the CPU clock oscillator.',
      'To measure task CPU execution time in nanoseconds.',
      'To store floating-point sensor logs in flash memory.'
    ],
    correctAnswer: 0,
    explanation: 'A counting semaphore maintains a counter value initialized to the number of available resources. Tasks decrement the count (take) to acquire a resource and increment (give) when finished, blocking when the count reaches 0.'
  },
  {
    id: 'rtos-q5',
    topicId: 'rtos_problems',
    category: 'Inter-Task Communication',
    question: 'How do FreeRTOS Message Queues (xQueueSend / xQueueReceive) pass data between tasks by default?',
    options: [
      'By Value: data is copied byte-for-byte into the queue buffer memory, decoupling the receiver from the sender\'s local variable scope.',
      'By Reference: only 32-bit pointers are passed without copying data.',
      'Through external SPI flash memory.',
      'Using global volatile global arrays only.'
    ],
    correctAnswer: 0,
    explanation: 'FreeRTOS queues copy data by value into internal queue storage, preventing memory corruption if the sending task modifies or deallocates its local variable after queuing. To send large structures, pointers can be queued explicitly.'
  },
  {
    id: 'rtos-q6',
    topicId: 'rtos_problems',
    category: 'ISR-Safe RTOS APIs',
    question: 'Why must special "FromISR" API variants (e.g. xQueueSendFromISR) be used inside Interrupt Service Routines in FreeRTOS?',
    options: [
      'They do not execute blocking delay waits and use an output parameter (pxHigherPriorityTaskWoken) to request a deferred context switch at ISR exit.',
      'Standard APIs disable all hardware interrupts permanently.',
      'FromISR functions allocate dynamic heap memory.',
      'Standard APIs run 100x slower.'
    ],
    correctAnswer: 0,
    explanation: 'ISRs cannot block on timeout (xTicksToWait must not exist in ISRs). FromISR APIs never block, and they set *pxHigherPriorityTaskWoken = pdTRUE so portYIELD_FROM_ISR() can trigger a clean context switch upon ISR return.'
  },
  {
    id: 'rtos-q7',
    topicId: 'rtos_problems',
    category: 'Task Notifications',
    question: 'What is the primary advantage of FreeRTOS Direct-to-Task Notifications (xTaskNotifyGive / ulTaskNotifyTake) over semaphores?',
    options: [
      'They are up to 45% faster and consume zero additional RAM because the 32-bit notification state is embedded directly inside the Task Control Block (TCB).',
      'They can transmit gigabytes of video data.',
      'They eliminate the need for an RTOS kernel.',
      'They work without CPU interrupts.'
    ],
    correctAnswer: 0,
    explanation: 'Direct-to-Task notifications update an internal 32-bit field inside the receiver task\'s TCB directly, bypassing queue/semaphore allocation structures and delivering significantly lower context switch latency.'
  },
  {
    id: 'rtos-q8',
    topicId: 'rtos_problems',
    category: 'Event Groups',
    question: 'How does an RTOS Event Group (xEventGroupWaitBits) facilitate multi-event synchronization?',
    options: [
      'Allows a task to block waiting for multiple independent event flags (bits) to be set, supporting logical AND (wait for all) or logical OR (wait for any) conditions.',
      'Converts digital signals to analog voltages.',
      'Groups multiple microcontrollers onto a CAN bus.',
      'Automatically balances thread CPU load across cores.'
    ],
    correctAnswer: 0,
    explanation: 'Event Groups store a set of binary flags. A task can block until bit 0 AND bit 1 are set (e.g. WiFi connected AND Sensor initialized), or unblock if ANY bit in the mask is asserted.'
  },
  {
    id: 'rtos-q9',
    topicId: 'rtos_problems',
    category: 'Software Timers',
    question: 'In what context do FreeRTOS software timer callback functions execute?',
    options: [
      'In the context of the dedicated RTOS Timer Service (Daemon) Task (prvTimerTask), NOT in interrupt context.',
      'In the hardware SysTick ISR context.',
      'In the highest-priority application task context.',
      'In a completely separate hardware core.'
    ],
    correctAnswer: 0,
    explanation: 'FreeRTOS software timers execute inside the context of the Timer Daemon Task. Because callbacks are task-level functions, they can use RTOS APIs, but they must NOT call blocking functions (e.g. vTaskDelay).'
  },
  {
    id: 'rtos-q10',
    topicId: 'rtos_problems',
    category: 'Memory Management',
    question: 'Which FreeRTOS memory allocation scheme (heap_1 to heap_5) supports coalescing adjacent freed memory blocks to prevent heap fragmentation?',
    options: ['heap_4.c', 'heap_1.c', 'heap_2.c', 'heap_3.c'],
    correctAnswer: 0,
    explanation: 'heap_4.c implements a first-fit memory allocation algorithm that merges (coalesces) adjacent free memory blocks upon deallocation, preventing fragmentation in dynamic create/delete applications.'
  },
  {
    id: 'rtos-q11',
    topicId: 'rtos_problems',
    category: 'Deadlocks',
    question: 'What are the four necessary Coffman conditions required for a system Deadlock to occur in multitasking environments?',
    options: [
      'Mutual Exclusion, Hold and Wait, No Preemption, and Circular Wait.',
      'High Priority, Low Priority, Timer Drift, and Cache Miss.',
      'FIFO queue, Stack Overflow, Watchdog Trigger, and Slew Rate.',
      'Interrupt latency, Context switch, Jitter, and Baud rate mismatch.'
    ],
    correctAnswer: 0,
    explanation: 'A deadlock can occur if and only if all 4 Coffman conditions hold: (1) Mutual exclusion of resources, (2) Holding one resource while waiting for another, (3) Resources cannot be preempted, and (4) A circular chain of tasks waiting on each other.'
  },
  {
    id: 'rtos-q12',
    topicId: 'rtos_problems',
    category: 'Real-Time Scheduling',
    question: 'What is Rate-Monotonic Scheduling (RMS) in hard real-time systems?',
    options: [
      'A static-priority scheduling algorithm where tasks with shorter cycle periods are assigned strictly higher priorities.',
      'A dynamic algorithm where tasks with earliest deadlines run first.',
      'A round-robin algorithm with 1 ms time slices.',
      'A scheduling algorithm that prioritizes tasks with lowest memory usage.'
    ],
    correctAnswer: 0,
    explanation: 'RMS is an optimal static-priority assignment policy for periodic tasks: shorter period = higher rate = higher priority. Liu and Layland proved that any task set with utilization $U \\le n(2^{1/n}-1) \\approx 69.3\\%$ is guaranteed schedulable.'
  },
  {
    id: 'rtos-q13',
    topicId: 'rtos_problems',
    category: 'Dynamic Scheduling',
    question: 'What is Earliest Deadline First (EDF) scheduling, and what is its maximum theoretical CPU utilization bound?',
    options: [
      'A dynamic-priority algorithm that prioritizes the task closest to its absolute deadline; achieves up to 100% theoretical schedulable CPU utilization.',
      'A static-priority algorithm capped at 50% CPU utilization.',
      'A scheduling policy that only executes tasks after deadlines expire.',
      'A round-robin algorithm capped at 69.3% CPU utilization.'
    ],
    correctAnswer: 0,
    explanation: 'EDF dynamically recalculates task priorities at runtime based on proximity to active deadlines. It is mathematically optimal and can achieve up to 100% processor utilization on uniprocessor systems.'
  },
  {
    id: 'rtos-q14',
    topicId: 'rtos_problems',
    category: 'Low-Power RTOS',
    question: 'How does Tickless Idle mode (configUSE_TICKLESS_IDLE) save significant battery power in an RTOS?',
    options: [
      'Stops the periodic hardware SysTick timer interrupt during idle periods and programs a low-power timer to wake the MCU right before the next task deadline.',
      'Reduces RAM voltage to zero.',
      'Disables all task stacks permanently.',
      'Lowers CPU clock speed to 1 Hz during active execution.'
    ],
    correctAnswer: 0,
    explanation: 'Normally, SysTick interrupts wake the CPU every 1ms even when all tasks are idle. Tickless Idle suppresses periodic SysTick interrupts, placing the MCU into deep sleep until the next scheduled task wakeup or external interrupt.'
  },
  {
    id: 'rtos-q15',
    topicId: 'rtos_problems',
    category: 'Stack Checking',
    question: 'How does FreeRTOS Stack Overflow Hook Method 2 (configCHECK_FOR_STACK_OVERFLOW = 2) detect stack corruption?',
    options: [
      'Checks if the 16-byte known canary pattern (0xa5a5...) at the top/end of the allocated task stack has been overwritten.',
      'Measures the resistance of the RAM silicon.',
      'Counts the total number of push/pop assembly instructions.',
      'Allocates 100MB of virtual memory on an SD card.'
    ],
    correctAnswer: 0,
    explanation: 'Method 2 fills the entire task stack with 0xA5 at creation time. During every context switch, the kernel checks if the last 16 bytes at the end of the stack remain 0xA5. If corrupted, it calls vApplicationStackOverflowHook().'
  },
  {
    id: 'rtos-q16',
    topicId: 'rtos_problems',
    category: 'Idle Task',
    question: 'What essential system housekeeping responsibility does the RTOS Idle Task perform?',
    options: [
      'Frees memory allocated by the kernel for tasks that have been deleted via vTaskDelete(), and enters low-power sleep.',
      'Refreshes the dynamic RAM row refresh controllers.',
      'Flushes the CPU pipeline on every branch.',
      'Clears the UART serial buffer.'
    ],
    correctAnswer: 0,
    explanation: 'When a task calls vTaskDelete(NULL), it cannot free its own stack memory while executing. The Idle Task is responsible for freeing the TCB and stack memory of terminated tasks.'
  },
  {
    id: 'rtos-q17',
    topicId: 'rtos_problems',
    category: 'Delay Precision',
    question: 'What is the operational difference between vTaskDelay(10) and vTaskDelayUntil(&xLastWakeTime, 10) in FreeRTOS?',
    options: [
      'vTaskDelay() delays relative to the moment it is called (leading to period drift); vTaskDelayUntil() delays relative to an absolute timestamp, guaranteeing fixed periodic frequency.',
      'vTaskDelayUntil() uses floating-point microseconds.',
      'vTaskDelay() is for ISRs; vTaskDelayUntil() is for tasks.',
      'vTaskDelayUntil() terminates the task after 10 ticks.'
    ],
    correctAnswer: 0,
    explanation: 'vTaskDelay() introduces cumulative phase drift because execution time varies. vTaskDelayUntil() tracks xLastWakeTime and unblocks at strict periodic intervals regardless of task execution duration.'
  },
  {
    id: 'rtos-q18',
    topicId: 'rtos_problems',
    category: 'Resource Locking',
    question: 'What is the Priority Ceiling Protocol (PCP) in real-time synchronization?',
    options: [
      'Assigns each shared resource a ceiling priority equal to the highest priority of any task that may lock it; elevates any locking task to that ceiling immediately, preventing deadlocks.',
      'Sets all task priorities to maximum on boot.',
      'Restricts resource sharing to 2 tasks.',
      'Automatically deletes lower-priority tasks.'
    ],
    correctAnswer: 0,
    explanation: 'In PCP, when a task acquires a resource, its priority is immediately elevated to the resource\'s priority ceiling. This guarantees that no task can be blocked for more than one critical section and eliminates deadlocks completely.'
  },
  {
    id: 'rtos-q19',
    topicId: 'rtos_problems',
    category: 'Critical Sections',
    question: 'Why should taskENTER_CRITICAL() / taskEXIT_CRITICAL() blocks be kept as short as possible?',
    options: [
      'They disable maskable interrupts, increasing overall system interrupt latency and potentially causing missed hardware events.',
      'They consume 100x more power.',
      'They corrupt floating-point registers.',
      'They erase flash memory if kept active for more than 1 second.'
    ],
    correctAnswer: 0,
    explanation: 'Critical sections disable interrupts (or mask up to configMAX_SYSCALL_INTERRUPT_PRIORITY). Prolonged critical sections degrade real-time responsiveness and cause jitter or missed hardware triggers.'
  },
  {
    id: 'rtos-q20',
    topicId: 'rtos_problems',
    category: 'Starvation',
    question: 'How does Starvation differ from Deadlock in an RTOS?',
    options: [
      'In Starvation, a ready low-priority task is perpetually denied CPU time by continuous higher-priority tasks; in Deadlock, tasks are blocked waiting on each other\'s unreleased locks.',
      'Starvation only occurs during flash programming.',
      'Deadlock can be resolved by increasing clock frequency; Starvation cannot.',
      'There is no difference; they are exact synonyms.'
    ],
    correctAnswer: 0,
    explanation: 'Starvation occurs when a task is runnable but starved of execution time due to scheduling policies (e.g. higher priority tasks saturating CPU). Deadlock is a permanent circular lock dependency where none of the tasks can run.'
  },

  // ==========================================
  // CV & ROBOTICS VISION (20 QUESTIONS)
  // ==========================================
  {
    id: 'cv-q1',
    topicId: 'cv_robotics',
    category: 'OpenCV Colorspaces',
    question: 'Why is the HSV (Hue, Saturation, Value) color space preferred over RGB for robust object color tracking in robotics?',
    options: [
      'HSV separates chromatic color information (Hue) from lighting/intensity variations (Value), making tracking invariant to lighting shifts.',
      'HSV uses 8x less RAM than RGB.',
      'HSV images are strictly 1-bit binary.',
      'RGB cameras cannot record color.'
    ],
    correctAnswer: 0,
    explanation: 'In HSV, Hue encapsulates true color independent of illumination, providing robust color thresholding under fluctuating room lights.'
  },
  {
    id: 'cv-q2',
    topicId: 'cv_robotics',
    category: 'Fiducial Markers',
    question: 'What is the primary function of ArUco and AprilTag planar fiducial markers in robotics vision systems?',
    options: [
      'Provides accurate 6-DOF camera pose estimation (relative 3D translation X,Y,Z and rotation pitch,yaw,roll) in real-time.',
      'Detects thermal heat signatures.',
      'Increases camera lens optical zoom.',
      'Compresses video streams into H.264.'
    ],
    correctAnswer: 0,
    explanation: 'ArUco/AprilTags have high-contrast binary patterns that enable fast corner detection and solve the PnP problem for 6-DOF spatial pose estimation.'
  },
  {
    id: 'cv-q3',
    topicId: 'cv_robotics',
    category: 'Edge Detection',
    question: 'What are the four sequential computational stages of the Canny Edge Detection algorithm?',
    options: [
      '1. Gaussian Filter Smoothing -> 2. Sobel Gradient Magnitude & Direction -> 3. Non-Maximum Suppression -> 4. Hysteresis Thresholding',
      '1. Fourier Transform -> 2. High-pass filter -> 3. Inverse FFT -> 4. Binarization',
      '1. Histogram Equalization -> 2. Median Blur -> 3. Dilate -> 4. Erode',
      '1. RGB to Grayscale -> 2. Invert -> 3. Add Noise -> 4. Crop'
    ],
    correctAnswer: 0,
    explanation: 'Canny edge detection smoothes noise with Gaussian blur, calculates gradient intensity/direction via Sobel kernels, thins edges via Non-Maximum Suppression, and links strong/weak edges using double-threshold hysteresis.'
  },
  {
    id: 'cv-q4',
    topicId: 'cv_robotics',
    category: 'Camera Calibration',
    question: 'What are the primary parameters computed during pinhole camera calibration using a checkerboard pattern?',
    options: [
      'Intrinsic Matrix (focal lengths fx, fy, optical centers cx, cy) and Lens Distortion Coefficients (radial k1, k2, k3 and tangential p1, p2).',
      'Camera shutter speed and ISO exposure index.',
      'WiFi network MAC address.',
      'Depth map RGB resolution.'
    ],
    correctAnswer: 0,
    explanation: 'Camera calibration computes intrinsic matrix $K$ (mapping 3D camera coordinates to 2D pixel coordinates) and distortion coefficients to correct radial (barrel/pincushion) and tangential lens warp.'
  },
  {
    id: 'cv-q5',
    topicId: 'cv_robotics',
    category: 'Perspective Transform',
    question: 'Which OpenCV functions are used to generate an inverse perspective "Bird\'s-Eye View" of a roadway for lane detection in autonomous vehicles?',
    options: [
      'cv2.getPerspectiveTransform() to compute the 3x3 Homography matrix, followed by cv2.warpPerspective()',
      'cv2.resize() followed by cv2.rotate()',
      'cv2.bilateralFilter() and cv2.Canny()',
      'cv2.cvtColor() with COLOR_BGR2GRAY'
    ],
    correctAnswer: 0,
    explanation: 'getPerspectiveTransform(src_pts, dst_pts) computes the 3x3 perspective transformation matrix from 4 selected road points, and warpPerspective applies the geometric transformation to project a top-down planar view.'
  },
  {
    id: 'cv-q6',
    topicId: 'cv_robotics',
    category: 'Morphological Operations',
    question: 'In binary image morphology, what is the difference between "Opening" and "Closing"?',
    options: [
      'Opening is Erosion followed by Dilation (removes small foreground noise); Closing is Dilation followed by Erosion (bridges small gaps and holes).',
      'Opening doubles image resolution; Closing halves it.',
      'Opening converts RGB to Grayscale; Closing converts Grayscale to Binary.',
      'Closing sharpens edges; Opening blurs textures.'
    ],
    correctAnswer: 0,
    explanation: 'Morphological Opening (Erode -> Dilate) eliminates small bright speckle noise while preserving object shape. Morphological Closing (Dilate -> Erode) fills internal voids, pinholes, and bridges broken contours.'
  },
  {
    id: 'cv-q7',
    topicId: 'cv_robotics',
    category: 'Optical Flow',
    question: 'What is the primary assumption behind the Lucas-Kanade differential optical flow algorithm?',
    options: [
      'Brightness Constancy (pixel intensities of an object do not change between consecutive frames) and Spatial Coherence (neighboring pixels share similar motion).',
      'The camera moves only in pure translation along the Z axis.',
      'All objects are perfect black-body emitters.',
      'Frame rate is strictly 1000 frames per second.'
    ],
    correctAnswer: 0,
    explanation: 'Lucas-Kanade assumes $I(x,y,t) = I(x+\\delta x, y+\\delta y, t+\\delta t)$ (brightness constancy) and solves the optical flow equation over a local $N \\times N$ pixel window assuming uniform velocity.'
  },
  {
    id: 'cv-q8',
    topicId: 'cv_robotics',
    category: 'ROS2 Architecture',
    question: 'What are the three core communication paradigms provided by the ROS2 (Robot Operating System) middleware?',
    options: [
      'Topics (asynchronous publish/subscribe streams), Services (synchronous request/response RPC), and Actions (long-running goal/feedback/result tasks).',
      'TCP, UDP, and ICMP only.',
      'Bluetooth, Zigbee, and LoRa.',
      'HTML, CSS, and JavaScript.'
    ],
    correctAnswer: 0,
    explanation: 'ROS2 provides Topics for continuous telemetry (e.g. LiDAR scans), Services for quick request/response calls (e.g. toggle LED), and Actions for preemptible long-duration tasks (e.g. navigate to waypoint).'
  },
  {
    id: 'cv-q9',
    topicId: 'cv_robotics',
    category: 'ROS2 Quality of Service',
    question: 'Why is "Best Effort" QoS reliability preferred over "Reliable" QoS for streaming high-bandwidth camera images in ROS2?',
    options: [
      'Best Effort avoids network packet retransmissions and buffering lag, delivering the freshest real-time frame and dropping stale packets on network congestion.',
      'Best Effort increases camera image resolution by 4x.',
      'Reliable QoS does not support video images.',
      'Best Effort encrypts video streams.'
    ],
    correctAnswer: 0,
    explanation: 'For real-time control, receiving a stale frame late is worse than dropping it. Best Effort QoS behaves like UDP, streaming the latest camera frame immediately without TCP-like acknowledgement stalls.'
  },
  {
    id: 'cv-q10',
    topicId: 'cv_robotics',
    category: 'Coordinate Transforms (TF2)',
    question: 'What is the primary purpose of the ROS2 TF2 library in mobile robotics?',
    options: [
      'Maintains a dynamic coordinate transform tree tracking the spatial 3D relationships and orientations between frames (e.g. /map -> /odom -> /base_link -> /camera_link) over time.',
      'Compiles C++ code into machine assembly.',
      'Generates 2D trajectory path planning charts.',
      'Compresses ROS bag log files.'
    ],
    correctAnswer: 0,
    explanation: 'TF2 manages time-stamped transformation frames across the robot structure, allowing any sensor reading (e.g. obstacle detected at 1m in camera_link) to be mathematically projected into world coordinates (map frame).'
  },
  {
    id: 'cv-q11',
    topicId: 'cv_robotics',
    category: '3D Point Clouds',
    question: 'How is the RANSAC (Random Sample Consensus) algorithm used in 3D LiDAR point cloud processing for mobile robots?',
    options: [
      'Fits a mathematical plane model through randomized point sampling to segment and remove the ground floor plane from obstacle clusters.',
      'Generates 3D color textures on CAD models.',
      'Increases LiDAR laser pulse frequency.',
      'Measures battery discharge voltage.'
    ],
    correctAnswer: 0,
    explanation: 'RANSAC iteratively selects random 3D points, computes candidate plane equations ($ax+by+cz+d=0$), and counts inliers to robustly identify and isolate the ground floor plane despite sensor noise.'
  },
  {
    id: 'cv-q12',
    topicId: 'cv_robotics',
    category: 'Hough Transform',
    question: 'What is the function of the Progressive Probabilistic Hough Transform (cv2.HoughLinesP) in image processing?',
    options: [
      'Detects distinct line segments in binary edge images by mapping edge pixels into an accumulator parameter space $(\\rho, \\theta)$.',
      'Detects faces using Haar cascades.',
      'Measures image brightness histograms.',
      'Compresses PNG images to JPEG.'
    ],
    correctAnswer: 0,
    explanation: 'HoughLinesP detects straight line segments by parameterizing lines as $\\rho = x\\cos\\theta + y\\sin\\theta$, voting in an accumulator array, and extracting start and end coordinates $(x_1, y_1, x_2, y_2)$ of line segments.'
  },
  {
    id: 'cv-q13',
    topicId: 'cv_robotics',
    category: 'Feature Detectors',
    question: 'Why is the ORB (Oriented FAST and Rotated BRIEF) feature detector widely chosen for real-time visual SLAM on embedded edge platforms?',
    options: [
      'Fast, computationally lightweight, rotation-invariant, and open-source patent-free alternative to computationally heavy SIFT and SURF.',
      'Detects thermal radiation without infrared lenses.',
      'Produces floating-point 512-dimensional vectors.',
      'Requires GPU tensor cores.'
    ],
    correctAnswer: 0,
    explanation: 'ORB combines modified FAST corner detection with an orientation centroid and binary BRIEF descriptor (rBRIEF), matching features via ultra-fast Hamming distance without floating-point math.'
  },
  {
    id: 'cv-q14',
    topicId: 'cv_robotics',
    category: 'Visual SLAM',
    question: 'What is the role of Loop Closure detection in Visual Simultaneous Localization and Mapping (VSLAM)?',
    options: [
      'Recognizes previously visited locations (via Bag of Visual Words / DBoW2) to eliminate accumulated dead-reckoning drift errors across the global map.',
      'Forces the robot to drive in physical circles.',
      'Reboots the camera driver when frames are dropped.',
      'Powers down unused sensor nodes.'
    ],
    correctAnswer: 0,
    explanation: 'Dead-reckoning visual odometry accumulates small drift errors over time. Loop closure detects when the robot returns to a known landmark and runs Pose Graph Optimization to correct the entire trajectory.'
  },
  {
    id: 'cv-q15',
    topicId: 'cv_robotics',
    category: 'Stereo Vision',
    question: 'How is 3D depth $Z$ mathematically calculated from stereo camera disparity $d$?',
    options: [
      'Z = (f * B) / d (where f is camera focal length in pixels, B is baseline distance between optical centers, and d is pixel disparity)',
      'Z = (f * d) / B',
      'Z = d / (f * B)',
      'Z = f + B + d'
    ],
    correctAnswer: 0,
    explanation: 'From similar triangles in calibrated stereo epipolar geometry, depth is inversely proportional to disparity: $Z = \\frac{f \\cdot B}{x_L - x_R} = \\frac{f \\cdot B}{d}$. Larger disparity corresponds to closer objects.'
  },
  {
    id: 'cv-q16',
    topicId: 'cv_robotics',
    category: 'Sensor Fusion',
    question: 'What is the role of the Kalman Gain $K$ in an Extended Kalman Filter (EKF) combining wheel odometry and visual SLAM?',
    options: [
      'Dynamically weights the trade-off between model prediction confidence and noisy sensor measurements to calculate the optimal state estimate.',
      'Amplifies sensor noise by 10x.',
      'Converts radians to degrees.',
      'Restricts robot velocity to 1 m/s.'
    ],
    correctAnswer: 0,
    explanation: 'The Kalman Gain $K = P H^T (H P H^T + R)^{-1}$ balances prediction covariance $P$ against measurement noise covariance $R$. If sensor noise $R$ is high, $K$ drops and the filter relies more on motion prediction.'
  },
  {
    id: 'cv-q17',
    topicId: 'cv_robotics',
    category: 'Object Detection',
    question: 'Why are single-stage object detection architectures (e.g. YOLO, SSD) favored over two-stage detectors (e.g. Faster R-CNN) in mobile robotics?',
    options: [
      'Single-stage detectors predict bounding boxes and class probabilities simultaneously in a single forward pass, achieving real-time 30-100+ FPS on edge GPUs.',
      'Single-stage detectors require zero training data.',
      'Two-stage detectors cannot run on Linux.',
      'Single-stage detectors work only on grayscale images.'
    ],
    correctAnswer: 0,
    explanation: 'Two-stage detectors generate region proposals first, then classify each region (slow). Single-stage detectors frame object detection as a single regression problem, delivering high frame rates needed for real-time robotic navigation.'
  },
  {
    id: 'cv-q18',
    topicId: 'cv_robotics',
    category: 'Epipolar Geometry',
    question: 'In calibrated stereo vision, what is the Essential Matrix ($E = [t]_\\times R$) used for?',
    options: [
      'Encapsulates the relative rotation (R) and translation (t) between two camera coordinate frames, satisfying the epipolar constraint x2^T * E * x1 = 0.',
      'Stores camera lens aperture diameter.',
      'Compensates for sensor rolling shutter distortion.',
      'Maps RGB values to HSV.'
    ],
    correctAnswer: 0,
    explanation: 'The Essential Matrix $E$ relates corresponding normalized image coordinates across two calibrated cameras via $x_2^T E x_1 = 0$, enforcing that matching points lie along corresponding epipolar lines.'
  },
  {
    id: 'cv-q19',
    topicId: 'cv_robotics',
    category: 'Thresholding',
    question: 'How does Otsu\'s Binarization method (cv2.THRESH_OTSU) determine the optimal threshold value for grayscale image segmentation?',
    options: [
      'Iteratively calculates the threshold that maximizes between-class variance (or minimizes intra-class variance) of the bimodal grayscale histogram.',
      'Averages the minimum and maximum pixel values in the image.',
      'Always selects a fixed value of 128.',
      'Uses neural network weights.'
    ],
    correctAnswer: 0,
    explanation: 'Otsu\'s algorithm analyzes the image histogram and finds the threshold $T$ that maximizes between-class variance $\\sigma_B^2(T) = \\omega_0 \\omega_1 (\\mu_0 - \\mu_1)^2$, effectively separating foreground from background.'
  },
  {
    id: 'cv-q20',
    topicId: 'cv_robotics',
    category: 'Robot Kinematics',
    question: 'In robotics URDF (Unified Robot Description Format) XML models, what are the primary elements used to define robot physical geometry and articulation?',
    options: [
      '<link> elements (defining mass, inertia, visual and collision geometry) and <joint> elements (defining kinematic parent-child connections and rotation/translation axes).',
      '<server> and <client> tags.',
      '<html_canvas> and <css_style> tags.',
      '<python_script> and <ros_node> tags.'
    ],
    correctAnswer: 0,
    explanation: 'URDF XML defines robots using <link> tags (rigid body links with visual meshes, collision bounds, and mass/inertia tensors) connected by <joint> tags (revolute, continuous, prismatic, or fixed joints).'
  }
];
