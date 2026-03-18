# Map

**ID**: `map`
**Duration**: 20-25 menit

## Materi

### Penjelasan
Map adalah konsep penting dalam Go untuk pengembangan aplikasi modern.

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
Buat program Go yang menggunakan map.

## Rangkuman
- Praktikkan map dengan kode
- Referensi: go.dev/doc
