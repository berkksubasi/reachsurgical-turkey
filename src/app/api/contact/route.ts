import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Natro SMTP ayarları - https://www.natro.com/blog/smtp-nedir-wordpress-smtp-mail-ayari-nasil-yapilir/
    const transporter = nodemailer.createTransport({
      host: 'mail.endolink.com.tr',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false
      },
      debug: true
    });

    // Bağlantıyı test et
    try {
      await transporter.verify();
      console.log('SMTP bağlantısı başarılı');
    } catch (verifyError) {
      console.error('SMTP bağlantı testi başarısız:', verifyError);
      throw verifyError;
    }

    // E-posta içeriğini oluştur
    const mailOptions = {
      from: `"Endolink İletişim" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: 'İletişim Formu - Yeni Mesaj',
      html: `
        <h2>İletişim Formu - Yeni Mesaj</h2>
        <p><strong>Promosyon Kodu:</strong> ${body.promoCode}</p>
        <p><strong>Ad Soyad:</strong> ${body.fullName}</p>
        <p><strong>E-posta:</strong> ${body.email}</p>
        <p><strong>Telefon:</strong> ${body.phone}</p>
        <p><strong>Ülke:</strong> ${body.country}</p>
        <p><strong>İlgi Alanları:</strong></p>
        <ul>
          <li>Cerrahi Zımbalama: ${body.interests.surgicalStapling ? 'Evet' : 'Hayır'}</li>
          <li>Ultrasonik Cerrahi: ${body.interests.ultrasonicSurgery ? 'Evet' : 'Hayır'}</li>
        </ul>
        <p><strong>Mesaj:</strong></p>
        <p>${body.message}</p>
      `,
    };

    // E-postayı gönder
    const info = await transporter.sendMail(mailOptions);
    console.log('E-posta gönderildi:', info.messageId);

    return NextResponse.json({ message: 'Form başarıyla gönderildi' }, { status: 200 });
  } catch (error: any) {
    console.error('E-posta gönderim hatası:', error);
    
    // Hata detaylarını logla
    if (error.code) {
      console.error('Hata kodu:', error.code);
    }
    if (error.command) {
      console.error('Hata komutu:', error.command);
    }
    if (error.response) {
      console.error('SMTP sunucu yanıtı:', error.response);
    }
    if (error.errno) {
      console.error('Sistem hata kodu:', error.errno);
    }
    if (error.syscall) {
      console.error('Sistem çağrısı:', error.syscall);
    }
    if (error.hostname) {
      console.error('Host adı:', error.hostname);
    }
    
    return NextResponse.json(
      { 
        error: 'Form gönderilirken bir hata oluştu',
        details: error.message,
        code: error.code,
        command: error.command
      },
      { status: 500 }
    );
  }
} 