# Channel Dasar

**ID**: `channel-dasar`
**Duration**: 20-25 menit

## Materi

### Penjelasan
Channel Dasar adalah konsep penting dalam Go untuk pengembangan aplikasi modern.

### Contoh Kode
```go
package main
import "fmt"

func main() {
    ch := make(chan string)
    go func() { ch <- "data dari goroutine" }()
    msg := <-ch
    fmt.Println(msg)
}
```

### Praktik
Buat program Go yang menggunakan channel dasar.

## Rangkuman
- Praktikkan channel dasar dengan kode
- Referensi: go.dev/doc
