# Rest Api Project

**ID**: `rest-api-project`
**Duration**: 20-25 menit

## Materi

### Penjelasan
Rest Api Project adalah konsep penting dalam Go untuk pengembangan aplikasi modern.

### Contoh Kode
```go
package main
import ("fmt"; "net/http")

func handler(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintf(w, "Hello, %s!", r.URL.Path[1:])
}

func main() {
    http.HandleFunc("/", handler)
    fmt.Println("Server starting...")
    http.ListenAndServe(":8080", nil)
}
```

### Praktik
Buat program Go yang menggunakan rest api project.

## Rangkuman
- Praktikkan rest api project dengan kode
- Referensi: go.dev/doc
