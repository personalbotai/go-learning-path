# Operator dan Ekspresi

Go memiliki operator standar yang mirip dengan bahasa turunan C (C++, Java, JavaScript), dengan beberapa perbedaan penting agar lebih aman dan tidak ambigu.

## 1. Operator Aritmatika
Operator matematika dasar: `+`, `-`, `*`, `/`, `%` (modulus).

## 2. Operator Perbandingan (Relasional)
Digunakan untuk membandingkan dua nilai dan selalu menghasilkan `bool` (`true` atau `false`):
`==`, `!=`, `<`, `>`, `<=`, `>=`

## 3. Operator Logika
Digunakan untuk kondisi majemuk:
- `&&` (AND)
- `||` (OR)
- `!` (NOT)

## Perbedaan Penting di Go (Standar Industri)

Di banyak bahasa seperti C atau JavaScript, operasi inkremen `++` dan dekremen `--` adalah sebuah *ekspresi* (bisa dimasukkan ke dalam variabel atau parameter operasi lain).

Di Go, **`++` dan `--` adalah sebuah *statement* (pernyataan), BUKAN *ekspresi*.** 
Anda **TIDAK** bisa melakukan ini di Go:
```go
// INI ERROR DI GO!
a := 1
b := a++ // Syntax error
```
Anda harus menulisnya dalam baris terpisah. Ini menghilangkan kebingungan umum yang sering terjadi di C/C++ terkait urutan evaluasi eksekusi.
