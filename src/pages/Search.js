import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = ({ shopData }) => {
    const navigate = useNavigate();

    const [input, setInput] = useState('');
    const [search, setSeach] = useState('');

    const searchHandler = e => {
        e.preventDefault();
        setSeach(input);
        navigate(`search/?q=${input}`)
    }

    const inputHandler = e => {
        const { value } = e.target;
        setInput(value);
    }

    const recommend = shopData.filter(it => it.description?.length > 3000);

    const [on, setOn] = useState('');
    return (
        <li>
            <button className="search" onClick={() => setOn(!on)}>Search</button>
            <div className={`search_case ${on ? 'on' : ''}`}>
                <form onSubmit={searchHandler}>
                    <input type="text" value='Search' onChange={inputHandler} />
                    <button><BsSearch /></button>
                </form>
                <span>추천 검색어</span>
                <ul>
                    {
                        recommend.slice(0, 10).map((it, idx) => <li key={idx}>
                            <Link to={`/${it.name}`}>{it.name}</Link>
                        </li>)
                    }
                </ul>
            </div>
        </li>
    )
}

export default Search;