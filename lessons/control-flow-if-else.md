# Control Flow: If dan Else

Percabangan di Go menggunakan `if`, `else if`, dan `else`. Sintaksnya mirip dengan C atau Java, tetapi ada perbedaan mencolok: **Go tidak menggunakan tanda kurung `()`** mengelilingi kondisinya.

```go
if score >= 80 {
    fmt.Println("Lulus")
} else {
    fmt.Println("Belum Lulus")
}
```
*Catatan:* Kurung kurawal `{ }` adalah wajib, bahkan jika isinya hanya satu baris kode. Ini memaksakan format kode yang seragam (dijaga oleh `gofmt`).

## Idiom Go: If dengan Initialization Statement

Fitur *control flow* Go yang paling sering digunakan dalam pengembangan software profesional adalah kemampuan mengeksekusi *statement* inisialisasi pendek tepat sebelum evaluasi kondisi.

```go
if err := processData(); err != nil {
    // Tangani error
    return err
}
// Variabel 'err' tidak lagi ada di luar scope if ini!
```
**Kenapa ini penting?**
Ini membatasi ruang lingkup (*scope*) variabel pembantu (seperti `err` atau hasil komputasi sementara) hanya ke dalam blok `if` tersebut. Ini menjaga kode tetap bersih, mencegah tabrakan nama variabel, dan mengurangi *memory footprint*.

Lihat contoh di samping untuk melihat bagaimana hal ini diterapkan!
