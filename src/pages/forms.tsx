import React, { useState } from 'react';

import Layout from '@/components/layout/Layout';
import { Nav } from '@/components/Nav';

export default function HTMLDemo() {
  const [input1, setInput1] = useState(0);
  const [input2, setInput2] = useState(0);

  return (
    <Layout>
      <main className='flex min-h-screen items-center justify-center'>
        <div className='text-6xl'>
          <input
            value={input1}
            onChange={(e) => setInput1(Number(e.target.value))}
          />
          <span className='mx-5'>+</span>
          <input
            value={input2}
            onChange={(e) => setInput2(Number(e.target.value))}
          />
          <span className='mx-5'>=</span>
          <span className='text-6xl'>{input1 + input2}</span>
        </div>

        <div className='fixed bottom-0 pb-5'>
          <Nav />
        </div>
      </main>
    </Layout>
  );
}
