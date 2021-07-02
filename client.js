var HOST = location.origin.replace(/^http/, 'ws')

const socket = new WebSocket(HOST);

socket.onopen = () => {
  console.log("Conexao aberta!");
}

socket.onmessage = ({ data }) => {
  document.getElementById("message").innerHTML = data.toString();
}