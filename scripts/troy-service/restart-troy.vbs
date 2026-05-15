' TROY-Dev 서비스 재시작 — 무창 백그라운드 실행
' 더블클릭만으로 동작. 콘솔창 0건.
' 사용 예: 코드 업데이트 후 dev server 새로 띄워야 할 때.
CreateObject("Wscript.Shell").Run """C:\ProgramData\TROY\nssm.exe"" restart TROY-Dev", 0, False
