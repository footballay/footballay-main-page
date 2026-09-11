import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import lineupAndTeamStats from '@asset/desktop/mainpage-desktop-lineup-and-stats.png';
import footballayCover from '@asset/footballay_cover.png';
import extensionDemo from '@asset/extension-assets/footballay-demo-screenshot-ko.png';
import lineupFeature from '@asset/desktop/mainpage-feature-img-01-lineup.png';
import teamStatsFeature from '@asset/desktop/mainpage-feature-img-02-teamstat.png';
import playerStatsFeature from '@asset/desktop/mainpage-feature-img-03-playerstat.png';
import ExtensionInstallButton from './ExtensionInstallButton';
import './MainBody.scss';
import './ProductCta.scss';

function MainBody() {
  return (
    <main className="main-body">
      <section className="intro-section" id="intro">
        <div className="logo-intro-container">
          <img src={footballayCover} alt="Footballay Logo" className="logo-intro" />
        </div>
        <h1 className="main-title">풋볼레이</h1>
        <p className="intro-sub">
          축구 중계와 함께 라인업, 경기 이벤트와 통계를 확인할 수 있습니다.
          <br />
          확장프로그램과 데스크탑 오버레이로 사용할 수 있습니다.
          {/* 축구 경기{' '}
          <strong style={{ fontSize: '1.4rem' }}>라인업 및 팀/선수 통계 정보를 제공</strong>
          하는 무료 소프트웨어입니다.
          <br />
          라이브 스트리밍을 고려하여 설계되었으며
          <br />
          스트리밍 화면에 자연스럽게 어울리는 UI를 제공합니다. */}
        </p>
      </section>
      <section className="products-section" aria-label="Footballay 제품">
        <div className="products-grid">
          <article className="product-card">
            <div className="product-media extension-media">
              <div className="extension-image-wrap">
                <img
                  src={extensionDemo}
                  alt="축구 중계 화면 위에 Footballay Extension 경기 통계가 표시된 모습"
                  className="extension-demo-image"
                />
                <span className="extension-image-note">배경 이미지는 AI로 생성된 예시입니다</span>
              </div>
            </div>
            <div className="product-content">
              <h3>확장프로그램</h3>
              <p className="product-subtitle">축구 중계 볼 때 좋아요</p>
              <p className="product-description">
                라인업, 경기 이벤트와 통계를 중계 화면에서 바로 확인할 수 있습니다.
                <br />
                원할 때 숨기고 펼쳐서 확인할 수 있습니다.
              </p>
              <ExtensionInstallButton className="product-cta" />
            </div>
          </article>

          <article className="product-card">
            <div className="product-media desktop-media">
              <img
                src={lineupAndTeamStats}
                alt="Footballay Desktop의 라인업과 경기 통계 화면"
                className="desktop-product-image"
              />
            </div>
            <div className="product-content">
              <h3>데스크탑 오버레이</h3>
              <p className="product-subtitle">입중계 스트리밍에 좋아요</p>
              <p className="product-description">
                독립된 오버레이 창으로 라인업과 팀·선수 통계를 표시할 수 있습니다.
                <br />
                스트리밍 캡처에 적합한 데스크탑 앱 형태로 제작되었습니다.
              </p>
              <Link className="product-cta" to="/download">
                <FontAwesomeIcon icon={faDownload} />
                데스크탑 앱 다운로드
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section className="shared-features" aria-labelledby="shared-features-title">
        <div className="section-heading">
          <h2 id="shared-features-title">주요 기능</h2>
        </div>
        <div className="shared-features-grid">
          <article>
            <div className="feature-image-wrap">
              <img src={lineupFeature} alt="Footballay 라인업 화면" className="feature-image" />
            </div>
            <div className="feature-content">
              <h3>라인업</h3>
              <p>선발 선수와 포메이션, 평점, 카드, 득점 선수 등을 한눈에 확인할 수 있습니다.</p>
            </div>
          </article>
          <article>
            <div className="feature-image-wrap">
              <img
                src={teamStatsFeature}
                alt="Footballay 경기 통계 화면"
                className="feature-image"
              />
            </div>
            <div className="feature-content">
              <h3>경기 통계</h3>
              <p>점유율, 슈팅, 패스 등 주요 경기 기록을 확인할 수 있습니다.</p>
            </div>
          </article>
          <article>
            <div className="feature-image-wrap">
              <img
                src={playerStatsFeature}
                alt="Footballay 선수별 통계 화면"
                className="feature-image"
              />
            </div>
            <div className="feature-content">
              <h3>선수별 통계</h3>
              <p>선수별 평점과 세부 스탯을 확인할 수 있습니다.</p>
            </div>
          </article>
        </div>
      </section>

      <section className="league-notice" aria-label="지원 경기 안내">
        <p>현재 EPL 경기 정보를 우선 제공하며, 지원 리그와 경기는 추후 추가될 수 있습니다.</p>
      </section>
    </main>
  );
}

export default MainBody;
