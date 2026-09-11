const website = 'https://footballay.com';
const email = 'physickskim@gmail.com';

type PrivacyGroup = {
  contact?: { email: string; website: string };
  itemIntro?: string;
  items?: string[];
  paragraphs: string[];
  title?: string;
};

type PrivacyPolicy = {
  effectiveDate: string;
  introduction: string;
  notice: string;
  sections: { groups: PrivacyGroup[]; title: string }[];
  title: string;
};

export const privacyPolicy: PrivacyPolicy = {
  title: '확장프로그램 개인정보처리방침',
  effectiveDate: '2026년 9월 7일',
  introduction:
    'Footballay는 브라우저 확장 프로그램의 기능 제공에 필요한 최소한의 정보만 처리합니다. Footballay 확장 프로그램은 광고, 사용자 행동 분석 또는 브라우징 추적을 목적으로 사용자 정보를 수집하지 않습니다.',
  sections: [
    {
      title: '1. 처리하는 정보',
      groups: [
        {
          title: '브라우저에 저장되는 정보',
          paragraphs: [
            'Footballay는 사용자 설정과 최근 선택한 경기 정보를 복원하기 위해 다음과 같은 정보를 브라우저의 확장 프로그램 저장소에 저장합니다.',
            '이 정보는 사용자의 브라우저에 저장되며 Footballay의 사용자 프로필이나 분석 데이터로 별도 업로드되지 않습니다.',
          ],
          items: [
            '확장 프로그램 활성화 및 화면 표시 설정',
            '언어 및 시간대 설정',
            '최근 선택한 리그, 날짜 및 경기 정보',
          ],
        },
        {
          title: 'Footballay 서버로 전송되는 정보',
          paragraphs: [
            'Footballay는 리그, 경기, 라인업, 이벤트 및 통계 등의 정보를 제공하기 위해 사용자가 선택한 리그·경기, 날짜, 언어·시간대 등 경기 조회에 필요한 정보를 Footballay API로 전송합니다.',
          ],
        },
        {
          title: '서버 접속 정보',
          paragraphs: [
            'Footballay API 이용 과정에서 IP 주소, 요청 시각, Footballay API 요청 경로, User-Agent 등의 기술적 정보가 서버 접속 로그에 기록될 수 있습니다.',
            '이 정보는 서비스 운영, 장애 분석 및 보안을 위해 사용되며, 사용자를 지속적으로 식별하거나 행동을 추적·프로파일링하는 용도로 사용하지 않습니다.',
            'Footballay 확장 프로그램은 GPS 등 기기의 정밀 위치 정보에 접근하거나 수집하지 않습니다.',
          ],
        },
      ],
    },
    {
      title: '2. 웹사이트 접근 및 확장 프로그램 동작',
      groups: [
        {
          paragraphs: [
            'Footballay는 사용자가 축구 중계를 시청하면서 경기 정보를 함께 확인할 수 있도록 지원하는 웹사이트의 페이지 위에 Footballay 경기 정보 UI를 표시합니다.',
            '현재 지원하는 웹사이트는 다음과 같습니다.',
          ],
          items: ['Coupang Play (https://www.coupangplay.com/*)'],
        },
        {
          paragraphs: [
            '웹사이트 접근 권한은 Footballay UI를 해당 페이지에 표시하기 위해 사용됩니다.',
            'Footballay 확장 프로그램은 사용자가 지원 웹사이트에서 어떤 페이지를 보고 있는지, 어떤 콘텐츠를 시청하고 있는지 또는 어떻게 서비스를 이용하는지를 추적하지 않습니다.',
          ],
        },
        {
          paragraphs: [],
          items: [
            '방문 중인 페이지의 URL 또는 경로',
            '사용자가 시청 중인 콘텐츠',
            '페이지의 콘텐츠 또는 계정 정보',
            '사용자의 브라우징 기록',
            '다른 웹사이트의 방문 기록',
          ],
          itemIntro: '또한 다음 정보를 Footballay 서버로 수집하거나 전송하지 않습니다.',
        },
        {
          paragraphs: [
            'Footballay에서 사용하는 경기 정보는 사용자가 Footballay UI에서 직접 선택한 정보이며, 지원 웹사이트의 이용 내용과 자동으로 연결하거나 추적하지 않습니다.',
          ],
        },
      ],
    },
    {
      title: '3. 추적 및 광고',
      groups: [
        {
          paragraphs: [
            'Footballay 확장 프로그램은 광고 또는 사용자 추적을 위한 analytics, telemetry, advertising tracker 또는 browser fingerprinting 기능을 사용하지 않습니다.',
            'Footballay는 확장 프로그램 이용 정보를 광고 목적으로 사용하거나 판매하지 않으며, 광고 사업자나 데이터 브로커에게 제공하지 않습니다.',
          ],
        },
      ],
    },
    {
      title: '4. 저장 및 보존',
      groups: [
        {
          paragraphs: [
            '브라우저에 저장되는 확장 프로그램 설정과 최근 경기 정보는 기능 제공 및 사용자 설정 복원을 위해 사용되며, 사용자가 설정을 변경하거나 확장 프로그램 관련 데이터를 삭제할 때까지 브라우저에 유지될 수 있습니다.',
            'Footballay 서버에서 생성되는 접속 로그와 애플리케이션 로그는 서비스 운영, 장애 분석 및 보안을 위해 필요한 기간 동안 보관되며, 현재 최대 1개월 이내의 범위에서 관리됩니다.',
          ],
        },
      ],
    },
    {
      title: '5. 서비스 제공업체',
      groups: [
        {
          paragraphs: [
            'Footballay는 서비스 제공 및 운영을 위해 다음 인프라 제공업체를 사용합니다.',
            '이들 서비스는 Footballay 서비스를 제공하고 안정적으로 운영하기 위한 목적으로 사용됩니다.',
          ],
          items: [
            'Amazon Web Services (AWS) — Footballay API 서버 운영',
            'Grafana Cloud — 애플리케이션 로그 및 서비스 모니터링',
            'Cloudflare — DNS 서비스 및 웹사이트의 정적 자산·다운로드 파일 제공을 위한 CDN 및 스토리지 인프라',
          ],
        },
      ],
    },
    {
      title: '6. 데이터 삭제 및 문의',
      groups: [
        {
          paragraphs: [
            '브라우저에 저장된 확장 프로그램 데이터는 확장 프로그램을 제거하거나 브라우저의 확장 프로그램 관련 데이터를 삭제하여 제거할 수 있습니다.',
            'Footballay의 데이터 처리 또는 개인정보 보호와 관련한 문의는 아래 연락처로 할 수 있습니다.',
          ],
          contact: { website, email },
        },
      ],
    },
  ],
  notice:
    '본 개인정보 처리방침은 Footballay 확장 프로그램의 기능 또는 데이터 처리 방식이 변경되는 경우 이에 맞게 갱신될 수 있습니다.',
};
