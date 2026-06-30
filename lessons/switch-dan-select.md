# Switch dan Select

## 1. Switch Statement
Sama seperti `for`, Go meningkatkan fitur `switch` agar lebih aman dari *bug* umum yang sering terjadi di bahasa pemrograman klasik.

**Keunggulan Switch di Go:**
1. **TIDAK ada *implicit fallthrough*.** Di C atau Java, jika Anda lupa menulis `break`, kode akan bocor mengeksekusi *case* di bawahnya (fallthrough). Di Go, `break` sudah otomatis diimplementasikan secara internal. (Jika Anda benar-benar butuh fallthrough, Anda harus menulis kata kunci `fallthrough` secara eksplisit).
2. **Kondisi multi-nilai.** Satu `case` dapat memiliki beberapa nilai yang dipisahkan dengan koma.
3. **Switch tanpa kondisi.** Berguna sebagai pengganti deretan `if-else` yang panjang.

```go
switch os := runtime.GOOS; os {
case "darwin", "linux":
    fmt.Println("Unix-like system")
default:
    fmt.Println("Other system")
}
```

## 2. Select Statement
Ini adalah fitur *killer* Go untuk *concurrency*. `select` secara eksklusif beroperasi dengan **Channel**.
Sintaksnya mirip `switch`, tetapi fungsinya adalah **menunggu operasi channel yang siap**. Ini adalah tulang punggung (*backbone*) dari aplikasi *microservice* yang efisien dan *timeout handling* di Go. (Kita akan mempelajari ini lebih detail di modul Goroutine & Channel).
