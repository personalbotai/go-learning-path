## Tujuan Pembelajaran

 
- Memahami goroutine untuk concurrent programming dalam Go.

 
 
 
## Materi

 **Goroutine** adalah fitur terkuat Go — lightweight thread yang dikelola oleh Go runtime. Goroutine hanya ~2KB memory (vs ~1MB OS thread).

### Membuat Goroutine

```
// Tambahkan 'go' sebelum fungsi call
go sapa() // Menjalankan sapa() di goroutine baru

// Anonymous goroutine
go func() {
 fmt.Println("Berjalan di goroutine!")
}()

// Goroutine dengan delay
go func() {
 time.Sleep(time.Second)
 fmt.Println("Selesai setelah 1 detik")
}()
```

### Contoh Concurrent

```
func main() {
 // Sequential (lambat)
 // download("file1.zip") // 3 detik
 // download("file2.zip") // 3 detik
 // download("file3.zip") // 3 detik
 // Total: 9 detik

 // Concurrent (cepat!)
 go download("file1.zip")
 go download("file2.zip")
 go download("file3.zip")
 // Total: ~3 detik!
 
 time.Sleep(5 * time.Second) // Tunggu selesai (cara buruk, lihat WaitGroup)
}

func download(file string) {
 fmt.Printf("Downloading %s...
", file)
 time.Sleep(3 * time.Second)
 fmt.Printf("%s done!
", file)
}
```

### WaitGroup

```
import "sync"

func main() {
 var wg sync.WaitGroup
 
 for i := 1; i 
FeatureOS ThreadGoroutine
Memory~1MB~2KB
CreationSlow (OS call)Fast (Go runtime)
Context switchSlowFast
SchedulingOS kernelGo scheduler (M:N)

### Tips

- Jangan gunakan `time.Sleep()` untuk sinkronisasi — gunakan WaitGroup atau Channel

- Hati-hati dengan race condition — gunakan Mutex atau Channel

- Goroutine bisa membuat goroutine (nested)

- Go scheduler menggunakan M:N model (many goroutine : few OS threads)

 
 
 
## Rangkuman

 Modul ini membahas goroutine: concurrent execution dalam Go. Praktikkan dengan membuat kode sendiri.

 
 
 ← Kembali