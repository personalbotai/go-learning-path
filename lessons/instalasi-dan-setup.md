## Tujuan Pembelajaran

 
- Menginstal Go, mengkonfigurasi workspace, dan memahami struktur proyek Go.

 
 
 
## Materi

 Dalam modul ini, kita akan menginstal Go dan menyiapkan development environment.

### Instalasi Go

#### Linux

```
# Download dan install
wget https://go.dev/dl/go1.22.0.linux-amd64.tar.gz
sudo tar -C /usr/local -xzf go1.22.0.linux-amd64.tar.gz

# Tambahkan ke PATH
export PATH=$PATH:/usr/local/go/bin

# Verifikasi
go version
```

#### macOS (Homebrew)

```
brew install go
go version
```

#### Windows

Download installer dari go.dev/dl dan jalankan installer.

### Go Modules (Modern Approach)

```
# Buat proyek baru
mkdir hello-go && cd hello-go
go mod init github.com/username/hello-go

# Struktur yang tercipta:
# hello-go/
# ├── go.mod # Module definition & dependencies
# └── (source files)
```

### File go.mod

```
module github.com/username/hello-go

go 1.22
```

### Environment Variables Penting

```
# GOPATH (default: ~/go) - untuk installed packages
# GOROOT - lokasi instalasi Go
# GOPROXY - proxy untuk module downloads (default: https://proxy.golang.org)

# Cek semua env
go env

# Cek satu variabel
go env GOPATH
```

### Editor Setup

Rekomendasi:

- **VS Code** + Go extension (dari Google)

- **GoLand** (JetBrains) — IDE lengkap untuk Go

- **Vim/Neovim** + vim-go / gopls

 
 
 
## Rangkuman

 Modul ini membahas instalasi dan setup environment dalam Go. Praktikkan dengan membuat kode sendiri.

 
 
 ← Kembali