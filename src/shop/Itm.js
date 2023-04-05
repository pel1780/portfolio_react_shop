import { useNavigate, useParams } from "react-router-dom";

import { BsCart4 } from "react-icons/bs";

const Itm = ({ shopData, cart, setCart }) => {

    const { itm } = useParams();
    const detailItm = shopData.find(it => String(it.id) === itm);
    const Go = useNavigate();

    const addCart = () => {
        const macth = cart.find(it => it.id == detailItm.id);
        let option;
        if (macth) {
            alert('장바구니에 같은 제품이 있습니다.')
            option = cart.map(it => it.id === macth.id ? { ...it, num: it.num + 1 } : it);
        }
        else {
            option = [
                ...cart,
                {
                    id: detailItm.id,
                    name: detailItm.name,
                    price: detailItm.price,
                    description: detailItm.description,
                    img: detailItm.api_featured_image,
                    num: 1,
                }
            ];
        }
        setCart(option);
        Go('/cart');
    }
    return (
        <div className="detailItm">
            {
                detailItm &&
                <figure className="inner">
                    <figure>
                        <img src={detailItm.api_featured_image} alt=""
                            onError={e => e.target.src = `${process.env.PUBLIC_URL}/image/missing_img.jpg`} />
                    </figure>
                    <div className="des_case">
                        <strong className="des_tit"> {detailItm.name}</strong>
                        <ul className="color">
                            {
                                detailItm.product_colors?.map((color, idx) => {
                                    return <li key={idx} style={{
                                        background: color.hex_value,
                                        display: "inline-block",
                                        width: 20,
                                        height: 20
                                    }}></li>
                                }).slice(0, 20)
                            }
                        </ul>
                        {detailItm.description && <p>{detailItm.description}</p>}
                        <button onClick={addCart}><strong>add cart</strong><span><BsCart4 /></span></button>
                    </div>
                </figure>
            }
        </div>
    )
}

export default Itm;