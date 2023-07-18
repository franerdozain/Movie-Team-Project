export default function Dropdown({setSelectedFilter, setFilterDropdownTitle, filterDropdownTitle}) {

    const filters = [
        "Rating High to Low",
        "Rating Low to High",
        "Viewed Date New to Old",
        "Viewed Date Old to New"
    ]
    
    const handleClick = (selectedSortBy) => {
        if(selectedSortBy === "Clear"){
            setSelectedFilter(null)
            setFilterDropdownTitle("Sort By")
        } else {
            setFilterDropdownTitle(selectedSortBy);
            setSelectedFilter(selectedSortBy);
        }
    }

    return (
        <>
            <button className="btn btn-outline-secondary dropdown-toggle" data-bs-toggle="dropdown" type="button" aria-expanded="false" >
                {filterDropdownTitle}
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