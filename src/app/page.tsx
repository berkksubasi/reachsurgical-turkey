import { redirect } from 'next/navigation';

// Ana dizindeki sayfa, varsayılan dil olan Türkçe'ye yönlendirir
export default function Home() {
  redirect('/tr');
}
