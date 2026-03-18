## Tujuan Pembelajaran

 
- Memahami deklarasi fungsi, parameter, return values, dan named returns.

 
 
 
## Materi

 Fungsi adalah blok kode yang bisa dipanggil berulang kali. Go mendukung multiple return values dan named returns.

### Deklarasi Fungsi Dasar

```
// Tanpa parameter, tanpa return
func sapa() {
 fmt.Println("Halo!")
}

// Dengan parameter
func tambah(a int, b int) int {
 return a + b
}

// Shorthand untuk parameter bertipe sama
func kurangi(a, b int) int {
 return a - b
}

// Multiple return values
func bagi(a, b float64) (float64, error) {
 if b == 0 {
 return 0, fmt.Errorf("pembagi tidak boleh nol")
 }
 return a / b, nil
}

// Named return values
func hitung(a, b int) (jumlah, selisih int) {
 jumlah = a + b
 selisih = a - b
 return // naked return — mengembalikan jumlah dan selisih
}
```

### Pemanggilan Fungsi

```
sapa() // Halo!
fmt.Println(tambah(3, 5)) // 8
hasil, err := bagi(10, 3) // Multiple return
if err != nil {
 fmt.Println("Error:", err)
}
```

### Fungsi sebagai First-Class Citizen

```
// Fungsi sebagai tipe data
var operasi func(int, int) int
operasi = tambah
fmt.Println(operasi(3, 5)) // 8

// Fungsi sebagai parameter
func jalankan(f func(string)) {
 f("Archon")
}
jalankan(func(s string) {
 fmt.Println("Hello,", s)
})

// Fungsi mengembalikan fungsi
func pembuatPengali(faktor int) func(int) int {
 return func(x int) int {
 return x * faktor
 }
}
kali3 := pembuatPengali(3)
fmt.Println(kali3(10)) // 30
```

### Variadic Functions

```
// Menerima jumlah parameter tak terbatas
func jumlahkan(angka ...int) int {
 total := 0
 for _, a := range angka {
 total += a
 }
 return total
}

fmt.Println(jumlahkan(1, 2, 3)) // 6
fmt.Println(jumlahkan(1, 2, 3, 4, 5)) // 15

// Spread slice
nums := []int{1, 2, 3}
fmt.Println(jumlahkan(nums...))
```

 
 
 
## Rangkuman

 Modul ini membahas deklarasi dan pemanggilan fungsi dalam Go. Praktikkan dengan membuat kode sendiri.

 
 
 ← Kembali