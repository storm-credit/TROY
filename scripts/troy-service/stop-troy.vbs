' TROY-Dev 서비스 정지 — 무창 백그라운드 실행
' 더블클릭만으로 동작. 콘솔창 0건.
CreateObject("Wscript.Shell").Run """C:\ProgramData\TROY\nssm.exe"" stop TROY-Dev", 0, False
