import { IProviderInfo } from '../../helpers';

export * from '../injected';

export const WALLETCONNECT: IProviderInfo = {
  id: 'walletconnect',
  name: 'WalletConnect',
  logo: 'https://cdn-assets.minds.com/web3modal-assets/walletconnect-circle.svg',
  type: 'qrcode',
  check: 'isWalletConnect',
  package: {
    required: [['infuraId', 'rpc']],
  },
};

export const WALLETLINK: IProviderInfo = {
  id: 'walletlink',
  name: 'Coinbase',
  logo: 'https://cdn-assets.minds.com/web3modal-assets/coinbase.svg',
  type: 'qrcode',
  check: 'isWalletLink',
  package: {
    required: ['infuraUrl'],
  },
};

export const PORTIS: IProviderInfo = {
  id: 'portis',
  name: 'Portis',
  logo: 'https://cdn-assets.minds.com/web3modal-assets/portis.svg',
  type: 'web',
  check: 'isPortis',
  package: {
    required: ['id'],
  },
};

export const FORTMATIC: IProviderInfo = {
  id: 'fortmatic',
  name: 'Fortmatic',
  logo: 'https://cdn-assets.minds.com/web3modal-assets/fortmatic.svg',
  type: 'web',
  check: 'isFortmatic',
  package: {
    required: ['key'],
  },
};

export const SQUARELINK: IProviderInfo = {
  id: 'squarelink',
  name: 'Squarelink',
  logo: 'https://cdn-assets.minds.com/web3modal-assets/squarelink.svg',
  type: 'web',
  check: 'isSquarelink',
  package: {
    required: ['id'],
  },
};

export const TORUS: IProviderInfo = {
  id: 'torus',
  name: 'Torus',
  logo: 'https://cdn-assets.minds.com/web3modal-assets/torus.svg',
  type: 'web',
  check: 'isTorus',
};

export const ARKANE: IProviderInfo = {
  id: 'arkane',
  name: 'Arkane',
  logo: 'https://cdn-assets.minds.com/web3modal-assets/arkane.svg',
  type: 'web',
  check: 'isArkane',
  package: {
    required: ['clientId'],
  },
};

export const AUTHEREUM: IProviderInfo = {
  id: 'authereum',
  name: 'Authereum',
  logo: 'https://cdn-assets.minds.com/web3modal-assets/authereum.svg',
  type: 'web',
  check: 'isAuthereum',
};

export const BURNERCONNECT: IProviderInfo = {
  id: 'burnerconnect',
  name: 'Burner Connect',
  logo: 'https://cdn-assets.minds.com/web3modal-assets/burnerwallet.png',
  type: 'web',
  check: 'isBurnerProvider',
};

export const UNILOGIN: IProviderInfo = {
  id: 'unilogin',
  name: 'UniLogin',
  logo: 'https://cdn-assets.minds.com/web3modal-assets/unilogin.svg',
  check: 'isUniLogin',
  type: 'web',
};

export const MEWCONNECT: IProviderInfo = {
  id: 'mewconnect',
  name: 'MEW wallet',
  logo: 'https://cdn-assets.minds.com/web3modal-assets/mewwallet.png',
  type: 'qrcode',
  check: 'isMEWconnect',
  package: {
    required: [['infuraId', 'rpc']],
  },
};

export const DCENT: IProviderInfo = {
  id: 'dcentwallet',
  name: "D'CENT",
  logo: 'https://cdn-assets.minds.com/web3modal-assets/dcentwallet.png',
  type: 'hardware',
  check: 'isDcentWallet',
  package: {
    required: ['rpcUrl'],
  },
};

export const BITSKI: IProviderInfo = {
  id: 'bitski',
  name: 'Bitski',
  logo: 'https://cdn-assets.minds.com/web3modal-assets/bitski.svg',
  type: 'web',
  check: 'isBitski',
  package: {
    required: ['clientId', 'callbackUrl'],
  },
};
