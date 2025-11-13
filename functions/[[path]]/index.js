// ISI UNTUK: functions/[[path]]/index.js

export async function onRequest(context) {
  try {
    // 1. Ambil file 404.html dari aset statis Anda (folder 'public')
    //    menggunakan context.env.ASSETS. Ini cara yang benar.
    const response404 = await context.env.ASSETS.fetch(
      new URL('/404.html', context.request.url)
    );

    // 2. Kembalikan file HTML itu, tapi dengan status 404
    return new Response(response404.body, {
      status: 404, // <-- Tetap kirim status 404 yang benar
      headers: response404.headers
    });
    
  } catch (err) {
    // 3. Jika file 404.html-nya sendiri tidak ada (duh)
    return new Response('Halaman 404 kustom tidak ditemukan.', { status: 404 });
  }
}
