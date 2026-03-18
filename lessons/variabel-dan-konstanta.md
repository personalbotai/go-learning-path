## Tujuan Pembelajaran

 
- Memahami deklarasi variabel, konstanta, dan zero values dalam Go.

 
 
 
## Materi

 Go adalah bahasa **statically typed** — tipe data ditentukan saat kompilasi.

### Deklarasi Variabel

```
// Cara 1: var keyword dengan tipe eksplisit
var nama string = "Archon"
var umur int = 25
var aktif bool = true

// Cara 2: var tanpa nilai (zero value)
var kota string // "" (empty string)
var skor int // 0
var aktif bool // false

// Cara 3: Short declaration (:=) — paling populer
nama := "Archon"
umur := 25
tinggi := 175.5

// Cara 4: Multiple declaration
var (
 nama = "Archon"
 umur = 25
 aktif = true
)
```

### Zero Values

Go memberikan *zero value* default untuk semua variabel yang tidak diinisialisasi:

```
// Numeric types → 0
var a int // 0
var b float64 // 0.0

// Boolean → false
var c bool // false

// String → ""
var d string // ""

// Pointer, slice, map, channel, function, interface → nil
var e *int // nil
var f []int // nil
```

### Konstanta

```
// Konstanta tunggal
const PI = 3.14159
const AppName = "MyApp"

// Multiple konstanta
const (
 StatusOK = 200
 StatusNotFound = 404
 StatusError = 500
)

// iota — auto incrementing counter
const (
 Minggu = iota // 0
 Senin // 1
 Selasa // 2
 Rabu // 3
 Kamis // 4
 Jumat // 5
 Sabtu // 6
)
```

### Type Conversions

```
// Go TIDAK melakukan implicit conversion
var a int = 42
var b float64 = float64(a) // Harus eksplisit
var c int = int(b) // 42

// String ↔ Number
str := strconv.Itoa(42) // "42"
num, _ := strconv.Atoi("42") // 42
```

### Best Practices

- Gunakan `:=` untuk deklarasi lokal singkat

- Gunakan `var` untuk deklarasi package-level

- Nama variabel menggunakan `camelCase`

- Nama konstanta menggunakan `PascalCase` atau `camelCase`

 
 
 
## Rangkuman

 Modul ini membahas variabel dan konstanta dalam Go. Praktikkan dengan membuat kode sendiri.

 
 
 ← Kembali