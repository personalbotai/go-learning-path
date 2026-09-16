// Go Learning Path — Premium App v2 (53 pelajaran, 5 modul)
const MODULES = [
  {
    "id": 1,
    "title": "Fondasi Go",
    "icon": "fa-solid fa-flag",
    "desc": "Mulai dari nol"
  },
  {
    "id": 2,
    "title": "Kontrol & Fungsi",
    "icon": "fa-solid fa-code-branch",
    "desc": "Logika & fungsi"
  },
  {
    "id": 3,
    "title": "Struktur Data",
    "icon": "fa-solid fa-database",
    "desc": "Array, map, struct"
  },
  {
    "id": 4,
    "title": "Lanjut & Idiomatik",
    "icon": "fa-solid fa-layer-group",
    "desc": "Interface, error, JSON"
  },
  {
    "id": 5,
    "title": "Concurrency & Production",
    "icon": "fa-solid fa-bolt",
    "desc": "Goroutine, HTTP, test"
  }
];
const lessons = [
  {
    id: 1,
    slug: "apa-itu-go",
    title: "1. Apa Itu Go? Mengapa Go Modern",
    module: "Fondasi Go",
    moduleId: 1,
    mdFile: "lessons/apa-itu-go.md",
    duration: "15–20 m",
    level: "Pemula",
    description: "<p><strong>Apa Itu Go? Mengapa Go Modern</strong> — Pemula • 15–20 m</p>",
    defaultCode: "package main\nimport \"fmt\"\nfunc main(){\n  fmt.Println(\"Hello, Go!\")\n  fmt.Println(\"Belajar Go itu cepat, sederhana, & siap production.\")\n}",
    expectedOutput: "Hello, Go!",
    hint: "Perhatikan output harus mengandung: Hello, Go!",
    quiz: { question: "Apa filosofi utama Go menurut Rob Pike dkk?", options: ["Sederhana, cepat, concurrency sebagai warga kelas satu", "OOP dengan inheritance dalam", "Scripting dinamis seperti Python", "VM-based seperti Java"], answer: 0 }
  },
  {
    id: 2,
    slug: "instalasi-dan-setup",
    title: "2. Instalasi & Setup Go",
    module: "Fondasi Go",
    moduleId: 1,
    mdFile: "lessons/instalasi-dan-setup.md",
    duration: "10–15 m",
    level: "Pemula",
    description: "<p><strong>Instalasi & Setup Go</strong> — Pemula • 10–15 m</p>",
    defaultCode: "package main\nimport \"fmt\"\nfunc main(){ fmt.Println(\"Hello, Go!\") }",
    expectedOutput: "Hello, Go!",
    hint: "Perhatikan output harus mengandung: Hello, Go!",
    quiz: { question: "Perintah untuk cek instalasi Go adalah?", options: ["go version", "npm -v", "java -version", "python --version"], answer: 0 }
  },
  {
    id: 3,
    slug: "tools-dan-editor",
    title: "3. Tools & Editor (VS Code, gopls)",
    module: "Fondasi Go",
    moduleId: 1,
    mdFile: "lessons/tools-dan-editor.md",
    duration: "10–15 m",
    level: "Pemula",
    description: "<p><strong>Tools & Editor (VS Code, gopls)</strong> — Pemula • 10–15 m</p>",
    defaultCode: "package main\nimport \"fmt\"\nfunc main(){ fmt.Println(\"Hello, Go!\") }",
    expectedOutput: "Hello, Go!",
    hint: "Perhatikan output harus mengandung: Hello, Go!",
    quiz: { question: "Tool linter/formatter resmi Go adalah?", options: ["gofmt / go vet & gopls", "eslint", "black", "rubocop"], answer: 0 }
  },
  {
    id: 4,
    slug: "hello-world",
    title: "4. Hello World & Struktur Program",
    module: "Fondasi Go",
    moduleId: 1,
    mdFile: "lessons/hello-world.md",
    duration: "15–20 m",
    level: "Pemula",
    description: "<p><strong>Hello World & Struktur Program</strong> — Pemula • 15–20 m</p>",
    defaultCode: "package main\nimport \"fmt\"\nfunc main(){\n  fmt.Println(\"Hello, Go!\")\n}",
    expectedOutput: "Hello, Go!",
    hint: "Perhatikan output harus mengandung: Hello, Go!",
    quiz: { question: "Entry point program Go harus berada di?", options: ["package main func main()", "package app func start()", "package hello func hello()", "package test func test()"], answer: 0 }
  },
  {
    id: 5,
    slug: "variabel-dan-tipe-data",
    title: "5. Variabel & Tipe Data",
    module: "Fondasi Go",
    moduleId: 1,
    mdFile: "lessons/variabel-dan-tipe-data.md",
    duration: "15–20 m",
    level: "Pemula",
    description: "<p><strong>Variabel & Tipe Data</strong> — Pemula • 15–20 m</p>",
    defaultCode: "package main\nimport \"fmt\"\nfunc main(){\n  name := \"Cloud Engineer\"\n  version := 1.22\n  var requestCount int\n  var isReady bool\n  fmt.Printf(\"Name: %v (Type: %T)\\n\", name, name)\n  fmt.Printf(\"Version: %v (Type: %T)\\n\", version, version)\n  fmt.Printf(\"Zero values -> count=%v, ready=%v\\n\", requestCount, isReady)\n}",
    expectedOutput: "Cloud Engineer",
    hint: "Perhatikan output harus mengandung: Cloud Engineer",
    quiz: { question: "Short declaration yang idiomatik di dalam fungsi adalah?", options: ["umur := 25", "var umur: int = 25", "let umur = 25", "int umur = 25"], answer: 0 }
  },
  {
    id: 6,
    slug: "variabel-dan-konstanta",
    title: "6. Variabel & Konstanta",
    module: "Fondasi Go",
    moduleId: 1,
    mdFile: "lessons/variabel-dan-konstanta.md",
    duration: "10–15 m",
    level: "Pemula",
    description: "<p><strong>Variabel & Konstanta</strong> — Pemula • 10–15 m</p>",
    defaultCode: "package main\nimport \"fmt\"\nfunc main(){\n  const Pi = 3.14159\n  var radius = 7.0\n  fmt.Printf(\"Luas lingkaran r=%.0f = %.2f\\n\", radius, Pi*radius*radius)\n  radius = 10\n  fmt.Println(\"Radius baru:\", radius)\n}",
    expectedOutput: "Luas lingkaran",
    hint: "Perhatikan output harus mengandung: Luas lingkaran",
    quiz: { question: "Keyword untuk konstanta di Go adalah?", options: ["const", "let", "final", "define"], answer: 0 }
  },
  {
    id: 7,
    slug: "tipe-data-dasar",
    title: "7. Tipe Data Dasar",
    module: "Fondasi Go",
    moduleId: 1,
    mdFile: "lessons/tipe-data-dasar.md",
    duration: "15–20 m",
    level: "Pemula",
    description: "<p><strong>Tipe Data Dasar</strong> — Pemula • 15–20 m</p>",
    defaultCode: "package main\nimport \"fmt\"\nfunc main(){\n  var s string = \"Go\"\n  var i int = 42\n  var f float64 = 3.14\n  var b bool = true\n  fmt.Printf(\"%T %v\\n%T %v\\n%T %v\\n%T %v\\n\", s,s,i,i,f,f,b,b)\n}",
    expectedOutput: "Go",
    hint: "Perhatikan output harus mengandung: Go",
    quiz: { question: "Tipe data string kosong (zero value) di Go adalah?", options: ["\"\" (string kosong)", "null", "undefined", "0"], answer: 0 }
  },
  {
    id: 8,
    slug: "operator",
    title: "8. Operator Aritmatika & Logika",
    module: "Fondasi Go",
    moduleId: 1,
    mdFile: "lessons/operator.md",
    duration: "10–15 m",
    level: "Pemula",
    description: "<p><strong>Operator Aritmatika & Logika</strong> — Pemula • 10–15 m</p>",
    defaultCode: "package main\nimport \"fmt\"\nfunc main(){\n  a,b := 10,3\n  fmt.Println(\"a+b =\",a+b)\n  fmt.Println(\"a%b =\",a%b)\n  fmt.Println(\"a>b?\",a>b)\n  fmt.Println(\"a==b?\",a==b)\n}",
    expectedOutput: "a+b",
    hint: "Perhatikan output harus mengandung: a+b",
    quiz: { question: "Operator untuk sisa bagi di Go adalah?", options: ["%", "/", "//", "mod"], answer: 0 }
  },
  {
    id: 9,
    slug: "operator-dan-ekspresi",
    title: "9. Operator & Ekspresi",
    module: "Fondasi Go",
    moduleId: 1,
    mdFile: "lessons/operator-dan-ekspresi.md",
    duration: "10–15 m",
    level: "Pemula",
    description: "<p><strong>Operator & Ekspresi</strong> — Pemula • 10–15 m</p>",
    defaultCode: "package main\nimport \"fmt\"\nfunc main(){\n  x := 10\n  x += 5\n  fmt.Println(\"x setelah +=5:\", x)\n  fmt.Println(\"ekspresi:\", (x*2 - 3))\n}",
    expectedOutput: "x setelah",
    hint: "Perhatikan output harus mengandung: x setelah",
    quiz: { question: "Hasil 10 % 3 di Go adalah?", options: ["1", "3", "0", "10"], answer: 0 }
  },
  {
    id: 10,
    slug: "input-output",
    title: "10. Input & Output (fmt)",
    module: "Fondasi Go",
    moduleId: 1,
    mdFile: "lessons/input-output.md",
    duration: "10–15 m",
    level: "Pemula",
    description: "<p><strong>Input & Output (fmt)</strong> — Pemula • 10–15 m</p>",
    defaultCode: "package main\nimport \"fmt\"\nfunc main(){\n  name := \"Gopher\"\n  age := 7\n  fmt.Printf(\"Halo %s, umur %d\\n\", name, age)\n  fmt.Println(\"Belajar fmt.Println & fmt.Printf\")\n}",
    expectedOutput: "Halo Gopher",
    hint: "Perhatikan output harus mengandung: Halo Gopher",
    quiz: { question: "Package untuk cetak ke layar di Go adalah?", options: ["fmt", "io", "print", "console"], answer: 0 }
  },
  {
    id: 11,
    slug: "if-else",
    title: "11. Percabangan: if-else",
    module: "Fondasi Go",
    moduleId: 1,
    mdFile: "lessons/if-else.md",
    duration: "10–15 m",
    level: "Pemula",
    description: "<p><strong>Percabangan: if-else</strong> — Pemula • 10–15 m</p>",
    defaultCode: "package main\nimport \"fmt\"\nfunc main(){\n  nilai := 85\n  if nilai >= 90 { fmt.Println(\"A\") } else if nilai >= 75 { fmt.Println(\"B — Lulus\") } else { fmt.Println(\"C\") }\n}",
    expectedOutput: "B — Lulus",
    hint: "Perhatikan output harus mengandung: B — Lulus",
    quiz: { question: "Go mewajibkan kondisi if ditulis?", options: ["tanpa kurung: if x > 5 {}", "dengan kurung: if (x>5) {}", "dengan kurung siku: if [x>5]", "dengan then: if x>5 then"], answer: 0 }
  },
  {
    id: 12,
    slug: "control-flow-if-else",
    title: "12. Control Flow: if-else Lanjutan",
    module: "Kontrol & Fungsi",
    moduleId: 2,
    mdFile: "lessons/control-flow-if-else.md",
    duration: "10–15 m",
    level: "Pemula",
    description: "<p><strong>Control Flow: if-else Lanjutan</strong> — Pemula • 10–15 m</p>",
    defaultCode: "package main\nimport \"fmt\"\nfunc main(){\n  if n := 9; n%2==0 { fmt.Println(n,\"genap\") } else { fmt.Println(n,\"ganjil\") }\n}",
    expectedOutput: "ganjil",
    hint: "Perhatikan output harus mengandung: ganjil",
    quiz: { question: "Short statement di if Go contohnya?", options: ["if v:=compute(); v>0 {}", "if let v = compute()", "if (v=compute())", "if v <- compute()"], answer: 0 }
  },
  {
    id: 13,
    slug: "for-loop",
    title: "13. Perulangan: for Loop",
    module: "Kontrol & Fungsi",
    moduleId: 2,
    mdFile: "lessons/for-loop.md",
    duration: "10–15 m",
    level: "Pemula",
    description: "<p><strong>Perulangan: for Loop</strong> — Pemula • 10–15 m</p>",
    defaultCode: "package main\nimport \"fmt\"\nfunc main(){\n  for i:=1;i<=5;i++ { fmt.Printf(\"%d \", i) }\n  fmt.Println()\n}",
    expectedOutput: "1 2 3 4 5",
    hint: "Perhatikan output harus mengandung: 1 2 3 4 5",
    quiz: { question: "Satu-satunya loop di Go adalah?", options: ["for", "while", "do-while", "foreach"], answer: 0 }
  },
  {
    id: 14,
    slug: "loop-dan-iterasi",
    title: "14. Loop & Iterasi Idiomatik",
    module: "Kontrol & Fungsi",
    moduleId: 2,
    mdFile: "lessons/loop-dan-iterasi.md",
    duration: "10–15 m",
    level: "Pemula",
    description: "<p><strong>Loop & Iterasi Idiomatik</strong> — Pemula • 10–15 m</p>",
    defaultCode: "package main\nimport \"fmt\"\nfunc main(){\n  buah := []string{\"apel\",\"jeruk\",\"mangga\"}\n  for i,v := range buah { fmt.Printf(\"%d:%s \", i, v) }\n  fmt.Println()\n}",
    expectedOutput: "apel",
    hint: "Perhatikan output harus mengandung: apel",
    quiz: { question: "Untuk iterasi slice/map idiomatik Go pakai?", options: ["for range", "for each", "for in", "foreach"], answer: 0 }
  },
  {
    id: 15,
    slug: "break-continue",
    title: "15. break & continue",
    module: "Kontrol & Fungsi",
    moduleId: 2,
    mdFile: "lessons/break-continue.md",
    duration: "10–15 m",
    level: "Pemula",
    description: "<p><strong>break & continue</strong> — Pemula • 10–15 m</p>",
    defaultCode: "package main\nimport \"fmt\"\nfunc main(){\n  for i:=1;i<=10;i++{\n    if i%2==0 { continue }\n    if i>7 { break }\n    fmt.Printf(\"%d \", i)\n  }\n  fmt.Println()\n}",
    expectedOutput: "1 3 5 7",
    hint: "Perhatikan output harus mengandung: 1 3 5 7",
    quiz: { question: "Keyword untuk loncat ke iterasi berikutnya adalah?", options: ["continue", "skip", "next", "pass"], answer: 0 }
  },
  {
    id: 16,
    slug: "switch",
    title: "16. switch: Pengganti if Bertingkat",
    module: "Kontrol & Fungsi",
    moduleId: 2,
    mdFile: "lessons/switch.md",
    duration: "10–15 m",
    level: "Pemula",
    description: "<p><strong>switch: Pengganti if Bertingkat</strong> — Pemula • 10–15 m</p>",
    defaultCode: "package main\nimport \"fmt\"\nfunc main(){\n  hari := \"senin\"\n  switch hari {\n  case \"senin\": fmt.Println(\"Semangat!\")\n  case \"jumat\": fmt.Println(\"Hampir weekend\")\n  default: fmt.Println(\"Hari biasa\")\n  }\n}",
    expectedOutput: "Semangat!",
    hint: "Perhatikan output harus mengandung: Semangat!",
    quiz: { question: "Go switch secara default adalah?", options: ["tidak fallthrough (harus explicit)", "selalu fallthrough seperti C", "harus pakai break", "case harus berurutan"], answer: 0 }
  },
  {
    id: 17,
    slug: "switch-dan-select",
    title: "17. switch & select (preview concurrency)",
    module: "Kontrol & Fungsi",
    moduleId: 2,
    mdFile: "lessons/switch-dan-select.md",
    duration: "10–15 m",
    level: "Menengah",
    description: "<p><strong>switch & select (preview concurrency)</strong> — Menengah • 10–15 m</p>",
    defaultCode: "package main\nimport \"fmt\"\nfunc main(){\n  var ch = make(chan string)\n  go func(){ ch <- \"siap\" }()\n  select {\n  case msg := <-ch: fmt.Println(\"dapat:\", msg)\n  default: fmt.Println(\"tidak ada pesan\")\n  }\n}",
    expectedOutput: "dapat:",
    hint: "Perhatikan output harus mengandung: dapat:",
    quiz: { question: "Keyword khusus untuk multiplexing channel adalah?", options: ["select", "switch", "choose", "when"], answer: 0 }
  },
  {
    id: 18,
    slug: "fungsi-dasar",
    title: "18. Fungsi Dasar",
    module: "Kontrol & Fungsi",
    moduleId: 2,
    mdFile: "lessons/fungsi-dasar.md",
    duration: "15–20 m",
    level: "Pemula",
    description: "<p><strong>Fungsi Dasar</strong> — Pemula • 15–20 m</p>",
    defaultCode: "package main\nimport \"fmt\"\nfunc tambah(a,b int) int { return a+b }\nfunc main(){ fmt.Println(\"3+4 =\", tambah(3,4)) }",
    expectedOutput: "3+4 = 7",
    hint: "Perhatikan output harus mengandung: 3+4 = 7",
    quiz: { question: "Fungsi di Go bisa mengembalikan?", options: ["multiple return values", "hanya satu nilai", "tidak bisa return", "hanya error"], answer: 0 }
  },
  {
    id: 19,
    slug: "multiple-return",
    title: "19. Multiple Return Values",
    module: "Kontrol & Fungsi",
    moduleId: 2,
    mdFile: "lessons/multiple-return.md",
    duration: "10–15 m",
    level: "Pemula",
    description: "<p><strong>Multiple Return Values</strong> — Pemula • 10–15 m</p>",
    defaultCode: "package main\nimport \"fmt\"\nfunc bagi(a,b float64)(float64,error){\n  if b==0 { return 0, fmt.Errorf(\"pembagi nol\") }\n  return a/b, nil\n}\nfunc main(){\n  if v,err := bagi(10,2); err==nil { fmt.Println(v) }\n}",
    expectedOutput: "5",
    hint: "Perhatikan output harus mengandung: 5",
    quiz: { question: "Idiom Go untuk fungsi yang bisa gagal adalah?", options: ["return (value, error)", "throw exception", "return null", "callback(error, value)"], answer: 0 }
  },
  {
    id: 20,
    slug: "variadic-fungsi",
    title: "20. Variadic Function",
    module: "Kontrol & Fungsi",
    moduleId: 2,
    mdFile: "lessons/variadic-fungsi.md",
    duration: "10–15 m",
    level: "Menengah",
    description: "<p><strong>Variadic Function</strong> — Menengah • 10–15 m</p>",
    defaultCode: "package main\nimport \"fmt\"\nfunc sum(nums ...int) int { t:=0; for _,n:=range nums{t+=n}; return t }\nfunc main(){ fmt.Println(sum(1,2,3,4)) }",
    expectedOutput: "10",
    hint: "Perhatikan output harus mengandung: 10",
    quiz: { question: "Sintaks variadic di Go adalah?", options: ["func sum(nums ...int)", "func sum(nums: int[])", "func sum(...nums)", "func sum(nums variadic)"], answer: 0 }
  },
  {
    id: 21,
    slug: "closure-dan-anonymous",
    title: "21. Closure & Anonymous Function",
    module: "Kontrol & Fungsi",
    moduleId: 2,
    mdFile: "lessons/closure-dan-anonymous.md",
    duration: "15–20 m",
    level: "Menengah",
    description: "<p><strong>Closure & Anonymous Function</strong> — Menengah • 15–20 m</p>",
    defaultCode: "package main\nimport \"fmt\"\nfunc main(){\n  counter := func() func() int { n:=0; return func() int { n++; return n } }()\n  fmt.Println(counter(), counter(), counter())\n}",
    expectedOutput: "1 2 3",
    hint: "Perhatikan output harus mengandung: 1 2 3",
    quiz: { question: "Closure di Go adalah?", options: ["Fungsi yang menangkap variabel sekitarnya", "Method pada struct", "Hanya fungsi global", "Anonymous struct"], answer: 0 }
  },
  {
    id: 22,
    slug: "array",
    title: "22. Array",
    module: "Kontrol & Fungsi",
    moduleId: 2,
    mdFile: "lessons/array.md",
    duration: "10–15 m",
    level: "Pemula",
    description: "<p><strong>Array</strong> — Pemula • 10–15 m</p>",
    defaultCode: "package main\nimport \"fmt\"\nfunc main(){\n  var a [3]int = [3]int{1,2,3}\n  fmt.Println(a, \"len\", len(a))\n}",
    expectedOutput: "1 2 3",
    hint: "Perhatikan output harus mengandung: 1 2 3",
    quiz: { question: "Array di Go ukurannya bersifat?", options: ["fixed — ditentukan saat deklarasi", "dinamis otomatis membesar", "selalu 0", "hanya bisa 1 dimensi"], answer: 0 }
  },
  {
    id: 23,
    slug: "array-dan-slice",
    title: "23. Array vs Slice",
    module: "Struktur Data",
    moduleId: 3,
    mdFile: "lessons/array-dan-slice.md",
    duration: "15–20 m",
    level: "Pemula",
    description: "<p><strong>Array vs Slice</strong> — Pemula • 15–20 m</p>",
    defaultCode: "package main\nimport \"fmt\"\nfunc main(){\n  arr := [5]int{1,2,3,4,5}\n  sl := arr[1:4]\n  fmt.Println(\"arr:\",arr)\n  fmt.Println(\"slice:\",sl,\"len\",len(sl),\"cap\",cap(sl))\n}",
    expectedOutput: "slice:",
    hint: "Perhatikan output harus mengandung: slice:",
    quiz: { question: "Perbedaan utama array vs slice adalah?", options: ["Slice adalah view dinamis di atas array", "Tidak ada beda", "Array lebih cepat selalu", "Slice tidak bisa di-append"], answer: 0 }
  },
  {
    id: 24,
    slug: "slice",
    title: "24. Slice Mendalam",
    module: "Struktur Data",
    moduleId: 3,
    mdFile: "lessons/slice.md",
    duration: "15–20 m",
    level: "Menengah",
    description: "<p><strong>Slice Mendalam</strong> — Menengah • 15–20 m</p>",
    defaultCode: "package main\nimport \"fmt\"\nfunc main(){\n  s:= []int{1,2}\n  s=append(s,3,4)\n  fmt.Println(s)\n  fmt.Println(\"len\",len(s),\"cap\",cap(s))\n}",
    expectedOutput: "1 2 3 4",
    hint: "Perhatikan output harus mengandung: 1 2 3 4",
    quiz: { question: "Fungsi untuk menambah elemen slice adalah?", options: ["append", "push", "add", "insert"], answer: 0 }
  },
  {
    id: 25,
    slug: "map",
    title: "25. Map",
    module: "Struktur Data",
    moduleId: 3,
    mdFile: "lessons/map.md",
    duration: "10–15 m",
    level: "Pemula",
    description: "<p><strong>Map</strong> — Pemula • 10–15 m</p>",
    defaultCode: "package main\nimport \"fmt\"\nfunc main(){\n  m:= map[string]int{\"apel\":5,\"jeruk\":3}\n  fmt.Println(m)\n  m[\"mangga\"]=7\n  fmt.Println(\"apel:\",m[\"apel\"])\n}",
    expectedOutput: "apel",
    hint: "Perhatikan output harus mengandung: apel",
    quiz: { question: "Map di Go analog dengan?", options: ["hash / dictionary", "array", "list", "queue"], answer: 0 }
  },
  {
    id: 26,
    slug: "map-dan-key-value",
    title: "26. Map & Key-Value",
    module: "Struktur Data",
    moduleId: 3,
    mdFile: "lessons/map-dan-key-value.md",
    duration: "15–20 m",
    level: "Pemula",
    description: "<p><strong>Map & Key-Value</strong> — Pemula • 15–20 m</p>",
    defaultCode: "package main\nimport \"fmt\"\nfunc main(){\n  m:= map[string]int{\"a\":1}\n  if v,ok:=m[\"b\"]; ok { fmt.Println(v) } else { fmt.Println(\"b tidak ada, ok=\",ok) }\n}",
    expectedOutput: "b tidak ada",
    hint: "Perhatikan output harus mengandung: b tidak ada",
    quiz: { question: "Cara aman cek keberadaan key di map?", options: ["v, ok := m[key]", "if m.has(key)", "m.contains(key)", "m[key] != nil saja"], answer: 0 }
  },
  {
    id: 27,
    slug: "struct",
    title: "27. Struct",
    module: "Struktur Data",
    moduleId: 3,
    mdFile: "lessons/struct.md",
    duration: "15–20 m",
    level: "Menengah",
    description: "<p><strong>Struct</strong> — Menengah • 15–20 m</p>",
    defaultCode: "package main\nimport \"fmt\"\ntype User struct{ Name string; Age int }\nfunc main(){ u:=User{\"Budi\",28}; fmt.Printf(\"%+v\\n\",u) }",
    expectedOutput: "Budi",
    hint: "Perhatikan output harus mengandung: Budi",
    quiz: { question: "Keyword untuk definisi struct adalah?", options: ["type User struct {}", "class User {}", "struct User {}", "def User: "], answer: 0 }
  },
  {
    id: 28,
    slug: "struct-dan-method",
    title: "28. Struct & Method (Receiver)",
    module: "Struktur Data",
    moduleId: 3,
    mdFile: "lessons/struct-dan-method.md",
    duration: "20–30 m",
    level: "Menengah",
    description: "<p><strong>Struct & Method (Receiver)</strong> — Menengah • 20–30 m</p>",
    defaultCode: "package main\nimport \"fmt\"\ntype User struct{ Name string }\nfunc (u User) Greet() string { return \"Halo \"+u.Name }\nfunc main(){ u:=User{\"Ana\"}; fmt.Println(u.Greet()) }",
    expectedOutput: "Halo Ana",
    hint: "Perhatikan output harus mengandung: Halo Ana",
    quiz: { question: "Method di Go didefinisikan dengan?", options: ["receiver: func (u User) Greet()", "keyword method", "class method", "func User::Greet()"], answer: 0 }
  },
  {
    id: 29,
    slug: "method",
    title: "29. Method Lanjutan",
    module: "Struktur Data",
    moduleId: 3,
    mdFile: "lessons/method.md",
    duration: "10–15 m",
    level: "Menengah",
    description: "<p><strong>Method Lanjutan</strong> — Menengah • 10–15 m</p>",
    defaultCode: "package main\nimport \"fmt\"\ntype Counter struct{ n int }\nfunc (c *Counter) Inc(){ c.n++ }\nfunc main(){ c:=&Counter{}; c.Inc(); c.Inc(); fmt.Println(c.n) }",
    expectedOutput: "2",
    hint: "Perhatikan output harus mengandung: 2",
    quiz: { question: "Pointer receiver digunakan ketika?", options: ["Method perlu memodifikasi struct", "Selalu", "Tidak pernah", "Hanya untuk constructor"], answer: 0 }
  },
  {
    id: 30,
    slug: "pointer",
    title: "30. Pointer",
    module: "Struktur Data",
    moduleId: 3,
    mdFile: "lessons/pointer.md",
    duration: "15–20 m",
    level: "Menengah",
    description: "<p><strong>Pointer</strong> — Menengah • 15–20 m</p>",
    defaultCode: "package main\nimport \"fmt\"\nfunc main(){\n  x:=10; p:=&x; *p=20\n  fmt.Println(\"x:\",x,\"*p:\",*p)\n}",
    expectedOutput: "x: 20",
    hint: "Perhatikan output harus mengandung: x: 20",
    quiz: { question: "Operator untuk alamat variabel adalah?", options: ["&", "*", "@", "#"], answer: 0 }
  },
  {
    id: 31,
    slug: "pointer-dasar",
    title: "31. Pointer Dasar",
    module: "Struktur Data",
    moduleId: 3,
    mdFile: "lessons/pointer-dasar.md",
    duration: "15–20 m",
    level: "Menengah",
    description: "<p><strong>Pointer Dasar</strong> — Menengah • 15–20 m</p>",
    defaultCode: "package main\nimport \"fmt\"\nfunc ubah(v *int){ *v=99 }\nfunc main(){ n:=5; ubah(&n); fmt.Println(n) }",
    expectedOutput: "99",
    hint: "Perhatikan output harus mengandung: 99",
    quiz: { question: "Operator untuk dereference pointer adalah?", options: ["*", "&", "->", "."], answer: 0 }
  },
  {
    id: 32,
    slug: "package-dan-import",
    title: "32. Package & Import",
    module: "Struktur Data",
    moduleId: 3,
    mdFile: "lessons/package-dan-import.md",
    duration: "10–15 m",
    level: "Pemula",
    description: "<p><strong>Package & Import</strong> — Pemula • 10–15 m</p>",
    defaultCode: "package main\nimport (\"fmt\"; \"strings\")\nfunc main(){ fmt.Println(strings.ToUpper(\"go itu menyenangkan\")) }",
    expectedOutput: "GO ITU MENYENANGKAN",
    hint: "Perhatikan output harus mengandung: GO ITU MENYENANGKAN",
    quiz: { question: "Package yang bisa di-run harus bernama?", options: ["main", "app", "root", "exec"], answer: 0 }
  },
  {
    id: 33,
    slug: "interface-dasar",
    title: "33. Interface Dasar",
    module: "Struktur Data",
    moduleId: 3,
    mdFile: "lessons/interface-dasar.md",
    duration: "20–30 m",
    level: "Menengah",
    description: "<p><strong>Interface Dasar</strong> — Menengah • 20–30 m</p>",
    defaultCode: "package main\nimport \"fmt\"\nfunc cetak(v interface{}){ fmt.Printf(\"%T %v\\n\", v, v) }\nfunc main(){ cetak(42); cetak(\"halo\"); cetak(true) }",
    expectedOutput: "int 42",
    hint: "Perhatikan output harus mengandung: int 42",
    quiz: { question: "Interface kosong di Go adalah?", options: ["interface{} / any", "Object", "void", "nil"], answer: 0 }
  },
  {
    id: 34,
    slug: "embedding",
    title: "34. Embedding (Komposisi)",
    module: "Lanjut & Idiomatik",
    moduleId: 4,
    mdFile: "lessons/embedding.md",
    duration: "15–20 m",
    level: "Menengah",
    description: "<p><strong>Embedding (Komposisi)</strong> — Menengah • 15–20 m</p>",
    defaultCode: "package main\nimport \"fmt\"\ntype Animal struct{ Name string }\nfunc (a Animal) Speak(){ fmt.Println(a.Name,\"bersuara\") }\ntype Dog struct{ Animal; Breed string }\nfunc main(){ d:=Dog{Animal{\"Bruno\"},\"Bulldog\"}; d.Speak(); fmt.Println(d.Breed) }",
    expectedOutput: "Bruno",
    hint: "Perhatikan output harus mengandung: Bruno",
    quiz: { question: "Embedding di Go menggantikan konsep?", options: ["inheritance dengan komposisi", "overloading", "generics", "channel"], answer: 0 }
  },
  {
    id: 35,
    slug: "generics-dasar",
    title: "35. Generics Dasar (Go 1.18+)",
    module: "Lanjut & Idiomatik",
    moduleId: 4,
    mdFile: "lessons/generics-dasar.md",
    duration: "20–30 m",
    level: "Mahir",
    description: "<p><strong>Generics Dasar (Go 1.18+)</strong> — Mahir • 20–30 m</p>",
    defaultCode: "package main\nimport \"fmt\"\nfunc Map[T any, R any](in []T, fn func(T)R) []R { out:=make([]R,len(in)); for i,v:=range in{out[i]=fn(v)}; return out }\nfunc main(){ fmt.Println(Map([]int{1,2,3}, func(n int)int{return n*2})) }",
    expectedOutput: "2 4 6",
    hint: "Perhatikan output harus mengandung: 2 4 6",
    quiz: { question: "Generics diperkenalkan di Go versi?", options: ["1.18", "1.0", "1.10", "1.22"], answer: 0 }
  },
  {
    id: 36,
    slug: "error-handling",
    title: "36. Error Handling Idiomatik",
    module: "Lanjut & Idiomatik",
    moduleId: 4,
    mdFile: "lessons/error-handling.md",
    duration: "15–20 m",
    level: "Menengah",
    description: "<p><strong>Error Handling Idiomatik</strong> — Menengah • 15–20 m</p>",
    defaultCode: "package main\nimport (\"errors\"; \"fmt\")\nfunc cari(m map[string]int,k string)(int,error){ if v,ok:=m[k];ok{return v,nil}; return 0,errors.New(\"not found:\"+k) }\nfunc main(){ m:=map[string]int{\"a\":1}; fmt.Println(cari(m,\"a\")); fmt.Println(cari(m,\"b\")) }",
    expectedOutput: "not found",
    hint: "Perhatikan output harus mengandung: not found",
    quiz: { question: "Cara idiomatik handle error di Go adalah?", options: ["if err != nil { return err }", "try/catch", "throw err", "err.handle()"], answer: 0 }
  },
  {
    id: 37,
    slug: "custom-error",
    title: "37. Custom Error",
    module: "Lanjut & Idiomatik",
    moduleId: 4,
    mdFile: "lessons/custom-error.md",
    duration: "15–20 m",
    level: "Menengah",
    description: "<p><strong>Custom Error</strong> — Menengah • 15–20 m</p>",
    defaultCode: "package main\nimport \"fmt\"\ntype MyErr struct{ Code int; Msg string }\nfunc (e MyErr) Error() string{ return fmt.Sprintf(\"code %d: %s\",e.Code,e.Msg) }\nfunc main(){ err:= MyErr{404,\"not found\"}; fmt.Println(err.Error()) }",
    expectedOutput: "code 404",
    hint: "Perhatikan output harus mengandung: code 404",
    quiz: { question: "Custom error dibuat dengan implement method?", options: ["Error() string", "String() string", "ErrorCode() int", "Fail() error"], answer: 0 }
  },
  {
    id: 38,
    slug: "defer-panic-recover",
    title: "38. defer, panic & recover",
    module: "Lanjut & Idiomatik",
    moduleId: 4,
    mdFile: "lessons/defer-panic-recover.md",
    duration: "20–30 m",
    level: "Menengah",
    description: "<p><strong>defer, panic & recover</strong> — Menengah • 20–30 m</p>",
    defaultCode: "package main\nimport \"fmt\"\nfunc main(){\n  defer fmt.Println(\"defer: bersih-bersih\")\n  defer func(){ if r:=recover(); r!=nil { fmt.Println(\"recover:\",r) } }()\n  fmt.Println(\"mulai\")\n  panic(\"boom\")\n}",
    expectedOutput: "recover:",
    hint: "Perhatikan output harus mengandung: recover:",
    quiz: { question: "defer dieksekusi saat?", options: ["Fungsi selesai (LIFO)", "Di awal fungsi", "Saat panic saja", "Tidak pernah otomatis"], answer: 0 }
  },
  {
    id: 39,
    slug: "module-dan-dependency",
    title: "39. Go Modules & Dependency",
    module: "Lanjut & Idiomatik",
    moduleId: 4,
    mdFile: "lessons/module-dan-dependency.md",
    duration: "15–20 m",
    level: "Menengah",
    description: "<p><strong>Go Modules & Dependency</strong> — Menengah • 15–20 m</p>",
    defaultCode: "package main\nimport \"fmt\"\nfunc main(){\n  fmt.Println(\"go mod init go-learning-path\")\n  fmt.Println(\"go get github.com/labstack/echo/v4\")\n  fmt.Println(\"go mod tidy\")\n}",
    expectedOutput: "go mod init",
    hint: "Perhatikan output harus mengandung: go mod init",
    quiz: { question: "File definisi module Go adalah?", options: ["go.mod", "package.json", "Cargo.toml", "go.sum saja"], answer: 0 }
  },
  {
    id: 40,
    slug: "json-dan-encoding",
    title: "40. JSON & Encoding",
    module: "Lanjut & Idiomatik",
    moduleId: 4,
    mdFile: "lessons/json-dan-encoding.md",
    duration: "15–20 m",
    level: "Menengah",
    description: "<p><strong>JSON & Encoding</strong> — Menengah • 15–20 m</p>",
    defaultCode: "package main\nimport (\"encoding/json\"; \"fmt\")\ntype User struct{ Name string `json:\"name\"`; Age int `json:\"age\"` }\nfunc main(){ u:=User{\"Budi\",25}; b,_:=json.Marshal(u); fmt.Println(string(b)) }",
    expectedOutput: "\"name\":\"Budi\"",
    hint: "Perhatikan output harus mengandung: \"name\":\"Budi\"",
    quiz: { question: "Tag struct untuk JSON di Go adalah?", options: ["`json:\"name\"`", "@Json(name)", "#json name", "json:name"], answer: 0 }
  },
  {
    id: 41,
    slug: "file-io",
    title: "41. File I/O",
    module: "Lanjut & Idiomatik",
    moduleId: 4,
    mdFile: "lessons/file-io.md",
    duration: "15–20 m",
    level: "Menengah",
    description: "<p><strong>File I/O</strong> — Menengah • 15–20 m</p>",
    defaultCode: "package main\nimport (\"fmt\"; \"os\")\nfunc main(){\n  _=os.WriteFile(\"/tmp/demo.txt\", []byte(\"halo go\"), 0644)\n  b,_:=os.ReadFile(\"/tmp/demo.txt\")\n  fmt.Println(string(b))\n}",
    expectedOutput: "halo go",
    hint: "Perhatikan output harus mengandung: halo go",
    quiz: { question: "Package untuk baca/tulis file adalah?", options: ["os & io", "fs", "file", "sys"], answer: 0 }
  },
  {
    id: 42,
    slug: "file-io-dasar",
    title: "42. File I/O Dasar",
    module: "Lanjut & Idiomatik",
    moduleId: 4,
    mdFile: "lessons/file-io-dasar.md",
    duration: "15–20 m",
    level: "Menengah",
    description: "<p><strong>File I/O Dasar</strong> — Menengah • 15–20 m</p>",
    defaultCode: "package main\nimport (\"fmt\"; \"os\")\nfunc main(){\n  f,_:=os.Create(\"/tmp/a.txt\"); f.WriteString(\"baris 1\\n\"); f.Close()\n  b,_:=os.ReadFile(\"/tmp/a.txt\"); fmt.Println(string(b))\n}",
    expectedOutput: "baris 1",
    hint: "Perhatikan output harus mengandung: baris 1",
    quiz: { question: "Fungsi untuk baca seluruh file singkat adalah?", options: ["os.ReadFile", "io.ReadAll saja", "file.read()", "cat()"], answer: 0 }
  },
  {
    id: 43,
    slug: "goroutine-dasar",
    title: "43. Goroutine Dasar",
    module: "Lanjut & Idiomatik",
    moduleId: 4,
    mdFile: "lessons/goroutine-dasar.md",
    duration: "20–30 m",
    level: "Menengah",
    description: "<p><strong>Goroutine Dasar</strong> — Menengah • 20–30 m</p>",
    defaultCode: "package main\nimport (\"fmt\"; \"time\")\nfunc cetak(s string){ for i:=0;i<3;i++{ fmt.Println(s,i); time.Sleep(50*time.Millisecond) } }\nfunc main(){ go cetak(\"goroutine\"); cetak(\"main\"); time.Sleep(300*time.Millisecond) }",
    expectedOutput: "goroutine",
    hint: "Perhatikan output harus mengandung: goroutine",
    quiz: { question: "Keyword untuk menjalankan goroutine adalah?", options: ["go", "async", "thread", "spawn"], answer: 0 }
  },
  {
    id: 44,
    slug: "channel-dasar",
    title: "44. Channel Dasar",
    module: "Concurrency & Production",
    moduleId: 5,
    mdFile: "lessons/channel-dasar.md",
    duration: "20–30 m",
    level: "Menengah",
    description: "<p><strong>Channel Dasar</strong> — Menengah • 20–30 m</p>",
    defaultCode: "package main\nimport \"fmt\"\nfunc main(){\n  ch:=make(chan string)\n  go func(){ ch <- \"halo dari goroutine\" }()\n  fmt.Println(<-ch)\n}",
    expectedOutput: "halo dari goroutine",
    hint: "Perhatikan output harus mengandung: halo dari goroutine",
    quiz: { question: "Operator kirim dan terima di channel adalah?", options: ["<-", "->", "=>", "::"], answer: 0 }
  },
  {
    id: 45,
    slug: "select",
    title: "45. select Statement",
    module: "Concurrency & Production",
    moduleId: 5,
    mdFile: "lessons/select.md",
    duration: "15–20 m",
    level: "Menengah",
    description: "<p><strong>select Statement</strong> — Menengah • 15–20 m</p>",
    defaultCode: "package main\nimport (\"fmt\"; \"time\")\nfunc main(){\n  ch1:=make(chan string); ch2:=make(chan string)\n  go func(){ time.Sleep(50*time.Millisecond); ch1<-\"dari ch1\" }()\n  select { case v:=<-ch1: fmt.Println(v); case v:=<-ch2: fmt.Println(v); case <-time.After(100*time.Millisecond): fmt.Println(\"timeout\") }\n}",
    expectedOutput: "dari ch1",
    hint: "Perhatikan output harus mengandung: dari ch1",
    quiz: { question: "select digunakan untuk?", options: ["Menunggu banyak channel sekaligus", "Mengganti switch", "Error handling", "Loop"], answer: 0 }
  },
  {
    id: 46,
    slug: "select-dan-concurrency",
    title: "46. select & Concurrency Pattern",
    module: "Concurrency & Production",
    moduleId: 5,
    mdFile: "lessons/select-dan-concurrency.md",
    duration: "20–30 m",
    level: "Mahir",
    description: "<p><strong>select & Concurrency Pattern</strong> — Mahir • 20–30 m</p>",
    defaultCode: "package main\nimport \"fmt\"\nfunc worker(id int,jobs <-chan int,results chan<- int){ for j:=range jobs{ results<- j*2 } }\nfunc main(){\n  jobs:=make(chan int,3); results:=make(chan int,3)\n  go worker(1,jobs,results)\n  jobs<-1; jobs<-2; jobs<-3; close(jobs)\n  fmt.Println(<-results, <-results, <-results)\n}",
    expectedOutput: "2 4 6",
    hint: "Perhatikan output harus mengandung: 2 4 6",
    quiz: { question: "Pattern fan-in/fan-out berkaitan dengan?", options: ["Menggabung/memecah channel goroutine", "Loop biasa", "Interface", "Generics"], answer: 0 }
  },
  {
    id: 47,
    slug: "mutex-sync",
    title: "47. Mutex & sync Package",
    module: "Concurrency & Production",
    moduleId: 5,
    mdFile: "lessons/mutex-sync.md",
    duration: "15–20 m",
    level: "Mahir",
    description: "<p><strong>Mutex & sync Package</strong> — Mahir • 15–20 m</p>",
    defaultCode: "package main\nimport (\"fmt\"; \"sync\")\nfunc main(){\n  var mu sync.Mutex; n:=0; var wg sync.WaitGroup\n  for i:=0;i<100;i++{ wg.Add(1); go func(){ mu.Lock(); n++; mu.Unlock(); wg.Done() }() }\n  wg.Wait(); fmt.Println(\"n =\",n)\n}",
    expectedOutput: "n = 100",
    hint: "Perhatikan output harus mengandung: n = 100",
    quiz: { question: "Untuk mencegah race condition kita pakai?", options: ["sync.Mutex", "var lock", "channel saja", "sleep"], answer: 0 }
  },
  {
    id: 48,
    slug: "context-dan-timeout",
    title: "48. Context & Timeout",
    module: "Concurrency & Production",
    moduleId: 5,
    mdFile: "lessons/context-dan-timeout.md",
    duration: "20–30 m",
    level: "Mahir",
    description: "<p><strong>Context & Timeout</strong> — Mahir • 20–30 m</p>",
    defaultCode: "package main\nimport (\"context\"; \"fmt\"; \"time\")\nfunc main(){\n  ctx,cancel:=context.WithTimeout(context.Background(), 80*time.Millisecond)\n  defer cancel()\n  select { case <-time.After(50*time.Millisecond): fmt.Println(\"selesai tepat waktu\"); case <-ctx.Done(): fmt.Println(\"timeout:\",ctx.Err()) }\n}",
    expectedOutput: "selesai tepat waktu",
    hint: "Perhatikan output harus mengandung: selesai tepat waktu",
    quiz: { question: "Package untuk timeout/cancel goroutine adalah?", options: ["context", "timeout", "cancel", "signal"], answer: 0 }
  },
  {
    id: 49,
    slug: "http-server-dasar",
    title: "49. HTTP Server Dasar (net/http)",
    module: "Concurrency & Production",
    moduleId: 5,
    mdFile: "lessons/http-server-dasar.md",
    duration: "20–30 m",
    level: "Mahir",
    description: "<p><strong>HTTP Server Dasar (net/http)</strong> — Mahir • 20–30 m</p>",
    defaultCode: "package main\nimport (\"fmt\"; \"net/http\")\nfunc handler(w http.ResponseWriter,r *http.Request){ fmt.Fprintln(w,\"Halo Go HTTP! path=\"+r.URL.Path) }\nfunc main(){ http.HandleFunc(\"/\",handler); fmt.Println(\"server di :8080 — http.HandleFunc siap\"); _=http.ListenAndServe }",
    expectedOutput: "server di :8080",
    hint: "Perhatikan output harus mengandung: server di :8080",
    quiz: { question: "Handler HTTP di net/http adalah?", options: ["func(w http.ResponseWriter, r *http.Request)", "func handle(req)", "app.get()", "router.handle()"], answer: 0 }
  },
  {
    id: 50,
    slug: "rest-api-project",
    title: "50. Project: REST API",
    module: "Concurrency & Production",
    moduleId: 5,
    mdFile: "lessons/rest-api-project.md",
    duration: "45–60 m",
    level: "Mahir",
    description: "<p><strong>Project: REST API</strong> — Mahir • 45–60 m</p>",
    defaultCode: "package main\nimport (\"encoding/json\"; \"fmt\"; \"net/http\")\ntype User struct{ ID int `json:\"id\"`; Name string `json:\"name\"` }\nfunc usersHandler(w http.ResponseWriter,r *http.Request){ w.Header().Set(\"Content-Type\",\"application/json\"); json.NewEncoder(w).Encode([]User{{1,\"Budi\"},{2,\"Ana\"}}) }\nfunc main(){ http.HandleFunc(\"/users\",usersHandler); fmt.Println(\"GET /users -> JSON — siap di :8080\") }",
    expectedOutput: "GET /users",
    hint: "Perhatikan output harus mengandung: GET /users",
    quiz: { question: "Router tipis populer untuk REST API Go adalah?", options: ["chi / gin / echo di atas net/http", "django", "express saja", "rails"], answer: 0 }
  },
  {
    id: 51,
    slug: "testing-dasar",
    title: "51. Testing Dasar (go test)",
    module: "Concurrency & Production",
    moduleId: 5,
    mdFile: "lessons/testing-dasar.md",
    duration: "20–30 m",
    level: "Menengah",
    description: "<p><strong>Testing Dasar (go test)</strong> — Menengah • 20–30 m</p>",
    defaultCode: "package main\nimport \"fmt\"\nfunc Add(a,b int)int{return a+b}\nfunc main(){\n  // simulasi go test — table driven test\n  cases:=[]struct{a,b,want int}{{1,2,3},{5,5,10},{-1,1,0}}\n  for _,c:=range cases{ if got:=Add(c.a,c.b); got!=c.want { fmt.Printf(\"FAIL %d+%d got %d\\n\",c.a,c.b,got)} else { fmt.Printf(\"PASS %d+%d=%d\\n\",c.a,c.b,got)}}\n}",
    expectedOutput: "PASS",
    hint: "Perhatikan output harus mengandung: PASS",
    quiz: { question: "Perintah menjalankan test di Go adalah?", options: ["go test ./...", "go run test", "npm test", "pytest"], answer: 0 }
  },
  {
    id: 52,
    slug: "reflection-dasar",
    title: "52. Reflection Dasar",
    module: "Concurrency & Production",
    moduleId: 5,
    mdFile: "lessons/reflection-dasar.md",
    duration: "20–30 m",
    level: "Mahir",
    description: "<p><strong>Reflection Dasar</strong> — Mahir • 20–30 m</p>",
    defaultCode: "package main\nimport (\"fmt\"; \"reflect\")\nfunc main(){\n  var x int=42\n  fmt.Println(\"type:\",reflect.TypeOf(x),\"kind:\",reflect.ValueOf(x).Kind())\n  fmt.Println(\"CanInterface:\",reflect.ValueOf(x).CanInterface())\n}",
    expectedOutput: "type:",
    hint: "Perhatikan output harus mengandung: type:",
    quiz: { question: "Package reflection di Go adalah?", options: ["reflect", "reflection", "meta", "inspect"], answer: 0 }
  },
  {
    id: 53,
    slug: "cli-application",
    title: "53. CLI Application",
    module: "Concurrency & Production",
    moduleId: 5,
    mdFile: "lessons/cli-application.md",
    duration: "20–30 m",
    level: "Menengah",
    description: "<p><strong>CLI Application</strong> — Menengah • 20–30 m</p>",
    defaultCode: "package main\nimport (\"flag\"; \"fmt\")\nfunc main(){\n  name:=flag.String(\"name\",\"Gopher\",\"nama pengguna\")\n  flag.Parse()\n  fmt.Println(\"Halo\",*name,\"— CLI siap! jalankan: go run main.go -name Budi\")\n}",
    expectedOutput: "Halo Gopher",
    hint: "Perhatikan output harus mengandung: Halo Gopher",
    quiz: { question: "Package untuk CLI modern di Go adalah?", options: ["cobra / flag (stdlib)", "commander", "yargs", "click"], answer: 0 }
  }
];


let currentLesson = -1;
let progress = JSON.parse(localStorage.getItem("go_progress")||"{}");
let filterQuery = "";

function filteredLessons(){
  if(!filterQuery) return lessons;
  const q=filterQuery.toLowerCase();
  return lessons.filter(l=> l.title.toLowerCase().includes(q) || l.slug.includes(q) || l.module.toLowerCase().includes(q));
}

function renderNav(filter){
  if(typeof filter==='string') filterQuery=filter;
  const nav=document.getElementById('lessons-nav');
  if(!nav) return;
  const q=(filterQuery||'').toLowerCase().trim();
  const curModId = lessons[currentLesson] ? lessons[currentLesson].moduleId : 1;
  nav.innerHTML = MODULES.map(function(mod){
    const modLessons = lessons.filter(function(l){ return l.moduleId===mod.id; });
    const filtered = q ? modLessons.filter(function(l){ return l.title.toLowerCase().includes(q) || mod.title.toLowerCase().includes(q) || (l.slug||'').includes(q); }) : modLessons;
    if(q && filtered.length===0) return '';
    const doneCount = modLessons.filter(function(l){ return !!progress[l.id]; }).length;
    const isCurrentModule = q ? true : mod.id===curModId;
    const lessonRows = filtered.map(function(l){
      const idx = lessons.findIndex(function(x){ return x.id===l.id; });
      const isActive = idx===currentLesson;
      const isDone = !!progress[l.id];
      const cls = isActive ? 'lesson-active font-semibold' : 'text-slate-400 hover:text-slate-200 hover:bg-white/5';
      return '<button onclick="loadLesson('+idx+'); if(typeof closeSidebar===\'function\')closeSidebar();" class="w-full text-left px-3 py-2 rounded-lg text-xs transition flex items-center gap-2.5 '+cls+'">' +
        '<span class="text-[11px] shrink-0">'+(isDone ? '&#9989;' : '&#9675;')+'</span>' +
        '<span class="truncate flex-1">'+l.title+'</span></button>';
    }).join('');
    const badgeCls = doneCount===modLessons.length ? 'bg-emerald-500/20 text-emerald-300' : 'bg-white/5 text-slate-500';
    return '<div class="mb-1">' +
      '<button onclick="toggleModule('+mod.id+')" class="w-full flex items-center justify-between px-4 py-2.5 text-xs font-semibold text-slate-300 hover:text-white hover:bg-white/5 transition rounded-lg text-left">' +
      '<span class="flex items-center gap-2 truncate"><i class="'+mod.icon+' text-cyan-400 text-sm w-4 text-center"></i><span class="truncate">'+mod.title+'</span></span>' +
      '<span class="text-[10px] font-mono px-2 py-0.5 rounded-full '+badgeCls+'">'+doneCount+'/'+modLessons.length+'</span></button>' +
      '<div id="module-'+mod.id+'" class="space-y-0.5 mt-0.5 px-2 '+(isCurrentModule?'':'hidden')+'">'+lessonRows+'</div></div>';
  }).join('');
  updateProgress();
}


function closeSidebar(){ try{ document.getElementById('sidebar')?.classList.remove('open'); document.getElementById('backdrop')?.classList.remove('show'); document.getElementById('sidebarOverlay')?.classList.remove('show'); document.getElementById('sidebar-overlay')?.classList.add('hidden'); }catch(e){} }
function toggleModule(id){
  const el=document.getElementById('module-'+id);
  if(el) el.classList.toggle('hidden');
}

function updateGutter(){
  const ta=document.getElementById('code-editor');
  const gutter=document.getElementById('editor-gutter');
  if(!ta||!gutter) return;
  const lines=ta.value.split('\n').length;
  gutter.innerHTML=Array.from({length:lines},(_,i)=>i+1).join('<br>');
}

async function loadLesson(index){
  if(index<0||index>=lessons.length) return;
  currentLesson=index;
  const lesson=lessons[index];
  if(typeof closeSidebar==='function') closeSidebar();
  const bc=document.getElementById('breadcrumb');
  const lt=document.getElementById('lesson-title');
  const ld=document.getElementById('lesson-duration');
  const ll=document.getElementById('lesson-level');
  const li=document.getElementById('lesson-id');
  if(bc) bc.textContent=lesson.module + ' • ' + lesson.duration;
  if(lt) lt.textContent=lesson.title.replace(/^\d+\.\s*/,'');
  if(ld) ld.innerHTML='<i class="fa-regular fa-clock"></i> '+lesson.duration;
  if(ll) ll.textContent=lesson.level;
  if(li) li.textContent=lesson.slug;

  const contentEl=document.getElementById('lesson-content');
  if(contentEl) contentEl.innerHTML=`<div style="text-align:center;padding:40px;color:var(--text-muted)"><i class="fa-solid fa-spinner fa-spin"></i> Memuat materi…</div>`;

  let html = lesson.description || '';
  try{
    const res=await fetch(lesson.mdFile);
    if(res.ok){
      const md=await res.text();
      if(typeof marked!=='undefined'){
        marked.setOptions({gfm:true,breaks:true});
        html=marked.parse(md);
      } else html=`<pre>${escapeHtml(md)}</pre>`;
    } else {
      html+=`<div style="margin-top:12px;padding:12px;background:rgba(6,182,212,.08);border:1px solid #06b6d4;border-radius:8px;color:#22d3ee">Materi <code>${lesson.mdFile}</code> belum tersedia. Editor di bawah tetap bisa dipakai.</div>`;
    }
  }catch(e){
    html+=`<div style="color:var(--text-muted);font-size:.8rem;margin-top:8px">Gagal memuat markdown: ${escapeHtml(e.message)}</div>`;
  }
  if(contentEl) contentEl.innerHTML='<div class="prose max-w-none">'+html+'</div>';

  // code
  let code=lesson.defaultCode||'';
  try{
    const r2=await fetch('lessons/'+lesson.slug+'.json');
    if(r2.ok){ const j=await r2.json(); if(j.code) code=j.code; }
  }catch(e){}
  code=code.replace(/\\n/g,'\n');
  const ed=document.getElementById('code-editor');
  if(ed){ ed.value=code; updateGutter(); }
  const out=document.getElementById('output');
  if(out) out.innerHTML='<span class="muted"># Klik Run atau jalankan `go run main.go` di terminal</span>';
  const vm=document.getElementById('validation-msg');
  if(vm){ vm.className='validation hidden'; vm.innerHTML=''; }
  // quiz
  const qs=document.getElementById('quiz-section');
  const qc=document.getElementById('quiz-content');
  const qr=document.getElementById('quiz-result');
  if(qr) qr.textContent='';
  if(lesson.quiz && qc && qs){
    qs.classList.remove('hidden');
    qc.innerHTML='<p class="text-slate-200 text-sm font-medium mb-3">'+escapeHtml(lesson.quiz.question)+'</p>' +
      '<div class="space-y-2">'+lesson.quiz.options.map(function(opt,i){
        return '<label class="flex items-center gap-3 p-3 rounded-xl bg-slate-800/60 hover:bg-white/5 border border-white/5 cursor-pointer transition text-xs sm:text-sm text-slate-300">' +
          '<input type="radio" name="quiz-opt" value="'+i+'" class="accent-cyan-500">' +
          '<span>'+escapeHtml(opt)+'</span></label>';
      }).join('')+'</div>';
  } else if(qs){ qs.classList.add('hidden'); }

  const prev=document.getElementById('prev-btn');
  const next=document.getElementById('next-btn');
  if(prev) prev.disabled=index===0;
  if(next) next.disabled=index===lessons.length-1;
  updateCompleteButtons();
  renderNav();
  
  document.getElementById('content-scroll')?.scrollTo({top:0,behavior:'smooth'});
}

// Terminal simulation
const TERM_CMDS={
  help:`Perintah tersedia:\n  go run main.go    — jalankan editor\n  go build          — simulasi build\n  go test           — jalankan validasi\n  go fmt            — format info\n  go vet            — cek statis\n  clear / cls       — bersihkan terminal\n  help              — bantuan ini`,
  "go fmt":"gofmt: semua file terformat rapi (simulasi).",
  "go vet":"go vet: no issues (simulasi).",
  "go build":"build: ./app -> binary siap (simulasi). Jalankan ./app untuk menjalankan.",
};

function termLog(html, cls=""){
  const log=document.getElementById('terminal-log');
  if(!log) return;
  const d=document.createElement('div');
  d.className='term-line '+cls;
  d.innerHTML=html;
  log.appendChild(d);
  log.scrollTop=log.scrollHeight;
}
function clearTerminal(){
  const log=document.getElementById('terminal-log');
  if(log) log.innerHTML='<div class="term-line muted">$ terminal dibersihkan</div>';
}
function clearOutput(){
  const o=document.getElementById('output');
  if(o) o.innerHTML='<span class="muted"># Output dibersihkan</span>';
  const v=document.getElementById('validation-msg'); if(v){ v.className='validation hidden'; v.innerHTML='';}
}
function copyCode(){
  const ta=document.getElementById('code-editor');
  if(!ta) return;
  navigator.clipboard.writeText(ta.value).then(()=>termLog('<span class="success">✓ Kode disalin ke clipboard</span>'));
}

async function runTerminal(){
  const inp=document.getElementById('terminal-input');
  if(!inp) return;
  const raw=inp.value.trim();
  if(!raw) return;
  termLog('<span style="color:var(--accent)">➜</span> '+escapeHtml(raw));
  inp.value='';
  const cmd=raw.toLowerCase();
  if(cmd==="clear"||cmd==="cls"){ clearTerminal(); return; }
  if(TERM_CMDS[cmd]){ termLog(escapeHtml(TERM_CMDS[cmd]).replace(/\n/g,'<br>')); return; }
  if(cmd.startsWith("go run")){
    termLog('<span class="muted">menjalankan go run…</span>');
    await runCode();
    return;
  }
  if(cmd.startsWith("go test")){
    termLog('<span class="muted">menjalankan go test…</span>');
    await runCode();
    return;
  }
  termLog('<span class="err">unknown command: '+escapeHtml(raw)+' (ketik help)</span>');
}

async function runCode(){
  const codeEl=document.getElementById('code-editor');
  const out=document.getElementById('output');
  const validation=document.getElementById('validation-msg');
  if(!codeEl||!out) return;
  // Sanitize code: normalize Windows \r\n to \n (prevents "newline in string" on Go playground)
  let code = codeEl.value.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
  // Auto-detect if double-quoted string was broken by accidental Enter inside string and convert to backtick
  // e.g. "foo\nbar" on separate lines without closing quote
  // Also trim trailing whitespaces
  code = code.split('\n').map(l => l.replace(/\s+$/, '')).join('\n');
  out.innerHTML='<span style="color:#22d3ee">⏳ Menjalankan Go…</span>';
  if(validation){ validation.className='validation hidden'; validation.innerHTML=''; }
  // try play.golang.org
  let success=false;
  try{
    const controller=new AbortController();
    const t=setTimeout(()=>controller.abort(),8000);
    const res=await fetch('https://play.golang.org/compile?output=json',{
      method:'POST',
      headers:{'Content-Type':'application/x-www-form-urlencoded'},
      body:'version=2&body='+encodeURIComponent(code),
      signal: controller.signal
    });
    clearTimeout(t);
    if(res.ok){
      const result=await res.json();
      if(result.Errors){
        out.innerHTML='<span style="color:#ef4444">❌ '+escapeHtml(result.Errors)+'</span>';
        termLog('<span class="err">compile error: '+escapeHtml(result.Errors).slice(0,300)+'</span>');
      } else {
        const goOut=(result.Events||[]).map(e=>e.Message).join('');
        out.innerHTML='<span style="color:#10b981">'+escapeHtml(goOut||'(tidak ada output)')+'</span>';
        termLog('<span class="success">go run: selesai</span><br>'+escapeHtml(goOut||'(no output)').slice(0,500));
        const expected=lessons[currentLesson]?.expectedOutput;
        if(expected && goOut.includes(expected.trim())){
          if(validation){ validation.className='validation correct'; validation.innerHTML='✅ Output sesuai ekspektasi! <b>'+escapeHtml(expected)+'</b> — progress tersimpan.'; }
          progress[lessons[currentLesson].id]=true;
          localStorage.setItem('go_progress',JSON.stringify(progress));
          updateProgress(); renderNav(); updateCompleteButtons();
        } else if(expected){
          if(validation){ validation.className='validation wrong'; validation.innerHTML='💡 Hint: output harus mengandung <b>'+escapeHtml(expected)+'</b><br><span style="color:var(--text-muted)">'+escapeHtml(lessons[currentLesson]?.hint||'')+'</span>'; }
        }
      }
      success=true;
    }
  }catch(e){
    // fallback simulation
  }
  if(!success){
    // local simulation fallback
    const simulated = simulateGo(code);
    out.innerHTML=simulated.html;
    termLog(simulated.term);
    if(simulated.ok){
      const expected=lessons[currentLesson]?.expectedOutput;
      if(expected && simulated.text.includes(expected.trim())){
        if(validation){ validation.className='validation correct'; validation.innerHTML='✅ Simulasi lokal: output mengandung <b>'+escapeHtml(expected)+'</b>'; }
        progress[lessons[currentLesson].id]=true;
        localStorage.setItem('go_progress',JSON.stringify(progress));
        updateProgress(); renderNav(); updateCompleteButtons();
      } else if(expected){
        if(validation){ validation.className='validation wrong'; validation.innerHTML='💡 Simulasi: output harus mengandung <b>'+escapeHtml(expected)+'</b>'; }
      }
    }
  }
}

function simulateGo(code){
  // very simple simulation: extract Println/Printf strings and basic expressions
  try{
    const lines=code.split('\n');
    let out=[];
    let ok=true;
    for(let line of lines){
      const m=line.match(/fmt\.Println\s*\(\s*["`](.*)["`]/);
      if(m) out.push(m[1]);
      const m2=line.match(/fmt\.Printf\s*\(\s*["`](.*)["`]/);
      if(m2) out.push(m2[1].replace(/%[vdsT%][^"]*/g,'').replace(/\\n/g,''));
      const m3=line.match(/fmt\.Print\s*\(\s*["`](.*)["`]/);
      if(m3) out.push(m3[1]);
    }
    if(out.length===0){
      // try to detect obvious syntax error
      if(code.includes("func main") && code.includes("fmt.")){
        out=["(simulasi lokal) program Go terdeteksi — klik Run dengan koneksi untuk eksekusi penuh di play.golang.org"];
      } else if(!code.includes("package main")){
        return {html:'<span style="color:#ef4444">❌ Simulasi: package main tidak ditemukan</span>', term:'<span class="err">simulasi: missing package main</span>', text:"", ok:false};
      } else {
        out=["(simulasi lokal) tidak ada fmt.Println terdeteksi — periksa kode"];
      }
    }
    const text=out.join(" ");
    return {html:'<span style="color:#10b981">'+escapeHtml(out.join("\n"))+'</span><br><span class="muted" style="font-size:.65rem">— simulasi lokal (offline fallback)</span>', term:escapeHtml(out.join("\n")), text, ok};
  }catch(e){
    return {html:'<span style="color:#ef4444">❌ Simulasi error: '+escapeHtml(e.message)+'</span>', term:'<span class="err">simulasi error</span>', text:"", ok:false};
  }
}

async function resetCode(){
  if(currentLesson<0) return;
  let code=lessons[currentLesson].defaultCode||'';
  try{
    const r=await fetch('lessons/'+lessons[currentLesson].slug+'.json');
    if(r.ok){ const j=await r.json(); if(j.code) code=j.code; }
  }catch(e){}
  const ed=document.getElementById('code-editor'); if(ed){ ed.value=code.replace(/\\n/g,'\n'); updateGutter(); }
  clearOutput();
}
function checkQuiz(){
  const lesson=lessons[currentLesson];
  if(!lesson||!lesson.quiz) return;
  const sel=document.querySelector('input[name="quiz-opt"]:checked');
  const res=document.getElementById('quiz-result');
  if(!sel){ if(res){res.innerHTML='<div class="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs">Pilih salah satu jawaban dahulu.</div>';} return; }
  const isCorrect=parseInt(sel.value)===lessons[currentLesson].quiz.answer;
  const qc=document.getElementById('quiz-content');
  let msg=document.getElementById('quiz-feedback');
  if(!msg){ msg=document.createElement('div'); msg.id='quiz-feedback'; msg.style.marginTop='12px'; msg.style.padding='12px'; msg.style.borderRadius='8px'; qc.appendChild(msg); }
  if(isCorrect){
    msg.style.background='rgba(16,185,129,.08)'; msg.style.border='1px solid #10b981'; msg.style.color='#10b981';
    msg.innerHTML='<i class="fa-solid fa-circle-check"></i> Benar! Lanjutkan ke pelajaran selanjutnya.';
    if(res){res.innerHTML='<div class="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs"><div class="font-bold flex items-center gap-2"><i class="fas fa-check-circle"></i> Jawaban Benar!</div></div>';}
    progress[lesson.id]=true;
    localStorage.setItem('go_progress',JSON.stringify(progress));
    updateProgress(); renderNav(); updateCompleteButtons();
  } else {
    msg.style.background='rgba(239,68,68,.08)'; msg.style.border='1px solid #ef4444'; msg.style.color='#ef4444';
    msg.innerHTML='<i class="fa-solid fa-circle-xmark"></i> Kurang tepat — coba lagi! Baca kembali materinya.';
    if(res){res.innerHTML='<div class="p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs"><div class="font-bold flex items-center gap-2"><i class="fas fa-times-circle"></i> Belum tepat</div><p class="text-slate-400 mt-1">Coba baca kembali materinya.</p></div>';}
  }
}
function nextLesson(){ if(currentLesson < lessons.length-1) loadLesson(currentLesson+1); }
function prevLesson(){ if(currentLesson > 0) loadLesson(currentLesson-1); }
function updateCompleteButtons(){
  const cur=lessons[currentLesson];
  const isDone=cur && !!progress[cur.id];
  const a=document.getElementById('complete-btn');
  const b=document.getElementById('completed-btn');
  const m=document.getElementById('complete-btn-mobile');
  if(isDone){
    if(a){ a.classList.add('hidden'); a.classList.remove('sm:flex'); }
    if(b){ b.classList.remove('hidden'); b.classList.add('flex'); }
    if(m) m.style.display='none';
  } else {
    if(a){ a.classList.remove('hidden'); a.classList.add('sm:flex'); }
    if(b){ b.classList.add('hidden'); b.classList.remove('flex'); }
    if(m) m.style.display='flex';
  }
}
function markComplete(){
  if(currentLesson<0) return;
  progress[lessons[currentLesson].id]=true;
  localStorage.setItem('go_progress',JSON.stringify(progress));
  updateProgress(); renderNav(); updateCompleteButtons();
  if(currentLesson < lessons.length-1) setTimeout(()=>loadLesson(currentLesson+1),600);
}
function updateProgress(){
  const done=Object.keys(progress).filter(function(k){return !!progress[k];}).length;
  const total=lessons.length;
  const pct=Math.round((done/total)*100);
  const elP=document.getElementById('course-progress'); if(elP) elP.textContent=pct+'%';
  const elF=document.getElementById('progress-fill'); if(elF) elF.style.width=pct+'%';
  const elDone=document.getElementById('stat-done'); if(elDone) elDone.textContent=String(done);
  const mob=document.getElementById('mobile-progress'); if(mob) mob.textContent=pct+'%';
  const bar=document.getElementById('progress-fill-bar'); if(bar) bar.style.width=pct+'%';
  const t=document.getElementById('progress-text'); if(t) t.textContent=pct+'%';
}
function resetProgress(){ if(!confirm('Reset semua progress?')) return; progress={}; localStorage.removeItem('go_progress'); updateProgress(); renderNav(); updateCompleteButtons(); }
function escapeHtml(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }

document.addEventListener('DOMContentLoaded',()=>{
  progress=JSON.parse(localStorage.getItem('go_progress')||'{}');
  renderNav();
  updateProgress();
  updateCompleteButtons();
  // gutter live
  const ed=document.getElementById('code-editor');
  if(ed){ ed.addEventListener('input',updateGutter); ed.addEventListener('scroll',()=>{ const g=document.getElementById('editor-gutter'); if(g) g.scrollTop=ed.scrollTop; }); }
  // tabs
  document.querySelectorAll('.tab').forEach(t=>{
    t.addEventListener('click',()=>{
      document.querySelectorAll('.tab').forEach(x=>x.classList.remove('active'));
      document.querySelectorAll('.tab-panel').forEach(x=>x.classList.remove('active'));
      t.classList.add('active');
      const panel=document.getElementById('tab-'+t.dataset.tab);
      if(panel) panel.classList.add('active');
    });
  });
  // search
  const s=document.getElementById('searchInput') || document.getElementById('lesson-search');
  const sm=document.getElementById('searchInputMobile') || document.getElementById('lesson-search-mobile');
  const handler=(v)=>{ filterQuery=v; renderNav(); };
  if(s) s.addEventListener('input',e=>handler(e.target.value));
  if(sm) sm.addEventListener('input',e=>{ handler(e.target.value); if(s) s.value=e.target.value; });
  document.addEventListener('keydown',e=>{
    if(e.key==='/' && !/INPUT|TEXTAREA/.test(document.activeElement.tagName)){ e.preventDefault(); s?.focus(); }
    if((e.metaKey||e.ctrlKey) && e.key==='Enter'){ e.preventDefault(); runCode(); }
    if(e.key==='Escape'){ document.getElementById('sidebar')?.classList.remove('open'); document.getElementById('backdrop')?.classList.remove('show'); }
  });
  // terminal enter
  const ti=document.getElementById('terminal-input');
  if(ti) ti.addEventListener('keydown',e=>{ if(e.key==='Enter'){ e.preventDefault(); runTerminal(); }});
  // mobile
  const mt=document.getElementById('menuToggle');
  const bd=document.getElementById('backdrop');
  if(mt) mt.addEventListener('click',()=>{
    const sb=document.getElementById('sidebar');
    sb?.classList.toggle('open');
    bd?.classList.toggle('show');
  });
  if(bd) bd.addEventListener('click',()=>{
    document.getElementById('sidebar')?.classList.remove('open');
    bd.classList.remove('show');
  });
  // theme
  const stored=localStorage.getItem('theme');
  if(stored==='light') document.body.classList.add('light');
  // initial gutter
  setTimeout(updateGutter,200);
  // auto-load first lesson
  if (typeof loadLesson === 'function') setTimeout(() => { try{ loadLesson(0);}catch(e){} }, 80);
});
