' TROY-Dev service: STOP (silent, no console window)
' Double-click this file to stop the service.
CreateObject("Wscript.Shell").Run """C:\ProgramData\TROY\nssm.exe"" stop TROY-Dev", 0, False
