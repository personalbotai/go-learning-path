# Struct

**ID**: `struct`
**Duration**: 20-25 menit

## Materi

### Penjelasan
Struct adalah konsep penting dalam Go untuk pengembangan aplikasi modern.

### Contoh Kode
```go
package main
import "fmt"

type User struct {
    Nama string
    Umur int
}

func (u User) Sapa() string {
    return fmt.Sprintf("Halo, %s!", u.Nama)
}

func main() {
    u := User{Nama: "Archon", Umur: 25}
    fmt.Println(u.Sapa())
}
```

### Praktik
Buat program Go yang menggunakan struct.

## Rangkuman
- Praktikkan struct dengan kode
- Referensi: go.dev/doc
