# Struct dan Method

Go **bukan** bahasa berbasis objek (OOP) klasik. Tidak ada `class`, tidak ada *inheritance* (`extends`). Sebagai gantinya, Go menggunakan **Struct** dan **Composition**.

## 1. Mendeklarasikan Struct
Struct adalah koleksi variabel (disebut *field*) yang dikelompokkan menjadi satu.
```go
type User struct {
    ID       int
    Username string
    IsActive bool
}
```
*Catatan:* Jika nama Field diawali huruf KAPITAL (misal `Username`), ia bersifat **Public** (dapat diakses package luar). Jika diawali huruf kecil, ia **Private** (hanya bisa diakses di package yang sama).

## 2. Method
Anda bisa menempelkan fungsi ke sebuah struct. Ini disebut Method. Fungsi tersebut memiliki **Receiver** khusus.

**Value Receiver vs Pointer Receiver (Standar Industri)**
*   **Value Receiver**: Mengkopi seluruh data struct ke fungsi. Digunakan jika struct hanya untuk dibaca (*read-only*) dan ukurannya kecil.
*   **Pointer Receiver (`*User`)**: Me-referensi memori aslinya. **Wajib digunakan jika Anda ingin mengubah/memodifikasi properti struct dari dalam method.** 

Secara umum di industri, menggunakan **Pointer Receiver** lebih sering dipakai untuk menghindari overhead *copy memory* pada struct yang besar.
