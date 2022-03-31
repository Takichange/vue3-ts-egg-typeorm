import { MidwayConfig, MidwayAppInfo } from '@midwayjs/core';

export default (appInfo: MidwayAppInfo) => {
  return {
    // use for cookie sign key, should change to your own and keep security
    keys: appInfo.name + '_1648637303255_7816',
    egg: {
      port: 7777,
    },
    security: {
      csrf: false,
    },
  } as MidwayConfig;
};
