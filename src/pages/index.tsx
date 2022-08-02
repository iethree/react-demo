import * as React from 'react';

import Layout from '@/components/layout/Layout';
import { Nav } from '@/components/Nav';

export default function HomePage() {
  return (
    <Layout>
      <main className='layout flex min-h-screen flex-col items-center justify-center text-center'>
        <Nav />
      </main>
    </Layout>
  );
}
