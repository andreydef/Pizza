import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Categories, SortPopup, PizzaLoadingBlock } from '../components';
import PizzaBlock from '../components/PizzaBlock';

import { setCategory, setSortBy } from '../redux/actions/filters';
import { fetchPizzas } from '../redux/actions/pizzas';

// initial constants of categories and sorting items
const categoryNames = ['Мясні', 'Вегетеріанські', 'Гриль', 'Гострі', 'Закриті'];
const sortItems = [
  { name: 'популярності', type: 'popular', order: 'desc' },
  { name: 'ціні', type: 'price', order: 'desc' },
  { name: 'алфавіту', type: 'name', order: 'asc' }
];

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items); // select pizza item using useSelector
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const { category, sortBy } = useSelector(({ filters }) => filters);

  // useEffect action to fetch pizzas and dispatch to Redux
  React.useEffect(() => {
    dispatch(fetchPizzas(sortBy, category));
  }, [category, sortBy]);

  // select category function wich causes dispatch
  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  // useEffect action to set sort of categories by type and dispatch to Redux
  const onSelectSortType = React.useCallback((type) => {
    dispatch(setSortBy(type));
  }, []);

  return (
    <div>
      <div className="container">
        <div className="content__top">
          <Categories
            activeCategory={category}
            onClickCategory={onSelectCategory}
            items={categoryNames}
          />
          <SortPopup
            activeSortType={sortBy.type}
            items={sortItems}
            onClickSortType={onSelectSortType}
          />
        </div>
        <h2 className="content__title">Всі піцци</h2>
        <div className="content__items">
          {isLoaded
            ? items.map((obj) => <PizzaBlock key={obj.id} isLoading={true} {...obj} />)
            : Array(12)
              .fill(0)
              .map((_, index) => <PizzaLoadingBlock key={index} />)
          }
        </div>
      </div>
    </div>
  )
}

export default Home;