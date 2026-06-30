# Variabel dan Tipe Data

Go adalah bahasa yang **Statically Typed**. Artinya, tipe data dari sebuah variabel diketahui pada saat *compile time*. Ini membuat Go sangat aman dan cepat.

## Deklarasi Variabel

Ada beberapa cara mendeklarasikan variabel di Go:

**1. Deklarasi Lengkap (menggunakan `var`)**
Biasanya digunakan untuk variabel tingkat *package* atau ketika Anda tidak langsung memberikan nilai awal.
```go
var name string = "Archon"
var age int // Akan memiliki nilai default (Zero Value)
```

**2. Type Inference (tanpa menyebutkan tipe)**
Go cukup pintar untuk menebak tipe data dari nilai yang diberikan.
```go
var isActive = true // otomatis menjadi bool
```

**3. Short Variable Declaration (`:=`)**
Ini adalah **standar industri** dan cara paling umum di Go untuk mendeklarasikan variabel di dalam sebuah fungsi.
```go
version := 1.22
```

## Zero Values

Di Go, jika Anda mendeklarasikan variabel tanpa memberinya nilai, variabel tersebut tidak akan bernilai `null` atau `undefined`. Go memberikan nilai default bawaan yang disebut **Zero Value**:
- `0` untuk tipe numerik (`int`, `float64`, dll)
- `false` untuk `bool`
- `""` (string kosong) untuk `string`
- `nil` untuk pointer, fungsi, interface, slice, channel, dan map.

## Aturan Ketat Go

Go sangat tidak menoleransi **variabel yang tidak digunakan (unused variables)**. Jika Anda mendeklarasikan variabel lokal tetapi tidak pernah membacanya, program **tidak akan bisa di-compile**. Ini menjaga basis kode Go tetap bersih dari kode "sampah".

Coba jalankan dan perhatikan tipe data pada kode di editor!
