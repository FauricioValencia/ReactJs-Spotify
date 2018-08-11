import axios from 'axios';
import {TrackHandler, Client} from 'spotify-sdk';
let client = Client.instance;

client.settings={
    clientId:'8e6c4e1c713944b0becaf3d8bd3cc5f4',
    secretId:'dc95fe9c968d4060b7a7ab00796c770e',
    scopes:['user-follow-modify user-follow-read user-library-read user-top-read'],
    redirect_uti:'http://localhost:3000/'
}

export const checkSignIn=()=>{
    console.log("check");
    return (dispatch,getState)=>{
        if(sessionStorage.token){
            client.token = sessionStorage.token;
        }else if(window.location.hash.split('&')[0].split('=')[1]){
            sessionStorage.token=window.has.split('&')[0].split('=')[1];
            client.token= sessionStorage.token;
        }else{
            client.login()
            .then(url =>{
                window.location.href=url;
            });
        }
    }
}