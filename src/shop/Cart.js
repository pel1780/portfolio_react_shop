import { useState } from "react";
import { Link } from "react-router-dom";

const Cart = ({ shopData, cart, setCart, sw }) => {

    const allPrice = cart.reduce((current, next) => (current) + Number(next.price * next.num), 0);
    const cartModify = (id) => {
        const newCart = cart.map(it => it.id === id ? { ...it, num: it.num + 1 } : it);
        setCart(newCart);
    }
    const cartDelete = (id) => {
        const newCart = cart.map(it => it.id === id ? { ...it, num: it.num > 1 ? it.num - 1 : it.num } : it);
        setCart(newCart);
    }

    return (
        <div className="Cart">
            <div className="inner">
                <h2>Cart</h2>
                <table>
                    <thead>
                        <tr>
                            <td>이미지</td>
                            <td>상품정보</td>
                            <td>판매가</td>
                            <td>수량</td>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.length > 0 ?
                            cart.map(it => {
                                return (
                                    <tr key={it.id}>
                                        <td className="img_case">
                                            <Link to={`/detail/${it.id}`}>
                                                <img src={it.img} alt=""
                                                    onError={e => e.target.src = `${process.env.PUBLIC_URL}/image/missing_img.jpg`} />
                                            </Link>
                                        </td>
                                        <td className="name"><Link to={`/detail/${it.id}`}>{it.name}</Link></td>
                                        <td>{parseInt((it.price * sw) * it.num).toLocaleString()}원</td>
                                        <td><span className="num">{it.num}</span>
                                            <button onClick={() => cartModify(it.id)}><span>+</span></button>
                                            <button onClick={() => cartDelete(it.id)}><span>-</span></button>
                                        </td>
                                    </tr>
                                )
                            }) : <tr className="none"><td colSpan={4}>장바구니가 비어 있습니다.</td></tr>
                        }
                    </tbody>
                </table>
                <span className="total">합계 : {parseInt(allPrice * sw).toLocaleString()}원</span>
            </div>
        </div>
    )
}

export default Cart;