# Interface Dasar

**ID**: `interface-dasar`
**Duration**: 20-25 menit

## Materi

### Penjelasan
Interface Dasar adalah konsep penting dalam Go untuk pengembangan aplikasi modern.

### Contoh Kode
```go
package main
import "fmt"

type Shape interface {
    Area() float64
}

type Circle struct { R float64 }
func (c Circle) Area() float64 { return 3.14 * c.R * c.R }

func main() {
    var s Shape = Circle{R: 5}
    fmt.Println(s.Area())
}
```

### Praktik
Buat program Go yang menggunakan interface dasar.

## Rangkuman
- Praktikkan interface dasar dengan kode
- Referensi: go.dev/doc
