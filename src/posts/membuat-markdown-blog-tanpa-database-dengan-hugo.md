---
title: Membuat Markdown Blog Dengan Hugo
description: Membuat web blog dengan cepat tanpa database
date: "10-14-2023"
categories:
    - tech
    - tutorial
    - hugo
published: false
---

<script lang="ts">
	import { ArrowUpRight } from "lucide-svelte";
</script>

<img src="https://i.ibb.co/xJGpw05/Hugo-hero.jpg" alt="Hugo hero">

## Table of content

Hugo adalah sebuah framework dalam membuat website statis yang dibangun dengan [Golang.](https://go.dev/learn/) Website statis adalah pilihan alternatif untuk membuat konten website dengan skala yang lebih kecil dan cepat seperti blog atau sesimple web portofolio.

"Hasil akhir dari tutorial ini adalah sebuah folder public yang berisi semua file-file yang dibutuhkan dalam mem-publish website di web hosting pilihan kalian."

## Persiapan

Yang perlu disiapkan sebelum mengikuti tutorial :

1. Git (jika belum terinstall silahkan download git [disini](https://git-scm.com/downloads))
2. Text editor (VSCode atau yang lainya)

## Install hugo

Pertama-tama, install Hugo pada perangkat dengan mengikuti panduan instalasi dari [hugo installation](https://gohugo.io/getting-started/installing/) menyesuaikan dengan sistem operasi yang anda gunakan.

Buka terminal dan ketik/copy perintah dibawah : (khusus windows)

```bash
winget install Hugo.Hugo.Extended
```

## Buat project

Setelah terinstall, tentukan folder yang akan digunakan untuk menyimpan file project dan ketikan/copy perintah berikut di terminal. _(hilangkan tanda petik)_

```bash
hugo new site "nama-project"
```

Hugo akan otomatis membuat folder baru dengan nama _"nama-project"_.

Kemudian masuklah ke folder tersebut dengan perintah berikut :

```bash
cd "nama-project"
```

Ketika sudah masuk, buka folder project dengan text editor.

<img src="https://i.ibb.co/vYMBVF2/Struktur-folder-hugo.jpg" alt="Struktur folder hugo" loading="lazy">

## Memilih tema

Hugo memiliki banyak tema yang bisa gunakan. Pilih tema yang dirasa sesuai dari [hugo themes.](https://themes.gohugo.io/)

Kemudian carilah link seperti contoh dan jalankan di terminal. (hilangkan tanda petik)

```bash
git init
git submodule add "https://github.com/docura/docura.git" themes/"docura"
```

Folder baru bernama _"themes"_ akan muncul di folder project.

## Konfigurasi

Cari file yang bernama hugo.toml di dalam folder project untuk mengkonfigurasi alamat situs. Jangan lupa save sebelum keluar dari file.

<img src="https://i.ibb.co/N1gxNFY/Tampilan-hugo-toml.jpg" alt="Tampilan hugo.toml" loading="lazy">

## Preview dan kustomisasi

Berdasarkan tema yang dipakai, struktur folder dan penamaan file akan sedikit berbeda-beda. Selalu cek bagian dokumentasi dari theme yang anda pakai.

Untuk menjalankan web secara lokal jalankan perintah berikut :

```bash
hugo server
```

<img src="https://i.ibb.co/rH53LgG/Tampilan-web.jpg" alt="Tampilan web" loading="lazy">

Silahkan edit, tambahkan, atau kurangi elemen dari tema yang dipakai sesuai kebutuhan dan tujuan masing-masing. Gunakan _ctrl + c_ untuk menghentikan situs.

## Mencetak situs

Jika dirasa sudah cukup, selanjutnya cetak/build project dengan perintah berikut :

```bash
hugo -t "nama-tema"
```

Akan muncul folder baru bernama _"public"_ yang bisa dipakai untuk mempublish situs ke penyedia hosting favorit kalian!

<img src="https://i.ibb.co/7g1Dnx7/Public-folder.jpg" alt="Public folder" loading="lazy">

_Jangan lupa untuk mengubah file hugo.toml dan sesuaikan domain yang akan dipakai sebelum mencetak situs._

## Catatan

<a href="https://themes.gohugo.io/themes/docura/" target="_blank"><span class="notes">Tema yang dipakai<ArrowUpRight size={20}/></span></a>
