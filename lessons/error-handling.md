# Error Handling

Go tidak memiliki *Exception* (seperti `try-catch` di Java/Python/JS). 
Filosofi Go menganggap **error adalah sekadar nilai biasa**. Error harus ditangani di mana ia terjadi. Ini memaksa developer memikirkan setiap kemungkinan kegagalan *flow* aplikasi, menghasilkan *software* yang sangat tangguh (*resilient*).

## Interface Error
Dalam bahasa Go, `error` pada dasarnya adalah antarmuka sederhana dengan satu fungsi bawaan:
```go
type error interface {
    Error() string
}
```

## Pola Dasar (Standar Industri)
Ini adalah pola yang akan Anda lihat di setiap baris kode Go profesional:
```go
file, err := os.Open("config.json")
if err != nil {
    // Tangani error secara eksplisit (misal: log, return ke fungsi parent, dll)
    return fmt.Errorf("gagal membuka config: %w", err)
}
// Jika berhasil, lanjut operasi
```

## Error Wrapping (Go 1.13+)
Di aplikasi skala besar, error bisa terjadi di lapisan paling bawah (database), tapi Anda ingin memberikan informasi tambahan di lapisan atas (API/HTTP layer). Gunakan **`%w` (wrap)**.
```go
fmt.Errorf("gagal memproses user id %d: %w", id, errDatabase)
```
Nantinya, Anda bisa mengekstrak atau memeriksa jenis error aslinya menggunakan fungsi canggih `errors.Is()` dan `errors.As()`.
