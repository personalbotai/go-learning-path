# Reflection Dasar

**ID**: `reflection-dasar`
**Duration**: 20-25 menit

## Materi

### Penjelasan
Reflection Dasar adalah konsep penting dalam Go untuk pengembangan aplikasi modern.

### Contoh Kode
```go
package main
import ("fmt"; "os")

func main() {
    err := os.WriteFile("test.txt", []byte("Hello Go!"), 0644)
    if err != nil { fmt.Println(err); return }
    
    data, err := os.ReadFile("test.txt")
    if err != nil { fmt.Println(err); return }
    fmt.Println(string(data))
}
```

### Praktik
Buat program Go yang menggunakan reflection dasar.

## Rangkuman
- Praktikkan reflection dasar dengan kode
- Referensi: go.dev/doc
