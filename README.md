# Tix Event - Aplikasi Pembelian Tiket Event


Selamat datang di repositori aplikasi web Tix Event! Ini adalah aplikasi sederhana yang memungkinkan pengguna untuk membeli tiket event dan juga membuat event mereka sendiri. Aplikasi ini dibangun dengan menggunakan teknologi React JS dan Redux untuk frontend-nya, sementara backend-nya menggunakan framework Express JS dan beberapa teknologi lain seperti JWT, RestAPI, dan Axios. Repository backend dapat diakses di [sini](https://github.com/putubagus13/fw15-backend).

## Fitur Utama

- **Pembelian Tiket Event**: Pengguna dapat menjelajahi daftar event yang tersedia dan membeli tiket untuk event-event tersebut.

- **Membuat Event**: Pengguna yang memiliki akun dapat membuat event mereka sendiri, mengatur detailnya, dan menjual tiketnya kepada pengguna lain.

- **Autentikasi**: Sistem otentikasi menggunakan JWT (JSON Web Tokens) untuk menjaga keamanan akun pengguna.

- **Manajemen Event**: Pengguna yang membuat event dapat mengelola detail event, termasuk harga tiket, jumlah tiket yang tersedia, dan lainnya.

- **Riwayat Pembelian**: Pengguna dapat melihat riwayat pembelian tiket event yang telah mereka beli.

## Teknologi Utama

Aplikasi Tix Event dibangun dengan menggunakan teknologi berikut:

- **React JS**: Pustaka JavaScript untuk membangun antarmuka pengguna yang dinamis dan responsif.

- **Redux**: Manajemen state yang kuat untuk mengelola data aplikasi dengan baik.

- **Express JS**: Framework Node.js yang digunakan untuk membuat server backend.

- **MongoDB**: Database NoSQL yang digunakan untuk menyimpan data event, tiket, pengguna, dan informasi lainnya.

- **JWT (JSON Web Tokens)**: Digunakan untuk otentikasi dan otorisasi pengguna.

- **RestAPI**: Digunakan untuk berkomunikasi antara frontend dan backend.

- **Axios**: Library HTTP client untuk membuat permintaan HTTP dari frontend ke backend.

## Pengembangan Lokal

Jika Anda ingin menjalankan Tix Event di lingkungan pengembangan lokal Anda, ikuti langkah-langkah berikut:

1. Clone repositori frontend ini:

   ```bash
   git clone https://github.com/putubagus13/fw15-frontend.git
   cd fw15-frontend
   ```

2. Instal semua dependensi:

   ```bash
   npm install
   ```

3. Buat berkas konfigurasi `.env.local` berdasarkan `.env.example` dan sesuaikan dengan pengaturan Anda.

4. Jalankan server pengembangan:

   ```bash
   npm run dev
   ```

5. Akses aplikasi di [http://localhost:5174](http://localhost:5174) dalam browser Anda.

## Kontribusi

Kami sangat terbuka terhadap kontribusi! Jika Anda ingin berkontribusi pada pengembangan Tix Event, silakan buat _fork_ repositori ini dan kirim _pull request_ setelah melakukan perubahan yang dibutuhkan.


Terima kasih telah menggunakan Tix Event! Aplikasi Tix Event masih dalam pengembangan untuk perporma dan fungsional yang lebih baik

---
© 2023 Tix Event. Dikembangkan oleh Putu Bagus Raditya
