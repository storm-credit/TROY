' TROY-Dev service: RESTART (silent, no console window)
' Double-click after pulling new code to bounce the dev server.
CreateObject("Wscript.Shell").Run """C:\ProgramData\TROY\nssm.exe"" restart TROY-Dev", 0, False
