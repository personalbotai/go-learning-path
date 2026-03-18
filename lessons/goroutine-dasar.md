# Goroutine Dasar

**ID**: `goroutine-dasar`
**Duration**: 20-25 menit

## Materi

### Penjelasan
Goroutine Dasar adalah konsep penting dalam Go untuk pengembangan aplikasi modern.

### Contoh Kode
```go
package main
import ("fmt"; "sync")

func worker(id int, wg *sync.WaitGroup) {
    defer wg.Done()
    fmt.Printf("Worker %d selesai\n", id)
}

func main() {
    var wg sync.WaitGroup
    for i := 1; i <= 3; i++ {
        wg.Add(1)
        go worker(i, &wg)
    }
    wg.Wait()
    fmt.Println("Semua selesai!")
}
```

### Praktik
Buat program Go yang menggunakan goroutine dasar.

## Rangkuman
- Praktikkan goroutine dasar dengan kode
- Referensi: go.dev/doc
