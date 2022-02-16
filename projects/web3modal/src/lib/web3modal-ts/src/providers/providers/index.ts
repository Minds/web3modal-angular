import { IProviderInfo } from '../../helpers';
// @ts-ignore
// import WalletConnectLogo from 'assets/walletconnect-circle.svg';

export * from '../injected';

export const WALLETCONNECT: IProviderInfo = {
  id: 'walletconnect',
  name: 'WalletConnect',
  logo: "",
  type: 'qrcode',
  check: 'isWalletConnect',
  package: {
    required: [['infuraId', 'rpc']],
  },
};

export const WALLETLINK: IProviderInfo = {
  id: 'walletlink',
  name: 'Coinbase',
  logo: new URL('../logos/coinbase.svg', import.meta.url),
  type: 'qrcode',
  check: 'isWalletLink',
  package: {
    required: ['infuraUrl'],
  },
};

export const PORTIS: IProviderInfo = {
  id: 'portis',
  name: 'Portis',
  logo: new URL('../logos/portis.svg', import.meta.url),
  type: 'web',
  check: 'isPortis',
  package: {
    required: ['id'],
  },
};

export const FORTMATIC: IProviderInfo = {
  id: 'fortmatic',
  name: 'Fortmatic',
  logo: new URL('../logos/fortmatic.svg', import.meta.url),
  type: 'web',
  check: 'isFortmatic',
  package: {
    required: ['key'],
  },
};

export const SQUARELINK: IProviderInfo = {
  id: 'squarelink',
  name: 'Squarelink',
  logo: new URL('../logos/squarelink.svg', import.meta.url),
  type: 'web',
  check: 'isSquarelink',
  package: {
    required: ['id'],
  },
};

export const TORUS: IProviderInfo = {
  id: 'torus',
  name: 'Torus',
  logo: new URL('../logos/torus.svg', import.meta.url),
  type: 'web',
  check: 'isTorus',
};

export const ARKANE: IProviderInfo = {
  id: 'arkane',
  name: 'Arkane',
  logo: new URL('../logos/arkane.svg', import.meta.url),
  type: 'web',
  check: 'isArkane',
  package: {
    required: ['clientId'],
  },
};

export const AUTHEREUM: IProviderInfo = {
  id: 'authereum',
  name: 'Authereum',
  logo: new URL('../logos/authereum.svg', import.meta.url),
  type: 'web',
  check: 'isAuthereum',
};

export const BURNERCONNECT: IProviderInfo = {
  id: 'burnerconnect',
  name: 'Burner Connect',
  logo: new URL('../logos/burnerwallet.png', import.meta.url),
  type: 'web',
  check: 'isBurnerProvider',
};

export const UNILOGIN: IProviderInfo = {
  id: 'unilogin',
  name: 'UniLogin',
  logo: new URL('../logos/unilogin.svg', import.meta.url),
  check: 'isUniLogin',
  type: 'web',
};

export const MEWCONNECT: IProviderInfo = {
  id: 'mewconnect',
  name: 'MEW wallet',
  logo: new URL('../logos/mewwallet.png', import.meta.url),
  type: 'qrcode',
  check: 'isMEWconnect',
  package: {
    required: [['infuraId', 'rpc']],
  },
};

export const DCENT: IProviderInfo = {
  id: 'dcentwallet',
  name: "D'CENT",
  logo: new URL('../logos/dcentwallet.png', import.meta.url),
  type: 'hardware',
  check: 'isDcentWallet',
  package: {
    required: ['rpcUrl'],
  },
};

export const BITSKI: IProviderInfo = {
  id: 'bitski',
  name: 'Bitski',
  logo: new URL('../logos/bitski.svg', import.meta.url),
  type: 'web',
  check: 'isBitski',
  package: {
    required: ['clientId', 'callbackUrl'],
  },
};
