DEV-HO's React BoilerPlate! v0.01
=========================

Devho-React 프로젝트 보일러플레이트는 효율적이고 구조화된 방식으로
React 애플리케이션을 빠르게 시작할 수 있도록 설계되었습니다.

* `React-Router-Dom`을 이용해 Nested-Route설정
* `Axios`로 Ajax요청 전송
* `Zustand` Store사용
 
-------

## 프로젝트는 다음과 같은 주요 디렉토리와 파일로 구성됩니다

*   **assets**: 폰트, 이미지 등의 정적 자산을 포함합니다.
*   **components**: 재사용 가능한 UI 컴포넌트들을 포함합니다. 예를 들어, `Footer`와 `Header`.
*   **pages**: 애플리케이션의 각 페이지를 나타내는 컴포넌트들이 위치합니다. 예를 들어, `Home` 페이지.
*   **service**: API 통신을 처리하는 `api.js` 파일과 예시 서비스 로직이 포함된 `example` 폴더를 포함합니다.
*   **store**: Zustand를 사용한 상태 관리 스토어가 위치합니다. 예를 들어, `userStore.js`.
*   **style**: 전역 스타일 또는 공통 스타일을 정의하는 CSS 파일이 포함됩니다.

-----
사용 방법
-----

프로젝트를 시작하려면, 먼저 필요한 종속성을 설치해야 합니다:

`npm install`

이후, 로컬 개발 서버를 시작하기 위해 다음 명령어를 실행합니다:

`npm start`

-----