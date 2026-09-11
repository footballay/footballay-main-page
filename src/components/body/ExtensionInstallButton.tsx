import { useDeviceSupport } from '../../hooks/useDeviceSupport';
import './ProductCta.scss';
const STORE_URL =
  'https://chromewebstore.google.com/detail/footballay/pekfndpiblaakkknfbpehmgkhgdbcajn';

interface ExtensionInstallButtonProps {
  className: string;
}

function ExtensionInstallButton({ className }: ExtensionInstallButtonProps) {
  const { isExtensionSupported } = useDeviceSupport();

  if (!isExtensionSupported) {
    return (
      <button className={`${className} product-cta--disabled`} type="button" disabled>
        Chrome 데스크탑만 지원합니다
      </button>
    );
  }

  return (
    <a className={className} href={STORE_URL} target="_blank" rel="noreferrer">
      Chrome 확장 프로그램 추가
    </a>
  );
}

export default ExtensionInstallButton;
