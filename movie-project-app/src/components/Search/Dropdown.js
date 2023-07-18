export default function Dropdown({setFilterDropdownTitle, filterDropdownTitle}) {
    const filters = [
        "Rating High to Low",
        "Rating Low to High",
        "Viewed Date New to Old",
        "Viewed Date Old to New"
    ]
    //testing dropdown title
    let filterDropdownTitle = ""
    const handleClick = (event) => {
        console.log(event);
        setFilterDropdownTitle(event)
    }

    return (
        <>
            <button className="btn btn-outline-secondary dropdown-toggle" data-bs-toggle="dropdown" type="button" aria-expanded="false" >
                {filterDropdownTitle || "Sort By"}
            </button>
            <ul className="dropdown-menu">
                <li role="button" className="dropdown-item" onClick={(event) => handleClick(event.target.innerText)}>Clear</li>
                {filters &&
                    filters.map((filter, index) => (
                        <li key={index} role="button" className="dropdown-item" onClick={(event) => handleClick(event.target.innerText)}>{filter}</li>
                    )
                    )}
            </ul>
        </>
    )
}