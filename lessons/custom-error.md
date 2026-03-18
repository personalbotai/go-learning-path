# Custom Error

**ID**: `custom-error`
**Duration**: 20-25 menit

## Materi

### Penjelasan
Custom Error adalah konsep penting dalam Go untuk pengembangan aplikasi modern.

### Contoh Kode
```go
package main
import ("fmt"; "errors")

func bagi(a, b float64) (float64, error) {
    if b == 0 {
        return 0, errors.New("div by zero")
    }
    return a / b, nil
}

func main() {
    hasil, err := bagi(10, 0)
    if err != nil {
        fmt.Println("Error:", err)
    } else {
        fmt.Println(hasil)
    }
}
```

### Praktik
Buat program Go yang menggunakan custom error.

## Rangkuman
- Praktikkan custom error dengan kode
- Referensi: go.dev/doc
