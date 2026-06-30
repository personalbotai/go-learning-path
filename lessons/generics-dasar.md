# Generics Dasar

**ID**: `generics-dasar`
**Duration**: 20-30 menit

## Materi

### Penjelasan
Materi tentang **Generics Dasar** dalam bahasa pemrograman Go. Konsep ini adalah salah satu fondasi penting saat Anda mulai mengembangkan aplikasi dari tahap *beginner* ke level *production-grade*.

Go didesain untuk kesederhanaan dan kejelasan, dan fitur terkait `Generics Dasar` direkayasa sedemikian rupa agar sangat performan dengan *overhead* memori dan eksekusi serendah mungkin dibandingkan dengan implementasi di bahasa *scripting* konvensional.

### Panduan Teknis & Best Practice
1. **Pemahaman Fundamental**: Selalu pastikan Anda menguji dampak performa (menggunakan benchmark bawaan Go `go test -bench`) jika operasi ini dilakukan dalam loop jutaan data (hot path).
2. **Safety Guidelines**: Hati-hati dengan tipe *pointer*, penguncian (*locking* pada concurrency), dan *memory leaks* (seperti lupa menutup `response.Body` pada request HTTP atau channel yang terbuka selamanya).
3. **Idiomatic Go**: Tulis struktur kode Anda agar *idiomatic*, menggunakan *Go-way*, bukan *Java-way* atau *Python-way*. Contohnya adalah sering me-return (mengembalikan) *error* sebagai *value* kedua dari fungsi daripada menggunakan *exception handling* try/catch.

### Contoh Kode Umum
```go
package main

import "fmt"

func main() {
    fmt.Println("Ini adalah demonstrasi materi: Generics Dasar")
    // TODO: Implementasi logika Generics Dasar di sini
}
```

### Praktik
Buatlah sebuah *package* mandiri (standalone package) Go, eksplorasi bagaimana Generics Dasar berjalan. Buat sebuah modul fungsional yang menyertakan penanganan *error* yang baik.

## Rangkuman
- Tulis kode Go yang "idiomatik".
- Prioritaskan *Clean Code* namun tetap peka terhadap alokasi memori.
- Referensi resmi: [Golang Official Documentation](https://go.dev/doc/effective_go)
