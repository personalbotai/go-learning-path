## Tujuan Pembelajaran

                
- Menggunakan statement if/else untuk kontrol alur program.

            
            
                
## Materi

                
Statement `if` di Go mirip dengan bahasa lain, tapi tanpa parentheses dan dengan opsi *init statement*.

### Dasar if/else

```
// Basic if
umur := 25
if umur >= 18 {
    fmt.Println("Dewasa")
}

// if-else
if umur >= 18 {
    fmt.Println("Dewasa")
} else {
    fmt.Println("Anak-anak")
}

// if-else if-else
nilai := 85
if nilai >= 90 {
    fmt.Println("A")
} else if nilai >= 80 {
    fmt.Println("B")
} else if nilai >= 70 {
    fmt.Println("C")
} else {
    fmt.Println("D")
}
```

### Init Statement

```
// Variabel 'nilai' hanya bisa diakses dalam scope if
if nilai := getScore(); nilai >= 80 {
    fmt.Println("Lulus dengan nilai:", nilai)
} else {
    fmt.Println("Tidak lulus. Nilai:", nilai)
}
// nilai tidak bisa diakses di sini

// Berguna untuk error handling
if file, err := os.Open("data.txt"); err != nil {
    fmt.Println("Error:", err)
} else {
    defer file.Close()
    // Process file...
}
```

### Nested if

```
if loggedIn {
    if user.Role == "admin" {
        fmt.Println("Dashboard Admin")
    } else {
        fmt.Println("Dashboard User")
    }
} else {
    fmt.Println("Silakan login")
}
```

### Tips

- Go TIDAK pakai parentheses: `if (x > 5)` ❌ → `if x > 5` ✅

- Gunakan init statement untuk membatasi scope variabel

- Hindari nested if terlalu dalam — gunakan early return

            
            
                
## Rangkuman

                
Modul ini membahas percabangan: if, else if, else dalam Go. Praktikkan dengan membuat kode sendiri.

            
            
                ← Kembali