# Array dan Slice

Di Go, pemahaman tentang **Array** dan **Slice** sangat krusial karena berkaitan langsung dengan cara Go menangani memori (stack vs heap).

## 1. Array (Statis & Fixed)
Array memiliki panjang yang tetap dan tidak bisa diubah setelah dibuat.
```go
var primes [5]int = [5]int{2, 3, 5, 7, 11}
```
Di industri, Array mentah jarang digunakan secara langsung. Array biasanya hanya bertindak sebagai struktur data di balik layar (Backing Array) untuk Slice.

## 2. Slice (Dinamis & Fleksibel)
Slice adalah lapisan fleksibel di atas Array. Anda bisa menambah elemennya (menggunakan `append`). Ini adalah tipe data urutan standar yang digunakan 99% dalam pemrograman Go.

**Anatomi Slice:**
Slice memiliki 3 komponen internal:
1. **Pointer**: Menunjuk ke indeks Array asli di memori.
2. **Length (len)**: Jumlah elemen yang saat ini ada di slice.
3. **Capacity (cap)**: Kapasitas maksimal array di belakang slice.

```go
// Membuat slice kosong dengan make (Sangat disarankan untuk optimasi performa)
// Panjang awal 0, kapasitas awal 5
users := make([]string, 0, 5) 
```

**Perhatian (Memory Leak Trap):**
Jika Anda membuat sebuah slice kecil dari slice yang sangat besar (misal: `bigSlice[:10]`), *Backing Array* asli tidak akan dihapus oleh *Garbage Collector* karena slice kecil masih memegang pointernya! Selalu gunakan `copy()` jika butuh sebagian kecil memori dan ingin melepaskan sisanya.
