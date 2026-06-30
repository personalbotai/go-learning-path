# Fungsi Dasar

Di Go, fungsi adalah "first-class citizen". Anda dapat menggunakannya dengan sangat fleksibel. Standar industri di Go sangat bergantung pada fitur **Multiple Return Values**, di mana sebuah fungsi bisa mengembalikan lebih dari satu nilai (biasanya nilai hasil dan error).

## 1. Deklarasi Dasar
Tipe data argumen ditulis **setelah** nama variabel, dan tipe pengembalian (return) ditulis di akhir.
```go
func add(x int, y int) int {
    return x + y
}
```

## 2. Multiple Return Values
Ini adalah pola paling sering muncul di Go. Biasanya digunakan untuk mengembalikan data dan `error`.
```go
func getUser(id int) (string, error) {
    if id == 1 {
        return "Archon", nil
    }
    return "", errors.New("User not found")
}
```

## 3. Named Return Values
Anda bisa memberi nama pada nilai yang dikembalikan. Ini berfungsi ganda sebagai deklarasi variabel lokal dan dokumentasi. Sangat berguna untuk fungsi yang kompleks.
```go
func rectangleProps(length, width float64) (area float64, perimeter float64) {
    area = length * width
    perimeter = 2 * (length + width)
    return // "Naked return": otomatis mengembalikan area dan perimeter
}
```
*Catatan:* "Naked return" bisa mengurangi kejelasan pada fungsi yang panjang, jadi gunakan dengan bijak.
