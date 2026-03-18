# Array Dan Slice

**ID**: `array-dan-slice`
**Duration**: 20-25 menit

## Materi

### Penjelasan
Array Dan Slice adalah konsep penting dalam Go untuk pengembangan aplikasi modern.

### Contoh Kode
```go
package main
import "fmt"

func main() {
    s := []int{1, 2, 3, 4, 5}
    s = append(s, 6)
    fmt.Println(s)
    fmt.Println(s[1:3])
    fmt.Println(len(s))
}
```

### Praktik
Buat program Go yang menggunakan array dan slice.

## Rangkuman
- Praktikkan array dan slice dengan kode
- Referensi: go.dev/doc
