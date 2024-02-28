import NextAuth from 'next-auth';
import initNextAuth from '@sahil/features/auth/lib/auth';

const options = initNextAuth();

// @ts-ignore
export default NextAuth(options);
