# Korean-Snack — Store Detail Page Prototype Brief

## 1) 프로젝트 목적
이 저장소는 **Next.js + Tailwind CSS** 기반의 `Store Detail Page` 프로토타입을 구현하기 위한 결과물입니다. 원본 지시 프롬프트의 핵심은 아래와 같습니다.

- 기준 시안: `image_3.png` (추후 업로드 예정)
- 우선순위: 감성/스토리텔링보다 **기능 명확성**
- 스타일 방향: **단순하고 차가운(Cold), 구조 중심, 미니멀**
- 결과물 성격: 하이파이 프로토타입 수준의 프론트엔드 UI

> 참고: 현재 `image_3.png`가 아직 업로드되지 않았으므로, 실제 시안과의 픽셀 단위 정합 검수는 이미지 제공 이후 진행해야 합니다.

---

## 2) 디자인/UX 핵심 원칙 (Simpler & Colder)

1. **Header Visuals**
   - 미니멀한 구조 중심 캐러셀
   - 차가운 색보정(저채도 + cyan/mint 톤)

2. **Identity Section**
   - 모듈형 카드 레이아웃
   - 포함 정보: 매장명, 카테고리, 평점, 주소, 설명
   - `ACTIVE EVENT` 배지는 **Cool Cyan**

3. **Event & Promotion Grid**
   - 섹션 분리: `Q3 Product Promotion`, `Daily Inventory Reduction`
   - 단순한 카드, 샤프한 cyan→mint 계열 그라디언트
   - 미니멀 아이콘 사용

4. **Visual Menu / Feed**
   - 고품질 썸네일 중심 그리드
   - 전체 화면 톤과 일관된 cold grading 적용

5. **Social Interaction Bar**
   - 하단 고정 플로팅 액션 바
   - 액션: `GIFT A PASTRY`, `SHARE STORE`, `INVITE FRIEND`
   - 블루/그린 계열의 절제된 색상

---

## 3) 컴포넌트 아키텍처

재사용 가능한 컴포넌트 중심으로 페이지를 구성합니다.

- `ColderEventCard`
  - 목적: 프로모션/이벤트 카드 표현의 일관성 유지
- `ColderProductGrid`
  - 목적: 메뉴/피드 그리드 렌더링 표준화
- `ColderSocialActionButton`
  - 목적: 하단 액션 버튼 UI/상호작용 일관화

권장 원칙:
- 단일 책임(SRP)
- UI 상태와 데이터 매핑 분리
- 스타일 토큰화(색상/간격/타이포)

---

## 4) 기술 스택

- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React

---

## 5) 구현 범위 정의 (MVP)

### In Scope
- Hero/Store Detail 단일 페이지 렌더링
- 캐러셀/아이덴티티/이벤트/메뉴/하단 액션바 UI
- 반응형(모바일 우선) 레이아웃

### Out of Scope (초기)
- 백엔드 연동/실시간 재고 API
- 인증/권한
- 결제/주문 플로우
- 고급 분석/AB 테스트

---

## 6) 품질 기준

- 시맨틱 마크업과 접근성(aria-label, 대비) 준수
- 정렬/간격/타이포의 일관성
- 색상 팔레트 warm tone 배제
- Lighthouse 기준 성능/접근성 최소 기준 설정

---

## 7) 다음 단계 (image_3 업로드 이후)

1. 시안 대비 UI 차이 리스트업
2. spacing/ratio/typography pixel-fit 조정
3. 컴포넌트 단위 스냅샷 검증
4. 최종 QA 후 Vercel 배포

---

## 8) 실행 방법

```bash
npm install
npm run dev
```

브라우저에서 `http://localhost:3000` 확인.

---

## 9) 문서 연계

- 개발 프레임/단계 확장 계획: `agent.md`

---


## 10) Vercel 배포 가이드

### 필수 설정
- Vercel 프로젝트의 **Root Directory**를 저장소 루트(`/`)로 설정
- Node.js는 Vercel 기본 최신 LTS 사용
- 환경변수는 Vercel Project Settings에서만 관리 (`.env*` 커밋 금지)

### 현재 저장소 반영 내용
- `vercel.json` 추가: Next.js 프레임워크, `npm ci` 설치, `npm run build` 빌드 명령 고정
- `next.config.mjs` 보안 헤더 추가
  - `X-Content-Type-Options: nosniff`
  - `X-Frame-Options: DENY`
  - `Referrer-Policy: strict-origin-when-cross-origin`
- `next/image` 원격 도메인 allowlist 유지 (`images.unsplash.com`)

### 배포 절차
```bash
npm ci
npm run lint
npm run build
```

- PR 생성 시 Vercel Preview 배포 확인
- `main` 머지 후 Production 배포 확인

