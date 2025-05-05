import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface EmailError {
  code: string;
  command: string;
  errno: number;
  syscall: string;
  address: string;
  port: number;
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Natro SMTP ayarları
    const transporter = nodemailer.createTransport({
      host: 'mail.endolink.com.tr',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    // Bağlantıyı test et
    try {
      await transporter.verify();
      console.log('SMTP bağlantısı başarılı');
    } catch (verifyError) {
      console.error('SMTP bağlantı testi başarısız:', verifyError);
      throw verifyError;
    }

    // Mail içeriği
    const mailOptions = {
      from: `"Endolink İletişim" <${process.env.EMAIL_USER}>`,
      to: 'info@endolink.com.tr',
      subject: `İletişim Formu: ${data.subject}`,
      html: `
        <h2>Yeni İletişim Formu Mesajı</h2>
        <p><strong>Ad Soyad:</strong> ${data.fullName}</p>
        <p><strong>E-posta:</strong> ${data.email}</p>
        <p><strong>Telefon:</strong> ${data.phone}</p>
        <p><strong>Şirket:</strong> ${data.company || 'Belirtilmemiş'}</p>
        <p><strong>Konu:</strong> ${data.subject}</p>
        <p><strong>Mesaj:</strong></p>
        <p>${data.message}</p>
      `
    };

    // Maili gönder
    const info = await transporter.sendMail(mailOptions);
    console.log('E-posta gönderildi:', info.messageId);

    return NextResponse.json({ 
      success: true, 
      message: 'Mesajınız başarıyla gönderildi.' 
    });

  } catch (error) {
    console.error('Mail gönderme hatası:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Mesaj gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyiniz.' 
      },
      { status: 500 }
    );
  }
} 