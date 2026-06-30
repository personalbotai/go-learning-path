# Goroutine Dasar

*Concurrency* (konkurensi) adalah fitur bintang utama di Go. Go tidak menggunakan *Thread OS* (*Operating System Thread*) secara langsung, melainkan menggunakan **Goroutine**.

## Apa itu Goroutine?
Goroutine adalah *"Lightweight Thread"* (thread yang sangat ringan) yang dikelola oleh *runtime* Go (bukan oleh OS).
1. **Sangat Ringan**: Ukuran awalnya hanya ~2KB memori (sedangkan Thread Java/C++ memakan ~1MB).
2. **Murah**: Anda bisa menyalakan ratusan ribu *Goroutine* di laptop biasa tanpa *lag*.
3. **Fleksibel**: Goroutine bisa bertumbuh/menyusut ukuran memorinya secara otomatis.

## Cara Menggunakan
Cukup tambahkan kata kunci `go` di depan pemanggilan fungsi.
```go
go jalankanProsesBerat()
```
Fungsi `jalankanProsesBerat()` sekarang akan dieksekusi di *background*, dan program Anda akan langsung lanjut ke baris berikutnya tanpa menunggu fungsi itu selesai.

## Waspada! (The Main Goroutine)
Fungsi `main()` di Go adalah sebuah Goroutine utama. **Jika fungsi `main()` selesai, semua Goroutine lain yang masih berjalan di latar belakang akan otomatis dibunuh paksa!**
Itu sebabnya Anda harus menggunakan teknik sinkronisasi (seperti `sync.WaitGroup` atau *Channel*) untuk memastikan `main()` menunggu semua Goroutine selesai.
