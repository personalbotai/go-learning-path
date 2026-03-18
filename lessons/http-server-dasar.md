# Http Server Dasar

**ID**: `http-server-dasar`
**Duration**: 20-25 menit

## Materi

### Penjelasan
Http Server Dasar adalah konsep penting dalam Go untuk pengembangan aplikasi modern.

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
Buat program Go yang menggunakan http server dasar.

## Rangkuman
- Praktikkan http server dasar dengan kode
- Referensi: go.dev/doc
