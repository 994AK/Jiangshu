import styled from "styled-components";

export const HomeWrapper = styled.div`
    overflow:hidden;
    width:960px;
    margin:0 auto;
`;

export const HomeLeft = styled.div`
    float:left;
    margin:30px 0 0 15px;
    width:625px;
    .banner-img{
        width:625px;
        height:270px; 
        background-image: url("//w.wallhaven.cc/full/x8/wallhaven-x88o53.jpg");
        background-size:cover;
    }    
`;

export const HomeRight = styled.div`
    float:right;
    width:240px;
`;