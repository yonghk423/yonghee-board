- 완성된 GIF 파일 및 배포 링크 :
  https://codestates-fe-advanced-course-rho.vercel.app
- 프로젝트 실행 방법 :
  npm run build 후 웹 브러우저를 통해 localhost:8080 로컬 서버를 실행합니다.
- 사용한 스택 목록 :
  TypeScript, HTML, styled-components, React, axios, Webpack, Loadable Components
- 구현한 기능 목록 (Software Requirement Specification)
  게시물 리스트, 게시물 상세 페이지
- 구현 방법 혹은 구현하면서 어려웠던 점 :
  구현 방법으로 HTTP 비동기 통신 라이브러리인 Axios와 React Hooks API인 useState와 useEffect를 사용하였습니다. 리액트는 부모 컴포넌트 렌더링, state , props가 변경 될 때 리렌더링이 됩니다. 따라서 데이터 변경시 리렌더링이 되려면 useState를 사용해야하며 계속 일정한 데이터를 기억하도록 해야하고 상태가 변경될 때 자동으로 관련된 리렌더링이 되게 만들고 싶으면 변수가 아닌 state에 저장해서 데이터바인딩을 해야 합니다. 또한 useEffect는 렌더링 직후 추가 작업을 설정할 수 있는 React Hooks API입니다. 따라서 렌더링 직후 useEffect를 이용한 Axios 비동기 통신을 호출하고 받아온 데이터 값을 useState를 통하여 상태 관리를 하도록 구성하였습니다.
- (가산점) 직접 작성한 Wireframe 혹은 Prototype (figma 등의 다양한 툴 활용) : figma 툴을 사용하였습니다.
  https://www.figma.com/file/DuWuG2Bc7CZxAPkXRsMbxt/%EC%99%80%EC%9D%B4%EC%96%B4-%ED%94%84%EB%A0%88%EC%9E%84?node-id=0%3A1 /
  https://www.figma.com/file/DuWuG2Bc7CZxAPkXRsMbxt/%EC%99%80%EC%9D%B4%EC%96%B4-%ED%94%84%EB%A0%88%EC%9E%84?node-id=2%3A47
- (가산점) 성능 최적화에 대해서 고민하고 개선한 방법 :
  성능을 최적화하는 방법으로 불필요한 리렌더링을 줄이고자 노력하였습니다. React.memo 사용 : React.memo를 사용하여 컴포넌트의 props가 바뀌지 않았다면, 리렌더링하지 않도록 설정하였습니다. useCallback 사용 : 리렌더링 될 때마다 새로 만들어진 함수를 사용하게 되는데 useCallback은 특정 함수를 새로 만들지 않고 재사용하고 싶을때 사용할 수 있습니다. 따라서 렌더링을 최소화하고 최적화를 할 수 있습니다. Module Bundler Webpack 사용 : 웹 애플리케이션을 구성하는 몇십, 몇백개의 자원들을 하나의 파일로 병합 및 압축 해주는 모듈 번들링을 통해 최적화를 하였습니다. Loadable Components(Code Splitting) 사용 : Loadable Components 사용하여 Code Splitting을 하였습니다. WebPack을 사용하여 압축된 app.js 컴포넌트는 246kiB에서 Code Splitting을 통하여 232kiB로 감소 시켰습니다. Code Splitting의 기준은 메인 페이지인 게시물 리스트와 게시물 상세 페이지로 나누어 Code Splitting을 하였습니다.
- (가산점) 추가 구현 사항에 대한 구현 방법과 설명 :
  pagination 구현 : 첫번째로 생각 한 것은 1부터 10까지 배열을 만들고 렌더링하는 것이었습니다. 그 다음 onClick 이벤트가 발생시 클릭한 숫자 값을 비동기 함수로 처리 하여 받아 오고, 받아온 값을 useState 상태값으로 받아오며 초기 값이 변경 되도록하였습니다. 예시를 통해 설명하면 숫자 버튼 5를 클릭시 초기 상태값인 1은 5로 바뀌며 5는 페이지 개수인 10과 곱을 합니다. 그러면 50이라는 값이 되고(indexOfLastPost), 50에서 페이지 개수인 10을 빼게 되면 40이 됩니다(indexOfFirstPost). 이 과정이 필요한 이유는 slice(n, n-1)메서드를 통해서 원하는 구간의 값만 가져오고 싶었기 때문입니다. 최종적으로 const currentPosts = postsData.slice(40, 50); 40번째부터 49번째 값을 가져올수 있으며 이값은 5페이지에 해당하는 값이 됩니다. (postsData 전체 데이터 값)
