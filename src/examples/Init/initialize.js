const chainId = '17401602b201b3c45a3ad98afc6fb458f91f519bd30d1058adf6f2bed66376bc';
const decentNetworkAddresses = ['wss://stage.decentgo.com:8090'];

const decentjs_lib = window['decentjs-lib'];

decent.initialize({
    chain_id: chainId,
    decent_network_wspaths: decentNetworkAddresses
}, decentjs_lib, handleState);

function handleState(state) {
    console.log(typeof state);
    console.log(state);
    // switch (state) {
    //     case 'open':
    //         console.log('WS connection opened');
    //         break;
    //     case 'reconnect':
    //         console.log('WS reconnecting');
    //         break;
    //     case 'error':
    //         console.log('Error connecting');
    //         break;
    //     case 'closed':
    //         console.log('Error closed');
    //         break;
    //     default: 
    //         break;
    // }
}