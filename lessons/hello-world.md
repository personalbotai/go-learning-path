## Tujuan Pembelajaran

 
- Menulis program Go pertama, memahami struktur dasar program Go, dan mengompilasi serta menjalankan program.

 
 
 
## Materi

 Mari kita tulis program Go pertama dan pahami struktur dasarnya.

### Membuat Proyek

```
mkdir hello-go && cd hello-go
go mod init hello-go
```

### File main.go

```
package main

import "fmt"

func main() {
 fmt.Println("Hello, World!")
}
```

### Menjalankan Program

```
# Cara 1: go run (langsung execute)
go run main.go
# Output: Hello, World!

# Cara 2: go build (compile ke binary)
go build -o hello
./hello
# Output: Hello, World!
```

### Memahami Struktur Program

```
// 1. Package declaration - WAJIB di baris pertama
// Setiap file Go harus deklarasi package
package main

// 2. Import statement - import packages yang dibutuhkan
import (
 "fmt" // Format I/O (print, scan, etc.)
 "os" // OS interaction
)

// 3. Function main() - entry point program
// Hanya package main yang punya fungsi main()
func main() {
 fmt.Println("Hello, World!")
}
```

### Multiple Files

```
// main.go
package main
import "fmt"

func main() {
 greet()
 fmt.Println(add(3, 5))
}

// helpers.go (dalam package yang sama)
package main
import "fmt"

func greet() {
 fmt.Println("Selamat datang!")
}

func add(a, b int) int {
 return a + b
}
```

### Key Points

- `package main` menandakan executable program (bukan library)

- `func main()` adalah entry point

- Go menggunakan **explicit imports** — harus import setiap package yang digunakan

- Go tidak mengizinkan unused imports — akan error saat kompilasi

 
 
 
## Rangkuman

 Modul ini membahas hello world: program pertama dalam Go. Praktikkan dengan membuat kode sendiri.

 
 
 ← Kembali