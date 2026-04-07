# agent.md

## Table of Contents
1. [Mission & Non-Goals](#1-mission--non-goals)
2. [Source-of-Truth & Inputs](#2-source-of-truth--inputs)
3. [Delivery Milestones](#3-delivery-milestones)
4. [Detailed Work Breakdown](#4-detailed-work-breakdown)
5. [UI Component Contract](#5-ui-component-contract)
6. [Design Token & Cold Theme Policy](#6-design-token--cold-theme-policy)
7. [Security & Reliability Checklist](#7-security--reliability-checklist)
8. [Testing Strategy](#8-testing-strategy)
9. [Vercel Deployment Framework](#9-vercel-deployment-framework)
10. [Definition of Done (DoD)](#10-definition-of-done-dod)
11. [Operational Playbooks](#11-operational-playbooks)
12. [Change Management & Documentation Rules](#12-change-management--documentation-rules)

---

## 1) Mission & Non-Goals

### Mission
- `image_3.png`를 최우선 기준으로, Next.js 기반의 **Store Detail Page**를 단순/차가운 미학으로 고정 구현한다.
- 기능적 명확성을 최우선으로 하며, 과도한 감성 표현을 배제한다.

### Non-Goals
- 기능 요구사항 밖의 스토리텔링 애니메이션 추가
- 백엔드 비즈니스 로직 확장
- 핵심 UI와 무관한 구조적 리팩터링

---

## 2) Source-of-Truth & Inputs

우선순위는 아래 순서를 따른다.
1. 최신 사용자 지시
2. `image_3.png` (업로드 후 시각 기준의 단일 소스)
3. 이 문서(`agent.md`)
4. 기존 코드베이스

이미지 미제공 상태에서는 임시 구현으로 진행하고, 이미지 업로드 즉시 시각 정합 단계를 수행한다.

---

## 3) Delivery Milestones

- **M0: Baseline Setup**
  - 컴포넌트 구조, 테마 토큰, 페이지 스켈레톤 정리
- **M1: Core UI Completion**
  - 캐러셀, 아이덴티티 카드, 이벤트 그리드, 메뉴 그리드, 하단 액션바 완성
- **M2: Visual Alignment**
  - `image_3.png`와 간격/색상/타이포 미세 조정
- **M3: Stability & QA**
  - 접근성/반응형/성능 검증
- **M4: Vercel Release**
  - Preview/Production 배포 파이프라인 완성

---

## 4) Detailed Work Breakdown

### 4.1 Layout
- 모바일 우선 단일 컬럼
- 안전영역 고려한 하단 플로팅 바
- 섹션 간 간격 규칙 통일

### 4.2 Visual Tone
- 저채도 이미지 처리
- cyan/mint 계열 중심 팔레트
- 카드 보더/그림자 최소화

### 4.3 Content Schema
- 매장 메타데이터 타입 정의
- 프로모션/상품 카드 타입 분리
- 하드코딩 데이터는 추후 API 치환 가능 구조 유지

### 4.4 Accessibility
- 각 섹션 aria-label 명시
- 버튼 label 의미 분명화
- 색 대비(특히 cyan 텍스트) 점검

---

## 5) UI Component Contract

### ColderEventCard
- 입력: `title`, `detail`, `metric`, `icon`
- 규칙: 카드 높이/패딩 고정, 메트릭 영역 우선 노출

### ColderProductGrid
- 입력: 상품 배열(`name`, `tag`, `image`)
- 규칙: 동일 썸네일 비율, 태그 텍스트 일관 포맷

### ColderSocialActionButton
- 입력: `label`, `icon`
- 규칙: 클릭 영역 최소 크기 보장, 레이블 축약 시에도 의미 유지

---

## 6) Design Token & Cold Theme Policy

- 색상 토큰은 semantic naming 사용 (예: `cold-base`, `cold-cyan`, `cold-mint`)
- warm 계열(hex red/orange/yellow 중심) 사용 금지
- 컴포넌트 내 임의 색상 하드코딩 최소화
- 타이포 스케일: heading/body/caption 3계층 고정

---

## 7) Security & Reliability Checklist

프론트엔드 기준 최소 보안 정책:
- 외부 이미지 URL은 신뢰 가능한 도메인만 허용
- 사용자 입력 렌더링 시 escape/검증 원칙 유지
- `dangerouslySetInnerHTML` 사용 금지(필요 시 승인 절차)
- 의존성 업데이트 시 취약점 스캔 수행

신뢰성 정책:
- 클라이언트에서 실패 가능한 비동기 로직은 명시적 fallback 제공
- 빈 데이터/누락 필드 렌더링 케이스 처리

---

## 8) Testing Strategy

### 8.1 Static Checks
- `npm run lint`
- `npm run build`

### 8.2 UI Validation
- 핵심 뷰포트(예: 390x844, 768x1024) 스냅샷
- 섹션별 시각 회귀 점검

### 8.3 Accessibility Checks
- 버튼 포커스 이동
- 텍스트 대비
- 스크린리더 라벨

---

## 9) Vercel Deployment Framework

### 9.1 Environments
- **Preview**: PR 단위 자동 배포
- **Production**: main(또는 release) 머지 시 배포

### 9.2 Pipeline
1. Install
2. Lint
3. Build
4. (옵션) 테스트
5. Deploy

### 9.3 Environment Variables
- 공개 가능한 값만 `NEXT_PUBLIC_*` 사용
- 비밀값은 Vercel Project Settings에서 관리
- `.env*` 파일 커밋 금지

### 9.4 Release Gate
- 린트/빌드 실패 시 배포 차단
- 핵심 UI 섹션 누락 시 릴리스 보류

---

## 10) Definition of Done (DoD)

- `image_3.png` 기준으로 핵심 UI 구조 일치
- 단순/차가운 톤 준수
- lint/build 통과
- Preview 배포 링크 검증
- 문서(README + agent.md) 최신화

---

## 11) Operational Playbooks

### Playbook A: image_3 업로드 직후
1. 시안-현재 화면 diff 기록
2. 우선순위 높은 불일치(레이아웃/색상/간격)부터 수정
3. 스냅샷 갱신 후 재검토

### Playbook B: 신규 핵심 UI 추가 요청
1. 요구사항을 기존 5개 핵심 섹션과 매핑
2. 기존 컴포넌트 재사용 가능성 검토
3. 불가 시 신규 컴포넌트 계약 정의 후 추가

### Playbook C: 배포 실패
1. Vercel Build Log 확인
2. 환경변수/Node 버전/의존성 잠금 확인
3. 재현 후 최소 수정으로 복구

---

## 12) Change Management & Documentation Rules

- UI 구조 변경 시 README의 "프로젝트 목적/범위" 동기화
- 배포 정책 변경 시 본 문서 9장 업데이트
- 새로운 의사결정은 ADR 형태(간단 메모)로 남기기
- 불확실한 요구사항은 추측 구현하지 말고 질문 후 진행
