import io from 'socket.io-client';
let socket;
export const init = () => {
    console.log("Bağlantı bağlanıyor. ");
    socket = io('http://localhost:3001', {
        transports: ["websocket"],
    });

    socket.on("connect", () => 
        console.log("Bağlantı gerçekleşti."),
    ) 
}