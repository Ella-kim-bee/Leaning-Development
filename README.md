Hello, world
============
git 세 가지 상태
.git directory
working directory
- modified - staged - committed(*변경을 확정하는 일)
git add [file name] (stagig 수정된 파일 중 commit할 파일을 선택)- git reset [ ] (unstaging)- git restore --staged [ ] (unstaging)
- git commit -> a작성 esc완료 :wq(저장후나가기-*vim사용법) or git commit -m 'messege' (committed 내꺼에 팩킹해서 저장해놓은 상태)- git push
git pull(github에 있는 걸 가져오기-원격저장소에 있는 최신화-변경되어 저장된 내용)
-나만의 작업공간을 마련하려면 git branch [name] (new branch)- git branch (branch 목록)
- git branch -r(remote)
- git branch -d(del local에 있는 branch만 delete)
- git checkoout [name] (name branch로 이동 or 현재 working directory를 해당 branch로 변경)

같은 파일 다른 사람 수정 후 (push or pull 했을 때) 충돌 시, message 대로 실행 - conflict해결 - add - commit - push  

git hub pull requests
merge branch 병합
git merge [ name ]

git status 상태확인
git log 수정목록

1. cpu
- 컴퓨터에서 연산, 계산 책임짐, 뇌

2. 주기억장치(RAM, 메모리)
- 연산할 데이터를 저장해 놓고 저장 공간, 휘발성(전기 공급이 끊기면 주 기억장치에 있던 데이터 사라짐), 속도 빠름, 메인보드에 소켓 직접 연결되어있음
- 속도는 물리적 cpu와의 거리와 연관

3. 보조기억장치(디스크, ROM, 하드)
- 연산이 되고, 오랫동안(전원을 꺼도) 저장할 데이터를 담는 공간, 비휘발성, 속도는 상대적으로 느림
- 선과 선으로 연결되어있음

* call by value => value copy
* call by Refernce => 주소값을 넣어줌, 참조, object, array에 많이 사용됨=>큰 데이터 (a=2, b=a => b->a가서 값 확인->값 참조해서 보여줌)

1. private IP
- subnet 안에서 할당된 IP주소

2. public IP
- 전세계적으로 어디서든 접속할 수 있는 공식 IP
- 돈주고사는것

3. subnet : 255.255.255.255 주소를 공유기(라우터, 게이드웨이)를 통해서 192.168.0.0~255 내부에서 여러개로 나눠서 사용 

**Alias : 현업에서 종종 쓰이는 용어들

1. Admin(어드민) : 판매자 tool, 관리자 화면
2. Cumers(커머스) : 비즈니스영역, 쇼핑몰
3. 모달 : 브라우저가 아닌 어플리케이션 내부에서 뜨는 것
4. 팝업 : 브라우저 창이 하나 더 뜨는 것
5. PR (LGTM) : pull reqeust, looks good to me
6. 컴포넌트 : 기능 묶음
7. 템플릿
8. 토스트, 알림(?) : 알림
9. 푸시알림 : 어플리케이션 알람
10. 페이징 : 다량의 데이터를 몇개씩 쪼개서 해당페이지에서 필요한 만큼만 가져오는 것
11. 에디터 : ex)네이버스마트에디터
12. 인앱 웹, 웹뷰, 하이브리드 앱 : 어플리케이션 화면을 html로 구조화(인앱웹:카카오톡, 웹뷰(하이브리드앱):화면을 눌렀을때 hmtl)
13. SPA(Single Page Application) : 한 페이지에서 모든 page를 ajax로, 화면 그리는 거를 브라우저(클라이언트)에서 함
14. SSR(Server Side Rendering) : 서버에서 화면을 그려서 보내줌
15. PWA(Progressive Web App) : ex)구글 스프레드시트
16. SEO(Search Engine Optimization) : 검색엔진 최적화
17. Load, Render, Rerender(update) : sever -> load(불러옴) -> render(그림) -> rerender(다시그림)
18. DOM : document object model(html -> dom으로 parcing)
19. 단위테스트, 테스트 : 
