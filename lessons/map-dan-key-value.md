# Map (Key-Value)

`map` adalah struktur data *hash table* di Go yang digunakan untuk menyimpan pasangan *key-value*. Map tidak memiliki urutan (*unordered*).

## Inisialisasi Map
Jangan pernah menulis ke map yang belum diinisialisasi (bernilai `nil`), hal tersebut akan menyebabkan program *panic*. Gunakan `make`!

```go
// BENAR: Menggunakan make
configs := make(map[string]string)
configs["env"] = "production"

// BENAR: Menggunakan literal
ports := map[string]int{
    "http": 80,
    "https": 443,
}
```

## Memeriksa Keberadaan Kunci (The "ok" Idiom)
Bagaimana membedakan apakah kunci "admin" bernilai kosong, atau kunci "admin" memang tidak ada di map? Gunakan dua variabel kembalian:

```go
value, isExist := users["admin"]
if isExist {
    fmt.Println("User ditemukan:", value)
}
```

## Catatan Standar Industri (Concurrency)
**Map standar di Go TIDAK *Thread-Safe* (Aman digunakan secara konkuren).**
Jika Anda memiliki beberapa *Goroutine* yang membaca dan menulis ke map yang sama secara bersamaan, aplikasi Anda akan *crash* dengan error `fatal error: concurrent map writes`. 
Solusinya: Gunakan `sync.RWMutex` untuk mengunci map saat menulis, atau gunakan tipe `sync.Map` dari pustaka standar.
