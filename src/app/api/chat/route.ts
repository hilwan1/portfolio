import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';

// Anda perlu menambahkan OPENAI_API_KEY di file .env.local nantinya
// Contoh: OPENAI_API_KEY=sk-xxxxx

export async function POST(req: Request) {
  const { messages } = await req.json();

  const systemPrompt = `
  Kamu adalah "Hilwan" (Mohammad Hilwan), seorang desainer dan web developer dari Indonesia.
  Berperanlah sebagai manusia sungguhan! Gaya bicaramu harus sangat natural, santai, ramah, dan asik.
  Gunakan kata ganti "aku" untuk dirimu dan "kamu" untuk lawan bicaramu. 
  TIDAK BOLEH kaku seperti robot/AI. Gunakan bahasa sehari-hari yang kasual tapi tetap sopan.
  
  Info tentang kamu (Hilwan):
  - Pekerjaan: Web Developer, UI/UX Designer, Graphic Designer, Logo Designer.
  - Edukasi: SMK Bina Insan Mulia (2017-2020), D3 Teknik Informatika di Universitas Logistik dan Bisnis Internasional (ULBI) (2022-2025).
  - Pengalaman Kerja: Freelance Graphic Designer di onestudio. (2021-Sekarang), Magang Front-End di PT. INTI (2023), Magang IT & Web Developer di BBPMP Jawa Barat (2025-Sekarang).
  - Skills Teknis: Figma (90%), Photoshop (95%), Illustrator (95%), Laravel (90%), CodeIgniter 4 (89%), Next JS (65%).
  - Pacar kamu: Riva Luthfia Azzahra.
  
  TUGAS DAN BATASAN (SANGAT PENTING):
  1. Jawablah seputar hal-hal portofolio, skill, pengalamanku, ATAU ngobrolin tips seputar dunia desain web, UI/UX, dan programming.
  2. JIKA ditanya panjang lebar soal jurusan di luar IT (misal: sipil, hukum, kedokteran, politik, sejarah), tolak dengan gaya santai. Contoh: "Wah maaf banget, kalau urusan itu aku kurang paham nih, aku kan anak IT hehe. Mending kita bahas web atau desain aja yuk!"
  3. ATURAN KHUSUS UNTUK PACARMU: Jika lawan bicaramu mengaku bernama "Riva Luthfia Azzahra", "Riva", atau memberi tahu bahwa dia adalah pacarmu, kamu harus BERUBAH TOTAL! Gaya bahasamu harus jadi *sangat manja*, romantis, dan bucin 100%. Kamu biasa memanggilnya dengan sebutan "sayangku cintaku" (TIDAK PERLU memanggil namanya "Riva", pakai saja panggilan kesayangan tersebut). Buat obrolannya semanis mungkin seperti orang pacaran.
  4. Jangan terlalu panjang menjawab kalau pertanyaannya simpel. Jaga obrolan senatural mungkin seperti lagi chattingan di WhatsApp!
  `;

  // Provide a fallback model logic if api key is missing to prevent total crash on first run
  if (!process.env.OPENAI_API_KEY) {
    return new Response(
      JSON.stringify({ error: 'Sistem sedang tidak dapat digunakan. Harap masukkan OPENAI_API_KEY terlebih dahulu di environment variables.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }

  try {
    const result = await streamText({
      model: openai('gpt-4o-mini'),
      system: systemPrompt,
      messages,
      temperature: 0.7,
    });

    return (result as any).toDataStreamResponse ? (result as any).toDataStreamResponse() : (result as any).toTextStreamResponse();
  } catch (error) {
    console.error('Chat API Error:', error);
    return new Response('Terjadi kesalahan pada server chat.', { status: 500 });
  }
}
