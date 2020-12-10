cd F:\workspace\vue\orders-vue
node F:\workspace\vue\orders-vue\build\build.js
rd /s/q F:\workspace\vue\web-static\orders-vue\
md F:\workspace\vue\web-static\orders-vue\
xcopy F:\workspace\vue\orders-vue\dist\* F:\workspace\vue\web-static\orders-vue /s /y 
pause