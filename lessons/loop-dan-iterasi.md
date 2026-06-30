# Loop dan Iterasi

Di Go, satu-satunya kata kunci untuk melakukan perulangan adalah **`for`**. Go tidak memiliki `while` atau `do-while`. Keputusan desain ini membuat bahasa Go menjadi sangat ringkas dan sederhana.

## 1. For Loop Tradisional
Mirip dengan bahasa C, menggunakan init; condition; post.
```go
for i := 0; i < 5; i++ {
    fmt.Println(i)
}
```

## 2. "While" Loop di Go
Jika Anda menghilangkan statemen `init` dan `post`, `for` loop di Go bertingkah persis seperti `while` di bahasa lain.
```go
counter := 0
for counter < 3 {
    fmt.Println(counter)
    counter++
}
```

## 3. Infinite Loop (Perulangan Tak Terbatas)
Untuk membuat proses yang terus berjalan (seperti *background worker* atau *HTTP Server* yang mendengarkan *request*), hilangkan seluruh kondisinya:
```go
for {
    // akan berjalan selamanya, gunakan 'break' untuk berhenti
}
```

## 4. For-Range Loop (Standar Industri)
Ini adalah bentuk loop yang paling banyak dipakai dalam *development* Go sehari-hari. `range` digunakan untuk mengiterasi *array*, *slice*, *map*, atau *channel*. `range` mengembalikan dua nilai: **index** (atau key) dan **value**.
