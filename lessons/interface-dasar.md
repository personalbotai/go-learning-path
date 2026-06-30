# Interface Dasar

Interface di Go sangat istimewa. Tidak seperti Java atau C#, Anda **TIDAK PERLU** menyatakan secara eksplisit bahwa sebuah tipe mengimplementasikan suatu interface (tidak ada kata kunci `implements`).
Ini disebut **Implicit Satisfaction** atau *Duck Typing* ("Jika dia berjalan seperti bebek, berenang seperti bebek, dan bersuara seperti bebek, maka dia adalah bebek").

## Mendefinisikan Interface
Interface hanyalah sekumpulan tanda tangan method (nama fungsi, argumen, dan return value).
```go
type Logger interface {
    Log(message string)
}
```

## Keunggulan Interface di Industri
Interface adalah fondasi **Clean Architecture** dan *Unit Testing* di Go.
Dengan menerima `interface` sebagai parameter fungsi (bukan `struct` konkret), Anda bisa dengan mudah memasukkan objek *Mock* / *Fake* saat melakukan *testing* (TDD) tanpa menyentuh database atau API eksternal sungguhan.

## Interface Kosong (`interface{}`) atau `any`
Jika sebuah interface tidak mewajibkan *method* apa pun, maka **semua tipe data** (int, string, struct) akan dianggap "mengimplementasikan" interface kosong tersebut.
Sejak Go 1.18, `interface{}` memiliki alias baru yang lebih mudah dibaca yaitu **`any`**.
```go
func printSesuatu(data any) {
    // fungsi ini bisa menerima apa saja!
}
```
*Catatan Standar Industri:* Penggunaan `any` harus diminimalkan. Go adalah bahasa statis, memakai `any` menghilangkan keamanan pengetikan tipe (*type safety*). Gunakan *Generics* jika memungkinkan.
