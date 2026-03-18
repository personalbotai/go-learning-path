## Tujuan Pembelajaran

 
- Memahami tipe data dasar Go: integer, float, string, boolean, dan type aliases.

 
 
 
## Materi

 Go menyediakan tipe data dasar yang kuat dan efisien.

### Numeric Types

```
// Signed integers
var a int8 // -128 to 127
var b int16 // -32768 to 32767
var c int32 // ±2 billion
var d int64 // ±9 quintillion
var e int // Platform-dependent (32 atau 64 bit)

// Unsigned integers
var f uint8 // 0 to 255 (byte)
var g uint16 // 0 to 65535
var h uint32 // 0 to 4 billion
var i uint64 // 0 to 18 quintillion

// Floating point
var j float32 // ~6 digit precision
var k float64 // ~15 digit precision (default)

// Complex numbers
var l complex64 // float32 + float32
var m complex128 // float64 + float64

// Alias types
var n byte // alias for uint8
var o rune // alias for int32 (Unicode code point)
```

### String Type

```
// String adalah immutable sequence of bytes
s1 := "Halo, Dunia!"
s2 := "Archon 🏛️"

// Multi-line string
s3 := `Ini string
multi-line
tanpa perlu escape`

// String operations
panjang := len(s1) // Panjang dalam bytes
gabung := s1 + " " + s2 // Concatenation
cek := strings.Contains(s1, "Dunia") // true

// Akses karakter
char := s1[0] // 'H' (byte)
rune := rune(s1[0]) // 72 (int32)
```

### Boolean

```
var aktif bool = true
var selesai bool = false

// Logical operators
result := aktif && !selesai // true
result2 := aktif || selesai // true
```

### Constants dan Literals

```
// Integer literals
decimal := 42
binary := 0b1010
octal := 0o52
hex := 0x2A

// Float literals
pi := 3.14159
scientific := 1.5e10

// Underscore untuk readability
million := 1_000_000
```

 
 
 
## Rangkuman

 Modul ini membahas tipe data dasar dalam Go. Praktikkan dengan membuat kode sendiri.

 
 
 ← Kembali