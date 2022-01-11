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
