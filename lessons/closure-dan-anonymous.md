# Closure dan Anonymous Functions

Karena fungsi di Go adalah *first-class citizen*, Anda bisa:
1. Menyimpan fungsi dalam variabel.
2. Mengirim fungsi sebagai argumen ke fungsi lain.
3. Mengembalikan fungsi dari sebuah fungsi.

## Anonymous Function (Fungsi Tanpa Nama)
Sering digunakan saat membuat *goroutine* secara *inline* atau mengeksekusi operasi `defer`.
```go
func() {
    fmt.Println("Dieksekusi langsung!")
}()
```

## Closures
*Closure* adalah *anonymous function* yang merujuk pada variabel yang dideklarasikan di luar tubuh fungsinya. Fungsi ini bisa mengakses dan mengubah nilai variabel tersebut, menciptakan keadaan (*state*) internal.
Pola ini sangat sering dipakai dalam **HTTP Middleware** di Go.

```go
func sequence() func() int {
    i := 0
    return func() int {
        i++
        return i
    }
}
```
Setiap kali fungsi kembalian dari `sequence()` dipanggil, nilai `i` akan bertambah, dan ia "mengingat" nilai sebelumnya!
