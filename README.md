# Go Learning Path — Interactive Tutorial 🚀

<p align="center">
  <a href="https://personalbotai.github.io/go-learning-path/">
    <img src="https://img.shields.io/badge/🔴_LIVE-Go_Learning_Path-00ADD8?style=for-the-badge&logo=go&logoColor=white" alt="Live Demo">
  </a>
  <a href="https://github.com/personalbotai/go-learning-path/actions">
    <img src="https://img.shields.io/github/actions/workflow/status/personalbotai/go-learning-path/deploy.yml?label=Deploy&logo=github&style=for-the-badge" alt="Deploy">
  </a>
</p>

Kuasai **Go (Golang)** secara interaktif — dari nol ke production-grade. **53 pelajaran** terkurasi dengan editor Go live, terminal simulasi, quiz adaptif, dan progress tracking. Semua berjalan di browser, tanpa install.

## ✨ Features

| Feature | Detail |
|---------|--------|
| **53 Pelajaran** | Dari "Apa itu Go?" sampai REST API & Testing |
| **5 Modul Terstruktur** | Fondasi → Kontrol & Fungsi → Data Structure → Lanjutan → Concurrency |
| **Live Code Editor** | Tulis Go langsung, dijalankan via play.golang.org, auto-validated |
| **Terminal Simulasi** | `go run`, `go build`, `go test`, `go fmt` — tanpa install Go |
| **Quiz Adaptif** | Setiap pelajaran memiliki quiz bermakna dengan jawaban tervalidasi |
| **Progress Tracking** | LocalStorage-based, progress tersimpan otomatis |
| **Responsive UI** | Mobile-first premium design, dark mode, search, keyboard shortcuts |
| **Offline Fallback** | Simulasi lokal saat play.golang.org tidak tersedia |

## 🎯 Kurikulum

1. **Fondasi Go** (11 pelajaran) — Apa itu Go, instalasi, variabel, tipe data, operator, I/O
2. **Kontrol & Fungsi** (11 pelajaran) — if/else, for loop, switch, fungsi, closure, variadic
3. **Struktur Data** (11 pelajaran) — Array, slice, map, struct, method, pointer, package
4. **Lanjutan & Idiomatik** (10 pelajaran) — Interface, generics, error handling, JSON, file I/O
5. **Concurrency & Production** (10 pelajaran) — Goroutine, channel, select, mutex, HTTP server, REST API, testing

## 🚀 Live Demo

**➡️ [personalbotai.github.io/go-learning-path](https://personalbotai.github.io/go-learning-path/)**

## 🛠 Tech Stack

- HTML5, CSS3 (custom premium design system), JavaScript ES6+
- [Tailwind CSS](https://tailwindcss.com/) (CDN) — utility classes
- [marked.js](https://marked.js.org/) — Markdown rendering
- [Font Awesome 6](https://fontawesome.com/) — icons
- [Google Fonts](https://fonts.google.com/) — Inter, JetBrains Mono, Space Grotesk
- [Go Playground API](https://play.golang.org/) — live code execution
- LocalStorage — progress persistence

## ⌨️ Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `/` | Focus search |
| `Cmd/Ctrl + Enter` | Run code |
| `Esc` | Close sidebar (mobile) |

## 📁 Project Structure

```
go-learning-path/
├── index.html          # Main app shell
├── styles.css          # Premium CSS design system
├── app.js              # Core logic: 53 lessons, quiz, editor, terminal
├── enhancement.js      # Theme toggle, smooth scroll, observers
├── lessons/            # 53 markdown + 16 JSON code files
│   ├── apa-itu-go.md
│   ├── apa-itu-go.json
│   ├── hello-world.md
│   └── ...
├── .github/workflows/
│   └── deploy.yml      # GitHub Pages deployment
└── README.md
```

## 🤝 Contributing

1. Fork repo
2. Tambah/perbaiki materi di `lessons/*.md`
3. Update `app.js` jika menambah pelajaran baru
4. Buat Pull Request

## 📄 License

MIT — bebas digunakan, dimodifikasi, dan didistribusikan.

---

<p align="center">
  Dibuat dengan ❤️ untuk komunitas Go Indonesia<br>
  <a href="https://go.dev">go.dev</a> • <a href="https://github.com/personalbotai/go-learning-path">GitHub</a>
</p>
