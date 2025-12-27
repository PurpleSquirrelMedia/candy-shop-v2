import * as anchor from '@coral-xyz/anchor';
declare module '@coral-xyz/anchor' {
  export const workspace: any;
  export const Wallet: import('@coral-xyz/anchor/dist/cjs/nodewallet').default;
}
