## Tujuan Pembelajaran

                
- Menguasai satu-satunya loop di Go: for loop, dalam berbagai bentuknya.

            
            
                
## Materi

                
Go hanya punya SATU jenis loop: `for`. Tapi `for` bisa digunakan dalam berbagai bentuk.

### Traditional for

```
// for init; condition; post
for i := 0; i < 5; i++ {
    fmt.Println(i)  // 0, 1, 2, 3, 4
}
```

### While-style for

```
// Hanya condition (tanpa init dan post)
hitungan := 0
for hitungan < 5 {
    fmt.Println(hitungan)
    hitungan++
}
```

### Infinite Loop

```
// Tanpa condition = infinite loop
for {
    fmt.Println("Looping terus...")
    // Gunakan break untuk keluar
    if done {
        break
    }
}
```

### For-range (Iterasi Collection)

```
// Iterasi array/slice
buah := []string{"apel", "jeruk", "mangga"}
for i, nama := range buah {
    fmt.Printf("%d: %s
", i, nama)
}

// Hanya index
for i := range buah {
    fmt.Println(i)
}

// Hanya value (pakai _ untuk index)
for _, nama := range buah {
    fmt.Println(nama)
}

// Iterasi map
users := map[string]int{"Alice": 25, "Bob": 30}
for nama, umur := range users {
    fmt.Printf("%s: %d tahun
", nama, umur)
}

// Iterasi string (per rune)
for i, char := range "Halo 🏛️" {
    fmt.Printf("Index %d: %c
", i, char)
}
```

### Break dan Continue

```
// break — keluar dari loop
for i := 0; i < 10; i++ {
    if i == 5 {
        break  // Berhenti di i=5
    }
    fmt.Println(i)
}

// continue — skip iterasi
for i := 0; i < 10; i++ {
    if i%2 == 0 {
        continue  // Skip angka genap
    }
    fmt.Println(i)  // 1, 3, 5, 7, 9
}

// Nested loop dengan label
outer:
for i := 0; i < 3; i++ {
    for j := 0; j < 3; j++ {
        if i == 1 && j == 1 {
            break outer  // Keluar dari outer loop
        }
        fmt.Printf("%d,%d ", i, j)
    }
}
```

            
            
                
## Rangkuman

                
Modul ini membahas perulangan: for loop dalam Go. Praktikkan dengan membuat kode sendiri.

            
            
                ← Kembali