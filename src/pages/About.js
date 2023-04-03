import React from 'react'

const About = () => {
    return (
        <div className='About'>
            <div className="inner">
                <div className="tit">
                    <span>Authentic Beauty by</span>
                    <h2>
                        <img src={`${process.env.PUBLIC_URL}/image/logo.svg`} alt="" />
                    </h2>
                    <p>어쎈틱 뷰티를 추구하는 컨템포러리 코스메틱 브랜드</p>
                </div>
                <div className="desc">
                    <em>Our Products</em>
                    <p>서울의 빛나는 모습과 동시대적 일상을 모티브로 시작된
                        자빈드서울의 여정은 스테디셀러 라인 Wink를 시작으로 Bloom,
                        그리고 Hugging까지 이어집니다.</p>
                    <ul>
                        <li>개성과 프로페셔널함을 드러내는 WINK</li>
                        <li>감정과 변화를 컬러로 표현하는 BLOOM</li>
                        <li>휴식과 일상의 균형을 포용하는 HUGGING</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About;