import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const formData = await request.json();
    const { fullName, email, phone, company, subject, message } = formData;

    // Form verilerini kontrol et
    if (!fullName || !email || !phone || !subject || !message) {
      return NextResponse.json(
        { error: 'Lütfen tüm zorunlu alanları doldurun' },
        { status: 400 }
      );
    }

    // SMTP ayarları
    const transporter = nodemailer.createTransport({
      host: 'mail.kurumsaleposta.com',
      port: 587, // TLS port
      secure: false, // STARTTLS
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      },
      tls: {
        rejectUnauthorized: false,
        ciphers: 'SSLv3'
      }
    });

    // Bağlantıyı test et
    try {
      await transporter.verify();
      console.log('SMTP bağlantısı başarılı');
    } catch (error) {
      console.error('SMTP bağlantı testi başarısız:', error);
      const errorMessage = error instanceof Error ? error.message : 'Bilinmeyen hata';
      throw new Error(`Mail sunucusuna bağlanılamadı: ${errorMessage}`);
    }

    // Mail içeriği
    const mailOptions = {
      from: `"Endolink İletişim" <${process.env.EMAIL_USER}>`,
      to: 'info@endolink.com.tr',
      subject: `İletişim Formu: ${subject}`,
      html: `
        <h2>Yeni İletişim Formu Mesajı</h2>
        <p><strong>Ad Soyad:</strong> ${fullName}</p>
        <p><strong>E-posta:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone}</p>
        <p><strong>Şirket:</strong> ${company || 'Belirtilmemiş'}</p>
        <p><strong>Konu:</strong> ${subject}</p>
        <p><strong>Mesaj:</strong></p>
        <p>${message}</p>
      `,
      replyTo: email
    };

    // Mail gönderme
    const info = await transporter.sendMail(mailOptions);
    console.log('Mail gönderildi:', info.messageId);

    return NextResponse.json({ 
      success: true,
      message: 'Mesajınız başarıyla gönderildi'
    });
  } catch (error) {
    console.error('Mail gönderme hatası:', error);
    return NextResponse.json(
      { 
        error: error instanceof Error ? error.message : 'Mail gönderilirken bir hata oluştu'
      },
      { status: 500 }
    );
  }
} 