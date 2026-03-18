# Map Dan Key Value

**ID**: `map-dan-key-value`
**Duration**: 20-25 menit

## Materi

### Penjelasan
Map Dan Key Value adalah konsep penting dalam Go untuk pengembangan aplikasi modern.

### Contoh Kode
```go
package main
import "fmt"

func main() {
    m := map[string]int{
        "alice": 25,
        "bob": 30,
    }
    m["charlie"] = 35
    fmt.Println(m["alice"])
    fmt.Println(len(m))
}
```

### Praktik
Buat program Go yang menggunakan map dan key value.

## Rangkuman
- Praktikkan map dan key value dengan kode
- Referensi: go.dev/doc
