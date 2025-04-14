@echo off
REM === Generate Debug Keystore for ThreadEngine Android ===

set KEYSTORE=debug.keystore
set ALIAS=androiddebugkey
set STOREPASS=android
set KEYPASS=android

echo Creating debug keystore...
keytool -genkey -v ^
 -keystore %KEYSTORE% ^
 -storepass %STOREPASS% ^
 -alias %ALIAS% ^
 -keypass %KEYPASS% ^
 -keyalg RSA -keysize 2048 -validity 10000 ^
 -dname "CN=ThreadEngine, OU=Mobile, O=Thread, L=City, S=State, C=US"

echo.
echo ✅ Keystore created: %KEYSTORE%
pause
