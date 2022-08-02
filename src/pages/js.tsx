import React from 'react';

import Layout from '@/components/layout/Layout';
import { Nav } from '@/components/Nav';

export default function HTMLDemo() {
  const calculationResult = 10 + 12;

  return (
    <Layout>
      <main className='flex min-h-screen items-center justify-center'>
        <div className='text-6xl'>Answer: {calculationResult}</div>
        <div className='fixed bottom-0 pb-5'>
          <Nav />
        </div>
      </main>
    </Layout>
  );
}
