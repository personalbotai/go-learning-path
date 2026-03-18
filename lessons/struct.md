## Tujuan Pembelajaran

 
- Membuat dan menggunakan struct untuk mengelompokkan data terkait.

 
 
 
## Materi

 **Struct** adalah kumpulan field yang membentuk tipe data baru. Ini adalah cara Go mendefinisikan object tanpa class.

### Mendefinisikan Struct

```
// Definisi struct
type User struct {
 ID int
 Nama string
 Email string
 Umur int
 Aktif bool
}

// Membuat instance
user1 := User{
 ID: 1,
 Nama: "Archon",
 Email: "archon@example.com",
 Umur: 25,
 Aktif: true,
}

// Shorthand (field order matters)
user2 := User{2, "Builder", "builder@example.com", 30, true}

// Zero value struct
var user3 User // Semua field = zero value
```

### Mengakses dan Mengubah Field

```
// Mengakses field
fmt.Println(user1.Nama) // Archon

// Mengubah field
user1.Email = "new@example.com"

// Pointer ke struct
ptr := &user1
fmt.Println(ptr.Nama) // Archon (automatic dereference)
fmt.Println((*ptr).Nama) // Archon (explicit dereference)
```

### Embedded Struct (Composition)

```
type Alamat struct {
 Jalan string
 Kota string
 KodePos string
}

type Employee struct {
 User // Embedded struct (bukan inheritance!)
 Alamat // Embedded struct
 Jabatan string
 Gaji float64
}

emp := Employee{
 User: User{1, "Archon", "archon@corp.com", 25, true},
 Alamat: Alamat{"Jl. Sudirman", "Jakarta", "10220"},
 Jabatan: "Engineer",
 Gaji: 15000000,
}

// Akses field embedded langsung
fmt.Println(emp.Nama) // Archon (dari User)
fmt.Println(emp.Kota) // Jakarta (dari Alamat)
fmt.Println(emp.Jabatan) // Engineer
```

### Struct Tags

```
type Product struct {
 ID int `json:"id"`
 Nama string `json:"name"`
 Harga float64 `json:"price"`
 Aktif bool `json:"active"`
}

// Digunakan oleh encoding/json, database/sql, validator, etc.
product := Product{1, "Laptop", 15000000, true}
jsonData, _ := json.Marshal(product)
// {"id":1,"name":"Laptop","price":15000000,"active":true}
```

 
 
 
## Rangkuman

 Modul ini membahas struct: tipe data komposit dalam Go. Praktikkan dengan membuat kode sendiri.

 
 
 ← Kembali