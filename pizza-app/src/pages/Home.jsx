import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Categories, SortPopup, PizzaBlock } from '../components';

import { setCategory } from '../redux/actions/filters';

// initial constants of categories and sorting items
const categoryNames = ['Мясні', 'Вегетеріанські', 'Гриль', 'Гострі', 'Закриті'];
const sortItems = [
  { name: 'популярності', type: 'popular' },
  { name: 'ціні', type: 'price' },
  { name: 'алфавіту', type: 'alphabet' }
];

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items); // select pizza item using useSelector

  // select category function wich causes dispatch
  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  return (
    <div>
      <div className="container">
        <div className="content__top">
          <Categories
            onClickItem={onSelectCategory}
            items={categoryNames}
          />
          <SortPopup items={sortItems}
          />
        </div>
        <h2 className="content__title">Всі піцци</h2>
        <div className="content__items">
          {items && items.map((obj) => (
            <PizzaBlock key={obj.id} {...obj} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home;