# Galican Timer V2 Gateway

## HTML standalone
HTML is standalone with no external dependencies. Run on your browser and configure both timer and server IPs.

## Preparing for emulation
Run "npm i" to instal module dependencies if you want to run timer or server emulator. 

## Emulation
1. Open a command/terminal window
2. Run timer emulator with "node timer_WSS_emulator.js"

3. Open another command/terminal
4. Run server emulator with " node timer_WSS_emulator"

5. Run HTML on a browser and connect both timer and server
- timer IP: localhost:3000
- Server IP: localhost:5000

6. Whatever is writen on timer command/terminal window will be sent to websocket clients (HTML) and this will resend to server emulator and will appear on its terminal/command window

7. Idem with Server emulator.

