"use client"

import React, { useState, useEffect } from 'react';

interface ClockProps {
  className?: string;
}

const Clock: React.FC<ClockProps> = ({className= ""}) => {
  // Inisialisasi state dengan null untuk mencegah perbedaan SSR/client
  const [currentTime, setCurrentTime] = useState<Date | null>(null);

  // Fungsi untuk memperbarui waktu setiap detik
  useEffect(() => {
    // Set waktu awal setelah client-side hydration
    setCurrentTime(new Date());
    
    const intervalId = setInterval(() => {
      setCurrentTime(new Date()); // Memperbarui state dengan waktu baru
    }, 1000); // Update setiap 1000ms (1 detik)

    // Membersihkan interval saat komponen di-unmount
    return () => clearInterval(intervalId);
  }, []);

  // Jika currentTime masih null (server-side), tampilkan placeholder
  if (!currentTime) {
    return <h2 className={className}>Loading...</h2>;
  }

  // Format tanggal menjadi "March 14, 2025"
  const formattedDate = currentTime.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  });

  // Format waktu (misalnya: "12:34:56")
  const formattedTime = currentTime.toLocaleTimeString('en-US');

  return (
    <h2 className={className}>{formattedTime}</h2>
  );
};

export default Clock;