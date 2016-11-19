schtasks /create /tn "MU Robot\BC-1" /tr "node D:\dev\murobot\lib\bloodCastle.js" /sc DAILY /st 03:31
schtasks /create /tn "MU Robot\DS-1" /tr "node D:\dev\murobot\lib\devilSquare.js" /sc DAILY /st 03:46
schtasks /create /tn "MU Robot\BC-2" /tr "node D:\dev\murobot\lib\bloodCastle.js" /sc DAILY /st 04:01
schtasks /create /tn "MU Robot\DS-2" /tr "node D:\dev\murobot\lib\devilSquare.js" /sc DAILY /st 04:16
schtasks /create /tn "MU Robot\BC-3" /tr "node D:\dev\murobot\lib\bloodCastle.js" /sc DAILY /st 04:31
schtasks /create /tn "MU Robot\DS-3" /tr "node D:\dev\murobot\lib\devilSquare.js" /sc DAILY /st 04:46
schtasks /create /tn "MU Robot\BC-4" /tr "node D:\dev\murobot\lib\bloodCastle.js" /sc DAILY /st 05:01
schtasks /create /tn "MU Robot\DS-4" /tr "node D:\dev\murobot\lib\devilSquare.js" /sc DAILY /st 05:16
schtasks /create /tn "MU Robot\BC-5" /tr "node D:\dev\murobot\lib\bloodCastle.js" /sc DAILY /st 05:31
schtasks /create /tn "MU Robot\DS-5" /tr "node D:\dev\murobot\lib\devilSquare.js" /sc DAILY /st 05:46
schtasks /create /tn "MU Robot\Other" /tr D:\dev\murobot\schedule\run\other.bat /sc DAILY /st 06:00
pause