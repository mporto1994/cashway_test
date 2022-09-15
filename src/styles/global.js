import {createGlobalStyle} from 'styled-components';


export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
        font-family: 'Inter', sans-serif;
        overflow: "hidden";
        scroll-behavior: inherit;

    }
    :root {
        --blue1:#1166d2;
        --blue2:#3388f2;

        --lightBlue1:#cfe8fc;
        --lightBlue2:#e3feff;



        --purple:#403CAA;
        --cream:#f3ffbd;
        --green: #70c1b3;
        --darkGreen:#247ba0;
        --lightGreen:#b2dbbf;
        --pink:#FF1654;
    }
    html{

        width: 100vw;
    }
    body{
        width:100%;
    }
    body, html{
        height: 100%;
    background-color:var(--lightBlue1);


        /* display: flex; */
        /* justify-content: center; */
        /* align-items: center; */
        margin:0;
        padding:0;
        /* max-width: 100%; */
        overflow-x: hidden;

        

    }
    body,input,button{

    }
    a {
        text-decoration: none;
    }


`





