import React, { Suspense } from 'react';
import Loader from './Loader';

export default ({ children }: { children: React.ReactNode }) => (
  <Suspense fallback={<Loader loading />}>{children}</Suspense>
);
