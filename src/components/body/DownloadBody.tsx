/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchLatestYml } from '../../store/downloadSlice';
import DownloadStateButton from './DownloadStateButton';
import './DownloadBody.scss';
import { UAParser } from 'ua-parser-js';
import Beta from '@asset/warnbeta.png';
import ServerDown from '@asset/serverdown.png';
import Available from '@asset/available.png';

const EMAIL = `physickskim@gmail.com`;

function DownloadBody() {
  const dispatch = useAppDispatch();
  const { status } = useAppSelector((state) => state.download);
  const [isWindowsDesktop, setIsWindowsDesktop] = useState(false);

  useEffect(() => {
    // 1) Client Hints 우선
    const uaData = (navigator as any).userAgentData;
    if (uaData) {
      const mobile = uaData.mobile;
      const platform = uaData.platform;
      setIsWindowsDesktop(!mobile && platform === 'Windows');
    } else {
      // 2) 폴백: UAParser 사용
      const uap = new UAParser();
      const os = uap.getOS();
      const device = uap.getDevice();
      const isWindowsDesktop = os.name === 'Windows' && device.type === undefined; // 데스크탑은 undefined
      setIsWindowsDesktop(isWindowsDesktop);
    }
  }, []);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchLatestYml());
    }
  }, [dispatch, status]);

  return (
    <main className="download-page">
      <h1 className="download-title">다운로드 안내</h1>
      <p className="download-intro">사용할 제품을 선택해 주세요.</p>

      <section className="download-products" aria-label="Footballay 제품 다운로드">
        <article className="download-product-section" aria-labelledby="extension-title">
          <h2 id="extension-title">Chrome 확장 프로그램</h2>
          <p className="product-subtitle">축구 중계 볼 때 좋아요</p>
          <p className="product-description">
            중계 화면에서 라인업, 경기 이벤트와 통계를 바로 확인할 수 있습니다.
          </p>
          <span className="product-status">Chrome 웹 스토어 등록 준비 중</span>
        </article>

        <article className="download-product-section" aria-labelledby="desktop-title">
          <h2 id="desktop-title">데스크탑 앱</h2>
          <p className="product-subtitle">입중계 스트리밍에 좋아요</p>
          <p>스트리밍 캡처에 적합한 독립 오버레이 창으로 라인업과 경기 통계를 표시합니다.</p>
          <DownloadStateButton
            isWindowsDesktop={isWindowsDesktop}
            // debugState="loading" // 로딩 상태
            // debugState="failed" // 실패 상태
            // debugState="succeeded" // 성공 상태
            // debugState="unsupported" // 지원하지 않는 상태
          />
        </article>
      </section>

      <section className="common-info" aria-labelledby="common-info-title">
        <h2 id="common-info-title">이용 전 안내</h2>
        <div className="download-license">
          포함된 이미지(팀 로고, 선수 사진 등)의 저작권을 책임지지 않습니다.
          <br />본 서비스는 공식 리그나 클럽과 제휴 및 후원 관계가 없습니다.
        </div>

        <section className="download-warning" aria-label="서비스 안내">
          <div className="warning-list">
            <div className="warning-item">
              <div className="icon beta">
                <img src={Beta} alt="베타 버전 경고" />
              </div>
              <div>
                <strong className="highlight">
                  풋볼레이는 현재
                  <br />
                  베타(0.x) 버전입니다.
                </strong>
                <div>서비스가 일시 중단될 수 있습니다.</div>
              </div>
            </div>
            <div className="warning-item">
              <div className="icon server">
                <img src={ServerDown} alt="서버 다운 경고" />
              </div>
              <div>
                <strong className="highlight">베타 버전이므로 불안정할 수 있습니다.</strong>
                <div>문제 발생 시 언제든 문의해 주세요.</div>
              </div>
            </div>
            <div className="warning-item">
              <div className="icon league">
                <img src={Available} alt="지원 리그 안내" />
              </div>
              <div>
                <strong className="highlight">지원 리그/경기가 제한적입니다.</strong>
                <div>EPL 이외 기타 리그/경기는 별도 문의 바랍니다.</div>
              </div>
            </div>
          </div>
        </section>

        <section className="available-fixture-info">
          <h3>문의 방법 (Contact)</h3>
          <div className="fixture-item">
            <p>
              {`Footballay 관련 문의는 ${EMAIL} 으로 연락 부탁드립니다.`} <br />
            </p>
            <p>{`For any inquiries regarding Footballay, please contact us at ${EMAIL}.`}</p>
          </div>
        </section>
      </section>
    </main>
  );
}

export default DownloadBody;
