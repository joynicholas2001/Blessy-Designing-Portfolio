import React from 'react';
import Portfolio from '../components/Portfolio';
import { motion } from 'framer-motion';

export default function AllProjects() {
  return (
    <main style={{ minHeight: '100vh', background: 'var(--bg-secondary)' }}>
      {/* Portfolio component without limit prop will show all items */}
      <Portfolio />
    </main>
  );
}
