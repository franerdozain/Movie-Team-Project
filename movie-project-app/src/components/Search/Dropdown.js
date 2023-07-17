export default function Dropdown() {
    const filters = [
        "Rating High to Low",
        "Rating Low to High",
        "Viewed Date New to Old",
        "Viewed Date Old to New"
    ]
    //testing dropdown title
    let dropdownTitle = ""

    return (
        <>
            <button className="btn btn-outline-secondary dropdown-toggle" data-bs-toggle="dropdown" type="button" aria-expanded="false" >
                {dropdownTitle || "Filters"}
            </button>
            <ul className="dropdown-menu">
                <li role="button" className="dropdown-item" onClick={(event) => handleCLick(event)}>Clear</li>
                {filters &&
                    filters.map((filter, index) => (
                        <li key={index} role="button" className="dropdown-item" onClick={(event) => handleCLick(event)}>{filter}</li>
                    )
                    )}
            </ul>
        </>
    )
}