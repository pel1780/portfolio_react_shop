import { Link, useSearchParams } from "react-router-dom";

const SearchResult = ({ shopData }) => {
    const [search, setSearch] = useSearchParams();
    const r = search.get('q');
    const searchResult = shopData.filter(it => it.name.toUpperCase().includes(r.toUpperCase()) || it.description?.toUpperCase().includes(r.toUpperCase()));
    console.log(searchResult);
    return (
        <>
            <strong>
                {
                    searchResult.length === 0
                        ? <div>제품이 없습니다.</div>
                        : <div>{searchResult.length}의 제품이 있습니다.</div>
                }
            </strong>
            <ul className="list">
                {
                    searchResult.map((it, idx) => {
                        return (
                            <li key={it.id} className="itm">
                                <Link to={`/detail/${it.id}`}>
                                    <figure>
                                        <img src={it.api_featured_image} alt="" />
                                    </figure>
                                    <strong>{it.name}</strong>
                                    {it.description && <p>{it.description.substr(0, 100)}{it.description.length > 100 && '...'}</p>}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default SearchResult;