# Channel

**ID**: `channel`
**Duration**: 20-25 menit

## Materi

### Penjelasan
Channel adalah konsep penting dalam Go untuk pengembangan aplikasi modern.

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
Buat program Go yang menggunakan channel.

## Rangkuman
- Praktikkan channel dengan kode
- Referensi: go.dev/doc
