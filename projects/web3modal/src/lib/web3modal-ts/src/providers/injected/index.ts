import { IProviderInfo } from '../../helpers';

export const FALLBACK: IProviderInfo = {
  id: 'injected',
  name: 'Web3',
  logo: new URL('../logos/web3-default.svg', import.meta.url),
  type: 'injected',
  check: 'isWeb3',
};

export const METAMASK: IProviderInfo = {
  id: 'injected',
  name: 'MetaMask',
  logo: new URL('/assets/metamask.png', import.meta.url),
  type: 'injected',
  check: 'isMetaMask',
};

export const SAFE: IProviderInfo = {
  id: 'injected',
  name: 'Safe',
  logo: new URL('../logos/safe.svg', import.meta.url),
  type: 'injected',
  check: 'isSafe',
};

export const NIFTY: IProviderInfo = {
  id: 'injected',
  name: 'Nifty',
  logo: new URL('../logos/niftyWallet.png', import.meta.url),
  type: 'injected',
  check: 'isNiftyWallet',
};

export const DAPPER: IProviderInfo = {
  id: 'injected',
  name: 'Dapper',
  logo: new URL('../logos/dapper.png', import.meta.url),
  type: 'injected',
  check: 'isDapper',
};

export const OPERA: IProviderInfo = {
  id: 'injected',
  name: 'Opera',
  logo: new URL('../logos/opera.svg', import.meta.url),
  type: 'injected',
  check: 'isOpera',
};

export const TRUST: IProviderInfo = {
  id: 'injected',
  name: 'Trust',
  logo: new URL('../logos/trust.svg', import.meta.url),
  type: 'injected',
  check: 'isTrust',
};

export const COINBASE: IProviderInfo = {
  id: 'injected',
  name: 'Coinbase',
  logo: new URL('../logos/coinbase.svg', import.meta.url),
  type: 'injected',
  check: 'isToshi',
};

export const CIPHER: IProviderInfo = {
  id: 'injected',
  name: 'Cipher',
  logo: new URL('../logos/cipher.svg', import.meta.url),
  type: 'injected',
  check: 'isCipher',
};

export const IMTOKEN: IProviderInfo = {
  id: 'injected',
  name: 'imToken',
  logo: new URL('../logos/imtoken.svg', import.meta.url),
  type: 'injected',
  check: 'isImToken',
};

export const STATUS: IProviderInfo = {
  id: 'injected',
  name: 'Status',
  logo: new URL('../logos/status.svg', import.meta.url),
  type: 'injected',
  check: 'isStatus',
};

export const TOKENARY: IProviderInfo = {
  id: 'injected',
  name: 'Tokenary',
  logo: new URL('../logos/tokenary.png', import.meta.url),
  type: 'injected',
  check: 'isTokenary',
};
