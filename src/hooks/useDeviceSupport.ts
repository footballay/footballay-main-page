import { useEffect, useState } from 'react';
import { UAParser } from 'ua-parser-js';

type UserAgentData = {
  brands?: { brand: string }[];
  mobile: boolean;
  platform: string;
};

const extensionBrowsers = new Set(['Chrome']);
const extensionBrands = new Set(['Google Chrome']);

export function useDeviceSupport() {
  const [support, setSupport] = useState({ isWindowsDesktop: false, isExtensionSupported: false });

  useEffect(() => {
    const uaData = (navigator as Navigator & { userAgentData?: UserAgentData }).userAgentData;

    if (uaData) {
      setSupport({
        isWindowsDesktop: !uaData.mobile && uaData.platform === 'Windows',
        isExtensionSupported:
          !uaData.mobile && !!uaData.brands?.some(({ brand }) => extensionBrands.has(brand)),
      });
      return;
    }

    const parser = new UAParser();
    const browser = parser.getBrowser();
    const isDesktop = parser.getDevice().type === undefined;
    setSupport({
      isWindowsDesktop: isDesktop && parser.getOS().name === 'Windows',
      isExtensionSupported: isDesktop && extensionBrowsers.has(browser.name ?? ''),
    });
  }, []);

  return support;
}
