import React from 'react';

function Categories({ items, onClickItem }) {

    const [activeItem, setActiveItem] = React.useState(null); // event of active items

    // select item of categories
    const onSelectItem = (index) => {
        setActiveItem(index);
    }

    return (
        <div>
            <div className="categories">
                <ul>
                    <li
                        className={activeItem === null ? 'active' : ''}
                        onClick={() => onSelectItem(null)}>Всі
                    </li>
                    {items &&
                        items.map((name, index) => (
                            <li
                                // change class active to clicked item 
                                className={activeItem === index ? 'active' : ''}
                                onClick={() => onSelectItem(index)}
                                key={`${name}_${index}`}>
                                {name}
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Categories;