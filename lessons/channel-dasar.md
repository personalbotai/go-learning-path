# Channel Dasar

Jika Goroutine adalah pekerjanya, maka **Channel** adalah pipa komunikasinya.

*"Do not communicate by sharing memory; instead, share memory by communicating."* - (Filosofi Go)
Artinya: Jangan biarkan dua *Goroutine* bertengkar berebut memodifikasi sebuah variabel global. Alih-alih, lemparlah data lewat *channel*.

## Membuat Channel
Seperti map atau slice, Anda wajib membuat channel menggunakan `make()`. Tentukan juga tipe data apa yang boleh lewat di pipa tersebut.
```go
// Channel yang hanya bisa menerima data string
messages := make(chan string)
```

## Mengirim & Menerima
Go menggunakan operator unik `<-` (panah menunjuk ke arah aliran data).
```go
// MENGIRIM data "Ping" KE DALAM channel
messages <- "Ping" 

// MENERIMA data DARI channel, menyimpannya di variabel msg
msg := <-messages
```

## Blocking Nature (Sifat Memblokir)
Karakteristik terpenting *channel*:
1. Saat Goroutine A mengirim data, Goroutine A akan **berhenti (*block*)** sampai ada Goroutine B yang siap menerima.
2. Saat Goroutine B mencoba menerima data, Goroutine B akan **berhenti (*block*)** sampai ada Goroutine A yang mengirimkan.

Ini memastikan **sinkronisasi otomatis** tanpa perlu menggunakan kunci manual (*mutex*), menghilangkan risiko tumpang tindih (*race conditions*).
