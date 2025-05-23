import React, {useEffect, useRef} from 'react'


const Map = () => {
    const { kakao } = window;
    const container = useRef(null);
    useEffect(()=>{
        const position = new kakao.maps.LatLng(33.450701, 126.570667);
        const options = {
            center : position,
            level : 3,
        };


        const map = new kakao.maps.Map(container, options);
    },[]);
  return (
    <div ref={container}></div>
  )
}

export default Map
