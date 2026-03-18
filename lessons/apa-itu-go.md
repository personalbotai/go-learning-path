## Tujuan Pembelajaran

 
- Memahami sejarah, filosofi, dan keunggulan bahasa pemrograman Go.

 
 
 
## Materi

 **Go** (juga dikenal sebagai *Golang*) adalah bahasa pemrograman open-source yang dikembangkan oleh Google pada tahun 2007 dan dirilis secara publik pada tahun 2009. Go dirancang oleh **Robert Griesemer**, **Rob Pike**, dan **Ken Thompson** — tiga tokoh legendaris di dunia pemrograman.

### Mengapa Go Dibuat?

Go lahir dari frustrasi terhadap kompleksitas C++ dan Java di Google. Para pencipta Go menginginkan bahasa yang:

- **Sederhana** — Mudah dipelajari dan dibaca

- **Cepat** — Kompilasi ke native code, secepat C/C++

- **Concurrency built-in** — Goroutine dan channel sebagai fitur utama

- **Memory safe** — Garbage collection, tidak ada pointer arithmetic

- **Statically typed** — Type checking saat kompilasi

### Filosofi Go

Go mengusung prinsip **"Less is more"**. Bahasa ini sengaja dibuat minimalis — tidak ada class, inheritance, generics (sampai Go 1.18), dan fitur kompleks lainnya. Tujuannya: kode yang mudah dibaca, dipelihara, dan di-debug.

### Siapa yang Menggunakan Go?

- **Docker** — Container runtime

- **Kubernetes** — Container orchestration

- **Terraform** — Infrastructure as code

- **Uber, Netflix, Spotify** — Backend services

- **Cloudflare, Dropbox** — Infrastructure

### Go vs Bahasa Lain

```
// Python (interpreted, dynamic)
def hello():
 print("Hello, World!")

// Java (JVM, verbose)
public class Hello {
 public static void main(String[] args) {
 System.out.println("Hello, World!");
 }
}

// Go (compiled, simple)
package main
import "fmt"
func main() {
 fmt.Println("Hello, World!")
}
```

### Keunggulan Go

- **Compile time cepat** — Proyek besar dikompilasi dalam hitungan detik

- **Goroutine** — Concurrent programming mudah dan efisien (hanya ~2KB memory per goroutine)

- **Single binary** — Deploy cukup satu file executable, tanpa dependency

- **Standard library lengkap** — HTTP server, JSON, testing, crypto, semua built-in

- **Go modules** — Dependency management modern

 
 
 
## Rangkuman

 Modul ini membahas apa itu go? dalam Go. Praktikkan dengan membuat kode sendiri.

 
 
 ← Kembali